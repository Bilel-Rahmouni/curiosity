import { lessonKey, localized as L } from '../types'
import type { LessonContent } from '../types'

export const chemistryLessons: Record<string, LessonContent> = {
  // Primary — Materials
  [lessonKey('chemistry', 'primary', 'materials', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Everything around us is made of materials. Wood, metal, plastic, and glass are common materials with different properties.',
          'Tout autour de nous est fait de matériaux. Bois, métal, plastique et verre sont des matériaux courants aux propriétés différentes.',
          'كل ما حولنا مصنوع من مواد. الخشب والمعدن والبلاستيك والزجاج مواد شائعة بخصائص مختلفة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Materials come from natural or human-made sources.', 'Les matériaux viennent de sources naturelles ou fabriquées.', 'المواد من مصادر طبيعية أو صنعية.'),
          L('Properties describe how a material behaves.', 'Les propriétés décrivent le comportement d\'un matériau.', 'الخصائص تصف سلوك المادة.'),
          L('We choose materials for specific jobs.', 'Nous choisissons les matériaux pour des usages précis.', 'نختار المواد لمهام محددة.'),
        ],
      },
      { type: 'states', highlight: 'solid' },
      {
        type: 'example',
        question: L(
          'Name a material used to build houses.',
          'Nomme un matériau utilisé pour construire des maisons.',
          'سمّ مادة تُستخدم لبناء البيوت.',
        ),
        answer: L('Wood, brick, or concrete.', 'Bois, brique ou béton.', 'الخشب أو الطوب أو الخرسانة.'),
      },
    ],
  },
  [lessonKey('chemistry', 'primary', 'materials', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Materials can be hard or soft. Hard materials resist scratching; soft materials bend or dent more easily.',
          'Les matériaux peuvent être durs ou mous. Les matériaux durs résistent aux rayures ; les mous se plient ou s\'enfoncent plus facilement.',
          'المواد قد تكون صلبة أو لينة. الصلبة تقاوم الخدش؛ اللينة تنحني أو تتأثر بسهولة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Diamond is very hard.', 'Le diamant est très dur.', 'الماس صلب جداً.'),
          L('Rubber and clay are relatively soft.', 'Le caoutchouc et l\'argile sont relativement mous.', 'المطاط والطين لينان نسبياً.'),
          L('Hardness helps pick tools and building materials.', 'La dureté aide à choisir outils et matériaux de construction.', 'الصلابة تساعد في اختيار الأدوات ومواد البناء.'),
        ],
      },
      { type: 'compare', left: 10, right: 3 },
      {
        type: 'example',
        question: L(
          'Is a metal spoon harder or softer than rubber?',
          'Une cuillère en métal est-elle plus dure ou plus molle que le caoutchouc ?',
          'هل ملعقة معدنية أصلب أم ألين من المطاط؟',
        ),
        answer: L('Harder than rubber.', 'Plus dure que le caoutchouc.', 'أصلب من المطاط.'),
      },
    ],
  },
  [lessonKey('chemistry', 'primary', 'materials', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Heating and cooling can change materials. Ice melts, chocolate softens, and some metals expand when hot.',
          'Chauffer et refroidir peuvent changer les matériaux. La glace fond, le chocolat ramollit, et certains métaux se dilatent à chaud.',
          'التسخين والتبريد قد يغيّران المواد. الجليد يذوب، الشوكولاتة تلين، وبعض المعادن تتمدد بالحرارة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Melting turns a solid into a liquid.', 'La fusion transforme un solide en liquide.', 'الانصهار يحوّل الصلب إلى سائل.'),
          L('Cooling can make liquids solid again.', 'Le refroidissement peut solidifier un liquide.', 'التبريد قد يجمد السائل مجدداً.'),
          L('Some changes are reversible.', 'Certains changements sont réversibles.', 'بعض التغييرات قابلة للعكس.'),
        ],
      },
      { type: 'states', highlight: 'liquid' },
      {
        type: 'example',
        question: L(
          'What happens to butter left in the sun?',
          'Que devient le beurre laissé au soleil ?',
          'ماذا يحدث للزبدة الموضوعة في الشمس؟',
        ),
        answer: L('It softens and may melt.', 'Il ramollit et peut fondre.', 'تلين وقد تذوب.'),
      },
    ],
  },

  // Primary — Mixtures
  [lessonKey('chemistry', 'primary', 'mixtures', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A mixture combines two or more substances without making a new substance. Salad and air are mixtures.',
          'Un mélange combine deux substances ou plus sans en créer une nouvelle. Une salade et l\'air sont des mélanges.',
          'المخلوط يجمع مادتين أو أكثر دون تكوين مادة جديدة. السلطة والهواء مخلوطان.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Parts of a mixture keep their own properties.', 'Les parties d\'un mélange gardent leurs propriétés.', 'أجزاء المخلوط تحتفظ بخصائصها.'),
          L('Mixtures can often be separated.', 'Les mélanges peuvent souvent être séparés.', 'المخاليط غالباً يمكن فصلها.'),
          L('Homogeneous mixtures look the same throughout.', 'Les mélanges homogènes sont uniformes.', 'المخاليط المتجانسة متشابهة في كل مكان.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Is sand and water a mixture?',
          'Le sable et l\'eau forment-ils un mélange ?',
          'هل الرمل والماء مخلوط؟',
        ),
        answer: L('Yes.', 'Oui.', 'نعم.'),
      },
      { type: 'ratio', a: 1, b: 2 },
    ],
  },
  [lessonKey('chemistry', 'primary', 'mixtures', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Dissolving is when a solid mixes evenly into a liquid. The solid is the solute; the liquid is the solvent.',
          'Dissoudre, c\'est quand un solide se mélange uniformément dans un liquide. Le solide est le soluté ; le liquide est le solvant.',
          'الإذابة عندما يذوب صلب بانتظام في سائل. الصلب هو المذاب؛ السائل هو المذيب.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Salt dissolves in water.', 'Le sel se dissout dans l\'eau.', 'الملح يذوب في الماء.'),
          L('Stirring and heating can speed dissolving.', 'Remuer et chauffer accélèrent la dissolution.', 'التقليب والتسخين يسرّعان الإذابة.'),
          L('Not all solids dissolve in all liquids.', 'Tous les solides ne se dissolvent pas dans tous les liquides.', 'ليس كل صلب يذوب في كل سائل.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'What dissolves when you make sweet tea?',
          'Qu\'est-ce qui se dissout quand tu prépares du thé sucré ?',
          'ماذا يذوب عند تحضير شاي محلى؟',
        ),
        answer: L('Sugar.', 'Le sucre.', 'السكر.'),
      },
      { type: 'states', highlight: 'liquid' },
    ],
  },
  [lessonKey('chemistry', 'primary', 'mixtures', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'We separate mixtures using differences in size, magnetism, or boiling point. Filtering and evaporation are common methods.',
          'On sépare les mélanges selon la taille, le magnétisme ou le point d\'ébullition. Filtration et évaporation sont des méthodes courantes.',
          'نفصل المخاليط حسب الحجم أو المغناطيسية أو نقطة الغليان. الترشيح والتبخير طرق شائعة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Filter paper traps solid particles.', 'Le papier filtre retient les particules solides.', 'ورق الترشيح يحبس الجسيمات الصلبة.'),
          L('Evaporation leaves dissolved solids behind.', 'L\'évaporation laisse les solides dissous.', 'التبخير يترك المواد المذابة.'),
          L('Magnets separate iron from other materials.', 'Les aimants séparent le fer des autres matériaux.', 'المغناطيس يفصل الحديد عن مواد أخرى.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'How do you separate sand from water?',
          'Comment sépare-t-on le sable de l\'eau ?',
          'كيف تفصل الرمل عن الماء؟',
        ),
        answer: L('By filtering.', 'Par filtration.', 'بالترشيح.'),
      },
      { type: 'ratio', a: 2, b: 1 },
    ],
  },

  // Primary — Safety
  [lessonKey('chemistry', 'primary', 'safety', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Lab safety protects you and others. Always follow teacher instructions and wear protection when needed.',
          'La sécurité en laboratoire te protège, toi et les autres. Suis toujours les consignes du professeur et porte une protection si nécessaire.',
          'سلامة المختبر تحميك أنت والآخرين. اتبع تعليمات المعلّم دائماً وارتدِ الحماية عند الحاجة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Wear goggles when handling chemicals.', 'Porte des lunettes de protection avec les produits chimiques.', 'ارتدِ نظارات عند التعامل مع المواد الكيميائية.'),
          L('Never taste or smell unknown substances.', 'Ne goûte ni ne sens jamais des substances inconnues.', 'لا تذق ولا تشم مواد مجهولة.'),
          L('Report spills immediately.', 'Signale immédiatement les déversements.', 'أبلغ عن الانسكابات فوراً.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Should you run in the lab?',
          'Doit-on courir dans le laboratoire ?',
          'هل يجب الجري في المختبر؟',
        ),
        answer: L('No, walk carefully.', 'Non, marche prudemment.', 'لا، امشِ بحذر.'),
      },
      { type: 'circuit', closed: false },
    ],
  },
  [lessonKey('chemistry', 'primary', 'safety', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Good scientists observe carefully using all their senses safely. Look for color, texture, and changes over time.',
          'Les bons scientifiques observent attentivement en utilisant leurs sens en sécurité. Regarde la couleur, la texture et les changements.',
          'العلماء الجيدون يلاحظون بعناية باستخدام حواسهم بأمان. راقب اللون والملمس والتغيّرات.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Record what you see, not what you expect.', 'Note ce que tu vois, pas ce que tu attends.', 'سجّل ما تراه لا ما تتوقعه.'),
          L('Use a magnifying glass for small details.', 'Utilise une loupe pour les petits détails.', 'استخدم عدسة مكبرة للتفاصيل الصغيرة.'),
          L('Compare before and after.', 'Compare avant et après.', 'قارن قبل وبعد.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'What should you note when ice melts?',
          'Que dois-tu noter quand la glace fond ?',
          'ماذا تلاحظ عند ذوبان الجليد؟',
        ),
        answer: L(
          'Shape change, liquid water forming.',
          'Changement de forme, formation d\'eau liquide.',
          'تغيّر الشكل، تكوّن ماء سائل.',
        ),
      },
      { type: 'compare', left: 0, right: 1 },
    ],
  },
  [lessonKey('chemistry', 'primary', 'safety', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Recording results in a table or notebook helps you remember and share findings. Include date, materials, and observations.',
          'Noter les résultats dans un tableau ou un carnet aide à se souvenir et à partager. Inclus date, matériaux et observations.',
          'تسجيل النتائج في جدول أو دفتر يساعد على التذكر والمشاركة. ضمّن التاريخ والمواد والملاحظات.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Write clearly and label units.', 'Écris clairement et indique les unités.', 'اكتب بوضوح وسمّ الوحدات.'),
          L('Draw simple diagrams when helpful.', 'Dessine des schémas simples si utile.', 'ارسم مخططات بسيطة عند الحاجة.'),
          L('Keep raw data before drawing conclusions.', 'Garde les données brutes avant de conclure.', 'احتفظ بالبيانات الخام قبل الاستنتاج.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Why write the date on an experiment page?',
          'Pourquoi écrire la date sur une page d\'expérience ?',
          'لماذا تكتب التاريخ في صفحة التجربة؟',
        ),
        answer: L(
          'To track when the work was done.',
          'Pour savoir quand le travail a été fait.',
          'لمعرفة متى أُنجز العمل.',
        ),
      },
      { type: 'counter', count: 3 },
    ],
  },

  // Middle — Atoms
  [lessonKey('chemistry', 'middle', 'atoms', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Atoms are tiny building blocks of matter. Each atom has a nucleus with protons and neutrons, surrounded by electrons.',
          'Les atomes sont de minuscules blocs de matière. Chaque atome a un noyau avec protons et neutrons, entouré d\'électrons.',
          'الذرات لبنات المادة الدقيقة. لكل ذرة نواة فيها بروتونات ونيوترونات، محاطة بإلكترونات.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Protons have positive charge.', 'Les protons ont une charge positive.', 'البروتونات شحنة موجبة.'),
          L('Electrons have negative charge.', 'Les électrons ont une charge négative.', 'الإلكترونات شحنة سالبة.'),
          L('Neutrons have no charge.', 'Les neutrons n\'ont pas de charge.', 'النيوترونات بلا شحنة.'),
        ],
      },
      { type: 'atom', protons: 6, neutrons: 6, electrons: 6 },
      {
        type: 'example',
        question: L(
          'Which particle is in the nucleus?',
          'Quelle particule est dans le noyau ?',
          'أي جسيم في النواة؟',
        ),
        answer: L('Protons and neutrons.', 'Protons et neutrons.', 'البروتونات والنيوترونات.'),
      },
    ],
  },
  [lessonKey('chemistry', 'middle', 'atoms', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The periodic table organizes elements by atomic number. Each element has unique properties and symbol.',
          'Le tableau périodique classe les éléments par numéro atomique. Chaque élément a des propriétés et un symbole uniques.',
          'الجدول الدوري يرتب العناصر حسب العدد الذري. لكل عنصر خصائص ورمز فريدان.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Rows are called periods.', 'Les lignes sont des périodes.', 'الصفوف دورات.'),
          L('Columns are groups with similar behavior.', 'Les colonnes sont des groupes au comportement similaire.', 'الأعمدة مجموعات بسلوك متشابه.'),
          L('H is hydrogen; O is oxygen.', 'H est l\'hydrogène ; O est l\'oxygène.', 'H هو الهيدروجين؛ O هو الأكسجين.'),
        ],
      },
      { type: 'atom', protons: 8, neutrons: 8, electrons: 8 },
      {
        type: 'example',
        question: L(
          'What is the symbol for carbon?',
          'Quel est le symbole du carbone ?',
          'ما رمز الكربون؟',
        ),
        answer: L('C', 'C', 'C'),
      },
    ],
  },
  [lessonKey('chemistry', 'middle', 'atoms', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Isotopes are atoms of the same element with different numbers of neutrons. They have the same chemical behavior.',
          'Les isotopes sont des atomes du même élément avec un nombre différent de neutrons. Ils ont le même comportement chimique.',
          'النظائر ذرات من نفس العنصر بعدد مختلف من النيوترونات. لها نفس السلوك الكيميائي.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Mass number = protons + neutrons.', 'Nombre de masse = protons + neutrons.', 'عدد الكتلة = بروتونات + نيوترونات.'),
          L('Carbon-12 and carbon-14 are isotopes.', 'Carbone-12 et carbone-14 sont des isotopes.', 'كربون-١٢ وكربون-١٤ نظائر.'),
          L('Some isotopes are radioactive.', 'Certains isotopes sont radioactifs.', 'بعض النظائر مشعة.'),
        ],
      },
      { type: 'atom', protons: 6, neutrons: 8, electrons: 6 },
      {
        type: 'example',
        question: L(
          'An atom has 6 protons and 8 neutrons. What element is it?',
          'Un atome a 6 protons et 8 neutrons. Quel élément est-ce ?',
          'ذرة لها ٦ بروتونات و٨ نيوترونات. أي عنصر هذا؟',
        ),
        answer: L('Carbon (atomic number 6).', 'Carbone (numéro atomique 6).', 'الكربون (العدد الذري ٦).'),
      },
    ],
  },

  // Middle — Reactions
  [lessonKey('chemistry', 'middle', 'reactions', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A chemical reaction makes new substances. Signs include color change, gas bubbles, temperature change, or a precipitate.',
          'Une réaction chimique crée de nouvelles substances. Signes : changement de couleur, bulles de gaz, changement de température ou précipité.',
          'التفاعل الكيميائي يكوّن مواد جديدة. علاماته: تغيّر اللون، فقاعات غاز، تغيّر الحرارة، أو راسب.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Reactants are starting materials.', 'Les réactifs sont les matériaux de départ.', 'المتفاعلات مواد البداية.'),
          L('Products are what forms.', 'Les produits sont ce qui se forme.', 'النواتج ما يتكوّن.'),
          L('Mass is conserved in a closed system.', 'La masse se conserve dans un système fermé.', 'الكتلة محفوظة في نظام مغلق.'),
        ],
      },
      { type: 'states', highlight: 'gas' },
      {
        type: 'example',
        question: L(
          'Rust forming on iron is a sign of what?',
          'La rouille sur le fer est le signe de quoi ?',
          'تكون الصدأ على الحديد علامة على ماذا؟',
        ),
        answer: L('A chemical reaction.', 'Une réaction chimique.', 'تفاعل كيميائي.'),
      },
    ],
  },
  [lessonKey('chemistry', 'middle', 'reactions', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A balanced equation has equal numbers of each atom on both sides. Coefficients show how many of each substance.',
          'Une équation équilibrée a le même nombre de chaque atome des deux côtés. Les coefficients indiquent combien de chaque substance.',
          'المعادلة المتوازنة لها نفس عدد كل ذرة على الطرفين. المعاملات تبيّن عدد كل مادة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Count atoms of each element.', 'Compte les atomes de chaque élément.', 'عدّ ذرات كل عنصر.'),
          L('Adjust coefficients, not subscripts.', 'Ajuste les coefficients, pas les indices.', 'عدّل المعاملات لا الأسفلية.'),
          L('Start with elements that appear once.', 'Commence par les éléments qui n\'apparaissent qu\'une fois.', 'ابدأ بالعناصر التي تظهر مرة واحدة.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Balance: H₂ + O₂ → H₂O (hint: 2H₂ + O₂ → 2H₂O)',
          'Équilibre : H₂ + O₂ → H₂O (indice : 2H₂ + O₂ → 2H₂O)',
          'وازن: H₂ + O₂ → H₂O (تلميح: 2H₂ + O₂ → 2H₂O)',
        ),
        answer: L('2H₂ + O₂ → 2H₂O', '2H₂ + O₂ → 2H₂O', '2H₂ + O₂ → 2H₂O'),
      },
      { type: 'atom', protons: 1, neutrons: 0, electrons: 1 },
    ],
  },
  [lessonKey('chemistry', 'middle', 'reactions', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Common reaction types include synthesis, decomposition, single replacement, and double replacement.',
          'Types courants : synthèse, décomposition, simple échange et double échange.',
          'أنواع شائعة: التركيب، التحلل، الاستبدال البسيط، والاستبدال المزدوج.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Synthesis: A + B → AB', 'Synthèse : A + B → AB', 'التركيب: A + B → AB'),
          L('Decomposition: AB → A + B', 'Décomposition : AB → A + B', 'التحلل: AB → A + B'),
          L('Combustion burns fuel with oxygen.', 'La combustion brûle un combustible avec de l\'oxygène.', 'الاحتراق يحرق وقوداً مع الأكسجين.'),
        ],
      },
      {
        type: 'example',
        question: L(
          'Breaking water into hydrogen and oxygen is which type?',
          'Décomposer l\'eau en hydrogène et oxygène est quel type ?',
          'تحليل الماء إلى هيدروجين وأكسجين أي نوع؟',
        ),
        answer: L('Decomposition.', 'Décomposition.', 'تحلل.'),
      },
      { type: 'states', highlight: 'gas' },
    ],
  },

  // Middle — Acids & Bases
  [lessonKey('chemistry', 'middle', 'acids-bases', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'The pH scale measures how acidic or basic a solution is, from 0 (very acidic) to 14 (very basic). 7 is neutral.',
          'L\'échelle de pH mesure l\'acidité ou la basicité d\'une solution, de 0 (très acide) à 14 (très basique). 7 est neutre.',
          'مقياس pH يقيس حموضة أو قاعدية المحلول، من ٠ (حامض جداً) إلى ١٤ (قاعدي جداً). ٧ محايد.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Acids have pH below 7.', 'Les acides ont un pH inférieur à 7.', 'الأحماض pH أقل من ٧.'),
          L('Bases have pH above 7.', 'Les bases ont un pH supérieur à 7.', 'القواعد pH أعلى من ٧.'),
          L('Indicators change color with pH.', 'Les indicateurs changent de couleur selon le pH.', 'الكواشف تغيّر لونها مع pH.'),
        ],
      },
      { type: 'ph', value: 7 },
      {
        type: 'example',
        question: L(
          'Is pure water acidic, basic, or neutral?',
          'L\'eau pure est-elle acide, basique ou neutre ?',
          'هل الماء النقي حامض أم قاعدي أم محايد؟',
        ),
        answer: L('Neutral (pH 7).', 'Neutre (pH 7).', 'محايد (pH ٧).'),
      },
    ],
  },
  [lessonKey('chemistry', 'middle', 'acids-bases', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Neutralization reacts an acid with a base to form salt and water. The pH moves toward 7.',
          'La neutralisation réagit un acide avec une base pour former sel et eau. Le pH se rapproche de 7.',
          'التحييد يتفاعل حامض مع قاعدة لتكوين ملح وماء. pH يقترب من ٧.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Acid + base → salt + water', 'Acide + base → sel + eau', 'حامض + قاعدة → ملح + ماء'),
          L('Antacids neutralize stomach acid.', 'Les antiacides neutralisent l\'acide gastrique.', 'مضادات الحموضة تحيّد حمض المعدة.'),
          L('Use caution: reactions can release heat.', 'Prudence : les réactions peuvent dégager de la chaleur.', 'احذر: التفاعلات قد تطلق حرارة.'),
        ],
      },
      { type: 'ph', value: 2 },
      {
        type: 'example',
        question: L(
          'What two products form when HCl and NaOH react?',
          'Quels deux produits se forment quand HCl et NaOH réagissent ?',
          'ما المادتان الناتجتان من تفاعل HCl و NaOH؟',
        ),
        answer: L('NaCl (salt) and H₂O (water).', 'NaCl (sel) et H₂O (eau).', 'NaCl (ملح) و H₂O (ماء).'),
      },
    ],
  },
  [lessonKey('chemistry', 'middle', 'acids-bases', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Acids and bases appear in daily life. Lemon juice and vinegar are acidic; soap and baking soda are basic.',
          'Acides et bases sont partout au quotidien. Jus de citron et vinaigre sont acides ; savon et bicarbonate sont basiques.',
          'الأحماض والقواعد في حياتنا اليومية. عصير الليمون والخل حامضان؛ الصابون وصودا الخبز قاعديان.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Stomach acid helps digestion.', 'L\'acide gastrique aide la digestion.', 'حمض المعدة يساعد الهضم.'),
          L('Strong acids and bases are corrosive.', 'Acides et bases forts sont corrosifs.', 'الأحماض والقواعد القوية أكّالة.'),
          L('Dilute solutions are safer to handle.', 'Les solutions diluées sont plus sûres.', 'المحاليل المخفّفة أكثر أماناً.'),
        ],
      },
      { type: 'ph', value: 12 },
      {
        type: 'example',
        question: L(
          'Which has lower pH: lemon juice or soap?',
          'Lequel a un pH plus bas : jus de citron ou savon ?',
          'أيهما pH أقل: عصير الليمون أم الصابون؟',
        ),
        answer: L('Lemon juice (more acidic).', 'Jus de citron (plus acide).', 'عصير الليمون (أكثر حموضة).'),
      },
    ],
  },
}
