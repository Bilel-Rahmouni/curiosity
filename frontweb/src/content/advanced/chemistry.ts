import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

// Chemistry track: high school → undergraduate → graduate → PhD research skills.
export const chemistryAdvancedLessons: Record<string, LessonContent> = {
  // High — Stoichiometry
  [lessonKey('chemistry', 'high', 'stoichiometry', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The mole is the chemist\'s counting unit: one mole contains 6.022 × 10²³ particles (Avogadro\'s number). The molar mass in g/mol lets you convert between mass and amount of substance.',
          'La mole est l\'unité de comptage du chimiste : une mole contient 6,022 × 10²³ particules (nombre d\'Avogadro). La masse molaire en g/mol permet de convertir entre masse et quantité de matière.',
          'المول هو وحدة العدّ لدى الكيميائي: يحتوي المول الواحد على 6.022 × 10²³ جسيماً (عدد أفوغادرو). الكتلة المولية بوحدة g/mol تتيح التحويل بين الكتلة وكمية المادة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('n = m / M: moles = mass ÷ molar mass.', 'n = m / M : moles = masse ÷ masse molaire.', 'n = m / M: عدد المولات = الكتلة ÷ الكتلة المولية.'),
          L('Molar mass of H₂O = 2(1.008) + 16.00 ≈ 18.02 g/mol.', 'Masse molaire de H₂O = 2(1,008) + 16,00 ≈ 18,02 g/mol.', 'الكتلة المولية لـ H₂O = 2(1.008) + 16.00 ≈ 18.02 g/mol.'),
          L('At STP, one mole of any ideal gas occupies 22.4 L.', 'Aux CNTP, une mole de gaz parfait occupe 22,4 L.', 'في الظروف القياسية، يشغل مول واحد من أي غاز مثالي 22.4 لتراً.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How many moles are in 36.04 g of H₂O?',
          'Combien de moles y a-t-il dans 36,04 g de H₂O ?',
          'كم عدد المولات في 36.04 غراماً من H₂O؟',
        ),
        answer: L(
          'n = 36.04 g ÷ 18.02 g/mol = 2.00 mol.',
          'n = 36,04 g ÷ 18,02 g/mol = 2,00 mol.',
          'n = 36.04 g ÷ 18.02 g/mol = 2.00 mol.',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Calculate the molar mass of CO₂ in g/mol (C = 12.01, O = 16.00).',
          'Calcule la masse molaire de CO₂ en g/mol (C = 12,01 ; O = 16,00).',
          'احسب الكتلة المولية لـ CO₂ بوحدة g/mol (C = 12.01، O = 16.00).',
        ),
        answer: 44.01,
        tolerance: 0.1,
        unit: 'g/mol',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'How many molecules are in exactly 1 mole of CH₄?',
          'Combien de molécules y a-t-il dans exactement 1 mole de CH₄ ?',
          'كم عدد الجزيئات في مول واحد بالضبط من CH₄؟',
        ),
        choices: [
          { text: L('6.022 × 10²³', '6,022 × 10²³', '6.022 × 10²³'), explanation: L('One mole always contains Avogadro\'s number of particles.', 'Une mole contient toujours le nombre d\'Avogadro de particules.', 'يحتوي المول الواحد دائماً على عدد أفوغادرو من الجسيمات.') },
          { text: L('16.04', '16,04', '16.04') },
          { text: L('22.4', '22,4', '22.4') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('chemistry', 'high', 'stoichiometry', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'In a reaction, the limiting reagent is the reactant that runs out first and therefore controls how much product can form. Any other reactant left over is in excess.',
          'Dans une réaction, le réactif limitant est celui qui s\'épuise en premier et détermine donc la quantité maximale de produit. Tout autre réactif restant est en excès.',
          'في التفاعل، الكاشف المحدِّد هو المتفاعل الذي ينفد أولاً وبالتالي يتحكم في كمية الناتج الممكنة. أي متفاعل متبقٍ يكون فائضاً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Convert each reactant\'s mass to moles.', 'Convertis la masse de chaque réactif en moles.', 'حوِّل كتلة كل متفاعل إلى مولات.'),
          L('Divide each amount by its stoichiometric coefficient.', 'Divise chaque quantité par son coefficient stœchiométrique.', 'اقسم كل كمية على معاملها الستوكيومتري.'),
          L('The smallest ratio identifies the limiting reagent.', 'Le plus petit rapport identifie le réactif limitant.', 'أصغر نسبة تحدد الكاشف المحدِّد.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'For 2H₂ + O₂ → 2H₂O, which reagent limits if you mix 4 mol H₂ with 1 mol O₂?',
          'Pour 2H₂ + O₂ → 2H₂O, quel réactif limite si l\'on mélange 4 mol de H₂ avec 1 mol de O₂ ?',
          'في التفاعل 2H₂ + O₂ → 2H₂O، أي كاشف هو المحدِّد عند خلط 4 mol من H₂ مع 1 mol من O₂؟',
        ),
        answer: L(
          'H₂: 4/2 = 2; O₂: 1/1 = 1. O₂ has the smaller ratio, so O₂ is limiting and only 2 mol H₂O can form.',
          'H₂ : 4/2 = 2 ; O₂ : 1/1 = 1. O₂ a le plus petit rapport, donc O₂ est limitant et seulement 2 mol de H₂O peuvent se former.',
          'H₂: 4/2 = 2؛ O₂: 1/1 = 1. النسبة الأصغر لـ O₂، إذن O₂ هو المحدِّد ولا يتكوّن سوى 2 mol من H₂O.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'For N₂ + 3H₂ → 2NH₃, you mix 1 mol N₂ with 2 mol H₂. Which reagent is limiting?',
          'Pour N₂ + 3H₂ → 2NH₃, on mélange 1 mol de N₂ avec 2 mol de H₂. Quel réactif est limitant ?',
          'في التفاعل N₂ + 3H₂ → 2NH₃، نخلط 1 mol من N₂ مع 2 mol من H₂. أي كاشف هو المحدِّد؟',
        ),
        choices: [
          { text: L('N₂', 'N₂', 'N₂') },
          { text: L('H₂', 'H₂', 'H₂'), explanation: L('H₂: 2/3 ≈ 0.67 is smaller than N₂: 1/1 = 1, so H₂ runs out first.', 'H₂ : 2/3 ≈ 0,67 est plus petit que N₂ : 1/1 = 1, donc H₂ s\'épuise en premier.', 'H₂: 2/3 ≈ 0.67 أصغر من N₂: 1/1 = 1، لذا ينفد H₂ أولاً.') },
          { text: L('Neither, they finish together.', 'Aucun, ils finissent ensemble.', 'لا أحد منهما، ينفدان معاً.') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'In that same mixture (1 mol N₂, 2 mol H₂), how many moles of NH₃ form at most?',
          'Dans ce même mélange (1 mol N₂, 2 mol H₂), combien de moles de NH₃ se forment au maximum ?',
          'في الخليط نفسه (1 mol N₂ و2 mol H₂)، كم مولاً من NH₃ يتكوّن كحد أقصى؟',
        ),
        answer: 1.33,
        tolerance: 0.05,
        unit: 'mol',
        hint: L('2 mol H₂ × (2 NH₃ / 3 H₂).', '2 mol H₂ × (2 NH₃ / 3 H₂).', '2 mol H₂ × (2 NH₃ / 3 H₂).'),
      },
    ],
  },
  [lessonKey('chemistry', 'high', 'stoichiometry', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The theoretical yield is the maximum product predicted by stoichiometry; the actual yield is what you really isolate. Percent yield = (actual ÷ theoretical) × 100. Purity tells you what fraction of a sample is the desired substance.',
          'Le rendement théorique est le maximum de produit prévu par la stœchiométrie ; le rendement réel est ce que l\'on isole vraiment. Rendement (%) = (réel ÷ théorique) × 100. La pureté indique quelle fraction d\'un échantillon est la substance désirée.',
          'المردود النظري هو أقصى ناتج تتنبأ به الستوكيومترية؛ والمردود الفعلي هو ما نعزله فعلاً. المردود المئوي = (الفعلي ÷ النظري) × 100. أما النقاوة فتحدد نسبة المادة المطلوبة في العينة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Losses come from side reactions, incomplete reactions, and transfers.', 'Les pertes viennent des réactions secondaires, des réactions incomplètes et des transferts.', 'تنشأ الخسائر من التفاعلات الجانبية والتفاعلات غير المكتملة وعمليات النقل.'),
          L('Percent yield can never honestly exceed 100%.', 'Le rendement ne peut jamais honnêtement dépasser 100 %.', 'لا يمكن للمردود المئوي أن يتجاوز 100% بصدق.'),
          L('Purity (%) = (mass of pure substance ÷ total sample mass) × 100.', 'Pureté (%) = (masse de substance pure ÷ masse totale de l\'échantillon) × 100.', 'النقاوة (%) = (كتلة المادة النقية ÷ الكتلة الكلية للعينة) × 100.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A synthesis has a theoretical yield of 25.0 g but you isolate 20.0 g. What is the percent yield?',
          'Une synthèse a un rendement théorique de 25,0 g mais tu isoles 20,0 g. Quel est le rendement en pourcentage ?',
          'لتخليق ما مردود نظري قدره 25.0 g لكنك عزلت 20.0 g. ما المردود المئوي؟',
        ),
        answer: 80,
        tolerance: 0.5,
        unit: '%',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A 10.0 g sample contains 9.2 g of pure aspirin. Its purity is:',
          'Un échantillon de 10,0 g contient 9,2 g d\'aspirine pure. Sa pureté est :',
          'عينة كتلتها 10.0 g تحتوي على 9.2 g من الأسبرين النقي. نقاوتها هي:',
        ),
        choices: [
          { text: L('92%', '92 %', '92%'), explanation: L('9.2 ÷ 10.0 × 100 = 92%.', '9,2 ÷ 10,0 × 100 = 92 %.', '9.2 ÷ 10.0 × 100 = 92%.') },
          { text: L('9.2%', '9,2 %', '9.2%') },
          { text: L('108%', '108 %', '108%') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // High — Organic chemistry intro
  [lessonKey('chemistry', 'high', 'organic-intro', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Hydrocarbons are compounds made only of carbon and hydrogen. Alkanes have only single bonds (CₙH₂ₙ₊₂), alkenes contain a C=C double bond (CₙH₂ₙ), and alkynes contain a C≡C triple bond (CₙH₂ₙ₋₂).',
          'Les hydrocarbures sont des composés faits uniquement de carbone et d\'hydrogène. Les alcanes n\'ont que des liaisons simples (CₙH₂ₙ₊₂), les alcènes contiennent une double liaison C=C (CₙH₂ₙ) et les alcynes une triple liaison C≡C (CₙH₂ₙ₋₂).',
          'الهيدروكربونات مركّبات تتكوّن فقط من الكربون والهيدروجين. الألكانات تحتوي روابط أحادية فقط (CₙH₂ₙ₊₂)، والألكينات تحتوي رابطة مزدوجة C=C بصيغة (CₙH₂ₙ)، والألكاينات تحتوي رابطة ثلاثية C≡C بصيغة (CₙH₂ₙ₋₂).',
        ),
      },
      {
        type: 'list',
        items: [
          L('Methane CH₄, ethane C₂H₆, propane C₃H₈ are the first alkanes.', 'Méthane CH₄, éthane C₂H₆, propane C₃H₈ sont les premiers alcanes.', 'الميثان CH₄ والإيثان C₂H₆ والبروبان C₃H₈ هي أولى الألكانات.'),
          L('Ethene C₂H₄ is the simplest alkene; ethyne C₂H₂ the simplest alkyne.', 'L\'éthène C₂H₄ est l\'alcène le plus simple ; l\'éthyne C₂H₂ l\'alcyne le plus simple.', 'الإيثين C₂H₄ أبسط ألكين، والإيثاين C₂H₂ أبسط ألكاين.'),
          L('Unsaturated hydrocarbons (alkenes, alkynes) decolorize bromine water.', 'Les hydrocarbures insaturés (alcènes, alcynes) décolorent l\'eau de brome.', 'الهيدروكربونات غير المشبعة (الألكينات والألكاينات) تزيل لون ماء البروم.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which formula matches an alkane?',
          'Quelle formule correspond à un alcane ?',
          'أي صيغة تطابق ألكاناً؟',
        ),
        choices: [
          { text: L('C₄H₁₀', 'C₄H₁₀', 'C₄H₁₀'), explanation: L('For n = 4, CₙH₂ₙ₊₂ gives C₄H₁₀ (butane).', 'Pour n = 4, CₙH₂ₙ₊₂ donne C₄H₁₀ (butane).', 'عند n = 4 تعطي CₙH₂ₙ₊₂ الصيغة C₄H₁₀ (البيوتان).') },
          { text: L('C₄H₈', 'C₄H₈', 'C₄H₈') },
          { text: L('C₄H₆', 'C₄H₆', 'C₄H₆') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'How many hydrogen atoms does the alkene with 5 carbons (pentene, CₙH₂ₙ) contain?',
          'Combien d\'atomes d\'hydrogène contient l\'alcène à 5 carbones (pentène, CₙH₂ₙ) ?',
          'كم عدد ذرات الهيدروجين في الألكين ذي 5 ذرات كربون (البنتين، CₙH₂ₙ)؟',
        ),
        answer: 10,
      },
    ],
  },
  [lessonKey('chemistry', 'high', 'organic-intro', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A functional group is a specific arrangement of atoms that gives a molecule its characteristic reactivity. Recognizing the group lets you predict how the whole molecule behaves.',
          'Un groupe fonctionnel est un arrangement précis d\'atomes qui donne à une molécule sa réactivité caractéristique. Reconnaître le groupe permet de prédire le comportement de toute la molécule.',
          'المجموعة الوظيفية هي ترتيب محدد من الذرات يمنح الجزيء تفاعليته المميزة. التعرف على المجموعة يتيح التنبؤ بسلوك الجزيء كله.',
        ),
      },
      {
        type: 'list',
        items: [
          L('–OH: alcohol (ethanol C₂H₅OH).', '–OH : alcool (éthanol C₂H₅OH).', '–OH: كحول (الإيثانول C₂H₅OH).'),
          L('–COOH: carboxylic acid (ethanoic acid CH₃COOH).', '–COOH : acide carboxylique (acide éthanoïque CH₃COOH).', '–COOH: حمض كربوكسيلي (حمض الإيثانويك CH₃COOH).'),
          L('C=O: aldehyde at a chain end, ketone in the middle.', 'C=O : aldéhyde en bout de chaîne, cétone au milieu.', 'C=O: ألدهيد في نهاية السلسلة، وكيتون في وسطها.'),
          L('–NH₂: amine.', '–NH₂ : amine.', '–NH₂: أمين.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Which functional group does CH₃CH₂OH contain, and what family is it in?',
          'Quel groupe fonctionnel contient CH₃CH₂OH, et à quelle famille appartient-il ?',
          'ما المجموعة الوظيفية في CH₃CH₂OH، وإلى أي عائلة ينتمي؟',
        ),
        answer: L(
          'It contains the hydroxyl group –OH, so it is an alcohol: ethanol.',
          'Il contient le groupe hydroxyle –OH, c\'est donc un alcool : l\'éthanol.',
          'يحتوي على مجموعة الهيدروكسيل –OH، إذن هو كحول: الإيثانول.',
        ),
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which family does CH₃COOH belong to?',
          'À quelle famille appartient CH₃COOH ?',
          'إلى أي عائلة ينتمي CH₃COOH؟',
        ),
        choices: [
          { text: L('Alcohols', 'Alcools', 'الكحولات') },
          { text: L('Carboxylic acids', 'Acides carboxyliques', 'الأحماض الكربوكسيلية'), explanation: L('The –COOH group defines carboxylic acids.', 'Le groupe –COOH définit les acides carboxyliques.', 'مجموعة –COOH تعرّف الأحماض الكربوكسيلية.') },
          { text: L('Amines', 'Amines', 'الأمينات') },
          { text: L('Ketones', 'Cétones', 'الكيتونات') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'high', 'organic-intro', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A reaction mechanism describes step by step how bonds break and form. Curved arrows show electron movement. A classic first example is the radical substitution of methane with chlorine under UV light: CH₄ + Cl₂ → CH₃Cl + HCl.',
          'Un mécanisme réactionnel décrit étape par étape comment les liaisons se rompent et se forment. Les flèches courbes montrent le mouvement des électrons. Un premier exemple classique est la substitution radicalaire du méthane par le chlore sous UV : CH₄ + Cl₂ → CH₃Cl + HCl.',
          'تصف آلية التفاعل خطوة بخطوة كيف تنكسر الروابط وتتكوّن. تُظهر الأسهم المنحنية حركة الإلكترونات. مثال أول كلاسيكي هو الاستبدال الجذري للميثان بالكلور تحت الأشعة فوق البنفسجية: CH₄ + Cl₂ → CH₃Cl + HCl.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Homolytic cleavage gives two radicals; heterolytic cleavage gives ions.', 'La rupture homolytique donne deux radicaux ; la rupture hétérolytique donne des ions.', 'الانشطار المتجانس يعطي جذرين؛ والانشطار غير المتجانس يعطي أيونات.'),
          L('Radicals have an unpaired electron and are highly reactive.', 'Les radicaux ont un électron célibataire et sont très réactifs.', 'الجذور تملك إلكتروناً منفرداً وهي شديدة التفاعلية.'),
          L('Radical chain reactions have initiation, propagation, and termination stages.', 'Les réactions radicalaires en chaîne comportent des étapes d\'amorçage, de propagation et de terminaison.', 'التفاعلات الجذرية المتسلسلة تمر بمراحل البدء والانتشار والإنهاء.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the stages of the radical chlorination of methane.',
          'Ordonne les étapes de la chloration radicalaire du méthane.',
          'رتّب مراحل الكلورة الجذرية للميثان.',
        ),
        steps: [
          L('Initiation: UV light splits Cl₂ into two Cl• radicals.', 'Amorçage : la lumière UV coupe Cl₂ en deux radicaux Cl•.', 'البدء: تشطر الأشعة فوق البنفسجية Cl₂ إلى جذرين Cl•.'),
          L('Propagation: Cl• abstracts H from CH₄ giving CH₃• and HCl.', 'Propagation : Cl• arrache un H à CH₄ donnant CH₃• et HCl.', 'الانتشار: ينتزع Cl• ذرة H من CH₄ فيتكوّن CH₃• و HCl.'),
          L('Propagation: CH₃• reacts with Cl₂ giving CH₃Cl and a new Cl•.', 'Propagation : CH₃• réagit avec Cl₂ donnant CH₃Cl et un nouveau Cl•.', 'الانتشار: يتفاعل CH₃• مع Cl₂ فيتكوّن CH₃Cl وجذر Cl• جديد.'),
          L('Termination: two radicals combine, e.g. CH₃• + Cl• → CH₃Cl.', 'Terminaison : deux radicaux se combinent, p. ex. CH₃• + Cl• → CH₃Cl.', 'الإنهاء: يتحد جذران، مثلاً CH₃• + Cl• → CH₃Cl.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What species is CH₃• in this mechanism?',
          'Quelle espèce est CH₃• dans ce mécanisme ?',
          'ما نوع CH₃• في هذه الآلية؟',
        ),
        choices: [
          { text: L('A cation', 'Un cation', 'كاتيون') },
          { text: L('A free radical', 'Un radical libre', 'جذر حر'), explanation: L('The dot indicates an unpaired electron: a radical.', 'Le point indique un électron célibataire : un radical.', 'النقطة تدل على إلكترون منفرد: أي جذر.') },
          { text: L('An anion', 'Un anion', 'أنيون') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // High — Physical chemistry
  [lessonKey('chemistry', 'high', 'physical-chem', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Thermochemistry studies the heat exchanged in reactions. Exothermic reactions release heat (ΔH < 0); endothermic reactions absorb heat (ΔH > 0). The heat gained or lost by a substance is q = m × c × ΔT.',
          'La thermochimie étudie la chaleur échangée dans les réactions. Les réactions exothermiques libèrent de la chaleur (ΔH < 0) ; les endothermiques en absorbent (ΔH > 0). La chaleur gagnée ou perdue par une substance est q = m × c × ΔT.',
          'تدرس الكيمياء الحرارية الحرارة المتبادلة في التفاعلات. التفاعلات الطاردة للحرارة تحرر حرارة (ΔH < 0)؛ والماصة للحرارة تمتصها (ΔH > 0). الحرارة المكتسبة أو المفقودة من مادة هي q = m × c × ΔT.',
        ),
      },
      {
        type: 'list',
        items: [
          L('c is the specific heat capacity; for water c = 4.18 J/(g·°C).', 'c est la capacité thermique massique ; pour l\'eau c = 4,18 J/(g·°C).', 'c هي السعة الحرارية النوعية؛ للماء c = 4.18 J/(g·°C).'),
          L('Combustion of fuels is exothermic: burning CH₄ releases about 890 kJ/mol.', 'La combustion des carburants est exothermique : brûler CH₄ libère environ 890 kJ/mol.', 'احتراق الوقود طارد للحرارة: حرق CH₄ يحرر نحو 890 kJ/mol.'),
          L('Bond breaking costs energy; bond forming releases energy.', 'Rompre des liaisons coûte de l\'énergie ; en former en libère.', 'كسر الروابط يستهلك طاقة؛ وتكوينها يحرر طاقة.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'How much heat (in J) is needed to warm 100 g of water by 10 °C? Use q = m × c × ΔT with c = 4.18 J/(g·°C).',
          'Quelle chaleur (en J) faut-il pour chauffer 100 g d\'eau de 10 °C ? Utilise q = m × c × ΔT avec c = 4,18 J/(g·°C).',
          'ما مقدار الحرارة (بالجول) اللازمة لتسخين 100 g من الماء بمقدار 10 °C؟ استخدم q = m × c × ΔT مع c = 4.18 J/(g·°C).',
        ),
        answer: 4180,
        tolerance: 20,
        unit: 'J',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A reaction has ΔH = −120 kJ/mol. It is:',
          'Une réaction a ΔH = −120 kJ/mol. Elle est :',
          'لتفاعل ما ΔH = −120 kJ/mol. فهو:',
        ),
        choices: [
          { text: L('Endothermic', 'Endothermique', 'ماص للحرارة') },
          { text: L('Exothermic', 'Exothermique', 'طارد للحرارة'), explanation: L('Negative ΔH means heat is released to the surroundings.', 'Un ΔH négatif signifie que la chaleur est libérée vers l\'extérieur.', 'إشارة ΔH السالبة تعني تحرر حرارة إلى المحيط.') },
          { text: L('At equilibrium', 'À l\'équilibre', 'في حالة اتزان') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'high', 'physical-chem', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Chemical kinetics studies how fast reactions go. According to collision theory, particles must collide with enough energy (the activation energy Eₐ) and the right orientation to react.',
          'La cinétique chimique étudie la vitesse des réactions. Selon la théorie des collisions, les particules doivent entrer en collision avec assez d\'énergie (l\'énergie d\'activation Eₐ) et la bonne orientation pour réagir.',
          'تدرس الحركية الكيميائية سرعة التفاعلات. وفق نظرية التصادم، يجب أن تتصادم الجسيمات بطاقة كافية (طاقة التنشيط Eₐ) وباتجاه مناسب لكي تتفاعل.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Higher concentration → more collisions → faster reaction.', 'Concentration plus élevée → plus de collisions → réaction plus rapide.', 'تركيز أعلى ← تصادمات أكثر ← تفاعل أسرع.'),
          L('Higher temperature → more energetic collisions → faster reaction.', 'Température plus élevée → collisions plus énergétiques → réaction plus rapide.', 'درجة حرارة أعلى ← تصادمات أكثر طاقة ← تفاعل أسرع.'),
          L('A catalyst lowers Eₐ and is not consumed.', 'Un catalyseur abaisse Eₐ et n\'est pas consommé.', 'الحفّاز يخفض Eₐ ولا يُستهلك.'),
          L('Smaller particle size increases surface area and rate.', 'Une taille de particule plus petite augmente la surface et la vitesse.', 'صغر حجم الجسيمات يزيد مساحة السطح والسرعة.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How does a catalyst speed up a reaction?',
          'Comment un catalyseur accélère-t-il une réaction ?',
          'كيف يسرّع الحفّاز التفاعل؟',
        ),
        choices: [
          { text: L('It raises the temperature.', 'Il augmente la température.', 'يرفع درجة الحرارة.') },
          { text: L('It provides a pathway with lower activation energy.', 'Il fournit un chemin avec une énergie d\'activation plus basse.', 'يوفر مساراً بطاقة تنشيط أقل.'), explanation: L('More collisions exceed the lowered Eₐ, so the rate increases.', 'Plus de collisions dépassent l\'Eₐ abaissée, donc la vitesse augmente.', 'يتجاوز عدد أكبر من التصادمات Eₐ المنخفضة، فتزداد السرعة.') },
          { text: L('It shifts the equilibrium toward the products.', 'Il déplace l\'équilibre vers les produits.', 'يزيح الاتزان نحو النواتج.') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'A rule of thumb says the rate roughly doubles for every 10 °C increase. By what factor does the rate grow when going from 20 °C to 40 °C?',
          'Une règle empirique dit que la vitesse double environ tous les 10 °C. Par quel facteur la vitesse augmente-t-elle en passant de 20 °C à 40 °C ?',
          'قاعدة تقريبية تقول إن السرعة تتضاعف تقريباً لكل ارتفاع 10 °C. بأي معامل تزداد السرعة عند الانتقال من 20 °C إلى 40 °C؟',
        ),
        answer: 4,
      },
    ],
  },
  [lessonKey('chemistry', 'high', 'physical-chem', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A reversible reaction reaches dynamic equilibrium when forward and reverse rates become equal: concentrations stay constant even though both reactions continue. We write it with the double arrow, e.g. N₂ + 3H₂ ⇌ 2NH₃.',
          'Une réaction réversible atteint l\'équilibre dynamique quand les vitesses directe et inverse deviennent égales : les concentrations restent constantes bien que les deux réactions continuent. On l\'écrit avec la double flèche, p. ex. N₂ + 3H₂ ⇌ 2NH₃.',
          'يبلغ التفاعل العكوس حالة الاتزان الديناميكي عندما تتساوى سرعتا التفاعل الأمامي والعكسي: تبقى التراكيز ثابتة رغم استمرار التفاعلين. نكتبه بسهم مزدوج، مثل N₂ + 3H₂ ⇌ 2NH₃.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Le Chatelier: for the exothermic reaction N₂ + 3H₂ ⇌ 2NH₃, what happens if pressure is increased?',
          'Le Chatelier : pour la réaction exothermique N₂ + 3H₂ ⇌ 2NH₃, que se passe-t-il si la pression augmente ?',
          'لو شاتلييه: في التفاعل الطارد للحرارة N₂ + 3H₂ ⇌ 2NH₃، ماذا يحدث عند زيادة الضغط؟',
        ),
        answer: L(
          'The equilibrium shifts toward the side with fewer gas moles (2 vs 4), so more NH₃ forms.',
          'L\'équilibre se déplace vers le côté avec moins de moles de gaz (2 contre 4), donc plus de NH₃ se forme.',
          'ينزاح الاتزان نحو الجهة ذات عدد المولات الغازية الأقل (2 مقابل 4)، فيتكوّن مزيد من NH₃.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Adding a reactant shifts equilibrium toward the products.', 'Ajouter un réactif déplace l\'équilibre vers les produits.', 'إضافة متفاعل تزيح الاتزان نحو النواتج.'),
          L('Raising temperature favors the endothermic direction.', 'Augmenter la température favorise le sens endothermique.', 'رفع درجة الحرارة يفضّل الاتجاه الماص للحرارة.'),
          L('A catalyst speeds both directions equally and does not shift equilibrium.', 'Un catalyseur accélère les deux sens également et ne déplace pas l\'équilibre.', 'الحفّاز يسرّع الاتجاهين بالتساوي ولا يزيح الاتزان.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'For the exothermic reaction N₂ + 3H₂ ⇌ 2NH₃, raising the temperature will:',
          'Pour la réaction exothermique N₂ + 3H₂ ⇌ 2NH₃, augmenter la température va :',
          'في التفاعل الطارد للحرارة N₂ + 3H₂ ⇌ 2NH₃، رفع درجة الحرارة سوف:',
        ),
        choices: [
          { text: L('Shift equilibrium toward NH₃.', 'Déplacer l\'équilibre vers NH₃.', 'يزيح الاتزان نحو NH₃.') },
          { text: L('Shift equilibrium toward N₂ and H₂.', 'Déplacer l\'équilibre vers N₂ et H₂.', 'يزيح الاتزان نحو N₂ و H₂.'), explanation: L('Heating favors the endothermic (reverse) direction.', 'Chauffer favorise le sens endothermique (inverse).', 'التسخين يفضّل الاتجاه الماص للحرارة (العكسي).') },
          { text: L('Have no effect.', 'N\'avoir aucun effet.', 'لن يكون له تأثير.') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Undergraduate — Organic chemistry
  [lessonKey('chemistry', 'undergraduate', 'organic', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Stereochemistry studies the 3D arrangement of atoms. A carbon bonded to four different groups is a stereocenter; swapping two groups gives the mirror-image enantiomer. Enantiomers share physical properties but rotate plane-polarized light in opposite directions and can behave very differently in biological systems.',
          'La stéréochimie étudie l\'arrangement 3D des atomes. Un carbone lié à quatre groupes différents est un stéréocentre ; échanger deux groupes donne l\'énantiomère, image miroir. Les énantiomères partagent leurs propriétés physiques mais font tourner la lumière polarisée en sens opposés et peuvent se comporter très différemment en milieu biologique.',
          'تدرس الكيمياء الفراغية الترتيب ثلاثي الأبعاد للذرات. الكربون المرتبط بأربع مجموعات مختلفة هو مركز فراغي؛ وتبديل مجموعتين يعطي المتماكب المرآتي (الإينانتيومر). يتشارك الإينانتيومران الخواص الفيزيائية لكنهما يديران الضوء المستقطب في اتجاهين متعاكسين وقد يسلكان سلوكاً مختلفاً جداً في الأنظمة الحيوية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('CIP priority rules assign R or S configuration to each stereocenter.', 'Les règles de priorité CIP attribuent la configuration R ou S à chaque stéréocentre.', 'قواعد أولوية CIP تعيّن التوصيف R أو S لكل مركز فراغي.'),
          L('Diastereomers are stereoisomers that are not mirror images; they differ in physical properties.', 'Les diastéréoisomères sont des stéréoisomères non images miroirs ; leurs propriétés physiques diffèrent.', 'الدياستيريومرات متماكبات فراغية ليست صوراً مرآتية؛ وتختلف في خواصها الفيزيائية.'),
          L('A molecule with n stereocenters has at most 2ⁿ stereoisomers.', 'Une molécule à n stéréocentres a au plus 2ⁿ stéréoisomères.', 'الجزيء الذي يحوي n من المراكز الفراغية له على الأكثر 2ⁿ متماكباً فراغياً.'),
          L('Meso compounds have stereocenters yet are achiral due to internal symmetry.', 'Les composés méso ont des stéréocentres mais sont achiraux grâce à une symétrie interne.', 'المركبات الميزو تملك مراكز فراغية لكنها غير كيرالية بسبب تناظر داخلي.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What is the maximum number of stereoisomers for a molecule with 2 stereocenters?',
          'Quel est le nombre maximal de stéréoisomères pour une molécule à 2 stéréocentres ?',
          'ما أقصى عدد للمتماكبات الفراغية لجزيء يحوي مركزين فراغيين؟',
        ),
        answer: 4,
        hint: L('Use 2ⁿ.', 'Utilise 2ⁿ.', 'استخدم 2ⁿ.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Two stereoisomers that are non-superimposable mirror images are called:',
          'Deux stéréoisomères images miroirs non superposables s\'appellent :',
          'ما اسم متماكبين فراغيين هما صورتان مرآتيتان غير قابلتين للتطابق؟',
        ),
        choices: [
          { text: L('Diastereomers', 'Diastéréoisomères', 'دياستيريومرات') },
          { text: L('Enantiomers', 'Énantiomères', 'إينانتيومرات'), explanation: L('Enantiomers are mirror images that cannot be superimposed.', 'Les énantiomères sont des images miroirs non superposables.', 'الإينانتيومرات صور مرآتية لا يمكن تطابقها.') },
          { text: L('Conformers', 'Conformères', 'كونفورميرات') },
          { text: L('Constitutional isomers', 'Isomères de constitution', 'متماكبات بنيوية') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'undergraduate', 'organic', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Alkyl halides react by nucleophilic substitution (SN1, SN2) or elimination (E1, E2). SN2 is a single concerted backside attack that inverts the stereocenter and prefers primary substrates; SN1 goes through a planar carbocation, prefers tertiary substrates, and gives racemization.',
          'Les halogénures d\'alkyle réagissent par substitution nucléophile (SN1, SN2) ou par élimination (E1, E2). La SN2 est une attaque dorsale concertée en une seule étape qui inverse le stéréocentre et préfère les substrats primaires ; la SN1 passe par un carbocation plan, préfère les substrats tertiaires et donne une racémisation.',
          'تتفاعل هاليدات الألكيل بالاستبدال النيوكليوفيلي (SN1، SN2) أو بالحذف (E1، E2). آلية SN2 هجوم خلفي متزامن في خطوة واحدة يعكس المركز الفراغي ويفضّل الركائز الأولية؛ بينما تمر SN1 عبر كاتيون كربوني مستوٍ وتفضّل الركائز الثالثية وتعطي مزيجاً راسيمياً.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Strong, unhindered nucleophile + primary R–X → SN2.', 'Nucléophile fort et peu encombré + R–X primaire → SN2.', 'نيوكليوفيل قوي غير معاق + R–X أولي ← SN2.'),
          L('Weak nucleophile, polar protic solvent, tertiary R–X → SN1/E1.', 'Nucléophile faible, solvant polaire protique, R–X tertiaire → SN1/E1.', 'نيوكليوفيل ضعيف ومذيب قطبي بروتوني و R–X ثالثي ← SN1/E1.'),
          L('Strong bulky base (e.g. tert-butoxide) + heat → E2, Zaitsev alkene favored.', 'Base forte encombrée (p. ex. tert-butoxyde) + chaleur → E2, alcène de Zaïtsev favorisé.', 'قاعدة قوية ضخمة (مثل ثالثي بيوتوكسيد) مع تسخين ← E2 مع تفضيل ألكين زايتسيف.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the steps of an SN1 solvolysis of a tertiary alkyl halide.',
          'Ordonne les étapes d\'une solvolyse SN1 d\'un halogénure d\'alkyle tertiaire.',
          'رتّب خطوات إذابة SN1 لهاليد ألكيل ثالثي.',
        ),
        steps: [
          L('The leaving group departs, forming a planar carbocation.', 'Le groupe partant s\'en va, formant un carbocation plan.', 'تغادر المجموعة المغادرة فيتكوّن كاتيون كربوني مستوٍ.'),
          L('The nucleophile attacks either face of the carbocation.', 'Le nucléophile attaque l\'une ou l\'autre face du carbocation.', 'يهاجم النيوكليوفيل أي وجه من وجهي الكاتيون الكربوني.'),
          L('Deprotonation gives the neutral substitution product.', 'La déprotonation donne le produit de substitution neutre.', 'يعطي نزع البروتون ناتج الاستبدال المتعادل.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'An SN2 reaction on an (R) stereocenter gives a product that is:',
          'Une réaction SN2 sur un stéréocentre (R) donne un produit qui est :',
          'تفاعل SN2 على مركز فراغي (R) يعطي ناتجاً يكون:',
        ),
        choices: [
          { text: L('Retained (R)', 'De configuration conservée (R)', 'محتفظاً بالتوصيف (R)') },
          { text: L('Inverted (S)', 'De configuration inversée (S)', 'معكوس التوصيف (S)'), explanation: L('Backside attack causes Walden inversion of configuration.', 'L\'attaque dorsale provoque l\'inversion de Walden.', 'الهجوم الخلفي يسبب انعكاس والدن للتوصيف.') },
          { text: L('A racemic mixture', 'Un mélange racémique', 'مزيجاً راسيمياً') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'undergraduate', 'organic', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Spectroscopy identifies organic structures without destroying the sample. IR spectroscopy reveals functional groups through bond vibrations, UV-Vis probes conjugated π systems, and the degree of unsaturation from the molecular formula narrows down possible structures.',
          'La spectroscopie identifie les structures organiques sans détruire l\'échantillon. La spectroscopie IR révèle les groupes fonctionnels via les vibrations de liaison, l\'UV-visible sonde les systèmes π conjugués, et le degré d\'insaturation issu de la formule brute restreint les structures possibles.',
          'يحدد التحليل الطيفي البنى العضوية دون إتلاف العينة. تكشف مطيافية الأشعة تحت الحمراء المجموعات الوظيفية عبر اهتزازات الروابط، وتفحص مطيافية UV-Vis أنظمة π المترافقة، ودرجة عدم التشبع المحسوبة من الصيغة الجزيئية تضيّق البنى المحتملة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('IR ~1700 cm⁻¹: sharp C=O stretch (carbonyl).', 'IR ~1700 cm⁻¹ : élongation nette C=O (carbonyle).', 'IR ~1700 cm⁻¹: امتطاط حاد لـ C=O (كربونيل).'),
          L('IR ~3200–3550 cm⁻¹ broad: O–H stretch (alcohol/acid).', 'IR ~3200–3550 cm⁻¹ large : élongation O–H (alcool/acide).', 'IR ~3200–3550 cm⁻¹ عريض: امتطاط O–H (كحول/حمض).'),
          L('Degrees of unsaturation = (2C + 2 + N − H − X) / 2.', 'Degrés d\'insaturation = (2C + 2 + N − H − X) / 2.', 'درجات عدم التشبع = (2C + 2 + N − H − X) / 2.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'How many degrees of unsaturation does benzene, C₆H₆, have?',
          'Combien de degrés d\'insaturation possède le benzène, C₆H₆ ?',
          'كم درجة عدم تشبع في البنزين C₆H₆؟',
        ),
        answer: 4,
        hint: L('(2×6 + 2 − 6) / 2.', '(2×6 + 2 − 6) / 2.', '(2×6 + 2 − 6) / 2.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A strong sharp IR absorption near 1715 cm⁻¹ most likely indicates:',
          'Une absorption IR forte et nette vers 1715 cm⁻¹ indique très probablement :',
          'امتصاص IR قوي وحاد قرب 1715 cm⁻¹ يدل غالباً على:',
        ),
        choices: [
          { text: L('An O–H bond', 'Une liaison O–H', 'رابطة O–H') },
          { text: L('A C=O bond', 'Une liaison C=O', 'رابطة C=O'), explanation: L('Carbonyl stretches appear around 1650–1750 cm⁻¹.', 'Les élongations carbonyle apparaissent vers 1650–1750 cm⁻¹.', 'تظهر امتطاطات الكربونيل حوالي 1650–1750 cm⁻¹.') },
          { text: L('A C–H bond', 'Une liaison C–H', 'رابطة C–H') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Undergraduate — Inorganic chemistry
  [lessonKey('chemistry', 'undergraduate', 'inorganic', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A coordination compound has a central metal ion surrounded by ligands, molecules or ions that donate electron pairs. The coordination number counts the metal–ligand bonds, and the geometry (octahedral, tetrahedral, square planar) follows from it.',
          'Un composé de coordination possède un ion métallique central entouré de ligands, molécules ou ions qui donnent des paires d\'électrons. Le nombre de coordination compte les liaisons métal–ligand, et la géométrie (octaédrique, tétraédrique, plan carré) en découle.',
          'يتألف مركّب التناسق من أيون فلزي مركزي تحيط به لِجندات، وهي جزيئات أو أيونات تمنح أزواجاً إلكترونية. العدد التناسقي يحصي روابط الفلز–اللِجند، ومنه تتحدد الهندسة (ثماني السطوح، رباعي السطوح، مربع مستوٍ).',
        ),
      },
      {
        type: 'list',
        items: [
          L('Monodentate ligands (NH₃, Cl⁻, H₂O) bind through one atom; chelates like en or EDTA bind through several.', 'Les ligands monodentates (NH₃, Cl⁻, H₂O) se lient par un atome ; les chélates comme en ou l\'EDTA par plusieurs.', 'اللِجندات أحادية السن (NH₃، Cl⁻، H₂O) ترتبط بذرة واحدة؛ أما المخلبيات مثل en و EDTA فترتبط بعدة ذرات.'),
          L('In [Co(NH₃)₆]Cl₃, the complex ion is [Co(NH₃)₆]³⁺ with three Cl⁻ counterions.', 'Dans [Co(NH₃)₆]Cl₃, l\'ion complexe est [Co(NH₃)₆]³⁺ avec trois contre-ions Cl⁻.', 'في [Co(NH₃)₆]Cl₃ يكون الأيون المعقد [Co(NH₃)₆]³⁺ مع ثلاثة أيونات مقابلة Cl⁻.'),
          L('Metal oxidation state = complex charge − sum of ligand charges.', 'État d\'oxydation du métal = charge du complexe − somme des charges des ligands.', 'حالة أكسدة الفلز = شحنة المعقد − مجموع شحنات اللِجندات.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'What is the oxidation state of Co in [Co(NH₃)₆]³⁺?',
          'Quel est l\'état d\'oxydation de Co dans [Co(NH₃)₆]³⁺ ?',
          'ما حالة أكسدة Co في [Co(NH₃)₆]³⁺؟',
        ),
        answer: L(
          'NH₃ is neutral, so Co must carry the full +3 charge: Co(III).',
          'NH₃ est neutre, donc Co porte toute la charge +3 : Co(III).',
          'NH₃ متعادل، إذن يحمل Co الشحنة +3 كاملة: Co(III).',
        ),
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What is the coordination number of the metal in [Co(NH₃)₆]³⁺?',
          'Quel est le nombre de coordination du métal dans [Co(NH₃)₆]³⁺ ?',
          'ما العدد التناسقي للفلز في [Co(NH₃)₆]³⁺؟',
        ),
        answer: 6,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What is the oxidation state of Fe in [Fe(CN)₆]⁴⁻?',
          'Quel est l\'état d\'oxydation de Fe dans [Fe(CN)₆]⁴⁻ ?',
          'ما حالة أكسدة Fe في [Fe(CN)₆]⁴⁻؟',
        ),
        choices: [
          { text: L('+2', '+2', '+2'), explanation: L('x + 6(−1) = −4, so x = +2.', 'x + 6(−1) = −4, donc x = +2.', 'x + 6(−1) = −4، إذن x = +2.') },
          { text: L('+3', '+3', '+3') },
          { text: L('−4', '−4', '−4') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('chemistry', 'undergraduate', 'inorganic', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Crystal field theory explains the colors and magnetism of transition-metal complexes. In an octahedral field, the five d orbitals split into a lower t₂g set and a higher e_g set, separated by the crystal field splitting energy Δₒ.',
          'La théorie du champ cristallin explique les couleurs et le magnétisme des complexes de métaux de transition. Dans un champ octaédrique, les cinq orbitales d se séparent en un ensemble t₂g plus bas et un ensemble e_g plus haut, séparés par l\'énergie de dédoublement Δₒ.',
          'تفسّر نظرية المجال البلوري ألوان معقدات الفلزات الانتقالية ومغناطيسيتها. في المجال الثماني السطوح تنشطر مدارات d الخمسة إلى مجموعة t₂g منخفضة ومجموعة e_g مرتفعة تفصل بينهما طاقة انشطار المجال البلوري Δₒ.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Strong-field ligands (CN⁻, CO) give large Δₒ → low-spin complexes.', 'Les ligands à champ fort (CN⁻, CO) donnent un grand Δₒ → complexes bas spin.', 'اللِجندات قوية المجال (CN⁻، CO) تعطي Δₒ كبيرة ← معقدات منخفضة البرم.'),
          L('Weak-field ligands (I⁻, Br⁻, F⁻) give small Δₒ → high-spin complexes.', 'Les ligands à champ faible (I⁻, Br⁻, F⁻) donnent un petit Δₒ → complexes haut spin.', 'اللِجندات ضعيفة المجال (I⁻، Br⁻، F⁻) تعطي Δₒ صغيرة ← معقدات عالية البرم.'),
          L('The color observed is complementary to the light absorbed for the t₂g → e_g transition.', 'La couleur observée est complémentaire de la lumière absorbée pour la transition t₂g → e_g.', 'اللون المرئي مكمّل للضوء الممتص في الانتقال t₂g → e_g.'),
          L('Unpaired electrons make a complex paramagnetic.', 'Les électrons non appariés rendent un complexe paramagnétique.', 'الإلكترونات غير المزدوجة تجعل المعقد بارامغناطيسياً.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'How many unpaired electrons does a high-spin octahedral d⁵ complex (e.g. [Fe(H₂O)₆]³⁺) have?',
          'Combien d\'électrons non appariés possède un complexe octaédrique d⁵ haut spin (p. ex. [Fe(H₂O)₆]³⁺) ?',
          'كم إلكتروناً غير مزدوج في معقد ثماني السطوح d⁵ عالي البرم (مثل [Fe(H₂O)₆]³⁺)؟',
        ),
        answer: 5,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which ligand is most likely to produce a low-spin octahedral complex?',
          'Quel ligand est le plus susceptible de produire un complexe octaédrique bas spin ?',
          'أي لِجند هو الأرجح لإنتاج معقد ثماني السطوح منخفض البرم؟',
        ),
        choices: [
          { text: L('I⁻', 'I⁻', 'I⁻') },
          { text: L('H₂O', 'H₂O', 'H₂O') },
          { text: L('CN⁻', 'CN⁻', 'CN⁻'), explanation: L('CN⁻ is a strong-field ligand: large Δₒ forces electron pairing.', 'CN⁻ est un ligand à champ fort : un grand Δₒ force l\'appariement des électrons.', 'CN⁻ لِجند قوي المجال: Δₒ الكبيرة تفرض ازدواج الإلكترونات.') },
        ],
        correctIndex: 2,
      },
    ],
  },
  [lessonKey('chemistry', 'undergraduate', 'inorganic', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Organometallic compounds contain direct metal–carbon bonds. The 18-electron rule predicts stability: count the metal\'s d electrons plus the electrons donated by ligands (CO gives 2, an η⁵-Cp ring gives 5 or 6 depending on the counting convention).',
          'Les composés organométalliques contiennent des liaisons directes métal–carbone. La règle des 18 électrons prédit la stabilité : compte les électrons d du métal plus ceux donnés par les ligands (CO en donne 2, un cycle η⁵-Cp en donne 5 ou 6 selon la convention de comptage).',
          'تحتوي المركّبات الفلزية العضوية روابط مباشرة فلز–كربون. تتنبأ قاعدة الـ18 إلكتروناً بالاستقرار: احسب إلكترونات d للفلز مضافاً إليها ما تمنحه اللِجندات (CO يمنح 2، وحلقة η⁵-Cp تمنح 5 أو 6 حسب اصطلاح العدّ).',
        ),
      },
      {
        type: 'list',
        items: [
          L('Fe(CO)₅: Fe(0) has 8 d electrons + 5 × 2 from CO = 18 electrons — stable.', 'Fe(CO)₅ : Fe(0) a 8 électrons d + 5 × 2 de CO = 18 électrons — stable.', 'Fe(CO)₅: يملك Fe(0) ثمانية إلكترونات d + 5 × 2 من CO = 18 إلكتروناً — مستقر.'),
          L('Ferrocene Fe(C₅H₅)₂ is a sandwich complex satisfying the 18-electron rule.', 'Le ferrocène Fe(C₅H₅)₂ est un complexe sandwich satisfaisant la règle des 18 électrons.', 'الفيروسين Fe(C₅H₅)₂ معقد ساندويتش يحقق قاعدة الـ18 إلكتروناً.'),
          L('Grignard reagents RMgX are key C–C bond-forming nucleophiles.', 'Les réactifs de Grignard RMgX sont des nucléophiles clés pour former des liaisons C–C.', 'كواشف غرينيارد RMgX نيوكليوفيلات أساسية لتكوين روابط C–C.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Using the 18-electron rule, what is the total valence electron count of Fe(CO)₅?',
          'Selon la règle des 18 électrons, quel est le compte total d\'électrons de valence de Fe(CO)₅ ?',
          'وفق قاعدة الـ18 إلكتروناً، ما العدد الكلي لإلكترونات التكافؤ في Fe(CO)₅؟',
        ),
        answer: 18,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which compound is an organometallic?',
          'Quel composé est un organométallique ?',
          'أي مركّب هو فلزي عضوي؟',
        ),
        choices: [
          { text: L('NaCl', 'NaCl', 'NaCl') },
          { text: L('CH₃MgBr', 'CH₃MgBr', 'CH₃MgBr'), explanation: L('It has a direct Mg–C bond, the defining feature.', 'Il possède une liaison directe Mg–C, la caractéristique définitoire.', 'يحتوي رابطة مباشرة Mg–C وهي السمة المعرِّفة.') },
          { text: L('Fe₂O₃', 'Fe₂O₃', 'Fe₂O₃') },
          { text: L('K₂SO₄', 'K₂SO₄', 'K₂SO₄') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Undergraduate — Physical chemistry
  [lessonKey('chemistry', 'undergraduate', 'physical', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Quantum chemistry describes electrons as wavefunctions ψ obtained from the Schrödinger equation Hψ = Eψ. Energy is quantized: the particle-in-a-box model gives Eₙ = n²h² / (8mL²), so levels grow as n².',
          'La chimie quantique décrit les électrons comme des fonctions d\'onde ψ issues de l\'équation de Schrödinger Hψ = Eψ. L\'énergie est quantifiée : le modèle de la particule dans une boîte donne Eₙ = n²h² / (8mL²), donc les niveaux croissent en n².',
          'تصف الكيمياء الكمومية الإلكترونات بدوال موجية ψ ناتجة من معادلة شرودنغر Hψ = Eψ. الطاقة مكمّاة: يعطي نموذج الجسيم في صندوق Eₙ = n²h² / (8mL²)، فتنمو المستويات بتناسب مع n².',
        ),
      },
      {
        type: 'list',
        items: [
          L('|ψ|² gives the probability density of finding the electron.', '|ψ|² donne la densité de probabilité de trouver l\'électron.', '|ψ|² تعطي كثافة احتمال وجود الإلكترون.'),
          L('The n-th particle-in-a-box state has n − 1 nodes.', 'Le n-ième état de la particule dans une boîte a n − 1 nœuds.', 'الحالة رقم n للجسيم في صندوق تملك n − 1 عقدة.'),
          L('Atomic orbitals s, p, d, f follow from quantum numbers n, l, mₗ.', 'Les orbitales atomiques s, p, d, f découlent des nombres quantiques n, l, mₗ.', 'المدارات الذرية s، p، d، f تنتج من الأعداد الكمومية n، l، mₗ.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'For a particle in a box, what is the ratio E₂ / E₁?',
          'Pour une particule dans une boîte, quel est le rapport E₂ / E₁ ?',
          'لجسيم في صندوق، ما النسبة E₂ / E₁؟',
        ),
        answer: 4,
        hint: L('Eₙ ∝ n².', 'Eₙ ∝ n².', 'Eₙ ∝ n².'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'What does |ψ|² represent physically?',
          'Que représente physiquement |ψ|² ?',
          'ماذا تمثل |ψ|² فيزيائياً؟',
        ),
        choices: [
          { text: L('The electron\'s exact trajectory', 'La trajectoire exacte de l\'électron', 'المسار الدقيق للإلكترون') },
          { text: L('The probability density of the electron\'s position', 'La densité de probabilité de la position de l\'électron', 'كثافة احتمال موضع الإلكترون'), explanation: L('This is the Born interpretation of the wavefunction.', 'C\'est l\'interprétation de Born de la fonction d\'onde.', 'هذا هو تفسير بورن للدالة الموجية.') },
          { text: L('The electron\'s total energy', 'L\'énergie totale de l\'électron', 'الطاقة الكلية للإلكترون') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'undergraduate', 'physical', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Statistical thermodynamics connects microscopic states to bulk properties. Boltzmann\'s formula S = k ln W links entropy to W, the number of microstates, and the Boltzmann distribution tells how molecules populate energy levels at temperature T.',
          'La thermodynamique statistique relie les états microscopiques aux propriétés macroscopiques. La formule de Boltzmann S = k ln W lie l\'entropie à W, le nombre de micro-états, et la distribution de Boltzmann décrit comment les molécules peuplent les niveaux d\'énergie à la température T.',
          'تربط الديناميكا الحرارية الإحصائية الحالات المجهرية بالخواص الكلية. صيغة بولتزمان S = k ln W تربط الإنتروبيا بعدد الحالات المجهرية W، ويصف توزيع بولتزمان كيف تشغل الجزيئات مستويات الطاقة عند درجة الحرارة T.',
        ),
      },
      {
        type: 'list',
        items: [
          L('More microstates → higher entropy: gases beat liquids beat solids.', 'Plus de micro-états → entropie plus élevée : gaz > liquides > solides.', 'حالات مجهرية أكثر ← إنتروبيا أعلى: الغازات تفوق السوائل والسوائل تفوق المواد الصلبة.'),
          L('The partition function q sums Boltzmann factors e^(−E/kT) over all states.', 'La fonction de partition q somme les facteurs de Boltzmann e^(−E/kT) sur tous les états.', 'دالة التقسيم q تجمع عوامل بولتزمان e^(−E/kT) على جميع الحالات.'),
          L('At higher T, excited states become more populated.', 'À T plus élevée, les états excités deviennent plus peuplés.', 'عند ارتفاع T تزداد إشغالات الحالات المثارة.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A perfect crystal at 0 K has exactly W = 1 microstate. What is its entropy S = k ln W (in J/K)?',
          'Un cristal parfait à 0 K a exactement W = 1 micro-état. Quelle est son entropie S = k ln W (en J/K) ?',
          'بلورة مثالية عند 0 K لها بالضبط W = 1 حالة مجهرية. ما إنتروبياها S = k ln W (بوحدة J/K)؟',
        ),
        answer: 0,
        hint: L('ln 1 = 0.', 'ln 1 = 0.', 'ln 1 = 0.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which change increases the entropy of a system the most?',
          'Quel changement augmente le plus l\'entropie d\'un système ?',
          'أي تغيّر يزيد إنتروبيا النظام أكثر؟',
        ),
        choices: [
          { text: L('Freezing a liquid into a solid', 'Congeler un liquide en solide', 'تجميد سائل إلى صلب') },
          { text: L('Evaporating a liquid into a gas', 'Évaporer un liquide en gaz', 'تبخير سائل إلى غاز'), explanation: L('Gas molecules access far more microstates than liquid molecules.', 'Les molécules de gaz accèdent à bien plus de micro-états que celles du liquide.', 'جزيئات الغاز تصل إلى حالات مجهرية أكثر بكثير من جزيئات السائل.') },
          { text: L('Cooling a gas at constant volume', 'Refroidir un gaz à volume constant', 'تبريد غاز عند حجم ثابت') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'undergraduate', 'physical', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Electrochemistry couples redox reactions with electrical work. A galvanic cell separates oxidation (anode) from reduction (cathode); its voltage is E°cell = E°cathode − E°anode, and ΔG° = −nFE°cell links it to thermodynamics.',
          'L\'électrochimie couple les réactions redox au travail électrique. Une pile galvanique sépare l\'oxydation (anode) de la réduction (cathode) ; sa tension est E°cell = E°cathode − E°anode, et ΔG° = −nFE°cell la relie à la thermodynamique.',
          'تربط الكيمياء الكهربائية تفاعلات الأكسدة والاختزال بالشغل الكهربائي. تفصل الخلية الغلفانية الأكسدة (المصعد) عن الاختزال (المهبط)؛ وجهدها E°cell = E°cathode − E°anode، وتربطها العلاقة ΔG° = −nFE°cell بالديناميكا الحرارية.',
        ),
      },
      {
        type: 'example',
        question: L(
          'Daniell cell: Zn | Zn²⁺ || Cu²⁺ | Cu with E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V. What is E°cell?',
          'Pile Daniell : Zn | Zn²⁺ || Cu²⁺ | Cu avec E°(Cu²⁺/Cu) = +0,34 V et E°(Zn²⁺/Zn) = −0,76 V. Quelle est E°cell ?',
          'خلية دانيال: Zn | Zn²⁺ || Cu²⁺ | Cu حيث E°(Cu²⁺/Cu) = +0.34 V و E°(Zn²⁺/Zn) = −0.76 V. ما قيمة E°cell؟',
        ),
        answer: L(
          'E°cell = 0.34 − (−0.76) = 1.10 V. Positive, so the reaction is spontaneous.',
          'E°cell = 0,34 − (−0,76) = 1,10 V. Positive, donc la réaction est spontanée.',
          'E°cell = 0.34 − (−0.76) = 1.10 V. القيمة موجبة، إذن التفاعل تلقائي.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Oxidation always occurs at the anode; reduction at the cathode.', 'L\'oxydation a toujours lieu à l\'anode ; la réduction à la cathode.', 'تحدث الأكسدة دائماً عند المصعد؛ والاختزال عند المهبط.'),
          L('The Nernst equation corrects E for non-standard concentrations.', 'L\'équation de Nernst corrige E pour des concentrations non standard.', 'تصحح معادلة نيرنست الجهد E عند تراكيز غير قياسية.'),
          L('Positive E°cell ⇔ negative ΔG° ⇔ spontaneous reaction.', 'E°cell positif ⇔ ΔG° négatif ⇔ réaction spontanée.', 'قيمة E°cell موجبة ⇔ ΔG° سالبة ⇔ تفاعل تلقائي.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A cell has E°cathode = +0.80 V (Ag⁺/Ag) and E°anode = +0.34 V (Cu²⁺/Cu). Compute E°cell in volts.',
          'Une pile a E°cathode = +0,80 V (Ag⁺/Ag) et E°anode = +0,34 V (Cu²⁺/Cu). Calcule E°cell en volts.',
          'خلية لها E°cathode = +0.80 V (Ag⁺/Ag) و E°anode = +0.34 V (Cu²⁺/Cu). احسب E°cell بالفولت.',
        ),
        answer: 0.46,
        tolerance: 0.01,
        unit: 'V',
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'In a galvanic cell, electrons flow through the external circuit:',
          'Dans une pile galvanique, les électrons circulent dans le circuit externe :',
          'في الخلية الغلفانية، تتدفق الإلكترونات في الدارة الخارجية:',
        ),
        choices: [
          { text: L('From cathode to anode', 'De la cathode vers l\'anode', 'من المهبط إلى المصعد') },
          { text: L('From anode to cathode', 'De l\'anode vers la cathode', 'من المصعد إلى المهبط'), explanation: L('Electrons are released by oxidation at the anode and consumed by reduction at the cathode.', 'Les électrons sont libérés par l\'oxydation à l\'anode et consommés par la réduction à la cathode.', 'تتحرر الإلكترونات بالأكسدة عند المصعد وتُستهلك بالاختزال عند المهبط.') },
          { text: L('Through the salt bridge', 'À travers le pont salin', 'عبر القنطرة الملحية') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Graduate — Spectroscopy
  [lessonKey('chemistry', 'graduate', 'spectroscopy', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'NMR spectroscopy probes nuclei with spin (¹H, ¹³C) in a magnetic field. The chemical shift δ (in ppm) reports the electronic environment, integration counts equivalent protons, and spin–spin coupling splits signals according to the n+1 rule.',
          'La spectroscopie RMN sonde les noyaux de spin non nul (¹H, ¹³C) dans un champ magnétique. Le déplacement chimique δ (en ppm) reflète l\'environnement électronique, l\'intégration compte les protons équivalents, et le couplage spin–spin divise les signaux selon la règle n+1.',
          'تفحص مطيافية الرنين المغناطيسي النووي (NMR) الأنوية ذات البرم (¹H، ¹³C) في مجال مغناطيسي. الإزاحة الكيميائية δ (بوحدة ppm) تعكس البيئة الإلكترونية، والتكامل يحصي البروتونات المتكافئة، ويشطر الاقتران برم–برم الإشارات وفق قاعدة n+1.',
        ),
      },
      {
        type: 'list',
        items: [
          L('δ 0–3 ppm: alkyl protons; δ 6.5–8 ppm: aromatic protons; δ 9–12 ppm: aldehyde/acid protons.', 'δ 0–3 ppm : protons alkyle ; δ 6,5–8 ppm : protons aromatiques ; δ 9–12 ppm : protons aldéhyde/acide.', 'δ 0–3 ppm: بروتونات ألكيلية؛ δ 6.5–8 ppm: بروتونات أروماتية؛ δ 9–12 ppm: بروتونات ألدهيد/حمض.'),
          L('A proton with n equivalent neighbors appears as n + 1 lines.', 'Un proton avec n voisins équivalents apparaît en n + 1 raies.', 'البروتون الذي له n جاراً متكافئاً يظهر بعدد n + 1 من الخطوط.'),
          L('¹³C NMR (proton-decoupled) shows one singlet per unique carbon.', 'La RMN ¹³C (découplée du proton) montre un singulet par carbone unique.', 'يعطي ¹³C NMR (مفصول البروتون) خطاً واحداً لكل كربون فريد.'),
          L('2D methods (COSY, HSQC, HMBC) map connectivity for complex molecules.', 'Les méthodes 2D (COSY, HSQC, HMBC) cartographient la connectivité des molécules complexes.', 'الطرق ثنائية البعد (COSY، HSQC، HMBC) ترسم خرائط الترابط للجزيئات المعقدة.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'In the ¹H NMR of ethanol (CH₃CH₂OH), the CH₃ signal is split by the two CH₂ protons into a:',
          'Dans la RMN ¹H de l\'éthanol (CH₃CH₂OH), le signal CH₃ est divisé par les deux protons CH₂ en un :',
          'في طيف ¹H NMR للإيثانول (CH₃CH₂OH)، ينشطر توقيع CH₃ بفعل بروتوني CH₂ إلى:',
        ),
        choices: [
          { text: L('Singlet', 'Singulet', 'خط أحادي') },
          { text: L('Doublet', 'Doublet', 'خط ثنائي') },
          { text: L('Triplet', 'Triplet', 'خط ثلاثي'), explanation: L('n = 2 neighbors → n + 1 = 3 lines.', 'n = 2 voisins → n + 1 = 3 raies.', 'n = 2 من الجيران ← n + 1 = 3 خطوط.') },
          { text: L('Quartet', 'Quadruplet', 'خط رباعي') },
        ],
        correctIndex: 2,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'How many distinct ¹H signals does ethanol CH₃CH₂OH show (fast OH exchange resolved)?',
          'Combien de signaux ¹H distincts montre l\'éthanol CH₃CH₂OH (échange OH résolu) ?',
          'كم إشارة ¹H مميزة يظهرها الإيثانول CH₃CH₂OH (مع تبيّن إشارة OH)؟',
        ),
        answer: 3,
        hint: L('CH₃, CH₂ and OH.', 'CH₃, CH₂ et OH.', 'CH₃ و CH₂ و OH.'),
      },
    ],
  },
  [lessonKey('chemistry', 'graduate', 'spectroscopy', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Mass spectrometry ionizes molecules and separates the ions by mass-to-charge ratio m/z. The molecular ion M⁺• gives the molecular mass, fragments reveal substructures, and isotope patterns (M+1, M+2) flag elements like Cl, Br, and S.',
          'La spectrométrie de masse ionise les molécules et sépare les ions selon leur rapport masse/charge m/z. L\'ion moléculaire M⁺• donne la masse moléculaire, les fragments révèlent des sous-structures, et les motifs isotopiques (M+1, M+2) signalent des éléments comme Cl, Br et S.',
          'يقوم مطياف الكتلة بتأيين الجزيئات وفصل الأيونات وفق نسبة الكتلة إلى الشحنة m/z. يعطي الأيون الجزيئي M⁺• الكتلة الجزيئية، وتكشف الشظايا البنى الجزئية، وتدل الأنماط النظائرية (M+1، M+2) على عناصر مثل Cl و Br و S.',
        ),
      },
      {
        type: 'list',
        items: [
          L('EI (electron impact) is a hard ionization giving many fragments; ESI and MALDI are soft methods for biomolecules.', 'L\'EI (impact électronique) est une ionisation dure donnant beaucoup de fragments ; l\'ESI et le MALDI sont des méthodes douces pour les biomolécules.', 'التأيين بالصدم الإلكتروني (EI) تأيين قاسٍ يعطي شظايا كثيرة؛ بينما ESI و MALDI طريقتان لطيفتان للجزيئات الحيوية.'),
          L('One Cl atom gives an M+2 peak about one third of M (³⁵Cl:³⁷Cl ≈ 3:1).', 'Un atome de Cl donne un pic M+2 d\'environ un tiers de M (³⁵Cl:³⁷Cl ≈ 3:1).', 'ذرة Cl واحدة تعطي قمة M+2 بنحو ثلث M (نسبة ³⁵Cl:³⁷Cl ≈ 3:1).'),
          L('High-resolution MS distinguishes formulas with the same nominal mass.', 'La MS haute résolution distingue des formules de même masse nominale.', 'يميّز مطياف الكتلة عالي الدقة بين صيغ لها الكتلة الاسمية نفسها.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What is the nominal m/z of the molecular ion of benzene C₆H₆ (C = 12, H = 1)?',
          'Quel est le m/z nominal de l\'ion moléculaire du benzène C₆H₆ (C = 12, H = 1) ?',
          'ما قيمة m/z الاسمية للأيون الجزيئي للبنزين C₆H₆ (C = 12، H = 1)؟',
        ),
        answer: 78,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A spectrum shows M and M+2 peaks of nearly equal intensity (≈1:1). The molecule most likely contains:',
          'Un spectre montre des pics M et M+2 d\'intensités presque égales (≈1:1). La molécule contient très probablement :',
          'يظهر الطيف قمتي M و M+2 بشدتين متقاربتين (≈1:1). الأرجح أن الجزيء يحتوي:',
        ),
        choices: [
          { text: L('One chlorine atom', 'Un atome de chlore', 'ذرة كلور واحدة') },
          { text: L('One bromine atom', 'Un atome de brome', 'ذرة بروم واحدة'), explanation: L('⁷⁹Br and ⁸¹Br are nearly equally abundant, giving a 1:1 M/M+2 pattern.', '⁷⁹Br et ⁸¹Br sont presque également abondants, donnant un motif M/M+2 de 1:1.', '⁷⁹Br و ⁸¹Br متقاربان في الوفرة، فيعطيان نمط M/M+2 بنسبة 1:1.') },
          { text: L('One sulfur atom', 'Un atome de soufre', 'ذرة كبريت واحدة') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'graduate', 'spectroscopy', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'X-ray diffraction determines atomic positions in crystals. Constructive interference of X-rays scattered by lattice planes obeys Bragg\'s law nλ = 2d sinθ; measuring the angles θ of the diffraction peaks yields the interplanar spacings d and ultimately the full structure.',
          'La diffraction des rayons X détermine les positions atomiques dans les cristaux. L\'interférence constructive des rayons X diffusés par les plans du réseau obéit à la loi de Bragg nλ = 2d sinθ ; mesurer les angles θ des pics de diffraction donne les distances interplanaires d et finalement la structure complète.',
          'يحدد حيود الأشعة السينية مواضع الذرات في البلورات. يخضع التداخل البنّاء للأشعة السينية المتشتتة عن مستويات الشبكة لقانون براغ nλ = 2d sinθ؛ وبقياس زوايا θ لقمم الحيود نحصل على المسافات بين المستويات d ثم على البنية الكاملة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Single-crystal XRD gives full 3D structures; powder XRD fingerprints phases.', 'La DRX sur monocristal donne des structures 3D complètes ; la DRX sur poudre identifie les phases.', 'حيود البلورة المفردة يعطي بنى ثلاثية الأبعاد كاملة؛ وحيود المسحوق يبصم الأطوار.'),
          L('Cu Kα radiation (λ = 1.54 Å) is the standard laboratory source.', 'La radiation Cu Kα (λ = 1,54 Å) est la source de laboratoire standard.', 'إشعاع Cu Kα بطول موجة (λ = 1.54 Å) هو المصدر المخبري القياسي.'),
          L('The phase problem is solved by direct methods or anomalous dispersion.', 'Le problème des phases se résout par méthodes directes ou dispersion anomale.', 'تُحل مشكلة الطور بالطرق المباشرة أو بالتشتت الشاذ.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'Bragg\'s law: with n = 1, λ = 1.54 Å and θ = 30° (sinθ = 0.5), find d in Å.',
          'Loi de Bragg : avec n = 1, λ = 1,54 Å et θ = 30° (sinθ = 0,5), trouve d en Å.',
          'قانون براغ: إذا كان n = 1 و λ = 1.54 Å و θ = 30° (حيث sinθ = 0.5)، احسب d بالأنغستروم.',
        ),
        answer: 1.54,
        tolerance: 0.02,
        unit: 'Å',
        hint: L('d = nλ / (2 sinθ).', 'd = nλ / (2 sinθ).', 'd = nλ / (2 sinθ).'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Why must the sample be crystalline for single-crystal X-ray diffraction?',
          'Pourquoi l\'échantillon doit-il être cristallin pour la diffraction sur monocristal ?',
          'لماذا يجب أن تكون العينة بلورية في حيود البلورة المفردة؟',
        ),
        choices: [
          { text: L('X-rays only pass through crystals.', 'Les rayons X ne traversent que les cristaux.', 'الأشعة السينية لا تخترق إلا البلورات.') },
          { text: L('Periodic lattice planes are needed for coherent diffraction.', 'Des plans de réseau périodiques sont nécessaires pour une diffraction cohérente.', 'المستويات الشبكية الدورية ضرورية لحدوث حيود متسق.'), explanation: L('Diffraction requires the regular repeating spacings described by Bragg\'s law.', 'La diffraction exige les espacements réguliers et répétés décrits par la loi de Bragg.', 'يتطلب الحيود المسافات المنتظمة المتكررة التي يصفها قانون براغ.') },
          { text: L('Amorphous solids absorb all X-rays.', 'Les solides amorphes absorbent tous les rayons X.', 'المواد الصلبة العشوائية تمتص كل الأشعة السينية.') },
        ],
        correctIndex: 1,
      },
    ],
  },

  // Graduate — Synthesis
  [lessonKey('chemistry', 'graduate', 'synthesis', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Retrosynthesis plans a synthesis backwards: you disconnect the target molecule into simpler synthons, translate each synthon into a real reagent, and repeat until you reach cheap starting materials. Strategic disconnections target C–C bonds next to functional groups.',
          'La rétrosynthèse planifie une synthèse à rebours : on déconnecte la molécule cible en synthons plus simples, on traduit chaque synthon en réactif réel, et on répète jusqu\'à atteindre des produits de départ bon marché. Les déconnexions stratégiques visent les liaisons C–C proches des groupes fonctionnels.',
          'يخطط التحليل الرجعي للتخليق عكسياً: نفصل الجزيء الهدف إلى سينثونات أبسط، ونترجم كل سينثون إلى كاشف حقيقي، ونكرر ذلك حتى نبلغ مواد أولية رخيصة. تستهدف الفصول الاستراتيجية روابط C–C المجاورة للمجموعات الوظيفية.',
        ),
      },
      {
        type: 'list',
        items: [
          L('The retrosynthetic arrow ⇒ means "is made from".', 'La flèche rétrosynthétique ⇒ signifie « est fabriqué à partir de ».', 'السهم الرجعي ⇒ يعني «يُصنع من».'),
          L('Synthons are idealized fragments (e.g. acyl cation, enolate anion); reagents are their real equivalents.', 'Les synthons sont des fragments idéalisés (p. ex. cation acyle, anion énolate) ; les réactifs sont leurs équivalents réels.', 'السينثونات شظايا مثالية (مثل كاتيون الأسيل وأنيون الإينولات)؛ والكواشف هي مكافئاتها الحقيقية.'),
          L('Protecting groups mask reactive sites but add steps — minimize them.', 'Les groupes protecteurs masquent les sites réactifs mais ajoutent des étapes — à minimiser.', 'المجموعات الحامية تخفي المواقع التفاعلية لكنها تضيف خطوات — قلّلها ما أمكن.'),
          L('Convergent routes beat linear routes in overall yield.', 'Les voies convergentes battent les voies linéaires en rendement global.', 'المسارات المتقاربة تتفوق على الخطية في المردود الكلي.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the stages of a retrosynthetic analysis.',
          'Ordonne les étapes d\'une analyse rétrosynthétique.',
          'رتّب مراحل التحليل الرجعي للتخليق.',
        ),
        steps: [
          L('Identify the key functional groups and strategic bonds in the target.', 'Identifier les groupes fonctionnels clés et les liaisons stratégiques de la cible.', 'حدد المجموعات الوظيفية الأساسية والروابط الاستراتيجية في الجزيء الهدف.'),
          L('Disconnect a strategic bond to generate synthons.', 'Déconnecter une liaison stratégique pour générer des synthons.', 'افصل رابطة استراتيجية لتوليد السينثونات.'),
          L('Translate each synthon into an available reagent.', 'Traduire chaque synthon en réactif disponible.', 'ترجم كل سينثون إلى كاشف متوفر.'),
          L('Repeat until all fragments are commercial starting materials.', 'Répéter jusqu\'à ce que tous les fragments soient des produits commerciaux.', 'كرر العملية حتى تصبح جميع الشظايا مواد أولية تجارية.'),
          L('Write the forward synthesis and check each step\'s feasibility.', 'Écrire la synthèse dans le sens direct et vérifier la faisabilité de chaque étape.', 'اكتب التخليق بالاتجاه الأمامي وتحقق من جدوى كل خطوة.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Why are convergent syntheses generally higher-yielding than linear ones?',
          'Pourquoi les synthèses convergentes ont-elles généralement un meilleur rendement que les linéaires ?',
          'لماذا تعطي التخليقات المتقاربة مردوداً أعلى عموماً من الخطية؟',
        ),
        choices: [
          { text: L('Each individual step has a higher yield.', 'Chaque étape individuelle a un meilleur rendement.', 'كل خطوة منفردة لها مردود أعلى.') },
          { text: L('Fragments are built in parallel, so fewer sequential steps multiply their losses.', 'Les fragments sont construits en parallèle, donc moins d\'étapes séquentielles multiplient leurs pertes.', 'تُبنى الشظايا بالتوازي، فيقل عدد الخطوات المتتابعة التي تتراكم خسائرها.'), explanation: L('Overall yield is the product of step yields along the longest sequence.', 'Le rendement global est le produit des rendements le long de la séquence la plus longue.', 'المردود الكلي هو حاصل ضرب مردودات الخطوات على طول أطول متسلسلة.') },
          { text: L('They avoid protecting groups entirely.', 'Elles évitent totalement les groupes protecteurs.', 'تتجنب المجموعات الحامية كلياً.') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'graduate', 'synthesis', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Catalysis accelerates reactions with substoichiometric amounts of a catalyst that is regenerated each cycle. Pd-catalyzed cross-couplings (Suzuki, Heck, Negishi) build C–C bonds through a general cycle of oxidative addition, transmetalation, and reductive elimination.',
          'La catalyse accélère les réactions avec des quantités substœchiométriques d\'un catalyseur régénéré à chaque cycle. Les couplages croisés au Pd (Suzuki, Heck, Negishi) construisent des liaisons C–C via un cycle général d\'addition oxydante, de transmétalation et d\'élimination réductrice.',
          'يسرّع التحفيز التفاعلات بكميات دون ستوكيومترية من حفّاز يتجدد في كل دورة. تبني الاقترانات المتصالبة المحفَّزة بالبلاديوم (سوزوكي، هيك، نيغيشي) روابط C–C عبر دورة عامة من الإضافة المؤكسِدة ثم نقل الفلز ثم الحذف المختزِل.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Turnover number (TON) counts product molecules per catalyst molecule.', 'Le turnover number (TON) compte les molécules de produit par molécule de catalyseur.', 'يحصي عدد الدوران (TON) جزيئات الناتج لكل جزيء حفّاز.'),
          L('Homogeneous catalysts share the reaction phase; heterogeneous catalysts act at a surface.', 'Les catalyseurs homogènes partagent la phase de la réaction ; les hétérogènes agissent en surface.', 'الحفّازات المتجانسة تشارك التفاعل طوره؛ وغير المتجانسة تعمل عند سطح.'),
          L('Ligand design (phosphines, NHCs) tunes activity and selectivity.', 'Le design des ligands (phosphines, NHC) module l\'activité et la sélectivité.', 'تصميم اللِجندات (الفوسفينات، NHC) يضبط النشاط والانتقائية.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the steps of the Suzuki coupling catalytic cycle starting from Pd(0).',
          'Ordonne les étapes du cycle catalytique du couplage de Suzuki à partir de Pd(0).',
          'رتّب خطوات الدورة التحفيزية لاقتران سوزوكي بدءاً من Pd(0).',
        ),
        steps: [
          L('Oxidative addition: Ar–X adds to Pd(0) giving Ar–Pd(II)–X.', 'Addition oxydante : Ar–X s\'additionne sur Pd(0) donnant Ar–Pd(II)–X.', 'الإضافة المؤكسِدة: يضاف Ar–X إلى Pd(0) فيتكوّن Ar–Pd(II)–X.'),
          L('Transmetalation: the boronate transfers its aryl group to Pd(II).', 'Transmétalation : le boronate transfère son groupe aryle au Pd(II).', 'نقل الفلز: ينقل البورونات مجموعته الأريلية إلى Pd(II).'),
          L('Reductive elimination: the new C–C bond forms and Pd(0) is regenerated.', 'Élimination réductrice : la nouvelle liaison C–C se forme et Pd(0) est régénéré.', 'الحذف المختزِل: تتكوّن رابطة C–C الجديدة ويتجدد Pd(0).'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A catalyst with TON = 10 000 means:',
          'Un catalyseur avec TON = 10 000 signifie :',
          'حفّاز له TON = 10000 يعني:',
        ),
        choices: [
          { text: L('It survives 10 000 °C.', 'Il résiste à 10 000 °C.', 'يتحمل 10000 درجة مئوية.') },
          { text: L('Each catalyst molecule produces 10 000 product molecules before dying.', 'Chaque molécule de catalyseur produit 10 000 molécules de produit avant de se désactiver.', 'كل جزيء حفّاز ينتج 10000 جزيء ناتج قبل أن يتعطل.'), explanation: L('TON measures the total productivity of a catalyst.', 'Le TON mesure la productivité totale d\'un catalyseur.', 'يقيس TON الإنتاجية الكلية للحفّاز.') },
          { text: L('The reaction is 10 000 times slower.', 'La réaction est 10 000 fois plus lente.', 'التفاعل أبطأ بعشرة آلاف مرة.') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'graduate', 'synthesis', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Asymmetric synthesis creates one enantiomer preferentially. Chiral catalysts, auxiliaries, or enzymes bias the transition state; success is measured by the enantiomeric excess, ee = (major − minor) / (major + minor) × 100.',
          'La synthèse asymétrique crée préférentiellement un énantiomère. Catalyseurs chiraux, auxiliaires ou enzymes orientent l\'état de transition ; le succès se mesure par l\'excès énantiomérique, ee = (majeur − mineur) / (majeur + mineur) × 100.',
          'يُنتج التخليق اللاتماثلي أحد الإينانتيومرين تفضيلاً. تعمل الحفّازات الكيرالية أو المساعدات أو الإنزيمات على إمالة الحالة الانتقالية؛ ويقاس النجاح بالفائض الإينانتيومري ee = (الأكبر − الأصغر) / (الأكبر + الأصغر) × 100.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Sharpless epoxidation and Noyori hydrogenation earned the 2001 Nobel Prize.', 'L\'époxydation de Sharpless et l\'hydrogénation de Noyori ont valu le prix Nobel 2001.', 'إبوكسدة شاربلس وهدرجة نويوري نالتا جائزة نوبل عام 2001.'),
          L('Organocatalysis (proline, MacMillan catalysts) earned the 2021 Nobel Prize.', 'L\'organocatalyse (proline, catalyseurs de MacMillan) a valu le prix Nobel 2021.', 'التحفيز العضوي (البرولين وحفّازات ماكميلان) نال جائزة نوبل عام 2021.'),
          L('Chiral HPLC or NMR with chiral shift reagents measures ee.', 'La HPLC chirale ou la RMN avec réactifs de déplacement chiraux mesure l\'ee.', 'يُقاس ee بكروماتوغرافيا HPLC كيرالية أو بالرنين النووي مع كواشف إزاحة كيرالية.'),
        ],
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'A reaction gives a 95:5 ratio of enantiomers. What is the ee in percent?',
          'Une réaction donne un rapport d\'énantiomères de 95:5. Quel est l\'ee en pourcentage ?',
          'يعطي تفاعل نسبة إينانتيومرات 95:5. ما قيمة ee بالنسبة المئوية؟',
        ),
        answer: 90,
        tolerance: 0.5,
        unit: '%',
        hint: L('ee = 95 − 5.', 'ee = 95 − 5.', 'ee = 95 − 5.'),
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'A racemic mixture has an ee of:',
          'Un mélange racémique a un ee de :',
          'المزيج الراسيمي له ee يساوي:',
        ),
        choices: [
          { text: L('0%', '0 %', '0%'), explanation: L('Equal amounts of both enantiomers: (50 − 50) = 0.', 'Quantités égales des deux énantiomères : (50 − 50) = 0.', 'كميتان متساويتان من الإينانتيومرين: (50 − 50) = 0.') },
          { text: L('50%', '50 %', '50%') },
          { text: L('100%', '100 %', '100%') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // PhD — Research
  [lessonKey('chemistry', 'phd', 'research', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A strong research hypothesis is specific, testable, and falsifiable: it predicts a measurable outcome that an experiment could contradict. In chemistry this means naming the system, the variable you will change, the response you will measure, and the mechanism you believe connects them.',
          'Une bonne hypothèse de recherche est spécifique, testable et falsifiable : elle prédit un résultat mesurable qu\'une expérience pourrait contredire. En chimie, cela signifie nommer le système, la variable que l\'on modifiera, la réponse que l\'on mesurera et le mécanisme censé les relier.',
          'الفرضية البحثية القوية محددة وقابلة للاختبار وللدحض: تتنبأ بنتيجة قابلة للقياس يمكن لتجربة أن تناقضها. في الكيمياء يعني ذلك تسمية النظام، والمتغير الذي ستغيره، والاستجابة التي ستقيسها، والآلية التي تعتقد أنها تربط بينها.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Weak: "This catalyst is better." Strong: "Replacing PPh₃ with a bulkier NHC ligand will raise the coupling yield by suppressing β-hydride elimination."', 'Faible : « Ce catalyseur est meilleur. » Forte : « Remplacer PPh₃ par un ligand NHC plus encombré augmentera le rendement du couplage en supprimant la β-H élimination. »', 'ضعيفة: «هذا الحفّاز أفضل.» قوية: «استبدال PPh₃ بلِجند NHC أضخم سيرفع مردود الاقتران عبر كبح حذف β-هيدريد.»'),
          L('Design controls: positive, negative, and blank runs isolate the variable.', 'Prévois des contrôles : essais positifs, négatifs et à blanc isolent la variable.', 'صمم تجارب ضابطة: المحاولات الموجبة والسالبة والفارغة تعزل المتغير.'),
          L('Plan the statistics before collecting data: replicates, error bars, significance.', 'Planifie les statistiques avant de collecter les données : réplicats, barres d\'erreur, significativité.', 'خطط للإحصاء قبل جمع البيانات: التكرارات وأشرطة الخطأ والدلالة الإحصائية.'),
          L('A literature review prevents rediscovering known results.', 'Une revue de littérature évite de redécouvrir des résultats connus.', 'مراجعة الأدبيات تمنع إعادة اكتشاف نتائج معروفة.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the stages of designing a chemistry research project.',
          'Ordonne les étapes de la conception d\'un projet de recherche en chimie.',
          'رتّب مراحل تصميم مشروع بحثي في الكيمياء.',
        ),
        steps: [
          L('Survey the literature to find an open question.', 'Explorer la littérature pour trouver une question ouverte.', 'استعرض الأدبيات للعثور على سؤال مفتوح.'),
          L('Formulate a specific, falsifiable hypothesis.', 'Formuler une hypothèse spécifique et falsifiable.', 'صُغ فرضية محددة قابلة للدحض.'),
          L('Design experiments with proper controls and replicates.', 'Concevoir des expériences avec contrôles et réplicats appropriés.', 'صمم تجارب بضوابط وتكرارات مناسبة.'),
          L('Collect and statistically analyze the data.', 'Collecter et analyser statistiquement les données.', 'اجمع البيانات وحللها إحصائياً.'),
          L('Accept, reject, or refine the hypothesis and communicate the results.', 'Accepter, rejeter ou affiner l\'hypothèse et communiquer les résultats.', 'اقبل الفرضية أو ارفضها أو حسّنها ثم انشر النتائج.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which statement is a falsifiable hypothesis?',
          'Quelle affirmation est une hypothèse falsifiable ?',
          'أي عبارة تمثل فرضية قابلة للدحض؟',
        ),
        choices: [
          { text: L('"Green chemistry is important for the future."', '« La chimie verte est importante pour l\'avenir. »', '«الكيمياء الخضراء مهمة للمستقبل.»') },
          { text: L('"Raising the reaction temperature from 25 °C to 60 °C will double the rate constant of this hydrolysis."', '« Augmenter la température de 25 °C à 60 °C doublera la constante de vitesse de cette hydrolyse. »', '«رفع درجة حرارة التفاعل من 25 °C إلى 60 °C سيضاعف ثابت سرعة هذا التحلل المائي.»'), explanation: L('It predicts a measurable, checkable outcome that an experiment could refute.', 'Elle prédit un résultat mesurable et vérifiable qu\'une expérience pourrait réfuter.', 'تتنبأ بنتيجة قابلة للقياس والتحقق يمكن لتجربة أن تدحضها.') },
          { text: L('"Some catalysts might work better under some conditions."', '« Certains catalyseurs pourraient mieux fonctionner dans certaines conditions. »', '«قد تعمل بعض الحفّازات بشكل أفضل في بعض الظروف.»') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('chemistry', 'phd', 'research', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Doctoral research relies on advanced instrumentation, often at shared facilities: high-field NMR (500–900 MHz), high-resolution mass spectrometry, single-crystal X-ray diffractometers, synchrotron beamlines, and electron microscopes. Knowing each technique\'s strengths, detection limits, and artifacts is as important as running the instrument.',
          'La recherche doctorale s\'appuie sur une instrumentation avancée, souvent dans des plateformes partagées : RMN à haut champ (500–900 MHz), spectrométrie de masse haute résolution, diffractomètres à monocristal, lignes synchrotron et microscopes électroniques. Connaître les forces, limites de détection et artefacts de chaque technique est aussi important que de faire fonctionner l\'instrument.',
          'يعتمد البحث في الدكتوراه على أجهزة متقدمة، غالباً في منشآت مشتركة: رنين نووي مغناطيسي عالي المجال (500–900 MHz)، ومطياف كتلة عالي الدقة، وأجهزة حيود بلورة مفردة، وخطوط سنكروترون، ومجاهر إلكترونية. معرفة نقاط قوة كل تقنية وحدود كشفها وعيوبها لا تقل أهمية عن تشغيل الجهاز.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Match the question to the probe: structure → XRD/NMR; composition → MS/EA; morphology → SEM/TEM; surface states → XPS.', 'Adapter la question à la sonde : structure → DRX/RMN ; composition → MS/analyse élémentaire ; morphologie → MEB/MET ; états de surface → XPS.', 'وائم السؤال مع الأداة: البنية ← XRD/NMR؛ التركيب ← MS/التحليل العنصري؛ الشكل ← SEM/TEM؛ حالات السطح ← XPS.'),
          L('Calibrate with standards and report uncertainties, not just averages.', 'Étalonner avec des standards et rapporter les incertitudes, pas seulement les moyennes.', 'عايِر بمعايير قياسية وقدّم الارتيابات لا المتوسطات فقط.'),
          L('Cross-validate: confirm a new structure with at least two independent techniques.', 'Croiser les validations : confirmer une nouvelle structure par au moins deux techniques indépendantes.', 'تحقق تقاطعياً: أكّد أي بنية جديدة بتقنيتين مستقلتين على الأقل.'),
          L('Document acquisition parameters so others can reproduce your data.', 'Documenter les paramètres d\'acquisition pour que d\'autres puissent reproduire les données.', 'وثّق معاملات القياس ليتمكن الآخرون من إعادة إنتاج بياناتك.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'You isolated a new crystalline organometallic complex and need its unambiguous 3D structure. The most direct technique is:',
          'Tu as isolé un nouveau complexe organométallique cristallin et tu as besoin de sa structure 3D sans ambiguïté. La technique la plus directe est :',
          'عزلت معقداً فلزياً عضوياً بلورياً جديداً وتحتاج بنيته ثلاثية الأبعاد دون لبس. التقنية الأكثر مباشرة هي:',
        ),
        choices: [
          { text: L('UV-Vis spectroscopy', 'Spectroscopie UV-visible', 'مطيافية UV-Vis') },
          { text: L('Single-crystal X-ray diffraction', 'Diffraction des rayons X sur monocristal', 'حيود الأشعة السينية للبلورة المفردة'), explanation: L('It locates every atom in the lattice directly.', 'Elle localise directement chaque atome du réseau.', 'تحدد موضع كل ذرة في الشبكة مباشرة.') },
          { text: L('Elemental analysis', 'Analyse élémentaire', 'التحليل العنصري') },
          { text: L('Melting point measurement', 'Mesure du point de fusion', 'قياس نقطة الانصهار') },
        ],
        correctIndex: 1,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Your ¹H NMR shows an unexpected peak at δ 1.56 ppm in CDCl₃. Before proposing a new compound, you should first suspect:',
          'Ta RMN ¹H montre un pic inattendu à δ 1,56 ppm dans CDCl₃. Avant de proposer un nouveau composé, tu devrais d\'abord soupçonner :',
          'يظهر طيف ¹H NMR لديك قمة غير متوقعة عند δ 1.56 ppm في CDCl₃. قبل اقتراح مركّب جديد، عليك أولاً أن تشك في:',
        ),
        choices: [
          { text: L('A residual water peak (common solvent impurity)', 'Un pic d\'eau résiduelle (impureté de solvant courante)', 'قمة ماء متبقٍ (شائبة مذيب شائعة)'), explanation: L('Water in CDCl₃ appears near 1.56 ppm; always rule out known artifacts first.', 'L\'eau dans CDCl₃ apparaît vers 1,56 ppm ; il faut d\'abord écarter les artefacts connus.', 'يظهر الماء في CDCl₃ قرب 1.56 ppm؛ استبعد العيوب المعروفة أولاً.') },
          { text: L('A revolutionary new molecule', 'Une nouvelle molécule révolutionnaire', 'جزيء جديد ثوري') },
          { text: L('Instrument failure', 'Une panne de l\'instrument', 'عطل في الجهاز') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('chemistry', 'phd', 'research', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A thesis tells one coherent scientific story: the open question, your hypotheses, the evidence chapter by chapter, and what the field should conclude. The defense then tests whether you own that story — you must justify every method, statistic, and claim before a committee of experts.',
          'Une thèse raconte une seule histoire scientifique cohérente : la question ouverte, tes hypothèses, les preuves chapitre par chapitre, et ce que le domaine doit en conclure. La soutenance vérifie ensuite que tu maîtrises cette histoire — tu dois justifier chaque méthode, statistique et affirmation devant un jury d\'experts.',
          'تحكي الأطروحة قصة علمية واحدة متماسكة: السؤال المفتوح، وفرضياتك، والأدلة فصلاً بعد فصل، وما ينبغي أن يستخلصه المجال. ثم تختبر المناقشة مدى امتلاكك لهذه القصة — إذ عليك تبرير كل طريقة وإحصاء وادعاء أمام لجنة من الخبراء.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Write as you go: a results chapter drafted after each project beats a final-year scramble.', 'Écris au fil de l\'eau : un chapitre de résultats rédigé après chaque projet vaut mieux qu\'une course la dernière année.', 'اكتب أولاً بأول: فصل نتائج يُصاغ بعد كل مشروع خير من سباق السنة الأخيرة.'),
          L('Anticipate committee questions: limitations, alternative explanations, reproducibility.', 'Anticipe les questions du jury : limites, explications alternatives, reproductibilité.', 'استبق أسئلة اللجنة: القيود والتفسيرات البديلة وقابلية إعادة الإنتاج.'),
          L('Saying "I don\'t know, but here is how I would find out" is a legitimate answer.', 'Dire « je ne sais pas, mais voici comment je le découvrirais » est une réponse légitime.', 'قول «لا أعرف، لكن إليكم كيف سأكتشف ذلك» إجابة مشروعة.'),
          L('Practice the talk with peers and time it strictly.', 'Répète l\'exposé avec des collègues et chronomètre-le strictement.', 'تدرّب على العرض مع زملائك واضبط توقيته بدقة.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the milestones from finishing lab work to earning the doctorate.',
          'Ordonne les jalons entre la fin du travail de laboratoire et l\'obtention du doctorat.',
          'رتّب المحطات من إنهاء العمل المخبري حتى نيل الدكتوراه.',
        ),
        steps: [
          L('Consolidate and archive all data, spectra, and notebooks.', 'Consolider et archiver toutes les données, spectres et cahiers.', 'اجمع وأرشف كل البيانات والأطياف ودفاتر المختبر.'),
          L('Write the thesis chapters and integrate committee feedback.', 'Rédiger les chapitres de la thèse et intégrer les retours du comité.', 'اكتب فصول الأطروحة وأدمج ملاحظات اللجنة.'),
          L('Submit the manuscript to the examination committee.', 'Soumettre le manuscrit au jury d\'examen.', 'سلّم المخطوطة إلى لجنة الفحص.'),
          L('Present the public defense and answer the committee\'s questions.', 'Présenter la soutenance publique et répondre aux questions du jury.', 'قدّم المناقشة العلنية وأجب عن أسئلة اللجنة.'),
          L('Deposit the corrected final version and graduate.', 'Déposer la version finale corrigée et être diplômé.', 'أودع النسخة النهائية المصححة وتخرّج.'),
        ],
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'During your defense a committee member finds a real weakness in one experiment. The best response is to:',
          'Pendant la soutenance, un membre du jury trouve une vraie faiblesse dans une expérience. La meilleure réponse est de :',
          'أثناء المناقشة يجد أحد أعضاء اللجنة نقطة ضعف حقيقية في إحدى التجارب. أفضل استجابة هي:',
        ),
        choices: [
          { text: L('Deny that the weakness exists.', 'Nier que la faiblesse existe.', 'إنكار وجود نقطة الضعف.') },
          { text: L('Acknowledge it, explain its impact, and describe the follow-up experiment that would resolve it.', 'La reconnaître, expliquer son impact et décrire l\'expérience complémentaire qui la résoudrait.', 'الإقرار بها وشرح أثرها ووصف التجربة اللاحقة الكفيلة بحسمها.'), explanation: L('Honest scientific reasoning under pressure is exactly what a defense evaluates.', 'Le raisonnement scientifique honnête sous pression est exactement ce qu\'évalue une soutenance.', 'التفكير العلمي النزيه تحت الضغط هو بالضبط ما تقيّمه المناقشة.') },
          { text: L('Change the subject to stronger results.', 'Changer de sujet vers des résultats plus solides.', 'تغيير الموضوع نحو نتائج أقوى.') },
        ],
        correctIndex: 1,
      },
    ],
  },
}
