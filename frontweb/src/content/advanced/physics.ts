import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// Physics track: high school → undergraduate → graduate (QFT, GR) → PhD frontier.
export const physicsAdvancedLessons: Record<string, LessonContent> = {
  // High — Mechanics
  [lessonKey('physics', 'high', 'mechanics', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Kinematics describes motion without asking why it happens. Position x, velocity v and acceleration a are linked: v tells how fast x changes, a tells how fast v changes.',
          'La cinématique décrit le mouvement sans se demander pourquoi il se produit. La position x, la vitesse v et l\'accélération a sont liées : v indique la variation de x, a indique la variation de v.',
          'علم الحركة (الكينماتيكا) يصف الحركة دون السؤال عن سببها. الموضع x والسرعة v والتسارع a مترابطة: v تصف تغيّر x، و a تصف تغيّر v.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Constant acceleration: v = v₀ + at.', 'Accélération constante : v = v₀ + at.', 'تسارع ثابت: v = v₀ + at.'),
          L('Position: x = x₀ + v₀t + ½at².', 'Position : x = x₀ + v₀t + ½at².', 'الموضع: x = x₀ + v₀t + ½at².'),
          L('No time needed: v² = v₀² + 2aΔx.', 'Sans le temps : v² = v₀² + 2aΔx.', 'دون الزمن: v² = v₀² + 2aΔx.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'A ball is dropped from rest. How fast is it falling after 2 s? (g = 9.8 m/s²)',
          'On lâche une balle sans vitesse initiale. Quelle est sa vitesse après 2 s ? (g = 9,8 m/s²)',
          'أُسقطت كرة من السكون. ما سرعتها بعد ثانيتين؟ (g = 9.8 م/ث²)',
        ),
        answer: L(
          'v = v₀ + gt = 0 + 9.8 × 2 = 19.6 m/s.',
          'v = v₀ + gt = 0 + 9,8 × 2 = 19,6 m/s.',
          'v = v₀ + gt = 0 + 9.8 × 2 = 19.6 م/ث.',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A car starts from rest and accelerates at 2 m/s² for 5 s. What is its final speed in m/s?',
          'Une voiture part du repos et accélère à 2 m/s² pendant 5 s. Quelle est sa vitesse finale en m/s ?',
          'تنطلق سيارة من السكون بتسارع 2 م/ث² لمدة 5 ثوانٍ. ما سرعتها النهائية بوحدة م/ث؟',
        ),
        answer: 10,
        unit: 'm/s',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'On a velocity–time graph, what does the slope represent?',
          'Sur un graphique vitesse–temps, que représente la pente ?',
          'في منحنى السرعة–الزمن، ماذا يمثل الميل؟',
        ),
        choices: [
          { text: L('Position', 'La position', 'الموضع') },
          {
            text: L('Acceleration', 'L\'accélération', 'التسارع'),
            explanation: L(
              'Slope = Δv/Δt = a. The area under the curve gives displacement.',
              'Pente = Δv/Δt = a. L\'aire sous la courbe donne le déplacement.',
              'الميل = Δv/Δt = a. أما المساحة تحت المنحنى فتعطي الإزاحة.',
            ),
          },
          { text: L('Distance traveled', 'La distance parcourue', 'المسافة المقطوعة') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('physics', 'high', 'mechanics', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Dynamics explains why motion changes: forces. Newton\'s second law, F = ma, says the net force on an object equals its mass times its acceleration.',
          'La dynamique explique pourquoi le mouvement change : les forces. La deuxième loi de Newton, F = ma, dit que la force nette sur un objet égale sa masse fois son accélération.',
          'الديناميكا تفسر سبب تغيّر الحركة: القوى. ينص قانون نيوتن الثاني، F = ma، على أن محصلة القوى على جسم تساوي كتلته مضروبة في تسارعه.',
        ),
      },
      {
        type: 'list',
        items: [
          L('First law: no net force → constant velocity.', 'Première loi : force nette nulle → vitesse constante.', 'القانون الأول: بلا قوة محصلة ← سرعة ثابتة.'),
          L('Second law: F = ma (F in newtons).', 'Deuxième loi : F = ma (F en newtons).', 'القانون الثاني: F = ma (القوة بالنيوتن).'),
          L('Third law: every action has an equal and opposite reaction.', 'Troisième loi : toute action a une réaction égale et opposée.', 'القانون الثالث: لكل فعل رد فعل مساوٍ له ومعاكس في الاتجاه.'),
          L('Weight is a force: W = mg.', 'Le poids est une force : W = mg.', 'الوزن قوة: W = mg.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A book rests on a table. Which pair is an action–reaction pair (third law)?',
          'Un livre est posé sur une table. Quelle paire est une paire action–réaction (troisième loi) ?',
          'كتاب موضوع على طاولة. أي زوج يمثل زوج فعل ورد فعل (القانون الثالث)؟',
        ),
        choices: [
          {
            text: L(
              'Book pushes table down; table pushes book up',
              'Le livre pousse la table vers le bas ; la table pousse le livre vers le haut',
              'الكتاب يضغط على الطاولة لأسفل؛ والطاولة تدفع الكتاب لأعلى',
            ),
            explanation: L(
              'Action–reaction forces act on different objects.',
              'Les forces action–réaction agissent sur des objets différents.',
              'قوتا الفعل ورد الفعل تؤثران على جسمين مختلفين.',
            ),
          },
          {
            text: L(
              'Gravity on the book; normal force on the book',
              'La gravité sur le livre ; la force normale sur le livre',
              'الجاذبية على الكتاب؛ والقوة العمودية على الكتاب',
            ),
          },
          {
            text: L(
              'Gravity on the book; gravity on the table',
              'La gravité sur le livre ; la gravité sur la table',
              'الجاذبية على الكتاب؛ والجاذبية على الطاولة',
            ),
          },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'A net force of 24 N acts on a 6 kg box. What is its acceleration in m/s²?',
          'Une force nette de 24 N agit sur une caisse de 6 kg. Quelle est son accélération en m/s² ?',
          'تؤثر قوة محصلتها 24 نيوتن على صندوق كتلته 6 كغ. ما تسارعه بوحدة م/ث²؟',
        ),
        answer: 4,
        unit: 'm/s²',
      },
    ],
  },
  [lessonKey('physics', 'high', 'mechanics', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Rotational motion mirrors linear motion: angle θ replaces position, angular velocity ω replaces v, and torque τ = rF replaces force. Torque is what makes objects spin faster or slower.',
          'Le mouvement de rotation reflète le mouvement linéaire : l\'angle θ remplace la position, la vitesse angulaire ω remplace v, et le moment de force τ = rF remplace la force. Le moment de force fait tourner les objets plus vite ou plus lentement.',
          'الحركة الدورانية تناظر الحركة الخطية: الزاوية θ تحل محل الموضع، والسرعة الزاوية ω محل v، والعزم τ = rF محل القوة. العزم هو ما يجعل الأجسام تدور أسرع أو أبطأ.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Torque: τ = rF (force applied at distance r from the axis).', 'Moment de force : τ = rF (force appliquée à la distance r de l\'axe).', 'العزم: τ = rF (قوة مطبقة على بعد r من المحور).'),
          L('Moment of inertia I plays the role of mass: τ = Iα.', 'Le moment d\'inertie I joue le rôle de la masse : τ = Iα.', 'عزم القصور الذاتي I يلعب دور الكتلة: τ = Iα.'),
          L('Angular momentum L = Iω is conserved without external torque.', 'Le moment cinétique L = Iω se conserve sans moment de force externe.', 'الزخم الزاوي L = Iω محفوظ في غياب عزم خارجي.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A spinning skater pulls her arms in. What happens to her angular velocity?',
          'Une patineuse en rotation ramène ses bras. Que devient sa vitesse angulaire ?',
          'متزلجة تدور وتضم ذراعيها. ماذا يحدث لسرعتها الزاوية؟',
        ),
        choices: [
          {
            text: L('It increases', 'Elle augmente', 'تزداد'),
            explanation: L(
              'L = Iω is conserved; pulling arms in lowers I, so ω rises.',
              'L = Iω se conserve ; ramener les bras réduit I, donc ω augmente.',
              'L = Iω محفوظ؛ ضم الذراعين يقلل I فتزداد ω.',
            ),
          },
          { text: L('It decreases', 'Elle diminue', 'تنقص') },
          { text: L('It stays the same', 'Elle reste la même', 'تبقى كما هي') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'You push a door with 20 N at 0.5 m from the hinges, perpendicular to the door. What torque do you apply in N·m?',
          'Tu pousses une porte avec 20 N à 0,5 m des gonds, perpendiculairement à la porte. Quel moment de force appliques-tu en N·m ?',
          'تدفع باباً بقوة 20 نيوتن على بعد 0.5 م من المفصلات وبشكل عمودي على الباب. ما العزم المطبق بوحدة نيوتن·متر؟',
        ),
        answer: 10,
        unit: 'N·m',
      },
    ],
  },

  // High — Thermodynamics
  [lessonKey('physics', 'high', 'thermo', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Temperature measures the average kinetic energy of particles. Heat Q is energy transferred because of a temperature difference — it always flows spontaneously from hot to cold.',
          'La température mesure l\'énergie cinétique moyenne des particules. La chaleur Q est l\'énergie transférée à cause d\'une différence de température — elle va toujours spontanément du chaud vers le froid.',
          'درجة الحرارة تقيس متوسط الطاقة الحركية للجسيمات. الحرارة Q هي طاقة تنتقل بسبب فرق في درجة الحرارة — وتتدفق تلقائياً دائماً من الساخن إلى البارد.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Heating formula: Q = mcΔT, where c is the specific heat.', 'Formule de chauffage : Q = mcΔT, où c est la chaleur massique.', 'معادلة التسخين: Q = mcΔT، حيث c الحرارة النوعية.'),
          L('Water: c ≈ 4200 J/(kg·°C) — very high, so water heats slowly.', 'Eau : c ≈ 4200 J/(kg·°C) — très élevée, donc l\'eau chauffe lentement.', 'الماء: c ≈ 4200 جول/(كغ·°س) — قيمة مرتفعة جداً، لذلك يسخن الماء ببطء.'),
          L('Phase changes absorb heat without changing temperature (latent heat).', 'Les changements d\'état absorbent la chaleur sans changer la température (chaleur latente).', 'تغيّرات الحالة تمتص الحرارة دون تغيير درجة الحرارة (الحرارة الكامنة).'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'How much energy (in joules) heats 2 kg of water by 10 °C? (c = 4200 J/(kg·°C))',
          'Quelle énergie (en joules) faut-il pour chauffer 2 kg d\'eau de 10 °C ? (c = 4200 J/(kg·°C))',
          'كم من الطاقة (بالجول) يلزم لتسخين 2 كغ من الماء بمقدار 10 °س؟ (c = 4200 جول/(كغ·°س))',
        ),
        answer: 84000,
        unit: 'J',
        hint: L('Q = mcΔT.', 'Q = mcΔT.', 'Q = mcΔT.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Two objects at different temperatures touch. When does heat stop flowing?',
          'Deux objets à températures différentes se touchent. Quand la chaleur cesse-t-elle de circuler ?',
          'جسمان بدرجتي حرارة مختلفتين يتلامسان. متى يتوقف انتقال الحرارة؟',
        ),
        choices: [
          {
            text: L(
              'When they reach the same temperature',
              'Quand ils atteignent la même température',
              'عندما يصلان إلى درجة الحرارة نفسها',
            ),
            explanation: L(
              'This is thermal equilibrium.',
              'C\'est l\'équilibre thermique.',
              'هذا هو الاتزان الحراري.',
            ),
          },
          { text: L('When the hot object melts', 'Quand l\'objet chaud fond', 'عندما ينصهر الجسم الساخن') },
          { text: L('Heat never stops flowing', 'La chaleur ne s\'arrête jamais', 'لا يتوقف انتقال الحرارة أبداً') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('physics', 'high', 'thermo', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The laws of thermodynamics govern all energy transfers. The first law is energy conservation: ΔU = Q − W. The second law says heat cannot spontaneously flow from cold to hot — some energy is always degraded.',
          'Les lois de la thermodynamique gouvernent tous les transferts d\'énergie. La première loi est la conservation de l\'énergie : ΔU = Q − W. La deuxième dit que la chaleur ne peut pas passer spontanément du froid au chaud — une partie de l\'énergie se dégrade toujours.',
          'قوانين الديناميكا الحرارية تحكم كل انتقالات الطاقة. القانون الأول هو حفظ الطاقة: ΔU = Q − W. والقانون الثاني ينص على أن الحرارة لا تنتقل تلقائياً من البارد إلى الساخن — فجزء من الطاقة يتبدد دائماً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Zeroth law: thermal equilibrium defines temperature.', 'Loi zéro : l\'équilibre thermique définit la température.', 'القانون الصفري: الاتزان الحراري يعرّف درجة الحرارة.'),
          L('First law: ΔU = Q − W (energy is conserved).', 'Première loi : ΔU = Q − W (l\'énergie se conserve).', 'القانون الأول: ΔU = Q − W (الطاقة محفوظة).'),
          L('Second law: total entropy never decreases.', 'Deuxième loi : l\'entropie totale ne diminue jamais.', 'القانون الثاني: الإنتروبيا الكلية لا تنقص أبداً.'),
          L('Third law: entropy approaches a minimum as T → 0 K.', 'Troisième loi : l\'entropie approche un minimum quand T → 0 K.', 'القانون الثالث: تقترب الإنتروبيا من حد أدنى عندما T → 0 كلفن.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the energy flow in a car engine (a heat engine).',
          'Ordonne le flux d\'énergie dans un moteur de voiture (machine thermique).',
          'رتّب تدفق الطاقة في محرك سيارة (آلة حرارية).',
        ),
        steps: [
          L('Fuel burns, releasing heat at high temperature', 'Le carburant brûle et libère de la chaleur à haute température', 'يحترق الوقود ويطلق حرارة بدرجة عالية'),
          L('Hot gas expands and pushes the piston', 'Le gaz chaud se détend et pousse le piston', 'يتمدد الغاز الساخن ويدفع المكبس'),
          L('Part of the heat becomes useful work', 'Une partie de la chaleur devient du travail utile', 'يتحول جزء من الحرارة إلى شغل مفيد'),
          L('The rest is rejected to the cold surroundings', 'Le reste est rejeté vers l\'environnement froid', 'ويُطرح الباقي إلى المحيط البارد'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A gas absorbs 500 J of heat and does 300 J of work. What is ΔU?',
          'Un gaz absorbe 500 J de chaleur et fournit 300 J de travail. Que vaut ΔU ?',
          'يمتص غاز 500 جول من الحرارة ويبذل شغلاً قدره 300 جول. كم تساوي ΔU؟',
        ),
        choices: [
          { text: L('800 J', '800 J', '800 جول') },
          {
            text: L('200 J', '200 J', '200 جول'),
            explanation: L(
              'ΔU = Q − W = 500 − 300 = 200 J.',
              'ΔU = Q − W = 500 − 300 = 200 J.',
              'ΔU = Q − W = 500 − 300 = 200 جول.',
            ),
          },
          { text: L('−200 J', '−200 J', '−200 جول') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('physics', 'high', 'thermo', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Entropy S measures disorder — the number of ways to arrange a system\'s particles. For heat Q added at constant temperature T, entropy changes by ΔS = Q/T. Isolated systems always evolve toward higher entropy.',
          'L\'entropie S mesure le désordre — le nombre de façons d\'arranger les particules d\'un système. Pour une chaleur Q ajoutée à température constante T, l\'entropie varie de ΔS = Q/T. Les systèmes isolés évoluent toujours vers une entropie plus grande.',
          'الإنتروبيا S تقيس الفوضى — أي عدد الطرق الممكنة لترتيب جسيمات النظام. عند إضافة حرارة Q بدرجة حرارة ثابتة T، تتغير الإنتروبيا بمقدار ΔS = Q/T. والأنظمة المعزولة تتطور دائماً نحو إنتروبيا أعلى.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Why does an ice cube melt in a warm drink, but never re-freeze by itself?',
          'Pourquoi un glaçon fond-il dans une boisson tiède, mais ne regèle jamais tout seul ?',
          'لماذا يذوب مكعب الثلج في مشروب دافئ، ولا يتجمد من جديد تلقائياً؟',
        ),
        answer: L(
          'Melting spreads energy among more particle arrangements, increasing total entropy. The reverse would decrease entropy, which the second law forbids for spontaneous processes.',
          'La fonte répartit l\'énergie sur plus d\'arrangements de particules, ce qui augmente l\'entropie totale. L\'inverse diminuerait l\'entropie, ce que la deuxième loi interdit pour un processus spontané.',
          'الذوبان يوزع الطاقة على عدد أكبر من ترتيبات الجسيمات فترتفع الإنتروبيا الكلية. أما العكس فيخفض الإنتروبيا، وهو ما يمنعه القانون الثاني في العمليات التلقائية.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which process increases the entropy of the substance?',
          'Quel processus augmente l\'entropie de la substance ?',
          'أي عملية تزيد إنتروبيا المادة؟',
        ),
        choices: [
          { text: L('Water freezing into ice', 'L\'eau qui gèle en glace', 'تجمّد الماء إلى ثلج') },
          {
            text: L('Water evaporating into vapor', 'L\'eau qui s\'évapore en vapeur', 'تبخّر الماء إلى بخار'),
            explanation: L(
              'Gas molecules have far more possible arrangements than liquid molecules.',
              'Les molécules de gaz ont bien plus d\'arrangements possibles que celles du liquide.',
              'جزيئات الغاز لها ترتيبات ممكنة أكثر بكثير من جزيئات السائل.',
            ),
          },
          { text: L('Vapor condensing on a window', 'La vapeur qui se condense sur une vitre', 'تكاثف البخار على نافذة') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'A reservoir at 300 K absorbs 600 J of heat. What is its entropy change in J/K?',
          'Un réservoir à 300 K absorbe 600 J de chaleur. Quelle est sa variation d\'entropie en J/K ?',
          'يمتص خزان حراري عند 300 كلفن حرارة قدرها 600 جول. ما تغيّر إنتروبيته بوحدة جول/كلفن؟',
        ),
        answer: 2,
        unit: 'J/K',
        hint: L('ΔS = Q/T.', 'ΔS = Q/T.', 'ΔS = Q/T.'),
      },
    ],
  },

  // High — Electromagnetism
  [lessonKey('physics', 'high', 'em', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'An electric field E fills the space around charges and tells any test charge q what force it will feel: F = qE. Field lines point away from positive charges and toward negative ones.',
          'Un champ électrique E remplit l\'espace autour des charges et indique à toute charge test q la force qu\'elle subira : F = qE. Les lignes de champ partent des charges positives et pointent vers les négatives.',
          'المجال الكهربائي E يملأ الفضاء حول الشحنات ويخبر أي شحنة اختبار q بالقوة التي ستشعر بها: F = qE. خطوط المجال تخرج من الشحنات الموجبة وتتجه نحو السالبة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Coulomb\'s law: F = kq₁q₂/r², with k ≈ 9 × 10⁹ N·m²/C².', 'Loi de Coulomb : F = kq₁q₂/r², avec k ≈ 9 × 10⁹ N·m²/C².', 'قانون كولوم: F = kq₁q₂/r²، حيث k ≈ 9 × 10⁹ نيوتن·م²/كولوم².'),
          L('Field of a point charge: E = kQ/r².', 'Champ d\'une charge ponctuelle : E = kQ/r².', 'مجال شحنة نقطية: E = kQ/r².'),
          L('Like charges repel, opposite charges attract.', 'Les charges de même signe se repoussent, les charges opposées s\'attirent.', 'الشحنات المتشابهة تتنافر والمتضادة تتجاذب.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A charge of 2 C sits in a field of 5 N/C. What force does it feel in newtons?',
          'Une charge de 2 C se trouve dans un champ de 5 N/C. Quelle force subit-elle en newtons ?',
          'شحنة مقدارها 2 كولوم موضوعة في مجال شدته 5 نيوتن/كولوم. ما القوة المؤثرة عليها بالنيوتن؟',
        ),
        answer: 10,
        unit: 'N',
        hint: L('F = qE.', 'F = qE.', 'F = qE.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'The distance between two charges doubles. The Coulomb force becomes…',
          'La distance entre deux charges double. La force de Coulomb devient…',
          'تضاعفت المسافة بين شحنتين. تصبح قوة كولوم…',
        ),
        choices: [
          { text: L('Half as strong', 'Deux fois plus faible', 'نصف قيمتها') },
          {
            text: L('A quarter as strong', 'Quatre fois plus faible', 'ربع قيمتها'),
            explanation: L(
              'F ∝ 1/r², so doubling r divides the force by 4.',
              'F ∝ 1/r², donc doubler r divise la force par 4.',
              'F ∝ 1/r²، لذا مضاعفة r تقسم القوة على 4.',
            ),
          },
          { text: L('Twice as strong', 'Deux fois plus forte', 'ضعف قيمتها') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('physics', 'high', 'em', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Magnetic fields B are created by moving charges — currents. A charge moving through a magnetic field feels a force F = qvB (when v ⊥ B), always perpendicular to its velocity, so it curves instead of speeding up.',
          'Les champs magnétiques B sont créés par des charges en mouvement — des courants. Une charge qui traverse un champ magnétique subit une force F = qvB (quand v ⊥ B), toujours perpendiculaire à sa vitesse : elle tourne au lieu d\'accélérer.',
          'المجالات المغناطيسية B تنشأ عن شحنات متحركة — أي تيارات. الشحنة المتحركة في مجال مغناطيسي تشعر بقوة F = qvB (عندما v ⊥ B)، وهي دائماً عمودية على سرعتها، فتنحني بدل أن تتسارع.',
        ),
      },
      {
        type: 'list',
        items: [
          L('A straight wire with current I creates B = μ₀I/(2πr) around it.', 'Un fil droit parcouru par un courant I crée B = μ₀I/(2πr) autour de lui.', 'سلك مستقيم يمر به تيار I ينشئ حوله مجالاً B = μ₀I/(2πr).'),
          L('Magnetic force does no work: it changes direction, not speed.', 'La force magnétique ne travaille pas : elle change la direction, pas la vitesse.', 'القوة المغناطيسية لا تبذل شغلاً: تغيّر الاتجاه لا مقدار السرعة.'),
          L('The right-hand rule gives the force direction for F = qv × B.', 'La règle de la main droite donne la direction de la force pour F = qv × B.', 'قاعدة اليد اليمنى تعطي اتجاه القوة في F = qv × B.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A proton moves parallel to a magnetic field. What magnetic force does it feel?',
          'Un proton se déplace parallèlement à un champ magnétique. Quelle force magnétique subit-il ?',
          'يتحرك بروتون موازياً لمجال مغناطيسي. ما القوة المغناطيسية المؤثرة عليه؟',
        ),
        choices: [
          {
            text: L('Zero', 'Nulle', 'صفر'),
            explanation: L(
              'F = qvB sin θ, and sin 0° = 0.',
              'F = qvB sin θ, et sin 0° = 0.',
              'F = qvB sin θ، و sin 0° = 0.',
            ),
          },
          { text: L('Maximum force', 'Force maximale', 'قوة عظمى') },
          { text: L('A force along the field', 'Une force le long du champ', 'قوة باتجاه المجال') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'A 2 C charge moves at 3 m/s perpendicular to a 0.5 T field. What force does it feel in newtons?',
          'Une charge de 2 C se déplace à 3 m/s perpendiculairement à un champ de 0,5 T. Quelle force subit-elle en newtons ?',
          'شحنة 2 كولوم تتحرك بسرعة 3 م/ث عمودياً على مجال شدته 0.5 تسلا. ما القوة المؤثرة عليها بالنيوتن؟',
        ),
        answer: 3,
        unit: 'N',
        hint: L('F = qvB.', 'F = qvB.', 'F = qvB.'),
      },
    ],
  },
  [lessonKey('physics', 'high', 'em', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Maxwell\'s four equations unify electricity and magnetism. In words: charges create electric fields; there are no magnetic monopoles; changing magnetic fields create electric fields; and currents plus changing electric fields create magnetic fields.',
          'Les quatre équations de Maxwell unifient électricité et magnétisme. En mots : les charges créent des champs électriques ; il n\'existe pas de monopôles magnétiques ; les champs magnétiques variables créent des champs électriques ; les courants et les champs électriques variables créent des champs magnétiques.',
          'معادلات ماكسويل الأربع توحّد الكهرباء والمغناطيسية. بالكلمات: الشحنات تنشئ مجالات كهربائية؛ ولا توجد أقطاب مغناطيسية أحادية؛ والمجالات المغناطيسية المتغيرة تنشئ مجالات كهربائية؛ والتيارات والمجالات الكهربائية المتغيرة تنشئ مجالات مغناطيسية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Gauss: ∇·E = ρ/ε₀ — charges are sources of E.', 'Gauss : ∇·E = ρ/ε₀ — les charges sont les sources de E.', 'غاوس: ∇·E = ρ/ε₀ — الشحنات مصادر للمجال E.'),
          L('Gauss for magnetism: ∇·B = 0 — no magnetic monopoles.', 'Gauss magnétique : ∇·B = 0 — pas de monopôles magnétiques.', 'غاوس للمغناطيسية: ∇·B = 0 — لا أقطاب مغناطيسية أحادية.'),
          L('Faraday: a changing B induces a circulating E.', 'Faraday : un B variable induit un E circulant.', 'فاراداي: تغيّر B يولّد مجالاً كهربائياً دوّاراً.'),
          L('Ampère–Maxwell: currents and changing E create B.', 'Ampère–Maxwell : les courants et un E variable créent B.', 'أمبير–ماكسويل: التيارات وتغيّر E ينشئان B.'),
          L('Together they predict light: waves moving at c ≈ 3 × 10⁸ m/s.', 'Ensemble, elles prédisent la lumière : des ondes à c ≈ 3 × 10⁸ m/s.', 'معاً تتنبأ بالضوء: موجات تنتشر بسرعة c ≈ 3 × 10⁸ م/ث.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which equation explains how a generator produces electricity from a spinning magnet?',
          'Quelle équation explique comment un générateur produit de l\'électricité avec un aimant en rotation ?',
          'أي معادلة تفسر كيف يولّد المولد الكهرباء من مغناطيس دوّار؟',
        ),
        choices: [
          { text: L('Gauss\'s law', 'La loi de Gauss', 'قانون غاوس') },
          {
            text: L('Faraday\'s law', 'La loi de Faraday', 'قانون فاراداي'),
            explanation: L(
              'The rotating magnet changes B through the coil, inducing an electric field and a current.',
              'L\'aimant en rotation fait varier B à travers la bobine, induisant un champ électrique et un courant.',
              'دوران المغناطيس يغيّر B عبر الملف فيولّد مجالاً كهربائياً وتياراً.',
            ),
          },
          { text: L('∇·B = 0', '∇·B = 0', '∇·B = 0') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the chain that lets an electromagnetic wave travel through empty space.',
          'Ordonne la chaîne qui permet à une onde électromagnétique de voyager dans le vide.',
          'رتّب السلسلة التي تسمح للموجة الكهرومغناطيسية بالانتشار في الفراغ.',
        ),
        steps: [
          L('A charge accelerates in an antenna', 'Une charge accélère dans une antenne', 'شحنة تتسارع في هوائي'),
          L('The changing E field creates a changing B field', 'Le champ E variable crée un champ B variable', 'المجال E المتغير ينشئ مجالاً B متغيراً'),
          L('The changing B field recreates a changing E field', 'Le champ B variable recrée un champ E variable', 'المجال B المتغير يعيد إنشاء مجال E متغير'),
          L('The self-sustaining wave propagates at speed c', 'L\'onde auto-entretenue se propage à la vitesse c', 'الموجة الذاتية الاستمرار تنتشر بسرعة c'),
        ],
      },
    ],
  },

  // Undergraduate — Classical mechanics
  [lessonKey('physics', 'undergraduate', 'classical', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Lagrangian mechanics reformulates Newton\'s laws. Define L = T − V (kinetic minus potential energy) in generalized coordinates qᵢ. The action S = ∫L dt is stationary along the true path, which yields the Euler–Lagrange equations: d/dt(∂L/∂q̇ᵢ) − ∂L/∂qᵢ = 0.',
          'La mécanique lagrangienne reformule les lois de Newton. On définit L = T − V (énergie cinétique moins potentielle) en coordonnées généralisées qᵢ. L\'action S = ∫L dt est stationnaire le long de la trajectoire réelle, ce qui donne les équations d\'Euler–Lagrange : d/dt(∂L/∂q̇ᵢ) − ∂L/∂qᵢ = 0.',
          'الميكانيكا اللاغرانجية تعيد صياغة قوانين نيوتن. نعرّف L = T − V (الطاقة الحركية ناقص الكامنة) بإحداثيات معممة qᵢ. الفعل S = ∫L dt يكون مستقراً على طول المسار الحقيقي، مما يعطي معادلات أويلر–لاغرانج: d/dt(∂L/∂q̇ᵢ) − ∂L/∂qᵢ = 0.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Generalized coordinates absorb constraints — no constraint forces needed.', 'Les coordonnées généralisées absorbent les contraintes — pas besoin des forces de liaison.', 'الإحداثيات المعممة تستوعب القيود — فلا حاجة لقوى القيد.'),
          L('If ∂L/∂qᵢ = 0 (cyclic coordinate), the momentum pᵢ = ∂L/∂q̇ᵢ is conserved.', 'Si ∂L/∂qᵢ = 0 (coordonnée cyclique), le moment pᵢ = ∂L/∂q̇ᵢ est conservé.', 'إذا كانت ∂L/∂qᵢ = 0 (إحداثية دورية)، فالزخم pᵢ = ∂L/∂q̇ᵢ محفوظ.'),
          L('Noether\'s theorem: every continuous symmetry gives a conservation law.', 'Théorème de Noether : chaque symétrie continue donne une loi de conservation.', 'مبرهنة نويثر: كل تناظر متصل يعطي قانون حفظ.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Derive the equation of motion for a free particle in 1D, L = ½mẋ².',
          'Établis l\'équation du mouvement d\'une particule libre en 1D, L = ½mẋ².',
          'استنتج معادلة الحركة لجسيم حر في بعد واحد، حيث L = ½mẋ².',
        ),
        answer: L(
          '∂L/∂ẋ = mẋ and ∂L/∂x = 0, so d/dt(mẋ) = 0: momentum is conserved and the particle moves at constant velocity — Newton\'s first law recovered.',
          '∂L/∂ẋ = mẋ et ∂L/∂x = 0, donc d/dt(mẋ) = 0 : le moment est conservé et la particule va à vitesse constante — on retrouve la première loi de Newton.',
          '∂L/∂ẋ = mẋ و ∂L/∂x = 0، إذن d/dt(mẋ) = 0: الزخم محفوظ ويتحرك الجسيم بسرعة ثابتة — وهذا هو قانون نيوتن الأول.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'For L = ½m(ṙ² + r²φ̇²) − V(r), the coordinate φ is cyclic. What is conserved?',
          'Pour L = ½m(ṙ² + r²φ̇²) − V(r), la coordonnée φ est cyclique. Qu\'est-ce qui est conservé ?',
          'في L = ½m(ṙ² + r²φ̇²) − V(r)، الإحداثية φ دورية. ما الكمية المحفوظة؟',
        ),
        choices: [
          {
            text: L('Angular momentum pᵩ = mr²φ̇', 'Le moment cinétique pᵩ = mr²φ̇', 'الزخم الزاوي pᵩ = mr²φ̇'),
            explanation: L(
              'pᵩ = ∂L/∂φ̇ = mr²φ̇, conserved because ∂L/∂φ = 0.',
              'pᵩ = ∂L/∂φ̇ = mr²φ̇, conservé car ∂L/∂φ = 0.',
              'pᵩ = ∂L/∂φ̇ = mr²φ̇ محفوظ لأن ∂L/∂φ = 0.',
            ),
          },
          { text: L('Radial momentum mṙ', 'Le moment radial mṙ', 'الزخم القطري mṙ') },
          { text: L('The potential V(r)', 'Le potentiel V(r)', 'الجهد V(r)') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the steps to solve a problem with the Lagrangian method.',
          'Ordonne les étapes pour résoudre un problème par la méthode lagrangienne.',
          'رتّب خطوات حل مسألة بالطريقة اللاغرانجية.',
        ),
        steps: [
          L('Choose generalized coordinates that respect the constraints', 'Choisir des coordonnées généralisées respectant les contraintes', 'اختر إحداثيات معممة تراعي القيود'),
          L('Write T and V, then L = T − V', 'Écrire T et V, puis L = T − V', 'اكتب T و V ثم L = T − V'),
          L('Apply the Euler–Lagrange equation for each coordinate', 'Appliquer l\'équation d\'Euler–Lagrange pour chaque coordonnée', 'طبّق معادلة أويلر–لاغرانج لكل إحداثية'),
          L('Solve or exploit conserved quantities', 'Résoudre ou exploiter les quantités conservées', 'حلّ المعادلات أو استفد من الكميات المحفوظة'),
        ],
      },
    ],
  },
  [lessonKey('physics', 'undergraduate', 'classical', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Hamiltonian mechanics trades velocities for momenta via the Legendre transform: H(q, p) = Σpᵢq̇ᵢ − L. For many systems H = T + V, the total energy. Motion unfolds in phase space according to Hamilton\'s equations: q̇ᵢ = ∂H/∂pᵢ and ṗᵢ = −∂H/∂qᵢ.',
          'La mécanique hamiltonienne échange les vitesses contre les moments via la transformée de Legendre : H(q, p) = Σpᵢq̇ᵢ − L. Pour de nombreux systèmes, H = T + V, l\'énergie totale. Le mouvement se déroule dans l\'espace des phases selon les équations de Hamilton : q̇ᵢ = ∂H/∂pᵢ et ṗᵢ = −∂H/∂qᵢ.',
          'الميكانيكا الهاملتونية تستبدل السرعات بالزخوم عبر تحويل لوجاندر: H(q, p) = Σpᵢq̇ᵢ − L. وفي كثير من الأنظمة H = T + V، أي الطاقة الكلية. تتطور الحركة في فضاء الطور وفق معادلات هاملتون: q̇ᵢ = ∂H/∂pᵢ و ṗᵢ = −∂H/∂qᵢ.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Phase space: each state is a point (q₁…q_N, p₁…p_N) — 2N dimensions for N degrees of freedom.', 'Espace des phases : chaque état est un point (q₁…q_N, p₁…p_N) — 2N dimensions pour N degrés de liberté.', 'فضاء الطور: كل حالة نقطة (q₁…q_N, p₁…p_N) — أي 2N بعداً لعدد N من درجات الحرية.'),
          L('Poisson brackets: dA/dt = {A, H}; if {A, H} = 0, A is conserved.', 'Crochets de Poisson : dA/dt = {A, H} ; si {A, H} = 0, A est conservée.', 'أقواس بواسون: dA/dt = {A, H}؛ وإذا كان {A, H} = 0 فإن A محفوظة.'),
          L('Liouville\'s theorem: phase-space volume is preserved by the flow.', 'Théorème de Liouville : le volume dans l\'espace des phases est préservé par le flot.', 'مبرهنة ليوفيل: حجم فضاء الطور يبقى محفوظاً أثناء التطور.'),
          L('This structure is the doorway to quantum mechanics: {A, B} → [Â, B̂]/iℏ.', 'Cette structure est la porte vers la mécanique quantique : {A, B} → [Â, B̂]/iℏ.', 'هذه البنية بوابة نحو ميكانيكا الكم: {A, B} → [Â, B̂]/iℏ.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'For the harmonic oscillator H = p²/2m + ½kq², trajectories in phase space are…',
          'Pour l\'oscillateur harmonique H = p²/2m + ½kq², les trajectoires dans l\'espace des phases sont…',
          'للمتذبذب التوافقي H = p²/2m + ½kq²، تكون المسارات في فضاء الطور…',
        ),
        choices: [
          {
            text: L('Ellipses of constant energy', 'Des ellipses d\'énergie constante', 'قطوعاً ناقصة ثابتة الطاقة'),
            explanation: L(
              'H = const defines an ellipse in the (q, p) plane.',
              'H = const définit une ellipse dans le plan (q, p).',
              'H = ثابت يعرّف قطعاً ناقصاً في المستوى (q, p).',
            ),
          },
          { text: L('Straight lines', 'Des droites', 'خطوطاً مستقيمة') },
          { text: L('Spirals into the origin', 'Des spirales vers l\'origine', 'لوالب نحو نقطة الأصل') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Three particles move in 3D space with no constraints. What is the dimension of their phase space?',
          'Trois particules se déplacent en 3D sans contraintes. Quelle est la dimension de leur espace des phases ?',
          'ثلاثة جسيمات تتحرك في فضاء ثلاثي الأبعاد دون قيود. ما بُعد فضاء الطور الخاص بها؟',
        ),
        answer: 18,
        hint: L(
          '2 × (number of degrees of freedom).',
          '2 × (nombre de degrés de liberté).',
          '2 × (عدد درجات الحرية).',
        ),
      },
    ],
  },
  [lessonKey('physics', 'undergraduate', 'classical', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'In a central force problem, V depends only on the distance r between two bodies. Angular momentum L is conserved, so motion stays in a plane and reduces to 1D motion in an effective potential V_eff(r) = V(r) + L²/(2μr²), where μ is the reduced mass.',
          'Dans un problème de force centrale, V ne dépend que de la distance r entre deux corps. Le moment cinétique L est conservé : le mouvement reste dans un plan et se réduit à un mouvement 1D dans un potentiel effectif V_eff(r) = V(r) + L²/(2μr²), où μ est la masse réduite.',
          'في مسألة القوة المركزية يعتمد V على المسافة r بين جسمين فقط. الزخم الزاوي L محفوظ، فتبقى الحركة في مستوى وتُختزل إلى حركة أحادية البعد في جهد فعّال V_eff(r) = V(r) + L²/(2μr²)، حيث μ الكتلة المختزلة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Gravity V = −GMm/r gives conic-section orbits: ellipses, parabolas, hyperbolas.', 'La gravité V = −GMm/r donne des orbites en coniques : ellipses, paraboles, hyperboles.', 'الجاذبية V = −GMm/r تعطي مدارات مخروطية: قطوع ناقصة ومكافئة وزائدة.'),
          L('Kepler 2 (equal areas in equal times) is just conservation of L.', 'Kepler 2 (aires égales en temps égaux) n\'est que la conservation de L.', 'قانون كبلر الثاني (مساحات متساوية في أزمنة متساوية) هو حفظ L.'),
          L('Kepler 3: T² ∝ a³ for elliptical orbits around the same body.', 'Kepler 3 : T² ∝ a³ pour les orbites elliptiques autour du même corps.', 'قانون كبلر الثالث: T² ∝ a³ للمدارات الإهليلجية حول الجسم نفسه.'),
          L('The centrifugal term L²/(2μr²) creates a barrier at small r.', 'Le terme centrifuge L²/(2μr²) crée une barrière à petit r.', 'الحد الطارد المركزي L²/(2μr²) ينشئ حاجزاً عند r الصغيرة.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'An asteroid orbits the Sun with semi-major axis a = 4 AU. What is its period in years? (Earth: a = 1 AU, T = 1 yr)',
          'Un astéroïde orbite le Soleil avec un demi-grand axe a = 4 UA. Quelle est sa période en années ? (Terre : a = 1 UA, T = 1 an)',
          'كويكب يدور حول الشمس بنصف محور كبير a = 4 وحدات فلكية. ما دوره المداري بالسنوات؟ (الأرض: a = 1 وحدة فلكية، T = سنة واحدة)',
        ),
        answer: 8,
        unit: 'yr',
        hint: L('T² = a³ in these units.', 'T² = a³ dans ces unités.', 'T² = a³ بهذه الوحدات.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'For an attractive potential V = −k/r, which total energy E gives a bound (elliptical) orbit?',
          'Pour un potentiel attractif V = −k/r, quelle énergie totale E donne une orbite liée (elliptique) ?',
          'لجهد جاذب V = −k/r، أي طاقة كلية E تعطي مداراً مرتبطاً (إهليلجياً)؟',
        ),
        choices: [
          {
            text: L('E < 0', 'E < 0', 'E < 0'),
            explanation: L(
              'E < 0 gives ellipses, E = 0 a parabola, E > 0 hyperbolas.',
              'E < 0 donne des ellipses, E = 0 une parabole, E > 0 des hyperboles.',
              'E < 0 يعطي قطوعاً ناقصة، و E = 0 قطعاً مكافئاً، و E > 0 قطوعاً زائدة.',
            ),
          },
          { text: L('E = 0', 'E = 0', 'E = 0') },
          { text: L('E > 0', 'E > 0', 'E > 0') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Undergraduate — Quantum mechanics
  [lessonKey('physics', 'undergraduate', 'quantum', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The state of a quantum particle is a wave function ψ(x, t). Its squared magnitude |ψ(x)|² is the probability density of finding the particle at x, so ∫|ψ|²dx = 1 (normalization). ψ evolves by the Schrödinger equation: iℏ ∂ψ/∂t = Ĥψ.',
          'L\'état d\'une particule quantique est une fonction d\'onde ψ(x, t). Le carré de son module |ψ(x)|² est la densité de probabilité de trouver la particule en x, donc ∫|ψ|²dx = 1 (normalisation). ψ évolue selon l\'équation de Schrödinger : iℏ ∂ψ/∂t = Ĥψ.',
          'حالة الجسيم الكمومي هي دالة موجية ψ(x, t). مربع مقدارها |ψ(x)|² هو كثافة احتمال وجود الجسيم عند x، لذلك ∫|ψ|²dx = 1 (التعيير). وتتطور ψ وفق معادلة شرودنغر: iℏ ∂ψ/∂t = Ĥψ.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Superposition: if ψ₁ and ψ₂ are states, so is aψ₁ + bψ₂.', 'Superposition : si ψ₁ et ψ₂ sont des états, aψ₁ + bψ₂ aussi.', 'التراكب: إذا كانت ψ₁ و ψ₂ حالتين، فإن aψ₁ + bψ₂ حالة أيضاً.'),
          L('Infinite square well of width a: Eₙ = n²π²ℏ²/(2ma²), n = 1, 2, 3…', 'Puits infini de largeur a : Eₙ = n²π²ℏ²/(2ma²), n = 1, 2, 3…', 'البئر اللانهائي بعرض a: Eₙ = n²π²ℏ²/(2ma²)، حيث n = 1, 2, 3…'),
          L('Energy is quantized because ψ must vanish at the walls.', 'L\'énergie est quantifiée car ψ doit s\'annuler aux parois.', 'الطاقة مكمّاة لأن ψ يجب أن تنعدم عند الجدران.'),
          L('Heisenberg: Δx·Δp ≥ ℏ/2 — position and momentum cannot both be sharp.', 'Heisenberg : Δx·Δp ≥ ℏ/2 — position et impulsion ne peuvent être précises ensemble.', 'هايزنبرغ: Δx·Δp ≥ ℏ/2 — لا يمكن تحديد الموضع والزخم معاً بدقة.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'In the infinite square well, what is the ratio E₂/E₁ of the first excited energy to the ground-state energy?',
          'Dans le puits infini, quel est le rapport E₂/E₁ entre la première énergie excitée et l\'énergie fondamentale ?',
          'في البئر اللانهائي، ما نسبة E₂/E₁ بين طاقة أول حالة مثارة وطاقة الحالة الأرضية؟',
        ),
        answer: 4,
        hint: L('Eₙ ∝ n².', 'Eₙ ∝ n².', 'Eₙ ∝ n².'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What is the physical meaning of |ψ(x)|²?',
          'Quelle est la signification physique de |ψ(x)|² ?',
          'ما المعنى الفيزيائي لـ |ψ(x)|²؟',
        ),
        choices: [
          { text: L('The particle\'s energy at x', 'L\'énergie de la particule en x', 'طاقة الجسيم عند x') },
          {
            text: L(
              'The probability density of finding the particle at x',
              'La densité de probabilité de trouver la particule en x',
              'كثافة احتمال وجود الجسيم عند x',
            ),
            explanation: L(
              'This is the Born rule.',
              'C\'est la règle de Born.',
              'هذه قاعدة بورن.',
            ),
          },
          { text: L('The particle\'s velocity at x', 'La vitesse de la particule en x', 'سرعة الجسيم عند x') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('physics', 'undergraduate', 'quantum', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Observables are represented by Hermitian operators: position x̂, momentum p̂ = −iℏ ∂/∂x, energy Ĥ. Measuring an observable yields one of its eigenvalues; right after the measurement, the state collapses to the matching eigenstate.',
          'Les observables sont représentées par des opérateurs hermitiens : position x̂, impulsion p̂ = −iℏ ∂/∂x, énergie Ĥ. Mesurer une observable donne l\'une de ses valeurs propres ; juste après la mesure, l\'état se réduit à l\'état propre correspondant.',
          'الكميات القابلة للقياس تمثّلها مؤثرات هيرميتية: الموضع x̂، والزخم p̂ = −iℏ ∂/∂x، والطاقة Ĥ. قياس كمية ما يعطي إحدى قيمها الذاتية؛ وبعد القياس مباشرة تنهار الحالة إلى الحالة الذاتية الموافقة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Eigenvalue equation: Âψₐ = aψₐ, with a real for Hermitian Â.', 'Équation aux valeurs propres : Âψₐ = aψₐ, avec a réel pour Â hermitien.', 'معادلة القيم الذاتية: Âψₐ = aψₐ، حيث a حقيقية عندما يكون Â هيرميتياً.'),
          L('Expectation value: ⟨Â⟩ = ∫ψ* Â ψ dx.', 'Valeur moyenne : ⟨Â⟩ = ∫ψ* Â ψ dx.', 'القيمة المتوقعة: ⟨Â⟩ = ∫ψ* Â ψ dx.'),
          L('Canonical commutator: [x̂, p̂] = iℏ.', 'Commutateur canonique : [x̂, p̂] = iℏ.', 'المبادل القانوني: [x̂, p̂] = iℏ.'),
          L('Non-commuting operators cannot be measured sharply at the same time.', 'Des opérateurs qui ne commutent pas ne peuvent être mesurés précisément en même temps.', 'المؤثرات غير المتبادلة لا يمكن قياسها بدقة في آن واحد.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'ψ is an eigenstate of Ĥ with eigenvalue E₀. What does an energy measurement give?',
          'ψ est un état propre de Ĥ de valeur propre E₀. Que donne une mesure d\'énergie ?',
          'ψ حالة ذاتية للمؤثر Ĥ بقيمة ذاتية E₀. ماذا يعطي قياس الطاقة؟',
        ),
        choices: [
          {
            text: L('E₀ with certainty', 'E₀ avec certitude', 'E₀ على وجه اليقين'),
            explanation: L(
              'In an eigenstate, the measurement outcome is the eigenvalue, every time.',
              'Dans un état propre, le résultat de la mesure est la valeur propre, à chaque fois.',
              'في الحالة الذاتية تكون نتيجة القياس هي القيمة الذاتية في كل مرة.',
            ),
          },
          { text: L('A random value near E₀', 'Une valeur aléatoire proche de E₀', 'قيمة عشوائية قريبة من E₀') },
          { text: L('Zero', 'Zéro', 'صفر') },
        ],
        correctIndex: 0,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Why can x̂ and p̂ not be measured sharply at the same time?',
          'Pourquoi x̂ et p̂ ne peuvent-ils pas être mesurés précisément en même temps ?',
          'لماذا لا يمكن قياس x̂ و p̂ بدقة في الوقت نفسه؟',
        ),
        choices: [
          { text: L('Because measuring devices are imperfect', 'Parce que les appareils de mesure sont imparfaits', 'لأن أجهزة القياس غير مثالية') },
          {
            text: L(
              'Because [x̂, p̂] = iℏ ≠ 0: they share no common eigenstates',
              'Parce que [x̂, p̂] = iℏ ≠ 0 : ils n\'ont pas d\'états propres communs',
              'لأن [x̂, p̂] = iℏ ≠ 0: فليس لهما حالات ذاتية مشتركة',
            ),
            explanation: L(
              'The uncertainty principle follows from the commutator, not from technology.',
              'Le principe d\'incertitude découle du commutateur, pas de la technologie.',
              'مبدأ الارتياب ينبع من المبادل لا من التقنية.',
            ),
          },
          { text: L('Because the particle moves too fast', 'Parce que la particule va trop vite', 'لأن الجسيم يتحرك بسرعة كبيرة') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('physics', 'undergraduate', 'quantum', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Angular momentum in quantum mechanics is quantized. The operators satisfy [L̂ₓ, L̂ᵧ] = iℏL̂_z, so only L̂² and one component (say L̂_z) can be sharp together: L̂²|l, m⟩ = ℏ²l(l+1)|l, m⟩ and L̂_z|l, m⟩ = ℏm|l, m⟩, with m = −l, …, +l.',
          'Le moment cinétique en mécanique quantique est quantifié. Les opérateurs vérifient [L̂ₓ, L̂ᵧ] = iℏL̂_z, donc seuls L̂² et une composante (par exemple L̂_z) peuvent être précis ensemble : L̂²|l, m⟩ = ℏ²l(l+1)|l, m⟩ et L̂_z|l, m⟩ = ℏm|l, m⟩, avec m = −l, …, +l.',
          'الزخم الزاوي في ميكانيكا الكم مكمّى. تحقق المؤثرات [L̂ₓ, L̂ᵧ] = iℏL̂_z، لذا لا يمكن تحديد إلا L̂² ومركّبة واحدة (مثل L̂_z) معاً: L̂²|l, m⟩ = ℏ²l(l+1)|l, m⟩ و L̂_z|l, m⟩ = ℏm|l, m⟩، حيث m = −l, …, +l.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Orbital quantum number l = 0, 1, 2… (s, p, d orbitals in atoms).', 'Nombre quantique orbital l = 0, 1, 2… (orbitales s, p, d des atomes).', 'العدد الكمومي المداري l = 0, 1, 2… (مدارات s وp وd في الذرات).'),
          L('For each l there are 2l + 1 values of m.', 'Pour chaque l il y a 2l + 1 valeurs de m.', 'لكل l يوجد 2l + 1 قيمة للعدد m.'),
          L('Spin is intrinsic angular momentum: the electron has s = ½.', 'Le spin est un moment cinétique intrinsèque : l\'électron a s = ½.', 'اللف المغزلي زخم زاوي ذاتي: للإلكترون s = ½.'),
          L('Ladder operators L̂± = L̂ₓ ± iL̂ᵧ raise or lower m by 1.', 'Les opérateurs d\'échelle L̂± = L̂ₓ ± iL̂ᵧ augmentent ou diminuent m de 1.', 'مؤثرا السلم L̂± = L̂ₓ ± iL̂ᵧ يرفعان m أو يخفضانها بمقدار 1.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'How many values of m exist for l = 2 (a d orbital)?',
          'Combien de valeurs de m existent pour l = 2 (orbitale d) ?',
          'كم عدد قيم m الممكنة عندما l = 2 (مدار d)؟',
        ),
        answer: 5,
        hint: L('2l + 1.', '2l + 1.', '2l + 1.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What is the magnitude of the angular momentum in state |l = 1, m⟩?',
          'Quelle est la norme du moment cinétique dans l\'état |l = 1, m⟩ ?',
          'ما مقدار الزخم الزاوي في الحالة |l = 1, m⟩؟',
        ),
        choices: [
          { text: L('ℏ', 'ℏ', 'ℏ') },
          {
            text: L('ℏ√2', 'ℏ√2', 'ℏ√2'),
            explanation: L(
              '|L| = ℏ√(l(l+1)) = ℏ√2 for l = 1 — more than the maximum L_z = ℏ.',
              '|L| = ℏ√(l(l+1)) = ℏ√2 pour l = 1 — plus que le maximum L_z = ℏ.',
              '|L| = ℏ√(l(l+1)) = ℏ√2 عندما l = 1 — أي أكبر من القيمة القصوى L_z = ℏ.',
            ),
          },
          { text: L('2ℏ', '2ℏ', '2ℏ') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Undergraduate — Statistical mechanics
  [lessonKey('physics', 'undergraduate', 'statistical', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Statistical mechanics links microscopic states to macroscopic thermodynamics. An ensemble is the set of all microstates compatible with the macroscopic constraints, each with a probability. Boltzmann\'s formula S = k_B ln Ω connects entropy to the number of microstates Ω.',
          'La mécanique statistique relie les états microscopiques à la thermodynamique macroscopique. Un ensemble est la collection de tous les micro-états compatibles avec les contraintes macroscopiques, chacun avec une probabilité. La formule de Boltzmann S = k_B ln Ω relie l\'entropie au nombre de micro-états Ω.',
          'الميكانيكا الإحصائية تربط الحالات المجهرية بالديناميكا الحرارية العيانية. التجميع الإحصائي هو مجموعة كل الحالات المجهرية المتوافقة مع القيود العيانية، ولكل منها احتمال. وصيغة بولتزمان S = k_B ln Ω تربط الإنتروبيا بعدد الحالات المجهرية Ω.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Microcanonical ensemble: isolated system, fixed E, N, V — all microstates equally likely.', 'Ensemble microcanonique : système isolé, E, N, V fixés — tous les micro-états équiprobables.', 'التجميع الميكروقانوني: نظام معزول بثوابت E وN وV — كل الحالات المجهرية متساوية الاحتمال.'),
          L('Canonical ensemble: fixed T (heat bath) — P(state) ∝ e^(−E/k_BT).', 'Ensemble canonique : T fixée (thermostat) — P(état) ∝ e^(−E/k_BT).', 'التجميع القانوني: درجة حرارة T ثابتة (حمّام حراري) — P(الحالة) ∝ e^(−E/k_BT).'),
          L('Grand canonical ensemble: T and chemical potential μ fixed — particles can be exchanged.', 'Ensemble grand-canonique : T et potentiel chimique μ fixés — échange de particules possible.', 'التجميع القانوني الكبير: T والجهد الكيميائي μ ثابتان — ويمكن تبادل الجسيمات.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A gas bottle sits in a large room at temperature T, exchanging heat but not particles. Which ensemble describes it?',
          'Une bouteille de gaz est dans une grande pièce à température T, échangeant de la chaleur mais pas de particules. Quel ensemble la décrit ?',
          'قنينة غاز في غرفة كبيرة بدرجة حرارة T، تتبادل الحرارة دون الجسيمات. أي تجميع يصفها؟',
        ),
        choices: [
          { text: L('Microcanonical', 'Microcanonique', 'الميكروقانوني') },
          {
            text: L('Canonical', 'Canonique', 'القانوني'),
            explanation: L(
              'Fixed N and V with a heat bath fixing T — the canonical ensemble.',
              'N et V fixés avec un thermostat fixant T — l\'ensemble canonique.',
              'N و V ثابتان مع حمّام حراري يثبّت T — هذا هو التجميع القانوني.',
            ),
          },
          { text: L('Grand canonical', 'Grand-canonique', 'القانوني الكبير') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the logical chain from microstates to thermodynamics.',
          'Ordonne la chaîne logique des micro-états à la thermodynamique.',
          'رتّب السلسلة المنطقية من الحالات المجهرية إلى الديناميكا الحرارية.',
        ),
        steps: [
          L('List the microstates allowed by the constraints', 'Lister les micro-états permis par les contraintes', 'عدّد الحالات المجهرية التي تسمح بها القيود'),
          L('Assign each microstate its ensemble probability', 'Attribuer à chaque micro-état sa probabilité d\'ensemble', 'أسند لكل حالة مجهرية احتمالها في التجميع'),
          L('Average over the ensemble to get macroscopic quantities', 'Moyenner sur l\'ensemble pour obtenir les grandeurs macroscopiques', 'خذ المتوسط على التجميع لتحصل على الكميات العيانية'),
          L('Identify these averages with thermodynamic variables', 'Identifier ces moyennes aux variables thermodynamiques', 'طابق هذه المتوسطات مع المتغيرات الثرموديناميكية'),
        ],
      },
    ],
  },
  [lessonKey('physics', 'undergraduate', 'statistical', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The partition function Z = Σᵢ e^(−βEᵢ), with β = 1/(k_BT), is the central object of the canonical ensemble. Every thermodynamic quantity follows from it: F = −k_BT ln Z, ⟨E⟩ = −∂ln Z/∂β, S = −∂F/∂T.',
          'La fonction de partition Z = Σᵢ e^(−βEᵢ), avec β = 1/(k_BT), est l\'objet central de l\'ensemble canonique. Toute grandeur thermodynamique en découle : F = −k_BT ln Z, ⟨E⟩ = −∂ln Z/∂β, S = −∂F/∂T.',
          'دالة التقسيم Z = Σᵢ e^(−βEᵢ)، حيث β = 1/(k_BT)، هي الكائن المركزي في التجميع القانوني. وكل كمية ثرموديناميكية تُشتق منها: F = −k_BT ln Z، و ⟨E⟩ = −∂ln Z/∂β، و S = −∂F/∂T.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Compute Z for a two-level system with energies 0 and ε, and find its limits.',
          'Calcule Z pour un système à deux niveaux d\'énergies 0 et ε, et trouve ses limites.',
          'احسب Z لنظام ذي مستويين طاقتاهما 0 و ε، وأوجد نهاياته.',
        ),
        answer: L(
          'Z = 1 + e^(−βε). As T → 0, Z → 1 (only the ground state); as T → ∞, Z → 2 (both levels equally populated). Z counts the effectively accessible states.',
          'Z = 1 + e^(−βε). Quand T → 0, Z → 1 (seul l\'état fondamental) ; quand T → ∞, Z → 2 (les deux niveaux également peuplés). Z compte les états effectivement accessibles.',
          'Z = 1 + e^(−βε). عندما T → 0 فإن Z → 1 (الحالة الأرضية فقط)؛ وعندما T → ∞ فإن Z → 2 (المستويان مأهولان بالتساوي). فدالة Z تعدّ الحالات المتاحة فعلياً.',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'For the two-level system above, what value does Z approach as T → ∞?',
          'Pour le système à deux niveaux ci-dessus, vers quelle valeur tend Z quand T → ∞ ?',
          'في نظام المستويين أعلاه، إلى أي قيمة تؤول Z عندما T → ∞؟',
        ),
        answer: 2,
        hint: L('e^(−βε) → 1 when β → 0.', 'e^(−βε) → 1 quand β → 0.', 'e^(−βε) → 1 عندما β → 0.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which relation gives the average energy from Z?',
          'Quelle relation donne l\'énergie moyenne à partir de Z ?',
          'أي علاقة تعطي متوسط الطاقة من Z؟',
        ),
        choices: [
          { text: L('⟨E⟩ = k_BT ln Z', '⟨E⟩ = k_BT ln Z', '⟨E⟩ = k_BT ln Z') },
          {
            text: L('⟨E⟩ = −∂ln Z/∂β', '⟨E⟩ = −∂ln Z/∂β', '⟨E⟩ = −∂ln Z/∂β'),
            explanation: L(
              'Differentiating ln Z with respect to β brings down a factor of −Eᵢ inside the sum.',
              'Dériver ln Z par rapport à β fait descendre un facteur −Eᵢ dans la somme.',
              'اشتقاق ln Z بالنسبة إلى β ينزل عاملاً قدره −Eᵢ داخل المجموع.',
            ),
          },
          { text: L('⟨E⟩ = Z/β', '⟨E⟩ = Z/β', '⟨E⟩ = Z/β') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('physics', 'undergraduate', 'statistical', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Identical quantum particles obey new statistics. Fermions (half-integer spin) obey the Pauli exclusion principle: at most one particle per quantum state. Bosons (integer spin) can pile into the same state without limit, which enables Bose–Einstein condensation.',
          'Les particules quantiques identiques obéissent à de nouvelles statistiques. Les fermions (spin demi-entier) suivent le principe d\'exclusion de Pauli : au plus une particule par état quantique. Les bosons (spin entier) peuvent s\'accumuler sans limite dans le même état, ce qui permet la condensation de Bose–Einstein.',
          'الجسيمات الكمومية المتطابقة تخضع لإحصاءات جديدة. الفرميونات (ذات اللف نصف الصحيح) تتبع مبدأ استبعاد باولي: جسيم واحد على الأكثر في كل حالة كمومية. أما البوزونات (ذات اللف الصحيح) فيمكنها التكدس في الحالة نفسها بلا حد، مما يتيح تكاثف بوز–أينشتاين.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Fermi–Dirac: ⟨n⟩ = 1/(e^(β(ε−μ)) + 1) — occupation between 0 and 1.', 'Fermi–Dirac : ⟨n⟩ = 1/(e^(β(ε−μ)) + 1) — occupation entre 0 et 1.', 'فيرمي–ديراك: ⟨n⟩ = 1/(e^(β(ε−μ)) + 1) — إشغال بين 0 و 1.'),
          L('Bose–Einstein: ⟨n⟩ = 1/(e^(β(ε−μ)) − 1) — can diverge as ε → μ.', 'Bose–Einstein : ⟨n⟩ = 1/(e^(β(ε−μ)) − 1) — peut diverger quand ε → μ.', 'بوز–أينشتاين: ⟨n⟩ = 1/(e^(β(ε−μ)) − 1) — قد يتباعد عندما ε → μ.'),
          L('At high temperature both reduce to the classical Maxwell–Boltzmann limit.', 'À haute température, les deux se réduisent à la limite classique de Maxwell–Boltzmann.', 'عند درجات الحرارة العالية يؤول كلاهما إلى نهاية ماكسويل–بولتزمان الكلاسيكية.'),
          L('Electrons in metals form a degenerate Fermi gas with Fermi energy E_F.', 'Les électrons des métaux forment un gaz de Fermi dégénéré d\'énergie de Fermi E_F.', 'إلكترونات المعادن تشكل غاز فيرمي منحلاً بطاقة فيرمي E_F.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which phenomenon is a direct consequence of Bose–Einstein statistics?',
          'Quel phénomène est une conséquence directe de la statistique de Bose–Einstein ?',
          'أي ظاهرة تنتج مباشرة عن إحصاء بوز–أينشتاين؟',
        ),
        choices: [
          { text: L('The stability of neutron stars', 'La stabilité des étoiles à neutrons', 'استقرار النجوم النيوترونية') },
          {
            text: L(
              'A macroscopic number of atoms condensing into the ground state',
              'Un nombre macroscopique d\'atomes se condensant dans l\'état fondamental',
              'تكاثف عدد عياني من الذرات في الحالة الأرضية',
            ),
            explanation: L(
              'Bose–Einstein condensation, observed in ultracold atomic gases in 1995.',
              'La condensation de Bose–Einstein, observée dans les gaz atomiques ultrafroids en 1995.',
              'هذا تكاثف بوز–أينشتاين، الذي رُصد في غازات ذرية فائقة البرودة عام 1995.',
            ),
          },
          { text: L('The periodic table structure', 'La structure du tableau périodique', 'بنية الجدول الدوري') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'What is the maximum occupation number of a single quantum state for fermions?',
          'Quel est le nombre d\'occupation maximal d\'un état quantique pour des fermions ?',
          'ما أقصى عدد إشغال لحالة كمومية واحدة بالنسبة للفرميونات؟',
        ),
        answer: 1,
        hint: L(
          'Pauli exclusion principle.',
          'Principe d\'exclusion de Pauli.',
          'مبدأ استبعاد باولي.',
        ),
      },
    ],
  },

  // Graduate — Quantum field theory
  [lessonKey('physics', 'graduate', 'qft', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Canonical quantization promotes a classical field φ(x) and its conjugate momentum π(x) = ∂ℒ/∂φ̇ to operators with equal-time commutators [φ(x), π(y)] = iδ³(x − y). Expanding φ in plane waves introduces creation and annihilation operators a†(k), a(k): particles are quantized excitations of the field.',
          'La quantification canonique promeut un champ classique φ(x) et son moment conjugué π(x) = ∂ℒ/∂φ̇ en opérateurs avec les commutateurs à temps égaux [φ(x), π(y)] = iδ³(x − y). Le développement de φ en ondes planes introduit les opérateurs de création et d\'annihilation a†(k), a(k) : les particules sont les excitations quantifiées du champ.',
          'التكميم القانوني يرقّي الحقل الكلاسيكي φ(x) وزخمه المرافق π(x) = ∂ℒ/∂φ̇ إلى مؤثرات تحقق مبادلات اللحظة نفسها [φ(x), π(y)] = iδ³(x − y). ونشر φ في موجات مستوية يُدخل مؤثري الخلق والفناء a†(k) و a(k): فالجسيمات هي الإثارات المكمّاة للحقل.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Free scalar field: ℒ = ½∂μφ∂^μφ − ½m²φ², giving the Klein–Gordon equation (∂² + m²)φ = 0.', 'Champ scalaire libre : ℒ = ½∂μφ∂^μφ − ½m²φ², donnant l\'équation de Klein–Gordon (∂² + m²)φ = 0.', 'الحقل السلمي الحر: ℒ = ½∂μφ∂^μφ − ½m²φ²، ويعطي معادلة كلاين–غوردون (∂² + m²)φ = 0.'),
          L('The vacuum |0⟩ satisfies a(k)|0⟩ = 0; a†(k)|0⟩ is a one-particle state of momentum k.', 'Le vide |0⟩ vérifie a(k)|0⟩ = 0 ; a†(k)|0⟩ est un état à une particule d\'impulsion k.', 'الفراغ |0⟩ يحقق a(k)|0⟩ = 0؛ و a†(k)|0⟩ حالة جسيم واحد بزخم k.'),
          L('Fermion fields use anticommutators {ψ, ψ†} instead — this enforces Pauli exclusion.', 'Les champs fermioniques utilisent des anticommutateurs {ψ, ψ†} — cela impose l\'exclusion de Pauli.', 'حقول الفرميونات تستخدم مضادات المبادلة {ψ, ψ†} — وهذا يفرض استبعاد باولي.'),
          L('Causality: field operators commute at spacelike separation.', 'Causalité : les opérateurs de champ commutent à séparation de genre espace.', 'السببية: مؤثرات الحقل تتبادل عند الفصل الفضائي.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the steps of canonically quantizing a free scalar field.',
          'Ordonne les étapes de la quantification canonique d\'un champ scalaire libre.',
          'رتّب خطوات التكميم القانوني لحقل سلمي حر.',
        ),
        steps: [
          L('Write the classical Lagrangian density ℒ for the field', 'Écrire la densité lagrangienne classique ℒ du champ', 'اكتب كثافة اللاغرانجيان الكلاسيكية ℒ للحقل'),
          L('Compute the conjugate momentum π = ∂ℒ/∂φ̇', 'Calculer le moment conjugué π = ∂ℒ/∂φ̇', 'احسب الزخم المرافق π = ∂ℒ/∂φ̇'),
          L('Impose [φ(x), π(y)] = iδ³(x − y)', 'Imposer [φ(x), π(y)] = iδ³(x − y)', 'افرض [φ(x), π(y)] = iδ³(x − y)'),
          L('Expand φ in modes with operators a(k), a†(k)', 'Développer φ en modes avec les opérateurs a(k), a†(k)', 'انشر φ في أنماط بمؤثري a(k) و a†(k)'),
          L('Build the Fock space from the vacuum |0⟩', 'Construire l\'espace de Fock à partir du vide |0⟩', 'ابنِ فضاء فوك انطلاقاً من الفراغ |0⟩'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Why must fermion fields be quantized with anticommutators?',
          'Pourquoi les champs fermioniques doivent-ils être quantifiés avec des anticommutateurs ?',
          'لماذا يجب تكميم حقول الفرميونات بمضادات المبادلة؟',
        ),
        choices: [
          {
            text: L(
              'Commutators would give an energy spectrum unbounded from below and break the spin–statistics connection',
              'Des commutateurs donneraient un spectre d\'énergie non borné inférieurement et briseraient le lien spin–statistique',
              'المبادلات العادية تعطي طيف طاقة غير محدود من الأسفل وتخالف علاقة اللف بالإحصاء',
            ),
            explanation: L(
              'This is the content of the spin–statistics theorem.',
              'C\'est le contenu du théorème spin–statistique.',
              'هذا مضمون مبرهنة اللف والإحصاء.',
            ),
          },
          { text: L('Anticommutators are easier to compute', 'Les anticommutateurs sont plus simples à calculer', 'مضادات المبادلة أسهل حساباً') },
          { text: L('It is only a historical convention', 'C\'est seulement une convention historique', 'إنها مجرد اصطلاح تاريخي') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('physics', 'graduate', 'qft', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The path integral formulates quantum theory as a sum over histories: the amplitude is ∫Dφ e^(iS[φ]/ℏ), integrating over all field configurations weighted by the action. Correlation functions become ⟨φ(x₁)…φ(xₙ)⟩ = ∫Dφ φ(x₁)…φ(xₙ) e^(iS)/∫Dφ e^(iS), generated by the functional Z[J].',
          'L\'intégrale de chemin formule la théorie quantique comme une somme sur les histoires : l\'amplitude est ∫Dφ e^(iS[φ]/ℏ), intégrée sur toutes les configurations du champ pondérées par l\'action. Les fonctions de corrélation deviennent ⟨φ(x₁)…φ(xₙ)⟩ = ∫Dφ φ(x₁)…φ(xₙ) e^(iS)/∫Dφ e^(iS), engendrées par la fonctionnelle Z[J].',
          'تكامل المسار يصوغ النظرية الكمومية كمجموع على التواريخ: السعة هي ∫Dφ e^(iS[φ]/ℏ)، بالتكامل على كل تشكيلات الحقل موزونة بالفعل. وتصبح دوال الترابط ⟨φ(x₁)…φ(xₙ)⟩ = ∫Dφ φ(x₁)…φ(xₙ) e^(iS)/∫Dφ e^(iS)، وتولّدها الدالية Z[J].',
        ),
      },
      {
        type: 'list',
        items: [
          L('The classical path dominates when S ≫ ℏ: stationary phase recovers δS = 0.', 'Le chemin classique domine quand S ≫ ℏ : la phase stationnaire redonne δS = 0.', 'المسار الكلاسيكي يهيمن عندما S ≫ ℏ: فالطور المستقر يعيد δS = 0.'),
          L('Wick rotation t → −iτ turns oscillations into e^(−S_E): QFT meets statistical mechanics.', 'La rotation de Wick t → −iτ transforme les oscillations en e^(−S_E) : la QFT rejoint la mécanique statistique.', 'تدوير ويك t → −iτ يحوّل التذبذبات إلى e^(−S_E): فتلتقي نظرية الحقل الكمومي بالميكانيكا الإحصائية.'),
          L('Feynman diagrams are the terms of the perturbative expansion of Z[J].', 'Les diagrammes de Feynman sont les termes du développement perturbatif de Z[J].', 'مخططات فاينمان هي حدود النشر الاضطرابي للدالية Z[J].'),
          L('Gauge theories and non-perturbative effects (instantons) are natural in this language.', 'Les théories de jauge et les effets non perturbatifs (instantons) sont naturels dans ce langage.', 'نظريات المعيار والآثار غير الاضطرابية (الإنستانتونات) طبيعية في هذه اللغة.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'In the limit ℏ → 0, which field configurations dominate ∫Dφ e^(iS/ℏ)?',
          'Dans la limite ℏ → 0, quelles configurations dominent ∫Dφ e^(iS/ℏ) ?',
          'في النهاية ℏ → 0، أي تشكيلات تهيمن على ∫Dφ e^(iS/ℏ)؟',
        ),
        choices: [
          {
            text: L(
              'Those with stationary action, δS = 0 — the classical solutions',
              'Celles d\'action stationnaire, δS = 0 — les solutions classiques',
              'ذات الفعل المستقر δS = 0 — أي الحلول الكلاسيكية',
            ),
            explanation: L(
              'Away from stationary points the phase oscillates wildly and contributions cancel.',
              'Loin des points stationnaires, la phase oscille violemment et les contributions s\'annulent.',
              'بعيداً عن نقاط الاستقرار يتذبذب الطور بشدة فتتلاشى المساهمات.',
            ),
          },
          { text: L('Those with maximum energy', 'Celles d\'énergie maximale', 'ذات الطاقة القصوى') },
          { text: L('All configurations equally', 'Toutes les configurations également', 'كل التشكيلات بالتساوي') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'In 4D spacetime with ℏ = c = 1, the action is dimensionless. What is the mass dimension of a scalar field φ in ℒ = ½∂μφ∂^μφ?',
          'En espace-temps 4D avec ℏ = c = 1, l\'action est sans dimension. Quelle est la dimension de masse d\'un champ scalaire φ dans ℒ = ½∂μφ∂^μφ ?',
          'في زمكان رباعي الأبعاد مع ℏ = c = 1 يكون الفعل عديم الأبعاد. ما البعد الكتلي لحقل سلمي φ في ℒ = ½∂μφ∂^μφ؟',
        ),
        answer: 1,
        hint: L(
          '[ℒ] = 4 and each ∂μ carries dimension 1.',
          '[ℒ] = 4 et chaque ∂μ porte la dimension 1.',
          '[ℒ] = 4 وكل ∂μ يحمل البعد 1.',
        ),
      },
    ],
  },
  [lessonKey('physics', 'graduate', 'qft', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Loop diagrams diverge because they integrate over arbitrarily high momenta. Renormalization tames this: regulate the integrals (cutoff Λ or dimensional regularization), absorb the divergences into redefined masses and couplings, and express predictions in terms of measured quantities. Couplings then run with the energy scale μ, governed by the beta function.',
          'Les diagrammes en boucle divergent car ils intègrent sur des impulsions arbitrairement grandes. La renormalisation dompte cela : régulariser les intégrales (coupure Λ ou régularisation dimensionnelle), absorber les divergences dans des masses et couplages redéfinis, et exprimer les prédictions en termes de quantités mesurées. Les couplages « courent » alors avec l\'échelle d\'énergie μ, gouvernés par la fonction bêta.',
          'مخططات الحلقات تتباعد لأنها تكامل على زخوم عالية بلا حد. إعادة التطبيع تروّض ذلك: قنّن التكاملات (قطع Λ أو تقنين بُعدي)، واستوعب التباعدات في كتل واقترانات معاد تعريفها، وعبّر عن التنبؤات بدلالة كميات مقيسة. عندها «تجري» الاقترانات مع سلّم الطاقة μ وفق دالة بيتا.',
        ),
      },
      {
        type: 'list',
        items: [
          L('In φ⁴ theory, the superficial degree of divergence of a diagram is D = 4 − E, with E external legs.', 'Dans la théorie φ⁴, le degré superficiel de divergence d\'un diagramme est D = 4 − E, avec E pattes externes.', 'في نظرية φ⁴، درجة التباعد الظاهرية لمخطط هي D = 4 − E، حيث E عدد الأرجل الخارجية.'),
          L('Renormalizable theory: only finitely many counterterm types are needed.', 'Théorie renormalisable : seul un nombre fini de types de contre-termes est nécessaire.', 'النظرية القابلة لإعادة التطبيع: تحتاج عدداً منتهياً فقط من أنواع الحدود المضادة.'),
          L('QED\'s coupling grows with energy; QCD\'s shrinks — asymptotic freedom.', 'Le couplage de la QED croît avec l\'énergie ; celui de la QCD décroît — liberté asymptotique.', 'اقتران QED يكبر مع الطاقة؛ واقتران QCD يتقلص — الحرية المقاربية.'),
          L('Wilson\'s view: theories are effective descriptions valid below a scale.', 'Vision de Wilson : les théories sont des descriptions effectives valables sous une échelle.', 'رؤية ويلسون: النظريات أوصاف فعّالة صالحة تحت سلّم طاقة معيّن.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does a negative beta function, as in QCD, imply?',
          'Qu\'implique une fonction bêta négative, comme en QCD ?',
          'ماذا تعني دالة بيتا سالبة كما في QCD؟',
        ),
        choices: [
          {
            text: L(
              'The coupling weakens at high energy — asymptotic freedom',
              'Le couplage s\'affaiblit à haute énergie — liberté asymptotique',
              'يضعف الاقتران عند الطاقات العالية — الحرية المقاربية',
            ),
            explanation: L(
              'Gross, Politzer and Wilczek received the 2004 Nobel Prize for this discovery.',
              'Gross, Politzer et Wilczek ont reçu le prix Nobel 2004 pour cette découverte.',
              'نال غروس وبوليتزر وويلتشيك جائزة نوبل 2004 عن هذا الاكتشاف.',
            ),
          },
          { text: L('The theory has no interactions', 'La théorie n\'a pas d\'interactions', 'النظرية بلا تفاعلات') },
          { text: L('The coupling is constant at all scales', 'Le couplage est constant à toutes les échelles', 'الاقتران ثابت عند كل السلالم') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Using D = 4 − E in φ⁴ theory, what is the superficial degree of divergence of a diagram with 2 external legs?',
          'Avec D = 4 − E dans la théorie φ⁴, quel est le degré superficiel de divergence d\'un diagramme à 2 pattes externes ?',
          'باستخدام D = 4 − E في نظرية φ⁴، ما درجة التباعد الظاهرية لمخطط له رجلان خارجيتان؟',
        ),
        answer: 2,
        hint: L(
          'This quadratic divergence renormalizes the mass.',
          'Cette divergence quadratique renormalise la masse.',
          'هذا التباعد التربيعي يعيد تطبيع الكتلة.',
        ),
      },
    ],
  },

  // Graduate — General relativity
  [lessonKey('physics', 'graduate', 'gr', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'General relativity models spacetime as a 4D manifold with a metric g_μν that defines intervals ds² = g_μν dx^μ dx^ν. Free particles follow geodesics — the straightest possible paths. Curvature, encoded in the Riemann tensor R^ρ_σμν built from the metric, is what we experience as gravity.',
          'La relativité générale modélise l\'espace-temps comme une variété 4D munie d\'une métrique g_μν qui définit les intervalles ds² = g_μν dx^μ dx^ν. Les particules libres suivent des géodésiques — les chemins les plus droits possibles. La courbure, encodée dans le tenseur de Riemann R^ρ_σμν construit à partir de la métrique, est ce que nous ressentons comme la gravité.',
          'النسبية العامة تمثّل الزمكان بمتعدد شعب رباعي الأبعاد ذي متري g_μν يعرّف الفواصل ds² = g_μν dx^μ dx^ν. الجسيمات الحرة تتبع الجيوديسيات — أكثر المسارات استقامة. أما الانحناء، المشفّر في موتّر ريمان R^ρ_σμν المبني من المتري، فهو ما نختبره كجاذبية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Equivalence principle: locally, free fall is indistinguishable from no gravity.', 'Principe d\'équivalence : localement, la chute libre est indiscernable de l\'absence de gravité.', 'مبدأ التكافؤ: محلياً، لا يمكن تمييز السقوط الحر عن غياب الجاذبية.'),
          L('The Christoffel symbols Γ^λ_μν define parallel transport and the geodesic equation.', 'Les symboles de Christoffel Γ^λ_μν définissent le transport parallèle et l\'équation des géodésiques.', 'رموز كريستوفل Γ^λ_μν تعرّف النقل الموازي ومعادلة الجيوديسيا.'),
          L('Geodesic equation: d²x^λ/dτ² + Γ^λ_μν (dx^μ/dτ)(dx^ν/dτ) = 0.', 'Équation des géodésiques : d²x^λ/dτ² + Γ^λ_μν (dx^μ/dτ)(dx^ν/dτ) = 0.', 'معادلة الجيوديسيا: d²x^λ/dτ² + Γ^λ_μν (dx^μ/dτ)(dx^ν/dτ) = 0.'),
          L('Tidal forces = geodesic deviation, governed by the Riemann tensor.', 'Forces de marée = déviation géodésique, gouvernée par le tenseur de Riemann.', 'قوى المد والجزر = انحراف الجيوديسيات، ويحكمه موتّر ريمان.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'In general relativity, why does an apple fall from a tree?',
          'En relativité générale, pourquoi une pomme tombe-t-elle de l\'arbre ?',
          'في النسبية العامة، لماذا تسقط التفاحة من الشجرة؟',
        ),
        choices: [
          { text: L('A gravitational force pulls it down', 'Une force gravitationnelle la tire vers le bas', 'قوة جاذبية تسحبها إلى الأسفل') },
          {
            text: L(
              'It follows a geodesic of curved spacetime; the branch was holding it off that path',
              'Elle suit une géodésique de l\'espace-temps courbé ; la branche la retenait hors de ce chemin',
              'إنها تتبع جيوديسيا الزمكان المنحني؛ وكان الغصن يمسكها بعيداً عن ذلك المسار',
            ),
            explanation: L(
              'Gravity is geometry: no force acts on the apple in free fall.',
              'La gravité est géométrie : aucune force n\'agit sur la pomme en chute libre.',
              'الجاذبية هندسة: لا قوة تؤثر على التفاحة أثناء سقوطها الحر.',
            ),
          },
          { text: L('Air pressure pushes it down', 'La pression de l\'air la pousse vers le bas', 'ضغط الهواء يدفعها إلى الأسفل') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'The metric g_μν is a symmetric 4×4 tensor. How many independent components does it have?',
          'La métrique g_μν est un tenseur symétrique 4×4. Combien de composantes indépendantes possède-t-elle ?',
          'المتري g_μν موتّر متناظر 4×4. كم عدد مركّباته المستقلة؟',
        ),
        answer: 10,
        hint: L(
          'n(n+1)/2 for a symmetric n×n matrix.',
          'n(n+1)/2 pour une matrice symétrique n×n.',
          'n(n+1)/2 لمصفوفة متناظرة n×n.',
        ),
      },
    ],
  },
  [lessonKey('physics', 'graduate', 'gr', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The Einstein field equations, G_μν = 8πG T_μν (with c = 1), relate geometry to matter. The Einstein tensor G_μν = R_μν − ½R g_μν is built from the Ricci tensor and scalar; T_μν is the energy–momentum tensor. The Bianchi identity ∇^μG_μν = 0 automatically enforces energy–momentum conservation.',
          'Les équations d\'Einstein, G_μν = 8πG T_μν (avec c = 1), relient la géométrie à la matière. Le tenseur d\'Einstein G_μν = R_μν − ½R g_μν se construit avec le tenseur et le scalaire de Ricci ; T_μν est le tenseur énergie–impulsion. L\'identité de Bianchi ∇^μG_μν = 0 impose automatiquement la conservation de l\'énergie–impulsion.',
          'معادلات أينشتاين للمجال، G_μν = 8πG T_μν (مع c = 1)، تربط الهندسة بالمادة. موتّر أينشتاين G_μν = R_μν − ½R g_μν مبني من موتّر ريتشي وسلميّه؛ و T_μν هو موتّر الطاقة والزخم. ومتطابقة بيانكي ∇^μG_μν = 0 تضمن تلقائياً حفظ الطاقة والزخم.',
        ),
      },
      {
        type: 'list',
        items: [
          L('They can be derived from the Einstein–Hilbert action S = (1/16πG)∫R √(−g) d⁴x.', 'Elles se déduisent de l\'action d\'Einstein–Hilbert S = (1/16πG)∫R √(−g) d⁴x.', 'يمكن اشتقاقها من فعل أينشتاين–هيلبرت S = (1/16πG)∫R √(−g) d⁴x.'),
          L('In the weak-field, slow-motion limit they reduce to Newton: ∇²Φ = 4πGρ.', 'En champ faible et mouvement lent, elles se réduisent à Newton : ∇²Φ = 4πGρ.', 'في نهاية المجال الضعيف والحركة البطيئة تؤول إلى نيوتن: ∇²Φ = 4πGρ.'),
          L('Adding Λg_μν gives the cosmological constant — today\'s dark energy candidate.', 'Ajouter Λg_μν donne la constante cosmologique — candidate actuelle à l\'énergie noire.', 'إضافة Λg_μν تعطي الثابت الكوني — المرشح الحالي للطاقة المظلمة.'),
          L('Predictions: light bending, perihelion precession, gravitational waves, black holes.', 'Prédictions : déviation de la lumière, précession du périhélie, ondes gravitationnelles, trous noirs.', 'تنبؤات: انحناء الضوء، ومباد حضيض عطارد، والموجات الثقالية، والثقوب السوداء.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What plays the role of the source of spacetime curvature in G_μν = 8πG T_μν?',
          'Quel est le rôle de source de la courbure de l\'espace-temps dans G_μν = 8πG T_μν ?',
          'ما الذي يلعب دور مصدر انحناء الزمكان في G_μν = 8πG T_μν؟',
        ),
        choices: [
          { text: L('Mass only', 'La masse seulement', 'الكتلة فقط') },
          {
            text: L(
              'All energy, momentum, pressure and stress in T_μν',
              'Toute l\'énergie, l\'impulsion, la pression et les contraintes dans T_μν',
              'كل الطاقة والزخم والضغط والإجهاد في T_μν',
            ),
            explanation: L(
              'Even pressure gravitates — crucial in stars and cosmology.',
              'Même la pression gravite — crucial dans les étoiles et en cosmologie.',
              'حتى الضغط له أثر جذبوي — وهو أمر حاسم في النجوم وعلم الكون.',
            ),
          },
          { text: L('Electric charge', 'La charge électrique', 'الشحنة الكهربائية') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the steps to derive the field equations from the Einstein–Hilbert action.',
          'Ordonne les étapes pour dériver les équations du champ depuis l\'action d\'Einstein–Hilbert.',
          'رتّب خطوات اشتقاق معادلات المجال من فعل أينشتاين–هيلبرت.',
        ),
        steps: [
          L('Write S = (1/16πG)∫R √(−g) d⁴x + S_matter', 'Écrire S = (1/16πG)∫R √(−g) d⁴x + S_matière', 'اكتب S = (1/16πG)∫R √(−g) d⁴x + فعل المادة'),
          L('Vary the action with respect to the metric g^μν', 'Varier l\'action par rapport à la métrique g^μν', 'غايِر الفعل بالنسبة إلى المتري g^μν'),
          L('Use δ(√(−g)) = −½√(−g) g_μν δg^μν and δR', 'Utiliser δ(√(−g)) = −½√(−g) g_μν δg^μν et δR', 'استخدم δ(√(−g)) = −½√(−g) g_μν δg^μν و δR'),
          L('Set δS = 0 to obtain G_μν = 8πG T_μν', 'Poser δS = 0 pour obtenir G_μν = 8πG T_μν', 'ضع δS = 0 لتحصل على G_μν = 8πG T_μν'),
        ],
      },
    ],
  },
  [lessonKey('physics', 'graduate', 'gr', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The Schwarzschild solution describes spacetime outside a spherical mass M. At r_s = 2GM/c², the event horizon, escape becomes impossible: a black hole. The horizon is not a place of infinite curvature — the true singularity sits at r = 0, where the theory breaks down.',
          'La solution de Schwarzschild décrit l\'espace-temps à l\'extérieur d\'une masse sphérique M. À r_s = 2GM/c², l\'horizon des événements, toute évasion devient impossible : un trou noir. L\'horizon n\'est pas un lieu de courbure infinie — la vraie singularité est en r = 0, où la théorie cesse d\'être valable.',
          'حل شفارتزشيلد يصف الزمكان خارج كتلة كروية M. عند r_s = 2GM/c²، أي أفق الحدث، يصبح الهروب مستحيلاً: إنه ثقب أسود. الأفق ليس موضع انحناء لانهائي — فالتفرد الحقيقي عند r = 0 حيث تنهار النظرية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Schwarzschild metric: ds² = −(1 − r_s/r)dt² + dr²/(1 − r_s/r) + r²dΩ².', 'Métrique de Schwarzschild : ds² = −(1 − r_s/r)dt² + dr²/(1 − r_s/r) + r²dΩ².', 'متري شفارتزشيلد: ds² = −(1 − r_s/r)dt² + dr²/(1 − r_s/r) + r²dΩ².'),
          L('Time dilation: clocks near the horizon tick slower for distant observers.', 'Dilatation du temps : les horloges près de l\'horizon battent plus lentement pour un observateur lointain.', 'تمدد الزمن: الساعات قرب الأفق تدق أبطأ بالنسبة لمراقب بعيد.'),
          L('Rotating black holes (Kerr) drag spacetime around them.', 'Les trous noirs en rotation (Kerr) entraînent l\'espace-temps autour d\'eux.', 'الثقوب السوداء الدوّارة (كير) تجرّ الزمكان حولها.'),
          L('Hawking radiation: quantum effects give black holes a temperature T ∝ 1/M.', 'Rayonnement de Hawking : les effets quantiques donnent aux trous noirs une température T ∝ 1/M.', 'إشعاع هوكينغ: الآثار الكمومية تمنح الثقوب السوداء درجة حرارة T ∝ 1/M.'),
          L('Observed: LIGO gravitational waves (2015), Event Horizon Telescope image (2019).', 'Observé : ondes gravitationnelles LIGO (2015), image de l\'Event Horizon Telescope (2019).', 'رُصدت: موجات LIGO الثقالية (2015) وصورة تلسكوب أفق الحدث (2019).'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What is the Schwarzschild radius of the Sun in kilometers? (M ≈ 2 × 10³⁰ kg, G ≈ 6.67 × 10⁻¹¹, c = 3 × 10⁸ m/s)',
          'Quel est le rayon de Schwarzschild du Soleil en kilomètres ? (M ≈ 2 × 10³⁰ kg, G ≈ 6,67 × 10⁻¹¹, c = 3 × 10⁸ m/s)',
          'ما نصف قطر شفارتزشيلد للشمس بالكيلومترات؟ (M ≈ 2 × 10³⁰ كغ، G ≈ 6.67 × 10⁻¹¹، c = 3 × 10⁸ م/ث)',
        ),
        answer: 3,
        tolerance: 0.2,
        unit: 'km',
        hint: L('r_s = 2GM/c².', 'r_s = 2GM/c².', 'r_s = 2GM/c².'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What happens to an astronaut crossing the event horizon of a supermassive black hole?',
          'Qu\'arrive-t-il à un astronaute qui franchit l\'horizon d\'un trou noir supermassif ?',
          'ماذا يحدث لرائد فضاء يعبر أفق حدث ثقب أسود فائق الكتلة؟',
        ),
        choices: [
          { text: L('They are instantly destroyed at the horizon', 'Il est instantanément détruit à l\'horizon', 'يُدمَّر فوراً عند الأفق') },
          {
            text: L(
              'Nothing special locally — but no signal can ever escape outward again',
              'Rien de spécial localement — mais aucun signal ne pourra plus jamais s\'échapper',
              'لا شيء مميز محلياً — لكن لا إشارة يمكن أن تفلت إلى الخارج بعدها',
            ),
            explanation: L(
              'For large M, tidal forces at the horizon are weak; the horizon is globally, not locally, special.',
              'Pour un grand M, les forces de marée à l\'horizon sont faibles ; l\'horizon est spécial globalement, pas localement.',
              'عند M كبيرة تكون قوى المد عند الأفق ضعيفة؛ فالأفق مميز عالمياً لا محلياً.',
            ),
          },
          { text: L('They bounce back into space', 'Il rebondit vers l\'espace', 'يرتد إلى الفضاء') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // PhD — Frontier physics
  [lessonKey('physics', 'phd', 'frontier', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Frontier physics is defined by its open problems: questions where our best theories fail or stay silent. Quantum gravity, the nature of dark matter and dark energy, the matter–antimatter asymmetry, the black hole information paradox and high-temperature superconductivity all resist decades of effort — and each one signals physics beyond our current frameworks.',
          'La physique de frontière se définit par ses problèmes ouverts : des questions où nos meilleures théories échouent ou restent muettes. La gravité quantique, la nature de la matière noire et de l\'énergie noire, l\'asymétrie matière–antimatière, le paradoxe de l\'information des trous noirs et la supraconductivité à haute température résistent à des décennies d\'efforts — et chacun signale une physique au-delà de nos cadres actuels.',
          'تُعرَّف فيزياء الحدود بمسائلها المفتوحة: أسئلة تفشل أمامها أفضل نظرياتنا أو تصمت. الجاذبية الكمومية، وطبيعة المادة المظلمة والطاقة المظلمة، وعدم تناظر المادة والمادة المضادة، ومفارقة معلومات الثقب الأسود، والموصلية الفائقة عالية الحرارة — كلها تقاوم عقوداً من الجهد، وكل منها يشير إلى فيزياء تتجاوز أطرنا الحالية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Quantum gravity: GR and QFT give inconsistent answers near singularities and horizons.', 'Gravité quantique : la RG et la QFT donnent des réponses incohérentes près des singularités et des horizons.', 'الجاذبية الكمومية: النسبية العامة ونظرية الحقل الكمومي تعطيان إجابات متضاربة قرب التفردات والآفاق.'),
          L('Dark matter: ~85% of matter interacts gravitationally but has never been detected directly.', 'Matière noire : ~85 % de la matière interagit gravitationnellement mais n\'a jamais été détectée directement.', 'المادة المظلمة: نحو 85% من المادة تتفاعل جذبوياً لكنها لم تُرصد مباشرة قط.'),
          L('The cosmological constant problem: QFT overestimates Λ by ~120 orders of magnitude.', 'Le problème de la constante cosmologique : la QFT surestime Λ d\'environ 120 ordres de grandeur.', 'مشكلة الثابت الكوني: نظرية الحقل الكمومي تبالغ في تقدير Λ بنحو 120 مرتبة عشرية.'),
          L('The hierarchy problem: why is gravity 10³² times weaker than the weak force?', 'Le problème de hiérarchie : pourquoi la gravité est-elle 10³² fois plus faible que la force faible ?', 'مشكلة التسلسل الهرمي: لماذا الجاذبية أضعف من القوة الضعيفة بمقدار 10³² مرة؟'),
          L('A good research problem is important, tractable, and matched to available tools.', 'Un bon problème de recherche est important, abordable, et adapté aux outils disponibles.', 'المسألة البحثية الجيدة مهمة وقابلة للمعالجة ومناسبة للأدوات المتاحة.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Why is the black hole information paradox considered a deep open problem rather than a technicality?',
          'Pourquoi le paradoxe de l\'information des trous noirs est-il considéré comme un problème profond plutôt qu\'un détail technique ?',
          'لماذا تُعد مفارقة معلومات الثقب الأسود مشكلة عميقة لا مجرد تفصيل تقني؟',
        ),
        choices: [
          {
            text: L(
              'Hawking evaporation seems to destroy information, clashing with the unitarity of quantum mechanics',
              'L\'évaporation de Hawking semble détruire l\'information, en conflit avec l\'unitarité de la mécanique quantique',
              'يبدو أن تبخر هوكينغ يمحو المعلومات، وهذا يتعارض مع أحادية ميكانيكا الكم',
            ),
            explanation: L(
              'Resolving it likely requires modifying our understanding of gravity, quantum theory, or both.',
              'Sa résolution exigera sans doute de modifier notre compréhension de la gravité, de la théorie quantique, ou des deux.',
              'حلها يتطلب على الأرجح تعديل فهمنا للجاذبية أو نظرية الكم أو كليهما.',
            ),
          },
          { text: L('Black holes are too far away to study', 'Les trous noirs sont trop lointains pour être étudiés', 'الثقوب السوداء أبعد من أن تُدرس') },
          { text: L('The equations are merely hard to solve numerically', 'Les équations sont seulement difficiles à résoudre numériquement', 'المعادلات صعبة الحل عددياً فحسب') },
        ],
        correctIndex: 0,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which evidence supports dark matter?',
          'Quelle observation soutient la matière noire ?',
          'أي دليل يدعم وجود المادة المظلمة؟',
        ),
        choices: [
          { text: L('The redshift of distant supernovae', 'Le décalage vers le rouge des supernovae lointaines', 'الانزياح الأحمر للمستعرات العظمى البعيدة') },
          {
            text: L(
              'Galaxy rotation curves stay flat far beyond the visible matter',
              'Les courbes de rotation des galaxies restent plates bien au-delà de la matière visible',
              'منحنيات دوران المجرات تبقى مسطحة بعيداً عن حدود المادة المرئية',
            ),
            explanation: L(
              'Also: gravitational lensing, the CMB power spectrum, and structure formation.',
              'Aussi : lentilles gravitationnelles, spectre du CMB, formation des structures.',
              'أيضاً: العدسات الثقالية وطيف إشعاع الخلفية الكونية وتشكل البنى.',
            ),
          },
          { text: L('The expansion of the universe is accelerating', 'L\'expansion de l\'univers s\'accélère', 'تسارع تمدد الكون') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('physics', 'phd', 'frontier', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Experimental design turns a physics question into a measurable quantity with quantified uncertainty. The core discipline: state a falsifiable hypothesis, identify systematic and statistical errors before taking data, and decide the analysis in advance — blind analyses prevent experimenters from steering results toward expectations.',
          'La conception expérimentale transforme une question de physique en une quantité mesurable avec une incertitude quantifiée. La discipline de base : formuler une hypothèse falsifiable, identifier les erreurs systématiques et statistiques avant de prendre les données, et fixer l\'analyse à l\'avance — les analyses en aveugle empêchent les expérimentateurs d\'orienter les résultats vers leurs attentes.',
          'التصميم التجريبي يحوّل سؤالاً فيزيائياً إلى كمية قابلة للقياس بارتياب محدد كمياً. الانضباط الجوهري: صِغ فرضية قابلة للدحض، وحدد الأخطاء المنهجية والإحصائية قبل جمع البيانات، وقرر خطة التحليل مسبقاً — فالتحليلات العمياء تمنع التجريبيين من دفع النتائج نحو توقعاتهم.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Statistical errors shrink as 1/√N; systematic errors do not — they must be modeled.', 'Les erreurs statistiques diminuent en 1/√N ; les systématiques non — il faut les modéliser.', 'الأخطاء الإحصائية تتقلص بنسبة 1/√N؛ أما المنهجية فلا — بل يجب نمذجتها.'),
          L('Particle physics convention: 5σ significance (~1 in 3.5 million fluke) to claim discovery.', 'Convention en physique des particules : signification de 5σ (~1 chance sur 3,5 millions de hasard) pour annoncer une découverte.', 'العرف في فيزياء الجسيمات: دلالة 5σ (نحو 1 من 3.5 مليون كصدفة) لإعلان اكتشاف.'),
          L('Control experiments and calibration runs isolate the signal from the apparatus.', 'Les expériences de contrôle et les étalonnages isolent le signal de l\'appareillage.', 'تجارب الضبط وعمليات المعايرة تعزل الإشارة عن أثر الجهاز.'),
          L('LIGO injects fake signals to test its pipeline; double-blind drug trials use the same logic.', 'LIGO injecte de faux signaux pour tester sa chaîne d\'analyse ; les essais en double aveugle suivent la même logique.', 'يحقن LIGO إشارات زائفة لاختبار سلسلة التحليل؛ وتجارب الدواء مزدوجة التعمية تتبع المنطق نفسه.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the stages of a rigorous experiment.',
          'Ordonne les étapes d\'une expérience rigoureuse.',
          'رتّب مراحل تجربة صارمة.',
        ),
        steps: [
          L('Formulate a falsifiable hypothesis and the observable to measure', 'Formuler une hypothèse falsifiable et l\'observable à mesurer', 'صِغ فرضية قابلة للدحض وحدد الكمية المرصودة'),
          L('Design the apparatus and estimate the error budget', 'Concevoir l\'appareillage et estimer le budget d\'erreurs', 'صمم الجهاز وقدّر ميزانية الأخطاء'),
          L('Fix the analysis plan and blinding strategy before data taking', 'Fixer le plan d\'analyse et la stratégie d\'aveuglement avant la prise de données', 'ثبّت خطة التحليل واستراتيجية التعمية قبل جمع البيانات'),
          L('Collect data with calibrations and controls', 'Collecter les données avec étalonnages et contrôles', 'اجمع البيانات مع المعايرة وتجارب الضبط'),
          L('Unblind, quantify uncertainties, and report the result', 'Lever l\'aveuglement, quantifier les incertitudes et publier le résultat', 'ارفع التعمية وقدّر الارتيابات وأعلن النتيجة'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Your statistical error scales as 1/√N. By what factor must you multiply the number of events N to halve it?',
          'Ton erreur statistique varie en 1/√N. Par quel facteur multiplier le nombre d\'événements N pour la diviser par deux ?',
          'خطؤك الإحصائي يتناسب مع 1/√N. بأي عامل يجب أن تضرب عدد الأحداث N لتخفضه إلى النصف؟',
        ),
        answer: 4,
        hint: L(
          'Halving 1/√N requires √N to double.',
          'Diviser 1/√N par deux exige de doubler √N.',
          'خفض 1/√N إلى النصف يتطلب مضاعفة √N.',
        ),
      },
    ],
  },
  [lessonKey('physics', 'phd', 'frontier', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Publishing is how results enter the scientific record. A physics paper argues a claim: abstract, introduction situating the problem, methods precise enough to reproduce, results with uncertainties, and honest discussion of limitations. Peer review then tests the argument — referees probe methods and conclusions before a journal accepts the work, while preprints on arXiv share it immediately.',
          'La publication est la voie par laquelle les résultats entrent dans le registre scientifique. Un article de physique défend une thèse : résumé, introduction situant le problème, méthodes assez précises pour être reproduites, résultats avec incertitudes, et discussion honnête des limites. L\'évaluation par les pairs teste ensuite l\'argument — les rapporteurs examinent méthodes et conclusions avant qu\'une revue accepte le travail, tandis que les prépublications sur arXiv le partagent immédiatement.',
          'النشر هو الطريق الذي تدخل به النتائج السجل العلمي. الورقة الفيزيائية تدافع عن ادعاء: ملخص، ومقدمة تموضع المشكلة، وطرائق دقيقة بما يكفي لإعادة الإنتاج، ونتائج مع ارتياباتها، ومناقشة صادقة للحدود. ثم تختبر مراجعة الأقران هذه الحجة — إذ يفحص المحكّمون الطرائق والاستنتاجات قبل أن تقبل المجلة العمل، بينما تتيح المسودات على arXiv مشاركته فوراً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Referee reports typically demand clarifications, extra checks, or revisions — rarely outright acceptance.', 'Les rapports des rapporteurs demandent généralement des clarifications, des vérifications ou des révisions — rarement une acceptation directe.', 'تقارير المحكّمين تطلب عادة توضيحات أو فحوصاً إضافية أو تعديلات — ونادراً ما تقبل مباشرة.'),
          L('Reproducibility: share data and code when possible; state all assumptions.', 'Reproductibilité : partager données et code quand c\'est possible ; expliciter toutes les hypothèses.', 'قابلية إعادة الإنتاج: شارك البيانات والشيفرة ما أمكن، وصرّح بكل الافتراضات.'),
          L('Authorship order and citation practices vary by subfield — large collaborations sign alphabetically.', 'L\'ordre des auteurs et les pratiques de citation varient selon les sous-domaines — les grandes collaborations signent par ordre alphabétique.', 'ترتيب المؤلفين وأعراف الاستشهاد تختلف بين التخصصات — والتعاونات الكبرى توقّع بالترتيب الأبجدي.'),
          L('Peer review filters errors but is not infallible: replication is the real test.', 'L\'évaluation par les pairs filtre les erreurs mais n\'est pas infaillible : la réplication est le vrai test.', 'مراجعة الأقران ترشّح الأخطاء لكنها ليست معصومة: فالتكرار هو الاختبار الحقيقي.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the typical journey of a physics paper.',
          'Ordonne le parcours typique d\'un article de physique.',
          'رتّب المسار النموذجي لورقة فيزيائية.',
        ),
        steps: [
          L('Write the manuscript and get co-author approval', 'Rédiger le manuscrit et obtenir l\'accord des co-auteurs', 'اكتب المخطوطة واحصل على موافقة المؤلفين المشاركين'),
          L('Post the preprint on arXiv and submit to a journal', 'Déposer la prépublication sur arXiv et soumettre à une revue', 'انشر المسودة على arXiv وقدّمها إلى مجلة'),
          L('Receive referee reports from peer review', 'Recevoir les rapports des rapporteurs de l\'évaluation par les pairs', 'استلم تقارير المحكّمين من مراجعة الأقران'),
          L('Revise and respond point by point to the referees', 'Réviser et répondre point par point aux rapporteurs', 'عدّل وأجب على ملاحظات المحكّمين نقطة بنقطة'),
          L('Acceptance, publication, and scrutiny by the community', 'Acceptation, publication et examen par la communauté', 'القبول ثم النشر ثم تمحيص المجتمع العلمي'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A referee finds your analysis sound but asks for an extra systematic check. What is the professional response?',
          'Un rapporteur juge ton analyse solide mais demande une vérification systématique supplémentaire. Quelle est la réponse professionnelle ?',
          'وجد محكّم تحليلك سليماً لكنه طلب فحصاً منهجياً إضافياً. ما الرد المهني؟',
        ),
        choices: [
          { text: L('Withdraw the paper and submit it unchanged elsewhere', 'Retirer l\'article et le soumettre tel quel ailleurs', 'اسحب الورقة وقدّمها كما هي إلى مجلة أخرى') },
          {
            text: L(
              'Perform the check, report the outcome, and answer each point in a response letter',
              'Effectuer la vérification, rapporter le résultat et répondre à chaque point dans une lettre de réponse',
              'أجرِ الفحص وأبلغ عن نتيجته وأجب على كل نقطة في رسالة الرد',
            ),
            explanation: L(
              'Good referee requests strengthen the paper; engaging with them is part of the scientific process.',
              'Les bonnes demandes des rapporteurs renforcent l\'article ; y répondre fait partie du processus scientifique.',
              'طلبات المحكّمين الجيدة تقوّي الورقة؛ والتفاعل معها جزء من العملية العلمية.',
            ),
          },
          { text: L('Ignore the request since the analysis is already sound', 'Ignorer la demande puisque l\'analyse est déjà solide', 'تجاهل الطلب لأن التحليل سليم أصلاً') },
        ],
        correctIndex: 1,
      },
    ],
  },
}
