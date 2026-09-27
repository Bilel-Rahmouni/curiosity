import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// Arabic language track (Modern Standard Arabic, with notes for learners in Tunisia).
export const arabicLessons: Record<string, LessonContent> = {
  // Beginner — Basics
  [lessonKey('arabic', 'beginner', 'basics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Arabic is written from right to left in a flowing script. Start with greetings: they open every conversation, and most work at any time of day.',
          'L\'arabe s\'écrit de droite à gauche dans une écriture cursive. Commence par les salutations : elles ouvrent chaque conversation et la plupart s\'emploient à toute heure.',
          'تُكتب العربية من اليمين إلى اليسار بخط متصل. نبدأ بالتحيات: فهي مفتاح كل محادثة، ومعظمها يصلح في أي وقت من اليوم.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"مرحباً" (marhaban) — hello.', '« مرحباً » (marhaban) — bonjour, salut.', '"مرحباً" — تحية عامة.'),
          L('"صباح الخير" (sabah al-khayr) — good morning.', '« صباح الخير » (sabah al-khayr) — bonjour (le matin).', '"صباح الخير" — تحية الصباح.'),
          L('"مساء الخير" (masa\' al-khayr) — good evening.', '« مساء الخير » (masa\' al-khayr) — bonsoir.', '"مساء الخير" — تحية المساء.'),
          L('"اسمي..." (ismi) — my name is…', '« اسمي... » (ismi) — je m\'appelle…', '"اسمي..." — للتعريف بالنفس.'),
          L('"كيف حالك؟" (kayfa haluk?) — how are you?', '« كيف حالك؟ » (kayfa haluk ?) — comment vas-tu ?', '"كيف حالك؟" — للسؤال عن الحال.'),
          L('"أهلاً وسهلاً" (ahlan wa sahlan) — welcome.', '« أهلاً وسهلاً » (ahlan wa sahlan) — bienvenue.', '"أهلاً وسهلاً" — للترحيب بالضيف.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "my name is Layla"?',
          'Comment dit-on « je m\'appelle Layla » ?',
          'كيف تعرّف بنفسك إن كان اسمك ليلى؟',
        ),
        answer: L(
          '"اسمي ليلى" (ismi Layla).',
          '« اسمي ليلى » (ismi Layla).',
          'تقول: "اسمي ليلى".',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which greeting do you use in the morning?',
          'Quelle salutation emploie-t-on le matin ?',
          'أي تحية نستعمل في الصباح؟',
        ),
        choices: [
          { text: L('"مساء الخير" (masa\' al-khayr)', '« مساء الخير » (masa\' al-khayr)', '"مساء الخير"') },
          {
            text: L('"صباح الخير" (sabah al-khayr)', '« صباح الخير » (sabah al-khayr)', '"صباح الخير"'),
            explanation: L(
              '"صباح" (sabah) means morning.',
              '« صباح » (sabah) signifie matin.',
              'كلمة "صباح" تعني أول النهار.',
            ),
          },
          { text: L('"مع السلامة" (ma\'a as-salama)', '« مع السلامة » (ma\'a as-salama)', '"مع السلامة"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "Good morning, my name is Amine." (Remember: Arabic reads right to left.)',
          'Remets les mots en ordre : « Bonjour, je m\'appelle Amine. » (Rappel : l\'arabe se lit de droite à gauche.)',
          'رتّب الكلمات لتكوين الجملة: تحية الصباح ثم التعريف بالاسم.',
        ),
        steps: [
          L('صباح (sabah)', '« صباح » (sabah)', 'صباح'),
          L('الخير (al-khayr)', '« الخير » (al-khayr)', 'الخير'),
          L('اسمي (ismi)', '« اسمي » (ismi)', 'اسمي'),
          L('أمين (Amine)', '« أمين » (Amine)', 'أمين'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'beginner', 'basics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Arabic numbers one to ten are the base of counting; tens like twenty and thirty follow a regular pattern ending in "-un". To ask the time, say "كم الساعة؟" (kam as-sa\'a?).',
          'Les nombres arabes de un à dix sont la base du comptage ; les dizaines comme vingt et trente suivent un schéma régulier en « -un ». Pour demander l\'heure, on dit « كم الساعة؟ » (kam as-sa\'a ?).',
          'الأعداد من واحد إلى عشرة هي أساس العد؛ والعشرات مثل عشرين وثلاثين تنتهي بنمط منتظم. ولنسأل عن الوقت نقول: "كم الساعة؟".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"واحد" (wahid) — one, "اثنان" (ithnan) — two, "ثلاثة" (thalatha) — three.', '« واحد » (wahid) — un, « اثنان » (ithnan) — deux, « ثلاثة » (thalatha) — trois.', '"واحد"، "اثنان"، "ثلاثة" — أول ثلاثة أعداد.'),
          L('"أربعة" (arba\'a) — four, "خمسة" (khamsa) — five.', '« أربعة » (arba\'a) — quatre, « خمسة » (khamsa) — cinq.', '"أربعة" ثم "خمسة".'),
          L('"عشرة" (\'ashara) — ten, "عشرون" (\'ishrun) — twenty, "ثلاثون" (thalathun) — thirty.', '« عشرة » (\'ashara) — dix, « عشرون » (\'ishrun) — vingt, « ثلاثون » (thalathun) — trente.', '"عشرة" ثم "عشرون" ثم "ثلاثون".'),
          L('"كم الساعة؟" (kam as-sa\'a?) — what time is it?', '« كم الساعة؟ » (kam as-sa\'a ?) — quelle heure est-il ?', '"كم الساعة؟" — للسؤال عن الوقت.'),
          L('"الساعة الخامسة" (as-sa\'a al-khamisa) — it is five o\'clock.', '« الساعة الخامسة » (as-sa\'a al-khamisa) — il est cinq heures.', '"الساعة الخامسة" — للإخبار بأن الوقت هو الخامسة.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What number is "ثلاثون" (thalathun)?',
          'Quel nombre est « ثلاثون » (thalathun) ?',
          'ما هو العدد "ثلاثون"؟',
        ),
        answer: 30,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'How do you ask "what time is it?"',
          'Comment demande-t-on « quelle heure est-il ? » ?',
          'كيف نسأل عن الوقت؟',
        ),
        choices: [
          { text: L('"كم عمرك؟" (kam \'umruk?)', '« كم عمرك؟ » (kam \'umruk ?)', '"كم عمرك؟"') },
          {
            text: L('"كم الساعة؟" (kam as-sa\'a?)', '« كم الساعة؟ » (kam as-sa\'a ?)', '"كم الساعة؟"'),
            explanation: L(
              '"الساعة" (as-sa\'a) means the hour or the clock.',
              '« الساعة » (as-sa\'a) signifie l\'heure ou la montre.',
              'كلمة "الساعة" تدل على الوقت.',
            ),
          },
          { text: L('"أين الساعة؟" (ayna as-sa\'a?)', '« أين الساعة؟ » (ayna as-sa\'a ?)', '"أين الساعة؟"') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('arabic', 'beginner', 'basics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Every Arabic noun is masculine or feminine. Most feminine nouns end in the letter "ة" (ta marbuta), like "طاولة" (tawila, table) — a very reliable clue when learning new objects.',
          'Chaque nom arabe est masculin ou féminin. La plupart des noms féminins finissent par la lettre « ة » (ta marbouta), comme « طاولة » (tawila, table) — un indice très fiable pour apprendre de nouveaux objets.',
          'كل اسم في العربية إما مذكر أو مؤنث. ومعظم الأسماء المؤنثة تنتهي بالتاء المربوطة "ة" مثل "طاولة" — وهذه علامة مفيدة عند تعلم أسماء الأشياء.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"كتاب" (kitab) — book (masculine).', '« كتاب » (kitab) — livre (masculin).', '"كتاب" — اسم مذكر.'),
          L('"قلم" (qalam) — pen (masculine).', '« قلم » (qalam) — stylo (masculin).', '"قلم" — اسم مذكر.'),
          L('"باب" (bab) — door (masculine).', '« باب » (bab) — porte (masculin).', '"باب" — اسم مذكر.'),
          L('"طاولة" (tawila) — table (feminine).', '« طاولة » (tawila) — table (féminin).', '"طاولة" — اسم مؤنث بالتاء المربوطة.'),
          L('"سيارة" (sayyara) — car (feminine).', '« سيارة » (sayyara) — voiture (féminin).', '"سيارة" — اسم مؤنث بالتاء المربوطة.'),
          L('"هاتف" (hatif) — phone (masculine).', '« هاتف » (hatif) — téléphone (masculin).', '"هاتف" — اسم مذكر.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "this is a book"?',
          'Comment dit-on « c\'est un livre » ?',
          'كيف تشير إلى كتاب أمامك؟',
        ),
        answer: L(
          '"هذا كتاب" (hadha kitab). For a feminine noun use "هذه" (hadhihi): "هذه طاولة" (hadhihi tawila).',
          '« هذا كتاب » (hadha kitab). Pour un nom féminin on emploie « هذه » (hadhihi) : « هذه طاولة » (hadhihi tawila).',
          'تقول: "هذا كتاب". وللمؤنث نستعمل "هذه": "هذه طاولة".',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which of these nouns is feminine?',
          'Lequel de ces noms est féminin ?',
          'أي من هذه الأسماء مؤنث؟',
        ),
        choices: [
          { text: L('"قلم" (qalam)', '« قلم » (qalam)', '"قلم"') },
          {
            text: L('"سيارة" (sayyara)', '« سيارة » (sayyara)', '"سيارة"'),
            explanation: L(
              'It ends in "ة" (ta marbuta), the usual feminine marker.',
              'Il se termine par « ة » (ta marbouta), la marque habituelle du féminin.',
              'تنتهي بالتاء المربوطة، وهي علامة التأنيث الشائعة.',
            ),
          },
          { text: L('"باب" (bab)', '« باب » (bab)', '"باب"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "The book is on the table."',
          'Remets les mots en ordre : « Le livre est sur la table. »',
          'رتّب الكلمات لتكوين الجملة: الكتاب فوق الطاولة.',
        ),
        steps: [
          L('الكتاب (al-kitab)', '« الكتاب » (al-kitab)', 'الكتاب'),
          L('على (\'ala)', '« على » (\'ala)', 'على'),
          L('الطاولة (at-tawila)', '« الطاولة » (at-tawila)', 'الطاولة'),
        ],
      },
    ],
  },

  // Beginner — Phrases
  [lessonKey('arabic', 'beginner', 'phrases', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Café culture is central in the Arab world, especially in Tunisia. Notice the sun letters: in "الشاي" (ash-shay, the tea) the "L" of "ال" (al-) is not pronounced — it assimilates into the "sh".',
          'La culture du café est centrale dans le monde arabe, surtout en Tunisie. Remarque les lettres solaires : dans « الشاي » (ash-shay, le thé), le « L » de « ال » (al-) ne se prononce pas — il s\'assimile au « ch ».',
          'ثقافة المقهى أساسية في العالم العربي وخاصة في تونس. لاحظ الحروف الشمسية: في كلمة "الشاي" لا تُنطق لام التعريف بل تُدغم في الشين.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"قهوة" (qahwa) — coffee.', '« قهوة » (qahwa) — café.', '"قهوة" — المشروب المشهور.'),
          L('"شاي" (shay) — tea.', '« شاي » (shay) — thé.', '"شاي" — مشروب ساخن.'),
          L('"ماء" (ma\') — water.', '« ماء » (ma\') — eau.', '"ماء" — الشراب الأساسي.'),
          L('"من فضلك" (min fadlik) — please.', '« من فضلك » (min fadlik) — s\'il vous plaît.', '"من فضلك" — عبارة التأدب في الطلب.'),
          L('"شكراً" (shukran) — thank you.', '« شكراً » (shukran) — merci.', '"شكراً" — كلمة الشكر.'),
          L('"الحساب من فضلك" (al-hisab min fadlik) — the bill, please.', '« الحساب من فضلك » (al-hisab min fadlik) — l\'addition, s\'il vous plaît.', '"الحساب من فضلك" — لطلب الفاتورة.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you order a coffee politely?',
          'Comment commander un café poliment ?',
          'كيف تطلب قهوة بأدب؟',
        ),
        answer: L(
          '"قهوة من فضلك" (qahwa min fadlik).',
          '« قهوة من فضلك » (qahwa min fadlik).',
          'تقول: "قهوة من فضلك".',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "شكراً" (shukran) mean?',
          'Que signifie « شكراً » (shukran) ?',
          'ماذا نقصد عندما نقول "شكراً"؟',
        ),
        choices: [
          { text: L('Please', 'S\'il vous plaît', 'الرجاء') },
          { text: L('Thank you', 'Merci', 'التعبير عن الامتنان'), explanation: L('You can answer with "عفواً" (\'afwan) — you\'re welcome.', 'On peut répondre « عفواً » (\'afwan) — de rien.', 'ويُرد عليها بكلمة "عفواً".') },
          { text: L('Goodbye', 'Au revoir', 'الوداع') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "I want tea, please."',
          'Remets les mots en ordre : « Je veux du thé, s\'il vous plaît. »',
          'رتّب الكلمات لتكوين الجملة: طلب الشاي بأدب.',
        ),
        steps: [
          L('أريد (urid)', '« أريد » (urid)', 'أريد'),
          L('شاياً (shayan)', '« شاياً » (shayan)', 'شاياً'),
          L('من فضلك (min fadlik)', '« من فضلك » (min fadlik)', 'من فضلك'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'beginner', 'phrases', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To find your way, one word does most of the work: "أين" (ayna, where). Combine it with a place and "من فضلك" (min fadlik) and you can navigate any Arab city.',
          'Pour trouver ton chemin, un mot fait presque tout le travail : « أين » (ayna, où). Combine-le avec un lieu et « من فضلك » (min fadlik) et tu peux te repérer dans n\'importe quelle ville arabe.',
          'للاهتداء إلى الطريق تكفي كلمة واحدة تقريباً: "أين". أضف إليها اسم المكان وعبارة "من فضلك" وستتدبر أمرك في أي مدينة عربية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"أين...؟" (ayna...?) — where is…?', '« أين...؟ » (ayna... ?) — où est… ?', '"أين...؟" — للسؤال عن المكان.'),
          L('"يمين" (yamin) — right; "يسار" (yasar) — left.', '« يمين » (yamin) — droite ; « يسار » (yasar) — gauche.', '"يمين" و"يسار" — الاتجاهان الجانبيان.'),
          L('"على طول" (\'ala tul) — straight ahead.', '« على طول » (\'ala tul) — tout droit.', '"على طول" — دون انعطاف.'),
          L('"قريب" (qarib) — near; "بعيد" (ba\'id) — far.', '« قريب » (qarib) — proche ; « بعيد » (ba\'id) — loin.', '"قريب" و"بعيد" — لوصف المسافة.'),
          L('"السوق" (as-suq) — the market; "المحطة" (al-mahatta) — the station.', '« السوق » (as-suq) — le marché ; « المحطة » (al-mahatta) — la gare.', '"السوق" و"المحطة" — مكانان مهمان في المدينة.'),
          L('"المدينة العتيقة" (al-madina al-\'atiqa) — the old town, like the medina of Tunis.', '« المدينة العتيقة » (al-madina al-\'atiqa) — la vieille ville, comme la médina de Tunis.', '"المدينة العتيقة" — الحي القديم، مثل مدينة تونس العتيقة.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Someone says "على طول ثم يمين" (\'ala tul thumma yamin). Where do you go?',
          'Quelqu\'un dit « على طول ثم يمين » (\'ala tul thumma yamin). Où vas-tu ?',
          'قال لك أحدهم: "على طول ثم يمين". ماذا تفعل؟',
        ),
        choices: [
          {
            text: L('Straight ahead, then right', 'Tout droit, puis à droite', 'أواصل مستقيماً ثم أنعطف يميناً'),
            explanation: L(
              '"ثم" (thumma) means "then".',
              '« ثم » (thumma) signifie « puis ».',
              'كلمة "ثم" تفيد الترتيب والتعقيب.',
            ),
          },
          { text: L('Left, then straight ahead', 'À gauche, puis tout droit', 'أنعطف يساراً ثم أواصل مستقيماً') },
          { text: L('Right, then left', 'À droite, puis à gauche', 'أنعطف يميناً ثم يساراً') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "Where is the station, please?"',
          'Remets les mots en ordre : « Où est la gare, s\'il vous plaît ? »',
          'رتّب الكلمات لتكوين السؤال عن مكان المحطة.',
        ),
        steps: [
          L('أين (ayna)', '« أين » (ayna)', 'أين'),
          L('المحطة (al-mahatta)', '« المحطة » (al-mahatta)', 'المحطة'),
          L('من فضلك؟ (min fadlik?)', '« من فضلك؟ » (min fadlik ?)', 'من فضلك؟'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'beginner', 'phrases', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Bargaining is part of shopping in traditional markets. The key question is "بكم هذا؟" (bikam hadha?, how much is this?). In Tunisia prices are in dinars — "دينار" (dinar).',
          'Marchander fait partie des achats dans les marchés traditionnels. La question clé est « بكم هذا؟ » (bikam hadha ?, combien ça coûte ?). En Tunisie, les prix sont en dinars — « دينار » (dinar).',
          'المساومة جزء من التسوق في الأسواق التقليدية. والسؤال الأساسي هو: "بكم هذا؟". وفي تونس تكون الأسعار بالدينار.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"بكم هذا؟" (bikam hadha?) — how much is this?', '« بكم هذا؟ » (bikam hadha ?) — combien ça coûte ?', '"بكم هذا؟" — للسؤال عن الثمن.'),
          L('"غالٍ" (ghalin) — expensive.', '« غالٍ » (ghalin) — cher.', '"غالٍ" — مرتفع الثمن.'),
          L('"رخيص" (rakhis) — cheap.', '« رخيص » (rakhis) — bon marché.', '"رخيص" — منخفض الثمن.'),
          L('"أريد أن أشتري..." (urid an ashtari) — I want to buy…', '« أريد أن أشتري... » (urid an ashtari) — je veux acheter…', '"أريد أن أشتري..." — للتعبير عن نية الشراء.'),
          L('"دينار" (dinar) — dinar, the currency of Tunisia.', '« دينار » (dinar) — dinar, la monnaie de la Tunisie.', '"دينار" — عملة تونس.'),
          L('"هذا غالٍ جداً!" (hadha ghalin jiddan!) — that is too expensive!', '« هذا غالٍ جداً! » (hadha ghalin jiddan !) — c\'est trop cher !', '"هذا غالٍ جداً!" — عبارة المساومة الشهيرة.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask the price of a shirt you are pointing at?',
          'Comment demander le prix d\'une chemise que tu montres du doigt ?',
          'كيف تسأل عن ثمن قميص تشير إليه؟',
        ),
        answer: L(
          '"بكم هذا؟" (bikam hadha?) — the seller might answer "عشرون ديناراً" (\'ishrun dinaran), twenty dinars.',
          '« بكم هذا؟ » (bikam hadha ?) — le vendeur peut répondre « عشرون ديناراً » (\'ishrun dinaran), vingt dinars.',
          'تسأل: "بكم هذا؟" فقد يجيب البائع: "عشرون ديناراً".',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'The seller says "خمسة دنانير" (khamsat dananir). How many dinars is that?',
          'Le vendeur dit « خمسة دنانير » (khamsat dananir). Combien de dinars est-ce ?',
          'قال البائع: "خمسة دنانير". كم ديناراً طلب؟',
        ),
        answer: 5,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What is the opposite of "غالٍ" (ghalin, expensive)?',
          'Quel est le contraire de « غالٍ » (ghalin, cher) ?',
          'ما عكس كلمة "غالٍ"؟',
        ),
        choices: [
          { text: L('"كبير" (kabir) — big', '« كبير » (kabir) — grand', '"كبير"') },
          { text: L('"رخيص" (rakhis) — cheap', '« رخيص » (rakhis) — bon marché', '"رخيص"') },
          { text: L('"جديد" (jadid) — new', '« جديد » (jadid) — nouveau', '"جديد"') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Intermediate — Grammar
  [lessonKey('arabic', 'intermediate', 'grammar', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Arabic verbs are built on three-letter roots. The present tense adds a prefix for the person: "أ" (a-) for I, "ت" (ta-) for you, "ي" (ya-) for he, "ن" (na-) for we. From the root k-t-b (writing): "أكتب" (aktubu, I write).',
          'Les verbes arabes se construisent sur des racines de trois lettres. Le présent ajoute un préfixe selon la personne : « أ » (a-) pour je, « ت » (ta-) pour tu, « ي » (ya-) pour il, « ن » (na-) pour nous. Avec la racine k-t-b (écrire) : « أكتب » (aktubu, j\'écris).',
          'تُبنى الأفعال العربية على جذور ثلاثية. وفي المضارع نضيف حرفاً في أول الفعل حسب الفاعل: الهمزة للمتكلم، والتاء للمخاطب، والياء للغائب، والنون للجمع. من جذر ك-ت-ب: "أكتب".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"أكتب" (aktubu) — I write.', '« أكتب » (aktubu) — j\'écris.', '"أكتب" — فعل مضارع للمتكلم.'),
          L('"تكتب" (taktubu) — you write.', '« تكتب » (taktubu) — tu écris.', '"تكتب" — للمخاطب.'),
          L('"يكتب" (yaktubu) — he writes.', '« يكتب » (yaktubu) — il écrit.', '"يكتب" — للغائب المذكر.'),
          L('"نكتب" (naktubu) — we write.', '« نكتب » (naktubu) — nous écrivons.', '"نكتب" — للجمع المتكلم.'),
          L('"أدرس" (adrusu) — I study; "يدرس" (yadrusu) — he studies.', '« أدرس » (adrusu) — j\'étudie ; « يدرس » (yadrusu) — il étudie.', '"أدرس" و"يدرس" — من جذر د-ر-س.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which form means "he writes"?',
          'Quelle forme signifie « il écrit » ?',
          'أي صيغة تعبّر عن الغائب المذكر في المضارع من ك-ت-ب؟',
        ),
        choices: [
          { text: L('"أكتب" (aktubu)', '« أكتب » (aktubu)', '"أكتب"') },
          {
            text: L('"يكتب" (yaktubu)', '« يكتب » (yaktubu)', '"يكتب"'),
            explanation: L(
              'The prefix "ي" (ya-) marks the third person masculine.',
              'Le préfixe « ي » (ya-) marque la troisième personne du masculin.',
              'الياء في أول المضارع علامة الغائب المذكر.',
            ),
          },
          { text: L('"نكتب" (naktubu)', '« نكتب » (naktubu)', '"نكتب"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "I study Arabic every day."',
          'Remets les mots en ordre : « J\'étudie l\'arabe chaque jour. »',
          'رتّب الكلمات لتكوين الجملة: الحديث عن دراسة العربية يومياً.',
        ),
        steps: [
          L('أنا (ana)', '« أنا » (ana)', 'أنا'),
          L('أدرس (adrusu)', '« أدرس » (adrusu)', 'أدرس'),
          L('العربية (al-\'arabiyya)', '« العربية » (al-\'arabiyya)', 'العربية'),
          L('كل يوم (kulla yawm)', '« كل يوم » (kulla yawm)', 'كل يوم'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'intermediate', 'grammar', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The past tense uses suffixes instead of prefixes: "كتبتُ" (katabtu, I wrote), "كتبتَ" (katabta, you wrote), "كتب" (kataba, he wrote), "كتبنا" (katabna, we wrote). The bare form "كتب" (kataba) is also how verbs appear in dictionaries.',
          'Le passé utilise des suffixes au lieu de préfixes : « كتبتُ » (katabtu, j\'ai écrit), « كتبتَ » (katabta, tu as écrit), « كتب » (kataba, il a écrit), « كتبنا » (katabna, nous avons écrit). La forme nue « كتب » (kataba) est aussi celle des dictionnaires.',
          'الفعل الماضي يعتمد على اللواحق لا السوابق: "كتبتُ" للمتكلم، و"كتبتَ" للمخاطب، و"كتب" للغائب، و"كتبنا" للجمع. والصيغة المجردة "كتب" هي التي تظهر في المعاجم.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"كتبتُ" (katabtu) — I wrote.', '« كتبتُ » (katabtu) — j\'ai écrit.', '"كتبتُ" — ماضٍ للمتكلم، بضم التاء.'),
          L('"كتبتَ" (katabta) — you wrote.', '« كتبتَ » (katabta) — tu as écrit.', '"كتبتَ" — للمخاطب، بفتح التاء.'),
          L('"كتب" (kataba) — he wrote; "كتبَتْ" (katabat) — she wrote.', '« كتب » (kataba) — il a écrit ; « كتبَتْ » (katabat) — elle a écrit.', '"كتب" للغائب و"كتبَتْ" للغائبة.'),
          L('"ذهبتُ" (dhahabtu) — I went; "أكلنا" (akalna) — we ate.', '« ذهبتُ » (dhahabtu) — je suis allé ; « أكلنا » (akalna) — nous avons mangé.', '"ذهبتُ" و"أكلنا" — أمثلة أخرى في الماضي.'),
          L('"أمس" (ams) — yesterday, a word that often calls for the past tense.', '« أمس » (ams) — hier, un mot qui appelle souvent le passé.', '"أمس" — ظرف زمان يلازم الماضي غالباً.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which form means "we wrote"?',
          'Quelle forme signifie « nous avons écrit » ?',
          'أي صيغة تدل على جماعة المتكلمين في الماضي؟',
        ),
        choices: [
          { text: L('"كتبتُ" (katabtu)', '« كتبتُ » (katabtu)', '"كتبتُ"') },
          { text: L('"كتب" (kataba)', '« كتب » (kataba)', '"كتب"') },
          {
            text: L('"كتبنا" (katabna)', '« كتبنا » (katabna)', '"كتبنا"'),
            explanation: L(
              'The suffix "نا" (-na) marks "we" in the past tense.',
              'Le suffixe « نا » (-na) marque « nous » au passé.',
              'اللاحقة "نا" علامة جماعة المتكلمين في الماضي.',
            ),
          },
        ],
        correctIndex: 2,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "I went to the market yesterday."',
          'Remets les mots en ordre : « Je suis allé au marché hier. »',
          'رتّب الكلمات لتكوين الجملة: الحديث عن الذهاب إلى السوق أمس.',
        ),
        steps: [
          L('ذهبتُ (dhahabtu)', '« ذهبتُ » (dhahabtu)', 'ذهبتُ'),
          L('إلى (ila)', '« إلى » (ila)', 'إلى'),
          L('السوق (as-suq)', '« السوق » (as-suq)', 'السوق'),
          L('أمس (ams)', '« أمس » (ams)', 'أمس'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'intermediate', 'grammar', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Yes/no questions start with "هل" (hal); word order does not change. To negate the present, put "لا" (la) before the verb; for the past, use "ما" (ma): "ما ذهبتُ" (ma dhahabtu, I did not go).',
          'Les questions oui/non commencent par « هل » (hal) ; l\'ordre des mots ne change pas. Pour nier le présent, place « لا » (la) devant le verbe ; pour le passé, emploie « ما » (ma) : « ما ذهبتُ » (ma dhahabtu, je ne suis pas allé).',
          'أسئلة نعم/لا تبدأ بـ"هل" دون تغيير ترتيب الجملة. ولنفي المضارع نضع "لا" قبل الفعل، ولنفي الماضي نستعمل "ما": "ما ذهبتُ".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"هل تتكلم العربية؟" (hal tatakallamu al-\'arabiyya?) — do you speak Arabic?', '« هل تتكلم العربية؟ » (hal tatakallamu al-\'arabiyya ?) — parles-tu arabe ?', '"هل تتكلم العربية؟" — سؤال بنعم أو لا.'),
          L('"ماذا" (madha) — what; "لماذا" (limadha) — why.', '« ماذا » (madha) — quoi ; « لماذا » (limadha) — pourquoi.', '"ماذا" للسؤال عن الشيء و"لماذا" عن السبب.'),
          L('"متى" (mata) — when; "أين" (ayna) — where; "من" (man) — who.', '« متى » (mata) — quand ; « أين » (ayna) — où ; « من » (man) — qui.', '"متى" و"أين" و"من" — أدوات استفهام أساسية.'),
          L('"لا أفهم" (la afham) — I do not understand.', '« لا أفهم » (la afham) — je ne comprends pas.', '"لا أفهم" — نفي المضارع بـ"لا".'),
          L('"ما ذهبتُ" (ma dhahabtu) — I did not go.', '« ما ذهبتُ » (ma dhahabtu) — je ne suis pas allé.', '"ما ذهبتُ" — نفي الماضي بـ"ما".'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you negate the present-tense verb in "أفهم" (afham, I understand)?',
          'Comment nier le verbe au présent dans « أفهم » (afham, je comprends) ?',
          'كيف ننفي الفعل المضارع "أفهم"؟',
        ),
        choices: [
          {
            text: L('"لا أفهم" (la afham)', '« لا أفهم » (la afham)', '"لا أفهم"'),
            explanation: L(
              '"لا" (la) negates the present tense.',
              '« لا » (la) nie le présent.',
              '"لا" هي أداة نفي المضارع.',
            ),
          },
          { text: L('"ما أفهم" (ma afham)', '« ما أفهم » (ma afham)', '"ما أفهم"') },
          { text: L('"هل أفهم" (hal afham)', '« هل أفهم » (hal afham)', '"هل أفهم"') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "Do you speak Arabic?"',
          'Remets les mots en ordre : « Parles-tu arabe ? »',
          'رتّب الكلمات لتكوين السؤال عن التحدث بالعربية.',
        ),
        steps: [
          L('هل (hal)', '« هل » (hal)', 'هل'),
          L('تتكلم (tatakallamu)', '« تتكلم » (tatakallamu)', 'تتكلم'),
          L('العربية؟ (al-\'arabiyya?)', '« العربية؟ » (al-\'arabiyya ?)', 'العربية؟'),
        ],
      },
    ],
  },

  // Intermediate — Conversation
  [lessonKey('arabic', 'intermediate', 'conversation', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Introducing yourself goes beyond your name: origin, home, work and age. Note that Arabic has no verb "to be" in the present — "أنا من تونس" (ana min Tunis) is literally "I from Tunisia".',
          'Se présenter va au-delà du nom : origine, domicile, travail et âge. Note que l\'arabe n\'a pas de verbe « être » au présent — « أنا من تونس » (ana min Tunis) signifie littéralement « moi de Tunisie ».',
          'التعريف بالنفس يتجاوز الاسم إلى الأصل والسكن والعمل والعمر. ولاحظ أن الجملة الاسمية لا تحتاج فعلاً في الحاضر: "أنا من تونس" جملة كاملة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"أنا من تونس" (ana min Tunis) — I am from Tunisia.', '« أنا من تونس » (ana min Tunis) — je suis de Tunisie.', '"أنا من تونس" — للتعريف بالأصل.'),
          L('"أسكن في المدينة" (askunu fi al-madina) — I live in the city.', '« أسكن في المدينة » (askunu fi al-madina) — j\'habite en ville.', '"أسكن في المدينة" — للحديث عن السكن.'),
          L('"أعمل مهندساً" (a\'malu muhandisan) — I work as an engineer.', '« أعمل مهندساً » (a\'malu muhandisan) — je travaille comme ingénieur.', '"أعمل مهندساً" — للحديث عن المهنة.'),
          L('"عمري ثلاثون سنة" (\'umri thalathun sana) — I am thirty years old.', '« عمري ثلاثون سنة » (\'umri thalathun sana) — j\'ai trente ans.', '"عمري ثلاثون سنة" — للإخبار عن العمر.'),
          L('"أتعلم العربية" (ata\'allamu al-\'arabiyya) — I am learning Arabic.', '« أتعلم العربية » (ata\'allamu al-\'arabiyya) — j\'apprends l\'arabe.', '"أتعلم العربية" — للحديث عن الدراسة.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "I live in Tunis and I am learning Arabic"?',
          'Comment dit-on « j\'habite à Tunis et j\'apprends l\'arabe » ?',
          'كيف تخبر أنك تسكن في تونس وتتعلم العربية؟',
        ),
        answer: L(
          '"أسكن في تونس وأتعلم العربية" (askunu fi Tunis wa-ata\'allamu al-\'arabiyya).',
          '« أسكن في تونس وأتعلم العربية » (askunu fi Tunis wa-ata\'allamu al-\'arabiyya).',
          'تقول: "أسكن في تونس وأتعلم العربية".',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Someone says "عمري خمسة وعشرون سنة" (\'umri khamsa wa-\'ishrun sana). How old are they?',
          'Quelqu\'un dit « عمري خمسة وعشرون سنة » (\'umri khamsa wa-\'ishrun sana). Quel âge a-t-il ?',
          'قال شخص: "عمري خمسة وعشرون سنة". كم عمره؟',
        ),
        answer: 25,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "I am from Tunisia and I work as an engineer."',
          'Remets les mots en ordre : « Je suis de Tunisie et je travaille comme ingénieur. »',
          'رتّب الكلمات لتكوين جملة التعريف بالأصل والمهنة.',
        ),
        steps: [
          L('أنا (ana)', '« أنا » (ana)', 'أنا'),
          L('من تونس (min Tunis)', '« من تونس » (min Tunis)', 'من تونس'),
          L('وأعمل (wa-a\'malu)', '« وأعمل » (wa-a\'malu)', 'وأعمل'),
          L('مهندساً (muhandisan)', '« مهندساً » (muhandisan)', 'مهندساً'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'intermediate', 'conversation', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Making plans means agreeing on a time and a place. "نلتقي" (naltaqi, we meet) — notice it is a "we" form with the prefix "ن" (na-). Days and times slot in naturally after it.',
          'Faire des projets, c\'est convenir d\'une heure et d\'un lieu. « نلتقي » (naltaqi, nous nous retrouvons) — remarque le préfixe « ن » (na-) de la première personne du pluriel. Les jours et les heures s\'y ajoutent naturellement.',
          'ترتيب المواعيد يعني الاتفاق على وقت ومكان. "نلتقي" فعل مضارع بنون الجماعة، وتُضاف بعده الأيام والساعات بسهولة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"غداً" (ghadan) — tomorrow; "اليوم" (al-yawm) — today.', '« غداً » (ghadan) — demain ; « اليوم » (al-yawm) — aujourd\'hui.', '"غداً" و"اليوم" — ظرفا زمان أساسيان.'),
          L('"نلتقي غداً" (naltaqi ghadan) — we meet tomorrow.', '« نلتقي غداً » (naltaqi ghadan) — on se retrouve demain.', '"نلتقي غداً" — لتحديد الموعد.'),
          L('"عندي موعد" (\'indi maw\'id) — I have an appointment.', '« عندي موعد » (\'indi maw\'id) — j\'ai un rendez-vous.', '"عندي موعد" — للاعتذار أو الإخبار عن ارتباط.'),
          L('"هيا بنا!" (hayya bina!) — let\'s go!', '« هيا بنا! » (hayya bina !) — allons-y !', '"هيا بنا!" — للدعوة إلى الانطلاق.'),
          L('"في المقهى الساعة الخامسة" (fi al-maqha as-sa\'a al-khamisa) — at the café at five o\'clock.', '« في المقهى الساعة الخامسة » (fi al-maqha as-sa\'a al-khamisa) — au café à cinq heures.', '"في المقهى الساعة الخامسة" — تحديد المكان والوقت.'),
          L('"هل أنت متفرغ؟" (hal anta mutafarrigh?) — are you free?', '« هل أنت متفرغ؟ » (hal anta mutafarrigh ?) — es-tu libre ?', '"هل أنت متفرغ؟" — للسؤال عن الوقت المتاح.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A friend asks "هل أنت متفرغ غداً؟" (hal anta mutafarrigh ghadan?). What do they want to know?',
          'Un ami demande « هل أنت متفرغ غداً؟ » (hal anta mutafarrigh ghadan ?). Que veut-il savoir ?',
          'سألك صديق: "هل أنت متفرغ غداً؟". عمّ يسأل؟',
        ),
        choices: [
          {
            text: L('Whether you are free tomorrow', 'Si tu es libre demain', 'عن وقتك المتاح غداً'),
            explanation: L(
              '"متفرغ" (mutafarrigh) means available, and "غداً" (ghadan) means tomorrow.',
              '« متفرغ » (mutafarrigh) signifie disponible, et « غداً » (ghadan) signifie demain.',
              '"متفرغ" تعني أن لديك وقتاً، و"غداً" هي اليوم التالي.',
            ),
          },
          { text: L('Whether you were busy yesterday', 'Si tu étais occupé hier', 'عن انشغالك أمس') },
          { text: L('Where you live', 'Où tu habites', 'عن مكان سكنك') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "We meet tomorrow at the café at five o\'clock."',
          'Remets les mots en ordre : « On se retrouve demain au café à cinq heures. »',
          'رتّب الكلمات لتكوين جملة الموعد كاملة.',
        ),
        steps: [
          L('نلتقي (naltaqi)', '« نلتقي » (naltaqi)', 'نلتقي'),
          L('غداً (ghadan)', '« غداً » (ghadan)', 'غداً'),
          L('في المقهى (fi al-maqha)', '« في المقهى » (fi al-maqha)', 'في المقهى'),
          L('الساعة الخامسة (as-sa\'a al-khamisa)', '« الساعة الخامسة » (as-sa\'a al-khamisa)', 'الساعة الخامسة'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'intermediate', 'conversation', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To share an opinion, open with "في رأيي" (fi ra\'yi, in my opinion) or "أعتقد أن" (a\'taqidu anna, I think that). Adjectives of feeling agree in gender: a man says "سعيد" (sa\'id, happy), a woman "سعيدة" (sa\'ida).',
          'Pour donner un avis, commence par « في رأيي » (fi ra\'yi, à mon avis) ou « أعتقد أن » (a\'taqidu anna, je pense que). Les adjectifs de sentiment s\'accordent en genre : un homme dit « سعيد » (sa\'id, heureux), une femme « سعيدة » (sa\'ida).',
          'لإبداء الرأي نبدأ بـ"في رأيي" أو "أعتقد أن". وصفات المشاعر تتبع الجنس: الرجل يقول "سعيد" والمرأة تقول "سعيدة".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"في رأيي" (fi ra\'yi) — in my opinion.', '« في رأيي » (fi ra\'yi) — à mon avis.', '"في رأيي" — لتقديم وجهة النظر.'),
          L('"أعتقد أن..." (a\'taqidu anna) — I think that…', '« أعتقد أن... » (a\'taqidu anna) — je pense que…', '"أعتقد أن..." — للتعبير عن الاعتقاد.'),
          L('"أحب" (uhibbu) — I like/love; "لا أحب" (la uhibbu) — I do not like.', '« أحب » (uhibbu) — j\'aime ; « لا أحب » (la uhibbu) — je n\'aime pas.', '"أحب" ونفيها "لا أحب".'),
          L('"سعيد" (sa\'id) — happy; "حزين" (hazin) — sad.', '« سعيد » (sa\'id) — heureux ; « حزين » (hazin) — triste.', '"سعيد" و"حزين" — شعوران متضادان.'),
          L('"رائع!" (ra\'i\'!) — wonderful!', '« رائع! » (ra\'i\' !) — magnifique !', '"رائع!" — للإعجاب الشديد.'),
          L('"أوافق" (uwafiq) — I agree; "لا أوافق" (la uwafiq) — I disagree.', '« أوافق » (uwafiq) — je suis d\'accord ; « لا أوافق » (la uwafiq) — je ne suis pas d\'accord.', '"أوافق" و"لا أوافق" — للموافقة والاعتراض.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A woman wants to say she is happy. Which form is correct?',
          'Une femme veut dire qu\'elle est heureuse. Quelle forme est correcte ?',
          'تريد امرأة أن تعبّر عن سعادتها. أي صيغة صحيحة؟',
        ),
        choices: [
          { text: L('"أنا سعيد" (ana sa\'id)', '« أنا سعيد » (ana sa\'id)', '"أنا سعيد"') },
          {
            text: L('"أنا سعيدة" (ana sa\'ida)', '« أنا سعيدة » (ana sa\'ida)', '"أنا سعيدة"'),
            explanation: L(
              'The feminine adjective takes "ة" (ta marbuta).',
              'L\'adjectif féminin prend « ة » (ta marbouta).',
              'الصفة تلحقها التاء المربوطة مع المؤنث.',
            ),
          },
          { text: L('"أنا سعداء" (ana su\'ada\')', '« أنا سعداء » (ana su\'ada\')', '"أنا سعداء"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "In my opinion, the film is wonderful."',
          'Remets les mots en ordre : « À mon avis, le film est magnifique. »',
          'رتّب الكلمات لتكوين جملة إبداء الرأي في الفيلم.',
        ),
        steps: [
          L('في رأيي (fi ra\'yi)', '« في رأيي » (fi ra\'yi)', 'في رأيي'),
          L('الفيلم (al-film)', '« الفيلم » (al-film)', 'الفيلم'),
          L('رائع (ra\'i\')', '« رائع » (ra\'i\')', 'رائع'),
        ],
      },
    ],
  },

  // Advanced — Fluency
  [lessonKey('arabic', 'advanced', 'fluency', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Arabic storytelling has its own music. Tales open with "كان يا ما كان" (kan ya ma kan, once upon a time), and connectors like "ثم" (thumma, then) and "فجأة" (faj\'atan, suddenly) keep the listener hooked. The past tense carries the narrative.',
          'Le récit arabe a sa propre musique. Les contes s\'ouvrent par « كان يا ما كان » (kan ya ma kan, il était une fois), et des connecteurs comme « ثم » (thumma, puis) et « فجأة » (faj\'atan, soudain) tiennent l\'auditeur en haleine. Le passé porte la narration.',
          'للحكاية العربية إيقاعها الخاص. تُفتتح الحكايات بعبارة "كان يا ما كان"، وتشدّ روابط مثل "ثم" و"فجأة" انتباه السامع. والفعل الماضي هو عماد السرد.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"كان يا ما كان" (kan ya ma kan) — once upon a time.', '« كان يا ما كان » (kan ya ma kan) — il était une fois.', '"كان يا ما كان" — فاتحة الحكايات.'),
          L('"في يوم من الأيام" (fi yawmin min al-ayyam) — one day.', '« في يوم من الأيام » (fi yawmin min al-ayyam) — un jour.', '"في يوم من الأيام" — لبدء حدث في الحكاية.'),
          L('"ثم" (thumma) — then; "بعد ذلك" (ba\'da dhalik) — after that.', '« ثم » (thumma) — puis ; « بعد ذلك » (ba\'da dhalik) — ensuite.', '"ثم" و"بعد ذلك" — روابط تسلسل الأحداث.'),
          L('"فجأة" (faj\'atan) — suddenly.', '« فجأة » (faj\'atan) — soudain.', '"فجأة" — لإدخال حدث مفاجئ.'),
          L('"في النهاية" (fi an-nihaya) — in the end.', '« في النهاية » (fi an-nihaya) — à la fin.', '"في النهاية" — لختم الحكاية.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Put the story connectors in narrative order.',
          'Mets les connecteurs du récit dans l\'ordre narratif.',
          'رتّب روابط الحكاية من البداية إلى النهاية.',
        ),
        steps: [
          L('كان يا ما كان (kan ya ma kan) — once upon a time', '« كان يا ما كان » (kan ya ma kan) — il était une fois', 'كان يا ما كان — الافتتاح'),
          L('في يوم من الأيام (fi yawmin min al-ayyam) — one day', '« في يوم من الأيام » (fi yawmin min al-ayyam) — un jour', 'في يوم من الأيام — بداية الحدث'),
          L('فجأة (faj\'atan) — suddenly', '« فجأة » (faj\'atan) — soudain', 'فجأة — المفاجأة'),
          L('في النهاية (fi an-nihaya) — in the end', '« في النهاية » (fi an-nihaya) — à la fin', 'في النهاية — الخاتمة'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which tense carries most of an Arabic narrative?',
          'Quel temps porte l\'essentiel d\'un récit en arabe ?',
          'أي زمن يعتمد عليه السرد في الحكاية العربية؟',
        ),
        choices: [
          {
            text: L('The past tense, like "ذهب" (dhahaba)', 'Le passé, comme « ذهب » (dhahaba)', 'الماضي، مثل "ذهب"'),
            explanation: L(
              'Events that already happened are told in the past.',
              'Les événements déjà survenus se racontent au passé.',
              'الأحداث التي وقعت تُروى بصيغة الماضي.',
            ),
          },
          { text: L('The present tense, like "يذهب" (yadhhabu)', 'Le présent, comme « يذهب » (yadhhabu)', 'المضارع، مثل "يذهب"') },
          { text: L('The imperative, like "اذهب" (idhhab)', 'L\'impératif, comme « اذهب » (idhhab)', 'الأمر، مثل "اذهب"') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('arabic', 'advanced', 'fluency', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Arabic lives on two levels: "الفصحى" (al-fusha), the formal standard of news and books, and "العامية" (al-\'ammiyya), the everyday dialect. In Tunisia the dialect is "الدارجة" (ad-darija): standard "كيف حالك؟" (kayfa haluk?) becomes "شنوة أحوالك؟" (shnuwa ahwalek?).',
          'L\'arabe vit sur deux registres : « الفصحى » (al-fusha), la langue formelle des médias et des livres, et « العامية » (al-\'ammiyya), le dialecte du quotidien. En Tunisie, le dialecte est « الدارجة » (ad-darija) : le standard « كيف حالك؟ » (kayfa haluk ?) devient « شنوة أحوالك؟ » (shnuwa ahwalek ?).',
          'للعربية مستويان: "الفصحى" لغة الأخبار والكتب، و"العامية" لغة الحياة اليومية. وفي تونس تسمى العامية "الدارجة": فعبارة "كيف حالك؟" بالفصحى تقابلها "شنوة أحوالك؟" بالدارجة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"الفصحى" (al-fusha) — Modern Standard Arabic, used in news, books and formal speech.', '« الفصحى » (al-fusha) — l\'arabe standard moderne, employé dans les médias, les livres et les discours formels.', '"الفصحى" — لغة الإعلام والكتب والخطاب الرسمي.'),
          L('"العامية" (al-\'ammiyya) — the colloquial dialect of daily life.', '« العامية » (al-\'ammiyya) — le dialecte de la vie quotidienne.', '"العامية" — لغة الحياة اليومية.'),
          L('"حضرتك" (hadratuk) — a polite, formal "you".', '« حضرتك » (hadratuk) — un « vous » poli et formel.', '"حضرتك" — مخاطبة مهذبة رسمية.'),
          L('"تفضل" (tafaddal) — please, go ahead (polite invitation).', '« تفضل » (tafaddal) — je vous en prie, allez-y (invitation polie).', '"تفضل" — عبارة تكريم ودعوة مهذبة.'),
          L('Standard "ماذا تريد؟" (madha turid?, what do you want?) vs Tunisian "شنوة تحب؟" (shnuwa thebb?).', 'Standard « ماذا تريد؟ » (madha turid ?, que veux-tu ?) contre le tunisien « شنوة تحب؟ » (shnuwa thebb ?).', 'بالفصحى نقول "ماذا تريد؟" وبالدارجة التونسية "شنوة تحب؟".'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'You are writing a formal job application. Which register do you use?',
          'Tu rédiges une candidature formelle. Quel registre emploies-tu ?',
          'تكتب طلب عمل رسمياً. أي مستوى لغوي تستعمل؟',
        ),
        choices: [
          {
            text: L('"الفصحى" (al-fusha)', '« الفصحى » (al-fusha)', '"الفصحى"'),
            explanation: L(
              'Formal writing always uses Modern Standard Arabic.',
              'L\'écrit formel emploie toujours l\'arabe standard moderne.',
              'الكتابة الرسمية تكون دائماً بالفصحى.',
            ),
          },
          { text: L('"الدارجة" (ad-darija)', '« الدارجة » (ad-darija)', '"الدارجة"') },
        ],
        correctIndex: 0,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What is the Tunisian dialect equivalent of "كيف حالك؟" (kayfa haluk?)?',
          'Quel est l\'équivalent en dialecte tunisien de « كيف حالك؟ » (kayfa haluk ?) ?',
          'ما مقابل "كيف حالك؟" في الدارجة التونسية؟',
        ),
        choices: [
          { text: L('"شنوة أحوالك؟" (shnuwa ahwalek?)', '« شنوة أحوالك؟ » (shnuwa ahwalek ?)', '"شنوة أحوالك؟"') },
          { text: L('"صباح الخير" (sabah al-khayr)', '« صباح الخير » (sabah al-khayr)', '"صباح الخير"') },
          { text: L('"مع السلامة" (ma\'a as-salama)', '« مع السلامة » (ma\'a as-salama)', '"مع السلامة"') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('arabic', 'advanced', 'fluency', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Idioms make your Arabic sound alive. They rarely translate word for word, so learn the image behind each one — many draw on the hand, the eye and the heart.',
          'Les expressions idiomatiques rendent ton arabe vivant. Elles se traduisent rarement mot à mot ; apprends l\'image derrière chacune — beaucoup s\'appuient sur la main, l\'œil et le cœur.',
          'الأمثال والتعابير تجعل لغتك حية. وهي لا تُفهم كلمة كلمة، بل من الصورة التي ترسمها — وكثير منها يدور حول اليد والعين والقلب.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"الوقت من ذهب" (al-waqt min dhahab) — time is gold: do not waste it.', '« الوقت من ذهب » (al-waqt min dhahab) — le temps c\'est de l\'or : ne le gaspille pas.', '"الوقت من ذهب" — دعوة إلى اغتنام الوقت.'),
          L('"يد واحدة لا تصفق" (yad wahida la tusaffiq) — one hand cannot clap: we need each other.', '« يد واحدة لا تصفق » (yad wahida la tusaffiq) — une seule main n\'applaudit pas : on a besoin les uns des autres.', '"يد واحدة لا تصفق" — في أهمية التعاون.'),
          L('"على راسي" (\'ala rasi) — literally "on my head": with pleasure, gladly.', '« على راسي » (\'ala rasi) — littéralement « sur ma tête » : avec plaisir, volontiers.', '"على راسي" — للترحيب الحار بطلب أحدهم.'),
          L('"القرد في عين أمه غزال" (al-qird fi \'ayn ummihi ghazal) — the monkey is a gazelle in its mother\'s eye: love makes everything beautiful.', '« القرد في عين أمه غزال » (al-qird fi \'ayn ummihi ghazal) — le singe est une gazelle aux yeux de sa mère : l\'amour embellit tout.', '"القرد في عين أمه غزال" — المحبة تجمّل كل شيء.'),
          L('"رجع بخفي حنين" (raja\'a bi-khuffay Hunayn) — he came back with Hunayn\'s slippers: he returned empty-handed.', '« رجع بخفي حنين » (raja\'a bi-khuffay Hunayn) — il est revenu avec les babouches de Hunayn : il est rentré bredouille.', '"رجع بخفي حنين" — عاد خائباً دون ما أراد.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "يد واحدة لا تصفق" (yad wahida la tusaffiq) express?',
          'Qu\'exprime « يد واحدة لا تصفق » (yad wahida la tusaffiq) ?',
          'ما المعنى الذي يحمله مثل "يد واحدة لا تصفق"؟',
        ),
        choices: [
          { text: L('Silence is golden', 'Le silence est d\'or', 'قيمة الصمت') },
          {
            text: L('Cooperation is essential', 'La coopération est essentielle', 'أهمية التعاون'),
            explanation: L(
              'Clapping needs two hands — success needs teamwork.',
              'Applaudir demande deux mains — réussir demande l\'entraide.',
              'كما يحتاج التصفيق إلى يدين، يحتاج النجاح إلى تعاون.',
            ),
          },
          { text: L('Hard work pays off', 'Le travail finit par payer', 'ثمرة الاجتهاد') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words of the idiom "time is gold".',
          'Remets en ordre les mots de l\'expression « le temps c\'est de l\'or ».',
          'رتّب كلمات المثل الذي يحث على اغتنام الوقت.',
        ),
        steps: [
          L('الوقت (al-waqt)', '« الوقت » (al-waqt)', 'الوقت'),
          L('من (min)', '« من » (min)', 'من'),
          L('ذهب (dhahab)', '« ذهب » (dhahab)', 'ذهب'),
        ],
      },
    ],
  },

  // Advanced — Culture
  [lessonKey('arabic', 'advanced', 'culture', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'News Arabic is pure "فصحى" (fusha) — the same standard from Rabat to Baghdad, which is why news is great listening practice. Headlines favor short nominal sentences and a compact vocabulary you will meet again and again.',
          'L\'arabe des médias est de la pure « فصحى » (fusha) — le même standard de Rabat à Bagdad, ce qui fait des journaux télévisés un excellent exercice d\'écoute. Les titres privilégient des phrases nominales courtes et un vocabulaire compact qu\'on retrouve sans cesse.',
          'لغة الأخبار فصحى خالصة — وهي نفسها من الرباط إلى بغداد، لذلك تُعد نشرات الأخبار تدريباً ممتازاً على الاستماع. وتعتمد العناوين جملاً اسمية قصيرة ومفردات متكررة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"الأخبار" (al-akhbar) — the news; "نشرة الأخبار" (nashrat al-akhbar) — the news bulletin.', '« الأخبار » (al-akhbar) — les informations ; « نشرة الأخبار » (nashrat al-akhbar) — le journal télévisé.', '"الأخبار" و"نشرة الأخبار" — قلب الإعلام.'),
          L('"عاجل" (\'ajil) — breaking (news).', '« عاجل » (\'ajil) — flash (info de dernière minute).', '"عاجل" — للخبر الطارئ.'),
          L('"صحيفة" (sahifa) — newspaper; "مجلة" (majalla) — magazine.', '« صحيفة » (sahifa) — journal ; « مجلة » (majalla) — magazine.', '"صحيفة" و"مجلة" — من وسائل الإعلام المكتوبة.'),
          L('"مراسل" (murasil) — correspondent, reporter.', '« مراسل » (murasil) — correspondant, reporter.', '"مراسل" — ناقل الخبر من الميدان.'),
          L('"الرأي العام" (ar-ra\'y al-\'amm) — public opinion.', '« الرأي العام » (ar-ra\'y al-\'amm) — l\'opinion publique.', '"الرأي العام" — موقف الناس من القضايا.'),
          L('"وسائل التواصل الاجتماعي" (wasa\'il at-tawasul al-ijtima\'i) — social media.', '« وسائل التواصل الاجتماعي » (wasa\'il at-tawasul al-ijtima\'i) — les réseaux sociaux.', '"وسائل التواصل الاجتماعي" — منصات النقاش اليومي.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'You see "عاجل" (\'ajil) in red on a news channel. What does it signal?',
          'Tu vois « عاجل » (\'ajil) en rouge sur une chaîne d\'information. Que signale-t-il ?',
          'ظهرت كلمة "عاجل" بالأحمر على قناة إخبارية. علامَ تدل؟',
        ),
        choices: [
          {
            text: L('Breaking news', 'Une information de dernière minute', 'خبر طارئ يُبث فوراً'),
            explanation: L(
              '"عاجل" literally means urgent.',
              '« عاجل » signifie littéralement urgent.',
              'أصل الكلمة من العجلة أي السرعة.',
            ),
          },
          { text: L('The weather forecast', 'La météo', 'نشرة الطقس') },
          { text: L('A commercial break', 'Une page de publicité', 'فاصل إعلاني') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words of the headline: "The correspondent reported the news from Tunis."',
          'Remets en ordre les mots du titre : « Le correspondant a rapporté la nouvelle depuis Tunis. »',
          'رتّب كلمات الخبر: نقل المراسل الخبر من تونس.',
        ),
        steps: [
          L('نقل (naqala)', '« نقل » (naqala)', 'نقل'),
          L('المراسل (al-murasil)', '« المراسل » (al-murasil)', 'المراسل'),
          L('الخبر (al-khabar)', '« الخبر » (al-khabar)', 'الخبر'),
          L('من تونس (min Tunis)', '« من تونس » (min Tunis)', 'من تونس'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'advanced', 'culture', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Work and study vocabulary opens doors: applying for jobs, attending university, writing a CV. Notice the dual form, unique to Arabic: "اجتماعان" (ijtima\'an) means exactly two meetings — no need for the number two.',
          'Le vocabulaire du travail et des études ouvre des portes : candidatures, université, rédaction de CV. Remarque le duel, propre à l\'arabe : « اجتماعان » (ijtima\'an) signifie exactement deux réunions — sans avoir besoin du chiffre deux.',
          'مفردات العمل والدراسة تفتح الأبواب: طلبات الشغل والجامعة وكتابة السيرة. ولاحظ صيغة المثنى الخاصة بالعربية: "اجتماعان" تعني اجتماعين اثنين دون ذكر العدد.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"عمل" (\'amal) — work; "وظيفة" (wazifa) — job, position.', '« عمل » (\'amal) — travail ; « وظيفة » (wazifa) — emploi, poste.', '"عمل" و"وظيفة" — أساس الحياة المهنية.'),
          L('"اجتماع" (ijtima\') — meeting; "اجتماعان" (ijtima\'an) — two meetings (dual form).', '« اجتماع » (ijtima\') — réunion ; « اجتماعان » (ijtima\'an) — deux réunions (duel).', '"اجتماع" ومثناه "اجتماعان".'),
          L('"سيرة ذاتية" (sira dhatiyya) — CV, résumé.', '« سيرة ذاتية » (sira dhatiyya) — CV.', '"سيرة ذاتية" — ملخص المسار المهني.'),
          L('"مقابلة عمل" (muqabalat \'amal) — job interview.', '« مقابلة عمل » (muqabalat \'amal) — entretien d\'embauche.', '"مقابلة عمل" — لقاء التوظيف.'),
          L('"جامعة" (jami\'a) — university; "شهادة" (shahada) — degree, diploma.', '« جامعة » (jami\'a) — université ; « شهادة » (shahada) — diplôme.', '"جامعة" و"شهادة" — عالم الدراسة.'),
          L('"زميل" (zamil) — colleague.', '« زميل » (zamil) — collègue.', '"زميل" — رفيق العمل أو الدراسة.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does the dual form "شهادتان" (shahadatan) mean?',
          'Que signifie la forme duelle « شهادتان » (shahadatan) ?',
          'ماذا تعني صيغة المثنى "شهادتان"؟',
        ),
        choices: [
          { text: L('One degree', 'Un diplôme', 'شهادة واحدة') },
          {
            text: L('Exactly two degrees', 'Exactement deux diplômes', 'شهادتان اثنتان بالضبط'),
            explanation: L(
              'The ending "ان" (-an) marks the dual: exactly two.',
              'La terminaison « ان » (-an) marque le duel : exactement deux.',
              'اللاحقة "ان" علامة المثنى في العربية.',
            ),
          },
          { text: L('Many degrees', 'Plusieurs diplômes', 'شهادات كثيرة') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "I have a job interview tomorrow."',
          'Remets les mots en ordre : « J\'ai un entretien d\'embauche demain. »',
          'رتّب الكلمات لتكوين الجملة: عندي مقابلة عمل غداً.',
        ),
        steps: [
          L('عندي (\'indi)', '« عندي » (\'indi)', 'عندي'),
          L('مقابلة (muqabala)', '« مقابلة » (muqabala)', 'مقابلة'),
          L('عمل (\'amal)', '« عمل » (\'amal)', 'عمل'),
          L('غداً (ghadan)', '« غداً » (ghadan)', 'غداً'),
        ],
      },
    ],
  },
  [lessonKey('arabic', 'advanced', 'culture', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Travel vocabulary is where everything comes together: greetings, numbers, questions and politeness. From the airport to the hotel, standard Arabic will be understood everywhere, and in Tunisia a French or dialect word often slips into the mix.',
          'Le vocabulaire du voyage rassemble tout : salutations, nombres, questions et politesse. De l\'aéroport à l\'hôtel, l\'arabe standard est compris partout, et en Tunisie un mot de français ou de dialecte se glisse souvent dans la conversation.',
          'مفردات السفر تجمع كل ما تعلمته: التحيات والأعداد والأسئلة وعبارات التأدب. من المطار إلى الفندق ستُفهم الفصحى في كل مكان، وفي تونس كثيراً ما تختلط كلمة فرنسية أو دارجة بالحديث.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"مطار" (matar) — airport; "جواز سفر" (jawaz safar) — passport.', '« مطار » (matar) — aéroport ; « جواز سفر » (jawaz safar) — passeport.', '"مطار" و"جواز سفر" — بداية كل رحلة.'),
          L('"تذكرة" (tadhkira) — ticket.', '« تذكرة » (tadhkira) — billet.', '"تذكرة" — وثيقة الركوب.'),
          L('"حجز" (hajz) — reservation, booking.', '« حجز » (hajz) — réservation.', '"حجز" — تأمين المكان مسبقاً.'),
          L('"فندق" (funduq) — hotel; "غرفة" (ghurfa) — room.', '« فندق » (funduq) — hôtel ; « غرفة » (ghurfa) — chambre.', '"فندق" و"غرفة" — مكان الإقامة.'),
          L('"قطار" (qitar) — train; "حافلة" (hafila) — bus.', '« قطار » (qitar) — train ; « حافلة » (hafila) — bus.', '"قطار" و"حافلة" — وسيلتا تنقل.'),
          L('"رحلة سعيدة!" (rihla sa\'ida!) — have a good trip!', '« رحلة سعيدة! » (rihla sa\'ida !) — bon voyage !', '"رحلة سعيدة!" — دعاء للمسافر.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you book a room for two nights?',
          'Comment réserver une chambre pour deux nuits ?',
          'كيف تحجز غرفة لليلتين؟',
        ),
        answer: L(
          '"أريد حجز غرفة لليلتين من فضلك" (urid hajz ghurfa li-laylatayn min fadlik) — note the dual "ليلتين" (laylatayn, two nights).',
          '« أريد حجز غرفة لليلتين من فضلك » (urid hajz ghurfa li-laylatayn min fadlik) — remarque le duel « ليلتين » (laylatayn, deux nuits).',
          'تقول: "أريد حجز غرفة لليلتين من فضلك" — ولاحظ المثنى في "ليلتين".',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'At passport control, the officer asks for your "جواز سفر" (jawaz safar). What do you hand over?',
          'Au contrôle, l\'agent demande ton « جواز سفر » (jawaz safar). Que lui donnes-tu ?',
          'طلب منك الموظف "جواز السفر". ماذا تعطيه؟',
        ),
        choices: [
          { text: L('Your ticket', 'Ton billet', 'التذكرة') },
          { text: L('Your passport', 'Ton passeport', 'وثيقة السفر الرسمية') },
          { text: L('Your hotel booking', 'Ta réservation d\'hôtel', 'حجز الفندق') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words: "I want to book a room for two nights, please."',
          'Remets les mots en ordre : « Je veux réserver une chambre pour deux nuits, s\'il vous plaît. »',
          'رتّب الكلمات لتكوين جملة حجز الغرفة.',
        ),
        steps: [
          L('أريد (urid)', '« أريد » (urid)', 'أريد'),
          L('حجز (hajz)', '« حجز » (hajz)', 'حجز'),
          L('غرفة (ghurfa)', '« غرفة » (ghurfa)', 'غرفة'),
          L('لليلتين (li-laylatayn)', '« لليلتين » (li-laylatayn)', 'لليلتين'),
          L('من فضلك (min fadlik)', '« من فضلك » (min fadlik)', 'من فضلك'),
        ],
      },
    ],
  },
}
