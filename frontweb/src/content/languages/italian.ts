import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// Italian language track: basics → phrases → grammar → conversation → fluency → culture.
export const italianLessons: Record<string, LessonContent> = {
  // Beginner — Basics
  [lessonKey('italian', 'beginner', 'basics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Italian greetings change with the time of day and how well you know the person. Start with these essentials — Italians use them constantly.',
          'Les salutations italiennes changent selon le moment de la journée et la relation avec la personne. Commence par ces essentiels — les Italiens les utilisent constamment.',
          'تتغير التحيات الإيطالية حسب وقت اليوم ومدى معرفتك بالشخص. ابدأ بهذه الأساسيات — فالإيطاليون يستخدمونها باستمرار.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Ciao" — hi / bye (informal)', '« Ciao » — salut (informel)', '"Ciao" — مرحباً / وداعاً (غير رسمية)'),
          L('"Buongiorno" — good morning / good day', '« Buongiorno » — bonjour', '"Buongiorno" — صباح الخير'),
          L('"Buonasera" — good evening', '« Buonasera » — bonsoir', '"Buonasera" — مساء الخير'),
          L('"Mi chiamo Marco" — my name is Marco', '« Mi chiamo Marco » — je m\'appelle Marco', '"Mi chiamo Marco" — اسمي ماركو'),
          L('"Piacere!" — nice to meet you!', '« Piacere ! » — enchanté !', '"Piacere!" — تشرفت بمعرفتك!'),
          L('"Come stai?" — how are you?', '« Come stai ? » — comment vas-tu ?', '"Come stai?" — كيف حالك؟'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "nice to meet you" in Italian?',
          'Comment dit-on « enchanté » en italien ?',
          'كيف تقول "تشرفت بمعرفتك" بالإيطالية؟',
        ),
        answer: L('"Piacere!"', '« Piacere ! »', '"Piacere!"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which greeting fits the evening?',
          'Quelle salutation convient au soir ?',
          'أي تحية تناسب المساء؟',
        ),
        choices: [
          { text: L('"Buongiorno"', '« Buongiorno »', '"Buongiorno"') },
          {
            text: L('"Buonasera"', '« Buonasera »', '"Buonasera"'),
            explanation: L(
              '"Sera" means evening, so "Buonasera" is used from late afternoon onward.',
              '« Sera » signifie soir, donc « Buonasera » s\'utilise à partir de la fin d\'après-midi.',
              '"Sera" تعني المساء، لذا تُستخدم "Buonasera" من أواخر بعد الظهر فصاعداً.',
            ),
          },
          { text: L('"Piacere"', '« Piacere »', '"Piacere"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words to say "My name is Anna": Mi chiamo Anna.',
          'Remets les mots dans l\'ordre pour dire « Je m\'appelle Anna » : Mi chiamo Anna.',
          'رتّب الكلمات لتقول "اسمي آنا": Mi chiamo Anna.',
        ),
        steps: [
          L('Mi', 'Mi', 'Mi'),
          L('chiamo', 'chiamo', 'chiamo'),
          L('Anna', 'Anna', 'Anna'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'beginner', 'basics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Numbers unlock prices, phone numbers and telling the time. Italian numbers are regular once you know the first twenty.',
          'Les nombres servent pour les prix, les numéros de téléphone et l\'heure. Les nombres italiens sont réguliers une fois les vingt premiers connus.',
          'الأرقام تفتح لك باب الأسعار وأرقام الهواتف ومعرفة الوقت. الأرقام الإيطالية منتظمة بمجرد أن تحفظ العشرين الأولى.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"uno, due, tre" — one, two, three', '« uno, due, tre » — un, deux, trois', '"uno, due, tre" — واحد، اثنان، ثلاثة'),
          L('"dieci" — ten; "venti" — twenty', '« dieci » — dix ; « venti » — vingt', '"dieci" — عشرة؛ "venti" — عشرون'),
          L('"trenta, quaranta, cinquanta" — thirty, forty, fifty', '« trenta, quaranta, cinquanta » — trente, quarante, cinquante', '"trenta, quaranta, cinquanta" — ثلاثون، أربعون، خمسون'),
          L('"cento" — one hundred', '« cento » — cent', '"cento" — مئة'),
          L('"Che ore sono?" — what time is it?', '« Che ore sono ? » — quelle heure est-il ?', '"Che ore sono?" — كم الساعة؟'),
          L('"Sono le tre" — it is three o\'clock', '« Sono le tre » — il est trois heures', '"Sono le tre" — الساعة الثالثة'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What number is "quaranta"?',
          'Quel nombre est « quaranta » ?',
          'ما هو الرقم "quaranta"؟',
        ),
        answer: 40,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'How do you ask "what time is it?" in Italian?',
          'Comment demander « quelle heure est-il ? » en italien ?',
          'كيف تسأل "كم الساعة؟" بالإيطالية؟',
        ),
        choices: [
          { text: L('"Quanto costa?"', '« Quanto costa ? »', '"Quanto costa?"') },
          { text: L('"Che ore sono?"', '« Che ore sono ? »', '"Che ore sono?"') },
          { text: L('"Come stai?"', '« Come stai ? »', '"Come stai?"') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('italian', 'beginner', 'basics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Every Italian noun is masculine or feminine. Learn each object with its article: "il" or "la" for the, "un" or "una" for a.',
          'Chaque nom italien est masculin ou féminin. Apprends chaque objet avec son article : « il » ou « la » pour le/la, « un » ou « una » pour un/une.',
          'كل اسم إيطالي إما مذكر أو مؤنث. تعلّم كل شيء مع أداته: "il" أو "la" للتعريف، و"un" أو "una" للتنكير.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"il libro" — the book', '« il libro » — le livre', '"il libro" — الكتاب'),
          L('"la casa" — the house', '« la casa » — la maison', '"la casa" — المنزل'),
          L('"il telefono" — the phone', '« il telefono » — le téléphone', '"il telefono" — الهاتف'),
          L('"la chiave" — the key', '« la chiave » — la clé', '"la chiave" — المفتاح'),
          L('"il tavolo" — the table', '« il tavolo » — la table', '"il tavolo" — الطاولة'),
          L('"la sedia" — the chair', '« la sedia » — la chaise', '"la sedia" — الكرسي'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "the key" in Italian?',
          'Comment dit-on « la clé » en italien ?',
          'كيف تقول "المفتاح" بالإيطالية؟',
        ),
        answer: L('"la chiave"', '« la chiave »', '"la chiave"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which article goes with "casa"?',
          'Quel article accompagne « casa » ?',
          'أي أداة تسبق كلمة "casa"؟',
        ),
        choices: [
          { text: L('"il"', '« il »', '"il"') },
          {
            text: L('"la"', '« la »', '"la"'),
            explanation: L(
              '"Casa" ends in -a and is feminine, so it takes "la".',
              '« Casa » se termine en -a et est féminin, donc il prend « la ».',
              '"Casa" تنتهي بـ -a وهي مؤنثة، لذا تأخذ "la".',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What does "il libro" mean?',
          'Que signifie « il libro » ?',
          'ماذا تعني "il libro"؟',
        ),
        choices: [
          { text: L('The table', 'La table', 'الطاولة') },
          { text: L('The book', 'Le livre', 'الكتاب') },
          { text: L('The phone', 'Le téléphone', 'الهاتف') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Beginner — Phrases
  [lessonKey('italian', 'beginner', 'phrases', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The café is the heart of Italian daily life. Order at the counter, be polite with "per favore" and "grazie", and remember: a "caffè" is an espresso.',
          'Le café est au cœur de la vie quotidienne italienne. Commande au comptoir, sois poli avec « per favore » et « grazie », et rappelle-toi : un « caffè » est un expresso.',
          'المقهى قلب الحياة اليومية الإيطالية. اطلب عند الطاولة الأمامية، وكن مهذباً باستخدام "per favore" و"grazie"، وتذكّر: "caffè" تعني إسبريسو.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Un caffè, per favore" — an espresso, please', '« Un caffè, per favore » — un expresso, s\'il vous plaît', '"Un caffè, per favore" — قهوة إسبريسو من فضلك'),
          L('"Vorrei un cappuccino" — I would like a cappuccino', '« Vorrei un cappuccino » — je voudrais un cappuccino', '"Vorrei un cappuccino" — أودّ كابتشينو'),
          L('"Quanto costa?" — how much does it cost?', '« Quanto costa ? » — combien ça coûte ?', '"Quanto costa?" — كم يكلف؟'),
          L('"Il conto, per favore" — the bill, please', '« Il conto, per favore » — l\'addition, s\'il vous plaît', '"Il conto, per favore" — الحساب من فضلك'),
          L('"Grazie mille!" — thanks a lot!', '« Grazie mille ! » — merci beaucoup !', '"Grazie mille!" — شكراً جزيلاً!'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask for the bill in Italian?',
          'Comment demander l\'addition en italien ?',
          'كيف تطلب الحساب بالإيطالية؟',
        ),
        answer: L('"Il conto, per favore"', '« Il conto, per favore »', '"Il conto, per favore"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "Vorrei" mean?',
          'Que signifie « Vorrei » ?',
          'ماذا تعني "Vorrei"؟',
        ),
        choices: [
          {
            text: L('I would like', 'Je voudrais', 'أودّ'),
            explanation: L(
              '"Vorrei" is the polite conditional of "volere" (to want).',
              '« Vorrei » est le conditionnel poli de « volere » (vouloir).',
              '"Vorrei" هي صيغة الشرط المهذبة من الفعل "volere" (يريد).',
            ),
          },
          { text: L('How much', 'Combien', 'كم') },
          { text: L('Thank you', 'Merci', 'شكراً') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the words to say "An espresso, please": Un caffè, per favore.',
          'Remets les mots dans l\'ordre pour dire « Un expresso, s\'il vous plaît » : Un caffè, per favore.',
          'رتّب الكلمات لتقول "قهوة إسبريسو من فضلك": Un caffè, per favore.',
        ),
        steps: [
          L('Un', 'Un', 'Un'),
          L('caffè,', 'caffè,', 'caffè,'),
          L('per', 'per', 'per'),
          L('favore', 'favore', 'favore'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'beginner', 'phrases', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To find your way in an Italian city, ask "Dov\'è…?" (where is…?) and learn the words for common places and directions.',
          'Pour te repérer dans une ville italienne, demande « Dov\'è… ? » (où est… ?) et apprends les mots des lieux et directions courants.',
          'لتجد طريقك في مدينة إيطالية، اسأل "?…Dov\'è" (أين…؟) وتعلّم كلمات الأماكن والاتجاهات الشائعة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Dov\'è la stazione?" — where is the station?', '« Dov\'è la stazione ? » — où est la gare ?', '"Dov\'è la stazione?" — أين المحطة؟'),
          L('"a destra" — to the right; "a sinistra" — to the left', '« a destra » — à droite ; « a sinistra » — à gauche', '"a destra" — إلى اليمين؛ "a sinistra" — إلى اليسار'),
          L('"sempre dritto" — straight ahead', '« sempre dritto » — tout droit', '"sempre dritto" — إلى الأمام مباشرة'),
          L('"la piazza" — the square', '« la piazza » — la place', '"la piazza" — الساحة'),
          L('"il museo" — the museum', '« il museo » — le musée', '"il museo" — المتحف'),
          L('"È lontano?" — is it far?', '« È lontano ? » — c\'est loin ?', '"È lontano?" — هل هو بعيد؟'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "a sinistra" mean?',
          'Que signifie « a sinistra » ?',
          'ماذا تعني "a sinistra"؟',
        ),
        choices: [
          { text: L('To the right', 'À droite', 'إلى اليمين') },
          { text: L('To the left', 'À gauche', 'إلى اليسار') },
          { text: L('Straight ahead', 'Tout droit', 'إلى الأمام مباشرة') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Arrange the words to ask "Where is the museum?": Dov\'è il museo?',
          'Remets les mots dans l\'ordre pour demander « Où est le musée ? » : Dov\'è il museo ?',
          'رتّب الكلمات لتسأل "أين المتحف؟": ?Dov\'è il museo',
        ),
        steps: [
          L('Dov\'è', 'Dov\'è', 'Dov\'è'),
          L('il', 'il', 'il'),
          L('museo?', 'museo?', 'museo?'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'beginner', 'phrases', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Shopping in Italy means markets, boutiques and plenty of chatting. These phrases cover asking for items, sizes and prices.',
          'Faire les courses en Italie, c\'est les marchés, les boutiques et beaucoup de bavardage. Ces phrases couvrent les articles, les tailles et les prix.',
          'التسوق في إيطاليا يعني الأسواق والمتاجر والكثير من الدردشة. هذه العبارات تغطي طلب السلع والمقاسات والأسعار.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Quanto costa questo?" — how much is this?', '« Quanto costa questo ? » — combien coûte ceci ?', '"Quanto costa questo?" — كم سعر هذا؟'),
          L('"Posso provare?" — can I try it on?', '« Posso provare ? » — puis-je essayer ?', '"Posso provare?" — هل يمكنني تجربته؟'),
          L('"È troppo caro" — it is too expensive', '« È troppo caro » — c\'est trop cher', '"È troppo caro" — إنه غالٍ جداً'),
          L('"Lo prendo" — I will take it', '« Lo prendo » — je le prends', '"Lo prendo" — سآخذه'),
          L('"un po\' di sconto" — a little discount', '« un po\' di sconto » — un peu de réduction', '"un po\' di sconto" — تخفيض بسيط'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "I will take it" in Italian?',
          'Comment dit-on « je le prends » en italien ?',
          'كيف تقول "سآخذه" بالإيطالية؟',
        ),
        answer: L('"Lo prendo"', '« Lo prendo »', '"Lo prendo"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'You find a jacket too expensive. What do you say?',
          'Tu trouves une veste trop chère. Que dis-tu ?',
          'وجدت سترة غالية جداً. ماذا تقول؟',
        ),
        choices: [
          { text: L('"Lo prendo"', '« Lo prendo »', '"Lo prendo"') },
          { text: L('"È troppo caro"', '« È troppo caro »', '"È troppo caro"') },
          { text: L('"Posso provare?"', '« Posso provare ? »', '"Posso provare?"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'The vendor says: "Costa venti euro". How many euros is that?',
          'Le vendeur dit : « Costa venti euro ». Combien d\'euros est-ce ?',
          'يقول البائع: "Costa venti euro". كم يورو يعني ذلك؟',
        ),
        answer: 20,
      },
    ],
  },

  // Intermediate — Grammar
  [lessonKey('italian', 'intermediate', 'grammar', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Italian verbs end in -are, -ere or -ire and change with the subject. The two irregular pillars are "essere" (to be) and "avere" (to have).',
          'Les verbes italiens finissent en -are, -ere ou -ire et changent selon le sujet. Les deux piliers irréguliers sont « essere » (être) et « avere » (avoir).',
          'الأفعال الإيطالية تنتهي بـ -are أو -ere أو -ire وتتغير مع الفاعل. الركيزتان الشاذتان هما "essere" (يكون) و"avere" (يملك).',
        ),
      },
      {
        type: 'list',
        items: [
          L('"io sono, tu sei, lui è" — I am, you are, he is (essere)', '« io sono, tu sei, lui è » — je suis, tu es, il est (essere)', '"io sono, tu sei, lui è" — أنا أكون، أنت تكون، هو يكون (essere)'),
          L('"io ho, tu hai, lui ha" — I have, you have, he has (avere)', '« io ho, tu hai, lui ha » — j\'ai, tu as, il a (avere)', '"io ho, tu hai, lui ha" — أنا أملك، أنت تملك، هو يملك (avere)'),
          L('"parlare": "io parlo, tu parli, lui parla" — to speak: I speak, you speak, he speaks', '« parlare » : « io parlo, tu parli, lui parla » — parler : je parle, tu parles, il parle', '"parlare": "io parlo, tu parli, lui parla" — يتكلم: أنا أتكلم، أنت تتكلم، هو يتكلم'),
          L('"Noi parliamo italiano" — we speak Italian', '« Noi parliamo italiano » — nous parlons italien', '"Noi parliamo italiano" — نحن نتكلم الإيطالية'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Choose the correct form: "Tu ___ italiano?" (essere)',
          'Choisis la forme correcte : « Tu ___ italiano ? » (essere)',
          'اختر الصيغة الصحيحة: "Tu ___ italiano?" (essere)',
        ),
        choices: [
          { text: L('"sono"', '« sono »', '"sono"') },
          {
            text: L('"sei"', '« sei »', '"sei"'),
            explanation: L(
              'With "tu", "essere" becomes "sei": "Tu sei italiano?"',
              'Avec « tu », « essere » devient « sei » : « Tu sei italiano ? »',
              'مع "tu" يصبح فعل "essere" هو "sei": "Tu sei italiano?"',
            ),
          },
          { text: L('"è"', '« è »', '"è"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Choose the correct form: "Lei ___ due fratelli." (avere)',
          'Choisis la forme correcte : « Lei ___ due fratelli. » (avere)',
          'اختر الصيغة الصحيحة: "Lei ___ due fratelli." (avere)',
        ),
        choices: [
          { text: L('"ho"', '« ho »', '"ho"') },
          { text: L('"hai"', '« hai »', '"hai"') },
          {
            text: L('"ha"', '« ha »', '"ha"'),
            explanation: L(
              'Third person singular of "avere" is "ha".',
              'La troisième personne du singulier de « avere » est « ha ».',
              'صيغة الغائب المفرد من "avere" هي "ha".',
            ),
          },
        ],
        correctIndex: 2,
      },
    ],
  },
  [lessonKey('italian', 'intermediate', 'grammar', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The passato prossimo describes completed past actions. Build it with the present of "avere" or "essere" plus a past participle: parlato, andato, mangiato.',
          'Le passato prossimo décrit des actions passées accomplies. Il se forme avec le présent de « avere » ou « essere » plus un participe passé : parlato, andato, mangiato.',
          'زمن passato prossimo يصف أحداثاً ماضية مكتملة. يُبنى بمضارع "avere" أو "essere" مع اسم المفعول: parlato وandato وmangiato.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Ho mangiato la pizza" — I ate the pizza', '« Ho mangiato la pizza » — j\'ai mangé la pizza', '"Ho mangiato la pizza" — أكلتُ البيتزا'),
          L('"Sono andato a Roma" — I went to Rome', '« Sono andato a Roma » — je suis allé à Rome', '"Sono andato a Roma" — ذهبتُ إلى روما'),
          L('"Abbiamo parlato ieri" — we spoke yesterday', '« Abbiamo parlato ieri » — nous avons parlé hier', '"Abbiamo parlato ieri" — تكلمنا أمس'),
          L('Movement verbs like "andare" take "essere"; most others take "avere".', 'Les verbes de mouvement comme « andare » prennent « essere » ; la plupart des autres prennent « avere ».', 'أفعال الحركة مثل "andare" تأخذ "essere"؛ ومعظم الأفعال الأخرى تأخذ "avere".'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Choose the correct auxiliary: "___ andata al mercato." (she went to the market)',
          'Choisis le bon auxiliaire : « ___ andata al mercato. » (elle est allée au marché)',
          'اختر الفعل المساعد الصحيح: "___ andata al mercato." (ذهبتْ إلى السوق)',
        ),
        choices: [
          { text: L('"Ha"', '« Ha »', '"Ha"') },
          {
            text: L('"È"', '« È »', '"È"'),
            explanation: L(
              '"Andare" is a movement verb, so it takes "essere": "È andata".',
              '« Andare » est un verbe de mouvement, donc il prend « essere » : « È andata ».',
              '"Andare" فعل حركة، لذا يأخذ "essere": "È andata".',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the words to say "I ate the pizza": Ho mangiato la pizza.',
          'Remets les mots dans l\'ordre pour dire « J\'ai mangé la pizza » : Ho mangiato la pizza.',
          'رتّب الكلمات لتقول "أكلتُ البيتزا": Ho mangiato la pizza.',
        ),
        steps: [
          L('Ho', 'Ho', 'Ho'),
          L('mangiato', 'mangiato', 'mangiato'),
          L('la', 'la', 'la'),
          L('pizza', 'pizza', 'pizza'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'intermediate', 'grammar', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Italian questions and negations are simple: raise your intonation for a question, and put "non" before the verb to negate.',
          'Les questions et négations italiennes sont simples : monte l\'intonation pour une question, et place « non » avant le verbe pour nier.',
          'الأسئلة والنفي في الإيطالية بسيطان: ارفع نبرة صوتك للسؤال، وضع "non" قبل الفعل للنفي.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Non parlo francese" — I do not speak French', '« Non parlo francese » — je ne parle pas français', '"Non parlo francese" — لا أتكلم الفرنسية'),
          L('"Parli inglese?" — do you speak English?', '« Parli inglese ? » — parles-tu anglais ?', '"Parli inglese?" — هل تتكلم الإنجليزية؟'),
          L('"Perché?" — why?; "Quando?" — when?', '« Perché ? » — pourquoi ? ; « Quando ? » — quand ?', '"Perché?" — لماذا؟؛ "Quando?" — متى؟'),
          L('"Che cosa?" — what?; "Chi?" — who?', '« Che cosa ? » — quoi ? ; « Chi ? » — qui ?', '"Che cosa?" — ماذا؟؛ "Chi?" — من؟'),
          L('"Non c\'è problema" — no problem', '« Non c\'è problema » — pas de problème', '"Non c\'è problema" — لا توجد مشكلة'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you say "I do not understand" if "capisco" means "I understand"?',
          'Comment dire « je ne comprends pas » si « capisco » signifie « je comprends » ?',
          'كيف تقول "لا أفهم" إذا كانت "capisco" تعني "أفهم"؟',
        ),
        choices: [
          {
            text: L('"Non capisco"', '« Non capisco »', '"Non capisco"'),
            explanation: L(
              '"Non" simply goes before the verb.',
              '« Non » se place simplement avant le verbe.',
              'تُوضع "non" ببساطة قبل الفعل.',
            ),
          },
          { text: L('"Capisco non"', '« Capisco non »', '"Capisco non"') },
          { text: L('"No capisco"', '« No capisco »', '"No capisco"') },
        ],
        correctIndex: 0,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which word asks "when?"',
          'Quel mot demande « quand ? »',
          'أي كلمة تسأل "متى؟"',
        ),
        choices: [
          { text: L('"Perché"', '« Perché »', '"Perché"') },
          { text: L('"Quando"', '« Quando »', '"Quando"') },
          { text: L('"Chi"', '« Chi »', '"Chi"') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Intermediate — Conversation
  [lessonKey('italian', 'intermediate', 'conversation', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Introducing yourself goes beyond your name: say where you are from, what you do and what you like.',
          'Se présenter va au-delà du nom : dis d\'où tu viens, ce que tu fais et ce que tu aimes.',
          'التعريف بنفسك يتجاوز ذكر اسمك: قل من أين أنت وماذا تعمل وما الذي تحبه.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Sono di Tunisi" — I am from Tunis', '« Sono di Tunisi » — je viens de Tunis', '"Sono di Tunisi" — أنا من تونس'),
          L('"Ho venticinque anni" — I am twenty-five years old', '« Ho venticinque anni » — j\'ai vingt-cinq ans', '"Ho venticinque anni" — عمري خمسة وعشرون عاماً'),
          L('"Lavoro come ingegnere" — I work as an engineer', '« Lavoro come ingegnere » — je travaille comme ingénieur', '"Lavoro come ingegnere" — أعمل مهندساً'),
          L('"Studio all\'università" — I study at university', '« Studio all\'università » — j\'étudie à l\'université', '"Studio all\'università" — أدرس في الجامعة'),
          L('"Mi piace viaggiare" — I like to travel', '« Mi piace viaggiare » — j\'aime voyager', '"Mi piace viaggiare" — أحب السفر'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "I like to travel" in Italian?',
          'Comment dit-on « j\'aime voyager » en italien ?',
          'كيف تقول "أحب السفر" بالإيطالية؟',
        ),
        answer: L('"Mi piace viaggiare"', '« Mi piace viaggiare »', '"Mi piace viaggiare"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Italians say age with "avere". How do you say "I am thirty years old"?',
          'Les Italiens expriment l\'âge avec « avere ». Comment dire « j\'ai trente ans » ?',
          'يعبّر الإيطاليون عن العمر بالفعل "avere". كيف تقول "عمري ثلاثون عاماً"؟',
        ),
        choices: [
          { text: L('"Sono trenta anni"', '« Sono trenta anni »', '"Sono trenta anni"') },
          {
            text: L('"Ho trent\'anni"', '« Ho trent\'anni »', '"Ho trent\'anni"'),
            explanation: L(
              'Literally "I have thirty years" — age uses "avere", not "essere".',
              'Littéralement « j\'ai trente ans » — l\'âge utilise « avere », pas « essere ».',
              'حرفياً "أملك ثلاثين عاماً" — يُستخدم "avere" للعمر وليس "essere".',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the words to say "I am from Tunis": Sono di Tunisi.',
          'Remets les mots dans l\'ordre pour dire « Je viens de Tunis » : Sono di Tunisi.',
          'رتّب الكلمات لتقول "أنا من تونس": Sono di Tunisi.',
        ),
        steps: [
          L('Sono', 'Sono', 'Sono'),
          L('di', 'di', 'di'),
          L('Tunisi', 'Tunisi', 'Tunisi'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'intermediate', 'conversation', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Making plans means suggesting, accepting and declining. The verb "andare" (to go) and days of the week do most of the work.',
          'Faire des projets, c\'est proposer, accepter et refuser. Le verbe « andare » (aller) et les jours de la semaine font l\'essentiel du travail.',
          'وضع الخطط يعني الاقتراح والقبول والاعتذار. الفعل "andare" (يذهب) وأيام الأسبوع يقومان بمعظم العمل.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Andiamo al cinema?" — shall we go to the cinema?', '« Andiamo al cinema ? » — on va au cinéma ?', '"Andiamo al cinema?" — هل نذهب إلى السينما؟'),
          L('"Va bene!" — okay, sounds good!', '« Va bene ! » — d\'accord !', '"Va bene!" — حسناً، اتفقنا!'),
          L('"Non posso, mi dispiace" — I can\'t, I\'m sorry', '« Non posso, mi dispiace » — je ne peux pas, désolé', '"Non posso, mi dispiace" — لا أستطيع، أنا آسف'),
          L('"sabato sera" — Saturday evening', '« sabato sera » — samedi soir', '"sabato sera" — مساء السبت'),
          L('"A che ora ci vediamo?" — at what time shall we meet?', '« A che ora ci vediamo ? » — à quelle heure on se voit ?', '"A che ora ci vediamo?" — في أي ساعة نلتقي؟'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A friend suggests a plan and you agree. What do you say?',
          'Un ami propose un plan et tu acceptes. Que dis-tu ?',
          'اقترح صديق خطة ووافقت. ماذا تقول؟',
        ),
        choices: [
          { text: L('"Non posso"', '« Non posso »', '"Non posso"') },
          { text: L('"Va bene!"', '« Va bene ! »', '"Va bene!"') },
          { text: L('"Mi dispiace"', '« Mi dispiace »', '"Mi dispiace"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the words to ask "Shall we go to the cinema?": Andiamo al cinema?',
          'Remets les mots dans l\'ordre pour demander « On va au cinéma ? » : Andiamo al cinema ?',
          'رتّب الكلمات لتسأل "هل نذهب إلى السينما؟": ?Andiamo al cinema',
        ),
        steps: [
          L('Andiamo', 'Andiamo', 'Andiamo'),
          L('al', 'al', 'al'),
          L('cinema?', 'cinema?', 'cinema?'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'intermediate', 'conversation', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To share opinions and feelings, Italians lean on "penso che" (I think that), "secondo me" (in my opinion) and the very useful "mi piace" / "non mi piace".',
          'Pour donner un avis ou exprimer un sentiment, les Italiens utilisent « penso che » (je pense que), « secondo me » (à mon avis) et le très utile « mi piace » / « non mi piace ».',
          'لمشاركة الآراء والمشاعر يعتمد الإيطاليون على "penso che" (أعتقد أن) و"secondo me" (في رأيي) وعلى العبارة المفيدة جداً "mi piace" / "non mi piace".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Secondo me è una buona idea" — in my opinion it is a good idea', '« Secondo me è una buona idea » — à mon avis c\'est une bonne idée', '"Secondo me è una buona idea" — في رأيي إنها فكرة جيدة'),
          L('"Mi piace questa canzone" — I like this song', '« Mi piace questa canzone » — j\'aime cette chanson', '"Mi piace questa canzone" — تعجبني هذه الأغنية'),
          L('"Sono felice" — I am happy; "Sono stanco" — I am tired', '« Sono felice » — je suis heureux ; « Sono stanco » — je suis fatigué', '"Sono felice" — أنا سعيد؛ "Sono stanco" — أنا متعب'),
          L('"Non sono d\'accordo" — I disagree', '« Non sono d\'accordo » — je ne suis pas d\'accord', '"Non sono d\'accordo" — لا أوافق'),
          L('"Che ne pensi?" — what do you think about it?', '« Che ne pensi ? » — qu\'en penses-tu ?', '"Che ne pensi?" — ما رأيك في ذلك؟'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you say "I disagree" in Italian?',
          'Comment dit-on « je ne suis pas d\'accord » en italien ?',
          'كيف تقول "لا أوافق" بالإيطالية؟',
        ),
        choices: [
          { text: L('"Sono d\'accordo"', '« Sono d\'accordo »', '"Sono d\'accordo"') },
          { text: L('"Non sono d\'accordo"', '« Non sono d\'accordo »', '"Non sono d\'accordo"') },
          { text: L('"Che ne pensi?"', '« Che ne pensi ? »', '"Che ne pensi?"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What does "Sono stanco" express?',
          'Qu\'exprime « Sono stanco » ?',
          'ماذا تعبّر "Sono stanco"؟',
        ),
        choices: [
          { text: L('Happiness', 'La joie', 'السعادة') },
          { text: L('Tiredness', 'La fatigue', 'التعب') },
          { text: L('Anger', 'La colère', 'الغضب') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Advanced — Fluency
  [lessonKey('italian', 'advanced', 'fluency', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Storytelling in Italian mixes two past tenses: the imperfetto sets the scene and describes habits, while the passato prossimo reports the events.',
          'Raconter en italien mélange deux temps du passé : l\'imperfetto plante le décor et décrit les habitudes, tandis que le passato prossimo rapporte les événements.',
          'السرد بالإيطالية يمزج زمنين للماضي: imperfetto يرسم المشهد ويصف العادات، بينما passato prossimo يروي الأحداث.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"C\'era una volta…" — once upon a time…', '« C\'era una volta… » — il était une fois…', '"…C\'era una volta" — كان يا ما كان…'),
          L('"Mentre camminavo, ho visto un amico" — while I was walking, I saw a friend', '« Mentre camminavo, ho visto un amico » — pendant que je marchais, j\'ai vu un ami', '"Mentre camminavo, ho visto un amico" — بينما كنت أمشي، رأيت صديقاً'),
          L('"poi" — then; "dopo" — after; "alla fine" — in the end', '« poi » — puis ; « dopo » — après ; « alla fine » — à la fin', '"poi" — ثم؛ "dopo" — بعد ذلك؛ "alla fine" — في النهاية'),
          L('"all\'improvviso" — suddenly', '« all\'improvviso » — soudain', '"all\'improvviso" — فجأة'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'In "Mentre camminavo, ho visto un amico", which verb sets the background scene?',
          'Dans « Mentre camminavo, ho visto un amico », quel verbe plante le décor ?',
          'في جملة "Mentre camminavo, ho visto un amico"، أي فعل يرسم خلفية المشهد؟',
        ),
        choices: [
          {
            text: L('"camminavo"', '« camminavo »', '"camminavo"'),
            explanation: L(
              'The imperfetto "camminavo" describes an ongoing background action.',
              'L\'imperfetto « camminavo » décrit une action de fond en cours.',
              'صيغة imperfetto في "camminavo" تصف فعلاً مستمراً في الخلفية.',
            ),
          },
          { text: L('"ho visto"', '« ho visto »', '"ho visto"') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the story connectors from start to finish.',
          'Ordonne les connecteurs du récit du début à la fin.',
          'رتّب روابط السرد من البداية إلى النهاية.',
        ),
        steps: [
          L('"C\'era una volta" — once upon a time', '« C\'era una volta » — il était une fois', '"C\'era una volta" — كان يا ما كان'),
          L('"poi" — then', '« poi » — puis', '"poi" — ثم'),
          L('"dopo" — after that', '« dopo » — après', '"dopo" — بعد ذلك'),
          L('"alla fine" — in the end', '« alla fine » — à la fin', '"alla fine" — في النهاية'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'advanced', 'fluency', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Italian has two "you"s: informal "tu" for friends and family, formal "Lei" for strangers, elders and professional settings. The verb changes with it.',
          'L\'italien a deux « tu » : « tu » informel pour les amis et la famille, « Lei » formel pour les inconnus, les aînés et le cadre professionnel. Le verbe change avec.',
          'في الإيطالية صيغتان للمخاطب: "tu" غير الرسمية للأصدقاء والعائلة، و"Lei" الرسمية للغرباء وكبار السن وبيئة العمل. ويتغير الفعل تبعاً لذلك.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Come stai?" (informal) vs "Come sta?" (formal) — how are you?', '« Come stai ? » (informel) vs « Come sta ? » (formel) — comment allez-vous ?', '"Come stai?" (غير رسمية) مقابل "Come sta?" (رسمية) — كيف حالك؟'),
          L('"Ciao" (informal) vs "ArrivederLa" (formal) — goodbye', '« Ciao » (informel) vs « ArrivederLa » (formel) — au revoir', '"Ciao" (غير رسمية) مقابل "ArrivederLa" (رسمية) — إلى اللقاء'),
          L('"Scusa" (informal) vs "Scusi" (formal) — excuse me', '« Scusa » (informel) vs « Scusi » (formel) — excusez-moi', '"Scusa" (غير رسمية) مقابل "Scusi" (رسمية) — المعذرة'),
          L('"Le presento il dottor Rossi" — may I introduce Dr Rossi (formal)', '« Le presento il dottor Rossi » — je vous présente le docteur Rossi (formel)', '"Le presento il dottor Rossi" — أقدّم لك الدكتور روسي (رسمية)'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'You bump into an elderly stranger. How do you apologize?',
          'Tu bouscules un inconnu âgé. Comment t\'excuses-tu ?',
          'اصطدمت بشخص مسن غريب. كيف تعتذر؟',
        ),
        choices: [
          { text: L('"Scusa"', '« Scusa »', '"Scusa"') },
          {
            text: L('"Scusi"', '« Scusi »', '"Scusi"'),
            explanation: L(
              'With strangers and elders, use the formal "Scusi".',
              'Avec les inconnus et les aînés, utilise le formel « Scusi ».',
              'مع الغرباء وكبار السن استخدم الصيغة الرسمية "Scusi".',
            ),
          },
          { text: L('"Ciao"', '« Ciao »', '"Ciao"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which question is the formal "how are you?"',
          'Quelle question est le « comment allez-vous ? » formel ?',
          'أي سؤال هو الصيغة الرسمية لـ"كيف حالك؟"',
        ),
        choices: [
          { text: L('"Come stai?"', '« Come stai ? »', '"Come stai?"') },
          { text: L('"Come sta?"', '« Come sta ? »', '"Come sta?"') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('italian', 'advanced', 'fluency', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Idioms make you sound natural. Italians love expressions built on food, animals and everyday life — never translate them word for word.',
          'Les expressions idiomatiques te font paraître naturel. Les Italiens adorent les expressions basées sur la nourriture, les animaux et le quotidien — ne les traduis jamais mot à mot.',
          'التعابير الاصطلاحية تجعل كلامك طبيعياً. يحب الإيطاليون تعابير مبنية على الطعام والحيوانات والحياة اليومية — لا تترجمها حرفياً أبداً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"In bocca al lupo!" — good luck! (literally: into the wolf\'s mouth)', '« In bocca al lupo ! » — bonne chance ! (littéralement : dans la gueule du loup)', '"In bocca al lupo!" — حظاً سعيداً! (حرفياً: في فم الذئب)'),
          L('"Costa un occhio della testa" — it costs an arm and a leg (literally: an eye of the head)', '« Costa un occhio della testa » — ça coûte les yeux de la tête', '"Costa un occhio della testa" — يكلف مبلغاً باهظاً (حرفياً: عيناً من الرأس)'),
          L('"Essere al verde" — to be broke (literally: to be at the green)', '« Essere al verde » — être fauché (littéralement : être au vert)', '"Essere al verde" — أن تكون مفلساً (حرفياً: أن تكون عند الأخضر)'),
          L('"Non vedo l\'ora" — I can\'t wait (literally: I don\'t see the hour)', '« Non vedo l\'ora » — j\'ai hâte (littéralement : je ne vois pas l\'heure)', '"Non vedo l\'ora" — لا أطيق الانتظار (حرفياً: لا أرى الساعة)'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you wish someone good luck in Italian?',
          'Comment souhaiter bonne chance à quelqu\'un en italien ?',
          'كيف تتمنى الحظ السعيد لشخص بالإيطالية؟',
        ),
        answer: L('"In bocca al lupo!"', '« In bocca al lupo ! »', '"In bocca al lupo!"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "Non vedo l\'ora" mean?',
          'Que signifie « Non vedo l\'ora » ?',
          'ماذا تعني "Non vedo l\'ora"؟',
        ),
        choices: [
          { text: L('I lost my watch', 'J\'ai perdu ma montre', 'أضعتُ ساعتي') },
          {
            text: L('I can\'t wait', 'J\'ai hâte', 'لا أطيق الانتظار'),
            explanation: L(
              'Literally "I don\'t see the hour" — meaning you are eager for something.',
              'Littéralement « je ne vois pas l\'heure » — c\'est-à-dire être impatient.',
              'حرفياً "لا أرى الساعة" — أي أنك متشوق لشيء ما.',
            ),
          },
          { text: L('I am late', 'Je suis en retard', 'أنا متأخر') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A friend says "Sono al verde". What is their situation?',
          'Un ami dit « Sono al verde ». Quelle est sa situation ?',
          'قال صديق "Sono al verde". ما وضعه؟',
        ),
        choices: [
          { text: L('They are broke', 'Il est fauché', 'إنه مفلس') },
          { text: L('They are in the countryside', 'Il est à la campagne', 'إنه في الريف') },
          { text: L('They are feeling sick', 'Il se sent malade', 'إنه يشعر بالمرض') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Advanced — Culture
  [lessonKey('italian', 'advanced', 'culture', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Reading Italian media builds real fluency. Newspapers like La Repubblica and the RAI news use a rich but recognizable vocabulary.',
          'Lire les médias italiens développe une vraie aisance. Des journaux comme La Repubblica et les infos de la RAI utilisent un vocabulaire riche mais reconnaissable.',
          'متابعة الإعلام الإيطالي تبني طلاقة حقيقية. صحف مثل La Repubblica ونشرات أخبار RAI تستخدم مفردات غنية لكنها مألوفة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"il giornale" — the newspaper', '« il giornale » — le journal', '"il giornale" — الصحيفة'),
          L('"le notizie" — the news', '« le notizie » — les nouvelles', '"le notizie" — الأخبار'),
          L('"il telegiornale" — the TV news', '« il telegiornale » — le journal télévisé', '"il telegiornale" — نشرة الأخبار التلفزيونية'),
          L('"l\'intervista" — the interview', '« l\'intervista » — l\'interview', '"l\'intervista" — المقابلة'),
          L('"secondo le fonti" — according to the sources', '« secondo le fonti » — selon les sources', '"secondo le fonti" — وفقاً للمصادر'),
          L('"in diretta" — live (broadcast)', '« in diretta » — en direct', '"in diretta" — بث مباشر'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is "il telegiornale"?',
          'Qu\'est-ce que « il telegiornale » ?',
          'ما هو "il telegiornale"؟',
        ),
        choices: [
          { text: L('The TV news', 'Le journal télévisé', 'نشرة الأخبار التلفزيونية') },
          { text: L('The phone book', 'L\'annuaire', 'دليل الهاتف') },
          { text: L('The magazine', 'Le magazine', 'المجلة') },
        ],
        correctIndex: 0,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A report begins with "secondo le fonti". What does that signal?',
          'Un reportage commence par « secondo le fonti ». Que signale cela ?',
          'يبدأ تقرير بعبارة "secondo le fonti". ماذا يعني ذلك؟',
        ),
        choices: [
          {
            text: L(
              'The information is attributed to sources',
              'L\'information est attribuée à des sources',
              'المعلومة منسوبة إلى مصادر',
            ),
          },
          { text: L('The broadcast is live', 'L\'émission est en direct', 'البث مباشر') },
          { text: L('The news is about fountains', 'Les nouvelles parlent de fontaines', 'الخبر يتحدث عن النوافير') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('italian', 'advanced', 'culture', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Whether you plan to study or work in Italy, you need the vocabulary of offices, universities and CVs — plus the formal register that goes with it.',
          'Que tu veuilles étudier ou travailler en Italie, il te faut le vocabulaire des bureaux, des universités et des CV — plus le registre formel qui va avec.',
          'سواء كنت تخطط للدراسة أو العمل في إيطاليا، تحتاج مفردات المكاتب والجامعات والسير الذاتية — مع الأسلوب الرسمي المناسب لها.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"il lavoro" — the job / work', '« il lavoro » — le travail', '"il lavoro" — العمل / الوظيفة'),
          L('"il colloquio" — the job interview', '« il colloquio » — l\'entretien d\'embauche', '"il colloquio" — مقابلة العمل'),
          L('"la laurea" — the university degree', '« la laurea » — le diplôme universitaire', '"la laurea" — الشهادة الجامعية'),
          L('"l\'azienda" — the company', '« l\'azienda » — l\'entreprise', '"l\'azienda" — الشركة'),
          L('"lo stipendio" — the salary', '« lo stipendio » — le salaire', '"lo stipendio" — الراتب'),
          L('"Sono laureato in economia" — I have a degree in economics', '« Sono laureato in economia » — je suis diplômé en économie', '"Sono laureato in economia" — أحمل شهادة في الاقتصاد'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is "il colloquio"?',
          'Qu\'est-ce que « il colloquio » ?',
          'ما هو "il colloquio"؟',
        ),
        choices: [
          { text: L('The salary', 'Le salaire', 'الراتب') },
          { text: L('The job interview', 'L\'entretien d\'embauche', 'مقابلة العمل') },
          { text: L('The degree', 'Le diplôme', 'الشهادة') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the words to say "I have a degree in economics": Sono laureato in economia.',
          'Remets les mots dans l\'ordre pour dire « Je suis diplômé en économie » : Sono laureato in economia.',
          'رتّب الكلمات لتقول "أحمل شهادة في الاقتصاد": Sono laureato in economia.',
        ),
        steps: [
          L('Sono', 'Sono', 'Sono'),
          L('laureato', 'laureato', 'laureato'),
          L('in', 'in', 'in'),
          L('economia', 'economia', 'economia'),
        ],
      },
    ],
  },
  [lessonKey('italian', 'advanced', 'culture', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Daily life in Italy has its own rhythm: the morning espresso at the bar, the "passeggiata" evening stroll, and regional trains connecting it all.',
          'La vie quotidienne en Italie a son propre rythme : l\'expresso du matin au bar, la « passeggiata » du soir, et les trains régionaux qui relient le tout.',
          'للحياة اليومية في إيطاليا إيقاعها الخاص: قهوة الإسبريسو الصباحية في المقهى، ونزهة المساء "passeggiata"، والقطارات الإقليمية التي تربط كل ذلك.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"il binario" — the train platform', '« il binario » — le quai', '"il binario" — رصيف القطار'),
          L('"un biglietto andata e ritorno" — a round-trip ticket', '« un biglietto andata e ritorno » — un billet aller-retour', '"un biglietto andata e ritorno" — تذكرة ذهاب وعودة'),
          L('"la passeggiata" — the evening stroll', '« la passeggiata » — la promenade du soir', '"la passeggiata" — نزهة المساء'),
          L('"fare la spesa" — to do the grocery shopping', '« fare la spesa » — faire les courses', '"fare la spesa" — التسوق لشراء المواد الغذائية'),
          L('"A che ora parte il treno?" — at what time does the train leave?', '« A che ora parte il treno ? » — à quelle heure part le train ?', '"A che ora parte il treno?" — في أي ساعة يغادر القطار؟'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask when the train leaves?',
          'Comment demander quand part le train ?',
          'كيف تسأل متى يغادر القطار؟',
        ),
        answer: L('"A che ora parte il treno?"', '« A che ora parte il treno ? »', '"A che ora parte il treno?"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "fare la spesa" mean?',
          'Que signifie « fare la spesa » ?',
          'ماذا تعني "fare la spesa"؟',
        ),
        choices: [
          { text: L('To take a stroll', 'Se promener', 'التنزه') },
          { text: L('To do the grocery shopping', 'Faire les courses', 'التسوق لشراء المواد الغذائية') },
          { text: L('To catch a train', 'Prendre un train', 'ركوب القطار') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'The announcement says the train leaves from "binario otto". Which platform number is that?',
          'L\'annonce dit que le train part du « binario otto ». Quel numéro de quai est-ce ?',
          'يقول الإعلان إن القطار يغادر من "binario otto". ما رقم الرصيف؟',
        ),
        answer: 8,
      },
    ],
  },
}
