-- Billing: subscriptions + Konnect payments.

create table public.subscriptions (
  user_id uuid primary key references auth.users (id) on delete cascade,
  status text not null default 'inactive'
    check (status in ('inactive', 'active', 'past_due', 'canceled')),
  plan text not null default 'monthly' check (plan in ('monthly', 'yearly')),
  current_period_end timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.subscriptions enable row level security;

create policy "subscriptions read own"
  on public.subscriptions for select
  using (auth.uid() = user_id or public.is_admin());

create policy "subscriptions admin write"
  on public.subscriptions for all
  using (public.is_admin())
  with check (public.is_admin());

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  konnect_payment_ref text unique,
  amount_millimes integer not null,
  currency text not null default 'TND',
  plan text not null default 'monthly' check (plan in ('monthly', 'yearly')),
  status text not null default 'pending'
    check (status in ('pending', 'completed', 'failed')),
  created_at timestamptz not null default now()
);

alter table public.payments enable row level security;

create policy "payments read own"
  on public.payments for select
  using (auth.uid() = user_id or public.is_admin());

-- Edge functions write payments/subscriptions with the service role key (bypasses RLS).

create or replace function public.is_subscribed()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.subscriptions s
    where s.user_id = auth.uid()
      and s.status = 'active'
      and (s.current_period_end is null or s.current_period_end > now())
  );
$$;
