import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

export const mathematicsLessons: Record<string, LessonContent> = {
  // Primary — Counting
  [lessonKey('mathematics', 'primary', 'counting', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A number tells us how many things there are. We use digits 0, 1, 2, 3, and so on to write numbers.',
          'Un nombre indique combien il y a de choses. Nous utilisons les chiffres 0, 1, 2, 3, etc. pour écrire les nombres.',
          'العدد يخبرنا بعدد الأشياء. نستخدم الأرقام ٠ و١ و٢ و٣ وما بعدها لكتابة الأعداد.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Zero means none.', 'Zéro signifie aucun.', 'الصفر يعني لا شيء.'),
          L('Each digit has a place value.', 'Chaque chiffre a une valeur de position.', 'لكل رقم قيمة مكانية.'),
          L('Numbers help us count and order things.', 'Les nombres nous aident à compter et à classer.', 'الأعداد تساعدنا على العد والترتيب.'),
        ],
      },
      { type: 'counter', count: 5 },
      {
        type: 'example',
        question: L(
          'How many fingers on one hand?',
          'Combien de doigts sur une main ?',
          'كم إصبعاً في يد واحدة؟',
        ),
        answer: L('Five (5).', 'Cinq (5).', 'خمسة (٥).'),
      },
    ],
  },
  [lessonKey('mathematics', 'primary', 'counting', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'To count objects, touch each one once and say the next number. The last number you say is the total.',
          'Pour compter des objets, touche chacun une seule fois et dis le nombre suivant. Le dernier nombre dit est le total.',
          'لعدّ الأشياء، المس كل شيء مرة واحدة وقل العدد التالي. آخر عدد تقوله هو المجموع.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Count slowly and carefully.', 'Compte lentement et avec soin.', 'عدّ ببطء وبحرص.'),
          L('Do not skip or count twice.', 'Ne saute pas et ne compte pas deux fois.', 'لا تتخطّ ولا تعدّ مرتين.'),
          L('Group objects to count faster.', 'Regroupe les objets pour compter plus vite.', 'جمّع الأشياء لتعدّ أسرع.'),
        ],
      },
      { type: 'counter', count: 8 },
      {
        type: 'example',
        question: L(
          'Count: 3 apples and 2 apples together.',
          'Compte : 3 pommes et 2 pommes ensemble.',
          'عدّ: ٣ تفاحات و٢ تفاحة معاً.',
        ),
        answer: L('3 + 2 = 5 apples.', '3 + 2 = 5 pommes.', '٣ + ٢ = ٥ تفاحات.'),
      },
    ],
  },
  [lessonKey('mathematics', 'primary', 'counting', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'We compare quantities to see which group has more, less, or the same amount.',
          'Nous comparons les quantités pour voir quel groupe en a plus, moins ou autant.',
          'نقارن الكميات لنعرف أي مجموعة فيها أكثر أو أقل أو نفس العدد.',
        ),
      },
      {
        type: 'list',
        items: [
          L('More means a larger amount.', 'Plus signifie une quantité plus grande.', 'أكثر يعني كمية أكبر.'),
          L('Less means a smaller amount.', 'Moins signifie une quantité plus petite.', 'أقل يعني كمية أصغر.'),
          L('Equal means the same amount.', 'Égal signifie la même quantité.', 'متساوٍ يعني نفس الكمية.'),
        ],
      },
      { type: 'compare', left: 7, right: 4 },
      {
        type: 'example',
        question: L(
          'Which is greater: 6 or 9?',
          'Lequel est plus grand : 6 ou 9 ?',
          'أيهما أكبر: ٦ أم ٩؟',
        ),
        answer: L('9 is greater than 6.', '9 est plus grand que 6.', '٩ أكبر من ٦.'),
      },
    ],
  },

  // Primary — Shapes
  [lessonKey('mathematics', 'primary', 'shapes', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Shapes are flat figures we see everywhere: circles, squares, and triangles are basic shapes.',
          'Les formes sont des figures planes que l\'on voit partout : cercles, carrés et triangles sont des formes de base.',
          'الأشكال هي أشكال مسطحة نراها في كل مكان: الدائرة والمربع والمثلث أشكال أساسية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('A circle is round with no corners.', 'Un cercle est rond sans coins.', 'الدائرة مستديرة بلا زوايا.'),
          L('A square has four equal sides.', 'Un carré a quatre côtés égaux.', 'المربع له أربعة أضلاع متساوية.'),
          L('A triangle has three sides.', 'Un triangle a trois côtés.', 'المثلث له ثلاثة أضلاع.'),
        ],
      },
      { type: 'shapes', shapes: ['circle', 'square', 'triangle'] },
      {
        type: 'example',
        question: L(
          'Which shape has three sides?',
          'Quelle forme a trois côtés ?',
          'أي شكل له ثلاثة أضلاع؟',
        ),
        answer: L('A triangle.', 'Un triangle.', 'المثلث.'),
      },
    ],
  },
  [lessonKey('mathematics', 'primary', 'shapes', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A pattern repeats the same shapes or colors in a regular order.',
          'Un motif répète les mêmes formes ou couleurs dans un ordre régulier.',
          'النمط يكرّر نفس الأشكال أو الألوان بترتيب منتظم.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Look for what repeats.', 'Cherche ce qui se répète.', 'ابحث عما يتكرّر.'),
          L('Patterns can use shapes, colors, or sizes.', 'Les motifs peuvent utiliser formes, couleurs ou tailles.', 'قد يستخدم النمط أشكالاً أو ألواناً أو أحجاماً.'),
          L('Continue the pattern to find what comes next.', 'Continue le motif pour trouver la suite.', 'تابع النمط لمعرفة ما يلي.'),
        ],
      },
      { type: 'shapes', shapes: ['circle', 'square', 'circle', 'square'] },
      {
        type: 'example',
        question: L(
          'Pattern: triangle, circle, triangle, circle. What comes next?',
          'Motif : triangle, cercle, triangle, cercle. Quelle est la suite ?',
          'النمط: مثلث، دائرة، مثلث، دائرة. ماذا يلي؟',
        ),
        answer: L('Triangle.', 'Triangle.', 'مثلث.'),
      },
    ],
  },
  [lessonKey('mathematics', 'primary', 'shapes', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Symmetry means one half of a shape matches the other half when folded along a line.',
          'La symétrie signifie qu\'une moitié de la forme correspond à l\'autre quand on la plie le long d\'une ligne.',
          'التناظر يعني أن نصف الشكل يطابق النصف الآخر عند طيه على خط.',
        ),
      },
      {
        type: 'list',
        items: [
          L('The fold line is the line of symmetry.', 'La ligne de pliage est l\'axe de symétrie.', 'خط الطي هو محور التناظر.'),
          L('Butterfly wings are often symmetrical.', 'Les ailes de papillon sont souvent symétriques.', 'أجنحة الفراشة غالباً متناظرة.'),
          L('Some shapes have more than one line of symmetry.', 'Certaines formes ont plus d\'un axe de symétrie.', 'بعض الأشكال لها أكثر من محور تناظر.'),
        ],
      },
      { type: 'shapes', shapes: ['square', 'circle', 'triangle'] },
      {
        type: 'example',
        question: L(
          'Does a square have symmetry?',
          'Un carré a-t-il de la symétrie ?',
          'هل للمربع تناظر؟',
        ),
        answer: L('Yes, it has four lines of symmetry.', 'Oui, il a quatre axes de symétrie.', 'نعم، له أربعة محاور تناظر.'),
      },
    ],
  },

  // Primary — Operations
  [lessonKey('mathematics', 'primary', 'operations', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Addition combines two groups to find the total. The plus sign (+) means "add together".',
          'L\'addition combine deux groupes pour trouver le total. Le signe plus (+) signifie « additionner ».',
          'الجمع يدمج مجموعتين لإيجاد المجموع. علامة الزائد (+) تعني « اجمع ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('Start with the larger number and count on.', 'Commence par le plus grand nombre et compte en avançant.', 'ابدأ بالعدد الأكبر وعدّ للأمام.'),
          L('4 + 3 means 4 then 3 more.', '4 + 3 signifie 4 puis 3 de plus.', '٤ + ٣ تعني ٤ ثم ٣ إضافية.'),
          L('The answer is called the sum.', 'La réponse s\'appelle la somme.', 'الجواب يُسمى المجموع.'),
        ],
      },
      { type: 'counter', count: 7 },
      {
        type: 'example',
        question: L('What is 5 + 2?', 'Combien font 5 + 2 ?', 'كم يساوي ٥ + ٢؟'),
        answer: L('7', '7', '٧'),
      },
    ],
  },
  [lessonKey('mathematics', 'primary', 'operations', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Subtraction finds how many are left when we take some away. The minus sign (−) means "take away".',
          'La soustraction trouve combien il reste quand on en retire. Le signe moins (−) signifie « retirer ».',
          'الطرح يجد كم يبقى عندما نأخذ بعضاً. علامة الناقص (−) تعني « اطرح ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('Start with the whole group.', 'Commence par le groupe entier.', 'ابدأ بالمجموعة كاملة.'),
          L('Take away the smaller number.', 'Retire le plus petit nombre.', 'اطرح العدد الأصغر.'),
          L('The answer is called the difference.', 'La réponse s\'appelle la différence.', 'الجواب يُسمى الفرق.'),
        ],
      },
      { type: 'compare', left: 9, right: 4 },
      {
        type: 'example',
        question: L('What is 8 − 3?', 'Combien font 8 − 3 ?', 'كم يساوي ٨ − ٣؟'),
        answer: L('5', '5', '٥'),
      },
    ],
  },
  [lessonKey('mathematics', 'primary', 'operations', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Word problems tell a story with numbers. Read carefully to decide whether to add or subtract.',
          'Les problèmes racontent une histoire avec des nombres. Lis attentivement pour choisir addition ou soustraction.',
          'المسائل اللفظية تحكي قصة بأعداد. اقرأ بعناية لتقرر هل تجمع أم تطرح.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Find the numbers in the story.', 'Trouve les nombres dans l\'histoire.', 'جد الأعداد في القصة.'),
          L('Add when things come together.', 'Additionne quand les choses se réunissent.', 'اجمع عندما تتجمّع الأشياء.'),
          L('Subtract when things are taken away.', 'Soustrais quand on retire des choses.', 'اطرح عندما تُؤخذ أشياء.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Ali has 6 marbles. He gets 4 more. How many now?',
          'Ali a 6 billes. Il en reçoit 4 de plus. Combien en a-t-il ?',
          'علي لديه ٦ كرات. حصل على ٤ إضافية. كم لديه الآن؟',
        ),
        answer: L('6 + 4 = 10 marbles.', '6 + 4 = 10 billes.', '٦ + ٤ = ١٠ كرات.'),
      },
      { type: 'counter', count: 10 },
    ],
  },

  // Middle — Ratios
  [lessonKey('mathematics', 'middle', 'ratios', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A ratio compares two quantities. We write it as a : b, read "a to b".',
          'Un ratio compare deux quantités. On l\'écrit a : b, lu « a pour b ».',
          'النسبة تقارن كميتين. نكتبها a : b، وتُقرأ « a إلى b ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('Ratios do not use units.', 'Les ratios n\'utilisent pas d\'unités.', 'النسب لا تستخدم وحدات.'),
          L('Order matters: 2 : 3 is not the same as 3 : 2.', 'L\'ordre compte : 2 : 3 n\'est pas 3 : 2.', 'الترتيب مهم: ٢ : ٣ ليست ٣ : ٢.'),
          L('Simplify ratios like fractions.', 'Simplifie les ratios comme les fractions.', 'بسّط النسب كما تبسّط الكسور.'),
        ],
      },
      { type: 'ratio', a: 2, b: 3 },
      {
        type: 'example',
        question: L(
          'A class has 10 boys and 15 girls. What is the ratio of boys to girls?',
          'Une classe a 10 garçons et 15 filles. Quel est le ratio garçons : filles ?',
          'في صف ١٠ أولاد و١٥ بنات. ما نسبة الأولاد إلى البنات؟',
        ),
        answer: L('10 : 15 = 2 : 3', '10 : 15 = 2 : 3', '١٠ : ١٥ = ٢ : ٣'),
      },
    ],
  },
  [lessonKey('mathematics', 'middle', 'ratios', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A percentage is a ratio out of 100. The symbol % means "per hundred".',
          'Un pourcentage est un ratio sur 100. Le symbole % signifie « pour cent ».',
          'النسبة المئوية هي نسبة من ١٠٠. الرمز % يعني « من مئة ».',
        ),
      },
      {
        type: 'list',
        items: [
          L('50% means half.', '50 % signifie la moitié.', '٥٠٪ تعني النصف.'),
          L('100% means the whole.', '100 % signifie le tout.', '١٠٠٪ تعني الكل.'),
          L('To convert: divide by 100.', 'Pour convertir : divise par 100.', 'للتحويل: اقسم على ١٠٠.'),
        ],
      },
      { type: 'ratio', a: 25, b: 75 },
      {
        type: 'example',
        question: L(
          'What is 20% of 50?',
          'Combien font 20 % de 50 ?',
          'كم يساوي ٢٠٪ من ٥٠؟',
        ),
        answer: L('10', '10', '١٠'),
      },
    ],
  },
  [lessonKey('mathematics', 'middle', 'ratios', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Proportional reasoning uses equivalent ratios. If two ratios are equal, we can scale them.',
          'Le raisonnement proportionnel utilise des ratios équivalents. Si deux ratios sont égaux, on peut les mettre à l\'échelle.',
          'التفكير التناسبي يستخدم نسباً متكافئة. إذا تساوت نسبتان، يمكننا تكبيرها أو تصغيرها.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Cross-multiply to check equality.', 'Multiplie en croix pour vérifier l\'égalité.', 'اضرب تبادلياً للتحقق من التساوي.'),
          L('Scale up or down to solve problems.', 'Agrandis ou réduis pour résoudre.', 'كبّر أو صغّر لحل المسائل.'),
          L('Unit rate compares to one unit.', 'Le taux unitaire compare à une unité.', 'المعدل الوحدوي يقارن بوحدة واحدة.'),
        ],
      },
      { type: 'ratio', a: 3, b: 6 },
      {
        type: 'example',
        question: L(
          'If 2 pens cost 4 dinars, how much for 5 pens?',
          'Si 2 stylos coûtent 4 dinars, combien pour 5 stylos ?',
          'إذا كلف قلمان ٤ دنانير، كم تكلف ٥ أقلام؟',
        ),
        answer: L('10 dinars.', '10 dinars.', '١٠ دنانير.'),
      },
    ],
  },

  // Middle — Algebra
  [lessonKey('mathematics', 'middle', 'algebra', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A variable is a letter that stands for an unknown number, like x or n.',
          'Une variable est une lettre qui représente un nombre inconnu, comme x ou n.',
          'المتغير حرف يمثل عدداً مجهولاً، مثل x أو n.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Variables let us write general rules.', 'Les variables permettent d\'écrire des règles générales.', 'المتغيرات تسمح بكتابة قواعد عامة.'),
          L('The same letter keeps the same value in one problem.', 'La même lettre garde la même valeur dans un problème.', 'نفس الحرف يحتفظ بنفس القيمة في مسألة واحدة.'),
          L('We solve to find the variable\'s value.', 'On résout pour trouver la valeur de la variable.', 'نحل لإيجاد قيمة المتغير.'),
        ],
      },
      { type: 'numberLine', start: 0, end: 10, mark: 7 },
      {
        type: 'example',
        question: L(
          'If x + 3 = 10, what is x?',
          'Si x + 3 = 10, que vaut x ?',
          'إذا كان x + ٣ = ١٠، فما قيمة x؟',
        ),
        answer: L('x = 7', 'x = 7', 'x = ٧'),
      },
    ],
  },
  [lessonKey('mathematics', 'middle', 'algebra', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A linear expression combines numbers and variables using + and −, without powers.',
          'Une expression linéaire combine nombres et variables avec + et −, sans puissances.',
          'التعبير الخطي يجمع أعداداً ومتغيرات بـ + و −، بلا أسس.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Like terms have the same variable.', 'Les termes semblables ont la même variable.', 'الحدود المتشابهة لها نفس المتغير.'),
          L('Combine like terms: 2x + 3x = 5x.', 'Combine les termes : 2x + 3x = 5x.', 'اجمع الحدود: ٢x + ٣x = ٥x.'),
          L('Constants are terms without variables.', 'Les constantes sont des termes sans variable.', 'الثوابت حدود بلا متغير.'),
        ],
      },
      { type: 'numberLine', start: -5, end: 5, mark: 2 },
      {
        type: 'example',
        question: L(
          'Simplify: 4x + 2 + x − 1',
          'Simplifie : 4x + 2 + x − 1',
          'بسّط: ٤x + ٢ + x − ١',
        ),
        answer: L('5x + 1', '5x + 1', '٥x + ١'),
      },
    ],
  },
  [lessonKey('mathematics', 'middle', 'algebra', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'An equation says two expressions are equal. Solve by doing the same operation on both sides.',
          'Une équation dit que deux expressions sont égales. Résous en faisant la même opération des deux côtés.',
          'المعادلة تقول إن تعبيرين متساويان. احل بإجراء نفس العملية على الطرفين.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Isolate the variable on one side.', 'Isole la variable d\'un côté.', 'اعزل المتغير في طرف.'),
          L('Undo addition with subtraction.', 'Annule l\'addition par la soustraction.', 'ألغِ الجمع بالطرح.'),
          L('Check your answer by substituting.', 'Vérifie en remplaçant la variable.', 'تحقق بتعويض المتغير.'),
        ],
      },
      { type: 'compare', left: 12, right: 12 },
      {
        type: 'example',
        question: L(
          'Solve: 2n − 4 = 10',
          'Résous : 2n − 4 = 10',
          'احل: ٢n − ٤ = ١٠',
        ),
        answer: L('n = 7', 'n = 7', 'n = ٧'),
      },
    ],
  },

  // Middle — Geometry
  [lessonKey('mathematics', 'middle', 'geometry', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'An angle is formed where two lines meet. We measure angles in degrees (°).',
          'Un angle se forme où deux droites se rencontrent. On mesure les angles en degrés (°).',
          'الزاوية تتكون حيث يلتقي خطان. نقيس الزوايا بالدرجات (°).',
        ),
      },
      {
        type: 'list',
        items: [
          L('A right angle is exactly 90°.', 'Un angle droit fait exactement 90°.', 'الزاوية القائمة ٩٠° بالضبط.'),
          L('An acute angle is less than 90°.', 'Un angle aigu est inférieur à 90°.', 'الزاوية الحادة أقل من ٩٠°.'),
          L('An obtuse angle is between 90° and 180°.', 'Un angle obtus est entre 90° et 180°.', 'الزاوية المنفرجة بين ٩٠° و١٨٠°.'),
        ],
      },
      { type: 'shapes', shapes: ['triangle', 'square', 'triangle'] },
      {
        type: 'example',
        question: L(
          'What type of angle is 45°?',
          'Quel type d\'angle fait 45° ?',
          'ما نوع زاوية ٤٥°؟',
        ),
        answer: L('Acute.', 'Aigu.', 'حادة.'),
      },
    ],
  },
  [lessonKey('mathematics', 'middle', 'geometry', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Perimeter is the distance around a shape. Area is the space inside a flat shape.',
          'Le périmètre est la distance autour d\'une forme. L\'aire est l\'espace à l\'intérieur d\'une forme plane.',
          'المحيط المسافة حول الشكل. المساحة الفضاء داخل الشكل المسطح.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Rectangle area = length × width.', 'Aire du rectangle = longueur × largeur.', 'مساحة المستطيل = الطول × العرض.'),
          L('Rectangle perimeter = 2 × (length + width).', 'Périmètre = 2 × (longueur + largeur).', 'المحيط = ٢ × (الطول + العرض).'),
          L('Area is measured in square units.', 'L\'aire se mesure en unités carrées.', 'المساحة تُقاس بوحدات مربعة.'),
        ],
      },
      { type: 'shapes', shapes: ['square', 'square'] },
      {
        type: 'example',
        question: L(
          'A rectangle is 5 cm by 3 cm. What is its area?',
          'Un rectangle fait 5 cm sur 3 cm. Quelle est son aire ?',
          'مستطيل طوله ٥ سم وعرضه ٣ سم. ما مساحته؟',
        ),
        answer: L('15 cm²', '15 cm²', '١٥ سم²'),
      },
    ],
  },
  [lessonKey('mathematics', 'middle', 'geometry', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Volume measures the space inside a 3D object. For a box: volume = length × width × height.',
          'Le volume mesure l\'espace dans un objet 3D. Pour un pavé : volume = longueur × largeur × hauteur.',
          'الحجم يقيس الفضاء داخل جسم ثلاثي الأبعاد. للمتوازي المستطيل: الحجم = الطول × العرض × الارتفاع.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Volume uses cubic units (cm³, m³).', 'Le volume utilise des unités cubiques (cm³, m³).', 'الحجم يستخدم وحدات مكعبة (سم³، م³).'),
          L('A cube has equal length, width, and height.', 'Un cube a longueur, largeur et hauteur égales.', 'المكعب له طول وعرض وارتفاع متساويان.'),
          L('Volume of cube = side³.', 'Volume du cube = côté³.', 'حجم المكعب = طول الضلع³.'),
        ],
      },
      { type: 'shapes', shapes: ['square', 'square', 'square'] },
      {
        type: 'example',
        question: L(
          'A cube has side 2 cm. What is its volume?',
          'Un cube a un côté de 2 cm. Quel est son volume ?',
          'مكعب طول ضلعه ٢ سم. ما حجمه؟',
        ),
        answer: L('8 cm³', '8 cm³', '٨ سم³'),
      },
    ],
  },
}
