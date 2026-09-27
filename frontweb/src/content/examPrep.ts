import { lessonKey, localized as L } from './types'
import type { LessonContent } from './types'

// Exam preparation track: Tunisian bac (scientific tracks) + engineering concours.
export const examPrepLessons: Record<string, LessonContent> = {
  // Bac — Mathematics
  [lessonKey('exam-prep', 'bac', 'bac-math', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The function study is the backbone of the bac math paper: examiners expect a rigorous sequence — domain, limits at the bounds, derivative, sign table, variation table, then curve questions (asymptotes, tangents, intersections). Classic traps: forgetting to justify the domain, sign errors in f′(x), and stating a limit without naming the theorem used (comparative growth, composite limits).',
          'L\'étude de fonction est la colonne vertébrale de l\'épreuve de maths au bac : le correcteur attend une démarche rigoureuse — ensemble de définition, limites aux bornes, dérivée, tableau de signes, tableau de variations, puis les questions sur la courbe (asymptotes, tangentes, intersections). Pièges classiques : oublier de justifier l\'ensemble de définition, se tromper de signe dans f′(x), et donner une limite sans citer le théorème utilisé (croissances comparées, limite d\'une composée).',
          'دراسة الدوال هي العمود الفقري لاختبار الرياضيات في الباكالوريا: ينتظر المصحح منهجية صارمة — مجموعة التعريف، النهايات عند الحدود، الدالة المشتقة، جدول الإشارات، جدول التغيرات، ثم أسئلة المنحنى (المقارِبات، المماسات، نقاط التقاطع). الأخطاء الكلاسيكية: نسيان تبرير مجموعة التعريف، الخطأ في إشارة f′(x)، وإعطاء نهاية دون ذكر المبرهنة المستعملة (النمو المقارن، نهاية دالة مركبة).',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: let f(x) = x e⁻ˣ defined on ℝ. 1) Compute lim f(x) as x → +∞ and as x → −∞. 2) Show that f′(x) = (1 − x) e⁻ˣ and build the variation table. 3) Deduce the maximum of f on ℝ.',
          'Problème type bac : soit f(x) = x e⁻ˣ définie sur ℝ. 1) Calculer lim f(x) quand x → +∞ et quand x → −∞. 2) Montrer que f′(x) = (1 − x) e⁻ˣ et dresser le tableau de variations. 3) En déduire le maximum de f sur ℝ.',
          'مسألة على نمط الباكالوريا: لتكن f(x) = x e⁻ˣ معرّفة على ℝ. ‏1) احسب lim f(x) لما x → +∞ ولما x → −∞. ‏2) بيّن أن f′(x) = (1 − x) e⁻ˣ وأنشئ جدول التغيرات. ‏3) استنتج القيمة القصوى للدالة f على ℝ.',
        ),
        answer: L(
          '1) As x → +∞: by comparative growth, the exponential wins, so lim x e⁻ˣ = 0 (state the theorem!). As x → −∞: x → −∞ and e⁻ˣ → +∞, so f(x) → −∞. 2) Product rule: f′(x) = 1·e⁻ˣ + x·(−e⁻ˣ) = (1 − x) e⁻ˣ. Since e⁻ˣ > 0 for all x, f′(x) has the sign of 1 − x: f is increasing on ]−∞, 1] and decreasing on [1, +∞[. 3) f admits a maximum at x = 1, equal to f(1) = e⁻¹ ≈ 0.37. Bonus point on the curve: y = 0 is a horizontal asymptote at +∞.',
          '1) Quand x → +∞ : par croissances comparées, l\'exponentielle l\'emporte, donc lim x e⁻ˣ = 0 (citer le théorème !). Quand x → −∞ : x → −∞ et e⁻ˣ → +∞, donc f(x) → −∞. 2) Dérivée d\'un produit : f′(x) = 1·e⁻ˣ + x·(−e⁻ˣ) = (1 − x) e⁻ˣ. Comme e⁻ˣ > 0 pour tout x, f′(x) est du signe de 1 − x : f est croissante sur ]−∞, 1] et décroissante sur [1, +∞[. 3) f admet un maximum en x = 1, égal à f(1) = e⁻¹ ≈ 0,37. Point bonus sur la courbe : y = 0 est asymptote horizontale en +∞.',
          '1) لما x → +∞: حسب النمو المقارن تتغلب الدالة الأسية، إذن lim x e⁻ˣ = 0 (اذكر المبرهنة!). ولما x → −∞: لدينا x → −∞ و e⁻ˣ → +∞، إذن f(x) → −∞. ‏2) مشتقة جداء: f′(x) = 1·e⁻ˣ + x·(−e⁻ˣ) = (1 − x) e⁻ˣ. بما أن e⁻ˣ > 0 لكل x، فإن إشارة f′(x) هي إشارة 1 − x: الدالة f تزايدية على ‎]−∞, 1]‎ وتناقصية على ‎[1, +∞[‎. ‏3) تقبل f قيمة قصوى عند x = 1 تساوي f(1) = e⁻¹ ≈ 0.37. نقطة إضافية على المنحنى: y = 0 مقارب أفقي عند +∞.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Always start with the domain and the limits at its bounds, naming each theorem.',
            'Commence toujours par l\'ensemble de définition et les limites à ses bornes, en citant chaque théorème.',
            'ابدأ دائماً بمجموعة التعريف والنهايات عند حدودها مع ذكر كل مبرهنة.',
          ),
          L(
            'Factor f′(x) before studying its sign — never expand blindly.',
            'Factorise f′(x) avant d\'étudier son signe — ne développe jamais à l\'aveugle.',
            'حلّل f′(x) إلى جداء عوامل قبل دراسة إشارتها — لا تنشر العبارة عشوائياً.',
          ),
          L(
            'The variation table must show limits, arrows and extremum values — it is graded on its own.',
            'Le tableau de variations doit contenir les limites, les flèches et les valeurs des extremums — il est noté à part.',
            'يجب أن يتضمن جدول التغيرات النهايات والأسهم وقيم الحدود القصوى — فهو يقيَّم بنقاط مستقلة.',
          ),
          L(
            'Check asymptotes: lim (f(x) − (ax + b)) = 0 proves an oblique asymptote.',
            'Vérifie les asymptotes : lim (f(x) − (ax + b)) = 0 prouve une asymptote oblique.',
            'تحقق من المقارِبات: lim (f(x) − (ax + b)) = 0 يثبت وجود مقارب مائل.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is lim ln(x)/x as x → +∞?',
          'Que vaut lim ln(x)/x quand x → +∞ ?',
          'ما قيمة lim ln(x)/x لما x → +∞؟',
        ),
        choices: [
          {
            text: L('0', '0', '0'),
            explanation: L(
              'By comparative growth, x dominates ln(x) at +∞ — a result you must quote, not reprove.',
              'Par croissances comparées, x l\'emporte sur ln(x) en +∞ — un résultat à citer, pas à redémontrer.',
              'حسب النمو المقارن، x يتغلب على ln(x) عند +∞ — نتيجة تُذكر ولا يعاد إثباتها.',
            ),
          },
          { text: L('+∞', '+∞', '+∞') },
          { text: L('1', '1', '1') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'For f(x) = x e⁻ˣ, give the maximum value f(1) = e⁻¹ rounded to 2 decimal places.',
          'Pour f(x) = x e⁻ˣ, donne la valeur du maximum f(1) = e⁻¹ arrondie à 2 décimales.',
          'بالنسبة إلى f(x) = x e⁻ˣ، أعطِ القيمة القصوى f(1) = e⁻¹ مقرّبة إلى رقمين بعد الفاصل.',
        ),
        answer: 0.37,
        tolerance: 0.01,
        hint: L(
          'e ≈ 2.718, so compute 1/e.',
          'e ≈ 2,718, calcule donc 1/e.',
          'e ≈ 2.718، إذن احسب 1/e.',
        ),
      },
    ],
  },
  [lessonKey('exam-prep', 'bac', 'bac-math', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Sequences and integrals form a guaranteed exercise on the bac paper. For sequences, examiners test recurrence, induction proofs and arithmetic-geometric sequences via an auxiliary sequence vₙ = uₙ − ℓ. For integrals, expect integration by parts and area computations. Traps: skipping the initialization step of an induction, using a wrong common ratio, and forgetting that an area under the x-axis needs a minus sign.',
          'Les suites et les intégrales forment un exercice garanti au bac. Pour les suites, le correcteur teste la récurrence, le raisonnement par récurrence et les suites arithmético-géométriques via une suite auxiliaire vₙ = uₙ − ℓ. Pour les intégrales, attends-toi à une intégration par parties et à des calculs d\'aires. Pièges : sauter l\'initialisation d\'une récurrence, utiliser une mauvaise raison, et oublier qu\'une aire sous l\'axe des abscisses exige un signe moins.',
          'المتتاليات والتكامل يشكلان تمريناً شبه مضمون في الباكالوريا. في المتتاليات يختبر المصحح العلاقة التراجعية والبرهان بالتراجع والمتتاليات الحسابية-الهندسية عبر متتالية مساعدة vₙ = uₙ − ℓ. وفي التكامل توقع المكاملة بالتجزئة وحساب المساحات. الأخطاء الشائعة: إهمال خطوة التحقق الأولي في البرهان بالتراجع، استعمال أساس خاطئ، ونسيان أن المساحة تحت محور الفواصل تتطلب إشارة سالبة.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: let (uₙ) be defined by u₀ = 1 and uₙ₊₁ = ½uₙ + 3. 1) Let vₙ = uₙ − 6; show that (vₙ) is geometric. 2) Express uₙ as a function of n. 3) Compute lim uₙ.',
          'Problème type bac : soit (uₙ) définie par u₀ = 1 et uₙ₊₁ = ½uₙ + 3. 1) On pose vₙ = uₙ − 6 ; montrer que (vₙ) est géométrique. 2) Exprimer uₙ en fonction de n. 3) Calculer lim uₙ.',
          'مسألة على نمط الباكالوريا: لتكن (uₙ) معرّفة بـ u₀ = 1 و uₙ₊₁ = ½uₙ + 3. ‏1) نضع vₙ = uₙ − 6؛ بيّن أن (vₙ) هندسية. ‏2) عبّر عن uₙ بدلالة n. ‏3) احسب lim uₙ.',
        ),
        answer: L(
          '1) vₙ₊₁ = uₙ₊₁ − 6 = ½uₙ + 3 − 6 = ½uₙ − 3 = ½(uₙ − 6) = ½vₙ. So (vₙ) is geometric with ratio q = ½ and first term v₀ = u₀ − 6 = −5. 2) Hence vₙ = −5·(½)ⁿ, and uₙ = vₙ + 6 = 6 − 5·(½)ⁿ. 3) Since |½| < 1, (½)ⁿ → 0, so lim uₙ = 6. Method to remember: the fixed point ℓ solves ℓ = ½ℓ + 3, which is exactly why vₙ = uₙ − 6 works.',
          '1) vₙ₊₁ = uₙ₊₁ − 6 = ½uₙ + 3 − 6 = ½uₙ − 3 = ½(uₙ − 6) = ½vₙ. Donc (vₙ) est géométrique de raison q = ½ et de premier terme v₀ = u₀ − 6 = −5. 2) D\'où vₙ = −5·(½)ⁿ, et uₙ = vₙ + 6 = 6 − 5·(½)ⁿ. 3) Comme |½| < 1, (½)ⁿ → 0, donc lim uₙ = 6. Méthode à retenir : le point fixe ℓ vérifie ℓ = ½ℓ + 3, c\'est exactement pourquoi vₙ = uₙ − 6 fonctionne.',
          '1) vₙ₊₁ = uₙ₊₁ − 6 = ½uₙ + 3 − 6 = ½uₙ − 3 = ½(uₙ − 6) = ½vₙ. إذن (vₙ) هندسية أساسها q = ½ وحدها الأول v₀ = u₀ − 6 = −5. ‏2) ومنه vₙ = −5·(½)ⁿ، و uₙ = vₙ + 6 = 6 − 5·(½)ⁿ. ‏3) بما أن ‎|½| < 1‎ فإن ‎(½)ⁿ → 0‎، إذن lim uₙ = 6. طريقة يجب حفظها: النقطة الثابتة ℓ تحقق ℓ = ½ℓ + 3، وهذا بالضبط سبب نجاح اختيار vₙ = uₙ − 6.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Induction has three graded steps: initialization, heredity, conclusion — never skip one.',
            'La récurrence a trois étapes notées : initialisation, hérédité, conclusion — n\'en saute jamais une.',
            'البرهان بالتراجع له ثلاث خطوات مقيَّمة: التحقق الأولي، التوريث، الاستنتاج — لا تهمل أياً منها.',
          ),
          L(
            'For uₙ₊₁ = a·uₙ + b, subtract the fixed point ℓ = b/(1 − a) to get a geometric sequence.',
            'Pour uₙ₊₁ = a·uₙ + b, soustrais le point fixe ℓ = b/(1 − a) pour obtenir une suite géométrique.',
            'من أجل uₙ₊₁ = a·uₙ + b، اطرح النقطة الثابتة ℓ = b/(1 − a) لتحصل على متتالية هندسية.',
          ),
          L(
            'Integration by parts: ∫ u v′ = [u v] − ∫ u′ v; choose u to simplify when differentiated.',
            'Intégration par parties : ∫ u v′ = [u v] − ∫ u′ v ; choisis u pour qu\'il se simplifie en dérivant.',
            'المكاملة بالتجزئة: ∫ u v′ = [u v] − ∫ u′ v؛ اختر u بحيث تبسّطه عملية الاشتقاق.',
          ),
          L(
            'An area is always positive: split the integral where f changes sign.',
            'Une aire est toujours positive : découpe l\'intégrale là où f change de signe.',
            'المساحة موجبة دائماً: جزّئ التكامل حيث تتغير إشارة f.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'With uₙ = 6 − 5·(½)ⁿ from the worked example, what is lim uₙ?',
          'Avec uₙ = 6 − 5·(½)ⁿ de l\'exemple corrigé, que vaut lim uₙ ?',
          'انطلاقاً من uₙ = 6 − 5·(½)ⁿ في المثال المحلول، ما قيمة lim uₙ؟',
        ),
        answer: 6,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Compute ∫₀¹ x eˣ dx using integration by parts.',
          'Calcule ∫₀¹ x eˣ dx par intégration par parties.',
          'احسب ∫₀¹ x eˣ dx باستعمال المكاملة بالتجزئة.',
        ),
        choices: [
          {
            text: L('1', '1', '1'),
            explanation: L(
              'With u = x, v′ = eˣ: ∫₀¹ x eˣ dx = [x eˣ]₀¹ − ∫₀¹ eˣ dx = e − (e − 1) = 1.',
              'Avec u = x, v′ = eˣ : ∫₀¹ x eˣ dx = [x eˣ]₀¹ − ∫₀¹ eˣ dx = e − (e − 1) = 1.',
              'بوضع u = x و v′ = eˣ: ‏∫₀¹ x eˣ dx = [x eˣ]₀¹ − ∫₀¹ eˣ dx = e − (e − 1) = 1.',
            ),
          },
          { text: L('e − 1', 'e − 1', 'e − 1') },
          { text: L('e', 'e', 'e') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'bac', 'bac-math', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Complex numbers appear every year on the bac: algebraic form, module and argument, exponential form, De Moivre, and the geometric reading (rotations, sets of points). Examiners reward clean conversions between forms. Traps: giving an argument in the wrong quadrant, forgetting the +2kπ in equation solving, and confusing |z − a| = r (circle) with |z − a| = |z − b| (perpendicular bisector).',
          'Les nombres complexes tombent chaque année au bac : forme algébrique, module et argument, forme exponentielle, formule de Moivre, et la lecture géométrique (rotations, ensembles de points). Le correcteur récompense les conversions propres entre les formes. Pièges : donner un argument dans le mauvais quadrant, oublier le +2kπ dans la résolution d\'équations, et confondre |z − a| = r (cercle) avec |z − a| = |z − b| (médiatrice).',
          'الأعداد العقدية تَرِد كل سنة في الباكالوريا: الشكل الجبري، الطويلة والعمدة، الشكل الأسي، دستور موافر، والقراءة الهندسية (الدورانات ومجموعات النقاط). يكافئ المصحح التحويلات السليمة بين الأشكال. الأخطاء: إعطاء عمدة في الربع الخاطئ، نسيان ‎+2kπ‎ عند حل المعادلات، والخلط بين ‎|z − a| = r‎ (دائرة) و ‎|z − a| = |z − b|‎ (محور قطعة مستقيمة).',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: let z = 1 + i√3. 1) Compute the module and an argument of z. 2) Write z in exponential form. 3) Deduce z⁶.',
          'Problème type bac : soit z = 1 + i√3. 1) Calculer le module et un argument de z. 2) Écrire z sous forme exponentielle. 3) En déduire z⁶.',
          'مسألة على نمط الباكالوريا: ليكن z = 1 + i√3. ‏1) احسب طويلة z وعمدة له. ‏2) اكتب z على الشكل الأسي. ‏3) استنتج z⁶.',
        ),
        answer: L(
          '1) |z| = √(1² + (√3)²) = √4 = 2. For the argument θ: cos θ = 1/2 and sin θ = √3/2, both positive, so θ = π/3 (first quadrant — always check both cos and sin). 2) Therefore z = 2e^(iπ/3). 3) By De Moivre: z⁶ = 2⁶ e^(i·6·π/3) = 64 e^(i2π) = 64. The exponential form turns a painful expansion into one line — that is the whole point of the question.',
          '1) |z| = √(1² + (√3)²) = √4 = 2. Pour l\'argument θ : cos θ = 1/2 et sin θ = √3/2, tous deux positifs, donc θ = π/3 (premier quadrant — vérifie toujours cos et sin). 2) Donc z = 2e^(iπ/3). 3) Par la formule de Moivre : z⁶ = 2⁶ e^(i·6·π/3) = 64 e^(i2π) = 64. La forme exponentielle transforme un développement pénible en une ligne — c\'est tout l\'intérêt de la question.',
          '1) ‏|z| = √(1² + (√3)²) = √4 = 2. لحساب العمدة θ: لدينا cos θ = 1/2 و sin θ = √3/2 وكلاهما موجب، إذن θ = π/3 (الربع الأول — تحقق دائماً من cos و sin معاً). ‏2) إذن z = 2e^(iπ/3). ‏3) حسب دستور موافر: z⁶ = 2⁶ e^(i·6·π/3) = 64 e^(i2π) = 64. الشكل الأسي يحوّل نشراً مرهقاً إلى سطر واحد — وهذا هو الهدف من السؤال.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Module first: |z| = √(a² + b²); then solve cos θ = a/|z| and sin θ = b/|z| together.',
            'Le module d\'abord : |z| = √(a² + b²) ; puis résous cos θ = a/|z| et sin θ = b/|z| ensemble.',
            'الطويلة أولاً: ‎|z| = √(a² + b²)‎؛ ثم حل cos θ = a/|z| و sin θ = b/|z| معاً.',
          ),
          L(
            'Powers and products: switch to exponential form; sums: stay in algebraic form.',
            'Puissances et produits : passe à la forme exponentielle ; sommes : reste en forme algébrique.',
            'القوى والجداءات: انتقل إلى الشكل الأسي؛ أما المجاميع فابقَ في الشكل الجبري.',
          ),
          L(
            'Geometric reading: |z − a| is the distance to point A; arg((z − a)/(z − b)) is an angle.',
            'Lecture géométrique : |z − a| est la distance au point A ; arg((z − a)/(z − b)) est un angle.',
            'القراءة الهندسية: ‎|z − a|‎ هي المسافة إلى النقطة A؛ و arg((z − a)/(z − b)) زاوية.',
          ),
          L(
            'Never forget +2kπ when solving for an argument, then select the values in the requested interval.',
            'N\'oublie jamais +2kπ en résolvant pour un argument, puis sélectionne les valeurs dans l\'intervalle demandé.',
            'لا تنسَ أبداً ‎+2kπ‎ عند الحل عن العمدة، ثم اختر القيم الواقعة في المجال المطلوب.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is the module of z = 3 + 4i?',
          'Quel est le module de z = 3 + 4i ?',
          'ما طويلة العدد z = 3 + 4i؟',
        ),
        choices: [
          {
            text: L('5', '5', '5'),
            explanation: L(
              '|z| = √(3² + 4²) = √25 = 5 — the classic 3-4-5 triangle.',
              '|z| = √(3² + 4²) = √25 = 5 — le triangle 3-4-5 classique.',
              '‏|z| = √(3² + 4²) = √25 = 5 — المثلث الشهير 3-4-5.',
            ),
          },
          { text: L('7', '7', '7') },
          { text: L('25', '25', '25') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Compute (1 + i)⁸ using the exponential form (the result is a real number).',
          'Calcule (1 + i)⁸ en utilisant la forme exponentielle (le résultat est un nombre réel).',
          'احسب ‎(1 + i)⁸‎ باستعمال الشكل الأسي (النتيجة عدد حقيقي).',
        ),
        answer: 16,
        hint: L(
          '1 + i = √2 e^(iπ/4), so (1 + i)⁸ = (√2)⁸ e^(i2π).',
          '1 + i = √2 e^(iπ/4), donc (1 + i)⁸ = (√2)⁸ e^(i2π).',
          '‏1 + i = √2 e^(iπ/4)، إذن ‎(1 + i)⁸ = (√2)⁸ e^(i2π)‎.',
        ),
      },
    ],
  },

  // Bac — Physics
  [lessonKey('exam-prep', 'bac', 'bac-physics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Mechanics problems on the bac revolve around Newton\'s second law applied to the centre of inertia: inclined planes, projectile motion, and motion with friction. Examiners expect an explicit system, a stated reference frame, a force inventory, then a clean projection on well-chosen axes. Traps: a sign error when projecting, forgetting a force (normal reaction, friction), and mixing degrees with radians or grams with kilograms.',
          'Les problèmes de mécanique au bac tournent autour du théorème du centre d\'inertie : plans inclinés, mouvement d\'un projectile, mouvement avec frottements. Le correcteur attend un système explicite, un référentiel précisé, un bilan des forces, puis une projection propre sur des axes bien choisis. Pièges : une erreur de signe à la projection, une force oubliée (réaction normale, frottements), et le mélange degrés/radians ou grammes/kilogrammes.',
          'مسائل الميكانيك في الباكالوريا تدور حول مبرهنة مركز العطالة (القانون الثاني لنيوتن): المستوى المائل، حركة القذيفة، والحركة مع الاحتكاك. ينتظر المصحح تحديد الجملة بوضوح، وذكر المعلم المرجعي، وجرد القوى، ثم إسقاطاً سليماً على محاور مختارة بعناية. الأخطاء: خطأ في الإشارة عند الإسقاط، نسيان قوة (رد الفعل الناظمي، الاحتكاك)، والخلط بين الدرجات والراديان أو الغرامات والكيلوغرامات.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: a ball is launched from the ground with speed v₀ = 20 m/s at an angle α = 30° above the horizontal. Air resistance is neglected and g = 10 m/s². 1) Establish the equations of motion. 2) Find the total flight time. 3) Compute the horizontal range.',
          'Problème type bac : une balle est lancée du sol avec une vitesse v₀ = 20 m/s sous un angle α = 30° par rapport à l\'horizontale. On néglige les frottements de l\'air et g = 10 m/s². 1) Établir les équations horaires du mouvement. 2) Déterminer la durée totale du vol. 3) Calculer la portée horizontale.',
          'مسألة على نمط الباكالوريا: تُقذف كرة من سطح الأرض بسرعة v₀ = 20 m/s وبزاوية α = 30° بالنسبة إلى الأفق. نهمل مقاومة الهواء ونأخذ g = 10 m/s². ‏1) أوجد المعادلات الزمنية للحركة. ‏2) عيّن مدة التحليق الكلية. ‏3) احسب المدى الأفقي.',
        ),
        answer: L(
          '1) System: the ball; frame: terrestrial, assumed Galilean; only force: weight. Newton\'s second law gives a = g downward, so aₓ = 0 and a_y = −g. Integrating twice: x(t) = v₀ cos α · t and y(t) = −½gt² + v₀ sin α · t. 2) The ball lands when y = 0 (t ≠ 0): t = 2v₀ sin α / g = 2 × 20 × 0.5 / 10 = 2.0 s. 3) Range: x(2) = v₀ cos α × t = 20 × (√3/2) × 2 ≈ 34.6 m. Always finish with a plausibility check: about 35 m for a ball at 72 km/h is reasonable.',
          '1) Système : la balle ; référentiel : terrestre, supposé galiléen ; seule force : le poids. Le théorème du centre d\'inertie donne a = g vers le bas, donc aₓ = 0 et a_y = −g. En intégrant deux fois : x(t) = v₀ cos α · t et y(t) = −½gt² + v₀ sin α · t. 2) La balle retombe quand y = 0 (t ≠ 0) : t = 2v₀ sin α / g = 2 × 20 × 0,5 / 10 = 2,0 s. 3) Portée : x(2) = v₀ cos α × t = 20 × (√3/2) × 2 ≈ 34,6 m. Termine toujours par un contrôle de vraisemblance : environ 35 m pour une balle à 72 km/h, c\'est raisonnable.',
          '1) الجملة: الكرة؛ المعلم: أرضي نعتبره غاليلياً؛ القوة الوحيدة: الثقل. تعطي مبرهنة مركز العطالة a = g نحو الأسفل، إذن aₓ = 0 و a_y = −g. بالمكاملة مرتين: x(t) = v₀ cos α · t و y(t) = −½gt² + v₀ sin α · t. ‏2) تسقط الكرة لما y = 0 (مع t ≠ 0): ‏t = 2v₀ sin α / g = 2 × 20 × 0.5 / 10 = 2.0 s. ‏3) المدى: x(2) = v₀ cos α × t = 20 × (√3/2) × 2 ≈ 34.6 m. أنهِ دائماً بفحص المعقولية: نحو 35 متراً لكرة سرعتها 72 km/h نتيجة منطقية.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'State the system, the frame (assumed Galilean) and the force inventory before any equation.',
            'Précise le système, le référentiel (supposé galiléen) et le bilan des forces avant toute équation.',
            'حدّد الجملة والمعلم (المفترض غاليلياً) وجرد القوى قبل كتابة أي معادلة.',
          ),
          L(
            'Choose axes along the motion: along the incline, or horizontal/vertical for a projectile.',
            'Choisis les axes selon le mouvement : le long du plan incliné, ou horizontal/vertical pour un projectile.',
            'اختر المحاور وفق الحركة: على امتداد المستوى المائل، أو أفقي/عمودي للقذيفة.',
          ),
          L(
            'Project Newton\'s second law on each axis separately and keep track of every sign.',
            'Projette le théorème du centre d\'inertie sur chaque axe séparément en surveillant chaque signe.',
            'أسقط القانون الثاني لنيوتن على كل محور على حدة وراقب كل إشارة.',
          ),
          L(
            'Convert everything to SI units before computing, and check the order of magnitude at the end.',
            'Convertis tout en unités SI avant de calculer, et vérifie l\'ordre de grandeur à la fin.',
            'حوّل كل المقادير إلى الوحدات الدولية قبل الحساب، وتحقق من رتبة المقدار في النهاية.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A solid slides without friction on a plane inclined at 30°. With g = 10 m/s², what is its acceleration a = g sin 30° in m/s²?',
          'Un solide glisse sans frottement sur un plan incliné à 30°. Avec g = 10 m/s², quelle est son accélération a = g sin 30° en m/s² ?',
          'ينزلق جسم صلب دون احتكاك على مستوى مائل بزاوية 30°. إذا كان g = 10 m/s²، فما تسارعه a = g sin 30° بوحدة m/s²؟',
        ),
        answer: 5,
        unit: 'm/s²',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'At the highest point of a projectile\'s trajectory, the velocity vector is…',
          'Au sommet de la trajectoire d\'un projectile, le vecteur vitesse est…',
          'في أعلى نقطة من مسار القذيفة، يكون شعاع السرعة…',
        ),
        choices: [
          {
            text: L(
              'Horizontal and non-zero',
              'Horizontal et non nul',
              'أفقياً وغير معدوم',
            ),
            explanation: L(
              'Only the vertical component vanishes; vₓ = v₀ cos α stays constant throughout the flight.',
              'Seule la composante verticale s\'annule ; vₓ = v₀ cos α reste constante pendant tout le vol.',
              'المركبة العمودية وحدها تنعدم؛ بينما تبقى vₓ = v₀ cos α ثابتة طوال التحليق.',
            ),
          },
          { text: L('Zero', 'Nul', 'معدوماً') },
          { text: L('Vertical', 'Vertical', 'عمودياً') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'bac', 'bac-physics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The electricity exercise on the bac tests the RC dipole (charge and discharge), the RL dipole, and free oscillations in an RLC circuit. Examiners want the differential equation established from the loop law, the time constant identified, and curves read correctly. Traps: misreading τ from the tangent at the origin, wrong unit conversions (µF, ms), and swapping the charging and discharging expressions of uC(t).',
          'L\'exercice d\'électricité au bac teste le dipôle RC (charge et décharge), le dipôle RL, et les oscillations libres du circuit RLC. Le correcteur veut l\'équation différentielle établie à partir de la loi des mailles, la constante de temps identifiée, et une lecture correcte des courbes. Pièges : mal lire τ avec la tangente à l\'origine, se tromper dans les conversions (µF, ms), et confondre les expressions de uC(t) en charge et en décharge.',
          'تمرين الكهرباء في الباكالوريا يختبر ثنائي القطب RC (الشحن والتفريغ)، وثنائي القطب RL، والتذبذبات الحرة في دارة RLC. يريد المصحح إقامة المعادلة التفاضلية انطلاقاً من قانون العُرى، وتحديد ثابت الزمن، وقراءة صحيحة للمنحنيات. الأخطاء: قراءة خاطئة لـ τ عبر المماس عند المبدأ، أخطاء تحويل الوحدات (µF، ms)، والخلط بين عبارتي uC(t) في الشحن والتفريغ.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: a capacitor C = 10 µF is charged through R = 1 kΩ by a generator E = 6 V. 1) Establish the differential equation for uC(t). 2) Verify that uC(t) = E(1 − e^(−t/τ)) with τ = RC is a solution and compute τ. 3) What is uC at t = τ and in steady state?',
          'Problème type bac : un condensateur C = 10 µF se charge à travers R = 1 kΩ sous un générateur E = 6 V. 1) Établir l\'équation différentielle vérifiée par uC(t). 2) Vérifier que uC(t) = E(1 − e^(−t/τ)) avec τ = RC est solution et calculer τ. 3) Que vaut uC à t = τ et en régime permanent ?',
          'مسألة على نمط الباكالوريا: مكثّف سعته C = 10 µF يُشحن عبر ناقل أومي R = 1 kΩ بواسطة مولّد E = 6 V. ‏1) أوجد المعادلة التفاضلية التي يحققها uC(t). ‏2) تحقق أن uC(t) = E(1 − e^(−t/τ)) حيث τ = RC حلٌّ لها واحسب τ. ‏3) ما قيمة uC عند t = τ وفي النظام الدائم؟',
        ),
        answer: L(
          '1) Loop law: E = uR + uC = Ri + uC, and i = C·duC/dt, so RC·duC/dt + uC = E. 2) Substituting uC = E(1 − e^(−t/τ)): duC/dt = (E/τ)e^(−t/τ), so RC·(E/τ)e^(−t/τ) + E − E e^(−t/τ) = E when τ = RC — verified. Numerically τ = RC = 10³ × 10×10⁻⁶ = 10⁻² s = 10 ms. 3) At t = τ: uC = E(1 − e⁻¹) ≈ 0.63 × 6 ≈ 3.8 V — the famous 63% used to read τ on a curve. In steady state (t → ∞): uC = E = 6 V and the current vanishes.',
          '1) Loi des mailles : E = uR + uC = Ri + uC, et i = C·duC/dt, donc RC·duC/dt + uC = E. 2) En remplaçant uC = E(1 − e^(−t/τ)) : duC/dt = (E/τ)e^(−t/τ), donc RC·(E/τ)e^(−t/τ) + E − E e^(−t/τ) = E quand τ = RC — vérifié. Numériquement τ = RC = 10³ × 10×10⁻⁶ = 10⁻² s = 10 ms. 3) À t = τ : uC = E(1 − e⁻¹) ≈ 0,63 × 6 ≈ 3,8 V — les fameux 63 % qui servent à lire τ sur une courbe. En régime permanent (t → ∞) : uC = E = 6 V et le courant s\'annule.',
          '1) قانون العُرى: E = uR + uC = Ri + uC، و i = C·duC/dt، إذن RC·duC/dt + uC = E. ‏2) بتعويض uC = E(1 − e^(−t/τ)): لدينا duC/dt = (E/τ)e^(−t/τ)، فنجد RC·(E/τ)e^(−t/τ) + E − E e^(−t/τ) = E لما τ = RC — تم التحقق. عددياً τ = RC = 10³ × 10×10⁻⁶ = 10⁻² s = 10 ms. ‏3) عند t = τ: ‏uC = E(1 − e⁻¹) ≈ 0.63 × 6 ≈ 3.8 V — نسبة 63% الشهيرة المستعملة لقراءة τ من المنحنى. وفي النظام الدائم (t → ∞): ‏uC = E = 6 V وينعدم التيار.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Convert units before computing τ: kΩ × µF gives ms directly.',
            'Convertis les unités avant de calculer τ : kΩ × µF donne directement des ms.',
            'حوّل الوحدات قبل حساب τ: ‏kΩ × µF تعطي ms مباشرة.',
          ),
          L(
            'Read τ on a curve two ways: the tangent at the origin, or 63% of the final value.',
            'Lis τ sur une courbe de deux façons : la tangente à l\'origine, ou 63 % de la valeur finale.',
            'اقرأ τ من المنحنى بطريقتين: المماس عند المبدأ، أو 63% من القيمة النهائية.',
          ),
          L(
            'Charging: uC = E(1 − e^(−t/τ)); discharging: uC = E e^(−t/τ) — do not swap them.',
            'Charge : uC = E(1 − e^(−t/τ)) ; décharge : uC = E e^(−t/τ) — ne les confonds pas.',
            'الشحن: uC = E(1 − e^(−t/τ))؛ التفريغ: uC = E e^(−t/τ) — لا تخلط بينهما.',
          ),
          L(
            'For RLC: total energy E = ½C·uC² + ½L·i² decreases through the resistor (damping).',
            'Pour RLC : l\'énergie totale E = ½C·uC² + ½L·i² diminue à cause de la résistance (amortissement).',
            'في دارة RLC: الطاقة الكلية E = ½C·uC² + ½L·i² تتناقص بسبب المقاومة (التخامد).',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Compute the time constant τ = RC for R = 2 kΩ and C = 5 µF. Give the answer in ms.',
          'Calcule la constante de temps τ = RC pour R = 2 kΩ et C = 5 µF. Donne le résultat en ms.',
          'احسب ثابت الزمن τ = RC من أجل R = 2 kΩ و C = 5 µF. أعطِ النتيجة بوحدة ms.',
        ),
        answer: 10,
        unit: 'ms',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'The proper period of free oscillations in an LC circuit is…',
          'La période propre des oscillations libres d\'un circuit LC est…',
          'الدور الخاص للتذبذبات الحرة في دارة LC هو…',
        ),
        choices: [
          {
            text: L('T₀ = 2π√(LC)', 'T₀ = 2π√(LC)', 'T₀ = 2π√(LC)'),
            explanation: L(
              'From the equation d²uC/dt² + uC/(LC) = 0, ω₀ = 1/√(LC), hence T₀ = 2π√(LC).',
              'De l\'équation d²uC/dt² + uC/(LC) = 0, ω₀ = 1/√(LC), d\'où T₀ = 2π√(LC).',
              'من المعادلة d²uC/dt² + uC/(LC) = 0 نجد ω₀ = 1/√(LC)، ومنه T₀ = 2π√(LC).',
            ),
          },
          { text: L('T₀ = 2π√(L/C)', 'T₀ = 2π√(L/C)', 'T₀ = 2π√(L/C)') },
          { text: L('T₀ = √(LC)/2π', 'T₀ = √(LC)/2π', 'T₀ = √(LC)/2π') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'bac', 'bac-physics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Waves and nuclear physics close the bac physics paper. For waves: propagation speed, wavelength λ = v·T, and diffraction. For nuclear physics: the decay law N(t) = N₀ e^(−λt), half-life, activity, and mass–energy balance. Traps: confusing period T with half-life T (write t₁/₂ to be safe), forgetting ln 2 in t₁/₂ = ln 2/λ, and balancing nuclear equations without checking both mass number A and charge number Z.',
          'Les ondes et la physique nucléaire clôturent l\'épreuve de physique au bac. Pour les ondes : vitesse de propagation, longueur d\'onde λ = v·T, et diffraction. Pour le nucléaire : la loi de décroissance N(t) = N₀ e^(−λt), la demi-vie, l\'activité, et le bilan masse–énergie. Pièges : confondre la période T et la demi-vie (écris t₁/₂ par prudence), oublier ln 2 dans t₁/₂ = ln 2/λ, et équilibrer une équation nucléaire sans vérifier à la fois le nombre de masse A et le nombre de charge Z.',
          'الموجات والفيزياء النووية تختمان اختبار الفيزياء في الباكالوريا. في الموجات: سرعة الانتشار، طول الموجة λ = v·T، والانعراج. وفي النووية: قانون التناقص الإشعاعي N(t) = N₀ e^(−λt)، نصف العمر، النشاط الإشعاعي، وحصيلة الكتلة والطاقة. الأخطاء: الخلط بين الدور T ونصف العمر (اكتب t₁/₂ احتياطاً)، نسيان ln 2 في t₁/₂ = ln 2/λ، وموازنة معادلة نووية دون التحقق من عدد الكتلة A وعدد الشحنة Z معاً.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: iodine-131 has a half-life t₁/₂ = 8 days. A sample initially contains N₀ nuclei. 1) Give the decay law and express the decay constant λ. 2) What fraction of the sample remains after 24 days? 3) Express that fraction as a percentage.',
          'Problème type bac : l\'iode 131 a une demi-vie t₁/₂ = 8 jours. Un échantillon contient initialement N₀ noyaux. 1) Donner la loi de décroissance et exprimer la constante radioactive λ. 2) Quelle fraction de l\'échantillon reste-t-il après 24 jours ? 3) Exprimer cette fraction en pourcentage.',
          'مسألة على نمط الباكالوريا: نصف عمر اليود 131 هو t₁/₂ = 8 أيام. تحتوي عينة في البداية على N₀ نواة. ‏1) أعطِ قانون التناقص وعبّر عن الثابت الإشعاعي λ. ‏2) ما الكسر المتبقي من العينة بعد 24 يوماً؟ ‏3) عبّر عن هذا الكسر بنسبة مئوية.',
        ),
        answer: L(
          '1) N(t) = N₀ e^(−λt) with λ = ln 2 / t₁/₂ — this relation comes from N(t₁/₂) = N₀/2. 2) 24 days = 3 half-lives, so the sample is halved three times: N/N₀ = (1/2)³ = 1/8. Faster than plugging into the exponential — counting half-lives is the exam reflex when the duration is a multiple of t₁/₂. 3) 1/8 = 0.125, so 12.5% of the initial nuclei remain (87.5% have decayed — read the question carefully to know which one is asked).',
          '1) N(t) = N₀ e^(−λt) avec λ = ln 2 / t₁/₂ — cette relation vient de N(t₁/₂) = N₀/2. 2) 24 jours = 3 demi-vies, donc l\'échantillon est divisé par 2 trois fois : N/N₀ = (1/2)³ = 1/8. Plus rapide que l\'exponentielle — compter les demi-vies est le réflexe d\'examen quand la durée est un multiple de t₁/₂. 3) 1/8 = 0,125, donc 12,5 % des noyaux initiaux restent (87,5 % se sont désintégrés — lis bien la question pour savoir lequel est demandé).',
          '1) ‏N(t) = N₀ e^(−λt) حيث λ = ln 2 / t₁/₂ — تنتج هذه العلاقة من N(t₁/₂) = N₀/2. ‏2) ‏24 يوماً = 3 أنصاف عمر، إذن تُقسم العينة على 2 ثلاث مرات: N/N₀ = (1/2)³ = 1/8. أسرع من التعويض في الأسية — عدُّ أنصاف العمر هو رد الفعل الامتحاني عندما تكون المدة مضاعفاً لـ t₁/₂. ‏3) ‏1/8 = 0.125، أي يبقى 12.5% من الأنوية الأولية (وتفكك 87.5% — اقرأ السؤال جيداً لتعرف أيهما مطلوب).',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Wave toolbox: v = λ/T = λ·f; diffraction is noticeable when the slit width is close to λ.',
            'Boîte à outils ondes : v = λ/T = λ·f ; la diffraction est notable quand la largeur de la fente est proche de λ.',
            'عدة الموجات: v = λ/T = λ·f؛ ويكون الانعراج ملحوظاً عندما يقارب عرض الشق قيمة λ.',
          ),
          L(
            'Decay toolbox: N(t) = N₀ e^(−λt), t₁/₂ = ln 2/λ, activity A = λN in becquerels.',
            'Boîte à outils décroissance : N(t) = N₀ e^(−λt), t₁/₂ = ln 2/λ, activité A = λN en becquerels.',
            'عدة التناقص: N(t) = N₀ e^(−λt)، ‏t₁/₂ = ln 2/λ، النشاط A = λN بالبيكريل.',
          ),
          L(
            'If the duration is n half-lives, the remaining fraction is (1/2)ⁿ — no calculator needed.',
            'Si la durée vaut n demi-vies, la fraction restante est (1/2)ⁿ — pas besoin de calculatrice.',
            'إذا كانت المدة n من أنصاف العمر، فالكسر المتبقي هو (1/2)ⁿ — دون حاجة إلى آلة حاسبة.',
          ),
          L(
            'In every nuclear equation, check conservation of A (mass number) and Z (charge number).',
            'Dans toute équation nucléaire, vérifie la conservation de A (nombre de masse) et de Z (nombre de charge).',
            'في كل معادلة نووية تحقق من انحفاظ A (عدد الكتلة) و Z (عدد الشحنة).',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A sound wave has wavelength λ = 0.5 m and frequency f = 680 Hz. Compute its speed v = λ·f in m/s.',
          'Une onde sonore a une longueur d\'onde λ = 0,5 m et une fréquence f = 680 Hz. Calcule sa vitesse v = λ·f en m/s.',
          'موجة صوتية طولها الموجي λ = 0.5 m وترددها f = 680 Hz. احسب سرعتها v = λ·f بوحدة m/s.',
        ),
        answer: 340,
        unit: 'm/s',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'After two half-lives, the fraction of radioactive nuclei remaining is…',
          'Après deux demi-vies, la fraction de noyaux radioactifs restants est…',
          'بعد نصفي عمر، يكون كسر الأنوية المشعة المتبقية…',
        ),
        choices: [
          {
            text: L('25%', '25 %', '25%'),
            explanation: L(
              'Each half-life divides the count by 2: (1/2)² = 1/4 = 25%.',
              'Chaque demi-vie divise le nombre par 2 : (1/2)² = 1/4 = 25 %.',
              'كل نصف عمر يقسم العدد على 2: ‏(1/2)² = 1/4 = 25%.',
            ),
          },
          { text: L('50%', '50 %', '50%') },
          { text: L('0%', '0 %', '0%') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Bac — Chemistry
  [lessonKey('exam-prep', 'bac', 'bac-chemistry', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Kinetics and chemical equilibrium open the bac chemistry paper. You must master the progress table (tableau d\'avancement), the half-reaction time t₁/₂, the final progress rate τ = xf/xmax, and the comparison between the reaction quotient Qr and the equilibrium constant K. Traps: computing xmax with the wrong limiting reactant, confusing τ (progress rate) with yield, and predicting the direction of evolution without comparing Qr to K.',
          'La cinétique et l\'équilibre chimique ouvrent l\'épreuve de chimie au bac. Il faut maîtriser le tableau d\'avancement, le temps de demi-réaction t₁/₂, le taux d\'avancement final τ = xf/xmax, et la comparaison entre le quotient de réaction Qr et la constante d\'équilibre K. Pièges : calculer xmax avec le mauvais réactif limitant, confondre τ (taux d\'avancement) avec le rendement, et prédire le sens d\'évolution sans comparer Qr à K.',
          'الحركية الكيميائية والتوازن الكيميائي يفتتحان اختبار الكيمياء في الباكالوريا. عليك إتقان جدول التقدم، وزمن نصف التفاعل t₁/₂، ونسبة التقدم النهائي τ = xf/xmax، والمقارنة بين قسمة التفاعل Qr وثابت التوازن K. الأخطاء: حساب xmax بمتفاعل محدٍّ خاطئ، الخلط بين τ (نسبة التقدم) والمردود، والتنبؤ باتجاه التطور دون مقارنة Qr بـ K.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: an acid AH reacts with water: AH + H₂O ⇌ A⁻ + H₃O⁺. Initially n₀(AH) = 0.070 mol in volume V; water is in large excess. At equilibrium, measurements give xf = 0.056 mol. 1) Build the progress table and find xmax. 2) Compute the final progress rate τ. 3) Is the reaction total or limited?',
          'Problème type bac : un acide AH réagit avec l\'eau : AH + H₂O ⇌ A⁻ + H₃O⁺. Initialement n₀(AH) = 0,070 mol dans un volume V ; l\'eau est en large excès. À l\'équilibre, les mesures donnent xf = 0,056 mol. 1) Dresser le tableau d\'avancement et déterminer xmax. 2) Calculer le taux d\'avancement final τ. 3) La réaction est-elle totale ou limitée ?',
          'مسألة على نمط الباكالوريا: حمض AH يتفاعل مع الماء: AH + H₂O ⇌ A⁻ + H₃O⁺. في البداية n₀(AH) = 0.070 mol في حجم V؛ والماء بوفرة كبيرة. عند التوازن تعطي القياسات xf = 0.056 mol. ‏1) أنشئ جدول التقدم وعيّن xmax. ‏2) احسب نسبة التقدم النهائي τ. ‏3) هل التفاعل تام أم محدود؟',
        ),
        answer: L(
          '1) Progress table: n(AH) = 0.070 − x, n(A⁻) = x, n(H₃O⁺) = x (water in excess is not tracked). The limiting reactant is AH, so xmax = 0.070 mol, reached if the reaction were total. 2) τ = xf/xmax = 0.056/0.070 = 0.80. 3) Since τ = 0.80 < 1, the reaction is limited: an equilibrium is reached where 20% of the acid remains unreacted. Exam phrasing matters: write "the reaction is limited because τ < 1", not just the number.',
          '1) Tableau d\'avancement : n(AH) = 0,070 − x, n(A⁻) = x, n(H₃O⁺) = x (l\'eau en excès n\'est pas suivie). Le réactif limitant est AH, donc xmax = 0,070 mol, atteint si la réaction était totale. 2) τ = xf/xmax = 0,056/0,070 = 0,80. 3) Comme τ = 0,80 < 1, la réaction est limitée : un équilibre s\'établit où 20 % de l\'acide reste non dissocié. La formulation compte à l\'examen : écris « la réaction est limitée car τ < 1 », pas seulement le nombre.',
          '1) جدول التقدم: n(AH) = 0.070 − x، ‏n(A⁻) = x، ‏n(H₃O⁺) = x (الماء الوافر لا يُتابع). المتفاعل المحدّ هو AH، إذن xmax = 0.070 mol وهي القيمة التي تُبلغ لو كان التفاعل تاماً. ‏2) ‏τ = xf/xmax = 0.056/0.070 = 0.80. ‏3) بما أن τ = 0.80 < 1 فالتفاعل محدود: يتكوّن توازن يبقى فيه 20% من الحمض دون تفكك. الصياغة مهمة في الامتحان: اكتب «التفاعل محدود لأن τ < 1» وليس الرقم فقط.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Always build the progress table first; xmax comes from the limiting reactant.',
            'Dresse toujours le tableau d\'avancement d\'abord ; xmax vient du réactif limitant.',
            'أنشئ جدول التقدم أولاً دائماً؛ فقيمة xmax تُستخرج من المتفاعل المحدّ.',
          ),
          L(
            'τ = xf/xmax: τ = 1 means total reaction, τ < 1 means limited (equilibrium).',
            'τ = xf/xmax : τ = 1 signifie réaction totale, τ < 1 signifie réaction limitée (équilibre).',
            'τ = xf/xmax: إذا كانت τ = 1 فالتفاعل تام، وإذا كانت τ < 1 فهو محدود (توازن).',
          ),
          L(
            'Direction of evolution: Qr < K → forward direction; Qr > K → reverse; Qr = K → equilibrium.',
            'Sens d\'évolution : Qr < K → sens direct ; Qr > K → sens inverse ; Qr = K → équilibre.',
            'اتجاه التطور: Qr < K ← الاتجاه المباشر؛ Qr > K ← الاتجاه العكسي؛ Qr = K ← توازن.',
          ),
          L(
            't₁/₂ is the time to reach x = xf/2; read it on the curve, with construction lines shown.',
            't₁/₂ est la durée pour atteindre x = xf/2 ; lis-le sur la courbe avec les pointillés de construction.',
            't₁/₂ هو الزمن اللازم لبلوغ x = xf/2؛ اقرأه من المنحنى مع إظهار خطوط الإنشاء.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'With xf = 0.056 mol and xmax = 0.070 mol, compute the final progress rate τ (no unit, 2 decimals).',
          'Avec xf = 0,056 mol et xmax = 0,070 mol, calcule le taux d\'avancement final τ (sans unité, 2 décimales).',
          'إذا كان xf = 0.056 mol و xmax = 0.070 mol، احسب نسبة التقدم النهائي τ (دون وحدة، برقمين عشريين).',
        ),
        answer: 0.8,
        tolerance: 0.01,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'For a chemical system where Qr < K, the system evolves…',
          'Pour un système chimique où Qr < K, le système évolue…',
          'في جملة كيميائية حيث Qr < K، تتطور الجملة…',
        ),
        choices: [
          {
            text: L(
              'In the forward direction',
              'Dans le sens direct',
              'في الاتجاه المباشر',
            ),
            explanation: L(
              'Qr must rise toward K, so products form: the reaction proceeds forward.',
              'Qr doit monter vers K, donc des produits se forment : la réaction avance dans le sens direct.',
              'يجب أن ترتفع Qr نحو K، فتتكوّن النواتج: يتقدم التفاعل في الاتجاه المباشر.',
            ),
          },
          { text: L('In the reverse direction', 'Dans le sens inverse', 'في الاتجاه العكسي') },
          { text: L('It does not evolve', 'Il n\'évolue pas', 'لا تتطور') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'bac', 'bac-chemistry', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Acid–base chemistry is a bac favourite: pH of strong and weak acids, the dissociation rate, the pKa, buffer solutions and titration curves. Examiners check whether you can prove an acid is weak from pH and concentration. Traps: assuming pH = −log C for a weak acid (only true for strong acids), forgetting that at half-equivalence pH = pKa, and misidentifying the equivalence point on a titration curve.',
          'La chimie acide–base est un classique du bac : pH des acides forts et faibles, taux de dissociation, pKa, solutions tampons et courbes de dosage. Le correcteur vérifie si tu sais prouver qu\'un acide est faible à partir du pH et de la concentration. Pièges : supposer pH = −log C pour un acide faible (vrai seulement pour les acides forts), oublier qu\'à la demi-équivalence pH = pKa, et mal repérer le point d\'équivalence sur une courbe de dosage.',
          'كيمياء الأحماض والقواعد من كلاسيكيات الباكالوريا: pH الأحماض القوية والضعيفة، نسبة التفكك، pKa، المحاليل الموقية ومنحنيات المعايرة. يتحقق المصحح من قدرتك على إثبات أن حمضاً ما ضعيف انطلاقاً من pH والتركيز. الأخطاء: افتراض pH = −log C لحمض ضعيف (صحيح فقط للأحماض القوية)، نسيان أن pH = pKa عند نصف التكافؤ، وسوء تحديد نقطة التكافؤ على منحنى المعايرة.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: a solution of ethanoic acid CH₃COOH of concentration C = 1.0×10⁻² mol/L has pH = 3.4. 1) Compute [H₃O⁺]. 2) Compute the dissociation rate τ. 3) Show that the acid is weak.',
          'Problème type bac : une solution d\'acide éthanoïque CH₃COOH de concentration C = 1,0×10⁻² mol/L a un pH = 3,4. 1) Calculer [H₃O⁺]. 2) Calculer le taux de dissociation τ. 3) Montrer que l\'acide est faible.',
          'مسألة على نمط الباكالوريا: محلول حمض الإيثانويك CH₃COOH تركيزه C = 1.0×10⁻² mol/L وقيمة pH له تساوي 3.4. ‏1) احسب ‎[H₃O⁺]‎. ‏2) احسب نسبة التفكك τ. ‏3) بيّن أن الحمض ضعيف.',
        ),
        answer: L(
          '1) [H₃O⁺] = 10^(−pH) = 10⁻³·⁴ ≈ 4.0×10⁻⁴ mol/L. 2) τ = [H₃O⁺]/C = 4.0×10⁻⁴ / 1.0×10⁻² = 0.04, i.e. only 4% of the acid molecules are dissociated. 3) Two accepted arguments: (a) τ = 0.04 ≪ 1, so the dissociation is very partial; (b) if the acid were strong, pH would equal −log C = 2, but the measured pH = 3.4 > 2. Either way, CH₃COOH is a weak acid. Giving both arguments secures full marks.',
          '1) [H₃O⁺] = 10^(−pH) = 10⁻³·⁴ ≈ 4,0×10⁻⁴ mol/L. 2) τ = [H₃O⁺]/C = 4,0×10⁻⁴ / 1,0×10⁻² = 0,04, soit seulement 4 % des molécules d\'acide dissociées. 3) Deux arguments acceptés : (a) τ = 0,04 ≪ 1, donc la dissociation est très partielle ; (b) si l\'acide était fort, le pH vaudrait −log C = 2, or le pH mesuré est 3,4 > 2. Dans les deux cas, CH₃COOH est un acide faible. Donner les deux arguments assure tous les points.',
          '1) ‏[H₃O⁺] = 10^(−pH) = 10⁻³·⁴ ≈ 4.0×10⁻⁴ mol/L. ‏2) ‏τ = [H₃O⁺]/C = 4.0×10⁻⁴ / 1.0×10⁻² = 0.04، أي أن 4% فقط من جزيئات الحمض متفككة. ‏3) حجتان مقبولتان: (أ) τ = 0.04 ≪ 1 إذن التفكك جزئي جداً؛ (ب) لو كان الحمض قوياً لكان pH = −log C = 2، لكن القيمة المقيسة 3.4 > 2. في الحالتين CH₃COOH حمض ضعيف. تقديم الحجتين معاً يضمن كامل النقاط.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Strong acid: pH = −log C. Weak acid: pH > −log C — this comparison is the standard proof.',
            'Acide fort : pH = −log C. Acide faible : pH > −log C — cette comparaison est la preuve standard.',
            'حمض قوي: pH = −log C. حمض ضعيف: pH > −log C — هذه المقارنة هي البرهان النموذجي.',
          ),
          L(
            'At half-equivalence of a weak acid titration: pH = pKa — read pKa directly from the curve.',
            'À la demi-équivalence d\'un dosage d\'acide faible : pH = pKa — lis le pKa directement sur la courbe.',
            'عند نصف التكافؤ في معايرة حمض ضعيف: pH = pKa — اقرأ pKa مباشرة من المنحنى.',
          ),
          L(
            'At equivalence: n(acid) = n(base added), i.e. Ca·Va = Cb·VbE for monoacids.',
            'À l\'équivalence : n(acide) = n(base versée), c\'est-à-dire Ca·Va = Cb·VbE pour des monoacides.',
            'عند التكافؤ: n(الحمض) = n(القاعدة المضافة)، أي Ca·Va = Cb·VbE بالنسبة إلى الأحماض الأحادية.',
          ),
          L(
            'A buffer (pH ≈ pKa) resists pH changes upon moderate addition of acid or base.',
            'Une solution tampon (pH ≈ pKa) résiste aux variations de pH lors d\'un ajout modéré d\'acide ou de base.',
            'المحلول الموقي (pH ≈ pKa) يقاوم تغيرات pH عند إضافة معتدلة لحمض أو قاعدة.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What is the pH of a strong acid solution (HCl) of concentration C = 1.0×10⁻³ mol/L?',
          'Quel est le pH d\'une solution d\'acide fort (HCl) de concentration C = 1,0×10⁻³ mol/L ?',
          'ما قيمة pH لمحلول حمض قوي (HCl) تركيزه C = 1.0×10⁻³ mol/L؟',
        ),
        answer: 3,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'During the titration of a weak acid by a strong base, at half-equivalence…',
          'Lors du dosage d\'un acide faible par une base forte, à la demi-équivalence…',
          'أثناء معايرة حمض ضعيف بقاعدة قوية، عند نصف التكافؤ…',
        ),
        choices: [
          {
            text: L('pH = pKa', 'pH = pKa', 'pH = pKa'),
            explanation: L(
              'Half the acid is converted: [acid] = [conjugate base], so pH = pKa + log(1) = pKa.',
              'La moitié de l\'acide est convertie : [acide] = [base conjuguée], donc pH = pKa + log(1) = pKa.',
              'نصف الحمض تحوّل: [الحمض] = [القاعدة المرافقة]، إذن pH = pKa + log(1) = pKa.',
            ),
          },
          { text: L('pH = 7', 'pH = 7', 'pH = 7') },
          { text: L('pH = pKa/2', 'pH = pKa/2', 'pH = pKa/2') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'bac', 'bac-chemistry', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Organic chemistry on the bac focuses on esterification and hydrolysis: writing the equation, naming the ester, and exploiting the equilibrium (slow, limited, athermic reaction). Examiners love asking how to improve the yield. Traps: claiming a catalyst increases the yield (it only speeds up reaching equilibrium), naming the ester backwards (acid part first: ethyl ethanoate = éthanoate d\'éthyle), and forgetting that esterification and hydrolysis are the two directions of the same equilibrium.',
          'La chimie organique au bac se concentre sur l\'estérification et l\'hydrolyse : écrire l\'équation, nommer l\'ester, et exploiter l\'équilibre (réaction lente, limitée, athermique). Le correcteur adore demander comment améliorer le rendement. Pièges : affirmer qu\'un catalyseur augmente le rendement (il accélère seulement l\'atteinte de l\'équilibre), nommer l\'ester à l\'envers (partie acide d\'abord : éthanoate d\'éthyle), et oublier que l\'estérification et l\'hydrolyse sont les deux sens du même équilibre.',
          'الكيمياء العضوية في الباكالوريا تتمحور حول الأسترة والحلمهة: كتابة المعادلة، تسمية الإستر، واستغلال التوازن (تفاعل بطيء ومحدود ولا حراري). يحب المصحح سؤال: كيف نحسّن المردود؟ الأخطاء: الادعاء أن الوسيط يرفع المردود (هو يسرّع بلوغ التوازن فقط)، تسمية الإستر بالمقلوب (جزء الحمض أولاً: إيثانوات الإيثيل)، ونسيان أن الأسترة والحلمهة اتجاهان لنفس التوازن.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Bac-style problem: we mix 1.0 mol of ethanoic acid CH₃COOH with 1.0 mol of ethanol C₂H₅OH with a few drops of sulfuric acid. The equilibrium constant is K = 4. 1) Write the esterification equation and name the ester. 2) Find the amount of ester xf at equilibrium. 3) Deduce the yield.',
          'Problème type bac : on mélange 1,0 mol d\'acide éthanoïque CH₃COOH avec 1,0 mol d\'éthanol C₂H₅OH et quelques gouttes d\'acide sulfurique. La constante d\'équilibre est K = 4. 1) Écrire l\'équation d\'estérification et nommer l\'ester. 2) Déterminer la quantité d\'ester xf à l\'équilibre. 3) En déduire le rendement.',
          'مسألة على نمط الباكالوريا: نمزج 1.0 mol من حمض الإيثانويك CH₃COOH مع 1.0 mol من الإيثانول C₂H₅OH مع بضع قطرات من حمض الكبريت. ثابت التوازن K = 4. ‏1) اكتب معادلة الأسترة وسمِّ الإستر. ‏2) عيّن كمية الإستر xf عند التوازن. ‏3) استنتج المردود.',
        ),
        answer: L(
          '1) CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. The ester is ethyl ethanoate (éthanoate d\'éthyle); sulfuric acid is only a catalyst. 2) At equilibrium with x mol of ester formed: K = (x·x)/((1−x)(1−x)) = x²/(1−x)² = 4. Taking the square root (all quantities positive): x/(1−x) = 2, so x = 2 − 2x, hence xf = 2/3 ≈ 0.67 mol. 3) Yield = xf/xmax = (2/3)/1 ≈ 67% — the famous equimolar esterification result. To improve it: use an excess of one reactant or remove the water/ester as it forms; a catalyst or heating only makes equilibrium come faster.',
          '1) CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. L\'ester est l\'éthanoate d\'éthyle ; l\'acide sulfurique n\'est qu\'un catalyseur. 2) À l\'équilibre avec x mol d\'ester formé : K = (x·x)/((1−x)(1−x)) = x²/(1−x)² = 4. En prenant la racine carrée (quantités positives) : x/(1−x) = 2, donc x = 2 − 2x, d\'où xf = 2/3 ≈ 0,67 mol. 3) Rendement = xf/xmax = (2/3)/1 ≈ 67 % — le fameux résultat de l\'estérification équimolaire. Pour l\'améliorer : mettre un réactif en excès ou éliminer l\'eau/l\'ester au fur et à mesure ; un catalyseur ou le chauffage ne fait qu\'atteindre l\'équilibre plus vite.',
          '1) ‏CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. الإستر هو إيثانوات الإيثيل؛ وحمض الكبريت مجرد وسيط. ‏2) عند التوازن مع تكوّن x mol من الإستر: K = (x·x)/((1−x)(1−x)) = x²/(1−x)² = 4. بأخذ الجذر التربيعي (الكميات موجبة): x/(1−x) = 2، إذن x = 2 − 2x، ومنه xf = 2/3 ≈ 0.67 mol. ‏3) المردود = xf/xmax = (2/3)/1 ≈ 67% — النتيجة الشهيرة للأسترة متساوية المولات. لتحسينه: استعمل فائضاً من أحد المتفاعلين أو أزل الماء/الإستر أثناء تكوّنه؛ أما الوسيط أو التسخين فيسرّعان بلوغ التوازن فقط.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Esterification is slow, limited and athermic — quote all three adjectives, they are graded.',
            'L\'estérification est lente, limitée et athermique — cite les trois adjectifs, ils sont notés.',
            'الأسترة بطيئة ومحدودة ولا حرارية — اذكر الصفات الثلاث فهي محل تقييم.',
          ),
          L(
            'Improve the yield: excess of one reactant, or remove water or ester as it forms.',
            'Améliorer le rendement : excès d\'un réactif, ou élimination de l\'eau ou de l\'ester au fur et à mesure.',
            'تحسين المردود: فائض من أحد المتفاعلين، أو إزالة الماء أو الإستر أولاً بأول.',
          ),
          L(
            'Catalyst and temperature change the speed, never the equilibrium composition.',
            'Le catalyseur et la température changent la vitesse, jamais la composition à l\'équilibre.',
            'الوسيط ودرجة الحرارة يغيّران السرعة، لا تركيبة التوازن أبداً.',
          ),
          L(
            'Ester naming: acid part with -oate + alcohol part; CH₃COOC₂H₅ is ethyl ethanoate.',
            'Nomenclature de l\'ester : partie acide en -oate + partie alcool ; CH₃COOC₂H₅ est l\'éthanoate d\'éthyle.',
            'تسمية الإستر: جزء الحمض بلاحقة -وات + جزء الكحول؛ CH₃COOC₂H₅ هو إيثانوات الإيثيل.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Adding a catalyst to an esterification reaction…',
          'Ajouter un catalyseur à une réaction d\'estérification…',
          'إضافة وسيط إلى تفاعل الأسترة…',
        ),
        choices: [
          {
            text: L(
              'Speeds up the reaction without changing the final yield',
              'Accélère la réaction sans changer le rendement final',
              'تسرّع التفاعل دون تغيير المردود النهائي',
            ),
            explanation: L(
              'A catalyst lowers the time needed to reach equilibrium but K, hence xf, stays the same.',
              'Un catalyseur réduit la durée pour atteindre l\'équilibre, mais K, donc xf, ne change pas.',
              'الوسيط يقلّص زمن بلوغ التوازن، لكن K ومعه xf لا يتغيران.',
            ),
          },
          {
            text: L(
              'Increases the final yield',
              'Augmente le rendement final',
              'ترفع المردود النهائي',
            ),
          },
          {
            text: L(
              'Shifts the equilibrium toward the ester',
              'Déplace l\'équilibre vers l\'ester',
              'تزيح التوازن نحو الإستر',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'In the equimolar esterification of the worked example (K = 4), give xf in mol (2 decimals).',
          'Dans l\'estérification équimolaire de l\'exemple corrigé (K = 4), donne xf en mol (2 décimales).',
          'في الأسترة متساوية المولات في المثال المحلول (K = 4)، أعطِ xf بوحدة mol (رقمان عشريان).',
        ),
        answer: 0.67,
        tolerance: 0.01,
        unit: 'mol',
      },
    ],
  },

  // Concours — Mathematics
  [lessonKey('exam-prep', 'concours', 'concours-math', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Concours algebra rewards reflexes: root spotting, polynomial factorization, Vieta\'s formulas, and complex number manipulation must be automatic, because time is the real opponent. Juries penalize brute-force expansion where a structural argument exists. Traps: dividing by an expression that can vanish, forgetting complex or double roots, and recomputing symmetric functions of roots instead of reading them off the coefficients.',
          'L\'algèbre de concours récompense les réflexes : racines évidentes, factorisation de polynômes, relations coefficients–racines (Viète) et manipulation des complexes doivent être automatiques, car le vrai adversaire est le temps. Le jury pénalise le développement brutal là où un argument structurel existe. Pièges : diviser par une expression qui peut s\'annuler, oublier les racines complexes ou doubles, et recalculer les fonctions symétriques des racines au lieu de les lire sur les coefficients.',
          'جبر المناظرات يكافئ ردود الفعل السريعة: اكتشاف الجذور الواضحة، تحليل كثيرات الحدود، علاقات المعاملات بالجذور (فييت)، ومعالجة الأعداد العقدية يجب أن تكون آلية، لأن الخصم الحقيقي هو الوقت. تعاقب لجنة التصحيح النشر الأعمى حيث توجد حجة بنيوية. الأخطاء: القسمة على عبارة قد تنعدم، نسيان الجذور العقدية أو المضاعفة، وإعادة حساب الدوال المتناظرة للجذور بدل قراءتها من المعاملات.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Concours-style drill: let P(x) = x³ − 6x² + 11x − 6. 1) Factor P completely. 2) Without using the explicit roots, compute the sum of the squares of the roots via Vieta\'s formulas, then verify.',
          'Exercice type concours : soit P(x) = x³ − 6x² + 11x − 6. 1) Factoriser P complètement. 2) Sans utiliser les racines explicites, calculer la somme des carrés des racines par les relations de Viète, puis vérifier.',
          'تمرين على نمط المناظرات: ليكن P(x) = x³ − 6x² + 11x − 6. ‏1) حلّل P تحليلاً كاملاً. ‏2) دون استعمال الجذور الصريحة، احسب مجموع مربعات الجذور بعلاقات فييت ثم تحقق.',
        ),
        answer: L(
          '1) Test small integers: P(1) = 1 − 6 + 11 − 6 = 0, so (x − 1) divides P. Dividing: P(x) = (x − 1)(x² − 5x + 6) = (x − 1)(x − 2)(x − 3). Roots: 1, 2, 3. 2) Vieta for x³ + ax² + bx + c: sum of roots σ₁ = 6, sum of pairwise products σ₂ = 11. Then r₁² + r₂² + r₃² = σ₁² − 2σ₂ = 36 − 22 = 14. Verification: 1 + 4 + 9 = 14. The identity σ₁² − 2σ₂ is the kind of one-line tool that saves five minutes in a concours.',
          '1) Teste de petits entiers : P(1) = 1 − 6 + 11 − 6 = 0, donc (x − 1) divise P. Par division : P(x) = (x − 1)(x² − 5x + 6) = (x − 1)(x − 2)(x − 3). Racines : 1, 2, 3. 2) Viète pour x³ + ax² + bx + c : somme des racines σ₁ = 6, somme des produits deux à deux σ₂ = 11. Alors r₁² + r₂² + r₃² = σ₁² − 2σ₂ = 36 − 22 = 14. Vérification : 1 + 4 + 9 = 14. L\'identité σ₁² − 2σ₂ est le genre d\'outil en une ligne qui fait gagner cinq minutes en concours.',
          '1) جرّب أعداداً صحيحة صغيرة: P(1) = 1 − 6 + 11 − 6 = 0، إذن (x − 1) يقسم P. بالقسمة: P(x) = (x − 1)(x² − 5x + 6) = (x − 1)(x − 2)(x − 3). الجذور: 1، 2، 3. ‏2) فييت من أجل x³ + ax² + bx + c: مجموع الجذور σ₁ = 6، ومجموع الجداءات المثنى σ₂ = 11. إذن r₁² + r₂² + r₃² = σ₁² − 2σ₂ = 36 − 22 = 14. تحقق: 1 + 4 + 9 = 14. المتطابقة σ₁² − 2σ₂ من الأدوات ذات السطر الواحد التي توفر خمس دقائق في المناظرة.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Test x = ±1, ±2, ±3 first: rational roots divide the constant term.',
            'Teste x = ±1, ±2, ±3 d\'abord : les racines rationnelles divisent le terme constant.',
            'جرّب أولاً x = ±1, ±2, ±3: الجذور الجذرية تقسم الحد الثابت.',
          ),
          L(
            'Vieta reflexes: σ₁ = −a, σ₂ = b, σ₃ = −c for x³ + ax² + bx + c; and r₁² + r₂² + r₃² = σ₁² − 2σ₂.',
            'Réflexes de Viète : σ₁ = −a, σ₂ = b, σ₃ = −c pour x³ + ax² + bx + c ; et r₁² + r₂² + r₃² = σ₁² − 2σ₂.',
            'ردود فعل فييت: σ₁ = −a، ‏σ₂ = b، ‏σ₃ = −c من أجل x³ + ax² + bx + c؛ و r₁² + r₂² + r₃² = σ₁² − 2σ₂.',
          ),
          L(
            'Before dividing by an expression, state why it is non-zero — juries hunt this omission.',
            'Avant de diviser par une expression, justifie pourquoi elle est non nulle — le jury traque cette omission.',
            'قبل القسمة على عبارة، برّر لماذا هي غير معدومة — لجنة التصحيح تتصيّد هذا الإغفال.',
          ),
          L(
            'A real polynomial of odd degree always has at least one real root (intermediate value theorem).',
            'Un polynôme réel de degré impair a toujours au moins une racine réelle (théorème des valeurs intermédiaires).',
            'كثير حدود حقيقي من درجة فردية يملك دائماً جذراً حقيقياً واحداً على الأقل (مبرهنة القيم الوسيطة).',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'The roots of x³ − 6x² + 11x − 6 satisfy σ₁ = 6 and σ₂ = 11. Compute the sum of the squares of the roots.',
          'Les racines de x³ − 6x² + 11x − 6 vérifient σ₁ = 6 et σ₂ = 11. Calcule la somme des carrés des racines.',
          'جذور x³ − 6x² + 11x − 6 تحقق σ₁ = 6 و σ₂ = 11. احسب مجموع مربعات الجذور.',
        ),
        answer: 14,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'How many real roots does x⁵ + x + 1 = 0 have?',
          'Combien de racines réelles possède x⁵ + x + 1 = 0 ?',
          'كم جذراً حقيقياً تملك المعادلة x⁵ + x + 1 = 0؟',
        ),
        choices: [
          {
            text: L('Exactly 1', 'Exactement 1', 'جذر واحد بالضبط'),
            explanation: L(
              'Factor: x⁵ + x + 1 = (x² + x + 1)(x³ − x² + 1). The quadratic has no real root (Δ < 0); the cubic is monotone enough to cross zero exactly once.',
              'Factorisation : x⁵ + x + 1 = (x² + x + 1)(x³ − x² + 1). Le trinôme n\'a pas de racine réelle (Δ < 0) ; le facteur cubique ne s\'annule qu\'une seule fois.',
              'التحليل: x⁵ + x + 1 = (x² + x + 1)(x³ − x² + 1). الحدودية التربيعية بلا جذر حقيقي (Δ < 0)؛ والعامل التكعيبي ينعدم مرة واحدة فقط.',
            ),
          },
          { text: L('Exactly 3', 'Exactement 3', 'ثلاثة جذور بالضبط') },
          { text: L('Exactly 5', 'Exactement 5', 'خمسة جذور بالضبط') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'concours', 'concours-math', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Concours analysis lives on limited expansions (développements limités), equivalents and series convergence. A 0/0 limit should trigger an expansion, not L\'Hôpital gymnastics. Traps: expanding to an insufficient order (terms cancel and you are left with o(x²) = mystery), adding equivalents (forbidden!), and quoting a convergence criterion without checking its hypotheses.',
          'L\'analyse de concours vit sur les développements limités, les équivalents et la convergence des séries. Une limite en 0/0 doit déclencher un DL, pas de la gymnastique avec L\'Hôpital. Pièges : développer à un ordre insuffisant (les termes se compensent et il ne reste que o(x²) = mystère), additionner des équivalents (interdit !), et citer un critère de convergence sans vérifier ses hypothèses.',
          'تحليل المناظرات يقوم على النشور المحدودة، والمكافئات، وتقارب المتسلسلات. النهاية من شكل 0/0 يجب أن تستدعي نشراً محدوداً لا ألاعيب بقاعدة لوبيتال. الأخطاء: النشر إلى رتبة غير كافية (تتقاصّ الحدود ولا يبقى إلا o(x²) الغامض)، جمع المكافئات (ممنوع!)، وذكر معيار تقارب دون التحقق من فرضياته.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Concours-style drill: compute lim (eˣ − 1 − x)/x² as x → 0, justifying with a limited expansion.',
          'Exercice type concours : calculer lim (eˣ − 1 − x)/x² quand x → 0, en justifiant par un développement limité.',
          'تمرين على نمط المناظرات: احسب lim (eˣ − 1 − x)/x² لما x → 0 مع التبرير بنشر محدود.',
        ),
        answer: L(
          'Order choice: the denominator is x², so expand eˣ to order 2: eˣ = 1 + x + x²/2 + o(x²). Then the numerator becomes eˣ − 1 − x = x²/2 + o(x²). Dividing by x²: (eˣ − 1 − x)/x² = 1/2 + o(1), so the limit is 1/2. Two exam habits shown here: (a) choose the expansion order by looking at the denominator; (b) if you had expanded only to order 1, the numerator would reduce to o(x) and give nothing — a wasted attempt. Same technique gives lim (1 − cos x)/x² = 1/2 and lim (ln(1+x) − x)/x² = −1/2.',
          'Choix de l\'ordre : le dénominateur est x², donc on développe eˣ à l\'ordre 2 : eˣ = 1 + x + x²/2 + o(x²). Le numérateur devient eˣ − 1 − x = x²/2 + o(x²). En divisant par x² : (eˣ − 1 − x)/x² = 1/2 + o(1), donc la limite vaut 1/2. Deux habitudes de concours illustrées : (a) choisir l\'ordre du DL en regardant le dénominateur ; (b) un développement à l\'ordre 1 seulement laisserait o(x) au numérateur et ne donnerait rien — tentative perdue. La même technique donne lim (1 − cos x)/x² = 1/2 et lim (ln(1+x) − x)/x² = −1/2.',
          'اختيار الرتبة: المقام هو x²، إذن ننشر eˣ إلى الرتبة 2: ‏eˣ = 1 + x + x²/2 + o(x²). يصبح البسط eˣ − 1 − x = x²/2 + o(x²). وبالقسمة على x²: ‏(eˣ − 1 − x)/x² = 1/2 + o(1)، فالنهاية هي 1/2. عادتان امتحانيتان هنا: (أ) اختر رتبة النشر بالنظر إلى المقام؛ (ب) لو نشرت إلى الرتبة 1 فقط لبقي في البسط o(x) ولن تحصل على شيء — محاولة ضائعة. نفس التقنية تعطي lim (1 − cos x)/x² = 1/2 و lim (ln(1+x) − x)/x² = −1/2.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Know by heart: eˣ = 1 + x + x²/2 + x³/6 + o(x³); ln(1+x) = x − x²/2 + x³/3 + o(x³).',
            'À connaître par cœur : eˣ = 1 + x + x²/2 + x³/6 + o(x³) ; ln(1+x) = x − x²/2 + x³/3 + o(x³).',
            'احفظ عن ظهر قلب: eˣ = 1 + x + x²/2 + x³/6 + o(x³)؛ ‏ln(1+x) = x − x²/2 + x³/3 + o(x³).',
          ),
          L(
            'Also: sin x = x − x³/6 + o(x³); cos x = 1 − x²/2 + o(x²); (1+x)^α = 1 + αx + α(α−1)x²/2 + o(x²).',
            'Aussi : sin x = x − x³/6 + o(x³) ; cos x = 1 − x²/2 + o(x²) ; (1+x)^α = 1 + αx + α(α−1)x²/2 + o(x²).',
            'وأيضاً: sin x = x − x³/6 + o(x³)؛ ‏cos x = 1 − x²/2 + o(x²)؛ ‏(1+x)^α = 1 + αx + α(α−1)x²/2 + o(x²).',
          ),
          L(
            'Equivalents can be multiplied and divided, never added or composed blindly.',
            'Les équivalents se multiplient et se divisent, jamais ne s\'additionnent ni ne se composent aveuglément.',
            'المكافئات تُضرب وتُقسم، ولا تُجمع أو تُركّب عشوائياً أبداً.',
          ),
          L(
            'Riemann series Σ 1/n^p converges iff p > 1 — the reference for all comparison arguments.',
            'La série de Riemann Σ 1/n^p converge si et seulement si p > 1 — la référence de toutes les comparaisons.',
            'متسلسلة ريمان Σ 1/n^p تتقارب إذا وفقط إذا كان p > 1 — المرجع لكل حجج المقارنة.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Using cos x = 1 − x²/2 + o(x²), compute lim (1 − cos x)/x² as x → 0 (decimal value).',
          'En utilisant cos x = 1 − x²/2 + o(x²), calcule lim (1 − cos x)/x² quand x → 0 (valeur décimale).',
          'باستعمال cos x = 1 − x²/2 + o(x²)، احسب lim (1 − cos x)/x² لما x → 0 (قيمة عشرية).',
        ),
        answer: 0.5,
        tolerance: 0.001,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which of these series converges?',
          'Laquelle de ces séries converge ?',
          'أي من هذه المتسلسلات متقاربة؟',
        ),
        choices: [
          {
            text: L('Σ 1/n²', 'Σ 1/n²', 'Σ 1/n²'),
            explanation: L(
              'Riemann series with p = 2 > 1, hence convergent; the other two have p = 1 and p = ½, both divergent.',
              'Série de Riemann avec p = 2 > 1, donc convergente ; les deux autres ont p = 1 et p = ½, toutes deux divergentes.',
              'متسلسلة ريمان بـ p = 2 > 1 فهي متقاربة؛ أما الأخريان فلهما p = 1 و p = ½ وكلتاهما متباعدة.',
            ),
          },
          { text: L('Σ 1/n', 'Σ 1/n', 'Σ 1/n') },
          { text: L('Σ 1/√n', 'Σ 1/√n', 'Σ 1/√n') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'concours', 'concours-math', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A concours problem is a chain: early sub-questions build tools for later ones, and the phrase "en déduire" (deduce) always points back to a previous result. Strategy separates ranked candidates from the rest: read the whole problem first, harvest the easy questions in every part, and when stuck, look for structure — symmetry, invariants, small cases, induction. Traps: burning 30 minutes on question 2 while questions 5 to 8 were accessible, and proving something weaker than what was asked.',
          'Un problème de concours est une chaîne : les premières sous-questions construisent des outils pour les suivantes, et l\'expression « en déduire » renvoie toujours à un résultat précédent. La stratégie sépare les candidats classés des autres : lire tout le problème d\'abord, récolter les questions faciles de chaque partie, et en cas de blocage, chercher la structure — symétrie, invariants, petits cas, récurrence. Pièges : brûler 30 minutes sur la question 2 alors que les questions 5 à 8 étaient accessibles, et démontrer plus faible que ce qui est demandé.',
          'مسألة المناظرة سلسلة مترابطة: الأسئلة الفرعية الأولى تبني أدوات لما بعدها، وعبارة «استنتج» تحيل دائماً إلى نتيجة سابقة. الاستراتيجية هي ما يفصل المترشحين المرتَّبين عن غيرهم: اقرأ المسألة كاملة أولاً، واحصد الأسئلة السهلة في كل جزء، وعند الانسداد ابحث عن البنية — التناظر، اللامتغيرات، الحالات الصغيرة، التراجع. الأخطاء: إحراق 30 دقيقة على السؤال 2 بينما الأسئلة من 5 إلى 8 في المتناول، وإثبات نتيجة أضعف من المطلوبة.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Strategy demonstration: compute S = 1 + 2 + 3 + … + 100 without adding the terms one by one, then generalize to 1 + 2 + … + n.',
          'Démonstration de stratégie : calculer S = 1 + 2 + 3 + … + 100 sans additionner les termes un à un, puis généraliser à 1 + 2 + … + n.',
          'عرض استراتيجي: احسب S = 1 + 2 + 3 + … + 100 دون جمع الحدود واحداً واحداً، ثم عمّم إلى 1 + 2 + … + n.',
        ),
        answer: L(
          'Look for structure instead of computing: pair the first term with the last, the second with the second-to-last… Each pair 1+100, 2+99, 3+98, … sums to 101, and there are 50 pairs, so S = 50 × 101 = 5050. Generalization: writing S twice, once forward and once backward, gives 2S = n(n + 1), hence S = n(n + 1)/2. The concours lesson: before launching a heavy computation, spend 30 seconds asking "is there a symmetry or a pairing?" — the examiners design problems so that the structural path is much shorter.',
          'Cherche la structure au lieu de calculer : associe le premier terme au dernier, le deuxième à l\'avant-dernier… Chaque paire 1+100, 2+99, 3+98, … vaut 101, et il y a 50 paires, donc S = 50 × 101 = 5050. Généralisation : en écrivant S deux fois, une fois à l\'endroit et une fois à l\'envers, on obtient 2S = n(n + 1), d\'où S = n(n + 1)/2. La leçon de concours : avant de lancer un gros calcul, passe 30 secondes à demander « y a-t-il une symétrie ou un appariement ? » — les concepteurs construisent les sujets pour que le chemin structurel soit bien plus court.',
          'ابحث عن البنية بدل الحساب: قارن الحد الأول بالأخير، والثاني بما قبل الأخير… كل زوج 1+100، 2+99، 3+98، … مجموعه 101، وعدد الأزواج 50، إذن S = 50 × 101 = 5050. التعميم: بكتابة S مرتين، مرة طرداً ومرة عكساً، نحصل على 2S = n(n + 1)، ومنه S = n(n + 1)/2. درس المناظرة: قبل إطلاق حساب ثقيل، خصص 30 ثانية للسؤال «هل يوجد تناظر أو اقتران؟» — فواضعو المواضيع يصممونها بحيث يكون المسار البنيوي أقصر بكثير.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Read the entire problem before writing: later questions reveal where the problem is going.',
            'Lis tout le problème avant d\'écrire : les questions suivantes révèlent où va le problème.',
            'اقرأ المسألة كاملة قبل الكتابة: الأسئلة اللاحقة تكشف وجهة المسألة.',
          ),
          L(
            '"En déduire" means: use the previous result — do not start from scratch.',
            '« En déduire » signifie : utilise le résultat précédent — ne repars pas de zéro.',
            '«استنتج» تعني: استعمل النتيجة السابقة — لا تبدأ من الصفر.',
          ),
          L(
            'Stuck? Try n = 1, 2, 3, look for an invariant or a symmetry, or attempt induction.',
            'Bloqué ? Essaie n = 1, 2, 3, cherche un invariant ou une symétrie, ou tente une récurrence.',
            'انسددت؟ جرّب n = 1, 2, 3، ابحث عن لامتغير أو تناظر، أو حاول البرهان بالتراجع.',
          ),
          L(
            'Budget time per part; skip and return rather than sink — partial marks add up across parts.',
            'Chronomètre chaque partie ; saute et reviens plutôt que couler — les points partiels s\'accumulent sur toutes les parties.',
            'وزّع الوقت على الأجزاء؛ تجاوز وعُد لاحقاً بدل الغرق — فالنقاط الجزئية تتراكم عبر الأجزاء.',
          ),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the steps of a proof by induction.',
          'Mets dans l\'ordre les étapes d\'un raisonnement par récurrence.',
          'رتّب خطوات البرهان بالتراجع.',
        ),
        steps: [
          L(
            'State the property P(n) to prove',
            'Énoncer la propriété P(n) à démontrer',
            'صياغة الخاصية P(n) المراد إثباتها',
          ),
          L(
            'Initialization: verify P(n₀) for the first rank',
            'Initialisation : vérifier P(n₀) au premier rang',
            'التحقق الأولي: إثبات P(n₀) عند الرتبة الأولى',
          ),
          L(
            'Heredity: assume P(n) for a fixed n ≥ n₀',
            'Hérédité : supposer P(n) pour un n ≥ n₀ fixé',
            'التوريث: افتراض P(n) من أجل n ≥ n₀ مثبَّت',
          ),
          L(
            'Prove P(n + 1) from the assumption',
            'Démontrer P(n + 1) à partir de l\'hypothèse',
            'إثبات P(n + 1) انطلاقاً من الفرضية',
          ),
          L(
            'Conclude: P(n) holds for all n ≥ n₀',
            'Conclure : P(n) est vraie pour tout n ≥ n₀',
            'الاستنتاج: P(n) صحيحة لكل n ≥ n₀',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Using the pairing method, compute 1 + 2 + 3 + … + 100.',
          'Avec la méthode d\'appariement, calcule 1 + 2 + 3 + … + 100.',
          'باستعمال طريقة الاقتران، احسب 1 + 2 + 3 + … + 100.',
        ),
        answer: 5050,
      },
    ],
  },

  // Concours — Physics
  [lessonKey('exam-prep', 'concours', 'concours-physics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Concours mechanics goes beyond the bac: energy methods, circular dynamics and conservation laws must be chosen deliberately. The jury expects you to justify why you use energy conservation (no friction, forces known only via potentials) rather than Newton\'s law, and vice versa. Traps: forgetting the condition v² ≥ gR at the top of a vertical loop, sign errors in the work of friction, and using energy conservation when a non-conservative force acts.',
          'La mécanique de concours dépasse le bac : méthodes énergétiques, dynamique circulaire et lois de conservation doivent être choisies délibérément. Le jury attend que tu justifies pourquoi tu utilises la conservation de l\'énergie (pas de frottements, forces connues par leurs potentiels) plutôt que la loi de Newton, et inversement. Pièges : oublier la condition v² ≥ gR au sommet d\'une boucle verticale, erreurs de signe dans le travail des frottements, et utiliser la conservation de l\'énergie quand une force non conservative agit.',
          'ميكانيك المناظرات يتجاوز الباكالوريا: الطرق الطاقية، الديناميك الدائري وقوانين الانحفاظ يجب أن تُختار عن قصد. تنتظر اللجنة أن تبرر لماذا تستعمل انحفاظ الطاقة (لا احتكاك، قوى معروفة بكموناتها) بدل قانون نيوتن، والعكس. الأخطاء: نسيان الشرط v² ≥ gR في أعلى العروة الرأسية، أخطاء إشارة في عمل الاحتكاك، واستعمال انحفاظ الطاقة رغم وجود قوة غير محافظة.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Concours-style problem: a small object is released from rest at height h on a frictionless track ending in a vertical circular loop of radius R. 1) Write the condition on the speed at the top of the loop for the object to keep contact. 2) Using energy conservation, find the minimum height h_min. 3) Compute h_min for R = 2.0 m.',
          'Problème type concours : un petit objet est lâché sans vitesse d\'une hauteur h sur une piste sans frottements terminée par une boucle verticale de rayon R. 1) Écrire la condition sur la vitesse au sommet de la boucle pour que l\'objet garde le contact. 2) Par conservation de l\'énergie, déterminer la hauteur minimale h_min. 3) Calculer h_min pour R = 2,0 m.',
          'مسألة على نمط المناظرات: يُترك جسم صغير من السكون من ارتفاع h على مسار عديم الاحتكاك ينتهي بعروة دائرية رأسية نصف قطرها R. ‏1) اكتب شرط السرعة في أعلى العروة كي يحافظ الجسم على التلامس. ‏2) باستعمال انحفاظ الطاقة، عيّن الارتفاع الأدنى h_min. ‏3) احسب h_min من أجل R = 2.0 m.',
        ),
        answer: L(
          '1) At the top, Newton\'s second law on the radial axis: mg + N = mv²/R. Contact requires N ≥ 0, so v² ≥ gR — the limiting case has gravity alone providing the centripetal force. 2) Energy conservation between the start (height h, at rest) and the top of the loop (height 2R, speed v): mgh = mg·2R + ½mv². With the minimum speed v² = gR: g·h_min = 2gR + gR/2, hence h_min = 5R/2. Note that the mass cancels — say it, it shows mastery. 3) For R = 2.0 m: h_min = 5 × 2.0/2 = 5.0 m.',
          '1) Au sommet, la loi de Newton sur l\'axe radial : mg + N = mv²/R. Le contact exige N ≥ 0, donc v² ≥ gR — au cas limite, le poids seul fournit la force centripète. 2) Conservation de l\'énergie entre le départ (hauteur h, au repos) et le sommet de la boucle (hauteur 2R, vitesse v) : mgh = mg·2R + ½mv². Avec la vitesse minimale v² = gR : g·h_min = 2gR + gR/2, d\'où h_min = 5R/2. Remarque que la masse se simplifie — dis-le, cela montre la maîtrise. 3) Pour R = 2,0 m : h_min = 5 × 2,0/2 = 5,0 m.',
          '1) في الأعلى، قانون نيوتن على المحور القطري: mg + N = mv²/R. يتطلب التلامس N ≥ 0، إذن v² ≥ gR — في الحالة الحدية يوفر الثقل وحده القوة الجاذبة المركزية. ‏2) انحفاظ الطاقة بين الانطلاق (ارتفاع h، سكون) وأعلى العروة (ارتفاع 2R، سرعة v): ‏mgh = mg·2R + ½mv². مع السرعة الدنيا v² = gR: ‏g·h_min = 2gR + gR/2، ومنه h_min = 5R/2. لاحظ أن الكتلة تُختصر — اذكر ذلك فهو يدل على التمكن. ‏3) من أجل R = 2.0 m: ‏h_min = 5 × 2.0/2 = 5.0 m.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Energy method when forces are conservative and you need speeds at positions; Newton when you need forces or accelerations.',
            'Méthode énergétique quand les forces sont conservatives et qu\'on cherche des vitesses en des positions ; Newton quand on cherche des forces ou des accélérations.',
            'الطريقة الطاقية عندما تكون القوى محافظة وتبحث عن سرعات عند مواضع؛ ونيوتن عندما تبحث عن قوى أو تسارعات.',
          ),
          L(
            'Circular motion: centripetal acceleration a = v²/R points toward the centre — project along the radius.',
            'Mouvement circulaire : l\'accélération centripète a = v²/R pointe vers le centre — projette selon le rayon.',
            'الحركة الدائرية: التسارع الجاذب المركزي a = v²/R يتجه نحو المركز — أسقط على نصف القطر.',
          ),
          L(
            'Loss of contact means N = 0; a rope goes slack when its tension T = 0 — write these conditions explicitly.',
            'La perte de contact signifie N = 0 ; un fil se détend quand sa tension T = 0 — écris ces conditions explicitement.',
            'فقدان التلامس يعني N = 0؛ وينفك الخيط عندما يكون توتره T = 0 — اكتب هذه الشروط صراحة.',
          ),
          L(
            'With friction, use the energy theorem: ΔE = W(friction) < 0, never plain conservation.',
            'Avec frottements, utilise le théorème de l\'énergie : ΔE = W(frottements) < 0, jamais la conservation pure.',
            'مع الاحتكاك استعمل مبرهنة الطاقة: ΔE = W(الاحتكاك) < 0، ولا تستعمل الانحفاظ الصرف أبداً.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'With h_min = 5R/2, compute the minimum release height in metres for a loop of radius R = 2.0 m.',
          'Avec h_min = 5R/2, calcule la hauteur minimale de lâcher en mètres pour une boucle de rayon R = 2,0 m.',
          'انطلاقاً من h_min = 5R/2، احسب الارتفاع الأدنى للإفلات بالمتر من أجل عروة نصف قطرها R = 2.0 m.',
        ),
        answer: 5,
        unit: 'm',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'For a particle subject only to a central force, which quantity is conserved?',
          'Pour une particule soumise uniquement à une force centrale, quelle grandeur est conservée ?',
          'بالنسبة إلى جسيم خاضع لقوة مركزية فقط، أي مقدار يبقى محفوظاً؟',
        ),
        choices: [
          {
            text: L(
              'Angular momentum about the centre',
              'Le moment cinétique par rapport au centre',
              'العزم الحركي بالنسبة إلى المركز',
            ),
            explanation: L(
              'The force passes through the centre, so its torque about it is zero: dL/dt = 0 — the key to Kepler-type problems.',
              'La force passe par le centre, donc son moment y est nul : dL/dt = 0 — la clé des problèmes de type Kepler.',
              'القوة تمر بالمركز فعزمها بالنسبة إليه معدوم: dL/dt = 0 — مفتاح مسائل من نوع كبلر.',
            ),
          },
          { text: L('Linear momentum', 'La quantité de mouvement', 'كمية الحركة') },
          { text: L('Kinetic energy', 'L\'énergie cinétique', 'الطاقة الحركية') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('exam-prep', 'concours', 'concours-physics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Electromagnetism drills at concours level: motion of charged particles in E and B fields, Laplace and Lorentz forces, induction and energy stored in capacitors and coils. The jury checks vector reasoning: direction by the right-hand rule, then magnitude. Traps: forgetting that the magnetic force does no work (it cannot change the speed, only the direction), sign confusion for negative charges, and powers of ten with µF, mT and km/s.',
          'Exercices d\'électromagnétisme niveau concours : mouvement de particules chargées dans des champs E et B, forces de Laplace et de Lorentz, induction et énergie stockée dans les condensateurs et les bobines. Le jury vérifie le raisonnement vectoriel : direction par la règle de la main droite, puis norme. Pièges : oublier que la force magnétique ne travaille pas (elle ne peut pas changer la vitesse, seulement la direction), confusion de signe pour les charges négatives, et puissances de dix avec µF, mT et km/s.',
          'تمارين الكهرومغناطيسية بمستوى المناظرات: حركة الجسيمات المشحونة في الحقلين E و B، قوتا لابلاس ولورنتز، التحريض والطاقة المخزنة في المكثفات والوشائع. تتحقق اللجنة من الاستدلال الشعاعي: الاتجاه بقاعدة اليد اليمنى ثم القيمة. الأخطاء: نسيان أن القوة المغناطيسية لا تبذل عملاً (لا تغيّر السرعة بل الاتجاه فقط)، الخلط في الإشارة مع الشحنات السالبة، وقوى العشرة مع µF و mT و km/s.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Concours-style problem: a proton (m = 1.67×10⁻²⁷ kg, q = 1.6×10⁻¹⁹ C) enters a uniform field B = 0.10 T with speed v = 1.0×10⁵ m/s perpendicular to B. 1) Show that the motion is uniform circular. 2) Express and compute the radius r of the trajectory.',
          'Problème type concours : un proton (m = 1,67×10⁻²⁷ kg, q = 1,6×10⁻¹⁹ C) entre dans un champ uniforme B = 0,10 T avec une vitesse v = 1,0×10⁵ m/s perpendiculaire à B. 1) Montrer que le mouvement est circulaire uniforme. 2) Exprimer et calculer le rayon r de la trajectoire.',
          'مسألة على نمط المناظرات: بروتون (m = 1.67×10⁻²⁷ kg، ‏q = 1.6×10⁻¹⁹ C) يدخل حقلاً منتظماً B = 0.10 T بسرعة v = 1.0×10⁵ m/s عمودية على B. ‏1) بيّن أن الحركة دائرية منتظمة. ‏2) عبّر عن نصف قطر المسار r ثم احسبه.',
        ),
        answer: L(
          '1) The Lorentz force F = qv∧B is always perpendicular to v, so its power is zero: the kinetic energy, hence the speed, is constant — the motion is uniform. A constant-magnitude force perpendicular to a constant-magnitude velocity bends the trajectory into a circle. 2) The magnetic force is centripetal: qvB = mv²/r, so r = mv/(qB). Numerically: r = (1.67×10⁻²⁷ × 1.0×10⁵)/(1.6×10⁻¹⁹ × 0.10) = 1.67×10⁻²²/1.6×10⁻²⁰ ≈ 1.0×10⁻² m, i.e. about 1 cm. Concours reflex: check the formula\'s behaviour — heavier or faster particles curve less (larger r), stronger fields curve more (smaller r).',
          '1) La force de Lorentz F = qv∧B est toujours perpendiculaire à v, donc sa puissance est nulle : l\'énergie cinétique, donc la vitesse, est constante — le mouvement est uniforme. Une force de norme constante perpendiculaire à une vitesse de norme constante courbe la trajectoire en cercle. 2) La force magnétique est centripète : qvB = mv²/r, donc r = mv/(qB). Numériquement : r = (1,67×10⁻²⁷ × 1,0×10⁵)/(1,6×10⁻¹⁹ × 0,10) = 1,67×10⁻²²/1,6×10⁻²⁰ ≈ 1,0×10⁻² m, soit environ 1 cm. Réflexe concours : vérifie le comportement de la formule — particules plus lourdes ou plus rapides moins courbées (r plus grand), champs plus forts plus courbés (r plus petit).',
          '1) قوة لورنتز F = qv∧B عمودية دائماً على v، فاستطاعتها معدومة: الطاقة الحركية، ومنه السرعة، ثابتة — الحركة منتظمة. قوة ثابتة القيمة وعمودية على سرعة ثابتة القيمة تَحني المسار إلى دائرة. ‏2) القوة المغناطيسية جاذبة مركزية: qvB = mv²/r، إذن r = mv/(qB). عددياً: r = (1.67×10⁻²⁷ × 1.0×10⁵)/(1.6×10⁻¹⁹ × 0.10) = 1.67×10⁻²²/1.6×10⁻²⁰ ≈ 1.0×10⁻² m، أي نحو 1 cm. رد فعل المناظرة: افحص سلوك الصيغة — الجسيمات الأثقل أو الأسرع تنحني أقل (r أكبر)، والحقول الأقوى تحني أكثر (r أصغر).',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'The magnetic force never does work: it changes the direction of v, never its magnitude.',
            'La force magnétique ne travaille jamais : elle change la direction de v, jamais sa norme.',
            'القوة المغناطيسية لا تبذل عملاً أبداً: تغيّر اتجاه v ولا تغيّر قيمتها.',
          ),
          L(
            'Direction of qv∧B by the right-hand rule; reverse it for a negative charge.',
            'Direction de qv∧B par la règle de la main droite ; inverse-la pour une charge négative.',
            'اتجاه qv∧B بقاعدة اليد اليمنى؛ واعكسه من أجل شحنة سالبة.',
          ),
          L(
            'Stored energies: capacitor E = ½CV², coil E = ½Li² — the two workhorses of circuit energy balances.',
            'Énergies stockées : condensateur E = ½CV², bobine E = ½Li² — les deux piliers des bilans énergétiques de circuits.',
            'الطاقات المخزنة: المكثف E = ½CV²، الوشيعة E = ½Li² — الركيزتان في الحصيلات الطاقية للدارات.',
          ),
          L(
            'Lenz\'s law: the induced current opposes the flux variation that created it — state it before any sign.',
            'Loi de Lenz : le courant induit s\'oppose à la variation de flux qui l\'a créé — énonce-la avant tout signe.',
            'قانون لنز: التيار المتحرَّض يعاكس تغيّر التدفق الذي ولّده — اذكره قبل تحديد أي إشارة.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A charged particle moves parallel to a uniform magnetic field B. The magnetic force on it is…',
          'Une particule chargée se déplace parallèlement à un champ magnétique uniforme B. La force magnétique qu\'elle subit est…',
          'جسيم مشحون يتحرك موازياً لحقل مغناطيسي منتظم B. القوة المغناطيسية المطبقة عليه…',
        ),
        choices: [
          {
            text: L('Zero', 'Nulle', 'معدومة'),
            explanation: L(
              'F = |q|·v·B·sin θ with θ = 0: the cross product v∧B vanishes for parallel vectors.',
              'F = |q|·v·B·sin θ avec θ = 0 : le produit vectoriel v∧B s\'annule pour des vecteurs parallèles.',
              'F = |q|·v·B·sin θ حيث θ = 0: الجداء الشعاعي v∧B ينعدم لشعاعين متوازيين.',
            ),
          },
          {
            text: L('Maximal', 'Maximale', 'أعظمية'),
          },
          {
            text: L('Directed along B', 'Dirigée selon B', 'موجهة وفق B'),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Compute the energy E = ½CV² stored in a capacitor C = 2.0 µF charged to V = 100 V. Give E in joules.',
          'Calcule l\'énergie E = ½CV² stockée dans un condensateur C = 2,0 µF chargé sous V = 100 V. Donne E en joules.',
          'احسب الطاقة E = ½CV² المخزنة في مكثف C = 2.0 µF مشحون تحت توتر V = 100 V. أعطِ E بالجول.',
        ),
        answer: 0.01,
        tolerance: 0.001,
        unit: 'J',
      },
    ],
  },
  [lessonKey('exam-prep', 'concours', 'concours-physics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Concours physics is ranked, not passed: technique converts knowledge into points. Three tools pay every time — dimensional analysis to recover or check formulas, orders of magnitude to catch absurd results, and symbolic computation kept literal until the very last line. Traps: plugging numbers in too early (one keystroke error destroys the whole chain), leaving a result like 10⁷ m/s for a car unquestioned, and losing method points by skipping the setup sentences the grading scheme rewards.',
          'La physique de concours se classe, elle ne se valide pas : la technique convertit les connaissances en points. Trois outils rapportent à chaque fois — l\'analyse dimensionnelle pour retrouver ou vérifier des formules, les ordres de grandeur pour repérer les résultats absurdes, et le calcul littéral gardé jusqu\'à la toute dernière ligne. Pièges : passer aux valeurs numériques trop tôt (une erreur de frappe détruit toute la chaîne), laisser passer un résultat comme 10⁷ m/s pour une voiture, et perdre les points de méthode en sautant les phrases de mise en place que le barème récompense.',
          'فيزياء المناظرات ترتيبية لا اجتيازية: التقنية تحوّل المعارف إلى نقاط. ثلاث أدوات تدرّ نقاطاً في كل مرة — التحليل البعدي لاستعادة الصيغ أو فحصها، ورتب المقادير لاكتشاف النتائج العبثية، والحساب الحرفي المحفوظ رمزياً حتى السطر الأخير. الأخطاء: التعويض العددي مبكراً (خطأ ضغطة واحدة يهدم السلسلة كلها)، وترك نتيجة مثل 10⁷ m/s لسيارة دون تساؤل، وخسارة نقاط المنهجية بإهمال جمل التأسيس التي يكافئها سلّم التقييم.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Technique demonstration: during the exam you forget the formula for the period of a simple pendulum of length l. Rebuild it by dimensional analysis using l (m) and g (m/s²), then check the order of magnitude for l = 1.0 m.',
          'Démonstration de technique : pendant l\'épreuve tu oublies la formule de la période d\'un pendule simple de longueur l. Retrouve-la par analyse dimensionnelle avec l (m) et g (m/s²), puis vérifie l\'ordre de grandeur pour l = 1,0 m.',
          'عرض تقني: أثناء الاختبار تنسى صيغة دور النواس البسيط ذي الطول l. أعد بناءها بالتحليل البعدي باستعمال l (m) و g (m/s²)، ثم تحقق من رتبة المقدار من أجل l = 1.0 m.',
        ),
        answer: L(
          'Seek T = k · l^a · g^b with k dimensionless. Dimensions: [l^a · g^b] = mᵃ · (m/s²)ᵇ = m^(a+b) · s^(−2b). To obtain seconds: a + b = 0 and −2b = 1, so b = −1/2 and a = 1/2. Hence T = k√(l/g); the exact theory gives k = 2π, so T = 2π√(l/g). Order-of-magnitude check: l = 1.0 m, g ≈ 10 m/s² gives √0.1 ≈ 0.32 s and T ≈ 2 s — exactly what a metre-long pendulum does. Note what dimensional analysis can and cannot do: it recovers the structure √(l/g) but never the dimensionless factor 2π.',
          'On cherche T = k · l^a · g^b avec k sans dimension. Dimensions : [l^a · g^b] = mᵃ · (m/s²)ᵇ = m^(a+b) · s^(−2b). Pour obtenir des secondes : a + b = 0 et −2b = 1, donc b = −1/2 et a = 1/2. D\'où T = k√(l/g) ; la théorie exacte donne k = 2π, donc T = 2π√(l/g). Contrôle d\'ordre de grandeur : l = 1,0 m, g ≈ 10 m/s² donne √0,1 ≈ 0,32 s et T ≈ 2 s — exactement ce que fait un pendule d\'un mètre. Note ce que l\'analyse dimensionnelle peut et ne peut pas faire : elle retrouve la structure √(l/g) mais jamais le facteur sans dimension 2π.',
          'نبحث عن T = k · l^a · g^b حيث k بلا بعد. الأبعاد: [l^a · g^b] = mᵃ · (m/s²)ᵇ = m^(a+b) · s^(−2b). للحصول على الثواني: a + b = 0 و −2b = 1، إذن b = −1/2 و a = 1/2. ومنه T = k√(l/g)؛ وتعطي النظرية الدقيقة k = 2π، إذن T = 2π√(l/g). فحص رتبة المقدار: l = 1.0 m و g ≈ 10 m/s² يعطي √0.1 ≈ 0.32 s و T ≈ 2 s — وهو بالضبط ما يفعله نواس طوله متر. لاحظ ما يستطيعه التحليل البعدي وما لا يستطيعه: يستعيد البنية √(l/g) لكنه لا يعطي أبداً العامل عديم البعد 2π.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Solve symbolically and substitute numbers only in the final line, with units written out.',
            'Résous en littéral et ne remplace les valeurs numériques qu\'à la dernière ligne, avec les unités écrites.',
            'حل رمزياً ولا تعوّض القيم العددية إلا في السطر الأخير، مع كتابة الوحدات.',
          ),
          L(
            'Check every result twice: dimensions first, order of magnitude second.',
            'Vérifie chaque résultat deux fois : les dimensions d\'abord, l\'ordre de grandeur ensuite.',
            'افحص كل نتيجة مرتين: الأبعاد أولاً ثم رتبة المقدار.',
          ),
          L(
            'Scan the whole paper in the first five minutes and start with your strongest exercise.',
            'Parcours tout le sujet dans les cinq premières minutes et commence par ton exercice le plus solide.',
            'تصفح الموضوع كاملاً في الدقائق الخمس الأولى وابدأ بالتمرين الأقوى لديك.',
          ),
          L(
            'A blocked question still pays: write the physical principle and the setup — method points exist.',
            'Une question bloquée rapporte quand même : écris le principe physique et la mise en équation — les points de méthode existent.',
            'السؤال المستعصي يدرّ نقاطاً أيضاً: اكتب المبدأ الفيزيائي ووضع المعادلات — نقاط المنهجية موجودة.',
          ),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the recommended approach to a long concours physics problem.',
          'Mets dans l\'ordre l\'approche recommandée d\'un long problème de physique de concours.',
          'رتّب المقاربة الموصى بها لمسألة فيزياء طويلة في المناظرة.',
        ),
        steps: [
          L(
            'Read the entire problem and locate the accessible questions',
            'Lire tout le problème et repérer les questions accessibles',
            'قراءة المسألة كاملة وتحديد الأسئلة المتاحة',
          ),
          L(
            'List the given data and convert everything to SI units',
            'Lister les données et tout convertir en unités SI',
            'جرد المعطيات وتحويل كل شيء إلى الوحدات الدولية',
          ),
          L(
            'State the physical principle and set up the equations symbolically',
            'Énoncer le principe physique et mettre en équation en littéral',
            'ذكر المبدأ الفيزيائي ووضع المعادلات رمزياً',
          ),
          L(
            'Substitute the numbers only in the final expression',
            'Remplacer les valeurs numériques seulement dans l\'expression finale',
            'التعويض العددي في العبارة النهائية فقط',
          ),
          L(
            'Check dimensions and the order of magnitude of the result',
            'Vérifier les dimensions et l\'ordre de grandeur du résultat',
            'فحص الأبعاد ورتبة مقدار النتيجة',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which expression has the dimension of a time, for a length l and the gravity field g?',
          'Quelle expression a la dimension d\'un temps, pour une longueur l et le champ de pesanteur g ?',
          'أي عبارة لها بعد الزمن، من أجل طول l وحقل الثقالة g؟',
        ),
        choices: [
          {
            text: L('√(l/g)', '√(l/g)', '√(l/g)'),
            explanation: L(
              '[l/g] = m/(m/s²) = s², and the square root gives seconds.',
              '[l/g] = m/(m/s²) = s², et la racine carrée donne des secondes.',
              '‏[l/g] = m/(m/s²) = s²، والجذر التربيعي يعطي الثواني.',
            ),
          },
          { text: L('√(g/l)', '√(g/l)', '√(g/l)') },
          { text: L('l·g', 'l·g', 'l·g') },
        ],
        correctIndex: 0,
      },
    ],
  },
}
