import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// German language course: beginner (basics, phrases) → intermediate (grammar, conversation) → advanced (fluency, culture).
export const germanLessons: Record<string, LessonContent> = {
  // Beginner — Basics
  [lessonKey('german', 'beginner', 'basics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'German greetings change with the time of day, and German always capitalizes its nouns. There are two words for "you": "du" for friends and family, "Sie" for strangers and formal situations.',
          'Les salutations allemandes changent selon le moment de la journée, et l\'allemand met toujours une majuscule à ses noms. Il existe deux mots pour « tu / vous » : « du » pour les amis et la famille, « Sie » pour les inconnus et les situations formelles.',
          'تتغير التحيات الألمانية حسب وقت اليوم، وتُكتب الأسماء في الألمانية دائماً بحرف كبير. وهناك كلمتان لمخاطبة الآخر: "du" للأصدقاء والعائلة، و"Sie" للغرباء والمواقف الرسمية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Hallo" — hello', '« Hallo » — salut', '"Hallo" — مرحباً'),
          L('"Guten Morgen" — good morning', '« Guten Morgen » — bonjour (le matin)', '"Guten Morgen" — صباح الخير'),
          L('"Guten Abend" — good evening', '« Guten Abend » — bonsoir', '"Guten Abend" — مساء الخير'),
          L('"Ich heiße Anna." — my name is Anna', '« Ich heiße Anna. » — je m\'appelle Anna', '"Ich heiße Anna." — اسمي آنا'),
          L('"Wie heißen Sie?" — what is your name? (formal)', '« Wie heißen Sie ? » — comment vous appelez-vous ? (formel)', '"Wie heißen Sie?" — ما اسمك؟ (رسمي)'),
          L('"Auf Wiedersehen" — goodbye', '« Auf Wiedersehen » — au revoir', '"Auf Wiedersehen" — إلى اللقاء'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "good morning" in German?',
          'Comment dit-on « bonjour (le matin) » en allemand ?',
          'كيف تقول "صباح الخير" بالألمانية؟',
        ),
        answer: L('"Guten Morgen"', '« Guten Morgen »', '"Guten Morgen"'),
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
          { text: L('"Guten Morgen"', '« Guten Morgen »', '"Guten Morgen"') },
          {
            text: L('"Guten Abend"', '« Guten Abend »', '"Guten Abend"'),
            explanation: L(
              '"Abend" means evening.',
              '« Abend » signifie soir.',
              '"Abend" تعني المساء.',
            ),
          },
          { text: L('"Auf Wiedersehen"', '« Auf Wiedersehen »', '"Auf Wiedersehen"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to say "My name is Anna."',
          'Mets les mots dans l\'ordre pour dire « Je m\'appelle Anna. »',
          'رتب الكلمات لتقول "اسمي آنا."',
        ),
        steps: [
          L('Ich', 'Ich', 'Ich'),
          L('heiße', 'heiße', 'heiße'),
          L('Anna', 'Anna', 'Anna'),
        ],
      },
    ],
  },
  [lessonKey('german', 'beginner', 'basics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'German numbers from 21 to 99 are read "backwards": "einundzwanzig" is literally "one-and-twenty". To tell the time, ask "Wie spät ist es?" and answer with "Uhr" (o\'clock).',
          'Les nombres allemands de 21 à 99 se lisent « à l\'envers » : « einundzwanzig » signifie littéralement « un-et-vingt ». Pour l\'heure, demande « Wie spät ist es ? » et réponds avec « Uhr » (heure).',
          'تُقرأ الأعداد الألمانية من 21 إلى 99 "بالمقلوب": "einundzwanzig" تعني حرفياً "واحد وعشرون" — تماماً مثل العربية! لمعرفة الوقت اسأل "Wie spät ist es?" وأجب باستخدام "Uhr" (الساعة).',
        ),
      },
      {
        type: 'list',
        items: [
          L('"eins, zwei, drei" — one, two, three', '« eins, zwei, drei » — un, deux, trois', '"eins, zwei, drei" — واحد، اثنان، ثلاثة'),
          L('"zehn" — ten', '« zehn » — dix', '"zehn" — عشرة'),
          L('"zwanzig" — twenty', '« zwanzig » — vingt', '"zwanzig" — عشرون'),
          L('"einundzwanzig" — twenty-one (literally: one-and-twenty)', '« einundzwanzig » — vingt-et-un (littéralement : un-et-vingt)', '"einundzwanzig" — واحد وعشرون (حرفياً: واحد وعشرون)'),
          L('"Wie spät ist es?" — what time is it?', '« Wie spät ist es ? » — quelle heure est-il ?', '"Wie spät ist es?" — كم الساعة؟'),
          L('"Es ist drei Uhr." — it is three o\'clock', '« Es ist drei Uhr. » — il est trois heures', '"Es ist drei Uhr." — الساعة الثالثة'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What number is "dreißig"?',
          'Quel nombre est « dreißig » ?',
          'ما هو العدد "dreißig"؟',
        ),
        answer: 30,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What does "einundzwanzig" mean?',
          'Que signifie « einundzwanzig » ?',
          'ماذا تعني "einundzwanzig"؟',
        ),
        choices: [
          { text: L('12', '12', '12') },
          {
            text: L('21', '21', '21'),
            explanation: L(
              'The unit comes first: one-and-twenty.',
              'L\'unité vient en premier : un-et-vingt.',
              'الآحاد تأتي أولاً: واحد وعشرون.',
            ),
          },
          { text: L('31', '31', '31') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('german', 'beginner', 'basics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Every German noun has one of three genders, shown by its article: "der" (masculine), "die" (feminine) or "das" (neuter). The gender is not always logical, so always learn a noun together with its article — and remember nouns are capitalized.',
          'Chaque nom allemand a l\'un des trois genres, indiqué par son article : « der » (masculin), « die » (féminin) ou « das » (neutre). Le genre n\'est pas toujours logique : apprends donc chaque nom avec son article — et rappelle-toi que les noms prennent une majuscule.',
          'لكل اسم ألماني جنس من ثلاثة، تدل عليه أداة التعريف: "der" (مذكر) أو "die" (مؤنث) أو "das" (محايد). الجنس ليس منطقياً دائماً، لذا احفظ كل اسم مع أداته — وتذكر أن الأسماء تُكتب بحرف كبير.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"der Tisch" — the table (masculine)', '« der Tisch » — la table (masculin)', '"der Tisch" — الطاولة (مذكر)'),
          L('"die Lampe" — the lamp (feminine)', '« die Lampe » — la lampe (féminin)', '"die Lampe" — المصباح (مؤنث)'),
          L('"das Buch" — the book (neuter)', '« das Buch » — le livre (neutre)', '"das Buch" — الكتاب (محايد)'),
          L('"der Stuhl" — the chair', '« der Stuhl » — la chaise', '"der Stuhl" — الكرسي'),
          L('"die Tür" — the door', '« die Tür » — la porte', '"die Tür" — الباب'),
          L('"das Fenster" — the window', '« das Fenster » — la fenêtre', '"das Fenster" — النافذة'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "the book" in German?',
          'Comment dit-on « le livre » en allemand ?',
          'كيف تقول "الكتاب" بالألمانية؟',
        ),
        answer: L('"das Buch"', '« das Buch »', '"das Buch"'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which article goes with "Lampe"?',
          'Quel article accompagne « Lampe » ?',
          'ما الأداة الصحيحة مع "Lampe"؟',
        ),
        choices: [
          { text: L('der', 'der', 'der') },
          {
            text: L('die', 'die', 'die'),
            explanation: L(
              '"Lampe" is feminine: "die Lampe".',
              '« Lampe » est féminin : « die Lampe ».',
              '"Lampe" مؤنثة: "die Lampe".',
            ),
          },
          { text: L('das', 'das', 'das') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which of these nouns is neuter?',
          'Lequel de ces noms est neutre ?',
          'أي من هذه الأسماء محايد؟',
        ),
        choices: [
          { text: L('"der Stuhl"', '« der Stuhl »', '"der Stuhl"') },
          { text: L('"die Tür"', '« die Tür »', '"die Tür"') },
          { text: L('"das Fenster"', '« das Fenster »', '"das Fenster"') },
        ],
        correctIndex: 2,
      },
    ],
  },

  // Beginner — Phrases
  [lessonKey('german', 'beginner', 'phrases', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To order politely in a German café, use "Ich hätte gern..." (I would like...). Add "bitte" (please) to any request, and thank with "danke". Waiters are usually addressed with the formal "Sie".',
          'Pour commander poliment dans un café allemand, utilise « Ich hätte gern... » (je voudrais...). Ajoute « bitte » (s\'il vous plaît) à toute demande, et remercie avec « danke ». On s\'adresse généralement aux serveurs avec le « Sie » formel.',
          'للطلب بأدب في مقهى ألماني، استخدم "Ich hätte gern..." (أود...). أضف "bitte" (من فضلك) إلى أي طلب، واشكر بكلمة "danke". يُخاطب النادل عادة بصيغة "Sie" الرسمية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Ich hätte gern einen Kaffee." — I would like a coffee', '« Ich hätte gern einen Kaffee. » — je voudrais un café', '"Ich hätte gern einen Kaffee." — أود قهوة'),
          L('"Ein Glas Wasser, bitte." — a glass of water, please', '« Ein Glas Wasser, bitte. » — un verre d\'eau, s\'il vous plaît', '"Ein Glas Wasser, bitte." — كأس ماء من فضلك'),
          L('"die Speisekarte" — the menu', '« die Speisekarte » — la carte / le menu', '"die Speisekarte" — قائمة الطعام'),
          L('"Die Rechnung, bitte." — the bill, please', '« Die Rechnung, bitte. » — l\'addition, s\'il vous plaît', '"Die Rechnung, bitte." — الحساب من فضلك'),
          L('"Danke schön!" — thank you very much', '« Danke schön ! » — merci beaucoup', '"Danke schön!" — شكراً جزيلاً'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you ask for the bill?',
          'Comment demander l\'addition ?',
          'كيف تطلب الحساب؟',
        ),
        answer: L('"Die Rechnung, bitte."', '« Die Rechnung, bitte. »', '"Die Rechnung, bitte."'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is the polite way to order a coffee?',
          'Quelle est la façon polie de commander un café ?',
          'ما الطريقة المهذبة لطلب قهوة؟',
        ),
        choices: [
          {
            text: L('"Ich hätte gern einen Kaffee."', '« Ich hätte gern einen Kaffee. »', '"Ich hätte gern einen Kaffee."'),
            explanation: L(
              '"Ich hätte gern" is the polite ordering formula.',
              '« Ich hätte gern » est la formule polie pour commander.',
              '"Ich hätte gern" هي الصيغة المهذبة للطلب.',
            ),
          },
          { text: L('"Kaffee! Schnell!"', '« Kaffee ! Schnell ! »', '"Kaffee! Schnell!"') },
          { text: L('"Wo ist Kaffee?"', '« Wo ist Kaffee ? »', '"Wo ist Kaffee?"') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to say "I would like a coffee."',
          'Mets les mots dans l\'ordre pour dire « Je voudrais un café. »',
          'رتب الكلمات لتقول "أود قهوة."',
        ),
        steps: [
          L('Ich', 'Ich', 'Ich'),
          L('hätte', 'hätte', 'hätte'),
          L('gern', 'gern', 'gern'),
          L('einen', 'einen', 'einen'),
          L('Kaffee', 'Kaffee', 'Kaffee'),
        ],
      },
    ],
  },
  [lessonKey('german', 'beginner', 'phrases', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To ask where something is, start with "Wo ist...?" (where is...?). The three key direction words are "links" (left), "rechts" (right) and "geradeaus" (straight ahead).',
          'Pour demander où se trouve quelque chose, commence par « Wo ist... ? » (où est... ?). Les trois mots de direction essentiels sont « links » (à gauche), « rechts » (à droite) et « geradeaus » (tout droit).',
          'للسؤال عن مكان شيء ما، ابدأ بـ "Wo ist...?" (أين...؟). كلمات الاتجاه الثلاث الأساسية هي "links" (يسار) و"rechts" (يمين) و"geradeaus" (إلى الأمام مباشرة).',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Wo ist der Bahnhof?" — where is the train station?', '« Wo ist der Bahnhof ? » — où est la gare ?', '"Wo ist der Bahnhof?" — أين محطة القطار؟'),
          L('"links" — left', '« links » — à gauche', '"links" — يسار'),
          L('"rechts" — right', '« rechts » — à droite', '"rechts" — يمين'),
          L('"geradeaus" — straight ahead', '« geradeaus » — tout droit', '"geradeaus" — إلى الأمام مباشرة'),
          L('"die Straße" — the street', '« die Straße » — la rue', '"die Straße" — الشارع'),
          L('"Ist es weit?" — is it far?', '« Ist es weit ? » — est-ce loin ?', '"Ist es weit?" — هل هو بعيد؟'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "geradeaus" mean?',
          'Que signifie « geradeaus » ?',
          'ماذا تعني "geradeaus"؟',
        ),
        choices: [
          { text: L('Left', 'À gauche', 'يسار') },
          { text: L('Straight ahead', 'Tout droit', 'إلى الأمام مباشرة') },
          { text: L('Behind', 'Derrière', 'خلف') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order to ask "Where is the train station?"',
          'Mets les mots dans l\'ordre pour demander « Où est la gare ? »',
          'رتب الكلمات لتسأل "أين محطة القطار؟"',
        ),
        steps: [
          L('Wo', 'Wo', 'Wo'),
          L('ist', 'ist', 'ist'),
          L('der', 'der', 'der'),
          L('Bahnhof', 'Bahnhof', 'Bahnhof'),
        ],
      },
    ],
  },
  [lessonKey('german', 'beginner', 'phrases', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'When shopping, ask the price with "Wie viel kostet das?" (how much does that cost?). Use "Ich möchte..." (I would like...) to say what you want, and shopkeepers are addressed with the formal "Sie".',
          'Pour faire des achats, demande le prix avec « Wie viel kostet das ? » (combien ça coûte ?). Utilise « Ich möchte... » (je voudrais...) pour dire ce que tu veux, et adresse-toi aux commerçants avec le « Sie » formel.',
          'عند التسوق، اسأل عن السعر بـ "Wie viel kostet das?" (بكم هذا؟). استخدم "Ich möchte..." (أريد...) لتقول ما تريده، ويُخاطب الباعة بصيغة "Sie" الرسمية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Wie viel kostet das?" — how much does that cost?', '« Wie viel kostet das ? » — combien ça coûte ?', '"Wie viel kostet das?" — بكم هذا؟'),
          L('"Ich möchte das kaufen." — I would like to buy that', '« Ich möchte das kaufen. » — je voudrais acheter ça', '"Ich möchte das kaufen." — أريد شراء هذا'),
          L('"zu teuer" — too expensive', '« zu teuer » — trop cher', '"zu teuer" — غالٍ جداً'),
          L('"billig" — cheap', '« billig » — bon marché', '"billig" — رخيص'),
          L('"das Geld" — the money', '« das Geld » — l\'argent', '"das Geld" — المال'),
          L('"Haben Sie das in Blau?" — do you have that in blue?', '« Haben Sie das in Blau ? » — l\'avez-vous en bleu ?', '"Haben Sie das in Blau?" — هل لديكم هذا باللون الأزرق؟'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you ask for the price of something?',
          'Comment demander le prix de quelque chose ?',
          'كيف تسأل عن سعر شيء ما؟',
        ),
        choices: [
          { text: L('"Wie viel kostet das?"', '« Wie viel kostet das ? »', '"Wie viel kostet das?"') },
          { text: L('"Wo ist das?"', '« Wo ist das ? »', '"Wo ist das?"') },
          { text: L('"Wie heißt das?"', '« Wie heißt das ? »', '"Wie heißt das?"') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'The shopkeeper says: "Das kostet zwanzig Euro." How many euros is that?',
          'Le vendeur dit : « Das kostet zwanzig Euro. » Combien d\'euros cela fait-il ?',
          'يقول البائع: "Das kostet zwanzig Euro." كم يورو يعني ذلك؟',
        ),
        answer: 20,
      },
    ],
  },

  // Intermediate — Grammar
  [lessonKey('german', 'intermediate', 'grammar', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'In the present tense, German verbs change their ending for each person: take the stem of "machen" (to do) and add -e, -st, -t, -en. Crucially, in a main clause the conjugated verb always stands in second position, even when the sentence starts with a time word.',
          'Au présent, les verbes allemands changent de terminaison selon la personne : prends le radical de « machen » (faire) et ajoute -e, -st, -t, -en. Point essentiel : dans une phrase principale, le verbe conjugué occupe toujours la deuxième position, même si la phrase commence par un mot de temps.',
          'في المضارع، تتغير نهاية الفعل الألماني حسب الفاعل: خذ جذر "machen" (يفعل) وأضف -e أو -st أو -t أو -en. والأهم: في الجملة الرئيسية يأتي الفعل المصرّف دائماً في الموضع الثاني، حتى لو بدأت الجملة بكلمة زمنية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"ich mache" — I do', '« ich mache » — je fais', '"ich mache" — أنا أفعل'),
          L('"du machst" — you do (informal)', '« du machst » — tu fais (informel)', '"du machst" — أنت تفعل (غير رسمي)'),
          L('"er/sie/es macht" — he/she/it does', '« er/sie/es macht » — il/elle fait', '"er/sie/es macht" — هو/هي يفعل'),
          L('"wir machen" — we do', '« wir machen » — nous faisons', '"wir machen" — نحن نفعل'),
          L('"ihr macht" — you all do', '« ihr macht » — vous faites (pluriel informel)', '"ihr macht" — أنتم تفعلون'),
          L('"sie/Sie machen" — they do / you do (formal)', '« sie/Sie machen » — ils font / vous faites (formel)', '"sie/Sie machen" — هم يفعلون / حضرتك تفعل (رسمي)'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Complete: "Du ___ deine Hausaufgaben."',
          'Complète : « Du ___ deine Hausaufgaben. »',
          'أكمل: "Du ___ deine Hausaufgaben."',
        ),
        choices: [
          { text: L('mache', 'mache', 'mache') },
          {
            text: L('machst', 'machst', 'machst'),
            explanation: L(
              'With "du" the verb takes the ending -st.',
              'Avec « du », le verbe prend la terminaison -st.',
              'مع "du" يأخذ الفعل النهاية -st.',
            ),
          },
          { text: L('machen', 'machen', 'machen') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "Today I am learning German." (remember: verb in second position)',
          'Mets les mots dans l\'ordre : « Aujourd\'hui j\'apprends l\'allemand. » (rappel : verbe en deuxième position)',
          'رتب الكلمات: "اليوم أتعلم الألمانية." (تذكر: الفعل في الموضع الثاني)',
        ),
        steps: [
          L('Heute', 'Heute', 'Heute'),
          L('lerne', 'lerne', 'lerne'),
          L('ich', 'ich', 'ich'),
          L('Deutsch', 'Deutsch', 'Deutsch'),
        ],
      },
    ],
  },
  [lessonKey('german', 'intermediate', 'grammar', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'In spoken German, the past is usually the "Perfekt": a form of "haben" or "sein" plus a past participle that goes to the end of the sentence. Verbs of movement or change (gehen, fahren, kommen) take "sein"; most other verbs take "haben".',
          'À l\'oral, le passé allemand est généralement le « Perfekt » : une forme de « haben » ou « sein » plus un participe passé placé à la fin de la phrase. Les verbes de mouvement ou de changement (gehen, fahren, kommen) prennent « sein » ; la plupart des autres prennent « haben ».',
          'في الألمانية المحكية، يُعبَّر عن الماضي عادة بصيغة "Perfekt": فعل مساعد "haben" أو "sein" مع اسم مفعول يأتي في نهاية الجملة. أفعال الحركة أو التغيير (gehen، fahren، kommen) تأخذ "sein"؛ ومعظم الأفعال الأخرى تأخذ "haben".',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Ich habe gespielt." — I played', '« Ich habe gespielt. » — j\'ai joué', '"Ich habe gespielt." — لعبتُ'),
          L('"Ich habe gegessen." — I ate', '« Ich habe gegessen. » — j\'ai mangé', '"Ich habe gegessen." — أكلتُ'),
          L('"Ich bin gegangen." — I went (movement, so "sein")', '« Ich bin gegangen. » — je suis allé(e) (mouvement, donc « sein »)', '"Ich bin gegangen." — ذهبتُ (فعل حركة، لذلك "sein")'),
          L('"Ich bin gefahren." — I drove / traveled', '« Ich bin gefahren. » — j\'ai voyagé / conduit', '"Ich bin gefahren." — سافرتُ / قدتُ'),
          L('"gestern" — yesterday', '« gestern » — hier', '"gestern" — أمس'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which auxiliary goes with "gegangen"?',
          'Quel auxiliaire accompagne « gegangen » ?',
          'ما الفعل المساعد الصحيح مع "gegangen"؟',
        ),
        choices: [
          { text: L('haben', 'haben', 'haben') },
          {
            text: L('sein', 'sein', 'sein'),
            explanation: L(
              '"gehen" is a verb of movement, so it takes "sein".',
              '« gehen » est un verbe de mouvement, donc il prend « sein ».',
              '"gehen" فعل حركة، لذلك يأخذ "sein".',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "I played football yesterday." (participle at the end)',
          'Mets les mots dans l\'ordre : « J\'ai joué au football hier. » (participe à la fin)',
          'رتب الكلمات: "لعبت كرة القدم أمس." (اسم المفعول في النهاية)',
        ),
        steps: [
          L('Ich', 'Ich', 'Ich'),
          L('habe', 'habe', 'habe'),
          L('gestern', 'gestern', 'gestern'),
          L('Fußball', 'Fußball', 'Fußball'),
          L('gespielt', 'gespielt', 'gespielt'),
        ],
      },
    ],
  },
  [lessonKey('german', 'intermediate', 'grammar', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'German questions start with a W-word (was, wo, wann, warum) followed by the verb, or with the verb itself for yes/no questions. Negation uses "nicht" for verbs and adjectives, but "kein/keine" to negate nouns.',
          'Les questions allemandes commencent par un mot en W (was, wo, wann, warum) suivi du verbe, ou par le verbe lui-même pour les questions oui/non. La négation utilise « nicht » pour les verbes et adjectifs, mais « kein/keine » pour nier un nom.',
          'تبدأ الأسئلة الألمانية بكلمة استفهام تبدأ بـ W (مثل was، wo، wann، warum) يليها الفعل، أو بالفعل نفسه في أسئلة نعم/لا. أما النفي فيستخدم "nicht" مع الأفعال والصفات، و"kein/keine" لنفي الأسماء.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Was?" — what?', '« Was ? » — quoi ?', '"Was?" — ماذا؟'),
          L('"Wo?" — where?', '« Wo ? » — où ?', '"Wo?" — أين؟'),
          L('"Wann?" — when?', '« Wann ? » — quand ?', '"Wann?" — متى؟'),
          L('"Warum?" — why?', '« Warum ? » — pourquoi ?', '"Warum?" — لماذا؟'),
          L('"Ich verstehe nicht." — I don\'t understand', '« Ich verstehe nicht. » — je ne comprends pas', '"Ich verstehe nicht." — لا أفهم'),
          L('"Ich habe kein Auto." — I have no car ("kein" negates the noun)', '« Ich habe kein Auto. » — je n\'ai pas de voiture (« kein » nie le nom)', '"Ich habe kein Auto." — ليس عندي سيارة ("kein" تنفي الاسم)'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Complete: "Ich habe ___ Zeit." (Zeit is a feminine noun)',
          'Complète : « Ich habe ___ Zeit. » (Zeit est un nom féminin)',
          'أكمل: "Ich habe ___ Zeit." ‏(Zeit اسم مؤنث)',
        ),
        choices: [
          { text: L('nicht', 'nicht', 'nicht') },
          { text: L('kein', 'kein', 'kein') },
          {
            text: L('keine', 'keine', 'keine'),
            explanation: L(
              'Nouns are negated with "kein", and the feminine form is "keine".',
              'Les noms se nient avec « kein », et la forme féminine est « keine ».',
              'تُنفى الأسماء بـ "kein"، وصيغة المؤنث هي "keine".',
            ),
          },
        ],
        correctIndex: 2,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "When are you coming home?"',
          'Mets les mots dans l\'ordre : « Quand rentres-tu à la maison ? »',
          'رتب الكلمات: "متى تعود إلى البيت؟"',
        ),
        steps: [
          L('Wann', 'Wann', 'Wann'),
          L('kommst', 'kommst', 'kommst'),
          L('du', 'du', 'du'),
          L('nach', 'nach', 'nach'),
          L('Hause', 'Hause', 'Hause'),
        ],
      },
    ],
  },

  // Intermediate — Conversation
  [lessonKey('german', 'intermediate', 'conversation', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To introduce yourself beyond your name, Germans usually say where they come from ("Ich komme aus..."), where they live ("Ich wohne in..."), and what they do ("Ich arbeite als..."). Note that the verb stays in second position in all of these sentences.',
          'Pour te présenter au-delà de ton nom, on dit généralement d\'où l\'on vient (« Ich komme aus... »), où l\'on habite (« Ich wohne in... ») et ce que l\'on fait (« Ich arbeite als... »). Note que le verbe reste en deuxième position dans toutes ces phrases.',
          'لتقديم نفسك بما يتجاوز اسمك، يقول الألمان عادة من أين هم ("Ich komme aus...")، وأين يسكنون ("Ich wohne in...")، وماذا يعملون ("Ich arbeite als..."). لاحظ أن الفعل يبقى في الموضع الثاني في كل هذه الجمل.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Ich komme aus Tunesien." — I come from Tunisia', '« Ich komme aus Tunesien. » — je viens de Tunisie', '"Ich komme aus Tunesien." — أنا من تونس'),
          L('"Ich wohne in Berlin." — I live in Berlin', '« Ich wohne in Berlin. » — j\'habite à Berlin', '"Ich wohne in Berlin." — أسكن في برلين'),
          L('"Ich bin 25 Jahre alt." — I am 25 years old', '« Ich bin 25 Jahre alt. » — j\'ai 25 ans', '"Ich bin 25 Jahre alt." — عمري 25 سنة'),
          L('"Ich arbeite als Lehrer." — I work as a teacher', '« Ich arbeite als Lehrer. » — je travaille comme enseignant', '"Ich arbeite als Lehrer." — أعمل مدرّساً'),
          L('"Meine Hobbys sind Lesen und Sport." — my hobbies are reading and sports', '« Meine Hobbys sind Lesen und Sport. » — mes loisirs sont la lecture et le sport', '"Meine Hobbys sind Lesen und Sport." — هواياتي القراءة والرياضة'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you say "I come from Tunisia"?',
          'Comment dit-on « Je viens de Tunisie » ?',
          'كيف تقول "أنا من تونس"؟',
        ),
        answer: L('"Ich komme aus Tunesien."', '« Ich komme aus Tunesien. »', '"Ich komme aus Tunesien."'),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which sentence tells someone your job?',
          'Quelle phrase indique ton métier ?',
          'أي جملة تخبر أحدهم بمهنتك؟',
        ),
        choices: [
          { text: L('"Ich wohne in Berlin."', '« Ich wohne in Berlin. »', '"Ich wohne in Berlin."') },
          { text: L('"Ich arbeite als Lehrer."', '« Ich arbeite als Lehrer. »', '"Ich arbeite als Lehrer."') },
          { text: L('"Ich bin 25 Jahre alt."', '« Ich bin 25 Jahre alt. »', '"Ich bin 25 Jahre alt."') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "I live in Berlin."',
          'Mets les mots dans l\'ordre : « J\'habite à Berlin. »',
          'رتب الكلمات: "أسكن في برلين."',
        ),
        steps: [
          L('Ich', 'Ich', 'Ich'),
          L('wohne', 'wohne', 'wohne'),
          L('in', 'in', 'in'),
          L('Berlin', 'Berlin', 'Berlin'),
        ],
      },
    ],
  },
  [lessonKey('german', 'intermediate', 'conversation', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To make plans, ask about time with "Hast du am Samstag Zeit?" and suggest activities with "Wollen wir...?" (shall we...?). Accept with "Ja, gerne!" or decline politely with "Leider kann ich nicht."',
          'Pour faire des projets, demande la disponibilité avec « Hast du am Samstag Zeit ? » et propose une activité avec « Wollen wir... ? » (et si on... ?). Accepte avec « Ja, gerne ! » ou décline poliment avec « Leider kann ich nicht. »',
          'لوضع الخطط، اسأل عن الوقت بـ "Hast du am Samstag Zeit?" واقترح الأنشطة بـ "Wollen wir...?" (ما رأيك أن...؟). اقبل بـ "Ja, gerne!" أو اعتذر بأدب بـ "Leider kann ich nicht."',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Hast du am Samstag Zeit?" — do you have time on Saturday?', '« Hast du am Samstag Zeit ? » — as-tu du temps samedi ?', '"Hast du am Samstag Zeit?" — هل لديك وقت يوم السبت؟'),
          L('"Wollen wir ins Kino gehen?" — shall we go to the cinema?', '« Wollen wir ins Kino gehen ? » — et si on allait au cinéma ?', '"Wollen wir ins Kino gehen?" — ما رأيك أن نذهب إلى السينما؟'),
          L('"Ja, gerne!" — yes, gladly!', '« Ja, gerne ! » — oui, avec plaisir !', '"Ja, gerne!" — نعم، بكل سرور!'),
          L('"Leider kann ich nicht." — unfortunately I can\'t', '« Leider kann ich nicht. » — malheureusement je ne peux pas', '"Leider kann ich nicht." — للأسف لا أستطيع'),
          L('"Um wie viel Uhr treffen wir uns?" — at what time shall we meet?', '« Um wie viel Uhr treffen wir uns ? » — à quelle heure se retrouve-t-on ?', '"Um wie viel Uhr treffen wir uns?" — في أي ساعة نلتقي؟'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you decline an invitation politely?',
          'Comment décliner une invitation poliment ?',
          'كيف تعتذر عن دعوة بأدب؟',
        ),
        choices: [
          { text: L('"Nein."', '« Nein. »', '"Nein."') },
          {
            text: L('"Leider kann ich nicht."', '« Leider kann ich nicht. »', '"Leider kann ich nicht."'),
            explanation: L(
              '"Leider" (unfortunately) softens the refusal.',
              '« Leider » (malheureusement) adoucit le refus.',
              '"Leider" (للأسف) تلطّف الرفض.',
            ),
          },
          { text: L('"Warum?"', '« Warum ? »', '"Warum?"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "Shall we go to the cinema?"',
          'Mets les mots dans l\'ordre : « Et si on allait au cinéma ? »',
          'رتب الكلمات: "ما رأيك أن نذهب إلى السينما؟"',
        ),
        steps: [
          L('Wollen', 'Wollen', 'Wollen'),
          L('wir', 'wir', 'wir'),
          L('ins', 'ins', 'ins'),
          L('Kino', 'Kino', 'Kino'),
          L('gehen', 'gehen', 'gehen'),
        ],
      },
    ],
  },
  [lessonKey('german', 'intermediate', 'conversation', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To give an opinion, start with "Ich finde, dass..." (I think that...) or "Meiner Meinung nach..." (in my opinion...). Feelings are usually expressed with "Ich bin..." plus an adjective, and "Das gefällt mir" means you like something.',
          'Pour donner un avis, commence par « Ich finde, dass... » (je trouve que...) ou « Meiner Meinung nach... » (à mon avis...). Les sentiments s\'expriment généralement avec « Ich bin... » plus un adjectif, et « Das gefällt mir » signifie que quelque chose te plaît.',
          'لإبداء رأيك، ابدأ بـ "Ich finde, dass..." (أعتقد أن...) أو "Meiner Meinung nach..." (في رأيي...). يُعبَّر عن المشاعر عادة بـ "Ich bin..." مع صفة، و"Das gefällt mir" تعني أن الشيء يعجبك.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Ich finde, dass..." — I think that...', '« Ich finde, dass... » — je trouve que...', '"Ich finde, dass..." — أعتقد أن...'),
          L('"Meiner Meinung nach..." — in my opinion...', '« Meiner Meinung nach... » — à mon avis...', '"Meiner Meinung nach..." — في رأيي...'),
          L('"Ich bin glücklich." — I am happy', '« Ich bin glücklich. » — je suis heureux/heureuse', '"Ich bin glücklich." — أنا سعيد'),
          L('"Ich bin müde." — I am tired', '« Ich bin müde. » — je suis fatigué(e)', '"Ich bin müde." — أنا متعب'),
          L('"Das gefällt mir." — I like that', '« Das gefällt mir. » — ça me plaît', '"Das gefällt mir." — هذا يعجبني'),
          L('"Ich stimme dir zu." — I agree with you', '« Ich stimme dir zu. » — je suis d\'accord avec toi', '"Ich stimme dir zu." — أتفق معك'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "müde" mean?',
          'Que signifie « müde » ?',
          'ماذا تعني "müde"؟',
        ),
        choices: [
          { text: L('Happy', 'Heureux', 'سعيد') },
          { text: L('Tired', 'Fatigué', 'متعب') },
          { text: L('Angry', 'En colère', 'غاضب') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "In my opinion, that is good." (the verb comes right after the opinion phrase)',
          'Mets les mots dans l\'ordre : « À mon avis, c\'est bien. » (le verbe vient juste après l\'expression d\'opinion)',
          'رتب الكلمات: "في رأيي، هذا جيد." (يأتي الفعل مباشرة بعد عبارة الرأي)',
        ),
        steps: [
          L('Meiner', 'Meiner', 'Meiner'),
          L('Meinung', 'Meinung', 'Meinung'),
          L('nach', 'nach', 'nach'),
          L('ist', 'ist', 'ist'),
          L('das', 'das', 'das'),
          L('gut', 'gut', 'gut'),
        ],
      },
    ],
  },

  // Advanced — Fluency
  [lessonKey('german', 'advanced', 'fluency', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Written stories in German use the "Präteritum" (simple past): "er ging" instead of "er ist gegangen". Good storytellers chain events with connectors like "zuerst", "dann", "danach" — and remember that after each connector the verb still comes second.',
          'Les récits écrits en allemand utilisent le « Präteritum » (passé simple) : « er ging » au lieu de « er ist gegangen ». Un bon narrateur enchaîne les événements avec des connecteurs comme « zuerst », « dann », « danach » — et rappelle-toi qu\'après chaque connecteur, le verbe reste en deuxième position.',
          'تستخدم القصص المكتوبة بالألمانية صيغة "Präteritum" (الماضي البسيط): "er ging" بدلاً من "er ist gegangen". يربط الراوي الجيد الأحداث بروابط مثل "zuerst" و"dann" و"danach" — وتذكر أن الفعل يبقى في الموضع الثاني بعد كل رابط.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Es war einmal..." — once upon a time...', '« Es war einmal... » — il était une fois...', '"Es war einmal..." — كان يا ما كان...'),
          L('"zuerst" — first', '« zuerst » — d\'abord', '"zuerst" — أولاً'),
          L('"dann" — then', '« dann » — puis', '"dann" — ثم'),
          L('"danach" — after that', '« danach » — après cela', '"danach" — بعد ذلك'),
          L('"plötzlich" — suddenly', '« plötzlich » — soudain', '"plötzlich" — فجأة'),
          L('"am Ende" — in the end', '« am Ende » — à la fin', '"am Ende" — في النهاية'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which tense do written German stories usually use?',
          'Quel temps les récits écrits allemands utilisent-ils généralement ?',
          'أي زمن تستخدمه القصص الألمانية المكتوبة عادة؟',
        ),
        choices: [
          {
            text: L('Präteritum', 'Präteritum', 'Präteritum'),
            explanation: L(
              'The simple past is the narrative tense of written German.',
              'Le passé simple est le temps du récit en allemand écrit.',
              'الماضي البسيط هو زمن السرد في الألمانية المكتوبة.',
            ),
          },
          { text: L('Perfekt', 'Perfekt', 'Perfekt') },
          { text: L('Futur', 'Futur', 'Futur') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "Suddenly it started to rain."',
          'Mets les mots dans l\'ordre : « Soudain, il commença à pleuvoir. »',
          'رتب الكلمات: "فجأة بدأ المطر يهطل."',
        ),
        steps: [
          L('Plötzlich', 'Plötzlich', 'Plötzlich'),
          L('begann', 'begann', 'begann'),
          L('es', 'es', 'es'),
          L('zu', 'zu', 'zu'),
          L('regnen', 'regnen', 'regnen'),
        ],
      },
    ],
  },
  [lessonKey('german', 'advanced', 'fluency', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Choosing between "du" and "Sie" is a social decision in German. Use "Sie" (always capitalized) with strangers, officials and at work until offered the "du". Letters and emails also have fixed formal and informal openings and closings.',
          'Choisir entre « du » et « Sie » est une décision sociale en allemand. Utilise « Sie » (toujours avec majuscule) avec les inconnus, l\'administration et au travail, jusqu\'à ce qu\'on te propose le « du ». Les lettres et courriels ont aussi des formules d\'ouverture et de clôture formelles et informelles bien fixées.',
          'الاختيار بين "du" و"Sie" قرار اجتماعي في الألمانية. استخدم "Sie" (وتُكتب دائماً بحرف كبير) مع الغرباء والموظفين الرسميين وفي العمل، حتى يُعرض عليك استخدام "du". وللرسائل أيضاً افتتاحيات وخواتم رسمية وغير رسمية ثابتة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"du" — you (informal)', '« du » — tu (informel)', '"du" — أنتَ (غير رسمي)'),
          L('"Sie" — you (formal, always capitalized)', '« Sie » — vous (formel, toujours avec majuscule)', '"Sie" — حضرتك (رسمي، يُكتب دائماً بحرف كبير)'),
          L('"Wie geht\'s?" — how\'s it going? (informal)', '« Wie geht\'s ? » — ça va ? (informel)', '"Wie geht\'s?" — كيف الحال؟ (غير رسمي)'),
          L('"Wie geht es Ihnen?" — how are you? (formal)', '« Wie geht es Ihnen ? » — comment allez-vous ? (formel)', '"Wie geht es Ihnen?" — كيف حال حضرتك؟ (رسمي)'),
          L('"Sehr geehrte Damen und Herren" — Dear Sir or Madam (formal letters)', '« Sehr geehrte Damen und Herren » — Madame, Monsieur (lettres formelles)', '"Sehr geehrte Damen und Herren" — السادة الأفاضل (في الرسائل الرسمية)'),
          L('"Viele Grüße" — best regards', '« Viele Grüße » — cordialement / amitiés', '"Viele Grüße" — مع أطيب التحيات'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'You meet your new boss. How do you ask how they are?',
          'Tu rencontres ton nouveau chef. Comment demandes-tu comment il va ?',
          'تقابل مديرك الجديد. كيف تسأله عن حاله؟',
        ),
        choices: [
          { text: L('"Wie geht\'s?"', '« Wie geht\'s ? »', '"Wie geht\'s?"') },
          {
            text: L('"Wie geht es Ihnen?"', '« Wie geht es Ihnen ? »', '"Wie geht es Ihnen?"'),
            explanation: L(
              'With a boss you use the formal "Sie" form.',
              'Avec un chef, on utilise la forme formelle « Sie ».',
              'مع المدير تُستخدم صيغة "Sie" الرسمية.',
            ),
          },
          { text: L('"Was machst du?"', '« Was machst du ? »', '"Was machst du?"') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'How does a formal German letter usually begin?',
          'Comment commence généralement une lettre formelle allemande ?',
          'كيف تبدأ الرسالة الألمانية الرسمية عادة؟',
        ),
        choices: [
          { text: L('"Hallo Leute"', '« Hallo Leute »', '"Hallo Leute"') },
          { text: L('"Sehr geehrte Damen und Herren"', '« Sehr geehrte Damen und Herren »', '"Sehr geehrte Damen und Herren"') },
          { text: L('"Wie geht\'s?"', '« Wie geht\'s ? »', '"Wie geht\'s?"') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('german', 'advanced', 'fluency', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Idioms make your German sound natural, but their literal meaning is often funny or absurd. Many involve food or everyday objects — learn the image behind each one and you will remember it.',
          'Les expressions idiomatiques rendent ton allemand naturel, mais leur sens littéral est souvent drôle ou absurde. Beaucoup parlent de nourriture ou d\'objets du quotidien — apprends l\'image derrière chacune et tu t\'en souviendras.',
          'تجعل التعابير الاصطلاحية ألمانيتك طبيعية، لكن معناها الحرفي غالباً ما يكون طريفاً أو غريباً. كثير منها يتعلق بالطعام أو الأشياء اليومية — تعلّم الصورة وراء كل تعبير وستتذكره بسهولة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"Ich drücke dir die Daumen." — literally "I press my thumbs for you" = good luck, fingers crossed', '« Ich drücke dir die Daumen. » — littéralement « je te presse les pouces » = bonne chance, je croise les doigts', '"Ich drücke dir die Daumen." — حرفياً "أضغط إبهاميّ لك" = حظاً موفقاً'),
          L('"Ich verstehe nur Bahnhof." — literally "I only understand train station" = I don\'t understand a thing', '« Ich verstehe nur Bahnhof. » — littéralement « je ne comprends que gare » = je n\'y comprends rien', '"Ich verstehe nur Bahnhof." — حرفياً "لا أفهم إلا محطة القطار" = لا أفهم شيئاً على الإطلاق'),
          L('"Das ist mir Wurst." — literally "that is sausage to me" = I don\'t care', '« Das ist mir Wurst. » — littéralement « c\'est de la saucisse pour moi » = ça m\'est égal', '"Das ist mir Wurst." — حرفياً "هذا سجق بالنسبة لي" = لا يهمني'),
          L('"Tomaten auf den Augen haben" — literally "to have tomatoes on one\'s eyes" = to be oblivious', '« Tomaten auf den Augen haben » — littéralement « avoir des tomates sur les yeux » = ne rien voir d\'évident', '"Tomaten auf den Augen haben" — حرفياً "أن تكون على عينيه طماطم" = لا يرى الواضح أمامه'),
          L('"Die Nase voll haben" — literally "to have the nose full" = to be fed up', '« Die Nase voll haben » — littéralement « avoir le nez plein » = en avoir assez', '"Die Nase voll haben" — حرفياً "أنفه ممتلئ" = ضاق ذرعاً'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "Ich verstehe nur Bahnhof." really mean?',
          'Que signifie réellement « Ich verstehe nur Bahnhof. » ?',
          'ما المعنى الحقيقي لـ "Ich verstehe nur Bahnhof."؟',
        ),
        choices: [
          { text: L('I am at the train station', 'Je suis à la gare', 'أنا في محطة القطار') },
          {
            text: L('I don\'t understand a thing', 'Je n\'y comprends rien', 'لا أفهم شيئاً على الإطلاق'),
            explanation: L(
              'The train station stands for total confusion.',
              'La gare symbolise la confusion totale.',
              'محطة القطار هنا رمز للحيرة التامة.',
            ),
          },
          { text: L('I love traveling', 'J\'adore voyager', 'أحب السفر') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which idiom means "I don\'t care"?',
          'Quelle expression signifie « ça m\'est égal » ?',
          'أي تعبير يعني "لا يهمني"؟',
        ),
        choices: [
          { text: L('"Das ist mir Wurst."', '« Das ist mir Wurst. »', '"Das ist mir Wurst."') },
          { text: L('"Ich drücke dir die Daumen."', '« Ich drücke dir die Daumen. »', '"Ich drücke dir die Daumen."') },
          { text: L('"Die Nase voll haben"', '« Die Nase voll haben »', '"Die Nase voll haben"') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Advanced — Culture
  [lessonKey('german', 'advanced', 'culture', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'German media vocabulary is everywhere in daily life: "die Tagesschau" is the country\'s most-watched TV news, and newspapers like the FAZ or Süddeutsche Zeitung shape public debate. News language often uses "laut..." (according to...) to cite sources.',
          'Le vocabulaire des médias allemands est partout dans la vie quotidienne : « die Tagesschau » est le journal télévisé le plus regardé du pays, et des journaux comme la FAZ ou la Süddeutsche Zeitung façonnent le débat public. La langue de l\'information utilise souvent « laut... » (selon...) pour citer les sources.',
          'مفردات الإعلام الألماني حاضرة في الحياة اليومية: "die Tagesschau" هي نشرة الأخبار التلفزيونية الأكثر مشاهدة في البلاد، وصحف مثل FAZ وSüddeutsche Zeitung تشكّل النقاش العام. وكثيراً ما تستخدم لغة الأخبار "laut..." (وفقاً لـ...) للإشارة إلى المصادر.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"die Nachrichten" — the news', '« die Nachrichten » — les informations', '"die Nachrichten" — الأخبار'),
          L('"die Zeitung" — the newspaper', '« die Zeitung » — le journal', '"die Zeitung" — الجريدة'),
          L('"die Schlagzeile" — the headline', '« die Schlagzeile » — le gros titre', '"die Schlagzeile" — العنوان الرئيسي'),
          L('"der Sender" — the broadcaster / channel', '« der Sender » — la chaîne / le diffuseur', '"der Sender" — القناة / المحطة'),
          L('"die Tagesschau" — Germany\'s most famous TV news program', '« die Tagesschau » — le journal télévisé le plus célèbre d\'Allemagne', '"die Tagesschau" — أشهر نشرة أخبار تلفزيونية في ألمانيا'),
          L('"laut einem Bericht" — according to a report', '« laut einem Bericht » — selon un rapport', '"laut einem Bericht" — وفقاً لتقرير'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is "die Schlagzeile"?',
          'Qu\'est-ce que « die Schlagzeile » ?',
          'ما معنى "die Schlagzeile"؟',
        ),
        choices: [
          { text: L('The headline', 'Le gros titre', 'العنوان الرئيسي') },
          { text: L('The weather forecast', 'La météo', 'نشرة الطقس') },
          { text: L('The journalist', 'Le journaliste', 'الصحفي') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "I read the newspaper every morning."',
          'Mets les mots dans l\'ordre : « Je lis le journal chaque matin. »',
          'رتب الكلمات: "أقرأ الجريدة كل صباح."',
        ),
        steps: [
          L('Ich', 'Ich', 'Ich'),
          L('lese', 'lese', 'lese'),
          L('jeden', 'jeden', 'jeden'),
          L('Morgen', 'Morgen', 'Morgen'),
          L('die', 'die', 'die'),
          L('Zeitung', 'Zeitung', 'Zeitung'),
        ],
      },
    ],
  },
  [lessonKey('german', 'advanced', 'culture', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Work culture in German-speaking countries has its own key words: "die Ausbildung" is the famous dual vocational training system, a "Bewerbung" (application) always includes a "Lebenslauf" (CV — literally "life run"), and "der Feierabend" is the cherished moment the workday ends.',
          'La culture du travail dans les pays germanophones a ses mots clés : « die Ausbildung » désigne le fameux système de formation professionnelle en alternance, une « Bewerbung » (candidature) contient toujours un « Lebenslauf » (CV — littéralement « course de la vie »), et « der Feierabend » est le moment chéri où la journée de travail se termine.',
          'لثقافة العمل في البلدان الناطقة بالألمانية كلماتها المفتاحية: "die Ausbildung" هي نظام التكوين المهني المزدوج الشهير، و"Bewerbung" (طلب التوظيف) يتضمن دائماً "Lebenslauf" (السيرة الذاتية — حرفياً "مسار الحياة")، و"der Feierabend" هو لحظة انتهاء يوم العمل العزيزة على القلوب.',
        ),
      },
      {
        type: 'list',
        items: [
          L('"die Ausbildung" — vocational training / apprenticeship', '« die Ausbildung » — la formation professionnelle / l\'apprentissage', '"die Ausbildung" — التكوين المهني'),
          L('"das Praktikum" — the internship', '« das Praktikum » — le stage', '"das Praktikum" — التدريب'),
          L('"die Bewerbung" — the job application', '« die Bewerbung » — la candidature', '"die Bewerbung" — طلب التوظيف'),
          L('"der Lebenslauf" — the CV (literally: life run)', '« der Lebenslauf » — le CV (littéralement : course de la vie)', '"der Lebenslauf" — السيرة الذاتية (حرفياً: مسار الحياة)'),
          L('"das Vorstellungsgespräch" — the job interview', '« das Vorstellungsgespräch » — l\'entretien d\'embauche', '"das Vorstellungsgespräch" — مقابلة العمل'),
          L('"der Feierabend" — the end of the workday', '« der Feierabend » — la fin de la journée de travail', '"der Feierabend" — نهاية يوم العمل'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is "der Lebenslauf"?',
          'Qu\'est-ce que « der Lebenslauf » ?',
          'ما معنى "der Lebenslauf"؟',
        ),
        choices: [
          {
            text: L('The CV', 'Le CV', 'السيرة الذاتية'),
            explanation: L(
              'Literally "life run" — the document listing your career.',
              'Littéralement « course de la vie » — le document qui retrace ton parcours.',
              'حرفياً "مسار الحياة" — الوثيقة التي تسرد مسيرتك.',
            ),
          },
          { text: L('The salary', 'Le salaire', 'الراتب') },
          { text: L('The office', 'Le bureau', 'المكتب') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "I have a job interview tomorrow."',
          'Mets les mots dans l\'ordre : « J\'ai un entretien d\'embauche demain. »',
          'رتب الكلمات: "عندي مقابلة عمل غداً."',
        ),
        steps: [
          L('Ich', 'Ich', 'Ich'),
          L('habe', 'habe', 'habe'),
          L('morgen', 'morgen', 'morgen'),
          L('ein', 'ein', 'ein'),
          L('Vorstellungsgespräch', 'Vorstellungsgespräch', 'Vorstellungsgespräch'),
        ],
      },
    ],
  },
  [lessonKey('german', 'advanced', 'culture', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Daily life in Germany comes with its own vocabulary: "das Pfand" is the deposit you get back for returning bottles, "die Sonntagsruhe" means most shops are closed on Sundays, and train travel with "die Bahn" often involves "umsteigen" (changing trains).',
          'La vie quotidienne en Allemagne a son propre vocabulaire : « das Pfand » est la consigne remboursée quand tu rapportes les bouteilles, « die Sonntagsruhe » signifie que la plupart des magasins sont fermés le dimanche, et voyager avec « die Bahn » implique souvent de « umsteigen » (changer de train).',
          'للحياة اليومية في ألمانيا مفرداتها الخاصة: "das Pfand" هو مبلغ التأمين الذي تسترده عند إعادة العبوات، و"die Sonntagsruhe" تعني أن معظم المتاجر مغلقة أيام الأحد، والسفر بالقطار مع "die Bahn" كثيراً ما يتطلب "umsteigen" (تغيير القطار).',
        ),
      },
      {
        type: 'list',
        items: [
          L('"die Bahn" — the train / railway', '« die Bahn » — le train / les chemins de fer', '"die Bahn" — القطار / السكك الحديدية'),
          L('"das Pfand" — the bottle deposit', '« das Pfand » — la consigne sur les bouteilles', '"das Pfand" — تأمين العبوات المسترد'),
          L('"der Fahrplan" — the timetable', '« der Fahrplan » — l\'horaire', '"der Fahrplan" — جدول المواعيد'),
          L('"die Sonntagsruhe" — Sunday rest (shops are closed)', '« die Sonntagsruhe » — le repos dominical (magasins fermés)', '"die Sonntagsruhe" — راحة يوم الأحد (المتاجر مغلقة)'),
          L('"eine Fahrkarte kaufen" — to buy a ticket', '« eine Fahrkarte kaufen » — acheter un billet', '"eine Fahrkarte kaufen" — شراء تذكرة'),
          L('"umsteigen" — to change trains', '« umsteigen » — changer de train', '"umsteigen" — تغيير القطار'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does "die Sonntagsruhe" mean for shoppers in Germany?',
          'Que signifie « die Sonntagsruhe » pour les clients en Allemagne ?',
          'ماذا تعني "die Sonntagsruhe" للمتسوقين في ألمانيا؟',
        ),
        choices: [
          {
            text: L(
              'Most shops are closed on Sundays',
              'La plupart des magasins sont fermés le dimanche',
              'معظم المتاجر مغلقة أيام الأحد',
            ),
            explanation: L(
              'Sunday rest is protected by law in Germany.',
              'Le repos dominical est protégé par la loi en Allemagne.',
              'راحة يوم الأحد يحميها القانون في ألمانيا.',
            ),
          },
          { text: L('Shops offer Sunday discounts', 'Les magasins offrent des remises le dimanche', 'تقدم المتاجر تخفيضات يوم الأحد') },
          { text: L('Trains do not run on Sundays', 'Les trains ne circulent pas le dimanche', 'لا تعمل القطارات أيام الأحد') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the words in order: "Where can I buy a ticket?"',
          'Mets les mots dans l\'ordre : « Où puis-je acheter un billet ? »',
          'رتب الكلمات: "أين يمكنني شراء تذكرة؟"',
        ),
        steps: [
          L('Wo', 'Wo', 'Wo'),
          L('kann', 'kann', 'kann'),
          L('ich', 'ich', 'ich'),
          L('eine', 'eine', 'eine'),
          L('Fahrkarte', 'Fahrkarte', 'Fahrkarte'),
          L('kaufen', 'kaufen', 'kaufen'),
        ],
      },
    ],
  },
}
