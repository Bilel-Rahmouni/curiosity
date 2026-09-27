import { lessonKey, localized as L } from '../types'
import type { LessonBlock } from '../types'

// Practice exercises appended to the primary and middle mathematics lessons.
export const mathematicsExercises: Record<string, LessonBlock[]> = {
  // Primary — Counting
  [lessonKey('mathematics', 'primary', 'counting', '01')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L(
        'How many fingers are on two hands?',
        'Combien de doigts sur deux mains ?',
        'كم إصبعاً في يدين؟',
      ),
      choices: [
        { text: L('5', '5', '٥') },
        {
          text: L('10', '10', '١٠'),
          explanation: L(
            '5 fingers + 5 fingers = 10.',
            '5 doigts + 5 doigts = 10.',
            '٥ أصابع + ٥ أصابع = ١٠.',
          ),
        },
        { text: L('2', '2', '٢') },
      ],
      correctIndex: 1,
    },
    {
      type: 'numericInput',
      id: 'ex2',
      prompt: L(
        'Write the number that means none.',
        'Écris le nombre qui signifie aucun.',
        'اكتب العدد الذي يعني لا شيء.',
      ),
      answer: 0,
    },
  ],
  [lessonKey('mathematics', 'primary', 'counting', '02')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        '3 apples and 4 apples together. How many apples?',
        '3 pommes et 4 pommes ensemble. Combien de pommes ?',
        '٣ تفاحات و٤ تفاحات معاً. كم تفاحة؟',
      ),
      answer: 7,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'What helps you count a big group faster?',
        'Qu\'est-ce qui aide à compter un grand groupe plus vite ?',
        'ما الذي يساعدك على عدّ مجموعة كبيرة أسرع؟',
      ),
      choices: [
        {
          text: L('Group the objects', 'Regrouper les objets', 'تجميع الأشياء'),
          explanation: L(
            'Counting in groups of 2, 5, or 10 is faster.',
            'Compter par groupes de 2, 5 ou 10 est plus rapide.',
            'العدّ بمجموعات من ٢ أو ٥ أو ١٠ أسرع.',
          ),
        },
        { text: L('Skip some objects', 'Sauter des objets', 'تخطي بعض الأشياء') },
        { text: L('Count twice', 'Compter deux fois', 'العدّ مرتين') },
      ],
      correctIndex: 0,
    },
  ],
  [lessonKey('mathematics', 'primary', 'counting', '03')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L('Which is greater: 12 or 8?', 'Lequel est plus grand : 12 ou 8 ?', 'أيهما أكبر: ١٢ أم ٨؟'),
      choices: [
        { text: L('12', '12', '١٢') },
        { text: L('8', '8', '٨') },
      ],
      correctIndex: 0,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'Choose the correct sign: 5 __ 5',
        'Choisis le bon signe : 5 __ 5',
        'اختر العلامة الصحيحة: ٥ __ ٥',
      ),
      choices: [
        { text: L('>', '>', '>') },
        { text: L('<', '<', '<') },
        {
          text: L('=', '=', '='),
          explanation: L(
            'Both sides are the same amount.',
            'Les deux côtés sont égaux.',
            'الطرفان متساويان.',
          ),
        },
      ],
      correctIndex: 2,
    },
  ],

  // Primary — Shapes
  [lessonKey('mathematics', 'primary', 'shapes', '01')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L(
        'Which shape is round with no corners?',
        'Quelle forme est ronde sans coins ?',
        'أي شكل مستدير بلا زوايا؟',
      ),
      choices: [
        { text: L('Circle', 'Cercle', 'الدائرة') },
        { text: L('Square', 'Carré', 'المربع') },
        { text: L('Triangle', 'Triangle', 'المثلث') },
      ],
      correctIndex: 0,
    },
    {
      type: 'numericInput',
      id: 'ex2',
      prompt: L(
        'How many sides does a square have?',
        'Combien de côtés a un carré ?',
        'كم ضلعاً للمربع؟',
      ),
      answer: 4,
    },
  ],
  [lessonKey('mathematics', 'primary', 'shapes', '02')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L(
        'Pattern: circle, square, circle, square, … What comes next?',
        'Motif : cercle, carré, cercle, carré, … Quelle est la suite ?',
        'النمط: دائرة، مربع، دائرة، مربع، … ماذا يلي؟',
      ),
      choices: [
        { text: L('Circle', 'Cercle', 'دائرة') },
        { text: L('Square', 'Carré', 'مربع') },
        { text: L('Triangle', 'Triangle', 'مثلث') },
      ],
      correctIndex: 0,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'Pattern: square, square, triangle, square, square, … What comes next?',
        'Motif : carré, carré, triangle, carré, carré, … Quelle est la suite ?',
        'النمط: مربع، مربع، مثلث، مربع، مربع، … ماذا يلي؟',
      ),
      choices: [
        { text: L('Square', 'Carré', 'مربع') },
        {
          text: L('Triangle', 'Triangle', 'مثلث'),
          explanation: L(
            'The pattern repeats: square, square, triangle.',
            'Le motif se répète : carré, carré, triangle.',
            'النمط يتكرر: مربع، مربع، مثلث.',
          ),
        },
        { text: L('Circle', 'Cercle', 'دائرة') },
      ],
      correctIndex: 1,
    },
  ],
  [lessonKey('mathematics', 'primary', 'shapes', '03')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L(
        'How many lines of symmetry does a square have?',
        'Combien d\'axes de symétrie a un carré ?',
        'كم محور تناظر للمربع؟',
      ),
      choices: [
        { text: L('1', '1', '١') },
        { text: L('2', '2', '٢') },
        { text: L('4', '4', '٤') },
      ],
      correctIndex: 2,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'A butterfly\'s wings are usually…',
        'Les ailes d\'un papillon sont généralement…',
        'أجنحة الفراشة عادةً…',
      ),
      choices: [
        { text: L('Symmetrical', 'Symétriques', 'متناظرة') },
        { text: L('Different sizes', 'De tailles différentes', 'بأحجام مختلفة') },
      ],
      correctIndex: 0,
    },
  ],

  // Primary — Operations
  [lessonKey('mathematics', 'primary', 'operations', '01')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L('What is 6 + 3?', 'Combien font 6 + 3 ?', 'كم يساوي ٦ + ٣؟'),
      answer: 9,
    },
    {
      type: 'numericInput',
      id: 'ex2',
      prompt: L('What is 4 + 7?', 'Combien font 4 + 7 ?', 'كم يساوي ٤ + ٧؟'),
      answer: 11,
      hint: L(
        'Start at 7 and count on 4 more.',
        'Pars de 7 et compte 4 de plus.',
        'ابدأ من ٧ وعدّ ٤ إضافية.',
      ),
    },
  ],
  [lessonKey('mathematics', 'primary', 'operations', '02')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L('What is 10 − 6?', 'Combien font 10 − 6 ?', 'كم يساوي ١٠ − ٦؟'),
      answer: 4,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'The answer of a subtraction is called the…',
        'La réponse d\'une soustraction s\'appelle la…',
        'جواب الطرح يُسمى…',
      ),
      choices: [
        { text: L('Sum', 'Somme', 'المجموع') },
        { text: L('Difference', 'Différence', 'الفرق') },
        { text: L('Product', 'Produit', 'الناتج') },
      ],
      correctIndex: 1,
    },
  ],
  [lessonKey('mathematics', 'primary', 'operations', '03')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        'Sara has 12 pencils. She gives 5 to a friend. How many are left?',
        'Sara a 12 crayons. Elle en donne 5 à une amie. Combien en reste-t-il ?',
        'لدى سارة ١٢ قلماً. أعطت ٥ لصديقتها. كم بقي؟',
      ),
      answer: 7,
    },
    {
      type: 'orderSteps',
      id: 'ex2',
      prompt: L(
        'Put the steps for solving a word problem in order.',
        'Mets dans l\'ordre les étapes pour résoudre un problème.',
        'رتّب خطوات حل المسألة اللفظية.',
      ),
      steps: [
        L('Read the story carefully', 'Lis l\'histoire attentivement', 'اقرأ القصة بعناية'),
        L('Find the numbers', 'Trouve les nombres', 'جد الأعداد'),
        L('Choose add or subtract', 'Choisis addition ou soustraction', 'اختر الجمع أو الطرح'),
        L('Compute the answer', 'Calcule la réponse', 'احسب الجواب'),
      ],
    },
  ],

  // Middle — Ratios
  [lessonKey('mathematics', 'middle', 'ratios', '01')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L(
        'Simplify the ratio 10 : 15.',
        'Simplifie le ratio 10 : 15.',
        'بسّط النسبة ١٠ : ١٥.',
      ),
      choices: [
        { text: L('2 : 3', '2 : 3', '٢ : ٣') },
        { text: L('3 : 2', '3 : 2', '٣ : ٢') },
        { text: L('5 : 10', '5 : 10', '٥ : ١٠') },
      ],
      correctIndex: 0,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'A basket has 4 apples and 6 oranges. What is the ratio of apples to oranges?',
        'Un panier a 4 pommes et 6 oranges. Quel est le ratio pommes : oranges ?',
        'في سلة ٤ تفاحات و٦ برتقالات. ما نسبة التفاح إلى البرتقال؟',
      ),
      choices: [
        { text: L('3 : 2', '3 : 2', '٣ : ٢') },
        {
          text: L('2 : 3', '2 : 3', '٢ : ٣'),
          explanation: L(
            '4 : 6 simplifies to 2 : 3.',
            '4 : 6 se simplifie en 2 : 3.',
            '٤ : ٦ تُبسّط إلى ٢ : ٣.',
          ),
        },
        { text: L('4 : 5', '4 : 5', '٤ : ٥') },
      ],
      correctIndex: 1,
    },
  ],
  [lessonKey('mathematics', 'middle', 'ratios', '02')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        'What is 25% of 80?',
        'Combien font 25 % de 80 ?',
        'كم يساوي ٢٥٪ من ٨٠؟',
      ),
      answer: 20,
      hint: L('25% is one quarter.', '25 % est un quart.', '٢٥٪ هي الربع.'),
    },
    {
      type: 'numericInput',
      id: 'ex2',
      prompt: L(
        'Write one half as a percentage (number only).',
        'Écris un demi en pourcentage (nombre seulement).',
        'اكتب النصف كنسبة مئوية (العدد فقط).',
      ),
      answer: 50,
      unit: '%',
    },
  ],
  [lessonKey('mathematics', 'middle', 'ratios', '03')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        'If 2 pens cost 4 dinars, how much do 7 pens cost?',
        'Si 2 stylos coûtent 4 dinars, combien coûtent 7 stylos ?',
        'إذا كلف قلمان ٤ دنانير، كم تكلف ٧ أقلام؟',
      ),
      answer: 14,
      unit: 'DT',
    },
    {
      type: 'orderSteps',
      id: 'ex2',
      prompt: L(
        'Put the steps for solving a proportion in order.',
        'Mets dans l\'ordre les étapes pour résoudre une proportion.',
        'رتّب خطوات حل التناسب.',
      ),
      steps: [
        L('Write the known ratio', 'Écris le ratio connu', 'اكتب النسبة المعلومة'),
        L('Find the value of one unit', 'Trouve la valeur d\'une unité', 'جد قيمة الوحدة الواحدة'),
        L('Multiply by the new amount', 'Multiplie par la nouvelle quantité', 'اضرب في الكمية الجديدة'),
        L('Check the answer', 'Vérifie la réponse', 'تحقق من الجواب'),
      ],
    },
  ],

  // Middle — Algebra
  [lessonKey('mathematics', 'middle', 'algebra', '01')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        'If x + 5 = 12, what is x?',
        'Si x + 5 = 12, que vaut x ?',
        'إذا كان x + ٥ = ١٢، فما قيمة x؟',
      ),
      answer: 7,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'What is a variable?',
        'Qu\'est-ce qu\'une variable ?',
        'ما هو المتغير؟',
      ),
      choices: [
        {
          text: L(
            'A letter that stands for an unknown number',
            'Une lettre qui représente un nombre inconnu',
            'حرف يمثل عدداً مجهولاً',
          ),
        },
        {
          text: L('A number that never changes', 'Un nombre qui ne change jamais', 'عدد لا يتغير أبداً'),
        },
        { text: L('A type of shape', 'Un type de forme', 'نوع من الأشكال') },
      ],
      correctIndex: 0,
    },
  ],
  [lessonKey('mathematics', 'middle', 'algebra', '02')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L(
        'Simplify: 2x + 3x',
        'Simplifie : 2x + 3x',
        'بسّط: ٢x + ٣x',
      ),
      choices: [
        { text: L('5x', '5x', '٥x') },
        { text: L('6x', '6x', '٦x') },
        { text: L('5x²', '5x²', '٥x²') },
      ],
      correctIndex: 0,
    },
    {
      type: 'mcq',
      id: 'ex2',
      prompt: L(
        'Which term is the constant in 3x + 7?',
        'Quel terme est la constante dans 3x + 7 ?',
        'أي حد هو الثابت في ٣x + ٧؟',
      ),
      choices: [
        { text: L('3x', '3x', '٣x') },
        {
          text: L('7', '7', '٧'),
          explanation: L(
            'A constant has no variable.',
            'Une constante n\'a pas de variable.',
            'الثابت بلا متغير.',
          ),
        },
        { text: L('x', 'x', 'x') },
      ],
      correctIndex: 1,
    },
  ],
  [lessonKey('mathematics', 'middle', 'algebra', '03')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        'Solve: 3n + 2 = 11. What is n?',
        'Résous : 3n + 2 = 11. Que vaut n ?',
        'احل: ٣n + ٢ = ١١. ما قيمة n؟',
      ),
      answer: 3,
      hint: L(
        'First subtract 2 from both sides.',
        'Soustrais d\'abord 2 des deux côtés.',
        'اطرح ٢ من الطرفين أولاً.',
      ),
    },
    {
      type: 'orderSteps',
      id: 'ex2',
      prompt: L(
        'Put the steps for solving 3n + 2 = 11 in order.',
        'Mets dans l\'ordre les étapes pour résoudre 3n + 2 = 11.',
        'رتّب خطوات حل ٣n + ٢ = ١١.',
      ),
      steps: [
        L(
          'Subtract 2 from both sides',
          'Soustrais 2 des deux côtés',
          'اطرح ٢ من الطرفين',
        ),
        L('Divide both sides by 3', 'Divise les deux côtés par 3', 'اقسم الطرفين على ٣'),
        L('Check by substituting n = 3', 'Vérifie en remplaçant n = 3', 'تحقق بتعويض n = ٣'),
      ],
    },
  ],

  // Middle — Geometry
  [lessonKey('mathematics', 'middle', 'geometry', '01')]: [
    {
      type: 'mcq',
      id: 'ex1',
      prompt: L(
        'What type of angle is 45°?',
        'Quel type d\'angle fait 45° ?',
        'ما نوع زاوية ٤٥°؟',
      ),
      choices: [
        { text: L('Acute', 'Aigu', 'حادة') },
        { text: L('Right', 'Droit', 'قائمة') },
        { text: L('Obtuse', 'Obtus', 'منفرجة') },
      ],
      correctIndex: 0,
    },
    {
      type: 'numericInput',
      id: 'ex2',
      prompt: L(
        'How many degrees is a right angle?',
        'Combien de degrés fait un angle droit ?',
        'كم درجة في الزاوية القائمة؟',
      ),
      answer: 90,
      unit: '°',
    },
  ],
  [lessonKey('mathematics', 'middle', 'geometry', '02')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        'A rectangle is 6 cm by 4 cm. What is its area?',
        'Un rectangle fait 6 cm sur 4 cm. Quelle est son aire ?',
        'مستطيل طوله ٦ سم وعرضه ٤ سم. ما مساحته؟',
      ),
      answer: 24,
      unit: 'cm²',
    },
    {
      type: 'numericInput',
      id: 'ex2',
      prompt: L(
        'A rectangle is 5 cm by 3 cm. What is its perimeter?',
        'Un rectangle fait 5 cm sur 3 cm. Quel est son périmètre ?',
        'مستطيل طوله ٥ سم وعرضه ٣ سم. ما محيطه؟',
      ),
      answer: 16,
      unit: 'cm',
      hint: L(
        'Perimeter = 2 × (length + width).',
        'Périmètre = 2 × (longueur + largeur).',
        'المحيط = ٢ × (الطول + العرض).',
      ),
    },
  ],
  [lessonKey('mathematics', 'middle', 'geometry', '03')]: [
    {
      type: 'numericInput',
      id: 'ex1',
      prompt: L(
        'A cube has side 3 cm. What is its volume?',
        'Un cube a un côté de 3 cm. Quel est son volume ?',
        'مكعب طول ضلعه ٣ سم. ما حجمه؟',
      ),
      answer: 27,
      unit: 'cm³',
    },
    {
      type: 'numericInput',
      id: 'ex2',
      prompt: L(
        'A box is 2 cm × 3 cm × 4 cm. What is its volume?',
        'Un pavé fait 2 cm × 3 cm × 4 cm. Quel est son volume ?',
        'متوازي مستطيلات أبعاده ٢ سم × ٣ سم × ٤ سم. ما حجمه؟',
      ),
      answer: 24,
      unit: 'cm³',
    },
  ],
}
