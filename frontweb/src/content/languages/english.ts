import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// English language course: beginner basics & phrases → intermediate grammar & conversation → advanced fluency & culture.
export const englishLessons: Record<string, LessonContent> = {
  // Beginner — Basics
  [lessonKey('english', 'beginner', 'basics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Greetings are the first words of every conversation. English speakers greet differently depending on the time of day and how well they know the person.',
          'Les salutations sont les premiers mots de toute conversation. En anglais, on salue différemment selon le moment de la journée et le degré de familiarité avec la personne.',
          'التحيات هي أولى كلمات أي محادثة. في الإنجليزية تختلف التحية حسب وقت اليوم ومدى معرفتك بالشخص.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Hello" — a universal greeting, works anytime', '« Hello » — salutation universelle, valable à tout moment', '"Hello" — تحية عامة تصلح في أي وقت'),
          L('"Good morning" — a greeting before noon', '« Good morning » — salutation avant midi', '"Good morning" — تحية قبل الظهر'),
          L('"Good evening" — a greeting after sunset', '« Good evening » — salutation après le coucher du soleil', '"Good evening" — تحية بعد غروب الشمس'),
          L('"My name is…" — to introduce yourself', '« My name is… » — pour se présenter', '"My name is…" — لتقديم نفسك'),
          L('"Nice to meet you" — said when meeting someone for the first time', '« Nice to meet you » — se dit lors d\'une première rencontre', '"Nice to meet you" — تُقال عند لقاء شخص لأول مرة'),
          L('"Goodbye" — to end a conversation', '« Goodbye » — pour terminer une conversation', '"Goodbye" — لإنهاء المحادثة'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you introduce yourself in English?',
          'Comment se présenter en anglais ?',
          'كيف تقدّم نفسك بالإنجليزية؟',
        ),
        answer: L(
          '"Hello, my name is Sara. Nice to meet you."',
          '« Hello, my name is Sara. Nice to meet you. »',
          '"Hello, my name is Sara. Nice to meet you."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which greeting fits at 9 in the morning?',
          'Quelle salutation convient à 9 heures du matin ?',
          'أي تحية تناسب الساعة التاسعة صباحاً؟',
        ),
        choices: [
          { text: L('Good evening', 'Good evening', 'Good evening') },
          {
            text: L('Good morning', 'Good morning', 'Good morning'),
            explanation: L(
              '"Good morning" is used before noon.',
              '« Good morning » s\'utilise avant midi.',
              '"Good morning" تُستخدم قبل الظهر.',
            ),
          },
          { text: L('Good night', 'Good night', 'Good night') },
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
          L('My', 'My', 'My'),
          L('name', 'name', 'name'),
          L('is', 'is', 'is'),
          L('Sara', 'Sara', 'Sara'),
        ],
      },
    ],
  },
  [lessonKey('english', 'beginner', 'basics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Numbers appear everywhere: prices, phone numbers, and the time. Learn the basic numbers first, then how English tells the time with "o\'clock", "half past" and "quarter past".',
          'Les nombres sont partout : prix, numéros de téléphone et heure. Apprends d\'abord les nombres de base, puis comment l\'anglais dit l\'heure avec « o\'clock », « half past » et « quarter past ».',
          'الأرقام موجودة في كل مكان: الأسعار وأرقام الهواتف والوقت. تعلّم الأرقام الأساسية أولاً، ثم كيف تُقال الساعة بالإنجليزية بـ "o\'clock" و "half past" و "quarter past".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"one, two, three" — 1, 2, 3', '« one, two, three » — 1, 2, 3', '"one, two, three" — 1، 2، 3'),
          L('"ten, twenty, thirty" — 10, 20, 30', '« ten, twenty, thirty » — 10, 20, 30', '"ten, twenty, thirty" — 10، 20، 30'),
          L('"forty-two" — 42', '« forty-two » — 42', '"forty-two" — 42'),
          L('"It\'s three o\'clock" — it is exactly 3:00', '« It\'s three o\'clock » — il est exactement 3 h 00', '"It\'s three o\'clock" — الساعة الثالثة تماماً'),
          L('"half past six" — 6:30', '« half past six » — 6 h 30', '"half past six" — السادسة والنصف'),
          L('"quarter past nine" — 9:15', '« quarter past nine » — 9 h 15', '"quarter past nine" — التاسعة والربع'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask for the time in English?',
          'Comment demander l\'heure en anglais ?',
          'كيف تسأل عن الوقت بالإنجليزية؟',
        ),
        answer: L(
          '"What time is it?" — "It\'s half past six."',
          '« What time is it? » — « It\'s half past six. »',
          '"What time is it?" — "It\'s half past six."',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What number is "forty-two"?',
          'Quel nombre est « forty-two » ?',
          'ما هو الرقم "forty-two"؟',
        ),
        answer: 42,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What time is "half past six"?',
          'Quelle heure est « half past six » ?',
          'كم الساعة في "half past six"؟',
        ),
        choices: [
          { text: L('6:15', '6 h 15', '6:15') },
          {
            text: L('6:30', '6 h 30', '6:30'),
            explanation: L(
              '"Half past" means thirty minutes after the hour.',
              '« Half past » signifie trente minutes après l\'heure.',
              '"Half past" تعني مرور ثلاثين دقيقة بعد الساعة.',
            ),
          },
          { text: L('5:30', '5 h 30', '5:30') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('english', 'beginner', 'basics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Everyday objects are the words you use constantly at home, at school and at work. Notice that English nouns take "a" or "an": "an" before a vowel sound, "a" before a consonant sound.',
          'Les objets du quotidien sont les mots que tu utilises sans cesse à la maison, à l\'école et au travail. Note que les noms anglais prennent « a » ou « an » : « an » devant un son voyelle, « a » devant un son consonne.',
          'أشياء الحياة اليومية هي الكلمات التي تستعملها باستمرار في البيت والمدرسة والعمل. لاحظ أن الأسماء الإنجليزية تسبقها "a" أو "an": نستخدم "an" قبل صوت العلة و "a" قبل صوت الساكن.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"a key" — opens a door', '« a key » — une clé, ouvre une porte', '"a key" — مفتاح يفتح الباب'),
          L('"a phone" — for calls and messages', '« a phone » — un téléphone, pour appels et messages', '"a phone" — هاتف للمكالمات والرسائل'),
          L('"a book" — you read it', '« a book » — un livre, on le lit', '"a book" — كتاب تقرؤه'),
          L('"an umbrella" — protects you from rain', '« an umbrella » — un parapluie, protège de la pluie', '"an umbrella" — مظلة تحميك من المطر'),
          L('"a chair" and "a table" — furniture', '« a chair » et « a table » — une chaise et une table, des meubles', '"a chair" و "a table" — كرسي وطاولة، من الأثاث'),
          L('"a bag" — carries your things', '« a bag » — un sac, transporte tes affaires', '"a bag" — حقيبة تحمل أغراضك'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask what an object is in English?',
          'Comment demander ce qu\'est un objet en anglais ?',
          'كيف تسأل عن ماهية شيء بالإنجليزية؟',
        ),
        answer: L(
          '"What is this?" — "It\'s an umbrella."',
          '« What is this? » — « It\'s an umbrella. »',
          '"What is this?" — "It\'s an umbrella."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which is correct?',
          'Quelle forme est correcte ?',
          'أي صيغة صحيحة؟',
        ),
        choices: [
          { text: L('a umbrella', 'a umbrella', 'a umbrella') },
          {
            text: L('an umbrella', 'an umbrella', 'an umbrella'),
            explanation: L(
              '"Umbrella" starts with a vowel sound, so it takes "an".',
              '« Umbrella » commence par un son voyelle, donc on utilise « an ».',
              '"Umbrella" تبدأ بصوت علة، لذا تسبقها "an".',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order.',
          'Mets les mots dans l\'ordre.',
          'رتّب الكلمات.',
        ),
        steps: [
          L('This', 'This', 'This'),
          L('is', 'is', 'is'),
          L('a', 'a', 'a'),
          L('book', 'book', 'book'),
        ],
      },
    ],
  },

  // Beginner — Phrases
  [lessonKey('english', 'beginner', 'phrases', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Ordering at a café is one of the most useful real-life situations. The polite pattern in English is "I\'d like…" or "Can I have…?", always followed by "please".',
          'Commander au café est l\'une des situations réelles les plus utiles. La tournure polie en anglais est « I\'d like… » ou « Can I have…? », toujours suivie de « please ».',
          'الطلب في المقهى من أكثر المواقف الواقعية فائدة. الصيغة المهذبة في الإنجليزية هي "I\'d like…" أو "Can I have…?" متبوعة دائماً بـ "please".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"I\'d like a coffee, please" — polite way to order', '« I\'d like a coffee, please » — façon polie de commander', '"I\'d like a coffee, please" — طريقة مهذبة للطلب'),
          L('"Can I have a tea?" — another way to order', '« Can I have a tea? » — autre façon de commander', '"Can I have a tea?" — طريقة أخرى للطلب'),
          L('"With milk" / "without sugar" — customizing your drink', '« With milk » / « without sugar » — avec du lait / sans sucre, pour personnaliser sa boisson', '"With milk" / "without sugar" — بالحليب / بدون سكر، لتخصيص مشروبك'),
          L('"The bill, please" — asking to pay', '« The bill, please » — l\'addition, s\'il vous plaît', '"The bill, please" — لطلب الحساب'),
          L('"Thank you" — always appreciated', '« Thank you » — merci, toujours apprécié', '"Thank you" — شكراً، محل تقدير دائماً'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you order a coffee with milk politely?',
          'Comment commander poliment un café au lait ?',
          'كيف تطلب قهوة بالحليب بأدب؟',
        ),
        answer: L(
          '"I\'d like a coffee with milk, please."',
          '« I\'d like a coffee with milk, please. »',
          '"I\'d like a coffee with milk, please."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you ask to pay at a café?',
          'Comment demander à payer au café ?',
          'كيف تطلب دفع الحساب في المقهى؟',
        ),
        choices: [
          {
            text: L('The bill, please', 'The bill, please', 'The bill, please'),
            explanation: L(
              '"The bill, please" is the standard way to ask for the check.',
              '« The bill, please » est la façon standard de demander l\'addition.',
              '"The bill, please" هي الطريقة المعتادة لطلب الحساب.',
            ),
          },
          { text: L('Give me money', 'Give me money', 'Give me money') },
          { text: L('I want to go', 'I want to go', 'I want to go') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to place an order.',
          'Mets les mots dans l\'ordre pour passer commande.',
          'رتّب الكلمات لتقديم طلب.',
        ),
        steps: [
          L('I\'d', 'I\'d', 'I\'d'),
          L('like', 'like', 'like'),
          L('a', 'a', 'a'),
          L('tea,', 'tea,', 'tea,'),
          L('please', 'please', 'please'),
        ],
      },
    ],
  },
  [lessonKey('english', 'beginner', 'phrases', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Asking for directions helps you find your way in any city. Start politely with "Excuse me", then use "Where is…?" and listen for "left", "right" and "straight".',
          'Demander son chemin permet de se repérer dans n\'importe quelle ville. Commence poliment par « Excuse me », puis utilise « Where is…? » et repère « left », « right » et « straight ».',
          'السؤال عن الاتجاهات يساعدك على معرفة طريقك في أي مدينة. ابدأ بأدب بـ "Excuse me" ثم استخدم "Where is…?" وانتبه لكلمات "left" و "right" و "straight".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Excuse me, where is the station?" — polite way to ask', '« Excuse me, where is the station? » — façon polie de demander où est la gare', '"Excuse me, where is the station?" — طريقة مهذبة للسؤال عن المحطة'),
          L('"Turn left" — go to the left', '« Turn left » — tourner à gauche', '"Turn left" — انعطف يساراً'),
          L('"Turn right" — go to the right', '« Turn right » — tourner à droite', '"Turn right" — انعطف يميناً'),
          L('"Go straight" — continue forward', '« Go straight » — continuer tout droit', '"Go straight" — تابع مباشرة إلى الأمام'),
          L('"Next to the bank" — beside the bank', '« Next to the bank » — à côté de la banque', '"Next to the bank" — بجانب البنك'),
          L('"It\'s far" / "It\'s near" — distance', '« It\'s far » / « It\'s near » — c\'est loin / c\'est près', '"It\'s far" / "It\'s near" — بعيد / قريب'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask where the museum is?',
          'Comment demander où se trouve le musée ?',
          'كيف تسأل عن مكان المتحف؟',
        ),
        answer: L(
          '"Excuse me, where is the museum?"',
          '« Excuse me, where is the museum? »',
          '"Excuse me, where is the museum?"',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "turn right" mean?',
          'Que signifie « turn right » ?',
          'ماذا تعني "turn right"؟',
        ),
        choices: [
          { text: L('Go to the left', 'Aller à gauche', 'اذهب يساراً') },
          { text: L('Go to the right', 'Aller à droite', 'اذهب يميناً') },
          { text: L('Continue forward', 'Continuer tout droit', 'تابع للأمام') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to ask for directions.',
          'Mets les mots dans l\'ordre pour demander ton chemin.',
          'رتّب الكلمات للسؤال عن الطريق.',
        ),
        steps: [
          L('Where', 'Where', 'Where'),
          L('is', 'is', 'is'),
          L('the', 'the', 'the'),
          L('station?', 'station?', 'station?'),
        ],
      },
    ],
  },
  [lessonKey('english', 'beginner', 'phrases', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Shopping vocabulary lets you ask about prices and sizes with confidence. The key question is "How much is it?", and the key verbs are "buy", "pay" and "try on".',
          'Le vocabulaire des achats te permet de demander prix et tailles avec assurance. La question clé est « How much is it? », et les verbes clés sont « buy », « pay » et « try on ».',
          'مفردات التسوق تمكّنك من السؤال عن الأسعار والمقاسات بثقة. السؤال الأساسي هو "How much is it?" والأفعال الأساسية هي "buy" و "pay" و "try on".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"How much is it?" — asking the price', '« How much is it? » — pour demander le prix', '"How much is it?" — للسؤال عن السعر'),
          L('"It costs ten dollars" — stating the price', '« It costs ten dollars » — ça coûte dix dollars', '"It costs ten dollars" — ثمنه عشرة دولارات'),
          L('"Can I try it on?" — asking to try clothes', '« Can I try it on? » — pour demander à essayer un vêtement', '"Can I try it on?" — لطلب تجربة الملابس'),
          L('"It\'s too expensive" — the price is too high', '« It\'s too expensive » — c\'est trop cher', '"It\'s too expensive" — إنه غالٍ جداً'),
          L('"I\'ll take it" — deciding to buy', '« I\'ll take it » — je le prends, pour décider d\'acheter', '"I\'ll take it" — سآخذه، عند قرار الشراء'),
          L('"Do you have a smaller size?" — asking about sizes', '« Do you have a smaller size? » — pour demander une taille plus petite', '"Do you have a smaller size?" — للسؤال عن مقاس أصغر'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask the price of a shirt?',
          'Comment demander le prix d\'une chemise ?',
          'كيف تسأل عن سعر قميص؟',
        ),
        answer: L(
          '"How much is this shirt?"',
          '« How much is this shirt? »',
          '"How much is this shirt?"',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What do you say when you decide to buy something?',
          'Que dis-tu quand tu décides d\'acheter quelque chose ?',
          'ماذا تقول عندما تقرر شراء شيء؟',
        ),
        choices: [
          {
            text: L('I\'ll take it', 'I\'ll take it', 'I\'ll take it'),
            explanation: L(
              '"I\'ll take it" means you have decided to buy the item.',
              '« I\'ll take it » signifie que tu as décidé d\'acheter l\'article.',
              '"I\'ll take it" تعني أنك قررت شراء السلعة.',
            ),
          },
          { text: L('It\'s too expensive', 'It\'s too expensive', 'It\'s too expensive') },
          { text: L('Where is it?', 'Where is it?', 'Where is it?') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          '"It costs twenty-five dollars." How many dollars is that?',
          '« It costs twenty-five dollars. » Combien de dollars cela fait-il ?',
          '"It costs twenty-five dollars." كم دولاراً يعني ذلك؟',
        ),
        answer: 25,
      },
    ],
  },

  // Intermediate — Grammar
  [lessonKey('english', 'intermediate', 'grammar', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The present simple describes habits and facts: "I work every day". Its most important rule: with "he", "she" or "it", the verb takes an -s. The present continuous ("I am working") describes what is happening right now.',
          'Le présent simple décrit habitudes et faits : « I work every day ». Sa règle la plus importante : avec « he », « she » ou « it », le verbe prend un -s. Le présent continu (« I am working ») décrit ce qui se passe en ce moment.',
          'المضارع البسيط يصف العادات والحقائق: "I work every day". أهم قاعدة فيه: مع "he" و "she" و "it" يأخذ الفعل ‎-s. أما المضارع المستمر ("I am working") فيصف ما يحدث الآن.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"I work" but "she works" — third person adds -s', '« I work » mais « she works » — la 3e personne prend un -s', '"I work" لكن "she works" — ضمير الغائب يضيف ‎-s'),
          L('"He plays football on Sundays" — a habit', '« He plays football on Sundays » — une habitude', '"He plays football on Sundays" — عادة متكررة'),
          L('"Water boils at 100 degrees" — a general fact', '« Water boils at 100 degrees » — un fait général', '"Water boils at 100 degrees" — حقيقة عامة'),
          L('"I am reading now" — happening at this moment', '« I am reading now » — se passe en ce moment', '"I am reading now" — يحدث في هذه اللحظة'),
          L('"She is cooking dinner" — action in progress', '« She is cooking dinner » — action en cours', '"She is cooking dinner" — فعل جارٍ الآن'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say that Sara has a reading habit?',
          'Comment dire que Sara a l\'habitude de lire ?',
          'كيف تعبّر عن أن سارة تقرأ عادةً؟',
        ),
        answer: L(
          '"Sara reads every evening."',
          '« Sara reads every evening. »',
          '"Sara reads every evening."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Choose the correct form: "She ___ English every day."',
          'Choisis la forme correcte : « She ___ English every day. »',
          'اختر الصيغة الصحيحة: "She ___ English every day."',
        ),
        choices: [
          { text: L('study', 'study', 'study') },
          {
            text: L('studies', 'studies', 'studies'),
            explanation: L(
              'With "she", the present simple verb takes -s (or -es): "studies".',
              'Avec « she », le verbe au présent simple prend -s (ou -es) : « studies ».',
              'مع "she" يأخذ الفعل في المضارع البسيط ‎-s (أو ‎-es): "studies".',
            ),
          },
          { text: L('studying', 'studying', 'studying') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order (present continuous).',
          'Mets les mots dans l\'ordre (présent continu).',
          'رتّب الكلمات (المضارع المستمر).',
        ),
        steps: [
          L('She', 'She', 'She'),
          L('is', 'is', 'is'),
          L('cooking', 'cooking', 'cooking'),
          L('dinner', 'dinner', 'dinner'),
          L('now', 'now', 'now'),
        ],
      },
    ],
  },
  [lessonKey('english', 'intermediate', 'grammar', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The past simple describes finished actions: regular verbs add -ed ("worked", "played"), but many common verbs are irregular ("go" becomes "went", "eat" becomes "ate"). Time markers like "yesterday" and "last week" signal the past.',
          'Le passé simple (past simple) décrit des actions terminées : les verbes réguliers prennent -ed (« worked », « played »), mais beaucoup de verbes courants sont irréguliers (« go » devient « went », « eat » devient « ate »). Les marqueurs comme « yesterday » et « last week » signalent le passé.',
          'الماضي البسيط يصف أفعالاً منتهية: الأفعال المنتظمة تضيف ‎-ed ("worked"، "played")، لكن كثيراً من الأفعال الشائعة شاذة ("go" تصبح "went" و "eat" تصبح "ate"). كلمات مثل "yesterday" و "last week" تدل على الماضي.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"work" → "worked" — regular verb with -ed', '« work » → « worked » — verbe régulier en -ed', '"work" ← "worked" — فعل منتظم بإضافة ‎-ed'),
          L('"go" → "went" — irregular verb', '« go » → « went » — verbe irrégulier', '"go" ← "went" — فعل شاذ'),
          L('"eat" → "ate" — irregular verb', '« eat » → « ate » — verbe irrégulier', '"eat" ← "ate" — فعل شاذ'),
          L('"see" → "saw" — irregular verb', '« see » → « saw » — verbe irrégulier', '"see" ← "saw" — فعل شاذ'),
          L('"Yesterday I visited my grandmother" — finished action', '« Yesterday I visited my grandmother » — action terminée', '"Yesterday I visited my grandmother" — فعل منتهٍ'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say that you went to the market yesterday?',
          'Comment dire que tu es allé au marché hier ?',
          'كيف تقول إنك ذهبت إلى السوق أمس؟',
        ),
        answer: L(
          '"I went to the market yesterday."',
          '« I went to the market yesterday. »',
          '"I went to the market yesterday."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is the past of "eat"?',
          'Quel est le passé de « eat » ?',
          'ما هو ماضي "eat"؟',
        ),
        choices: [
          { text: L('eated', 'eated', 'eated') },
          {
            text: L('ate', 'ate', 'ate'),
            explanation: L(
              '"Eat" is irregular: its past form is "ate".',
              '« Eat » est irrégulier : son passé est « ate ».',
              '"Eat" فعل شاذ: ماضيه "ate".',
            ),
          },
          { text: L('eating', 'eating', 'eating') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order (past simple).',
          'Mets les mots dans l\'ordre (past simple).',
          'رتّب الكلمات (الماضي البسيط).',
        ),
        steps: [
          L('We', 'We', 'We'),
          L('watched', 'watched', 'watched'),
          L('a', 'a', 'a'),
          L('film', 'film', 'film'),
          L('last night', 'last night', 'last night'),
        ],
      },
    ],
  },
  [lessonKey('english', 'intermediate', 'grammar', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'English builds questions and negatives with helper verbs. In the present, use "do" or "does"; in the past, use "did". Negation adds "not": "I do not (don\'t) like coffee". After "did" and "don\'t", the main verb goes back to its base form.',
          'L\'anglais construit questions et négations avec des auxiliaires. Au présent, utilise « do » ou « does » ; au passé, « did ». La négation ajoute « not » : « I do not (don\'t) like coffee ». Après « did » et « don\'t », le verbe revient à sa forme de base.',
          'تبني الإنجليزية الأسئلة والنفي بأفعال مساعدة. في المضارع استخدم "do" أو "does"، وفي الماضي "did". والنفي يضيف "not": "I do not (don\'t) like coffee". بعد "did" و "don\'t" يعود الفعل إلى صيغته الأساسية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Do you like tea?" — present question', '« Do you like tea? » — question au présent', '"Do you like tea?" — سؤال في المضارع'),
          L('"Does she work here?" — with he/she/it use "does"', '« Does she work here? » — avec he/she/it, utilise « does »', '"Does she work here?" — مع he/she/it استخدم "does"'),
          L('"Did you see the film?" — past question', '« Did you see the film? » — question au passé', '"Did you see the film?" — سؤال في الماضي'),
          L('"I don\'t like coffee" — present negative', '« I don\'t like coffee » — négation au présent', '"I don\'t like coffee" — نفي في المضارع'),
          L('"He didn\'t go to school" — past negative, base verb after "didn\'t"', '« He didn\'t go to school » — négation au passé, verbe de base après « didn\'t »', '"He didn\'t go to school" — نفي في الماضي، والفعل بصيغته الأساسية بعد "didn\'t"'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Choose the correct question: which asks if she works here?',
          'Choisis la question correcte pour demander si elle travaille ici.',
          'اختر السؤال الصحيح للسؤال عمّا إذا كانت تعمل هنا.',
        ),
        choices: [
          { text: L('Does she works here?', 'Does she works here?', 'Does she works here?') },
          {
            text: L('Does she work here?', 'Does she work here?', 'Does she work here?'),
            explanation: L(
              'After "does", the verb stays in its base form: "work", not "works".',
              'Après « does », le verbe reste à la forme de base : « work », pas « works ».',
              'بعد "does" يبقى الفعل بصيغته الأساسية: "work" لا "works".',
            ),
          },
          { text: L('She does work here?', 'She does work here?', 'She does work here?') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order (negative sentence).',
          'Mets les mots dans l\'ordre (phrase négative).',
          'رتّب الكلمات (جملة منفية).',
        ),
        steps: [
          L('I', 'I', 'I'),
          L('don\'t', 'don\'t', 'don\'t'),
          L('like', 'like', 'like'),
          L('coffee', 'coffee', 'coffee'),
        ],
      },
    ],
  },

  // Intermediate — Conversation
  [lessonKey('english', 'intermediate', 'conversation', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Talking about yourself covers your origin, your work and your interests. These sentences follow simple patterns: "I\'m from…", "I work as…", "I like…" — swap in your own details.',
          'Parler de soi couvre l\'origine, le travail et les centres d\'intérêt. Ces phrases suivent des modèles simples : « I\'m from… », « I work as… », « I like… » — remplace par tes propres informations.',
          'الحديث عن نفسك يشمل أصلك وعملك واهتماماتك. هذه الجمل تتبع أنماطاً بسيطة: "I\'m from…" و "I work as…" و "I like…" — ضع تفاصيلك مكانها.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"I\'m from Tunisia" — your origin', '« I\'m from Tunisia » — ton origine', '"I\'m from Tunisia" — أصلك وبلدك'),
          L('"I\'m twenty-five years old" — your age', '« I\'m twenty-five years old » — ton âge', '"I\'m twenty-five years old" — عمرك'),
          L('"I work as a teacher" — your job', '« I work as a teacher » — ton métier', '"I work as a teacher" — عملك'),
          L('"I like reading and swimming" — your hobbies', '« I like reading and swimming » — tes loisirs', '"I like reading and swimming" — هواياتك'),
          L('"I live in the city center" — where you live', '« I live in the city center » — ton lieu de vie', '"I live in the city center" — مكان سكنك'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you answer "Where are you from?"',
          'Comment répondre à « Where are you from? » ?',
          'كيف تجيب عن "Where are you from?"؟',
        ),
        answer: L(
          '"I\'m from Tunisia. I live in Tunis."',
          '« I\'m from Tunisia. I live in Tunis. »',
          '"I\'m from Tunisia. I live in Tunis."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which sentence talks about a job?',
          'Quelle phrase parle d\'un métier ?',
          'أي جملة تتحدث عن العمل؟',
        ),
        choices: [
          { text: L('I\'m from Spain', 'I\'m from Spain', 'I\'m from Spain') },
          {
            text: L('I work as a nurse', 'I work as a nurse', 'I work as a nurse'),
            explanation: L(
              '"I work as…" introduces your profession.',
              '« I work as… » introduit ta profession.',
              '"I work as…" تقدّم مهنتك.',
            ),
          },
          { text: L('I like music', 'I like music', 'I like music') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order.',
          'Mets les mots dans l\'ordre.',
          'رتّب الكلمات.',
        ),
        steps: [
          L('I', 'I', 'I'),
          L('work', 'work', 'work'),
          L('as', 'as', 'as'),
          L('a', 'a', 'a'),
          L('teacher', 'teacher', 'teacher'),
        ],
      },
    ],
  },
  [lessonKey('english', 'intermediate', 'conversation', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Making plans means suggesting, accepting and refusing politely. English often uses "Let\'s…", "How about…?" and "Are you free…?" — and refusals soften the no with "I\'m sorry" or "maybe another time".',
          'Faire des projets, c\'est proposer, accepter et refuser poliment. L\'anglais utilise souvent « Let\'s… », « How about…? » et « Are you free…? » — et les refus adoucissent le non avec « I\'m sorry » ou « maybe another time ».',
          'وضع الخطط يعني الاقتراح والقبول والرفض بأدب. تستخدم الإنجليزية كثيراً "Let\'s…" و "How about…?" و "Are you free…?" — والرفض يُليَّن بـ "I\'m sorry" أو "maybe another time".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Let\'s go to the cinema" — making a suggestion', '« Let\'s go to the cinema » — faire une proposition', '"Let\'s go to the cinema" — لتقديم اقتراح'),
          L('"How about Saturday?" — suggesting a time', '« How about Saturday? » — proposer un moment', '"How about Saturday?" — لاقتراح موعد'),
          L('"Are you free tomorrow?" — checking availability', '« Are you free tomorrow? » — vérifier la disponibilité', '"Are you free tomorrow?" — للسؤال عن التفرغ'),
          L('"That sounds great!" — accepting', '« That sounds great! » — accepter', '"That sounds great!" — للقبول'),
          L('"I\'m sorry, I can\'t. Maybe another time" — refusing politely', '« I\'m sorry, I can\'t. Maybe another time » — refuser poliment', '"I\'m sorry, I can\'t. Maybe another time" — للرفض بأدب'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you suggest meeting on Saturday?',
          'Comment proposer de se voir samedi ?',
          'كيف تقترح اللقاء يوم السبت؟',
        ),
        answer: L(
          '"Are you free on Saturday? Let\'s have lunch together."',
          '« Are you free on Saturday? Let\'s have lunch together. »',
          '"Are you free on Saturday? Let\'s have lunch together."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which phrase accepts an invitation?',
          'Quelle expression accepte une invitation ?',
          'أي عبارة تقبل الدعوة؟',
        ),
        choices: [
          { text: L('I\'m sorry, I can\'t', 'I\'m sorry, I can\'t', 'I\'m sorry, I can\'t') },
          {
            text: L('That sounds great!', 'That sounds great!', 'That sounds great!'),
            explanation: L(
              '"That sounds great!" is an enthusiastic yes.',
              '« That sounds great! » est un oui enthousiaste.',
              '"That sounds great!" موافقة حماسية.',
            ),
          },
          { text: L('How about Saturday?', 'How about Saturday?', 'How about Saturday?') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to make a suggestion.',
          'Mets les mots dans l\'ordre pour faire une proposition.',
          'رتّب الكلمات لتقديم اقتراح.',
        ),
        steps: [
          L('Let\'s', 'Let\'s', 'Let\'s'),
          L('go', 'go', 'go'),
          L('to', 'to', 'to'),
          L('the', 'the', 'the'),
          L('cinema', 'cinema', 'cinema'),
        ],
      },
    ],
  },
  [lessonKey('english', 'intermediate', 'conversation', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Expressing opinions and feelings makes conversations personal. Use "I think…" and "In my opinion…" for ideas, and adjectives like "happy", "tired" or "excited" for emotions. To agree or disagree politely, say "I agree" or "I see your point, but…".',
          'Exprimer opinions et sentiments rend les conversations personnelles. Utilise « I think… » et « In my opinion… » pour les idées, et des adjectifs comme « happy », « tired » ou « excited » pour les émotions. Pour être d\'accord ou non poliment, dis « I agree » ou « I see your point, but… ».',
          'التعبير عن الآراء والمشاعر يجعل المحادثة شخصية. استخدم "I think…" و "In my opinion…" للأفكار، وصفات مثل "happy" و "tired" و "excited" للمشاعر. وللموافقة أو الاختلاف بأدب قل "I agree" أو "I see your point, but…".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"I think this film is great" — giving an opinion', '« I think this film is great » — donner une opinion', '"I think this film is great" — لإبداء رأي'),
          L('"In my opinion, it\'s too expensive" — a formal opinion', '« In my opinion, it\'s too expensive » — une opinion plus formelle', '"In my opinion, it\'s too expensive" — رأي بصيغة أكثر رسمية'),
          L('"I agree with you" — agreeing', '« I agree with you » — être d\'accord', '"I agree with you" — للموافقة'),
          L('"I see your point, but…" — polite disagreement', '« I see your point, but… » — désaccord poli', '"I see your point, but…" — اختلاف مهذب'),
          L('"I\'m excited" / "I\'m tired" — describing feelings', '« I\'m excited » / « I\'m tired » — décrire ses sentiments (enthousiaste / fatigué)', '"I\'m excited" / "I\'m tired" — لوصف المشاعر (متحمس / متعب)'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you give your opinion about a book?',
          'Comment donner ton avis sur un livre ?',
          'كيف تبدي رأيك في كتاب؟',
        ),
        answer: L(
          '"I think this book is really interesting."',
          '« I think this book is really interesting. »',
          '"I think this book is really interesting."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which phrase disagrees politely?',
          'Quelle expression exprime un désaccord poli ?',
          'أي عبارة تعبّر عن اختلاف مهذب؟',
        ),
        choices: [
          { text: L('You are wrong', 'You are wrong', 'You are wrong') },
          {
            text: L('I see your point, but I disagree', 'I see your point, but I disagree', 'I see your point, but I disagree'),
            explanation: L(
              'Acknowledging the other view first keeps the disagreement polite.',
              'Reconnaître d\'abord l\'avis de l\'autre garde le désaccord poli.',
              'الاعتراف برأي الآخر أولاً يجعل الاختلاف مهذباً.',
            ),
          },
          { text: L('No, never', 'No, never', 'No, never') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to give an opinion.',
          'Mets les mots dans l\'ordre pour donner un avis.',
          'رتّب الكلمات لإبداء رأي.',
        ),
        steps: [
          L('I', 'I', 'I'),
          L('think', 'think', 'think'),
          L('this', 'this', 'this'),
          L('film', 'film', 'film'),
          L('is', 'is', 'is'),
          L('great', 'great', 'great'),
        ],
      },
    ],
  },

  // Advanced — Fluency
  [lessonKey('english', 'advanced', 'fluency', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Good storytelling relies on connectors that guide the listener through time: "first", "then", "suddenly", "in the end". Mixing past simple (events) with past continuous (background) makes a story vivid: "I was walking home when I saw the accident."',
          'Bien raconter repose sur des connecteurs qui guident l\'auditeur dans le temps : « first », « then », « suddenly », « in the end ». Mélanger le past simple (événements) et le past continuous (contexte) rend un récit vivant : « I was walking home when I saw the accident. »',
          'السرد الجيد يعتمد على روابط تقود المستمع عبر الزمن: "first" و "then" و "suddenly" و "in the end". والمزج بين الماضي البسيط (الأحداث) والماضي المستمر (الخلفية) يجعل القصة حية: "I was walking home when I saw the accident."',
        ),
      },
      {
        type: 'list',
        items: [
          L('"First" — the beginning of the story', '« First » — d\'abord, le début du récit', '"First" — أولاً، بداية القصة'),
          L('"Then" / "after that" — the next event', '« Then » / « after that » — ensuite, l\'événement suivant', '"Then" / "after that" — ثم، الحدث التالي'),
          L('"Suddenly" — an unexpected event', '« Suddenly » — soudain, un événement inattendu', '"Suddenly" — فجأة، حدث غير متوقع'),
          L('"Meanwhile" — at the same time', '« Meanwhile » — pendant ce temps', '"Meanwhile" — في تلك الأثناء'),
          L('"In the end" — the conclusion', '« In the end » — à la fin, la conclusion', '"In the end" — في النهاية، الخاتمة'),
          L('"I was walking home when I saw…" — background + event', '« I was walking home when I saw… » — contexte + événement', '"I was walking home when I saw…" — خلفية + حدث'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you start telling what happened yesterday?',
          'Comment commencer à raconter ce qui s\'est passé hier ?',
          'كيف تبدأ سرد ما حدث أمس؟',
        ),
        answer: L(
          '"You won\'t believe what happened yesterday. First, I missed the bus…"',
          '« You won\'t believe what happened yesterday. First, I missed the bus… »',
          '"You won\'t believe what happened yesterday. First, I missed the bus…"',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which connector introduces an unexpected event?',
          'Quel connecteur introduit un événement inattendu ?',
          'أي رابط يقدّم حدثاً غير متوقع؟',
        ),
        choices: [
          { text: L('In the end', 'In the end', 'In the end') },
          {
            text: L('Suddenly', 'Suddenly', 'Suddenly'),
            explanation: L(
              '"Suddenly" signals a surprising turn in the story.',
              '« Suddenly » signale un tournant surprenant dans le récit.',
              '"Suddenly" تشير إلى منعطف مفاجئ في القصة.',
            ),
          },
          { text: L('Meanwhile', 'Meanwhile', 'Meanwhile') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order (background + event).',
          'Mets les mots dans l\'ordre (contexte + événement).',
          'رتّب الكلمات (خلفية + حدث).',
        ),
        steps: [
          L('I', 'I', 'I'),
          L('was', 'was', 'was'),
          L('walking', 'walking', 'walking'),
          L('home', 'home', 'home'),
          L('when', 'when', 'when'),
          L('it', 'it', 'it'),
          L('started', 'started', 'started'),
          L('to rain', 'to rain', 'to rain'),
        ],
      },
    ],
  },
  [lessonKey('english', 'advanced', 'fluency', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'English changes register with the situation. Formal English (emails to a boss, official letters) uses full forms and polite structures; informal English (friends, messages) uses contractions and casual words. Compare "I would like to request…" with "Can you…?".',
          'L\'anglais change de registre selon la situation. L\'anglais formel (e-mails au patron, lettres officielles) utilise des formes complètes et des tournures polies ; l\'anglais informel (amis, messages) utilise contractions et mots familiers. Compare « I would like to request… » et « Can you…? ».',
          'تتغير الإنجليزية حسب الموقف. الإنجليزية الرسمية (رسائل إلى المدير، خطابات رسمية) تستخدم الصيغ الكاملة والتراكيب المهذبة؛ وغير الرسمية (الأصدقاء، الرسائل) تستخدم الاختصارات والكلمات العامية. قارن "I would like to request…" بـ "Can you…?".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Dear Sir or Madam" — formal letter opening', '« Dear Sir or Madam » — ouverture de lettre formelle', '"Dear Sir or Madam" — افتتاحية رسالة رسمية'),
          L('"Hi there!" — informal greeting', '« Hi there! » — salutation informelle', '"Hi there!" — تحية غير رسمية'),
          L('"I would like to request…" — formal request', '« I would like to request… » — demande formelle', '"I would like to request…" — طلب رسمي'),
          L('"Can you give me a hand?" — informal request', '« Can you give me a hand? » — demande informelle (un coup de main)', '"Can you give me a hand?" — طلب غير رسمي (المساعدة)'),
          L('"Yours sincerely" — formal closing', '« Yours sincerely » — formule de clôture formelle', '"Yours sincerely" — خاتمة رسمية'),
          L('"See you!" — informal goodbye', '« See you! » — au revoir informel', '"See you!" — وداع غير رسمي'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask for help formally and informally?',
          'Comment demander de l\'aide de façon formelle puis informelle ?',
          'كيف تطلب المساعدة بصيغة رسمية ثم غير رسمية؟',
        ),
        answer: L(
          'Formal: "Would you be able to assist me?" — Informal: "Can you give me a hand?"',
          'Formel : « Would you be able to assist me? » — Informel : « Can you give me a hand? »',
          'رسمي: "Would you be able to assist me?" — غير رسمي: "Can you give me a hand?"',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which closing fits a formal email?',
          'Quelle formule de clôture convient à un e-mail formel ?',
          'أي خاتمة تناسب بريداً رسمياً؟',
        ),
        choices: [
          { text: L('See you!', 'See you!', 'See you!') },
          {
            text: L('Yours sincerely', 'Yours sincerely', 'Yours sincerely'),
            explanation: L(
              '"Yours sincerely" is the standard formal closing.',
              '« Yours sincerely » est la clôture formelle standard.',
              '"Yours sincerely" هي الخاتمة الرسمية المعتادة.',
            ),
          },
          { text: L('Later!', 'Later!', 'Later!') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          '"Hi there! Wanna grab a coffee?" — this message is…',
          '« Hi there! Wanna grab a coffee? » — ce message est…',
          '"Hi there! Wanna grab a coffee?" — هذه الرسالة…',
        ),
        choices: [
          { text: L('Formal', 'Formelle', 'رسمية') },
          {
            text: L('Informal', 'Informelle', 'غير رسمية'),
            explanation: L(
              '"Hi there" and "wanna" are casual, friendly language.',
              '« Hi there » et « wanna » relèvent d\'un langage familier et amical.',
              '"Hi there" و "wanna" لغة عامية ودّية.',
            ),
          },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('english', 'advanced', 'fluency', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Idioms are fixed expressions whose meaning cannot be guessed word by word. Native speakers use them constantly, so recognizing common idioms is a big step toward fluency.',
          'Les idiomes sont des expressions figées dont le sens ne se devine pas mot à mot. Les anglophones les utilisent constamment ; reconnaître les idiomes courants est un grand pas vers la fluidité.',
          'التعابير الاصطلاحية عبارات ثابتة لا يمكن تخمين معناها كلمة بكلمة. المتحدثون الأصليون يستخدمونها باستمرار، لذا فمعرفة الشائع منها خطوة كبيرة نحو الطلاقة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"It\'s raining cats and dogs" — it is raining very heavily', '« It\'s raining cats and dogs » — il pleut très fort', '"It\'s raining cats and dogs" — تمطر بغزارة شديدة'),
          L('"Break a leg!" — good luck (before a performance)', '« Break a leg! » — bonne chance (avant un spectacle)', '"Break a leg!" — حظاً سعيداً (قبل عرض أو أداء)'),
          L('"A piece of cake" — something very easy', '« A piece of cake » — quelque chose de très facile', '"A piece of cake" — شيء سهل جداً'),
          L('"To be under the weather" — to feel slightly ill', '« To be under the weather » — se sentir un peu malade', '"To be under the weather" — أن تشعر بتوعك خفيف'),
          L('"Once in a blue moon" — very rarely', '« Once in a blue moon » — très rarement', '"Once in a blue moon" — نادراً جداً'),
          L('"To hit the books" — to study hard', '« To hit the books » — étudier sérieusement', '"To hit the books" — أن تدرس بجد'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say an exam was very easy, using an idiom?',
          'Comment dire qu\'un examen était très facile, avec un idiome ?',
          'كيف تقول إن الامتحان كان سهلاً جداً باستخدام تعبير اصطلاحي؟',
        ),
        answer: L(
          '"The exam was a piece of cake."',
          '« The exam was a piece of cake. »',
          '"The exam was a piece of cake."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "break a leg" mean?',
          'Que signifie « break a leg » ?',
          'ماذا تعني "break a leg"؟',
        ),
        choices: [
          { text: L('Be careful', 'Fais attention', 'كن حذراً') },
          {
            text: L('Good luck', 'Bonne chance', 'حظاً سعيداً'),
            explanation: L(
              'It is a traditional way to wish luck before a performance.',
              'C\'est une façon traditionnelle de souhaiter bonne chance avant un spectacle.',
              'إنها طريقة تقليدية لتمني الحظ قبل عرض أو أداء.',
            ),
          },
          { text: L('Go to the doctor', 'Va chez le médecin', 'اذهب إلى الطبيب') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'You feel slightly ill. Which idiom fits?',
          'Tu te sens un peu malade. Quel idiome convient ?',
          'تشعر بتوعك خفيف. أي تعبير يناسب؟',
        ),
        choices: [
          { text: L('I\'m under the weather', 'I\'m under the weather', 'I\'m under the weather') },
          { text: L('It\'s a piece of cake', 'It\'s a piece of cake', 'It\'s a piece of cake') },
          { text: L('Once in a blue moon', 'Once in a blue moon', 'Once in a blue moon') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Advanced — Culture
  [lessonKey('english', 'advanced', 'culture', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Reading and watching English-language news builds vocabulary fast. News language has its own key words: "headline", "breaking news", "source". Learning them helps you follow the BBC, CNN or any English media.',
          'Lire et regarder les médias en anglais enrichit vite le vocabulaire. Le langage de l\'information a ses mots clés : « headline », « breaking news », « source ». Les connaître aide à suivre la BBC, CNN ou tout média anglophone.',
          'قراءة الأخبار ومشاهدتها بالإنجليزية تنمّي المفردات بسرعة. للغة الأخبار كلماتها المفتاحية: "headline" و "breaking news" و "source". تعلّمها يساعدك على متابعة BBC و CNN وأي إعلام إنجليزي.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Headline" — the title of a news story', '« Headline » — le titre d\'un article de presse', '"Headline" — عنوان الخبر'),
          L('"Breaking news" — news happening right now', '« Breaking news » — information de dernière minute', '"Breaking news" — خبر عاجل'),
          L('"Source" — where the information comes from', '« Source » — l\'origine de l\'information', '"Source" — مصدر المعلومة'),
          L('"Interview" — a conversation with questions and answers', '« Interview » — un entretien de questions-réponses', '"Interview" — مقابلة بأسئلة وأجوبة'),
          L('"According to…" — citing a source', '« According to… » — selon…, pour citer une source', '"According to…" — وفقاً لـ…، للاستشهاد بمصدر'),
          L('"To broadcast" — to send out on TV or radio', '« To broadcast » — diffuser à la télé ou à la radio', '"To broadcast" — أن يبث عبر التلفاز أو الراديو'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you report information from a newspaper?',
          'Comment rapporter une information tirée d\'un journal ?',
          'كيف تنقل معلومة من صحيفة؟',
        ),
        answer: L(
          '"According to the newspaper, the storm will arrive tonight."',
          '« According to the newspaper, the storm will arrive tonight. »',
          '"According to the newspaper, the storm will arrive tonight."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is a "headline"?',
          'Qu\'est-ce qu\'une « headline » ?',
          'ما معنى "headline"؟',
        ),
        choices: [
          {
            text: L('The title of a news story', 'Le titre d\'un article', 'عنوان الخبر'),
            explanation: L(
              'The headline is the short title above an article.',
              'La headline est le titre court au-dessus d\'un article.',
              'الـ headline هو العنوان القصير أعلى المقال.',
            ),
          },
          { text: L('A journalist', 'Un journaliste', 'صحفي') },
          { text: L('A TV channel', 'Une chaîne de télévision', 'قناة تلفزيونية') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to cite a source.',
          'Mets les mots dans l\'ordre pour citer une source.',
          'رتّب الكلمات للاستشهاد بمصدر.',
        ),
        steps: [
          L('According', 'According', 'According'),
          L('to', 'to', 'to'),
          L('the', 'the', 'the'),
          L('BBC,', 'BBC,', 'BBC,'),
          L('the', 'the', 'the'),
          L('match', 'match', 'match'),
          L('was', 'was', 'was'),
          L('cancelled', 'cancelled', 'cancelled'),
        ],
      },
    ],
  },
  [lessonKey('english', 'advanced', 'culture', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Work and study vocabulary is essential for CVs, interviews and university life. English distinguishes "a job" (a specific position) from "work" (the activity in general), and "a degree" is what you earn at university.',
          'Le vocabulaire du travail et des études est essentiel pour les CV, les entretiens et la vie universitaire. L\'anglais distingue « a job » (un poste précis) de « work » (l\'activité en général), et « a degree » est le diplôme obtenu à l\'université.',
          'مفردات العمل والدراسة أساسية للسير الذاتية والمقابلات والحياة الجامعية. تميّز الإنجليزية بين "a job" (وظيفة محددة) و "work" (النشاط عموماً)، و "a degree" هي الشهادة الجامعية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"To apply for a job" — to send your CV for a position', '« To apply for a job » — postuler à un emploi', '"To apply for a job" — أن تتقدم لوظيفة'),
          L('"A job interview" — a meeting to get hired', '« A job interview » — un entretien d\'embauche', '"A job interview" — مقابلة توظيف'),
          L('"A deadline" — the date by which work must be done', '« A deadline » — la date limite pour rendre un travail', '"A deadline" — الموعد النهائي لإنجاز عمل'),
          L('"A degree" — a university qualification', '« A degree » — un diplôme universitaire', '"A degree" — شهادة جامعية'),
          L('"To take an exam" — to sit a test', '« To take an exam » — passer un examen', '"To take an exam" — أن تجتاز امتحاناً'),
          L('"A colleague" — a person you work with', '« A colleague » — une personne avec qui tu travailles', '"A colleague" — زميل في العمل'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say you are applying for a position?',
          'Comment dire que tu postules à un poste ?',
          'كيف تقول إنك تتقدم لوظيفة؟',
        ),
        answer: L(
          '"I\'m applying for a job as a software engineer."',
          '« I\'m applying for a job as a software engineer. »',
          '"I\'m applying for a job as a software engineer."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is a "deadline"?',
          'Qu\'est-ce qu\'une « deadline » ?',
          'ما معنى "deadline"؟',
        ),
        choices: [
          { text: L('A person you work with', 'Une personne avec qui tu travailles', 'شخص تعمل معه') },
          {
            text: L('The date by which work must be finished', 'La date limite pour finir un travail', 'الموعد النهائي لإنهاء العمل'),
            explanation: L(
              'Missing a deadline means finishing after the required date.',
              'Rater une deadline signifie finir après la date exigée.',
              'تجاوز الـ deadline يعني الإنهاء بعد التاريخ المطلوب.',
            ),
          },
          { text: L('A university qualification', 'Un diplôme universitaire', 'شهادة جامعية') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order.',
          'Mets les mots dans l\'ordre.',
          'رتّب الكلمات.',
        ),
        steps: [
          L('I', 'I', 'I'),
          L('have', 'have', 'have'),
          L('a', 'a', 'a'),
          L('job', 'job', 'job'),
          L('interview', 'interview', 'interview'),
          L('tomorrow', 'tomorrow', 'tomorrow'),
        ],
      },
    ],
  },
  [lessonKey('english', 'advanced', 'culture', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Travel English gets you through airports, hotels and daily errands. Key situations: checking in, going through security, booking a room and asking locals for help. Most exchanges follow predictable scripts you can prepare in advance.',
          'L\'anglais du voyage te fait passer aéroports, hôtels et courses du quotidien. Situations clés : l\'enregistrement, le contrôle de sécurité, la réservation d\'une chambre et demander de l\'aide aux habitants. La plupart des échanges suivent des scénarios prévisibles que tu peux préparer à l\'avance.',
          'إنجليزية السفر تعينك في المطارات والفنادق ومهام الحياة اليومية. المواقف الأساسية: تسجيل الوصول، عبور الأمن، حجز غرفة، وطلب المساعدة من السكان. معظم الحوارات تتبع سيناريوهات متوقعة يمكنك تحضيرها مسبقاً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"A boarding pass" — the document to get on the plane', '« A boarding pass » — la carte d\'embarquement pour monter dans l\'avion', '"A boarding pass" — بطاقة الصعود إلى الطائرة'),
          L('"I\'d like to check in" — at the airport or hotel', '« I\'d like to check in » — à l\'aéroport ou à l\'hôtel, pour s\'enregistrer', '"I\'d like to check in" — لتسجيل الوصول في المطار أو الفندق'),
          L('"I have a reservation" — you booked in advance', '« I have a reservation » — tu as réservé à l\'avance', '"I have a reservation" — لديك حجز مسبق'),
          L('"Where is the nearest pharmacy?" — daily-life question', '« Where is the nearest pharmacy? » — question du quotidien (la pharmacie la plus proche)', '"Where is the nearest pharmacy?" — سؤال يومي عن أقرب صيدلية'),
          L('"Could you speak more slowly, please?" — when you don\'t understand', '« Could you speak more slowly, please? » — quand tu ne comprends pas', '"Could you speak more slowly, please?" — عندما لا تفهم المتحدث'),
          L('"How do I get to the city center?" — asking the way', '« How do I get to the city center? » — demander le chemin du centre-ville', '"How do I get to the city center?" — للسؤال عن الطريق إلى وسط المدينة'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you check in at a hotel with a booking?',
          'Comment s\'enregistrer à l\'hôtel avec une réservation ?',
          'كيف تسجّل وصولك في فندق ولديك حجز؟',
        ),
        answer: L(
          '"Good evening, I have a reservation under the name Ben Ali."',
          '« Good evening, I have a reservation under the name Ben Ali. »',
          '"Good evening, I have a reservation under the name Ben Ali."',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What do you say when someone speaks too fast?',
          'Que dire quand quelqu\'un parle trop vite ?',
          'ماذا تقول عندما يتحدث أحدهم بسرعة كبيرة؟',
        ),
        choices: [
          {
            text: L('Could you speak more slowly, please?', 'Could you speak more slowly, please?', 'Could you speak more slowly, please?'),
            explanation: L(
              'A polite request to slow down keeps the conversation going.',
              'Une demande polie de ralentir permet de poursuivre la conversation.',
              'طلب مهذب لإبطاء الكلام يبقي المحادثة مستمرة.',
            ),
          },
          { text: L('Stop talking', 'Stop talking', 'Stop talking') },
          { text: L('I have a reservation', 'I have a reservation', 'I have a reservation') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to ask the way.',
          'Mets les mots dans l\'ordre pour demander le chemin.',
          'رتّب الكلمات للسؤال عن الطريق.',
        ),
        steps: [
          L('How', 'How', 'How'),
          L('do', 'do', 'do'),
          L('I', 'I', 'I'),
          L('get', 'get', 'get'),
          L('to', 'to', 'to'),
          L('the', 'the', 'the'),
          L('city center?', 'city center?', 'city center?'),
        ],
      },
    ],
  },
}
