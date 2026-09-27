import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// Mathematics track: high school → undergraduate → graduate → PhD research skills.
export const mathematicsAdvancedLessons: Record<string, LessonContent> = {
  // High — Calculus
  [lessonKey('mathematics', 'high', 'calculus', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A limit describes the value a function approaches as its input gets close to a point. We write lim x→a f(x) = ℓ when f(x) can be made as close to ℓ as we want by taking x close enough to a.',
          'Une limite décrit la valeur dont une fonction s\'approche quand sa variable se rapproche d\'un point. On écrit lim x→a f(x) = ℓ quand f(x) peut être rendu aussi proche de ℓ que l\'on veut en prenant x assez proche de a.',
          'النهاية تصف القيمة التي تقترب منها الدالة عندما يقترب مدخلها من نقطة ما. نكتب lim x→a f(x) = ℓ عندما يمكن جعل f(x) قريبة من ℓ بقدر ما نريد بأخذ x قريبة بما يكفي من a.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'The limit depends on values near a, not on f(a) itself.',
            'La limite dépend des valeurs proches de a, pas de f(a) elle-même.',
            'النهاية تعتمد على القيم القريبة من a، لا على f(a) نفسها.',
          ),
          L(
            'If a fraction gives 0/0, simplify first: factor, then cancel.',
            'Si une fraction donne 0/0, simplifie d\'abord : factorise, puis simplifie.',
            'إذا أعطى الكسر 0/0، بسّط أولاً: حلّل إلى عوامل ثم اختصر.',
          ),
          L(
            'Left and right limits must agree for the limit to exist.',
            'Les limites à gauche et à droite doivent coïncider pour que la limite existe.',
            'يجب أن تتساوى النهايتان من اليسار واليمين حتى توجد النهاية.',
          ),
        ],
      },
      {
        type: 'example',
        question: L(
          'Compute lim x→3 (x² − 9)/(x − 3).',
          'Calcule lim x→3 (x² − 9)/(x − 3).',
          'احسب lim x→3 (x² − 9)/(x − 3).',
        ),
        answer: L(
          'Factor: x² − 9 = (x − 3)(x + 3). Cancel (x − 3), leaving x + 3, so the limit is 3 + 3 = 6.',
          'Factorise : x² − 9 = (x − 3)(x + 3). Simplifie (x − 3), il reste x + 3, donc la limite vaut 3 + 3 = 6.',
          'حلّل: x² − 9 = (x − 3)(x + 3). اختصر (x − 3) فيتبقى x + 3، إذن النهاية هي 3 + 3 = 6.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What is lim x→2 (x² + 1)?',
          'Que vaut lim x→2 (x² + 1) ?',
          'ما قيمة lim x→2 (x² + 1)؟',
        ),
        choices: [
          { text: L('4', '4', '4') },
          {
            text: L('5', '5', '5'),
            explanation: L(
              'x² + 1 is continuous, so substitute: 2² + 1 = 5.',
              'x² + 1 est continue, donc on substitue : 2² + 1 = 5.',
              'x² + 1 دالة متصلة، لذلك نعوّض مباشرة: 2² + 1 = 5.',
            ),
          },
          { text: L('The limit does not exist', 'La limite n\'existe pas', 'النهاية غير موجودة') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Compute lim x→5 (x² − 25)/(x − 5).',
          'Calcule lim x→5 (x² − 25)/(x − 5).',
          'احسب lim x→5 (x² − 25)/(x − 5).',
        ),
        answer: 10,
        hint: L(
          'Factor x² − 25 as (x − 5)(x + 5).',
          'Factorise x² − 25 en (x − 5)(x + 5).',
          'حلّل x² − 25 إلى (x − 5)(x + 5).',
        ),
      },
    ],
  },
  [lessonKey('mathematics', 'high', 'calculus', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The derivative f′(a) measures the instantaneous rate of change of f at a: the slope of the tangent line. It is the limit of the slope of secant lines: f′(a) = lim h→0 (f(a + h) − f(a))/h.',
          'La dérivée f′(a) mesure le taux de variation instantané de f en a : la pente de la tangente. C\'est la limite des pentes des sécantes : f′(a) = lim h→0 (f(a + h) − f(a))/h.',
          'المشتقة f′(a) تقيس معدل التغير اللحظي للدالة f عند a: أي ميل المماس. وهي نهاية ميول القواطع: f′(a) = lim h→0 (f(a + h) − f(a))/h.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Power rule: the derivative of xⁿ is n·xⁿ⁻¹.',
            'Règle de puissance : la dérivée de xⁿ est n·xⁿ⁻¹.',
            'قاعدة القوى: مشتقة xⁿ هي n·xⁿ⁻¹.',
          ),
          L(
            'The derivative of a constant is 0.',
            'La dérivée d\'une constante est 0.',
            'مشتقة الثابت تساوي 0.',
          ),
          L(
            'Derivatives are linear: (af + bg)′ = af′ + bg′.',
            'La dérivation est linéaire : (af + bg)′ = af′ + bg′.',
            'الاشتقاق خطي: (af + bg)′ = af′ + bg′.',
          ),
        ],
      },
      {
        type: 'example',
        question: L(
          'Find the derivative of f(x) = x³ − 4x at x = 2.',
          'Trouve la dérivée de f(x) = x³ − 4x en x = 2.',
          'أوجد مشتقة f(x) = x³ − 4x عند x = 2.',
        ),
        answer: L(
          'f′(x) = 3x² − 4, so f′(2) = 3·4 − 4 = 8. The tangent line at x = 2 has slope 8.',
          'f′(x) = 3x² − 4, donc f′(2) = 3·4 − 4 = 8. La tangente en x = 2 a une pente de 8.',
          'f′(x) = 3x² − 4، إذن f′(2) = 3·4 − 4 = 8. ميل المماس عند x = 2 يساوي 8.',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'If f(x) = x², what is f′(3)?',
          'Si f(x) = x², que vaut f′(3) ?',
          'إذا كانت f(x) = x²، فما قيمة f′(3)؟',
        ),
        answer: 6,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A ball\'s height is h(t) = 20t − 5t². Its velocity h′(t) is zero when…',
          'La hauteur d\'une balle est h(t) = 20t − 5t². Sa vitesse h′(t) est nulle quand…',
          'ارتفاع كرة هو h(t) = 20t − 5t². سرعتها h′(t) تساوي صفراً عندما…',
        ),
        choices: [
          {
            text: L('t = 2', 't = 2', 't = 2'),
            explanation: L(
              'h′(t) = 20 − 10t = 0 gives t = 2: the top of the trajectory.',
              'h′(t) = 20 − 10t = 0 donne t = 2 : le sommet de la trajectoire.',
              'h′(t) = 20 − 10t = 0 تعطي t = 2: قمة المسار.',
            ),
          },
          { text: L('t = 4', 't = 4', 't = 4') },
          { text: L('t = 20', 't = 20', 't = 20') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'high', 'calculus', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The integral ∫ₐᵇ f(x) dx measures the signed area between the curve and the x-axis from a to b. The fundamental theorem of calculus links it to derivatives: if F′ = f, then ∫ₐᵇ f(x) dx = F(b) − F(a).',
          'L\'intégrale ∫ₐᵇ f(x) dx mesure l\'aire signée entre la courbe et l\'axe des x, de a à b. Le théorème fondamental de l\'analyse la relie aux dérivées : si F′ = f, alors ∫ₐᵇ f(x) dx = F(b) − F(a).',
          'التكامل ∫ₐᵇ f(x) dx يقيس المساحة الموقّعة بين المنحنى ومحور x من a إلى b. والنظرية الأساسية في التفاضل والتكامل تربطه بالمشتقات: إذا كانت F′ = f فإن ∫ₐᵇ f(x) dx = F(b) − F(a).',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'An antiderivative of xⁿ is xⁿ⁺¹/(n + 1) for n ≠ −1.',
            'Une primitive de xⁿ est xⁿ⁺¹/(n + 1) pour n ≠ −1.',
            'دالة أصلية لـ xⁿ هي xⁿ⁺¹/(n + 1) عندما n ≠ −1.',
          ),
          L(
            'Area below the axis counts as negative.',
            'L\'aire sous l\'axe compte négativement.',
            'المساحة الواقعة تحت المحور تُحسب سالبة.',
          ),
          L(
            'Integration and differentiation are inverse operations.',
            'L\'intégration et la dérivation sont des opérations inverses.',
            'التكامل والاشتقاق عمليتان متعاكستان.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Compute ∫₀² 2x dx.',
          'Calcule ∫₀² 2x dx.',
          'احسب ∫₀² 2x dx.',
        ),
        answer: 4,
        hint: L(
          'An antiderivative of 2x is x².',
          'Une primitive de 2x est x².',
          'دالة أصلية لـ 2x هي x².',
        ),
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the steps to evaluate ∫₁³ (3x²) dx.',
          'Ordonne les étapes pour évaluer ∫₁³ (3x²) dx.',
          'رتّب خطوات حساب ∫₁³ (3x²) dx.',
        ),
        steps: [
          L(
            'Find an antiderivative: F(x) = x³',
            'Trouver une primitive : F(x) = x³',
            'أوجد دالة أصلية: F(x) = x³',
          ),
          L(
            'Evaluate at the upper bound: F(3) = 27',
            'Évaluer à la borne supérieure : F(3) = 27',
            'احسب عند الحد الأعلى: F(3) = 27',
          ),
          L(
            'Evaluate at the lower bound: F(1) = 1',
            'Évaluer à la borne inférieure : F(1) = 1',
            'احسب عند الحد الأدنى: F(1) = 1',
          ),
          L(
            'Subtract: 27 − 1 = 26',
            'Soustraire : 27 − 1 = 26',
            'اطرح: 27 − 1 = 26',
          ),
        ],
      },
    ],
  },

  // High — Linear algebra
  [lessonKey('mathematics', 'high', 'linear-algebra', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A vector has both magnitude and direction. In the plane we write v = (v₁, v₂). Vectors add component by component, and multiplying by a number (a scalar) stretches or shrinks them.',
          'Un vecteur a une norme et une direction. Dans le plan, on écrit v = (v₁, v₂). Les vecteurs s\'additionnent composante par composante, et la multiplication par un nombre (un scalaire) les allonge ou les raccourcit.',
          'المتجه له مقدار واتجاه. في المستوى نكتب v = (v₁, v₂). تُجمع المتجهات مركّبة بمركّبة، والضرب في عدد (قياسي) يمدّها أو يقلّصها.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Sum: (a, b) + (c, d) = (a + c, b + d).',
            'Somme : (a, b) + (c, d) = (a + c, b + d).',
            'الجمع: (a, b) + (c, d) = (a + c, b + d).',
          ),
          L(
            'Magnitude: ‖(a, b)‖ = √(a² + b²).',
            'Norme : ‖(a, b)‖ = √(a² + b²).',
            'المقدار: ‖(a, b)‖ = √(a² + b²).',
          ),
          L(
            'Dot product: (a, b)·(c, d) = ac + bd; it is 0 when the vectors are perpendicular.',
            'Produit scalaire : (a, b)·(c, d) = ac + bd ; il vaut 0 quand les vecteurs sont perpendiculaires.',
            'الضرب القياسي: (a, b)·(c, d) = ac + bd؛ ويساوي 0 عندما يكون المتجهان متعامدين.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Compute the dot product (2, 3)·(4, 1).',
          'Calcule le produit scalaire (2, 3)·(4, 1).',
          'احسب الضرب القياسي (2, 3)·(4, 1).',
        ),
        answer: 11,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What is the magnitude of the vector (3, 4)?',
          'Quelle est la norme du vecteur (3, 4) ?',
          'ما مقدار المتجه (3, 4)؟',
        ),
        choices: [
          { text: L('7', '7', '7') },
          {
            text: L('5', '5', '5'),
            explanation: L(
              '√(3² + 4²) = √25 = 5.',
              '√(3² + 4²) = √25 = 5.',
              '√(3² + 4²) = √25 = 5.',
            ),
          },
          { text: L('12', '12', '12') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('mathematics', 'high', 'linear-algebra', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A matrix is a rectangular grid of numbers. A 2×2 matrix transforms the plane: it can rotate, scale, or shear vectors. The determinant ad − bc of a matrix [[a, b], [c, d]] measures how areas are scaled.',
          'Une matrice est un tableau rectangulaire de nombres. Une matrice 2×2 transforme le plan : elle peut faire tourner, dilater ou cisailler les vecteurs. Le déterminant ad − bc d\'une matrice [[a, b], [c, d]] mesure comment les aires sont multipliées.',
          'المصفوفة شبكة مستطيلة من الأعداد. المصفوفة 2×2 تحوّل المستوى: يمكنها تدوير المتجهات أو تكبيرها أو قصّها. والمحدد ad − bc للمصفوفة [[a, b], [c, d]] يقيس معامل تغيّر المساحات.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Compute the determinant of [[2, 1], [3, 4]].',
          'Calcule le déterminant de [[2, 1], [3, 4]].',
          'احسب محدد المصفوفة [[2, 1], [3, 4]].',
        ),
        answer: L(
          'ad − bc = 2·4 − 1·3 = 8 − 3 = 5. This matrix multiplies areas by 5.',
          'ad − bc = 2·4 − 1·3 = 8 − 3 = 5. Cette matrice multiplie les aires par 5.',
          'ad − bc = 2·4 − 1·3 = 8 − 3 = 5. هذه المصفوفة تضاعف المساحات 5 مرات.',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What is the determinant of [[5, 2], [3, 2]]?',
          'Quel est le déterminant de [[5, 2], [3, 2]] ?',
          'ما محدد المصفوفة [[5, 2], [3, 2]]؟',
        ),
        answer: 4,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'If a matrix has determinant 0, then…',
          'Si une matrice a un déterminant nul, alors…',
          'إذا كان محدد المصفوفة صفراً، فإن…',
        ),
        choices: [
          {
            text: L(
              'It squashes the plane onto a line or a point and has no inverse',
              'Elle écrase le plan sur une droite ou un point et n\'a pas d\'inverse',
              'تسحق المستوى على مستقيم أو نقطة وليس لها معكوس',
            ),
          },
          {
            text: L('It is the identity matrix', 'C\'est la matrice identité', 'هي مصفوفة الوحدة'),
          },
          {
            text: L('All its entries are 0', 'Tous ses coefficients sont nuls', 'كل عناصرها أصفار'),
          },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'high', 'linear-algebra', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A system of linear equations looks for values that satisfy several equations at once. Geometrically, each equation is a line; a solution is a point where the lines meet. Systems can have one solution, none, or infinitely many.',
          'Un système d\'équations linéaires cherche des valeurs qui satisfont plusieurs équations à la fois. Géométriquement, chaque équation est une droite ; une solution est un point où les droites se coupent. Un système peut avoir une solution, aucune, ou une infinité.',
          'نظام المعادلات الخطية يبحث عن قيم تحقق عدة معادلات في آن واحد. هندسياً، كل معادلة مستقيم؛ والحل نقطة تتقاطع فيها المستقيمات. قد يكون للنظام حل واحد أو لا حل أو عدد لا نهائي من الحلول.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Solve the system: x + y = 5 and x − y = 1.',
          'Résous le système : x + y = 5 et x − y = 1.',
          'حل النظام: x + y = 5 و x − y = 1.',
        ),
        answer: L(
          'Add the equations: 2x = 6, so x = 3. Substitute back: 3 + y = 5, so y = 2. The lines meet at (3, 2).',
          'Additionne les équations : 2x = 6, donc x = 3. Substitue : 3 + y = 5, donc y = 2. Les droites se coupent en (3, 2).',
          'اجمع المعادلتين: 2x = 6، إذن x = 3. عوّض: 3 + y = 5، إذن y = 2. يتقاطع المستقيمان عند (3, 2).',
        ),
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the elimination steps for solving 2x + y = 7 and x − y = 2.',
          'Ordonne les étapes d\'élimination pour résoudre 2x + y = 7 et x − y = 2.',
          'رتّب خطوات الحذف لحل 2x + y = 7 و x − y = 2.',
        ),
        steps: [
          L(
            'Add the two equations to eliminate y: 3x = 9',
            'Additionner les deux équations pour éliminer y : 3x = 9',
            'اجمع المعادلتين لحذف y: أي 3x = 9',
          ),
          L('Solve for x: x = 3', 'Résoudre pour x : x = 3', 'حل بالنسبة لـ x: أي x = 3'),
          L(
            'Substitute x = 3 into x − y = 2',
            'Substituer x = 3 dans x − y = 2',
            'عوّض x = 3 في x − y = 2',
          ),
          L('Conclude y = 1', 'Conclure y = 1', 'استنتج أن y = 1'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'If 3x + 2y = 12 and y = 3, what is x?',
          'Si 3x + 2y = 12 et y = 3, que vaut x ?',
          'إذا كان 3x + 2y = 12 و y = 3، فما قيمة x؟',
        ),
        answer: 2,
      },
    ],
  },

  // High — Probability
  [lessonKey('mathematics', 'high', 'probability', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Probability assigns a number between 0 and 1 to events. For equally likely outcomes, P(A) = (favorable outcomes)/(total outcomes). The complement rule says P(not A) = 1 − P(A), and for incompatible events P(A or B) = P(A) + P(B).',
          'La probabilité attribue un nombre entre 0 et 1 aux événements. Pour des issues équiprobables, P(A) = (issues favorables)/(issues totales). La règle du complémentaire dit P(non A) = 1 − P(A), et pour des événements incompatibles P(A ou B) = P(A) + P(B).',
          'الاحتمال يمنح كل حدث عدداً بين 0 و 1. للنتائج متساوية الإمكان، P(A) = (النتائج المواتية)/(مجموع النتائج). قاعدة المتممة تقول P(ليس A) = 1 − P(A)، وللأحداث المتنافية P(A أو B) = P(A) + P(B).',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'P(certain event) = 1, P(impossible event) = 0.',
            'P(événement certain) = 1, P(événement impossible) = 0.',
            'احتمال الحدث المؤكد = 1، واحتمال الحدث المستحيل = 0.',
          ),
          L(
            'General addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
            'Règle d\'addition générale : P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
            'قاعدة الجمع العامة: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
          ),
          L(
            'Independent events multiply: P(A and B) = P(A)·P(B).',
            'Événements indépendants : P(A et B) = P(A)·P(B).',
            'الأحداث المستقلة تُضرب احتمالاتها: P(A و B) = P(A)·P(B).',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A fair die is rolled. What is the probability of getting an even number? Give a decimal.',
          'On lance un dé équilibré. Quelle est la probabilité d\'obtenir un nombre pair ? Donne un nombre décimal.',
          'نرمي حجر نرد متوازناً. ما احتمال الحصول على عدد زوجي؟ أعط الجواب عدداً عشرياً.',
        ),
        answer: 0.5,
        tolerance: 0.01,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Two fair coins are tossed. What is P(at least one heads)?',
          'On lance deux pièces équilibrées. Que vaut P(au moins un pile) ?',
          'نرمي قطعتي نقود متوازنتين. ما احتمال ظهور وجه واحد على الأقل؟',
        ),
        choices: [
          { text: L('1/2', '1/2', '1/2') },
          {
            text: L('3/4', '3/4', '3/4'),
            explanation: L(
              'Use the complement: 1 − P(no heads) = 1 − 1/4 = 3/4.',
              'Utilise le complémentaire : 1 − P(aucun pile) = 1 − 1/4 = 3/4.',
              'استخدم المتممة: 1 − احتمال عدم ظهور أي وجه = 1 − 1/4 = 3/4.',
            ),
          },
          { text: L('1/4', '1/4', '1/4') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('mathematics', 'high', 'probability', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A probability distribution lists all possible values of a random variable with their probabilities. The expected value E(X) = Σ x·P(X = x) is the long-run average. The binomial distribution counts successes in n independent trials with success probability p; its mean is np.',
          'Une distribution de probabilité liste toutes les valeurs possibles d\'une variable aléatoire avec leurs probabilités. L\'espérance E(X) = Σ x·P(X = x) est la moyenne à long terme. La loi binomiale compte les succès parmi n essais indépendants de probabilité p ; sa moyenne est np.',
          'التوزيع الاحتمالي يسرد كل القيم الممكنة لمتغير عشوائي مع احتمالاتها. القيمة المتوقعة E(X) = Σ x·P(X = x) هي المتوسط على المدى الطويل. التوزيع الثنائي يعدّ النجاحات في n محاولة مستقلة باحتمال نجاح p؛ ومتوسطه np.',
        ),
      },
      {
        type: 'example',
        question: L(
          'A quiz has 10 questions; you guess each with success probability 0.3. What is the expected number of correct answers?',
          'Un quiz a 10 questions ; tu devines chacune avec une probabilité de succès de 0,3. Quel est le nombre moyen de bonnes réponses ?',
          'اختبار فيه 10 أسئلة؛ تخمّن كل سؤال باحتمال نجاح 0.3. ما العدد المتوقع للإجابات الصحيحة؟',
        ),
        answer: L(
          'This is binomial with n = 10 and p = 0.3, so the mean is np = 10 × 0.3 = 3 correct answers.',
          'C\'est une loi binomiale avec n = 10 et p = 0,3, donc la moyenne est np = 10 × 0,3 = 3 bonnes réponses.',
          'هذا توزيع ثنائي بـ n = 10 و p = 0.3، إذن المتوسط np = 10 × 0.3 = 3 إجابات صحيحة.',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'X takes the value 0 with probability 0.5 and the value 4 with probability 0.5. What is E(X)?',
          'X prend la valeur 0 avec probabilité 0,5 et la valeur 4 avec probabilité 0,5. Que vaut E(X) ?',
          'المتغير X يأخذ القيمة 0 باحتمال 0.5 والقيمة 4 باحتمال 0.5. ما قيمة E(X)؟',
        ),
        answer: 2,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which situation is binomial?',
          'Quelle situation suit une loi binomiale ?',
          'أي وضعية تتبع التوزيع الثنائي؟',
        ),
        choices: [
          {
            text: L(
              'Counting heads in 20 independent coin tosses',
              'Compter les piles sur 20 lancers indépendants d\'une pièce',
              'عدّ الأوجه في 20 رمية مستقلة لقطعة نقود',
            ),
          },
          {
            text: L(
              'Measuring the exact height of a student',
              'Mesurer la taille exacte d\'un élève',
              'قياس الطول الدقيق لتلميذ',
            ),
          },
          {
            text: L(
              'Drawing cards without replacement until an ace appears',
              'Tirer des cartes sans remise jusqu\'à un as',
              'سحب أوراق دون إرجاع حتى ظهور آص',
            ),
          },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'high', 'probability', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Statistical inference uses a sample to draw conclusions about a population. A larger random sample gives a more reliable estimate. The sample mean x̄ estimates the population mean μ, and a confidence interval expresses the uncertainty of that estimate.',
          'L\'inférence statistique utilise un échantillon pour tirer des conclusions sur une population. Un échantillon aléatoire plus grand donne une estimation plus fiable. La moyenne d\'échantillon x̄ estime la moyenne de population μ, et un intervalle de confiance exprime l\'incertitude de cette estimation.',
          'الاستدلال الإحصائي يستخدم عينة لاستخلاص نتائج عن مجتمع كامل. العينة العشوائية الأكبر تعطي تقديراً أوثق. متوسط العينة x̄ يقدّر متوسط المجتمع μ، وفترة الثقة تعبّر عن مقدار عدم اليقين في هذا التقدير.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'A sample must be random to avoid bias.',
            'Un échantillon doit être aléatoire pour éviter les biais.',
            'يجب أن تكون العينة عشوائية لتجنب التحيز.',
          ),
          L(
            'Larger samples reduce the variability of estimates.',
            'De plus grands échantillons réduisent la variabilité des estimations.',
            'العينات الأكبر تقلل تذبذب التقديرات.',
          ),
          L(
            'Correlation in data does not by itself prove causation.',
            'Une corrélation dans les données ne prouve pas à elle seule une causalité.',
            'الارتباط في البيانات لا يثبت وحده وجود علاقة سببية.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'To estimate the average study time of all students in a school, the best method is…',
          'Pour estimer le temps d\'étude moyen de tous les élèves d\'un lycée, la meilleure méthode est…',
          'لتقدير متوسط وقت الدراسة لجميع تلاميذ مدرسة، أفضل طريقة هي…',
        ),
        choices: [
          {
            text: L(
              'Survey a random sample of students',
              'Interroger un échantillon aléatoire d\'élèves',
              'استجواب عينة عشوائية من التلاميذ',
            ),
          },
          {
            text: L(
              'Ask only the top of the class',
              'Interroger seulement les premiers de classe',
              'سؤال أوائل القسم فقط',
            ),
          },
          {
            text: L(
              'Ask students who volunteer to answer',
              'Interroger les élèves qui se portent volontaires',
              'سؤال التلاميذ المتطوعين للإجابة',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the steps of a basic statistical study.',
          'Ordonne les étapes d\'une étude statistique de base.',
          'رتّب خطوات دراسة إحصائية بسيطة.',
        ),
        steps: [
          L(
            'State the question about the population',
            'Formuler la question sur la population',
            'صِغ السؤال حول المجتمع',
          ),
          L(
            'Collect a random sample',
            'Collecter un échantillon aléatoire',
            'اجمع عينة عشوائية',
          ),
          L(
            'Compute sample statistics like x̄',
            'Calculer les statistiques comme x̄',
            'احسب إحصاءات العينة مثل x̄',
          ),
          L(
            'Draw a conclusion with its uncertainty',
            'Tirer une conclusion avec son incertitude',
            'استخلص النتيجة مع درجة عدم اليقين',
          ),
        ],
      },
    ],
  },

  // Undergraduate — Analysis
  [lessonKey('mathematics', 'undergraduate', 'analysis', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A sequence (aₙ) converges to ℓ if for every ε > 0 there exists N such that |aₙ − ℓ| < ε for all n ≥ N. A series Σ aₙ converges when its partial sums converge; a necessary condition is aₙ → 0, but it is not sufficient, as the harmonic series Σ 1/n shows.',
          'Une suite (aₙ) converge vers ℓ si pour tout ε > 0 il existe N tel que |aₙ − ℓ| < ε pour tout n ≥ N. Une série Σ aₙ converge quand ses sommes partielles convergent ; une condition nécessaire est aₙ → 0, mais elle n\'est pas suffisante, comme le montre la série harmonique Σ 1/n.',
          'المتتالية (aₙ) تتقارب إلى ℓ إذا كان لكل ε > 0 يوجد N بحيث |aₙ − ℓ| < ε لكل n ≥ N. والمتسلسلة Σ aₙ تتقارب عندما تتقارب مجاميعها الجزئية؛ الشرط الضروري هو aₙ → 0 لكنه غير كافٍ، كما تبيّن المتسلسلة التوافقية Σ 1/n.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Monotone convergence: a bounded monotone sequence of reals converges.',
            'Convergence monotone : une suite réelle monotone et bornée converge.',
            'التقارب الرتيب: كل متتالية حقيقية رتيبة ومحدودة تتقارب.',
          ),
          L(
            'Geometric series: Σ rⁿ converges iff |r| < 1, with sum 1/(1 − r) from n = 0.',
            'Série géométrique : Σ rⁿ converge ssi |r| < 1, de somme 1/(1 − r) à partir de n = 0.',
            'المتسلسلة الهندسية: Σ rⁿ تتقارب إذا وفقط إذا كان |r| < 1، ومجموعها 1/(1 − r) بدءاً من n = 0.',
          ),
          L(
            'Comparison test: 0 ≤ aₙ ≤ bₙ and Σ bₙ converges ⇒ Σ aₙ converges.',
            'Test de comparaison : 0 ≤ aₙ ≤ bₙ et Σ bₙ converge ⇒ Σ aₙ converge.',
            'اختبار المقارنة: إذا كان 0 ≤ aₙ ≤ bₙ وكانت Σ bₙ متقاربة فإن Σ aₙ متقاربة.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which statement is true?',
          'Quelle affirmation est vraie ?',
          'أي عبارة صحيحة؟',
        ),
        choices: [
          {
            text: L(
              'If aₙ → 0 then Σ aₙ converges',
              'Si aₙ → 0 alors Σ aₙ converge',
              'إذا كان aₙ → 0 فإن Σ aₙ تتقارب',
            ),
            explanation: L(
              'False: the harmonic series Σ 1/n diverges although 1/n → 0.',
              'Faux : la série harmonique Σ 1/n diverge bien que 1/n → 0.',
              'خطأ: المتسلسلة التوافقية Σ 1/n تتباعد رغم أن 1/n → 0.',
            ),
          },
          {
            text: L(
              'If Σ aₙ converges then aₙ → 0',
              'Si Σ aₙ converge alors aₙ → 0',
              'إذا تقاربت Σ aₙ فإن aₙ → 0',
            ),
          },
          {
            text: L(
              'Every bounded sequence converges',
              'Toute suite bornée converge',
              'كل متتالية محدودة تتقارب',
            ),
          },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Compute the sum Σ (1/2)ⁿ for n = 0, 1, 2, …',
          'Calcule la somme Σ (1/2)ⁿ pour n = 0, 1, 2, …',
          'احسب المجموع Σ (1/2)ⁿ حيث n = 0, 1, 2, …',
        ),
        answer: 2,
        hint: L(
          'Geometric series: 1/(1 − r) with r = 1/2.',
          'Série géométrique : 1/(1 − r) avec r = 1/2.',
          'متسلسلة هندسية: 1/(1 − r) حيث r = 1/2.',
        ),
      },
    ],
  },
  [lessonKey('mathematics', 'undergraduate', 'analysis', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'f is continuous at a if for every ε > 0 there exists δ > 0 such that |x − a| < δ implies |f(x) − f(a)| < ε. Continuity on a closed bounded interval [a, b] has strong consequences: the extreme value theorem (f attains a maximum and minimum) and the intermediate value theorem (f takes every value between f(a) and f(b)).',
          'f est continue en a si pour tout ε > 0 il existe δ > 0 tel que |x − a| < δ implique |f(x) − f(a)| < ε. La continuité sur un intervalle fermé borné [a, b] a des conséquences fortes : le théorème des bornes atteintes (f atteint un maximum et un minimum) et le théorème des valeurs intermédiaires (f prend toute valeur entre f(a) et f(b)).',
          'الدالة f متصلة عند a إذا كان لكل ε > 0 يوجد δ > 0 بحيث إذا كان |x − a| < δ فإن |f(x) − f(a)| < ε. وللاتصال على مجال مغلق محدود [a, b] نتائج قوية: مبرهنة القيم القصوى (f تبلغ قيمة عظمى وصغرى) ومبرهنة القيمة الوسيطة (f تأخذ كل قيمة بين f(a) و f(b)).',
        ),
      },
      {
        type: 'example',
        question: L(
          'Prove with ε–δ that f(x) = 3x is continuous at a = 2.',
          'Démontre avec ε–δ que f(x) = 3x est continue en a = 2.',
          'أثبت بطريقة ε–δ أن f(x) = 3x متصلة عند a = 2.',
        ),
        answer: L(
          'Given ε > 0, choose δ = ε/3. If |x − 2| < δ, then |f(x) − f(2)| = |3x − 6| = 3|x − 2| < 3δ = ε. ∎',
          'Soit ε > 0, choisissons δ = ε/3. Si |x − 2| < δ, alors |f(x) − f(2)| = |3x − 6| = 3|x − 2| < 3δ = ε. ∎',
          'ليكن ε > 0، نختار δ = ε/3. إذا كان |x − 2| < δ فإن |f(x) − f(2)| = |3x − 6| = 3|x − 2| < 3δ = ε. ∎',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'f is continuous on [0, 1] with f(0) = −1 and f(1) = 2. Which theorem guarantees a root of f in (0, 1)?',
          'f est continue sur [0, 1] avec f(0) = −1 et f(1) = 2. Quel théorème garantit une racine de f dans (0, 1) ?',
          'الدالة f متصلة على [0, 1] مع f(0) = −1 و f(1) = 2. أي مبرهنة تضمن وجود جذر لـ f في (0, 1)؟',
        ),
        choices: [
          {
            text: L(
              'The intermediate value theorem',
              'Le théorème des valeurs intermédiaires',
              'مبرهنة القيمة الوسيطة',
            ),
          },
          {
            text: L('The extreme value theorem', 'Le théorème des bornes atteintes', 'مبرهنة القيم القصوى'),
          },
          {
            text: L('The mean value theorem', 'Le théorème des accroissements finis', 'مبرهنة القيمة المتوسطة'),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the structure of an ε–δ continuity proof at a point a.',
          'Ordonne la structure d\'une preuve de continuité ε–δ en un point a.',
          'رتّب بنية برهان الاتصال بطريقة ε–δ عند نقطة a.',
        ),
        steps: [
          L('Let ε > 0 be arbitrary', 'Soit ε > 0 quelconque', 'ليكن ε > 0 اختيارياً'),
          L(
            'Construct a suitable δ > 0 depending on ε',
            'Construire un δ > 0 adapté dépendant de ε',
            'أنشئ δ > 0 مناسباً يعتمد على ε',
          ),
          L(
            'Assume |x − a| < δ',
            'Supposer |x − a| < δ',
            'افترض أن |x − a| < δ',
          ),
          L(
            'Deduce |f(x) − f(a)| < ε',
            'En déduire |f(x) − f(a)| < ε',
            'استنتج أن |f(x) − f(a)| < ε',
          ),
        ],
      },
    ],
  },
  [lessonKey('mathematics', 'undergraduate', 'analysis', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Rigorous differentiation defines f′(a) as the limit of difference quotients, and the Riemann integral as the common value of upper and lower sums. The mean value theorem states: if f is continuous on [a, b] and differentiable on (a, b), there exists c ∈ (a, b) with f′(c) = (f(b) − f(a))/(b − a). The fundamental theorem of calculus ties both notions together.',
          'La dérivation rigoureuse définit f′(a) comme limite des taux d\'accroissement, et l\'intégrale de Riemann comme valeur commune des sommes supérieures et inférieures. Le théorème des accroissements finis affirme : si f est continue sur [a, b] et dérivable sur (a, b), il existe c ∈ (a, b) tel que f′(c) = (f(b) − f(a))/(b − a). Le théorème fondamental de l\'analyse relie les deux notions.',
          'الاشتقاق الدقيق يعرّف f′(a) كنهاية لنسب التغير، وتكامل ريمان كقيمة مشتركة للمجاميع العليا والسفلى. مبرهنة القيمة المتوسطة تنص: إذا كانت f متصلة على [a, b] وقابلة للاشتقاق على (a, b)، فيوجد c ∈ (a, b) بحيث f′(c) = (f(b) − f(a))/(b − a). والنظرية الأساسية في التفاضل والتكامل تربط المفهومين.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Differentiable at a ⇒ continuous at a; the converse fails (|x| at 0).',
            'Dérivable en a ⇒ continue en a ; la réciproque est fausse (|x| en 0).',
            'القابلية للاشتقاق عند a تستلزم الاتصال عند a؛ والعكس خاطئ (|x| عند 0).',
          ),
          L(
            'Every continuous function on [a, b] is Riemann integrable.',
            'Toute fonction continue sur [a, b] est Riemann-intégrable.',
            'كل دالة متصلة على [a, b] قابلة للتكامل بمعنى ريمان.',
          ),
          L(
            'FTC: if f is continuous, then F(x) = ∫ₐˣ f(t) dt satisfies F′ = f.',
            'TFA : si f est continue, alors F(x) = ∫ₐˣ f(t) dt vérifie F′ = f.',
            'النظرية الأساسية: إذا كانت f متصلة فإن F(x) = ∫ₐˣ f(t) dt تحقق F′ = f.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which function is continuous everywhere but not differentiable at 0?',
          'Quelle fonction est continue partout mais non dérivable en 0 ?',
          'أي دالة متصلة في كل مكان لكنها غير قابلة للاشتقاق عند 0؟',
        ),
        choices: [
          { text: L('f(x) = x²', 'f(x) = x²', 'f(x) = x²') },
          {
            text: L('f(x) = |x|', 'f(x) = |x|', 'f(x) = |x|'),
            explanation: L(
              'The one-sided derivatives at 0 are −1 and +1, so f′(0) does not exist.',
              'Les dérivées latérales en 0 valent −1 et +1, donc f′(0) n\'existe pas.',
              'المشتقتان الجانبيتان عند 0 هما −1 و +1، لذلك f′(0) غير موجودة.',
            ),
          },
          { text: L('f(x) = eˣ', 'f(x) = eˣ', 'f(x) = eˣ') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Let F(x) = ∫₀ˣ t² dt. Using the fundamental theorem of calculus, what is F′(3)?',
          'Soit F(x) = ∫₀ˣ t² dt. D\'après le théorème fondamental de l\'analyse, que vaut F′(3) ?',
          'لتكن F(x) = ∫₀ˣ t² dt. حسب النظرية الأساسية في التفاضل والتكامل، ما قيمة F′(3)؟',
        ),
        answer: 9,
      },
    ],
  },

  // Undergraduate — Abstract algebra
  [lessonKey('mathematics', 'undergraduate', 'abstract-algebra', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A group is a set G with an operation ∗ satisfying four axioms: closure, associativity, an identity element e, and an inverse for every element. Examples: (ℤ, +), the nonzero reals under multiplication, and the symmetries of a square. The order of an element g is the smallest n ≥ 1 with gⁿ = e.',
          'Un groupe est un ensemble G muni d\'une opération ∗ vérifiant quatre axiomes : stabilité, associativité, un élément neutre e, et un inverse pour chaque élément. Exemples : (ℤ, +), les réels non nuls pour la multiplication, et les symétries d\'un carré. L\'ordre d\'un élément g est le plus petit n ≥ 1 tel que gⁿ = e.',
          'الزمرة مجموعة G مزودة بعملية ∗ تحقق أربع بديهيات: الانغلاق، التجميعية، وجود عنصر محايد e، ووجود نظير لكل عنصر. أمثلة: (ℤ, +)، والأعداد الحقيقية غير الصفرية مع الضرب، وتماثلات المربع. رتبة العنصر g هي أصغر n ≥ 1 بحيث gⁿ = e.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Closure: a ∗ b ∈ G for all a, b ∈ G.',
            'Stabilité : a ∗ b ∈ G pour tous a, b ∈ G.',
            'الانغلاق: a ∗ b ∈ G لكل a, b ∈ G.',
          ),
          L(
            'Associativity: (a ∗ b) ∗ c = a ∗ (b ∗ c).',
            'Associativité : (a ∗ b) ∗ c = a ∗ (b ∗ c).',
            'التجميعية: (a ∗ b) ∗ c = a ∗ (b ∗ c).',
          ),
          L(
            'Identity: e ∗ a = a ∗ e = a; inverse: a ∗ a⁻¹ = e.',
            'Neutre : e ∗ a = a ∗ e = a ; inverse : a ∗ a⁻¹ = e.',
            'المحايد: e ∗ a = a ∗ e = a؛ والنظير: a ∗ a⁻¹ = e.',
          ),
          L(
            'A group need not be commutative; if it is, it is called abelian.',
            'Un groupe n\'est pas forcément commutatif ; s\'il l\'est, on dit qu\'il est abélien.',
            'الزمرة ليست بالضرورة تبديلية؛ وإذا كانت كذلك سميت زمرة آبلية.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Why is (ℕ, +) not a group?',
          'Pourquoi (ℕ, +) n\'est-il pas un groupe ?',
          'لماذا ليست (ℕ, +) زمرة؟',
        ),
        choices: [
          {
            text: L(
              'Most elements have no additive inverse in ℕ',
              'La plupart des éléments n\'ont pas d\'inverse additif dans ℕ',
              'معظم العناصر ليس لها نظير جمعي في ℕ',
            ),
            explanation: L(
              'For n > 0 there is no natural number m with n + m = 0.',
              'Pour n > 0 il n\'existe aucun entier naturel m tel que n + m = 0.',
              'لأجل n > 0 لا يوجد عدد طبيعي m بحيث n + m = 0.',
            ),
          },
          {
            text: L('Addition is not associative on ℕ', 'L\'addition n\'est pas associative sur ℕ', 'الجمع ليس تجميعياً على ℕ'),
          },
          {
            text: L('ℕ is not closed under addition', 'ℕ n\'est pas stable par addition', 'ℕ غير مغلقة تحت الجمع'),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'In the group ℤ/6ℤ under addition, what is the order of the element 2?',
          'Dans le groupe ℤ/6ℤ pour l\'addition, quel est l\'ordre de l\'élément 2 ?',
          'في الزمرة ℤ/6ℤ مع الجمع، ما رتبة العنصر 2؟',
        ),
        answer: 3,
        hint: L(
          '2 + 2 + 2 = 6 ≡ 0 (mod 6).',
          '2 + 2 + 2 = 6 ≡ 0 (mod 6).',
          '2 + 2 + 2 = 6 ≡ 0 (mod 6).',
        ),
      },
    ],
  },
  [lessonKey('mathematics', 'undergraduate', 'abstract-algebra', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A ring is a set with two operations, addition and multiplication: it is an abelian group under addition, multiplication is associative, and multiplication distributes over addition. ℤ is a ring; so are polynomial rings like ℤ[x] and matrix rings. Unlike fields, rings may contain zero divisors: nonzero a, b with ab = 0.',
          'Un anneau est un ensemble muni de deux opérations, addition et multiplication : c\'est un groupe abélien pour l\'addition, la multiplication est associative, et elle est distributive sur l\'addition. ℤ est un anneau ; de même les anneaux de polynômes comme ℤ[x] et les anneaux de matrices. Contrairement aux corps, un anneau peut contenir des diviseurs de zéro : a, b non nuls avec ab = 0.',
          'الحلقة مجموعة مزودة بعمليتين، الجمع والضرب: فهي زمرة آبلية بالنسبة للجمع، والضرب تجميعي، والضرب يتوزع على الجمع. ℤ حلقة؛ وكذلك حلقات كثيرات الحدود مثل ℤ[x] وحلقات المصفوفات. وخلافاً للحقول، قد تحتوي الحلقة على قواسم للصفر: عنصران a, b غير صفريين مع ab = 0.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Find a zero divisor in the ring ℤ/6ℤ.',
          'Trouve un diviseur de zéro dans l\'anneau ℤ/6ℤ.',
          'أوجد قاسماً للصفر في الحلقة ℤ/6ℤ.',
        ),
        answer: L(
          '2 · 3 = 6 ≡ 0 (mod 6), yet 2 ≠ 0 and 3 ≠ 0 in ℤ/6ℤ. So 2 and 3 are zero divisors, and ℤ/6ℤ is not an integral domain.',
          '2 · 3 = 6 ≡ 0 (mod 6), pourtant 2 ≠ 0 et 3 ≠ 0 dans ℤ/6ℤ. Donc 2 et 3 sont des diviseurs de zéro, et ℤ/6ℤ n\'est pas un anneau intègre.',
          '2 · 3 = 6 ≡ 0 (mod 6)، مع أن 2 ≠ 0 و 3 ≠ 0 في ℤ/6ℤ. إذن 2 و 3 قاسمان للصفر، و ℤ/6ℤ ليست حلقة تامة.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'An integral domain is a commutative ring with 1 ≠ 0 and no zero divisors.',
            'Un anneau intègre est un anneau commutatif avec 1 ≠ 0 et sans diviseur de zéro.',
            'الحلقة التامة حلقة تبديلية فيها 1 ≠ 0 ولا تحتوي قواسم للصفر.',
          ),
          L(
            'An ideal I ⊆ R absorbs multiplication: r ∈ R, a ∈ I ⇒ ra ∈ I.',
            'Un idéal I ⊆ R absorbe la multiplication : r ∈ R, a ∈ I ⇒ ra ∈ I.',
            'المثالي I ⊆ R يمتص الضرب: إذا كان r ∈ R و a ∈ I فإن ra ∈ I.',
          ),
          L(
            'Quotients by ideals give new rings: ℤ/nℤ = ℤ modulo the ideal nℤ.',
            'Les quotients par des idéaux donnent de nouveaux anneaux : ℤ/nℤ = ℤ modulo l\'idéal nℤ.',
            'القسمة على المثاليات تعطي حلقات جديدة: ℤ/nℤ هي ℤ بترديد المثالي nℤ.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'For which n is ℤ/nℤ an integral domain?',
          'Pour quel n l\'anneau ℤ/nℤ est-il intègre ?',
          'لأي n تكون ℤ/nℤ حلقة تامة؟',
        ),
        choices: [
          {
            text: L('Exactly when n is prime', 'Exactement quand n est premier', 'عندما يكون n أولياً بالضبط'),
            explanation: L(
              'If n = ab with 1 < a, b < n, then a·b ≡ 0 gives zero divisors.',
              'Si n = ab avec 1 < a, b < n, alors a·b ≡ 0 donne des diviseurs de zéro.',
              'إذا كان n = ab حيث 1 < a, b < n فإن a·b ≡ 0 يعطي قواسم للصفر.',
            ),
          },
          { text: L('For every n ≥ 2', 'Pour tout n ≥ 2', 'لكل n ≥ 2') },
          { text: L('Only for even n', 'Seulement pour n pair', 'فقط عندما يكون n زوجياً') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'undergraduate', 'abstract-algebra', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A field is a commutative ring in which every nonzero element has a multiplicative inverse. ℚ, ℝ, ℂ are infinite fields; ℤ/pℤ is a finite field for each prime p. Every finite field has pᵏ elements for some prime p and integer k ≥ 1, and such a field exists and is unique up to isomorphism.',
          'Un corps est un anneau commutatif dans lequel tout élément non nul a un inverse multiplicatif. ℚ, ℝ, ℂ sont des corps infinis ; ℤ/pℤ est un corps fini pour chaque premier p. Tout corps fini a pᵏ éléments pour un premier p et un entier k ≥ 1, et un tel corps existe et est unique à isomorphisme près.',
          'الحقل حلقة تبديلية فيها لكل عنصر غير صفري نظير ضربي. ℚ و ℝ و ℂ حقول لا نهائية؛ و ℤ/pℤ حقل منتهٍ لكل عدد أولي p. كل حقل منتهٍ يحوي pᵏ عنصراً لعدد أولي p وعدد صحيح k ≥ 1، ومثل هذا الحقل موجود ووحيد حتى التشاكل.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'In a field there are no zero divisors: ab = 0 ⇒ a = 0 or b = 0.',
            'Dans un corps il n\'y a pas de diviseur de zéro : ab = 0 ⇒ a = 0 ou b = 0.',
            'في الحقل لا توجد قواسم للصفر: إذا كان ab = 0 فإن a = 0 أو b = 0.',
          ),
          L(
            'ℤ/4ℤ is not a field: 2 has no inverse since 2·x is always even mod 4.',
            'ℤ/4ℤ n\'est pas un corps : 2 n\'a pas d\'inverse car 2·x est toujours pair mod 4.',
            'ℤ/4ℤ ليست حقلاً: العنصر 2 لا نظير له لأن 2·x زوجي دائماً بترديد 4.',
          ),
          L(
            'Field extensions like ℚ(√2) add roots of polynomials to a base field.',
            'Les extensions de corps comme ℚ(√2) ajoutent des racines de polynômes à un corps de base.',
            'توسيعات الحقول مثل ℚ(√2) تضيف جذور كثيرات حدود إلى حقل أساسي.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which of these is a field?',
          'Lequel de ces ensembles est un corps ?',
          'أي مما يلي حقل؟',
        ),
        choices: [
          { text: L('ℤ with usual + and ×', 'ℤ avec + et × usuels', 'ℤ مع الجمع والضرب المعتادين') },
          {
            text: L('ℤ/7ℤ', 'ℤ/7ℤ', 'ℤ/7ℤ'),
            explanation: L(
              '7 is prime, so every nonzero class is invertible mod 7.',
              '7 est premier, donc toute classe non nulle est inversible mod 7.',
              '7 عدد أولي، لذا كل صنف غير صفري قابل للعكس بترديد 7.',
            ),
          },
          { text: L('ℤ/6ℤ', 'ℤ/6ℤ', 'ℤ/6ℤ') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'In the field ℤ/7ℤ, what is the multiplicative inverse of 3? Answer with a representative in {1, …, 6}.',
          'Dans le corps ℤ/7ℤ, quel est l\'inverse multiplicatif de 3 ? Réponds par un représentant dans {1, …, 6}.',
          'في الحقل ℤ/7ℤ، ما النظير الضربي للعنصر 3؟ أجب بممثل من {1, …, 6}.',
        ),
        answer: 5,
        hint: L(
          '3 × 5 = 15 ≡ 1 (mod 7).',
          '3 × 5 = 15 ≡ 1 (mod 7).',
          '3 × 5 = 15 ≡ 1 (mod 7).',
        ),
      },
    ],
  },

  // Undergraduate — Differential equations
  [lessonKey('mathematics', 'undergraduate', 'differential-equations', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A first-order ODE relates a function to its first derivative: y′ = f(t, y). Separable equations, y′ = g(t)h(y), are solved by writing dy/h(y) = g(t) dt and integrating both sides. Linear equations y′ + p(t)y = q(t) are solved with the integrating factor μ(t) = e^∫p(t)dt.',
          'Une EDO du premier ordre relie une fonction à sa dérivée première : y′ = f(t, y). Les équations séparables, y′ = g(t)h(y), se résolvent en écrivant dy/h(y) = g(t) dt puis en intégrant les deux côtés. Les équations linéaires y′ + p(t)y = q(t) se résolvent avec le facteur intégrant μ(t) = e^∫p(t)dt.',
          'المعادلة التفاضلية من الرتبة الأولى تربط دالة بمشتقتها الأولى: y′ = f(t, y). المعادلات القابلة للفصل، y′ = g(t)h(y)، تُحل بكتابة dy/h(y) = g(t) dt ثم مكاملة الطرفين. والمعادلات الخطية y′ + p(t)y = q(t) تُحل بعامل التكامل μ(t) = e^∫p(t)dt.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Solve y′ = 2y with y(0) = 3.',
          'Résous y′ = 2y avec y(0) = 3.',
          'حل المعادلة y′ = 2y مع y(0) = 3.',
        ),
        answer: L(
          'Separate: dy/y = 2 dt, integrate: ln|y| = 2t + C, so y = Ae²ᵗ. The condition y(0) = 3 gives A = 3, hence y(t) = 3e²ᵗ.',
          'Sépare : dy/y = 2 dt, intègre : ln|y| = 2t + C, donc y = Ae²ᵗ. La condition y(0) = 3 donne A = 3, d\'où y(t) = 3e²ᵗ.',
          'افصل: dy/y = 2 dt، وكامل: ln|y| = 2t + C، إذن y = Ae²ᵗ. الشرط y(0) = 3 يعطي A = 3، ومنه y(t) = 3e²ᵗ.',
        ),
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the steps for solving a separable equation y′ = g(t)h(y).',
          'Ordonne les étapes de résolution d\'une équation séparable y′ = g(t)h(y).',
          'رتّب خطوات حل معادلة قابلة للفصل y′ = g(t)h(y).',
        ),
        steps: [
          L(
            'Rewrite as dy/h(y) = g(t) dt',
            'Réécrire sous la forme dy/h(y) = g(t) dt',
            'أعد الكتابة على الشكل dy/h(y) = g(t) dt',
          ),
          L(
            'Integrate both sides',
            'Intégrer les deux côtés',
            'كامل الطرفين',
          ),
          L(
            'Solve for y if possible, adding the constant C',
            'Isoler y si possible, en ajoutant la constante C',
            'اعزل y إن أمكن مع إضافة الثابت C',
          ),
          L(
            'Use the initial condition to fix C',
            'Utiliser la condition initiale pour déterminer C',
            'استخدم الشرط الابتدائي لتحديد C',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'The solution of y′ = −y with y(0) = 8 is y(t) = 8e⁻ᵗ. What is y(ln 4)?',
          'La solution de y′ = −y avec y(0) = 8 est y(t) = 8e⁻ᵗ. Que vaut y(ln 4) ?',
          'حل المعادلة y′ = −y مع y(0) = 8 هو y(t) = 8e⁻ᵗ. ما قيمة y(ln 4)؟',
        ),
        answer: 2,
        hint: L(
          'e^(−ln 4) = 1/4.',
          'e^(−ln 4) = 1/4.',
          'e^(−ln 4) = 1/4.',
        ),
      },
    ],
  },
  [lessonKey('mathematics', 'undergraduate', 'differential-equations', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A linear system x′ = Ax couples several unknowns through a matrix A. Eigenvalues and eigenvectors solve it: if Av = λv, then x(t) = e^(λt)v is a solution. The signs of the eigenvalues determine stability: all negative real parts means solutions decay to the origin.',
          'Un système linéaire x′ = Ax couple plusieurs inconnues via une matrice A. Les valeurs propres et vecteurs propres le résolvent : si Av = λv, alors x(t) = e^(λt)v est une solution. Les signes des valeurs propres déterminent la stabilité : des parties réelles toutes négatives signifient que les solutions décroissent vers l\'origine.',
          'النظام الخطي x′ = Ax يربط عدة مجاهيل عبر مصفوفة A. القيم الذاتية والمتجهات الذاتية تحله: إذا كان Av = λv فإن x(t) = e^(λt)v حل. وإشارات القيم الذاتية تحدد الاستقرار: إذا كانت الأجزاء الحقيقية كلها سالبة فإن الحلول تتلاشى نحو نقطة الأصل.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Eigenvalues of A solve det(A − λI) = 0.',
            'Les valeurs propres de A résolvent det(A − λI) = 0.',
            'القيم الذاتية للمصفوفة A تحل المعادلة det(A − λI) = 0.',
          ),
          L(
            'The general solution is a linear combination of eigen-solutions.',
            'La solution générale est une combinaison linéaire des solutions propres.',
            'الحل العام تركيبة خطية من الحلول الذاتية.',
          ),
          L(
            'For 2×2 matrices, trace = λ₁ + λ₂ and determinant = λ₁·λ₂.',
            'Pour les matrices 2×2, trace = λ₁ + λ₂ et déterminant = λ₁·λ₂.',
            'للمصفوفات 2×2: الأثر = λ₁ + λ₂ والمحدد = λ₁·λ₂.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A = [[2, 0], [0, 5]]. What is the sum of the eigenvalues of A?',
          'A = [[2, 0], [0, 5]]. Quelle est la somme des valeurs propres de A ?',
          'A = [[2, 0], [0, 5]]. ما مجموع القيم الذاتية للمصفوفة A؟',
        ),
        answer: 7,
        hint: L(
          'For a diagonal matrix, the eigenvalues are on the diagonal; the sum is the trace.',
          'Pour une matrice diagonale, les valeurs propres sont sur la diagonale ; la somme est la trace.',
          'في المصفوفة القطرية تكون القيم الذاتية على القطر؛ والمجموع هو الأثر.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'x′ = Ax has eigenvalues λ₁ = −1 and λ₂ = −3. As t → ∞, solutions…',
          'x′ = Ax a pour valeurs propres λ₁ = −1 et λ₂ = −3. Quand t → ∞, les solutions…',
          'للنظام x′ = Ax قيمتان ذاتيتان λ₁ = −1 و λ₂ = −3. عندما t → ∞ فإن الحلول…',
        ),
        choices: [
          {
            text: L(
              'Decay to the origin (stable node)',
              'Décroissent vers l\'origine (nœud stable)',
              'تتلاشى نحو نقطة الأصل (عقدة مستقرة)',
            ),
          },
          {
            text: L('Grow without bound', 'Croissent sans borne', 'تنمو بلا حدود'),
          },
          {
            text: L('Oscillate on closed orbits', 'Oscillent sur des orbites fermées', 'تتذبذب على مدارات مغلقة'),
          },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'undergraduate', 'differential-equations', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Fourier methods decompose periodic functions into sines and cosines: f(x) = a₀/2 + Σ (aₙ cos(nx) + bₙ sin(nx)). Substituting the series into a linear PDE like the heat equation uₜ = k·uₓₓ turns it into simple ODEs for the coefficients — each mode evolves independently.',
          'Les méthodes de Fourier décomposent les fonctions périodiques en sinus et cosinus : f(x) = a₀/2 + Σ (aₙ cos(nx) + bₙ sin(nx)). Substituer la série dans une EDP linéaire comme l\'équation de la chaleur uₜ = k·uₓₓ la transforme en EDO simples pour les coefficients — chaque mode évolue indépendamment.',
          'طرائق فورييه تفكك الدوال الدورية إلى جيوب وجيوب تمام: f(x) = a₀/2 + Σ (aₙ cos(nx) + bₙ sin(nx)). وتعويض المتسلسلة في معادلة تفاضلية جزئية خطية كمعادلة الحرارة uₜ = k·uₓₓ يحوّلها إلى معادلات تفاضلية عادية بسيطة للمعاملات — كل نمط يتطور مستقلاً.',
        ),
      },
      {
        type: 'example',
        question: L(
          'What is the Fourier series of f(x) = sin(3x) on [−π, π]?',
          'Quelle est la série de Fourier de f(x) = sin(3x) sur [−π, π] ?',
          'ما متسلسلة فورييه للدالة f(x) = sin(3x) على [−π, π]؟',
        ),
        answer: L(
          'It is already a single Fourier mode: b₃ = 1 and every other coefficient is 0, by orthogonality of the family {sin(nx), cos(nx)}.',
          'C\'est déjà un mode de Fourier unique : b₃ = 1 et tous les autres coefficients valent 0, par orthogonalité de la famille {sin(nx), cos(nx)}.',
          'هي أصلاً نمط فورييه واحد: b₃ = 1 وكل المعاملات الأخرى صفر، بفضل تعامد العائلة {sin(nx), cos(nx)}.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Why do Fourier methods work so well on linear PDEs with constant coefficients?',
          'Pourquoi les méthodes de Fourier marchent-elles si bien sur les EDP linéaires à coefficients constants ?',
          'لماذا تنجح طرائق فورييه جيداً مع المعادلات الجزئية الخطية ذات المعاملات الثابتة؟',
        ),
        choices: [
          {
            text: L(
              'Each sine/cosine mode is an eigenfunction of d²/dx², so modes decouple',
              'Chaque mode sinus/cosinus est une fonction propre de d²/dx², donc les modes se découplent',
              'كل نمط جيبي دالة ذاتية للمؤثر d²/dx²، لذلك تنفصل الأنماط عن بعضها',
            ),
          },
          {
            text: L(
              'Sines and cosines are the only bounded functions',
              'Les sinus et cosinus sont les seules fonctions bornées',
              'الجيوب وجيوب التمام هي الدوال المحدودة الوحيدة',
            ),
          },
          {
            text: L(
              'The series always has finitely many terms',
              'La série a toujours un nombre fini de termes',
              'المتسلسلة تحوي دائماً عدداً منتهياً من الحدود',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'For the heat equation uₜ = uₓₓ, the mode sin(nx) decays like e^(−n²t). How many times faster does the n = 3 mode decay compared to n = 1?',
          'Pour l\'équation de la chaleur uₜ = uₓₓ, le mode sin(nx) décroît comme e^(−n²t). Combien de fois plus vite le mode n = 3 décroît-il par rapport à n = 1 ?',
          'في معادلة الحرارة uₜ = uₓₓ يتضاءل النمط sin(nx) مثل e^(−n²t). كم مرة أسرع يتضاءل النمط n = 3 مقارنة بـ n = 1؟',
        ),
        answer: 9,
      },
    ],
  },

  // Graduate — Topology
  [lessonKey('mathematics', 'graduate', 'topology', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A metric space (X, d) is a set with a distance function d satisfying: d(x, y) ≥ 0 with equality iff x = y, symmetry d(x, y) = d(y, x), and the triangle inequality d(x, z) ≤ d(x, y) + d(y, z). The open ball B(x, r) = {y : d(x, y) < r} generates the metric topology: a set is open iff it contains a ball around each of its points.',
          'Un espace métrique (X, d) est un ensemble muni d\'une distance d vérifiant : d(x, y) ≥ 0 avec égalité ssi x = y, la symétrie d(x, y) = d(y, x), et l\'inégalité triangulaire d(x, z) ≤ d(x, y) + d(y, z). La boule ouverte B(x, r) = {y : d(x, y) < r} engendre la topologie métrique : un ensemble est ouvert ssi il contient une boule autour de chacun de ses points.',
          'الفضاء المتري (X, d) مجموعة مزودة بدالة مسافة d تحقق: d(x, y) ≥ 0 مع المساواة إذا وفقط إذا كان x = y، والتناظر d(x, y) = d(y, x)، ومتباينة المثلث d(x, z) ≤ d(x, y) + d(y, z). الكرة المفتوحة B(x, r) = {y : d(x, y) < r} تولّد الطوبولوجيا المترية: المجموعة مفتوحة إذا وفقط إذا احتوت كرة حول كل نقطة من نقاطها.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Examples: ℝⁿ with the Euclidean distance; any set with the discrete metric d(x, y) = 1 for x ≠ y.',
            'Exemples : ℝⁿ avec la distance euclidienne ; tout ensemble avec la métrique discrète d(x, y) = 1 pour x ≠ y.',
            'أمثلة: ℝⁿ مع المسافة الإقليدية؛ وأي مجموعة مع المترية المتقطعة d(x, y) = 1 عندما x ≠ y.',
          ),
          L(
            'A sequence xₙ → x iff d(xₙ, x) → 0.',
            'Une suite xₙ → x ssi d(xₙ, x) → 0.',
            'المتتالية xₙ → x إذا وفقط إذا كان d(xₙ, x) → 0.',
          ),
          L(
            'A space is complete when every Cauchy sequence converges; ℝ is complete, ℚ is not.',
            'Un espace est complet quand toute suite de Cauchy converge ; ℝ est complet, ℚ ne l\'est pas.',
            'الفضاء تام عندما تتقارب فيه كل متتالية كوشية؛ ℝ تام بينما ℚ ليس كذلك.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Why is ℚ with the usual distance not complete?',
          'Pourquoi ℚ avec la distance usuelle n\'est-il pas complet ?',
          'لماذا ليست ℚ مع المسافة المعتادة فضاءً تاماً؟',
        ),
        choices: [
          {
            text: L(
              'A Cauchy sequence of rationals can converge to an irrational like √2',
              'Une suite de Cauchy de rationnels peut converger vers un irrationnel comme √2',
              'قد تتقارب متتالية كوشية من الأعداد النسبية إلى عدد غير نسبي مثل √2',
            ),
          },
          {
            text: L(
              'ℚ contains sequences that are not Cauchy',
              'ℚ contient des suites qui ne sont pas de Cauchy',
              'ℚ تحتوي متتاليات ليست كوشية',
            ),
          },
          {
            text: L(
              'The triangle inequality fails in ℚ',
              'L\'inégalité triangulaire échoue dans ℚ',
              'متباينة المثلث لا تتحقق في ℚ',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the steps to prove that the open ball B(x, r) is open in a metric space.',
          'Ordonne les étapes pour prouver que la boule ouverte B(x, r) est ouverte dans un espace métrique.',
          'رتّب خطوات إثبات أن الكرة المفتوحة B(x, r) مجموعة مفتوحة في فضاء متري.',
        ),
        steps: [
          L(
            'Take an arbitrary point y ∈ B(x, r)',
            'Prendre un point quelconque y ∈ B(x, r)',
            'خذ نقطة اختيارية y ∈ B(x, r)',
          ),
          L(
            'Set ρ = r − d(x, y) > 0',
            'Poser ρ = r − d(x, y) > 0',
            'ضع ρ = r − d(x, y) > 0',
          ),
          L(
            'For z ∈ B(y, ρ), apply the triangle inequality: d(x, z) ≤ d(x, y) + d(y, z)',
            'Pour z ∈ B(y, ρ), appliquer l\'inégalité triangulaire : d(x, z) ≤ d(x, y) + d(y, z)',
            'لكل z ∈ B(y, ρ) طبّق متباينة المثلث: d(x, z) ≤ d(x, y) + d(y, z)',
          ),
          L(
            'Conclude d(x, z) < r, so B(y, ρ) ⊆ B(x, r)',
            'Conclure d(x, z) < r, donc B(y, ρ) ⊆ B(x, r)',
            'استنتج أن d(x, z) < r ومنه B(y, ρ) ⊆ B(x, r)',
          ),
        ],
      },
    ],
  },
  [lessonKey('mathematics', 'graduate', 'topology', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A space is compact if every open cover admits a finite subcover. In metric spaces, compactness is equivalent to sequential compactness: every sequence has a convergent subsequence. The Heine–Borel theorem characterizes compact subsets of ℝⁿ: they are exactly the closed and bounded sets. Continuous images of compact sets are compact.',
          'Un espace est compact si tout recouvrement ouvert admet un sous-recouvrement fini. Dans les espaces métriques, la compacité équivaut à la compacité séquentielle : toute suite admet une sous-suite convergente. Le théorème de Heine–Borel caractérise les compacts de ℝⁿ : ce sont exactement les ensembles fermés et bornés. L\'image continue d\'un compact est compacte.',
          'الفضاء متراص إذا كان لكل غطاء مفتوح غطاء جزئي منتهٍ. في الفضاءات المترية، التراص يكافئ التراص المتتالي: كل متتالية لها متتالية جزئية متقاربة. مبرهنة هاينه–بوريل تصف المجموعات المتراصة في ℝⁿ: هي بالضبط المجموعات المغلقة والمحدودة. والصورة المتصلة لمجموعة متراصة متراصة.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Show that (0, 1] is not compact using an open cover.',
          'Montre que (0, 1] n\'est pas compact à l\'aide d\'un recouvrement ouvert.',
          'بيّن أن (0, 1] ليست متراصة باستخدام غطاء مفتوح.',
        ),
        answer: L(
          'The sets Uₙ = (1/n, 2) for n ≥ 1 cover (0, 1], but any finite subfamily has a largest n, so it misses the points in (0, 1/n]. No finite subcover exists. ∎',
          'Les ensembles Uₙ = (1/n, 2) pour n ≥ 1 recouvrent (0, 1], mais toute sous-famille finie a un n maximal, donc elle manque les points de (0, 1/n]. Aucun sous-recouvrement fini n\'existe. ∎',
          'المجموعات Uₙ = (1/n, 2) حيث n ≥ 1 تغطي (0, 1]، لكن أي عائلة جزئية منتهية لها n أكبر، فتفوّت النقاط في (0, 1/n]. فلا يوجد غطاء جزئي منتهٍ. ∎',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which subset of ℝ is compact?',
          'Quelle partie de ℝ est compacte ?',
          'أي مجموعة جزئية من ℝ متراصة؟',
        ),
        choices: [
          { text: L('(0, 1)', '(0, 1)', '(0, 1)') },
          {
            text: L('[0, 1] ∪ {2}', '[0, 1] ∪ {2}', '[0, 1] ∪ {2}'),
            explanation: L(
              'It is closed and bounded, hence compact by Heine–Borel.',
              'Elle est fermée et bornée, donc compacte par Heine–Borel.',
              'إنها مغلقة ومحدودة، فهي متراصة حسب هاينه–بوريل.',
            ),
          },
          { text: L('ℤ', 'ℤ', 'ℤ') },
          { text: L('[0, ∞)', '[0, ∞)', '[0, ∞)') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'f : K → ℝ is continuous and K is compact. Which conclusion follows?',
          'f : K → ℝ est continue et K est compact. Quelle conclusion s\'ensuit ?',
          'الدالة f : K → ℝ متصلة و K متراصة. أي نتيجة تلزم؟',
        ),
        choices: [
          {
            text: L(
              'f is bounded and attains its maximum and minimum',
              'f est bornée et atteint son maximum et son minimum',
              'f محدودة وتبلغ قيمتها العظمى والصغرى',
            ),
          },
          {
            text: L('f is uniformly zero', 'f est identiquement nulle', 'f صفرية في كل مكان'),
          },
          {
            text: L('f is differentiable', 'f est dérivable', 'f قابلة للاشتقاق'),
          },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'graduate', 'topology', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A space X is connected if it cannot be split into two nonempty disjoint open sets. The connected subsets of ℝ are exactly the intervals. Continuous images of connected sets are connected — this is the topological heart of the intermediate value theorem. Path-connectedness (any two points joined by a continuous path) implies connectedness, but not conversely: the topologist\'s sine curve is connected yet not path-connected.',
          'Un espace X est connexe s\'il ne peut pas être scindé en deux ouverts disjoints non vides. Les parties connexes de ℝ sont exactement les intervalles. L\'image continue d\'un connexe est connexe — c\'est le cœur topologique du théorème des valeurs intermédiaires. La connexité par arcs (deux points quelconques reliés par un chemin continu) implique la connexité, mais pas l\'inverse : la courbe sinus du topologue est connexe mais pas connexe par arcs.',
          'الفضاء X مترابط إذا تعذّر تقسيمه إلى مجموعتين مفتوحتين منفصلتين غير خاليتين. المجموعات المترابطة في ℝ هي المجالات بالضبط. والصورة المتصلة لمجموعة مترابطة مترابطة — وهذا هو الجوهر الطوبولوجي لمبرهنة القيمة الوسيطة. الترابط المساري (كل نقطتين يصلهما مسار متصل) يستلزم الترابط، والعكس غير صحيح: منحنى الجيب الطوبولوجي مترابط لكنه غير مترابط مسارياً.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Connected components partition a space into maximal connected pieces.',
            'Les composantes connexes partitionnent un espace en morceaux connexes maximaux.',
            'المركّبات المترابطة تقسّم الفضاء إلى أجزاء مترابطة عظمى.',
          ),
          L(
            'Connectedness is a topological invariant: homeomorphic spaces have the same number of components.',
            'La connexité est un invariant topologique : des espaces homéomorphes ont le même nombre de composantes.',
            'الترابط لامتغيرة طوبولوجية: الفضاءات المتشاكلة طوبولوجياً لها نفس عدد المركّبات.',
          ),
          L(
            'Removing a point disconnects ℝ but not ℝ²: this proves ℝ and ℝ² are not homeomorphic.',
            'Retirer un point déconnecte ℝ mais pas ℝ² : cela prouve que ℝ et ℝ² ne sont pas homéomorphes.',
            'حذف نقطة يفكك ترابط ℝ لكن لا يفكك ℝ²: وهذا يثبت أن ℝ و ℝ² غير متشاكلين طوبولوجياً.',
          ),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'How many connected components does ℝ \\ {0, 1} have?',
          'Combien de composantes connexes possède ℝ \\ {0, 1} ?',
          'كم عدد المركّبات المترابطة للمجموعة ℝ \\ {0, 1}؟',
        ),
        answer: 3,
        hint: L(
          'The pieces are (−∞, 0), (0, 1) and (1, ∞).',
          'Les morceaux sont (−∞, 0), (0, 1) et (1, ∞).',
          'الأجزاء هي (−∞, 0) و (0, 1) و (1, ∞).',
        ),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which statement is true?',
          'Quelle affirmation est vraie ?',
          'أي عبارة صحيحة؟',
        ),
        choices: [
          {
            text: L(
              'Path-connected ⇒ connected',
              'Connexe par arcs ⇒ connexe',
              'الترابط المساري يستلزم الترابط',
            ),
          },
          {
            text: L(
              'Connected ⇒ path-connected',
              'Connexe ⇒ connexe par arcs',
              'الترابط يستلزم الترابط المساري',
            ),
            explanation: L(
              'False in general: the topologist\'s sine curve is a counterexample.',
              'Faux en général : la courbe sinus du topologue est un contre-exemple.',
              'خطأ عموماً: منحنى الجيب الطوبولوجي مثال مضاد.',
            ),
          },
          {
            text: L(
              'ℚ is a connected subset of ℝ',
              'ℚ est une partie connexe de ℝ',
              'ℚ مجموعة مترابطة في ℝ',
            ),
          },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Graduate — Functional analysis
  [lessonKey('mathematics', 'graduate', 'functional-analysis', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A Banach space is a complete normed vector space: every Cauchy sequence converges in the norm. Classical examples: C[0, 1] with the sup norm ‖f‖∞ = sup|f(x)|, the sequence spaces ℓᵖ with ‖x‖ₚ = (Σ|xₙ|ᵖ)^(1/p), and Lᵖ spaces of functions. Completeness is what makes limit arguments — series of vectors, fixed points, open mapping — work.',
          'Un espace de Banach est un espace vectoriel normé complet : toute suite de Cauchy converge en norme. Exemples classiques : C[0, 1] avec la norme sup ‖f‖∞ = sup|f(x)|, les espaces de suites ℓᵖ avec ‖x‖ₚ = (Σ|xₙ|ᵖ)^(1/p), et les espaces Lᵖ de fonctions. La complétude est ce qui fait fonctionner les arguments de limite — séries de vecteurs, points fixes, application ouverte.',
          'فضاء باناخ فضاء متجهي منظوم تام: كل متتالية كوشية تتقارب بالنسبة للنظم. أمثلة كلاسيكية: C[0, 1] مع نظم الحد الأعلى ‖f‖∞ = sup|f(x)|، وفضاءات المتتاليات ℓᵖ مع ‖x‖ₚ = (Σ|xₙ|ᵖ)^(1/p)، وفضاءات Lᵖ للدوال. والتمام هو ما يجعل حجج النهايات — متسلسلات المتجهات، النقاط الصامدة، التطبيق المفتوح — تعمل.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'A norm satisfies ‖x‖ ≥ 0 (with equality iff x = 0), ‖λx‖ = |λ|·‖x‖, and ‖x + y‖ ≤ ‖x‖ + ‖y‖.',
            'Une norme vérifie ‖x‖ ≥ 0 (avec égalité ssi x = 0), ‖λx‖ = |λ|·‖x‖, et ‖x + y‖ ≤ ‖x‖ + ‖y‖.',
            'النظم يحقق ‖x‖ ≥ 0 (مع المساواة إذا وفقط إذا كان x = 0)، و ‖λx‖ = |λ|·‖x‖، و ‖x + y‖ ≤ ‖x‖ + ‖y‖.',
          ),
          L(
            'The three pillars: Hahn–Banach, Banach–Steinhaus (uniform boundedness), and the open mapping theorem.',
            'Les trois piliers : Hahn–Banach, Banach–Steinhaus (borne uniforme), et le théorème de l\'application ouverte.',
            'الأعمدة الثلاثة: هان–باناخ، وباناخ–شتاينهاوس (المحدودية المنتظمة)، ومبرهنة التطبيق المفتوح.',
          ),
          L(
            'In infinite dimensions the closed unit ball is never norm-compact.',
            'En dimension infinie, la boule unité fermée n\'est jamais compacte en norme.',
            'في الأبعاد اللانهائية لا تكون كرة الوحدة المغلقة متراصة نظمياً أبداً.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'C[0, 1] with the sup norm is a Banach space mainly because…',
          'C[0, 1] avec la norme sup est un espace de Banach principalement parce que…',
          'C[0, 1] مع نظم الحد الأعلى فضاء باناخ أساساً لأن…',
        ),
        choices: [
          {
            text: L(
              'A uniform limit of continuous functions is continuous',
              'Une limite uniforme de fonctions continues est continue',
              'النهاية المنتظمة لدوال متصلة دالة متصلة',
            ),
            explanation: L(
              'Cauchy in ‖·‖∞ means uniformly Cauchy, and the uniform limit stays in C[0, 1].',
              'Être de Cauchy pour ‖·‖∞ signifie uniformément de Cauchy, et la limite uniforme reste dans C[0, 1].',
              'الكوشية بالنسبة لـ ‖·‖∞ تعني كوشية منتظمة، والنهاية المنتظمة تبقى في C[0, 1].',
            ),
          },
          {
            text: L(
              'Every continuous function is bounded',
              'Toute fonction continue est bornée',
              'كل دالة متصلة محدودة',
            ),
          },
          {
            text: L(
              'C[0, 1] is finite-dimensional',
              'C[0, 1] est de dimension finie',
              'C[0, 1] فضاء منتهي البعد',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'In ℓ¹, let x = (1/2, 1/4, 1/8, …). What is ‖x‖₁ = Σ |xₙ|?',
          'Dans ℓ¹, soit x = (1/2, 1/4, 1/8, …). Que vaut ‖x‖₁ = Σ |xₙ| ?',
          'في ℓ¹ ليكن x = (1/2, 1/4, 1/8, …). ما قيمة ‖x‖₁ = Σ |xₙ|؟',
        ),
        answer: 1,
        hint: L(
          'Geometric series with first term 1/2 and ratio 1/2.',
          'Série géométrique de premier terme 1/2 et de raison 1/2.',
          'متسلسلة هندسية حدها الأول 1/2 وأساسها 1/2.',
        ),
      },
    ],
  },
  [lessonKey('mathematics', 'graduate', 'functional-analysis', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A Hilbert space is a Banach space whose norm comes from an inner product: ‖x‖ = √⟨x, x⟩. The inner product gives geometry — angles, orthogonality, projections. Key facts: the Cauchy–Schwarz inequality |⟨x, y⟩| ≤ ‖x‖·‖y‖, the projection theorem onto closed convex sets, and the Riesz representation theorem: every continuous linear functional is f(x) = ⟨x, y⟩ for a unique y.',
          'Un espace de Hilbert est un espace de Banach dont la norme provient d\'un produit scalaire : ‖x‖ = √⟨x, x⟩. Le produit scalaire donne une géométrie — angles, orthogonalité, projections. Faits clés : l\'inégalité de Cauchy–Schwarz |⟨x, y⟩| ≤ ‖x‖·‖y‖, le théorème de projection sur les convexes fermés, et le théorème de représentation de Riesz : toute forme linéaire continue s\'écrit f(x) = ⟨x, y⟩ pour un unique y.',
          'فضاء هيلبرت فضاء باناخ ينبع نظمه من ضرب داخلي: ‖x‖ = √⟨x, x⟩. الضرب الداخلي يمنح هندسة — زوايا وتعامداً وإسقاطات. حقائق أساسية: متباينة كوشي–شفارتز |⟨x, y⟩| ≤ ‖x‖·‖y‖، ومبرهنة الإسقاط على المجموعات المحدبة المغلقة، ومبرهنة تمثيل ريس: كل تطبيق خطي متصل يُكتب f(x) = ⟨x, y⟩ لعنصر y وحيد.',
        ),
      },
      {
        type: 'example',
        question: L(
          'In ℓ² an orthonormal basis (eₙ) satisfies Parseval\'s identity ‖x‖² = Σ |⟨x, eₙ⟩|². Compute ‖x‖ if ⟨x, e₁⟩ = 3, ⟨x, e₂⟩ = 4 and all other coefficients vanish.',
          'Dans ℓ² une base orthonormée (eₙ) vérifie l\'identité de Parseval ‖x‖² = Σ |⟨x, eₙ⟩|². Calcule ‖x‖ si ⟨x, e₁⟩ = 3, ⟨x, e₂⟩ = 4 et tous les autres coefficients sont nuls.',
          'في ℓ² تحقق القاعدة المتعامدة المنظمة (eₙ) متطابقة بارسيفال ‖x‖² = Σ |⟨x, eₙ⟩|². احسب ‖x‖ إذا كان ⟨x, e₁⟩ = 3 و ⟨x, e₂⟩ = 4 وبقية المعاملات صفرية.',
        ),
        answer: L(
          '‖x‖² = 3² + 4² = 25, so ‖x‖ = 5 — the Pythagorean theorem in infinite dimensions.',
          '‖x‖² = 3² + 4² = 25, donc ‖x‖ = 5 — le théorème de Pythagore en dimension infinie.',
          '‖x‖² = 3² + 4² = 25، إذن ‖x‖ = 5 — مبرهنة فيثاغورس في الأبعاد اللانهائية.',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'x has orthonormal coefficients ⟨x, e₁⟩ = 6 and ⟨x, e₂⟩ = 8, all others zero. What is ‖x‖?',
          'x a pour coefficients orthonormés ⟨x, e₁⟩ = 6 et ⟨x, e₂⟩ = 8, tous les autres nuls. Que vaut ‖x‖ ?',
          'للعنصر x معاملان ⟨x, e₁⟩ = 6 و ⟨x, e₂⟩ = 8 وبقية المعاملات صفرية. ما قيمة ‖x‖؟',
        ),
        answer: 10,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which identity characterizes norms that come from an inner product?',
          'Quelle identité caractérise les normes issues d\'un produit scalaire ?',
          'أي متطابقة تميز النظوم النابعة من ضرب داخلي؟',
        ),
        choices: [
          {
            text: L(
              'The parallelogram law: ‖x + y‖² + ‖x − y‖² = 2‖x‖² + 2‖y‖²',
              'L\'identité du parallélogramme : ‖x + y‖² + ‖x − y‖² = 2‖x‖² + 2‖y‖²',
              'قانون متوازي الأضلاع: ‖x + y‖² + ‖x − y‖² = 2‖x‖² + 2‖y‖²',
            ),
          },
          {
            text: L(
              'The triangle inequality: ‖x + y‖ ≤ ‖x‖ + ‖y‖',
              'L\'inégalité triangulaire : ‖x + y‖ ≤ ‖x‖ + ‖y‖',
              'متباينة المثلث: ‖x + y‖ ≤ ‖x‖ + ‖y‖',
            ),
          },
          {
            text: L(
              'Homogeneity: ‖λx‖ = |λ|·‖x‖',
              'L\'homogénéité : ‖λx‖ = |λ|·‖x‖',
              'التجانس: ‖λx‖ = |λ|·‖x‖',
            ),
          },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'graduate', 'functional-analysis', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A linear operator T : X → Y between normed spaces is bounded if ‖T‖ = sup{‖Tx‖ : ‖x‖ ≤ 1} < ∞; for linear maps, bounded is equivalent to continuous. The spectrum σ(T) generalizes eigenvalues: it is the set of λ for which T − λI is not invertible. Compact self-adjoint operators on a Hilbert space admit a spectral theorem: an orthonormal basis of eigenvectors with real eigenvalues tending to 0.',
          'Un opérateur linéaire T : X → Y entre espaces normés est borné si ‖T‖ = sup{‖Tx‖ : ‖x‖ ≤ 1} < ∞ ; pour les applications linéaires, borné équivaut à continu. Le spectre σ(T) généralise les valeurs propres : c\'est l\'ensemble des λ pour lesquels T − λI n\'est pas inversible. Les opérateurs compacts auto-adjoints sur un espace de Hilbert admettent un théorème spectral : une base orthonormée de vecteurs propres avec des valeurs propres réelles tendant vers 0.',
          'المؤثر الخطي T : X → Y بين فضاءين منظومين محدود إذا كان ‖T‖ = sup{‖Tx‖ : ‖x‖ ≤ 1} < ∞؛ وللتطبيقات الخطية، المحدودية تكافئ الاتصال. الطيف σ(T) يعمم القيم الذاتية: وهو مجموعة قيم λ التي لا يكون عندها T − λI قابلاً للعكس. والمؤثرات المتراصة الذاتية الترافق على فضاء هيلبرت تخضع لمبرهنة طيفية: قاعدة متعامدة منظمة من المتجهات الذاتية بقيم ذاتية حقيقية تؤول إلى 0.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'The operator norm satisfies ‖Tx‖ ≤ ‖T‖·‖x‖ and ‖ST‖ ≤ ‖S‖·‖T‖.',
            'La norme d\'opérateur vérifie ‖Tx‖ ≤ ‖T‖·‖x‖ et ‖ST‖ ≤ ‖S‖·‖T‖.',
            'نظم المؤثر يحقق ‖Tx‖ ≤ ‖T‖·‖x‖ و ‖ST‖ ≤ ‖S‖·‖T‖.',
          ),
          L(
            'In infinite dimensions the spectrum can be larger than the set of eigenvalues.',
            'En dimension infinie, le spectre peut être plus grand que l\'ensemble des valeurs propres.',
            'في الأبعاد اللانهائية قد يكون الطيف أكبر من مجموعة القيم الذاتية.',
          ),
          L(
            'Example: the shift S(x₁, x₂, …) = (0, x₁, x₂, …) on ℓ² is bounded with no eigenvalues.',
            'Exemple : le shift S(x₁, x₂, …) = (0, x₁, x₂, …) sur ℓ² est borné et sans valeur propre.',
            'مثال: مؤثر الإزاحة S(x₁, x₂, …) = (0, x₁, x₂, …) على ℓ² محدود وليس له قيم ذاتية.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'T is defined on ℓ² by T(x₁, x₂, x₃, …) = (x₁, x₂/2, x₃/3, …). What is ‖T‖?',
          'T est défini sur ℓ² par T(x₁, x₂, x₃, …) = (x₁, x₂/2, x₃/3, …). Que vaut ‖T‖ ?',
          'المؤثر T معرّف على ℓ² بـ T(x₁, x₂, x₃, …) = (x₁, x₂/2, x₃/3, …). ما قيمة ‖T‖؟',
        ),
        choices: [
          {
            text: L('1', '1', '1'),
            explanation: L(
              '‖Tx‖ ≤ ‖x‖ since each coordinate shrinks, and T(e₁) = e₁ attains the bound.',
              '‖Tx‖ ≤ ‖x‖ car chaque coordonnée diminue, et T(e₁) = e₁ atteint la borne.',
              '‖Tx‖ ≤ ‖x‖ لأن كل مركّبة تتقلص، و T(e₁) = e₁ يبلغ هذا الحد.',
            ),
          },
          { text: L('0', '0', '0') },
          { text: L('∞ (unbounded)', '∞ (non borné)', '∞ (غير محدود)') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the steps proving that a bounded linear operator T is continuous.',
          'Ordonne les étapes prouvant qu\'un opérateur linéaire borné T est continu.',
          'رتّب خطوات إثبات أن المؤثر الخطي المحدود T متصل.',
        ),
        steps: [
          L(
            'Assume ‖T‖ < ∞ and take xₙ → x',
            'Supposer ‖T‖ < ∞ et prendre xₙ → x',
            'افترض أن ‖T‖ < ∞ وخذ xₙ → x',
          ),
          L(
            'Use linearity: Txₙ − Tx = T(xₙ − x)',
            'Utiliser la linéarité : Txₙ − Tx = T(xₙ − x)',
            'استخدم الخطية: Txₙ − Tx = T(xₙ − x)',
          ),
          L(
            'Bound the norm: ‖T(xₙ − x)‖ ≤ ‖T‖·‖xₙ − x‖',
            'Majorer la norme : ‖T(xₙ − x)‖ ≤ ‖T‖·‖xₙ − x‖',
            'قدّر النظم: ‖T(xₙ − x)‖ ≤ ‖T‖·‖xₙ − x‖',
          ),
          L(
            'Conclude ‖Txₙ − Tx‖ → 0, so Txₙ → Tx',
            'Conclure ‖Txₙ − Tx‖ → 0, donc Txₙ → Tx',
            'استنتج أن ‖Txₙ − Tx‖ → 0 ومنه Txₙ → Tx',
          ),
        ],
      },
    ],
  },

  // PhD — Research
  [lessonKey('mathematics', 'phd', 'research', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Formulating a research problem is itself a mathematical skill. A good problem is precise (stated with exact definitions and quantifiers), open (not already settled), tractable (there is a plausible line of attack), and significant (an answer would connect to or unlock other results). Vague ambitions like "understand turbulence" must be sharpened into concrete statements you can attack, such as bounding a specific quantity or proving existence in a special case.',
          'Formuler un problème de recherche est en soi une compétence mathématique. Un bon problème est précis (énoncé avec des définitions et quantificateurs exacts), ouvert (pas déjà résolu), abordable (une piste d\'attaque plausible existe) et significatif (une réponse se relierait à d\'autres résultats ou en débloquerait). Les ambitions vagues comme « comprendre la turbulence » doivent être affinées en énoncés concrets attaquables, comme borner une quantité précise ou prouver l\'existence dans un cas particulier.',
          'صياغة مشكلة البحث مهارة رياضية بحد ذاتها. المشكلة الجيدة دقيقة (مصاغة بتعريفات ومكمّمات محددة)، ومفتوحة (لم تُحسم بعد)، وقابلة للمعالجة (يوجد مسار هجوم معقول)، ومهمة (الإجابة عنها ترتبط بنتائج أخرى أو تفتح آفاقها). الطموحات الغامضة مثل «فهم الاضطراب» يجب شحذها إلى عبارات ملموسة يمكن مهاجمتها، كتقدير كمية محددة أو إثبات الوجود في حالة خاصة.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Test the statement on the smallest nontrivial example before investing months.',
            'Teste l\'énoncé sur le plus petit exemple non trivial avant d\'y investir des mois.',
            'اختبر العبارة على أصغر مثال غير بديهي قبل استثمار شهور فيها.',
          ),
          L(
            'Weaken or strengthen hypotheses to locate the true boundary of the phenomenon.',
            'Affaiblis ou renforce les hypothèses pour localiser la vraie frontière du phénomène.',
            'أضعف الفرضيات أو قوّها لتحديد الحدود الحقيقية للظاهرة.',
          ),
          L(
            'Search for counterexamples as hard as you search for proofs.',
            'Cherche des contre-exemples aussi intensément que des preuves.',
            'ابحث عن أمثلة مضادة بنفس جدية بحثك عن البراهين.',
          ),
          L(
            'Write the conjecture with all quantifiers explicit: ∀, ∃ and their order matter.',
            'Écris la conjecture avec tous les quantificateurs explicites : ∀, ∃ et leur ordre comptent.',
            'اكتب الحدسية بكل مكمّماتها صراحة: ∀ و ∃ وترتيبهما مهمان.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which is the best-formulated research question?',
          'Quelle est la question de recherche la mieux formulée ?',
          'أي سؤال بحثي هو الأفضل صياغة؟',
        ),
        choices: [
          {
            text: L(
              'Does every ε > 0 admit an N such that property P(n, ε) holds for all n ≥ N, when the data is smooth?',
              'Tout ε > 0 admet-il un N tel que la propriété P(n, ε) soit vraie pour tout n ≥ N, quand les données sont lisses ?',
              'هل لكل ε > 0 يوجد N بحيث تتحقق الخاصية P(n, ε) لكل n ≥ N عندما تكون المعطيات ملساء؟',
            ),
            explanation: L(
              'It is precise, quantified, and delimits its hypotheses.',
              'Elle est précise, quantifiée, et délimite ses hypothèses.',
              'إنه دقيق ومكمّم ويحدد فرضياته.',
            ),
          },
          {
            text: L(
              'Can we understand nonlinear equations better?',
              'Peut-on mieux comprendre les équations non linéaires ?',
              'هل يمكننا فهم المعادلات اللاخطية بشكل أفضل؟',
            ),
          },
          {
            text: L(
              'Is analysis harder than algebra?',
              'L\'analyse est-elle plus difficile que l\'algèbre ?',
              'هل التحليل أصعب من الجبر؟',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order a sound workflow for refining a raw idea into a research problem.',
          'Ordonne un déroulement solide pour raffiner une idée brute en problème de recherche.',
          'رتّب مساراً سليماً لتحويل فكرة خام إلى مشكلة بحثية.',
        ),
        steps: [
          L(
            'State the phenomenon informally and gather motivating examples',
            'Énoncer le phénomène informellement et rassembler des exemples motivants',
            'صِف الظاهرة وصفاً أولياً واجمع أمثلة محفزة',
          ),
          L(
            'Fix precise definitions and write a formal conjecture',
            'Fixer des définitions précises et écrire une conjecture formelle',
            'ثبّت تعريفات دقيقة واكتب حدسية صورية',
          ),
          L(
            'Probe it: small cases, extreme cases, candidate counterexamples',
            'La sonder : petits cas, cas extrêmes, contre-exemples candidats',
            'اختبرها: حالات صغيرة وحالات قصوى وأمثلة مضادة مرشحة',
          ),
          L(
            'Check novelty against the literature and consult experts',
            'Vérifier la nouveauté dans la littérature et consulter des experts',
            'تحقق من الجدة في الأدبيات واستشر الخبراء',
          ),
          L(
            'Commit to a tractable first sub-problem and a plan of attack',
            'S\'engager sur un premier sous-problème abordable et un plan d\'attaque',
            'التزم بمسألة فرعية أولى قابلة للمعالجة وخطة هجوم',
          ),
        ],
      },
    ],
  },
  [lessonKey('mathematics', 'phd', 'research', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A literature review maps what is known before you attempt what is not. In mathematics the primary tools are MathSciNet, zbMATH, and arXiv; citation chasing works in both directions: backward through a paper\'s references and forward through the papers that cite it. Reading a research paper is nonlinear: first the abstract, introduction and main theorems, then the structure of the proofs, and only then the technical details you actually need.',
          'Une revue de littérature cartographie ce qui est connu avant de tenter ce qui ne l\'est pas. En mathématiques, les outils principaux sont MathSciNet, zbMATH et arXiv ; la chasse aux citations fonctionne dans les deux sens : en arrière via les références d\'un article et en avant via les articles qui le citent. Lire un article de recherche est non linéaire : d\'abord le résumé, l\'introduction et les théorèmes principaux, puis la structure des preuves, et seulement ensuite les détails techniques dont on a réellement besoin.',
          'مراجعة الأدبيات ترسم خريطة المعروف قبل محاولة المجهول. في الرياضيات الأدوات الأساسية هي MathSciNet و zbMATH و arXiv؛ وتتبع الاستشهادات يعمل في الاتجاهين: إلى الخلف عبر مراجع الورقة وإلى الأمام عبر الأوراق التي تستشهد بها. وقراءة ورقة بحثية عملية غير خطية: الملخص والمقدمة والمبرهنات الرئيسية أولاً، ثم بنية البراهين، وأخيراً التفاصيل التقنية التي تحتاجها فعلاً.',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Keep an annotated bibliography: result, method, hypotheses, and what it does not cover.',
            'Tiens une bibliographie annotée : résultat, méthode, hypothèses, et ce qu\'elle ne couvre pas.',
            'احتفظ بقائمة مراجع مشروحة: النتيجة والطريقة والفرضيات وما لا تغطيه.',
          ),
          L(
            'Track notation: the same object may carry different names across schools.',
            'Suis la notation : le même objet peut porter des noms différents selon les écoles.',
            'تتبّع الرموز: قد يحمل الكائن نفسه أسماء مختلفة بين المدارس.',
          ),
          L(
            'Identify the state of the art: the strongest known result and the exact gap you target.',
            'Identifie l\'état de l\'art : le résultat le plus fort connu et la lacune exacte que tu vises.',
            'حدد أحدث ما وصل إليه المجال: أقوى نتيجة معروفة والثغرة الدقيقة التي تستهدفها.',
          ),
          L(
            'Check surveys and theses first; they compress decades of work into readable maps.',
            'Consulte d\'abord les surveys et les thèses ; ils compressent des décennies de travail en cartes lisibles.',
            'ابدأ بالمقالات المسحية والأطروحات؛ فهي تضغط عقوداً من العمل في خرائط سهلة القراءة.',
          ),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order an efficient first reading of a research paper.',
          'Ordonne une première lecture efficace d\'un article de recherche.',
          'رتّب قراءة أولى فعالة لورقة بحثية.',
        ),
        steps: [
          L(
            'Read the abstract and introduction to get the claim and its context',
            'Lire le résumé et l\'introduction pour saisir l\'énoncé et son contexte',
            'اقرأ الملخص والمقدمة لفهم الادعاء وسياقه',
          ),
          L(
            'State the main theorems in your own words with all hypotheses',
            'Reformuler les théorèmes principaux avec toutes les hypothèses',
            'أعد صياغة المبرهنات الرئيسية بكلماتك مع كل الفرضيات',
          ),
          L(
            'Skim the proof architecture: lemmas and how they chain together',
            'Survoler l\'architecture des preuves : les lemmes et leur enchaînement',
            'تصفّح هيكل البراهين: التمهيديات وكيف تترابط',
          ),
          L(
            'Work through in detail only the sections your project needs',
            'Étudier en détail seulement les sections utiles à ton projet',
            'ادرس بالتفصيل الأقسام التي يحتاجها مشروعك فقط',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'You find a 2010 paper central to your problem. What is the most important next search?',
          'Tu trouves un article de 2010 central pour ton problème. Quelle est la recherche suivante la plus importante ?',
          'وجدت ورقة من 2010 محورية لمشكلتك. ما أهم بحث تالٍ تقوم به؟',
        ),
        choices: [
          {
            text: L(
              'Forward citations: papers since 2010 that cite it, in case the problem is already solved',
              'Les citations avant : les articles depuis 2010 qui le citent, au cas où le problème serait déjà résolu',
              'الاستشهادات اللاحقة: الأوراق التي استشهدت بها منذ 2010، تحسباً لأن تكون المشكلة قد حُلّت',
            ),
          },
          {
            text: L(
              'The authors\' unrelated earlier work',
              'Les travaux antérieurs sans rapport des auteurs',
              'أعمال المؤلفين السابقة غير ذات الصلة',
            ),
          },
          {
            text: L(
              'Nothing: one central paper is enough for a review',
              'Rien : un article central suffit pour une revue',
              'لا شيء: ورقة محورية واحدة تكفي للمراجعة',
            ),
          },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('mathematics', 'phd', 'research', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'An original contribution changes the state of knowledge: a new theorem, a stronger bound, a counterexample, a new proof technique, or an unexpected bridge between fields. Originality is judged relative to the literature, which is why the review precedes the contribution. The work only becomes a contribution once it is communicated: written rigorously, submitted to peer review, defended, and revised.',
          'Une contribution originale change l\'état des connaissances : un nouveau théorème, une borne plus forte, un contre-exemple, une nouvelle technique de preuve, ou un pont inattendu entre domaines. L\'originalité se juge par rapport à la littérature, c\'est pourquoi la revue précède la contribution. Le travail ne devient une contribution qu\'une fois communiqué : rédigé rigoureusement, soumis à l\'évaluation par les pairs, défendu et révisé.',
          'المساهمة الأصيلة تغيّر حالة المعرفة: مبرهنة جديدة، أو تقدير أقوى، أو مثال مضاد، أو تقنية برهان جديدة، أو جسر غير متوقع بين مجالات. وتُقاس الأصالة نسبةً إلى الأدبيات، ولهذا تسبق المراجعةُ المساهمةَ. ولا يصبح العمل مساهمة إلا بعد إيصاله: كتابته بدقة، وإخضاعه لتحكيم الأقران، والدفاع عنه، ومراجعته.',
        ),
      },
      {
        type: 'example',
        question: L(
          'A student generalizes a known inequality from ℝ² to ℝⁿ using essentially the same proof. Is this an original contribution?',
          'Un étudiant généralise une inégalité connue de ℝ² à ℝⁿ avec essentiellement la même preuve. Est-ce une contribution originale ?',
          'طالب عمّم متباينة معروفة من ℝ² إلى ℝⁿ بالبرهان نفسه تقريباً. هل هذه مساهمة أصيلة؟',
        ),
        answer: L(
          'A modest one at best: routine generalizations carry little weight unless the extension requires new ideas, reveals new phenomena (e.g. dimension-dependent constants), or unlocks applications. Referees ask: what genuinely new difficulty was overcome?',
          'Au mieux une contribution modeste : les généralisations de routine pèsent peu, sauf si l\'extension exige des idées nouvelles, révèle de nouveaux phénomènes (p. ex. des constantes dépendant de la dimension) ou débloque des applications. Les rapporteurs demandent : quelle difficulté vraiment nouvelle a été surmontée ?',
          'مساهمة متواضعة في أحسن الأحوال: التعميمات الروتينية وزنها قليل ما لم يتطلب التوسيع أفكاراً جديدة، أو يكشف ظواهر جديدة (كثوابت تعتمد على البعد)، أو يفتح تطبيقات. يسأل المحكّمون: ما الصعوبة الجديدة حقاً التي جرى تجاوزها؟',
        ),
      },
      {
        type: 'list',
        items: [
          L(
            'Forms of contribution: theorem, counterexample, technique, classification, or connection between fields.',
            'Formes de contribution : théorème, contre-exemple, technique, classification, ou connexion entre domaines.',
            'أشكال المساهمة: مبرهنة، مثال مضاد، تقنية، تصنيف، أو ربط بين مجالات.',
          ),
          L(
            'Rigor is non-negotiable: every claimed step must be checkable by a referee.',
            'La rigueur n\'est pas négociable : chaque étape affirmée doit être vérifiable par un rapporteur.',
            'الدقة غير قابلة للتفاوض: كل خطوة مدّعاة يجب أن يستطيع المحكّم التحقق منها.',
          ),
          L(
            'Attribute prior work scrupulously; the introduction must position your result against the state of the art.',
            'Attribue scrupuleusement les travaux antérieurs ; l\'introduction doit positionner ton résultat face à l\'état de l\'art.',
            'انسب الأعمال السابقة بأمانة؛ ويجب أن تموضع المقدمة نتيجتك إزاء أحدث ما في المجال.',
          ),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which outcome would referees most clearly count as an original contribution?',
          'Quel résultat les rapporteurs compteraient-ils le plus clairement comme contribution originale ?',
          'أي نتيجة سيَعدّها المحكّمون مساهمة أصيلة بأوضح شكل؟',
        ),
        choices: [
          {
            text: L(
              'A counterexample refuting a conjecture open for twenty years',
              'Un contre-exemple réfutant une conjecture ouverte depuis vingt ans',
              'مثال مضاد يدحض حدسية ظلت مفتوحة عشرين عاماً',
            ),
            explanation: L(
              'It settles an open question and redirects the field — a definitive advance.',
              'Il tranche une question ouverte et réoriente le domaine — une avancée définitive.',
              'إنه يحسم سؤالاً مفتوحاً ويعيد توجيه المجال — تقدم حاسم.',
            ),
          },
          {
            text: L(
              'Re-deriving a textbook theorem with the standard proof',
              'Redémontrer un théorème de manuel avec la preuve standard',
              'إعادة اشتقاق مبرهنة من كتاب مقرر بالبرهان المعتاد',
            ),
          },
          {
            text: L(
              'Verifying a known result numerically in a few cases',
              'Vérifier numériquement un résultat connu dans quelques cas',
              'التحقق عددياً من نتيجة معروفة في حالات قليلة',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the path from a proved result to a published contribution.',
          'Ordonne le chemin d\'un résultat démontré à une contribution publiée.',
          'رتّب المسار من نتيجة مثبتة إلى مساهمة منشورة.',
        ),
        steps: [
          L(
            'Verify the proof end to end and stress-test edge cases',
            'Vérifier la preuve de bout en bout et tester les cas limites',
            'تحقق من البرهان كاملاً واختبر الحالات الحدية بصرامة',
          ),
          L(
            'Write the paper: introduction, precise statements, complete proofs',
            'Rédiger l\'article : introduction, énoncés précis, preuves complètes',
            'اكتب الورقة: مقدمة وعبارات دقيقة وبراهين كاملة',
          ),
          L(
            'Post a preprint and submit to a suitable journal',
            'Déposer un preprint et soumettre à une revue adaptée',
            'انشر مسودة أولية وقدّمها إلى مجلة مناسبة',
          ),
          L(
            'Answer the referee reports and revise',
            'Répondre aux rapports des rapporteurs et réviser',
            'أجب عن تقارير المحكّمين ونقّح',
          ),
          L(
            'Publish and present the result to the community',
            'Publier et présenter le résultat à la communauté',
            'انشر النتيجة وقدّمها للمجتمع العلمي',
          ),
        ],
      },
    ],
  },
}
