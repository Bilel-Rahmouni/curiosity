import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// French language course: beginner basics & phrases → intermediate grammar & conversation → advanced fluency & culture.
export const frenchLessons: Record<string, LessonContent> = {
  // Beginner — Basics
  [lessonKey('french', 'beginner', 'basics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'French greetings change with the time of day and how well you know the person. Start every conversation with a greeting — it is considered basic politeness in France.',
          'Les salutations françaises changent selon le moment de la journée et la personne. Commence toujours une conversation par une salutation — c\'est la politesse de base en France.',
          'تتغير التحيات الفرنسية حسب وقت اليوم ومدى معرفتك بالشخص. ابدأ كل محادثة بتحية — فهي من أساسيات اللباقة في فرنسا.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Bonjour » — hello / good day', '« Bonjour » — salutation de la journée', '« Bonjour » — تحية النهار'),
          L('« Bonsoir » — good evening', '« Bonsoir » — salutation du soir', '« Bonsoir » — تحية المساء'),
          L('« Salut » — hi (informal)', '« Salut » — salutation familière', '« Salut » — تحية غير رسمية'),
          L('« Je m\'appelle… » — my name is…', '« Je m\'appelle… » — pour dire son nom', '« Je m\'appelle… » — اسمي هو…'),
          L('« Enchanté » — nice to meet you', '« Enchanté » — formule de rencontre', '« Enchanté » — تشرفت بلقائك'),
          L('« Au revoir » — goodbye', '« Au revoir » — formule de départ', '« Au revoir » — إلى اللقاء'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "good evening" in French?',
          'Comment dit-on une salutation du soir en français ?',
          'كيف تقول تحية المساء بالفرنسية؟',
        ),
        answer: L('« Bonsoir »', '« Bonsoir »', '« Bonsoir »'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which phrase do you use to introduce yourself?',
          'Quelle phrase utilises-tu pour te présenter ?',
          'أي عبارة تستخدم لتقديم نفسك؟',
        ),
        choices: [
          { text: L('« Au revoir »', '« Au revoir »', '« Au revoir »') },
          {
            text: L('« Je m\'appelle Marie »', '« Je m\'appelle Marie »', '« Je m\'appelle Marie »'),
            explanation: L(
              '« Je m\'appelle… » literally means "I call myself…".',
              '« Je m\'appelle… » sert à donner son nom.',
              '« Je m\'appelle… » تعني حرفياً «أنا أسمّي نفسي…».',
            ),
          },
          { text: L('« Bonsoir »', '« Bonsoir »', '« Bonsoir »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to introduce yourself.',
          'Mets les mots dans l\'ordre pour te présenter.',
          'رتّب الكلمات لتقديم نفسك.',
        ),
        steps: [
          L('Bonjour,', 'Bonjour,', 'Bonjour,'),
          L('je', 'je', 'je'),
          L('m\'appelle', 'm\'appelle', 'm\'appelle'),
          L('Paul.', 'Paul.', 'Paul.'),
        ],
      },
    ],
  },
  [lessonKey('french', 'beginner', 'basics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'French numbers are regular up to 69, then combine: 70 is « soixante-dix » (sixty-ten) and 80 is « quatre-vingts » (four twenties). To ask the time, say « Quelle heure est-il ? ».',
          'Les nombres français sont réguliers jusqu\'à 69, puis se combinent : 70 se dit « soixante-dix » et 80 « quatre-vingts ». Pour demander l\'heure, on dit « Quelle heure est-il ? ».',
          'الأعداد الفرنسية منتظمة حتى 69 ثم تتركّب: 70 تقال « soixante-dix » (ستون-عشرة) و80 « quatre-vingts » (أربع عشرينات). لتسأل عن الوقت قل « Quelle heure est-il ? ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('« un, deux, trois » — one, two, three', '« un, deux, trois » — les trois premiers nombres', '« un, deux, trois » — واحد، اثنان، ثلاثة'),
          L('« dix » — ten, « vingt » — twenty', '« dix » — 10, « vingt » — 20', '« dix » — عشرة، « vingt » — عشرون'),
          L('« soixante-dix » — seventy', '« soixante-dix » — 70', '« soixante-dix » — سبعون'),
          L('« quatre-vingts » — eighty', '« quatre-vingts » — 80', '« quatre-vingts » — ثمانون'),
          L('« Quelle heure est-il ? » — what time is it?', '« Quelle heure est-il ? » — pour demander l\'heure', '« Quelle heure est-il ? » — كم الساعة؟'),
          L('« Il est trois heures » — it is three o\'clock', '« Il est trois heures » — pour donner l\'heure', '« Il est trois heures » — الساعة الثالثة'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What number is « soixante-dix » ?',
          'Quel nombre est « soixante-dix » ?',
          'ما هو العدد « soixante-dix » ؟',
        ),
        answer: 70,
        hint: L(
          'soixante = 60, dix = 10.',
          'soixante = 60, dix = 10.',
          'soixante = 60 و dix = 10.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What does « Il est midi » mean?',
          'Que signifie « Il est midi » ?',
          'ماذا تعني « Il est midi » ؟',
        ),
        choices: [
          { text: L('It is midnight', 'Il est minuit (00 h)', 'إنها منتصف الليل') },
          {
            text: L('It is noon', 'Il est 12 h (le milieu de la journée)', 'إنها الظهيرة'),
            explanation: L(
              '« midi » is noon; « minuit » is midnight.',
              '« midi » = 12 h ; « minuit » = 00 h.',
              '« midi » تعني الظهر، أما « minuit » فتعني منتصف الليل.',
            ),
          },
          { text: L('It is three o\'clock', 'Il est trois heures', 'إنها الثالثة') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('french', 'beginner', 'basics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Every French noun has a gender: masculine nouns take « le » and feminine nouns take « la ». Learn each object together with its article.',
          'Chaque nom français a un genre : les noms masculins prennent « le » et les féminins « la ». Apprends chaque objet avec son article.',
          'لكل اسم فرنسي جنس: الأسماء المذكرة تأخذ « le » والمؤنثة تأخذ « la ». احفظ كل شيء مع أداته.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« le livre » — the book', '« le livre » — objet pour lire', '« le livre » — الكتاب'),
          L('« la table » — the table', '« la table » — meuble pour manger ou travailler', '« la table » — الطاولة'),
          L('« la chaise » — the chair', '« la chaise » — meuble pour s\'asseoir', '« la chaise » — الكرسي'),
          L('« le téléphone » — the phone', '« le téléphone » — appareil pour appeler', '« le téléphone » — الهاتف'),
          L('« la porte » — the door', '« la porte » — pour entrer et sortir', '« la porte » — الباب'),
          L('« la fenêtre » — the window', '« la fenêtre » — ouverture dans le mur', '« la fenêtre » — النافذة'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "the book" in French?',
          'Comment dit-on l\'objet que l\'on lit, avec son article ?',
          'كيف تقول «الكتاب» بالفرنسية؟',
        ),
        answer: L('« le livre »', '« le livre »', '« le livre »'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which word means "the window"?',
          'Quel mot désigne l\'ouverture dans le mur ?',
          'أي كلمة تعني «النافذة»؟',
        ),
        choices: [
          { text: L('« la porte »', '« la porte »', '« la porte »') },
          { text: L('« la fenêtre »', '« la fenêtre »', '« la fenêtre »') },
          { text: L('« la chaise »', '« la chaise »', '« la chaise »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which article goes before « table »?',
          'Quel article se place devant « table » ?',
          'أي أداة توضع قبل « table » ؟',
        ),
        choices: [
          { text: L('« le »', '« le »', '« le »') },
          {
            text: L('« la »', '« la »', '« la »'),
            explanation: L(
              '« table » is feminine: « la table ».',
              '« table » est un nom féminin : « la table ».',
              '« table » اسم مؤنث: « la table ».',
            ),
          },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Beginner — Phrases
  [lessonKey('french', 'beginner', 'phrases', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'At a French café, politeness matters: always add « s\'il vous plaît » when ordering and « merci » when served. « Je voudrais » (I would like) is the polite way to ask for something.',
          'Au café, la politesse compte : ajoute toujours « s\'il vous plaît » pour commander et « merci » quand on te sert. « Je voudrais » est la façon polie de demander quelque chose.',
          'في المقهى الفرنسي اللباقة مهمة: أضف دائماً « s\'il vous plaît » عند الطلب و« merci » عند التقديم. عبارة « Je voudrais » هي الطريقة المهذبة لطلب شيء.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Un café, s\'il vous plaît » — a coffee, please', '« Un café, s\'il vous plaît » — pour commander un café', '« Un café, s\'il vous plaît » — قهوة من فضلك'),
          L('« Je voudrais un croissant » — I would like a croissant', '« Je voudrais un croissant » — demande polie', '« Je voudrais un croissant » — أودّ كرواسان'),
          L('« Une table pour deux » — a table for two', '« Une table pour deux » — pour réserver une place', '« Une table pour deux » — طاولة لشخصين'),
          L('« L\'addition, s\'il vous plaît » — the bill, please', '« L\'addition, s\'il vous plaît » — pour payer', '« L\'addition, s\'il vous plaît » — الحساب من فضلك'),
          L('« Merci beaucoup » — thank you very much', '« Merci beaucoup » — pour remercier', '« Merci beaucoup » — شكراً جزيلاً'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you politely ask for the bill?',
          'Comment demander poliment à payer ?',
          'كيف تطلب الحساب بأدب؟',
        ),
        answer: L('« L\'addition, s\'il vous plaît »', '« L\'addition, s\'il vous plaît »', '« L\'addition, s\'il vous plaît »'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which phrase means "I would like"?',
          'Quelle expression est la demande polie ?',
          'أي عبارة تعني «أودّ»؟',
        ),
        choices: [
          {
            text: L('« Je voudrais »', '« Je voudrais »', '« Je voudrais »'),
            explanation: L(
              'The conditional « voudrais » softens the request.',
              'Le conditionnel « voudrais » rend la demande plus polie.',
              'صيغة « voudrais » الشرطية تجعل الطلب أكثر تهذيباً.',
            ),
          },
          { text: L('« Je veux »', '« Je veux »', '« Je veux »') },
          { text: L('« Merci »', '« Merci »', '« Merci »') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to order a coffee politely.',
          'Mets les mots dans l\'ordre pour commander un café poliment.',
          'رتّب الكلمات لطلب قهوة بأدب.',
        ),
        steps: [
          L('Je', 'Je', 'Je'),
          L('voudrais', 'voudrais', 'voudrais'),
          L('un', 'un', 'un'),
          L('café,', 'café,', 'café,'),
          L('s\'il vous plaît.', 's\'il vous plaît.', 's\'il vous plaît.'),
        ],
      },
    ],
  },
  [lessonKey('french', 'beginner', 'phrases', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To find your way, ask « Où est… ? » (where is…?) followed by the place. The answers use three key directions: left, right, and straight ahead.',
          'Pour trouver ton chemin, demande « Où est… ? » suivi du lieu. Les réponses utilisent trois directions clés : à gauche, à droite et tout droit.',
          'لتجد طريقك اسأل « Où est… ? » (أين…؟) متبوعة باسم المكان. تعتمد الإجابات على ثلاثة اتجاهات رئيسية: يسار ويمين وإلى الأمام.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Où est la gare ? » — where is the train station?', '« Où est la gare ? » — pour trouver les trains', '« Où est la gare ? » — أين محطة القطار؟'),
          L('« à gauche » — to the left', '« à gauche » — du côté du cœur', '« à gauche » — إلى اليسار'),
          L('« à droite » — to the right', '« à droite » — le côté opposé à gauche', '« à droite » — إلى اليمين'),
          L('« tout droit » — straight ahead', '« tout droit » — sans tourner', '« tout droit » — إلى الأمام مباشرة'),
          L('« la banque » — the bank', '« la banque » — pour l\'argent', '« la banque » — البنك'),
          L('« l\'hôpital » — the hospital', '« l\'hôpital » — pour les soins', '« l\'hôpital » — المستشفى'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask where the train station is?',
          'Comment demander où se trouvent les trains ?',
          'كيف تسأل عن مكان محطة القطار؟',
        ),
        answer: L('« Où est la gare ? »', '« Où est la gare ? »', '« Où est la gare ? »'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does « tout droit » mean?',
          'Que signifie « tout droit » ?',
          'ماذا تعني « tout droit » ؟',
        ),
        choices: [
          { text: L('To the right', 'Du côté droit', 'إلى اليمين') },
          { text: L('Straight ahead', 'Sans tourner, devant soi', 'إلى الأمام مباشرة') },
          { text: L('To the left', 'Du côté gauche', 'إلى اليسار') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to ask where the bank is.',
          'Mets les mots dans l\'ordre pour demander où est la banque.',
          'رتّب الكلمات للسؤال عن مكان البنك.',
        ),
        steps: [
          L('Où', 'Où', 'Où'),
          L('est', 'est', 'est'),
          L('la', 'la', 'la'),
          L('banque ?', 'banque ?', 'banque ?'),
        ],
      },
    ],
  },
  [lessonKey('french', 'beginner', 'phrases', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'When shopping, the key question is « Combien ça coûte ? » (how much does it cost?). Shopkeepers greet you with « Bonjour » when you enter — always greet back before asking anything.',
          'Pour faire des achats, la question clé est « Combien ça coûte ? ». Les commerçants disent « Bonjour » à ton entrée — réponds toujours avant de demander quoi que ce soit.',
          'عند التسوق، السؤال الأساسي هو « Combien ça coûte ? » (بكم هذا؟). يرحّب بك الباعة بـ« Bonjour » عند دخولك — ردّ التحية دائماً قبل أن تسأل عن أي شيء.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Combien ça coûte ? » — how much does it cost?', '« Combien ça coûte ? » — pour demander le prix', '« Combien ça coûte ? » — بكم هذا؟'),
          L('« C\'est trop cher » — it is too expensive', '« C\'est trop cher » — quand le prix est élevé', '« C\'est trop cher » — هذا غالٍ جداً'),
          L('« Je cherche une chemise » — I am looking for a shirt', '« Je cherche une chemise » — pour demander un article', '« Je cherche une chemise » — أبحث عن قميص'),
          L('« Quelle taille ? » — what size?', '« Quelle taille ? » — pour les vêtements', '« Quelle taille ? » — ما المقاس؟'),
          L('« Je le prends » — I will take it', '« Je le prends » — pour acheter l\'article', '« Je le prends » — سآخذه'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you ask the price of something?',
          'Comment demander le prix d\'un article ?',
          'كيف تسأل عن سعر شيء ما؟',
        ),
        choices: [
          { text: L('« Quelle taille ? »', '« Quelle taille ? »', '« Quelle taille ? »') },
          { text: L('« Combien ça coûte ? »', '« Combien ça coûte ? »', '« Combien ça coûte ? »') },
          { text: L('« Je le prends »', '« Je le prends »', '« Je le prends »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'The seller says « Ça coûte vingt euros ». How many euros is that?',
          'Le vendeur dit « Ça coûte vingt euros ». Combien d\'euros cela fait-il ?',
          'يقول البائع « Ça coûte vingt euros ». كم يورو يعني ذلك؟',
        ),
        answer: 20,
        hint: L('« vingt » = 20.', '« vingt » = 20.', '« vingt » تعني 20.'),
      },
    ],
  },

  // Intermediate — Grammar
  [lessonKey('french', 'intermediate', 'grammar', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Regular -er verbs like « parler » (to speak) follow one pattern in the present tense. The two most important irregular verbs are « être » (to be) and « avoir » (to have) — memorize them fully.',
          'Les verbes réguliers en -er comme « parler » suivent un seul modèle au présent. Les deux verbes irréguliers les plus importants sont « être » et « avoir » — apprends-les par cœur.',
          'الأفعال المنتظمة المنتهية بـ -er مثل « parler » (يتكلم) تتبع نمطاً واحداً في المضارع. أهم فعلين شاذين هما « être » (يكون) و« avoir » (يملك) — احفظهما كاملين.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« je parle, tu parles, il parle » — I speak, you speak, he speaks', '« je parle, tu parles, il parle » — le singulier de parler', '« je parle, tu parles, il parle » — أنا أتكلم، أنت تتكلم، هو يتكلم'),
          L('« nous parlons, vous parlez, ils parlent » — we / you / they speak', '« nous parlons, vous parlez, ils parlent » — le pluriel de parler', '« nous parlons, vous parlez, ils parlent » — نحن/أنتم/هم يتكلمون'),
          L('« je suis, tu es, il est, nous sommes » — forms of to be', '« je suis, tu es, il est, nous sommes » — le verbe être', '« je suis, tu es, il est, nous sommes » — تصريف فعل الكينونة'),
          L('« j\'ai, tu as, il a, nous avons » — forms of to have', '« j\'ai, tu as, il a, nous avons » — le verbe avoir', '« j\'ai, tu as, il a, nous avons » — تصريف فعل الملكية'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Choose the correct form of « être »: « Nous ___ contents. »',
          'Choisis la bonne forme d\'« être » : « Nous ___ contents. »',
          'اختر الصيغة الصحيحة لفعل « être »: « Nous ___ contents. »',
        ),
        choices: [
          { text: L('« sont »', '« sont »', '« sont »') },
          {
            text: L('« sommes »', '« sommes »', '« sommes »'),
            explanation: L(
              '« nous » always takes « sommes »: « nous sommes ».',
              'Avec « nous », être se conjugue « sommes » : « nous sommes ».',
              'مع « nous » يُصرَّف الفعل « sommes »: « nous sommes ».',
            ),
          },
          { text: L('« êtes »', '« êtes »', '« êtes »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Choose the correct form of « parler »: « Ils ___ français. »',
          'Choisis la bonne forme de « parler » : « Ils ___ français. »',
          'اختر الصيغة الصحيحة لفعل « parler »: « Ils ___ français. »',
        ),
        choices: [
          { text: L('« parle »', '« parle »', '« parle »') },
          { text: L('« parlez »', '« parlez »', '« parlez »') },
          {
            text: L('« parlent »', '« parlent »', '« parlent »'),
            explanation: L(
              'With « ils » the -er verb ends in -ent (silent).',
              'Avec « ils », le verbe en -er prend la terminaison -ent (muette).',
              'مع « ils » ينتهي الفعل بـ -ent (لا تُنطق).',
            ),
          },
        ],
        correctIndex: 2,
      },
    ],
  },
  [lessonKey('french', 'intermediate', 'grammar', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The passé composé describes completed past actions. It combines « avoir » or « être » in the present with a past participle. Most verbs use « avoir »; movement verbs like « aller » (to go) use « être », and their participle agrees with the subject.',
          'Le passé composé décrit une action passée et terminée. Il combine « avoir » ou « être » au présent avec un participe passé. La plupart des verbes utilisent « avoir » ; les verbes de mouvement comme « aller » utilisent « être », et le participe s\'accorde avec le sujet.',
          'الماضي المركّب (passé composé) يصف حدثاً ماضياً منتهياً. يتكوّن من « avoir » أو « être » في المضارع مع اسم المفعول. معظم الأفعال تستعمل « avoir »؛ أما أفعال الحركة مثل « aller » (يذهب) فتستعمل « être » ويطابق اسم المفعول الفاعل.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« J\'ai mangé » — I ate', '« J\'ai mangé » — passé composé avec avoir', '« J\'ai mangé » — أكلتُ'),
          L('« Tu as fini » — you finished', '« Tu as fini » — participe passé en -i', '« Tu as fini » — أنهيتَ'),
          L('« Elle est allée » — she went', '« Elle est allée » — être + accord au féminin', '« Elle est allée » — ذهبَتْ'),
          L('« Nous avons vu » — we saw', '« Nous avons vu » — participe passé irrégulier', '« Nous avons vu » — رأينا'),
          L('« Ils sont partis » — they left', '« Ils sont partis » — être + accord au pluriel', '« Ils sont partis » — غادروا'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which auxiliary does « aller » take in the passé composé?',
          'Quel auxiliaire prend « aller » au passé composé ?',
          'أي فعل مساعد يأخذه « aller » في الماضي المركّب؟',
        ),
        choices: [
          { text: L('« avoir »', '« avoir »', '« avoir »') },
          {
            text: L('« être »', '« être »', '« être »'),
            explanation: L(
              'Movement verbs like « aller » and « partir » take « être ».',
              'Les verbes de mouvement comme « aller » et « partir » prennent « être ».',
              'أفعال الحركة مثل « aller » و« partir » تأخذ « être ».',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "Yesterday, I ate a pizza."',
          'Mets les mots dans l\'ordre : hier, manger une pizza au passé composé.',
          'رتّب الكلمات: «بالأمس أكلتُ بيتزا».',
        ),
        steps: [
          L('Hier,', 'Hier,', 'Hier,'),
          L('j\'ai', 'j\'ai', 'j\'ai'),
          L('mangé', 'mangé', 'mangé'),
          L('une', 'une', 'une'),
          L('pizza.', 'pizza.', 'pizza.'),
        ],
      },
    ],
  },
  [lessonKey('french', 'intermediate', 'grammar', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'French offers three ways to ask a question: intonation (« Tu viens ? »), « Est-ce que » (« Est-ce que tu viens ? »), and inversion (« Viens-tu ? »). Negation wraps the verb with « ne … pas ».',
          'Le français offre trois façons de poser une question : l\'intonation (« Tu viens ? »), « Est-ce que » (« Est-ce que tu viens ? ») et l\'inversion (« Viens-tu ? »). La négation encadre le verbe avec « ne … pas ».',
          'تقدّم الفرنسية ثلاث طرق لطرح السؤال: النبرة (« Tu viens ? ») وعبارة « Est-ce que » (« Est-ce que tu viens ? ») والقلب (« Viens-tu ? »). أما النفي فيحيط بالفعل بـ« ne … pas ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Est-ce que tu viens ? » — are you coming?', '« Est-ce que tu viens ? » — question avec est-ce que', '« Est-ce que tu viens ? » — هل أنت قادم؟'),
          L('« Qu\'est-ce que c\'est ? » — what is it?', '« Qu\'est-ce que c\'est ? » — pour demander ce qu\'est une chose', '« Qu\'est-ce que c\'est ? » — ما هذا؟'),
          L('« Parles-tu français ? » — do you speak French? (inversion)', '« Parles-tu français ? » — question par inversion', '« Parles-tu français ? » — هل تتكلم الفرنسية؟'),
          L('« Je ne sais pas » — I do not know', '« Je ne sais pas » — négation avec ne … pas', '« Je ne sais pas » — لا أعرف'),
          L('« Il ne mange pas » — he does not eat', '« Il ne mange pas » — le verbe encadré par la négation', '« Il ne mange pas » — هو لا يأكل'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is the negation of « Je parle »?',
          'Quelle est la négation de « Je parle » ?',
          'ما هو نفي « Je parle » ؟',
        ),
        choices: [
          { text: L('« Je pas parle »', '« Je pas parle »', '« Je pas parle »') },
          {
            text: L('« Je ne parle pas »', '« Je ne parle pas »', '« Je ne parle pas »'),
            explanation: L(
              '« ne » goes before the verb and « pas » after it.',
              '« ne » se place avant le verbe et « pas » après.',
              '« ne » تسبق الفعل و« pas » تليه.',
            ),
          },
          { text: L('« Ne je parle »', '« Ne je parle »', '« Ne je parle »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to ask "Do you like coffee?"',
          'Mets les mots dans l\'ordre pour demander si quelqu\'un aime le café.',
          'رتّب الكلمات لتسأل «هل تحب القهوة؟».',
        ),
        steps: [
          L('Est-ce que', 'Est-ce que', 'Est-ce que'),
          L('tu', 'tu', 'tu'),
          L('aimes', 'aimes', 'aimes'),
          L('le', 'le', 'le'),
          L('café ?', 'café ?', 'café ?'),
        ],
      },
    ],
  },

  // Intermediate — Conversation
  [lessonKey('french', 'intermediate', 'conversation', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To talk about yourself, you need a handful of patterns: your age uses « avoir » (not « être »), where you live uses « habiter à », and what you do uses « travailler comme ».',
          'Pour parler de toi, quelques structures suffisent : l\'âge s\'exprime avec « avoir » (pas « être »), le lieu avec « habiter à », et le métier avec « travailler comme ».',
          'للحديث عن نفسك تحتاج بضعة قوالب: العمر يُعبَّر عنه بفعل « avoir » (وليس « être »)، ومكان السكن بـ« habiter à »، والمهنة بـ« travailler comme ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('« J\'ai vingt ans » — I am twenty years old', '« J\'ai vingt ans » — l\'âge avec avoir', '« J\'ai vingt ans » — عمري عشرون سنة'),
          L('« J\'habite à Tunis » — I live in Tunis', '« J\'habite à Tunis » — le lieu de résidence', '« J\'habite à Tunis » — أسكن في تونس'),
          L('« Je viens de Tunisie » — I come from Tunisia', '« Je viens de Tunisie » — le pays d\'origine', '« Je viens de Tunisie » — أنا من تونس'),
          L('« Je travaille comme ingénieur » — I work as an engineer', '« Je travaille comme ingénieur » — le métier', '« Je travaille comme ingénieur » — أعمل مهندساً'),
          L('« J\'aime la musique » — I like music', '« J\'aime la musique » — les goûts', '« J\'aime la musique » — أحب الموسيقى'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say that you live in Paris?',
          'Comment dire que tu résides à Paris ?',
          'كيف تقول إنك تسكن في باريس؟',
        ),
        answer: L('« J\'habite à Paris »', '« J\'habite à Paris »', '« J\'habite à Paris »'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you say "I am 25 years old"?',
          'Comment dire son âge (25 ans) correctement ?',
          'كيف تقول «عمري 25 سنة»؟',
        ),
        choices: [
          { text: L('« Je suis vingt-cinq ans »', '« Je suis vingt-cinq ans »', '« Je suis vingt-cinq ans »') },
          {
            text: L('« J\'ai vingt-cinq ans »', '« J\'ai vingt-cinq ans »', '« J\'ai vingt-cinq ans »'),
            explanation: L(
              'French uses « avoir » for age, not « être ».',
              'En français, l\'âge se dit avec « avoir », jamais avec « être ».',
              'الفرنسية تستعمل « avoir » للعمر وليس « être ».',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "I have lived in Paris for two years."',
          'Mets les mots dans l\'ordre : habiter à Paris depuis deux ans.',
          'رتّب الكلمات: «أسكن في باريس منذ سنتين».',
        ),
        steps: [
          L('J\'habite', 'J\'habite', 'J\'habite'),
          L('à', 'à', 'à'),
          L('Paris', 'Paris', 'Paris'),
          L('depuis', 'depuis', 'depuis'),
          L('deux ans.', 'deux ans.', 'deux ans.'),
        ],
      },
    ],
  },
  [lessonKey('french', 'intermediate', 'conversation', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To make plans with friends, French speakers often use « on » instead of « nous »: « On va au cinéma ? » (shall we go to the movies?). « Ça te dit ? » is a casual way to ask if someone is interested.',
          'Pour proposer une sortie, on utilise souvent « on » à la place de « nous » : « On va au cinéma ? ». « Ça te dit ? » est une façon familière de demander si ça intéresse quelqu\'un.',
          'لاقتراح خطة مع الأصدقاء، يستعمل الفرنسيون غالباً « on » بدل « nous »: « On va au cinéma ? » (هل نذهب إلى السينما؟). وعبارة « Ça te dit ? » طريقة عفوية لتسأل إن كان الأمر يهم أحدهم.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Tu es libre samedi ? » — are you free on Saturday?', '« Tu es libre samedi ? » — pour vérifier la disponibilité', '« Tu es libre samedi ? » — هل أنت متفرغ السبت؟'),
          L('« On va au cinéma ? » — shall we go to the movies?', '« On va au cinéma ? » — pour proposer une sortie', '« On va au cinéma ? » — هل نذهب إلى السينما؟'),
          L('« Ça te dit ? » — are you up for it?', '« Ça te dit ? » — pour proposer de façon familière', '« Ça te dit ? » — هل يعجبك الاقتراح؟'),
          L('« Rendez-vous à huit heures » — meet at eight o\'clock', '« Rendez-vous à huit heures » — pour fixer l\'heure', '« Rendez-vous à huit heures » — موعدنا الساعة الثامنة'),
          L('« Désolé, je ne peux pas » — sorry, I can\'t', '« Désolé, je ne peux pas » — pour refuser poliment', '« Désolé, je ne peux pas » — آسف، لا أستطيع'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which phrase suggests an outing?',
          'Quelle phrase propose une sortie ?',
          'أي عبارة تقترح الخروج في نزهة؟',
        ),
        choices: [
          { text: L('« Désolé, je ne peux pas »', '« Désolé, je ne peux pas »', '« Désolé, je ne peux pas »') },
          { text: L('« On va au cinéma ? »', '« On va au cinéma ? »', '« On va au cinéma ? »') },
          { text: L('« Rendez-vous à huit heures »', '« Rendez-vous à huit heures »', '« Rendez-vous à huit heures »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          '« Rendez-vous à huit heures » — at what hour is the meeting?',
          '« Rendez-vous à huit heures » — à quelle heure est le rendez-vous ?',
          '« Rendez-vous à huit heures » — في أي ساعة الموعد؟',
        ),
        answer: 8,
        hint: L('« huit » = 8.', '« huit » = 8.', '« huit » تعني 8.'),
      },
    ],
  },
  [lessonKey('french', 'intermediate', 'conversation', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To share an opinion, open with « Je pense que… » (I think that…) or « À mon avis » (in my opinion). Agreeing and disagreeing politely keeps the conversation flowing.',
          'Pour donner ton opinion, commence par « Je pense que… » ou « À mon avis ». Savoir être d\'accord ou pas d\'accord poliment fait vivre la conversation.',
          'لمشاركة رأيك، ابدأ بـ« Je pense que… » (أعتقد أن…) أو « À mon avis » (في رأيي). الموافقة والمعارضة بأدب تُبقيان الحوار سلساً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Je pense que c\'est une bonne idée » — I think it is a good idea', '« Je pense que c\'est une bonne idée » — donner son avis', '« Je pense que c\'est une bonne idée » — أعتقد أنها فكرة جيدة'),
          L('« À mon avis » — in my opinion', '« À mon avis » — introduire une opinion', '« À mon avis » — في رأيي'),
          L('« Je suis d\'accord » — I agree', '« Je suis d\'accord » — exprimer l\'accord', '« Je suis d\'accord » — أنا موافق'),
          L('« Je ne suis pas d\'accord » — I disagree', '« Je ne suis pas d\'accord » — exprimer le désaccord', '« Je ne suis pas d\'accord » — لست موافقاً'),
          L('« Je suis content » — I am happy', '« Je suis content » — exprimer la joie', '« Je suis content » — أنا سعيد'),
          L('« Ça m\'énerve » — it annoys me', '« Ça m\'énerve » — exprimer l\'agacement', '« Ça m\'énerve » — هذا يزعجني'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you say that you agree?',
          'Comment exprimer ton accord ?',
          'كيف تعبّر عن موافقتك؟',
        ),
        choices: [
          { text: L('« Ça m\'énerve »', '« Ça m\'énerve »', '« Ça m\'énerve »') },
          { text: L('« Je suis d\'accord »', '« Je suis d\'accord »', '« Je suis d\'accord »') },
          { text: L('« À mon avis »', '« À mon avis »', '« À mon avis »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What does « Ça m\'énerve » express?',
          'Qu\'exprime « Ça m\'énerve » ?',
          'ماذا تعبّر « Ça m\'énerve » ؟',
        ),
        choices: [
          { text: L('Joy', 'La joie', 'الفرح') },
          {
            text: L('Annoyance', 'L\'agacement', 'الانزعاج'),
            explanation: L(
              '« énerver » means to irritate or annoy.',
              '« énerver » signifie irriter, agacer.',
              '« énerver » تعني أزعج أو أثار الأعصاب.',
            ),
          },
          { text: L('Agreement', 'L\'accord', 'الموافقة') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Advanced — Fluency
  [lessonKey('french', 'advanced', 'fluency', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Good storytelling relies on connectors to sequence events, and on two past tenses working together: the imparfait paints the background scene, while the passé composé moves the action forward.',
          'Bien raconter repose sur les connecteurs qui enchaînent les événements, et sur deux temps du passé : l\'imparfait plante le décor, tandis que le passé composé fait avancer l\'action.',
          'السرد الجيد يعتمد على أدوات الربط لترتيب الأحداث، وعلى زمنين ماضيين متكاملين: « imparfait » يرسم خلفية المشهد، بينما « passé composé » يدفع الأحداث إلى الأمام.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« d\'abord » — first', '« d\'abord » — pour commencer le récit', '« d\'abord » — أولاً'),
          L('« ensuite » — then / next', '« ensuite » — pour enchaîner', '« ensuite » — بعد ذلك'),
          L('« soudain » — suddenly', '« soudain » — pour un événement inattendu', '« soudain » — فجأة'),
          L('« finalement » — finally', '« finalement » — pour conclure', '« finalement » — أخيراً'),
          L('« Il faisait beau » — the weather was nice (background, imparfait)', '« Il faisait beau » — décor à l\'imparfait', '« Il faisait beau » — كان الطقس جميلاً (خلفية بالـ imparfait)'),
          L('« Le téléphone a sonné » — the phone rang (action, passé composé)', '« Le téléphone a sonné » — action au passé composé', '« Le téléphone a sonné » — رنّ الهاتف (حدث بالـ passé composé)'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Put the story connectors in their natural order.',
          'Mets les connecteurs du récit dans leur ordre naturel.',
          'رتّب أدوات ربط السرد في ترتيبها الطبيعي.',
        ),
        steps: [
          L('D\'abord', 'D\'abord', 'D\'abord'),
          L('Ensuite', 'Ensuite', 'Ensuite'),
          L('Soudain', 'Soudain', 'Soudain'),
          L('Finalement', 'Finalement', 'Finalement'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which tense describes the background scene of a story?',
          'Quel temps décrit le décor d\'un récit ?',
          'أي زمن يصف خلفية مشهد القصة؟',
        ),
        choices: [
          {
            text: L('« imparfait »', '« imparfait »', '« imparfait »'),
            explanation: L(
              'The imparfait sets the scene; the passé composé narrates events.',
              'L\'imparfait plante le décor ; le passé composé raconte les événements.',
              'الـ imparfait يهيّئ المشهد؛ والـ passé composé يسرد الأحداث.',
            ),
          },
          { text: L('« passé composé »', '« passé composé »', '« passé composé »') },
          { text: L('« futur »', '« futur »', '« futur »') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('french', 'advanced', 'fluency', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'French has two registers built into its grammar: « tu » for friends, family, and children, and « vous » for strangers, elders, and professional settings. Choosing wrong can sound rude or oddly distant.',
          'Le français a deux registres inscrits dans sa grammaire : « tu » pour les amis, la famille et les enfants, et « vous » pour les inconnus, les aînés et le cadre professionnel. Se tromper peut sembler impoli ou étrangement distant.',
          'للفرنسية مستويان مدمجان في قواعدها: « tu » للأصدقاء والعائلة والأطفال، و« vous » للغرباء وكبار السن وبيئة العمل. الاختيار الخاطئ قد يبدو وقاحة أو تكلفاً غريباً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Salut, ça va ? » — hi, how are you? (informal)', '« Salut, ça va ? » — registre familier', '« Salut, ça va ? » — أهلاً، كيف حالك؟ (غير رسمي)'),
          L('« Bonjour, comment allez-vous ? » — hello, how are you? (formal)', '« Bonjour, comment allez-vous ? » — registre formel', '« Bonjour, comment allez-vous ? » — مرحباً، كيف حالكم؟ (رسمي)'),
          L('« Tu peux m\'aider ? » — can you help me? (informal)', '« Tu peux m\'aider ? » — demande familière', '« Tu peux m\'aider ? » — أيمكنك مساعدتي؟ (غير رسمي)'),
          L('« Pourriez-vous m\'aider ? » — could you help me? (formal)', '« Pourriez-vous m\'aider ? » — demande formelle au conditionnel', '« Pourriez-vous m\'aider ? » — هلا ساعدتموني؟ (رسمي)'),
          L('« À plus ! » — see you! (informal)', '« À plus ! » — au revoir familier', '« À plus ! » — إلى اللقاء! (غير رسمي)'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'You meet your company\'s director. Which pronoun do you use?',
          'Tu rencontres le directeur de ton entreprise. Quel pronom utilises-tu ?',
          'تقابل مدير شركتك. أي ضمير تستخدم؟',
        ),
        choices: [
          { text: L('« tu »', '« tu »', '« tu »') },
          {
            text: L('« vous »', '« vous »', '« vous »'),
            explanation: L(
              '« vous » shows respect in professional and formal settings.',
              '« vous » marque le respect dans un cadre professionnel.',
              '« vous » يعبّر عن الاحترام في السياقات المهنية والرسمية.',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What is the informal equivalent of « Comment allez-vous ? »?',
          'Quel est l\'équivalent familier de « Comment allez-vous ? » ?',
          'ما المقابل غير الرسمي لـ« Comment allez-vous ? »؟',
        ),
        choices: [
          { text: L('« Ça va ? »', '« Ça va ? »', '« Ça va ? »') },
          { text: L('« Pourriez-vous ? »', '« Pourriez-vous ? »', '« Pourriez-vous ? »') },
          { text: L('« Au revoir »', '« Au revoir »', '« Au revoir »') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('french', 'advanced', 'fluency', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Idioms cannot be translated word for word — their meaning is figurative. Using a few well-placed idioms makes your French sound natural and expressive.',
          'Les expressions idiomatiques ne se traduisent pas mot à mot — leur sens est figuré. Quelques expressions bien placées rendent ton français naturel et expressif.',
          'التعابير الاصطلاحية لا تُترجم حرفياً — معناها مجازي. استعمال بعضها في مكانه المناسب يجعل فرنسيتك طبيعية ومعبّرة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« Il pleut des cordes » — it is raining heavily (literally: it rains ropes)', '« Il pleut des cordes » — il pleut très fort', '« Il pleut des cordes » — تمطر بغزارة (حرفياً: تمطر حبالاً)'),
          L('« Coûter les yeux de la tête » — to cost a fortune', '« Coûter les yeux de la tête » — coûter très cher', '« Coûter les yeux de la tête » — باهظ الثمن جداً'),
          L('« Avoir le cafard » — to feel down / blue', '« Avoir le cafard » — être triste, déprimé', '« Avoir le cafard » — يشعر بالكآبة'),
          L('« Poser un lapin » — to stand someone up', '« Poser un lapin » — ne pas venir à un rendez-vous', '« Poser un lapin » — يخلف الموعد دون اعتذار'),
          L('« Donner sa langue au chat » — to give up guessing', '« Donner sa langue au chat » — renoncer à deviner', '« Donner sa langue au chat » — يستسلم عن التخمين'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does « Il pleut des cordes » mean?',
          'Que signifie « Il pleut des cordes » ?',
          'ماذا تعني « Il pleut des cordes » ؟',
        ),
        choices: [
          { text: L('It is raining lightly', 'Il pleut un peu', 'تمطر قليلاً') },
          {
            text: L('It is raining very heavily', 'Il pleut très fort', 'تمطر بغزارة شديدة'),
            explanation: L(
              'The rain is so dense it looks like falling ropes.',
              'La pluie est si dense qu\'elle ressemble à des cordes qui tombent.',
              'المطر كثيف حتى يبدو كحبال تتساقط.',
            ),
          },
          { text: L('The weather is nice', 'Il fait beau', 'الطقس جميل') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Your friend never showed up at the café. In French, they…',
          'Ton ami n\'est jamais venu au café. En français, il…',
          'صديقك لم يأتِ إلى المقهى أبداً. بالفرنسية يقال إنه…',
        ),
        choices: [
          { text: L('« a donné sa langue au chat »', '« a donné sa langue au chat »', '« a donné sa langue au chat »') },
          { text: L('« a posé un lapin »', '« a posé un lapin »', '« a posé un lapin »') },
          { text: L('« a le cafard »', '« a le cafard »', '« a le cafard »') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Advanced — Culture
  [lessonKey('french', 'advanced', 'culture', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Following French media is one of the best ways to progress: newspapers like Le Monde, radio, and TV news expose you to formal vocabulary and current events at natural speed.',
          'Suivre les médias français est un excellent moyen de progresser : les journaux comme Le Monde, la radio et les journaux télévisés t\'exposent au vocabulaire formel et à l\'actualité à vitesse naturelle.',
          'متابعة الإعلام الفرنسي من أفضل طرق التقدّم: الصحف مثل Le Monde والراديو ونشرات الأخبار تعرّضك للمفردات الرسمية والأحداث الجارية بسرعة طبيعية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('« les actualités » — the news', '« les actualités » — les informations du jour', '« les actualités » — الأخبار'),
          L('« un journal » — a newspaper', '« un journal » — presse écrite quotidienne', '« un journal » — صحيفة'),
          L('« une chaîne de télévision » — a TV channel', '« une chaîne de télévision » — un canal de diffusion', '« une chaîne de télévision » — قناة تلفزيونية'),
          L('« un titre » — a headline', '« un titre » — la première ligne d\'un article', '« un titre » — عنوان رئيسي'),
          L('« en direct » — live', '« en direct » — diffusé en temps réel', '« en direct » — بث مباشر'),
          L('« un reportage » — a news report', '« un reportage » — une enquête filmée ou écrite', '« un reportage » — تقرير إخباري'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does « en direct » mean?',
          'Que signifie « en direct » ?',
          'ماذا تعني « en direct » ؟',
        ),
        choices: [
          { text: L('Recorded', 'Enregistré à l\'avance', 'مسجَّل مسبقاً') },
          {
            text: L('Live', 'Diffusé en temps réel', 'بث مباشر'),
            explanation: L(
              'A broadcast « en direct » happens in real time.',
              'Une émission « en direct » est diffusée en temps réel.',
              'البرنامج « en direct » يُبث في الوقت الحقيقي.',
            ),
          },
          { text: L('Cancelled', 'Annulé', 'ملغى') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "I read the newspaper every morning."',
          'Mets les mots dans l\'ordre : lire le journal chaque matin.',
          'رتّب الكلمات: «أقرأ الصحيفة كل صباح».',
        ),
        steps: [
          L('Je', 'Je', 'Je'),
          L('lis', 'lis', 'lis'),
          L('le journal', 'le journal', 'le journal'),
          L('tous les matins.', 'tous les matins.', 'tous les matins.'),
        ],
      },
    ],
  },
  [lessonKey('french', 'advanced', 'culture', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Work and study vocabulary hides a classic trap: « passer un examen » means to TAKE an exam, not to pass it. To pass an exam is « réussir un examen ».',
          'Le vocabulaire du travail et des études cache un piège classique : « passer un examen » signifie se présenter à l\'examen, pas le réussir. Réussir se dit « réussir un examen ».',
          'مفردات العمل والدراسة تخفي فخاً كلاسيكياً: « passer un examen » تعني أن تجتاز التجربة أي تتقدّم للامتحان، لا أن تنجح فيه. النجاح يقال « réussir un examen ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('« un entretien d\'embauche » — a job interview', '« un entretien d\'embauche » — rencontre pour un poste', '« un entretien d\'embauche » — مقابلة عمل'),
          L('« un CV » — a résumé', '« un CV » — le document qui résume ton parcours', '« un CV » — سيرة ذاتية'),
          L('« une réunion » — a meeting', '« une réunion » — rencontre de travail', '« une réunion » — اجتماع'),
          L('« passer un examen » — to take an exam', '« passer un examen » — se présenter à l\'examen', '« passer un examen » — يتقدّم لامتحان'),
          L('« réussir un examen » — to pass an exam', '« réussir un examen » — obtenir une bonne note', '« réussir un examen » — ينجح في امتحان'),
          L('« faire un stage » — to do an internship', '« faire un stage » — expérience en entreprise', '« faire un stage » — يقوم بتدريب مهني'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does « passer un examen » mean?',
          'Que signifie exactement « passer un examen » ?',
          'ماذا تعني « passer un examen » بالضبط؟',
        ),
        choices: [
          { text: L('To pass an exam', 'Réussir l\'examen', 'ينجح في الامتحان') },
          {
            text: L('To take an exam', 'Se présenter à l\'examen', 'يتقدّم للامتحان'),
            explanation: L(
              'A false friend: passing (succeeding) is « réussir ».',
              'Faux ami : réussir se dit « réussir un examen ».',
              'صديق كاذب: النجاح يقال « réussir un examen ».',
            ),
          },
          { text: L('To skip an exam', 'Manquer l\'examen', 'يتغيب عن الامتحان') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'How do you say "an internship"?',
          'Comment appelle-t-on l\'expérience professionnelle en entreprise pour un étudiant ?',
          'كيف تقول «تدريب مهني»؟',
        ),
        choices: [
          { text: L('« une réunion »', '« une réunion »', '« une réunion »') },
          { text: L('« un stage »', '« un stage »', '« un stage »') },
          { text: L('« un CV »', '« un CV »', '« un CV »') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('french', 'advanced', 'culture', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Travel and daily life vocabulary covers everything from the airport to the market. Note the useful pattern « faire les courses » (to do the grocery shopping) — different from « faire du shopping » (shopping for clothes or pleasure).',
          'Le vocabulaire du voyage et du quotidien va de l\'aéroport au marché. Note la structure utile « faire les courses » (acheter la nourriture) — différente de « faire du shopping » (acheter des vêtements, pour le plaisir).',
          'مفردات السفر والحياة اليومية تشمل كل شيء من المطار إلى السوق. لاحظ العبارة المفيدة « faire les courses » (شراء حاجيات البيت) — وهي مختلفة عن « faire du shopping » (التسوق للملابس والمتعة).',
        ),
      },
      {
        type: 'list',
        items: [
          L('« une valise » — a suitcase', '« une valise » — le bagage du voyageur', '« une valise » — حقيبة سفر'),
          L('« un billet aller-retour » — a round-trip ticket', '« un billet aller-retour » — billet dans les deux sens', '« un billet aller-retour » — تذكرة ذهاب وإياب'),
          L('« la douane » — customs', '« la douane » — le contrôle à la frontière', '« la douane » — الجمارك'),
          L('« louer une voiture » — to rent a car', '« louer une voiture » — utiliser une voiture contre paiement', '« louer une voiture » — يستأجر سيارة'),
          L('« faire les courses » — to do the grocery shopping', '« faire les courses » — acheter la nourriture', '« faire les courses » — يشتري حاجيات البيت'),
          L('« les horaires » — the timetable / schedule', '« les horaires » — les heures de passage', '« les horaires » — مواعيد الرحلات'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which phrase means "a round-trip ticket"?',
          'Quelle expression désigne un billet dans les deux sens ?',
          'أي عبارة تعني «تذكرة ذهاب وإياب»؟',
        ),
        choices: [
          { text: L('« une valise »', '« une valise »', '« une valise »') },
          { text: L('« un billet aller-retour »', '« un billet aller-retour »', '« un billet aller-retour »') },
          { text: L('« la douane »', '« la douane »', '« la douane »') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "I would like to book a room for two nights."',
          'Mets les mots dans l\'ordre : réserver une chambre pour deux nuits.',
          'رتّب الكلمات: «أودّ حجز غرفة لليلتين».',
        ),
        steps: [
          L('Je', 'Je', 'Je'),
          L('voudrais', 'voudrais', 'voudrais'),
          L('réserver', 'réserver', 'réserver'),
          L('une chambre', 'une chambre', 'une chambre'),
          L('pour deux nuits.', 'pour deux nuits.', 'pour deux nuits.'),
        ],
      },
    ],
  },
}
