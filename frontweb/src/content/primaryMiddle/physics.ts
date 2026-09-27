import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

export const physicsLessons: Record<string, LessonContent> = {
  // Primary — Motion
  [lessonKey('physics', 'primary', 'motion', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A push moves something away from you. A pull brings it toward you. Both are forces.',
          'Une poussée éloigne quelque chose de toi. Une traction le rapproche. Les deux sont des forces.',
          'الدفع يبعد الشيء عنك. السحب يقرّبه منك. كلاهما قوة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Forces can start, stop, or change motion.', 'Les forces peuvent démarrer, arrêter ou changer le mouvement.', 'القوى قد تبدأ أو توقف أو تغيّر الحركة.'),
          L('Harder pushes cause bigger changes.', 'Des poussées plus fortes causent de plus grands changements.', 'دفع أقوى يسبب تغييراً أكبر.'),
          L('Forces act in a direction.', 'Les forces agissent dans une direction.', 'القوى تعمل في اتجاه.'),
        ],
      },
      { type: 'force', direction: 'right' },
      {
        type: 'example',
        question: L(
          'You push a door open. Is that a push or pull?',
          'Tu pousses une porte pour l\'ouvrir. Est-ce une poussée ou une traction ?',
          'تدفع الباب لفتحه. هل هذا دفع أم سحب؟',
        ),
        answer: L('A push.', 'Une poussée.', 'دفع.'),
      },
    ],
  },
  [lessonKey('physics', 'primary', 'motion', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Speed tells how fast something moves. Direction tells where it goes. Together they describe motion.',
          'La vitesse indique à quelle rapidité quelque chose se déplace. La direction indique où il va. Ensemble, elles décrivent le mouvement.',
          'السرعة تخبرنا بسرعة حركة الشيء. الاتجاه يخبرنا إلى أين يذهب. معاً يصفان الحركة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Faster objects cover more distance in the same time.', 'Les objets plus rapides parcourent plus de distance dans le même temps.', 'الأجسام الأسرع تقطع مسافة أكبر في نفس الوقت.'),
          L('Direction can be left, right, up, or down.', 'La direction peut être gauche, droite, haut ou bas.', 'الاتجاه قد يكون يساراً أو يميناً أو أعلى أو أسفل.'),
          L('Changing direction means changing motion.', 'Changer de direction, c\'est changer le mouvement.', 'تغيير الاتجاه يعني تغيير الحركة.'),
        ],
      },
      { type: 'force', direction: 'left' },
      {
        type: 'example',
        question: L(
          'A ball rolls east. What is its direction?',
          'Une balle roule vers l\'est. Quelle est sa direction ?',
          'كرة تتدحرج شرقاً. ما اتجاهها؟',
        ),
        answer: L('East.', 'Est.', 'الشرق.'),
      },
    ],
  },
  [lessonKey('physics', 'primary', 'motion', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Simple machines make work easier. Levers, ramps, and pulleys are examples.',
          'Les machines simples facilitent le travail. Leviers, rampes et poulies en sont des exemples.',
          'الآلات البسيطة تسهّل العمل. الرافعة والمنحدر والبكرة أمثلة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('A ramp spreads force over a longer distance.', 'Une rampe répartit la force sur une plus longue distance.', 'المنحدر يوزّع القوة على مسافة أطول.'),
          L('A lever helps lift heavy objects.', 'Un levier aide à soulever des objets lourds.', 'الرافعة تساعد على رفع أجسام ثقيلة.'),
          L('Machines do not create energy; they redirect force.', 'Les machines ne créent pas d\'énergie ; elles redirigent la force.', 'الآلات لا تخلق طاقة؛ بل توجّه القوة.'),
        ],
      },
      { type: 'force', direction: 'right' },
      {
        type: 'example',
        question: L(
          'Which simple machine is a sloped surface?',
          'Quelle machine simple est une surface inclinée ?',
          'أي آلة بسيطة هي سطح مائل؟',
        ),
        answer: L('A ramp (inclined plane).', 'Une rampe (plan incliné).', 'منحدر (مستوى مائل).'),
      },
    ],
  },

  // Primary — Light & Sound
  [lessonKey('physics', 'primary', 'light-sound', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'We see when light from a source enters our eyes. The Sun, lamps, and fire give off light.',
          'Nous voyons quand la lumière d\'une source entre dans nos yeux. Le Soleil, les lampes et le feu émettent de la lumière.',
          'نرى عندما يدخل الضوء من مصدر إلى أعيننا. الشمس والمصابيح والنار تُطلق ضوءاً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Light travels in straight lines.', 'La lumière se propage en lignes droites.', 'الضوء ينتقل في خطوط مستقيمة.'),
          L('Dark objects absorb more light.', 'Les objets sombres absorbent plus de lumière.', 'الأجسام الداكنة تمتص ضوءاً أكثر.'),
          L('Bright objects reflect more light to our eyes.', 'Les objets clairs renvoient plus de lumière vers nos yeux.', 'الأجسام الفاتحة تعكس ضوءاً أكثر إلى أعيننا.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Can you see a book in a dark room without a lamp?',
          'Peux-tu voir un livre dans une pièce sombre sans lampe ?',
          'هل ترى كتاباً في غرفة مظلمة بلا مصباح؟',
        ),
        answer: L(
          'No, we need light to see.',
          'Non, il faut de la lumière pour voir.',
          'لا، نحتاج ضوءاً لنرى.',
        ),
      },
      { type: 'force', direction: 'right' },
    ],
  },
  [lessonKey('physics', 'primary', 'light-sound', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Shadows form when an object blocks light. Reflection happens when light bounces off a smooth surface.',
          'Les ombres se forment quand un objet bloque la lumière. La réflexion se produit quand la lumière rebondit sur une surface lisse.',
          'الظلال تتكون عندما يحجب جسم الضوء. الانعكاس يحدث عندما يرتد الضوء عن سطح أملس.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Shadows are darker areas behind objects.', 'Les ombres sont des zones plus sombres derrière les objets.', 'الظلال مناطق أغمق خلف الأجسام.'),
          L('Mirrors reflect light well.', 'Les miroirs réfléchissent bien la lumière.', 'المرايا تعكس الضوء جيداً.'),
          L('Rough surfaces scatter light in many directions.', 'Les surfaces rugueuses dispersent la lumière.', 'الأسطح الخشنة تشتت الضوء في اتجاهات متعددة.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Why does your shadow move when you move?',
          'Pourquoi ton ombre bouge quand tu bouges ?',
          'لماذا يتحرك ظلك عندما تتحرك؟',
        ),
        answer: L(
          'You block light in a new position.',
          'Tu bloques la lumière à une nouvelle position.',
          'لأنك تحجب الضوء في موضع جديد.',
        ),
      },
      { type: 'compare', left: 1, right: 0 },
    ],
  },
  [lessonKey('physics', 'primary', 'light-sound', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Sound is made by vibrations. Vibrations travel through air to our ears as sound waves.',
          'Le son est produit par des vibrations. Les vibrations se propagent dans l\'air jusqu\'à nos oreilles sous forme d\'ondes sonores.',
          'الصوت ينتج من اهتزازات. الاهتزازات تنتقل عبر الهواء إلى آذاننا كموجات صوتية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Plucking a string makes it vibrate.', 'Pincer une corde la fait vibrer.', 'نقر الوتر يجعله يهتز.'),
          L('Louder sounds have stronger vibrations.', 'Les sons plus forts ont des vibrations plus intenses.', 'الأصوات الأعلى لها اهتزازات أقوى.'),
          L('Sound needs a medium like air or water.', 'Le son a besoin d\'un milieu comme l\'air ou l\'eau.', 'الصوت يحتاج وسطاً مثل الهواء أو الماء.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Can sound travel in empty space?',
          'Le son peut-il voyager dans l\'espace vide ?',
          'هل ينتقل الصوت في الفضاء الفارغ؟',
        ),
        answer: L(
          'No, there is no air to carry vibrations.',
          'Non, il n\'y a pas d\'air pour porter les vibrations.',
          'لا، لا يوجد هواء لحمل الاهتزازات.',
        ),
      },
      { type: 'force', direction: 'left' },
    ],
  },

  // Primary — Matter
  [lessonKey('physics', 'primary', 'matter', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Matter is anything that takes up space and has mass. Solids, liquids, and gases are states of matter.',
          'La matière est tout ce qui occupe de l\'espace et a une masse. Solides, liquides et gaz sont des états de la matière.',
          'المادة كل ما يشغل حيزاً وله كتلة. الصلب والسائل والغاز حالات المادة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Solids keep their shape.', 'Les solides gardent leur forme.', 'الصلب يحافظ على شكله.'),
          L('Liquids take the shape of their container.', 'Les liquides prennent la forme de leur récipient.', 'السائل يأخذ شكل وعائه.'),
          L('Gases spread to fill available space.', 'Les gaz se répandent pour remplir l\'espace.', 'الغاز ينتشر ليملأ الفراغ المتاح.'),
        ],
      },
      { type: 'states', highlight: 'solid' },
      {
        type: 'example',
        question: L(
          'Is water in a glass a solid, liquid, or gas?',
          'L\'eau dans un verre est-elle solide, liquide ou gazeuse ?',
          'هل الماء في كوب صلب أم سائل أم غاز؟',
        ),
        answer: L('Liquid.', 'Liquide.', 'سائل.'),
      },
    ],
  },
  [lessonKey('physics', 'primary', 'matter', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Mass is the amount of matter in an object. Weight is the pull of gravity on that mass.',
          'La masse est la quantité de matière dans un objet. Le poids est l\'attraction de la gravité sur cette masse.',
          'الكتلة كمية المادة في الجسم. الوزن جذب الجاذبية لتلك الكتلة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Mass stays the same everywhere.', 'La masse reste la même partout.', 'الكتلة تبقى كما هي في كل مكان.'),
          L('Weight changes on the Moon because gravity is weaker.', 'Le poids change sur la Lune car la gravité est plus faible.', 'الوزن يتغير على القمر لأن الجاذبية أضعف.'),
          L('We measure mass in kilograms (kg).', 'On mesure la masse en kilogrammes (kg).', 'نقيس الكتلة بالكيلوغرام (kg).'),
        ],
      },
      { type: 'compare', left: 5, right: 5 },
      {
        type: 'example',
        question: L(
          'Does your mass change on the Moon?',
          'Ta masse change-t-elle sur la Lune ?',
          'هل تتغير كتلتك على القمر؟',
        ),
        answer: L(
          'No, only weight changes.',
          'Non, seul le poids change.',
          'لا، يتغير الوزن فقط.',
        ),
      },
    ],
  },
  [lessonKey('physics', 'primary', 'matter', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Heating or cooling can change the state of matter. Ice melts to water; water boils to steam.',
          'Chauffer ou refroidir peut changer l\'état de la matière. La glace fond en eau ; l\'eau bout en vapeur.',
          'التسخين أو التبريد قد يغيّر حالة المادة. الجليد يذوب ماءً؛ الماء يغلي بخاراً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Melting: solid → liquid.', 'Fusion : solide → liquide.', 'الانصهار: صلب → سائل.'),
          L('Freezing: liquid → solid.', 'Solidification : liquide → solide.', 'التجمّد: سائل → صلب.'),
          L('Evaporation: liquid → gas.', 'Évaporation : liquide → gaz.', 'التبخر: سائل → غاز.'),
        ],
      },
      { type: 'states', highlight: 'liquid' },
      {
        type: 'example',
        question: L(
          'What state is steam?',
          'Quel est l\'état de la vapeur ?',
          'ما حالة البخار؟',
        ),
        answer: L('Gas.', 'Gaz.', 'غاز.'),
      },
    ],
  },

  // Middle — Energy
  [lessonKey('physics', 'middle', 'energy', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Energy lets things happen. Common forms include kinetic, potential, thermal, and light energy.',
          'L\'énergie permet aux choses de se produire. Formes courantes : énergie cinétique, potentielle, thermique et lumineuse.',
          'الطاقة تجعل الأشياء تحدث. أشكالها الشائعة: الحركية والوضعية والحرارية والضوئية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Kinetic energy is energy of motion.', 'L\'énergie cinétique est l\'énergie du mouvement.', 'الطاقة الحركية طاقة الحركة.'),
          L('Potential energy is stored energy.', 'L\'énergie potentielle est l\'énergie stockée.', 'الطاقة الوضعية طاقة مخزّنة.'),
          L('Energy can change from one form to another.', 'L\'énergie peut passer d\'une forme à une autre.', 'الطاقة قد تتحول من شكل إلى آخر.'),
        ],
      },
      { type: 'force', direction: 'right' },
      {
        type: 'example',
        question: L(
          'A ball at the top of a hill has what kind of energy?',
          'Une balle au sommet d\'une colline a quel type d\'énergie ?',
          'كرة على قمة تل لها أي نوع من الطاقة؟',
        ),
        answer: L('Potential energy.', 'Énergie potentielle.', 'طاقة وضعية.'),
      },
    ],
  },
  [lessonKey('physics', 'middle', 'energy', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Energy cannot be created or destroyed, only transformed. This is the law of conservation of energy.',
          'L\'énergie ne se crée ni ne se détruit, elle se transforme seulement. C\'est la loi de conservation de l\'énergie.',
          'الطاقة لا تُخلق ولا تُفنى، بل تتحول فقط. هذا قانون حفظ الطاقة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Total energy stays the same in a closed system.', 'L\'énergie totale reste la même dans un système fermé.', 'الطاقة الكلية تبقى كما هي في نظام مغلق.'),
          L('Some energy always becomes heat.', 'Une partie de l\'énergie devient toujours de la chaleur.', 'جزء من الطاقة يصبح دائماً حرارة.'),
          L('Efficiency measures useful energy output.', 'Le rendement mesure l\'énergie utile produite.', 'الكفاءة تقيس الطاقة المفيدة المُخرَجة.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'When a lamp is on, electrical energy becomes light and what else?',
          'Quand une lampe est allumée, l\'énergie électrique devient lumière et quoi d\'autre ?',
          'عندما يشتعل مصباح، الطاقة الكهربائية تصبح ضوءاً وماذا أيضاً؟',
        ),
        answer: L('Heat (thermal energy).', 'Chaleur (énergie thermique).', 'حرارة (طاقة حرارية).'),
      },
      { type: 'compare', left: 100, right: 100 },
    ],
  },
  [lessonKey('physics', 'middle', 'energy', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Waves carry energy without moving matter far. Key properties are wavelength, frequency, and amplitude.',
          'Les ondes transportent l\'énergie sans déplacer la matière loin. Propriétés clés : longueur d\'onde, fréquence et amplitude.',
          'الموجات تنقل الطاقة دون نقل المادة بعيداً. خصائصها: الطول الموجي والتردد والسعة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Higher frequency means more waves per second.', 'Une fréquence plus élevée signifie plus d\'ondes par seconde.', 'تردد أعلى يعني موجات أكثر في الثانية.'),
          L('Amplitude relates to wave height or loudness.', 'L\'amplitude se rapporte à la hauteur ou au volume.', 'السعة ترتبط بارتفاع الموجة أو علو الصوت.'),
          L('Light and sound are both waves.', 'La lumière et le son sont tous deux des ondes.', 'الضوء والصوت كلاهما موجات.'),
        ],
      },
      { type: 'force', direction: 'left' },
      {
        type: 'example',
        question: L(
          'Do waves move water molecules across the ocean?',
          'Les ondes déplacent-elles les molécules d\'eau à travers l\'océan ?',
          'هل تنقل الموجات جزيئات الماء عبر المحيط؟',
        ),
        answer: L(
          'No, they mostly move up and down locally.',
          'Non, elles bougent surtout localement de haut en bas.',
          'لا، تتحرك محلياً للأعلى والأسفل غالباً.',
        ),
      },
    ],
  },

  // Middle — Electricity
  [lessonKey('physics', 'middle', 'electricity', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Electric charge comes in positive and negative types. Like charges repel; opposite charges attract.',
          'La charge électrique existe en types positif et négatif. Charges identiques se repoussent ; opposées s\'attirent.',
          'الشحنة الكهربائية موجبة أو سالبة. المتشابهة تتنافر؛ المختلفة تتجاذب.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Electrons carry negative charge.', 'Les électrons portent une charge négative.', 'الإلكترونات تحمل شحنة سالبة.'),
          L('Current is the flow of charge.', 'Le courant est le flux de charge.', 'التيار تدفق الشحنة.'),
          L('Current is measured in amperes (A).', 'Le courant se mesure en ampères (A).', 'التيار يُقاس بالأمبير (A).'),
        ],
      },
      { type: 'circuit', closed: true },
      {
        type: 'example',
        question: L(
          'What flows in a wire to create current?',
          'Qu\'est-ce qui circule dans un fil pour créer un courant ?',
          'ماذا يتدفق في السلك ليُنشئ تياراً؟',
        ),
        answer: L('Electric charge (electrons).', 'Charge électrique (électrons).', 'الشحنة الكهربائية (إلكترونات).'),
      },
    ],
  },
  [lessonKey('physics', 'middle', 'electricity', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'An electric circuit is a closed path for current. A break in the path stops the flow.',
          'Un circuit électrique est un chemin fermé pour le courant. Une coupure arrête le flux.',
          'الدارة الكهربائية مسار مغلق للتيار. انقطاع المسار يوقف التدفق.',
        ),
      },
      {
        type: 'list',
        items: [
          L('A battery provides energy to push charge.', 'Une pile fournit l\'énergie pour pousser la charge.', 'البطارية تزوّد الطاقة لدفع الشحنة.'),
          L('Wires connect components.', 'Les fils relient les composants.', 'الأسلاك تربط المكوّنات.'),
          L('A switch opens or closes the circuit.', 'Un interrupteur ouvre ou ferme le circuit.', 'المفتاح يفتح أو يغلق الدارة.'),
        ],
      },
      { type: 'circuit', closed: false },
      {
        type: 'example',
        question: L(
          'Will a bulb light if the circuit is open?',
          'Une ampoule s\'allume-t-elle si le circuit est ouvert ?',
          'هل يشتعل المصباح إذا كانت الدارة مفتوحة؟',
        ),
        answer: L('No, current cannot flow.', 'Non, le courant ne peut pas circuler.', 'لا، التيار لا يمكن أن يمر.'),
      },
    ],
  },
  [lessonKey('physics', 'middle', 'electricity', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Magnetism and electricity are linked. Moving charge creates magnetic fields; changing fields can induce current.',
          'Magnétisme et électricité sont liés. Une charge en mouvement crée un champ magnétique ; un champ changeant peut induire un courant.',
          'المغناطيسية والكهرباء مرتبطان. الشحنة المتحركة تخلق مجالاً مغناطيسياً؛ المجال المتغير يُولّد تياراً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Magnets have north and south poles.', 'Les aimants ont un pôle nord et un pôle sud.', 'المغناطيس له قطب شمالي وجنوبي.'),
          L('Like poles repel; unlike poles attract.', 'Pôles identiques se repoussent ; opposés s\'attirent.', 'الأقطاب المتشابهة تتنافر؛ المختلفة تتجاذب.'),
          L('Electromagnets use current in a coil.', 'Les électroaimants utilisent un courant dans une bobine.', 'الكهرمغناطيس يستخدم تياراً في ملف.'),
        ],
      },
      { type: 'circuit', closed: true },
      {
        type: 'example',
        question: L(
          'What happens when you bring two north poles together?',
          'Que se passe-t-il quand on rapproche deux pôles nord ?',
          'ماذا يحدث عند تقريب قطبين شماليين؟',
        ),
        answer: L('They repel each other.', 'Ils se repoussent.', 'يتنافران.'),
      },
    ],
  },

  // Middle — Forces
  [lessonKey('physics', 'middle', 'forces', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Newton\'s first law: an object stays at rest or in uniform motion unless a net force acts on it.',
          'Première loi de Newton : un objet reste au repos ou en mouvement uniforme sauf si une force nette agit sur lui.',
          'قانون نيوتن الأول: الجسم يبقى ساكناً أو في حركة منتظمة ما لم تؤثر عليه قوة محصلة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Second law: F = ma (force equals mass times acceleration).', 'Deuxième loi : F = ma (force = masse × accélération).', 'القانون الثاني: F = ma (القوة = الكتلة × التسارع).'),
          L('Third law: every action has an equal opposite reaction.', 'Troisième loi : toute action a une réaction opposée égale.', 'القانون الثالث: لكل فعل رد فعل مساوٍ ومعاكس.'),
          L('Forces are measured in newtons (N).', 'Les forces se mesurent en newtons (N).', 'القوى تُقاس بالنيوتن (N).'),
        ],
      },
      { type: 'force', direction: 'right' },
      {
        type: 'example',
        question: L(
          'You push a wall and it pushes back. Which law is this?',
          'Tu pousses un mur et il te repousse. Quelle loi est-ce ?',
          'تدفع جداراً فيدفعك. أي قانون هذا؟',
        ),
        answer: L('Newton\'s third law.', 'Troisième loi de Newton.', 'قانون نيوتن الثالث.'),
      },
    ],
  },
  [lessonKey('physics', 'middle', 'forces', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Friction opposes motion when surfaces slide against each other. It depends on the surfaces and the pressing force.',
          'Le frottement s\'oppose au mouvement quand des surfaces glissent l\'une sur l\'autre. Il dépend des surfaces et de la force de pression.',
          'الاحتكاك يعارض الحركة عندما تنزلق الأسطح. يعتمد على الأسطح وقوة الضغط.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Rough surfaces create more friction.', 'Les surfaces rugueuses créent plus de frottement.', 'الأسطح الخشنة تسبب احتكاكاً أكبر.'),
          L('Friction produces heat.', 'Le frottement produit de la chaleur.', 'الاحتكاك ينتج حرارة.'),
          L('Lubricants reduce friction.', 'Les lubrifiants réduisent le frottement.', 'مواد التزييت تقلل الاحتكاك.'),
        ],
      },
      { type: 'force', direction: 'left' },
      {
        type: 'example',
        question: L(
          'Why is it harder to slide a heavy box?',
          'Pourquoi est-il plus difficile de faire glisser une caisse lourde ?',
          'لماذا يصعب انزلاق صندوق ثقيل؟',
        ),
        answer: L(
          'Greater normal force means greater friction.',
          'Une force normale plus grande signifie plus de frottement.',
          'قوة عمودية أكبر تعني احتكاكاً أكبر.',
        ),
      },
    ],
  },
  [lessonKey('physics', 'middle', 'forces', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Gravity is the force that pulls objects toward each other. On Earth, it pulls everything toward the center.',
          'La gravité est la force qui attire les objets les uns vers les autres. Sur Terre, elle attire tout vers le centre.',
          'الجاذبية القوة التي تجذب الأجسام بعضها إلى بعض. على الأرض، تجذب كل شيء نحو المركز.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Weight = mass × gravitational acceleration.', 'Poids = masse × accélération gravitationnelle.', 'الوزن = الكتلة × التسارع الجاذبي.'),
          L('Gravity weakens with distance.', 'La gravité diminue avec la distance.', 'الجاذبية تضعف مع المسافة.'),
          L('All objects fall at the same rate in a vacuum.', 'Tous les objets tombent à la même vitesse dans le vide.', 'كل الأجسام تسقط بنفس المعدل في الفراغ.'),
        ],
      },
      { type: 'force', direction: 'right' },
      {
        type: 'example',
        question: L(
          'What force keeps planets in orbit around the Sun?',
          'Quelle force maintient les planètes en orbite autour du Soleil ?',
          'أي قوة تبقي الكواكب في مدار حول الشمس؟',
        ),
        answer: L('Gravity.', 'La gravité.', 'الجاذبية.'),
      },
    ],
  },
}
