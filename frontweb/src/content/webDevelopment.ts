import { lessonKey, localized as L } from './types'
import type { LessonContent } from './types'

// MERN stack track: JavaScript → Node.js → MongoDB → Express → React → full-stack.
export const webDevelopmentLessons: Record<string, LessonContent> = {
  // Beginner — JavaScript
  [lessonKey('web-development', 'beginner', 'javascript', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'JavaScript is the language of the web. Variables store values; use const for values that never change and let for values that do.',
          'JavaScript est le langage du web. Les variables stockent des valeurs ; utilise const pour les valeurs fixes et let pour celles qui changent.',
          'JavaScript هي لغة الويب. المتغيرات تخزن القيم؛ استخدم const للقيم الثابتة و let للقيم المتغيرة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Strings hold text: "hello".', 'Les chaînes contiennent du texte : "hello".', 'السلاسل النصية تحتوي نصاً: "hello".'),
          L('Numbers: 42, 3.14.', 'Les nombres : 42, 3.14.', 'الأعداد: 42، 3.14.'),
          L('Booleans: true or false.', 'Les booléens : true ou false.', 'القيم المنطقية: true أو false.'),
        ],
      },
      {
        type: 'code',
        language: 'javascript',
        code: `const name = 'Amine'\nlet score = 10\nscore = score + 5\nconsole.log(name, score) // Amine 15`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which keyword declares a value that never changes?',
          'Quel mot-clé déclare une valeur qui ne change jamais ?',
          'أي كلمة مفتاحية تعلن قيمة لا تتغير أبداً؟',
        ),
        choices: [
          { text: L('let', 'let', 'let') },
          {
            text: L('const', 'const', 'const'),
            explanation: L(
              'const creates a constant binding.',
              'const crée une liaison constante.',
              'const تنشئ ارتباطاً ثابتاً.',
            ),
          },
          { text: L('var', 'var', 'var') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('web-development', 'beginner', 'javascript', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A function is a reusable block of code. It takes inputs (parameters), does work, and returns a result.',
          'Une fonction est un bloc de code réutilisable. Elle prend des entrées (paramètres), travaille, et retourne un résultat.',
          'الدالة كتلة من التعليمات قابلة لإعادة الاستخدام. تأخذ مدخلات (وسائط)، تعمل، وتعيد نتيجة.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Arrow functions are the modern syntax.', 'Les fonctions fléchées sont la syntaxe moderne.', 'الدوال السهمية هي الصيغة الحديثة.'),
          L('return sends a value back to the caller.', 'return renvoie une valeur à l\'appelant.', 'return تعيد قيمة إلى المستدعي.'),
          L('Functions keep code organized and DRY.', 'Les fonctions gardent le code organisé et sans répétition.', 'الدوال تبقي الكود منظماً وبلا تكرار.'),
        ],
      },
      {
        type: 'code',
        language: 'javascript',
        code: `const add = (a, b) => a + b\n\nfunction greet(name) {\n  return 'Hello ' + name\n}\n\nconsole.log(add(2, 3)) // 5\nconsole.log(greet('Sara')) // Hello Sara`,
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'What does add(4, 6) return in the code above?',
          'Que retourne add(4, 6) dans le code ci-dessus ?',
          'ما الذي تعيده add(4, 6) في الكود أعلاه؟',
        ),
        answer: 10,
      },
    ],
  },
  [lessonKey('web-development', 'beginner', 'javascript', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Arrays hold ordered lists of values. Objects hold key–value pairs. Together they model almost all data in an app.',
          'Les tableaux contiennent des listes ordonnées. Les objets contiennent des paires clé–valeur. Ensemble, ils modélisent presque toutes les données d\'une app.',
          'المصفوفات تحتوي قوائم مرتبة من القيم. الكائنات تحتوي أزواج مفتاح–قيمة. معاً يمثلان معظم بيانات التطبيق.',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `const student = { name: 'Yasmine', grade: 8 }\nconst grades = [12, 15, 9, 18]\n\nconsole.log(student.name) // Yasmine\nconsole.log(grades.length) // 4\nconsole.log(grades.map((g) => g + 1)) // [13, 16, 10, 19]`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'How do you read the name of the student object?',
          'Comment lire le nom de l\'objet student ?',
          'كيف تقرأ اسم الكائن student؟',
        ),
        choices: [
          { text: L('student.name', 'student.name', 'student.name') },
          { text: L('student(name)', 'student(name)', 'student(name)') },
          { text: L('name.student', 'name.student', 'name.student') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'What is grades.length after grades.push(20)?',
          'Que vaut grades.length après grades.push(20) ?',
          'كم تصبح grades.length بعد grades.push(20)؟',
        ),
        answer: 5,
      },
    ],
  },

  // Beginner — Node.js
  [lessonKey('web-development', 'beginner', 'node', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Node.js runs JavaScript outside the browser — on servers and your own computer. It is the N in MERN.',
          'Node.js exécute JavaScript hors du navigateur — sur des serveurs et ton ordinateur. C\'est le N de MERN.',
          'Node.js تشغّل JavaScript خارج المتصفح — على الخوادم وعلى حاسوبك. وهي حرف N في MERN.',
        ),
      },
      {
        type: 'list',
        items: [
          L('Same language on front end and back end.', 'Même langage côté client et côté serveur.', 'نفس اللغة في الواجهة والخادم.'),
          L('Non-blocking: handles many requests at once.', 'Non bloquant : gère de nombreuses requêtes à la fois.', 'غير معطِّل: يعالج طلبات كثيرة معاً.'),
          L('Run a file with: node app.js.', 'Exécute un fichier avec : node app.js.', 'شغّل ملفاً بالأمر: node app.js.'),
        ],
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// app.js\nconsole.log('Hello from Node.js')\n\n// terminal:\n// $ node app.js\n// Hello from Node.js`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does Node.js let you do?',
          'Que permet Node.js ?',
          'ماذا تتيح لك Node.js؟',
        ),
        choices: [
          {
            text: L(
              'Run JavaScript outside the browser',
              'Exécuter JavaScript hors du navigateur',
              'تشغيل JavaScript خارج المتصفح',
            ),
          },
          { text: L('Style web pages', 'Styliser des pages web', 'تنسيق صفحات الويب') },
          { text: L('Store databases in the browser', 'Stocker des bases dans le navigateur', 'تخزين قواعد بيانات في المتصفح') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('web-development', 'beginner', 'node', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Code is organized in modules. npm is the package manager: it installs libraries listed in package.json.',
          'Le code s\'organise en modules. npm est le gestionnaire de paquets : il installe les bibliothèques listées dans package.json.',
          'ينظَّم الكود في وحدات (modules). و npm هو مدير الحزم: يثبّت المكتبات المذكورة في package.json.',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// math.js\nexport function double(n) {\n  return n * 2\n}\n\n// app.js\nimport { double } from './math.js'\nconsole.log(double(21)) // 42\n\n// terminal:\n// $ npm install express`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which file lists a project\'s dependencies?',
          'Quel fichier liste les dépendances d\'un projet ?',
          'أي ملف يسرد اعتماديات المشروع؟',
        ),
        choices: [
          { text: L('package.json', 'package.json', 'package.json') },
          { text: L('index.html', 'index.html', 'index.html') },
          { text: L('node.config', 'node.config', 'node.config') },
        ],
        correctIndex: 0,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'What does double(21) print in the code above?',
          'Qu\'affiche double(21) dans le code ci-dessus ?',
          'ماذا تطبع double(21) في الكود أعلاه؟',
        ),
        answer: 42,
      },
    ],
  },
  [lessonKey('web-development', 'beginner', 'node', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A server listens for HTTP requests and sends responses. Node\'s built-in http module can create one in a few lines.',
          'Un serveur écoute des requêtes HTTP et envoie des réponses. Le module http de Node en crée un en quelques lignes.',
          'الخادم يستمع لطلبات HTTP ويرسل ردوداً. وحدة http المدمجة في Node تنشئ خادماً في أسطر قليلة.',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `import http from 'node:http'\n\nconst server = http.createServer((req, res) => {\n  res.end('Ahla bik!')\n})\n\nserver.listen(3000)\n// http://localhost:3000 -> Ahla bik!`,
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'On which port does the server above listen?',
          'Sur quel port écoute le serveur ci-dessus ?',
          'على أي منفذ يستمع الخادم أعلاه؟',
        ),
        answer: 3000,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Put the request lifecycle in order.',
          'Mets le cycle d\'une requête dans l\'ordre.',
          'رتّب دورة حياة الطلب.',
        ),
        steps: [
          L('Browser sends an HTTP request', 'Le navigateur envoie une requête HTTP', 'المتصفح يرسل طلب HTTP'),
          L('Server receives it on a port', 'Le serveur la reçoit sur un port', 'الخادم يستقبله على منفذ'),
          L('Handler builds a response', 'Le handler construit une réponse', 'المعالج يبني الرد'),
          L('Browser displays the result', 'Le navigateur affiche le résultat', 'المتصفح يعرض النتيجة'),
        ],
      },
    ],
  },

  // Intermediate — MongoDB
  [lessonKey('web-development', 'intermediate', 'mongodb', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'MongoDB is the M in MERN: a database that stores JSON-like documents inside collections instead of rows inside tables.',
          'MongoDB est le M de MERN : une base qui stocke des documents type JSON dans des collections, au lieu de lignes dans des tables.',
          'MongoDB هي حرف M في MERN: قاعدة بيانات تخزن مستندات شبيهة بـ JSON داخل مجموعات بدل صفوف داخل جداول.',
        ),
      },
      {
        type: 'code',
        language: 'json',
        code: `// a document in the "students" collection\n{\n  "_id": "66f1a2...",\n  "name": "Khalil",\n  "grade": 9,\n  "subjects": ["math", "physics"]\n}`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'In MongoDB, documents are grouped into…',
          'Dans MongoDB, les documents sont regroupés en…',
          'في MongoDB، تُجمع المستندات في…',
        ),
        choices: [
          { text: L('Collections', 'Collections', 'مجموعات (collections)') },
          { text: L('Tables', 'Tables', 'جداول') },
          { text: L('Sheets', 'Feuilles', 'أوراق') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('web-development', 'intermediate', 'mongodb', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'CRUD = Create, Read, Update, Delete: the four operations every app needs.',
          'CRUD = Create, Read, Update, Delete : les quatre opérations dont toute app a besoin.',
          'CRUD = إنشاء، قراءة، تحديث، حذف: العمليات الأربع التي يحتاجها كل تطبيق.',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `await db.students.insertOne({ name: 'Nour', grade: 7 }) // Create\nawait db.students.find({ grade: 7 })                     // Read\nawait db.students.updateOne(\n  { name: 'Nour' },\n  { $set: { grade: 8 } },\n)                                                         // Update\nawait db.students.deleteOne({ name: 'Nour' })            // Delete`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which method changes an existing document?',
          'Quelle méthode modifie un document existant ?',
          'أي دالة تعدّل مستنداً موجوداً؟',
        ),
        choices: [
          { text: L('insertOne', 'insertOne', 'insertOne') },
          { text: L('updateOne', 'updateOne', 'updateOne') },
          { text: L('find', 'find', 'find') },
        ],
        correctIndex: 1,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the letters of CRUD by meaning.',
          'Ordonne les lettres de CRUD par signification.',
          'رتّب حروف CRUD حسب معناها.',
        ),
        steps: [
          L('Create — insert new data', 'Create — insérer des données', 'Create — إنشاء بيانات جديدة'),
          L('Read — query data', 'Read — lire des données', 'Read — قراءة البيانات'),
          L('Update — modify data', 'Update — modifier des données', 'Update — تحديث البيانات'),
          L('Delete — remove data', 'Delete — supprimer des données', 'Delete — حذف البيانات'),
        ],
      },
    ],
  },
  [lessonKey('web-development', 'intermediate', 'mongodb', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Data modeling decides how documents are shaped. Embed data that is read together; reference data that is shared or grows without limit.',
          'La modélisation décide de la forme des documents. Intègre les données lues ensemble ; référence les données partagées ou qui grandissent sans limite.',
          'نمذجة البيانات تحدد شكل المستندات. ضمّن البيانات التي تُقرأ معاً؛ وأشر بمرجع إلى البيانات المشتركة أو المتزايدة بلا حد.',
        ),
      },
      {
        type: 'code',
        language: 'json',
        code: `// Embedded: address always loads with the student\n{ "name": "Rim", "address": { "city": "Sfax" } }\n\n// Referenced: many students share one class\n{ "name": "Rim", "classId": "cls_42" }`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A student has thousands of activity logs. Embed or reference?',
          'Un élève a des milliers de journaux d\'activité. Intégrer ou référencer ?',
          'لتلميذ آلاف سجلات النشاط. تضمين أم مرجع؟',
        ),
        choices: [
          {
            text: L('Reference', 'Référencer', 'مرجع'),
            explanation: L(
              'Unbounded lists should live in their own collection.',
              'Les listes sans limite doivent avoir leur propre collection.',
              'القوائم غير المحدودة يجب أن تكون في مجموعة خاصة بها.',
            ),
          },
          { text: L('Embed', 'Intégrer', 'تضمين') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Intermediate — Express
  [lessonKey('web-development', 'intermediate', 'express', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Express is the E in MERN: a small framework on top of Node that maps URLs to handler functions (routes).',
          'Express est le E de MERN : un petit framework sur Node qui associe des URL à des fonctions (routes).',
          'Express هي حرف E في MERN: إطار صغير فوق Node يربط عناوين URL بدوال معالجة (مسارات).',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `import express from 'express'\nconst app = express()\n\napp.get('/', (req, res) => res.send('Home'))\napp.get('/students/:id', (req, res) => {\n  res.send('Student ' + req.params.id)\n})\n\napp.listen(3000)`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Visiting /students/7 responds with…',
          'Visiter /students/7 répond…',
          'زيارة ‎/students/7‎ تعيد…',
        ),
        choices: [
          { text: L('Student 7', 'Student 7', 'Student 7') },
          { text: L('Home', 'Home', 'Home') },
          { text: L('404', '404', '404') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('web-development', 'intermediate', 'express', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Middleware are functions that run before your route handler: parsing JSON, logging, checking authentication.',
          'Les middlewares sont des fonctions exécutées avant le handler : parser le JSON, journaliser, vérifier l\'authentification.',
          'الوسيطات (middleware) دوال تعمل قبل معالج المسار: تحليل JSON، التسجيل، والتحقق من الهوية.',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `app.use(express.json()) // parse JSON bodies\n\napp.use((req, res, next) => {\n  console.log(req.method, req.url)\n  next() // pass control to the next handler\n})`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does next() do in a middleware?',
          'Que fait next() dans un middleware ?',
          'ماذا تفعل next()‎ في الوسيط؟',
        ),
        choices: [
          {
            text: L(
              'Passes the request to the next handler',
              'Passe la requête au handler suivant',
              'تمرر الطلب إلى المعالج التالي',
            ),
          },
          { text: L('Ends the response', 'Termine la réponse', 'تنهي الرد') },
          { text: L('Restarts the server', 'Redémarre le serveur', 'تعيد تشغيل الخادم') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('web-development', 'intermediate', 'express', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'A REST API exposes data over HTTP verbs: GET reads, POST creates, PUT updates, DELETE removes. Express + MongoDB is a classic pair.',
          'Une API REST expose des données via les verbes HTTP : GET lit, POST crée, PUT met à jour, DELETE supprime. Express + MongoDB est un duo classique.',
          'واجهة REST تعرض البيانات عبر أفعال HTTP: GET تقرأ، POST تنشئ، PUT تحدّث، DELETE تحذف. Express مع MongoDB ثنائي كلاسيكي.',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `app.get('/api/students', async (req, res) => {\n  res.json(await db.students.find().toArray())\n})\n\napp.post('/api/students', async (req, res) => {\n  const created = await db.students.insertOne(req.body)\n  res.status(201).json(created)\n})`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Which HTTP verb creates a new resource?',
          'Quel verbe HTTP crée une nouvelle ressource ?',
          'أي فعل HTTP ينشئ مورداً جديداً؟',
        ),
        choices: [
          { text: L('GET', 'GET', 'GET') },
          { text: L('POST', 'POST', 'POST') },
          { text: L('DELETE', 'DELETE', 'DELETE') },
        ],
        correctIndex: 1,
      },
      {
        type: 'numericInput',
        id: 'ex2',
        prompt: L(
          'Which status code does the POST route above return?',
          'Quel code de statut retourne la route POST ci-dessus ?',
          'ما رمز الحالة الذي يعيده مسار POST أعلاه؟',
        ),
        answer: 201,
      },
    ],
  },

  // Advanced — React
  [lessonKey('web-development', 'advanced', 'react', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'React is the R in MERN: a library for building user interfaces from components. JSX lets you write HTML-like markup in JavaScript.',
          'React est le R de MERN : une bibliothèque pour construire des interfaces avec des composants. JSX permet d\'écrire un balisage type HTML en JavaScript.',
          'React هي حرف R في MERN: مكتبة لبناء الواجهات من مكوّنات. و JSX تتيح كتابة وسوم شبيهة بـ HTML داخل JavaScript.',
        ),
      },
      {
        type: 'code',
        language: 'jsx',
        code: `function Welcome({ name }) {\n  return <h1>Ahla, {name}!</h1>\n}\n\n<Welcome name="Meriem" />\n// renders: <h1>Ahla, Meriem!</h1>`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'A React component is essentially…',
          'Un composant React est essentiellement…',
          'مكوّن React هو في جوهره…',
        ),
        choices: [
          {
            text: L(
              'A function that returns UI',
              'Une fonction qui retourne de l\'UI',
              'دالة تعيد واجهة',
            ),
          },
          { text: L('A database table', 'Une table de base de données', 'جدول قاعدة بيانات') },
          { text: L('A CSS file', 'Un fichier CSS', 'ملف CSS') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('web-development', 'advanced', 'react', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Props flow data down from parent to child. State is data a component owns and can change; changing it re-renders the UI.',
          'Les props font descendre les données du parent vers l\'enfant. Le state appartient au composant et peut changer ; le modifier re-rend l\'UI.',
          'الـ props تمرر البيانات من الأب إلى الابن. والـ state بيانات يملكها المكوّن ويغيّرها؛ وتغييره يعيد رسم الواجهة.',
        ),
      },
      {
        type: 'code',
        language: 'jsx',
        code: `function Counter() {\n  const [count, setCount] = useState(0)\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      {count}\n    </button>\n  )\n}`,
      },
      {
        type: 'numericInput',
        id: 'ex1',
        prompt: L(
          'The Counter starts at 0. What does it show after 3 clicks?',
          'Le Counter démarre à 0. Qu\'affiche-t-il après 3 clics ?',
          'يبدأ العداد من 0. ماذا يعرض بعد 3 نقرات؟',
        ),
        answer: 3,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Who can change a component\'s props?',
          'Qui peut changer les props d\'un composant ?',
          'من يستطيع تغيير props المكوّن؟',
        ),
        choices: [
          {
            text: L('Its parent', 'Son parent', 'المكوّن الأب'),
            explanation: L(
              'Props are read-only inside the component.',
              'Les props sont en lecture seule dans le composant.',
              'الـ props للقراءة فقط داخل المكوّن.',
            ),
          },
          { text: L('The component itself', 'Le composant lui-même', 'المكوّن نفسه') },
        ],
        correctIndex: 0,
      },
    ],
  },
  [lessonKey('web-development', 'advanced', 'react', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Hooks add powers to function components. useEffect runs side effects — like fetching data from your Express API — after render.',
          'Les hooks ajoutent des pouvoirs aux composants. useEffect exécute des effets — comme récupérer des données de ton API Express — après le rendu.',
          'الـ hooks تضيف قدرات للمكوّنات. useEffect تنفّذ التأثيرات الجانبية — مثل جلب البيانات من واجهة Express — بعد الرسم.',
        ),
      },
      {
        type: 'code',
        language: 'jsx',
        code: `function Students() {\n  const [students, setStudents] = useState([])\n\n  useEffect(() => {\n    fetch('/api/students')\n      .then((res) => res.json())\n      .then(setStudents)\n  }, [])\n\n  return (\n    <ul>\n      {students.map((s) => <li key={s._id}>{s.name}</li>)}\n    </ul>\n  )\n}`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'What does the empty [] dependency array mean?',
          'Que signifie le tableau de dépendances vide [] ?',
          'ماذا تعني مصفوفة الاعتماديات الفارغة []؟',
        ),
        choices: [
          {
            text: L(
              'The effect runs once after the first render',
              'L\'effet s\'exécute une fois après le premier rendu',
              'يعمل التأثير مرة واحدة بعد أول رسم',
            ),
          },
          { text: L('The effect runs on every render', 'L\'effet s\'exécute à chaque rendu', 'يعمل التأثير عند كل رسم') },
          { text: L('The effect never runs', 'L\'effet ne s\'exécute jamais', 'لا يعمل التأثير أبداً') },
        ],
        correctIndex: 0,
      },
    ],
  },

  // Advanced — Full-stack MERN
  [lessonKey('web-development', 'advanced', 'fullstack', '01')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'In a MERN app the React front end calls the Express API with fetch; Express reads and writes MongoDB; JSON travels both ways.',
          'Dans une app MERN, le front React appelle l\'API Express avec fetch ; Express lit et écrit MongoDB ; le JSON circule dans les deux sens.',
          'في تطبيق MERN تستدعي واجهة React واجهة Express عبر fetch؛ و Express تقرأ وتكتب MongoDB؛ و JSON يسافر في الاتجاهين.',
        ),
      },
      {
        type: 'list',
        items: [
          L('React (UI) → fetch → Express (API).', 'React (UI) → fetch → Express (API).', 'React (الواجهة) ← fetch ← Express (الواجهة الخلفية).'),
          L('Express → driver → MongoDB (data).', 'Express → driver → MongoDB (données).', 'Express ← المشغّل ← MongoDB (البيانات).'),
          L('Everything speaks JSON and JavaScript.', 'Tout parle JSON et JavaScript.', 'الكل يتحدث JSON و JavaScript.'),
        ],
      },
      {
        type: 'orderSteps',
        id: 'ex1',
        prompt: L(
          'Order the flow when a user adds a student in the UI.',
          'Ordonne le flux quand un utilisateur ajoute un élève dans l\'UI.',
          'رتّب المسار عندما يضيف المستخدم تلميذاً من الواجهة.',
        ),
        steps: [
          L('React sends POST /api/students', 'React envoie POST /api/students', 'React ترسل POST /api/students'),
          L('Express validates the request body', 'Express valide le corps de la requête', 'Express تتحقق من جسم الطلب'),
          L('MongoDB stores the document', 'MongoDB stocke le document', 'MongoDB تخزن المستند'),
          L('React updates the list from the response', 'React met à jour la liste depuis la réponse', 'React تحدّث القائمة من الرد'),
        ],
      },
    ],
  },
  [lessonKey('web-development', 'advanced', 'fullstack', '02')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Authentication proves who the user is. The common MERN pattern: hash passwords with bcrypt, then issue a JWT the client sends with each request.',
          'L\'authentification prouve qui est l\'utilisateur. Le schéma MERN courant : hacher les mots de passe avec bcrypt, puis émettre un JWT que le client envoie à chaque requête.',
          'المصادقة تثبت هوية المستخدم. النمط الشائع في MERN: تشفير كلمات المرور بـ bcrypt ثم إصدار JWT يرسله العميل مع كل طلب.',
        ),
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// login route (simplified)\nconst user = await db.users.findOne({ email })\nconst ok = await bcrypt.compare(password, user.passwordHash)\nif (!ok) return res.status(401).end()\n\nconst token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET)\nres.json({ token })`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Why store a password hash instead of the password?',
          'Pourquoi stocker un hash au lieu du mot de passe ?',
          'لماذا نخزن تجزئة كلمة المرور بدل الكلمة نفسها؟',
        ),
        choices: [
          {
            text: L(
              'A leak does not reveal real passwords',
              'Une fuite ne révèle pas les vrais mots de passe',
              'التسريب لا يكشف كلمات المرور الحقيقية',
            ),
          },
          { text: L('Hashes take less space', 'Les hashs prennent moins de place', 'التجزئات أصغر حجماً') },
          { text: L('Hashes load faster', 'Les hashs se chargent plus vite', 'التجزئات أسرع تحميلاً') },
        ],
        correctIndex: 0,
      },
      {
        type: 'mcq',
        id: 'ex2',
        prompt: L(
          'Which status code fits a wrong password?',
          'Quel code de statut convient à un mauvais mot de passe ?',
          'أي رمز حالة يناسب كلمة مرور خاطئة؟',
        ),
        choices: [
          { text: L('200', '200', '200') },
          { text: L('401', '401', '401') },
          { text: L('301', '301', '301') },
        ],
        correctIndex: 1,
      },
    ],
  },
  [lessonKey('web-development', 'advanced', 'fullstack', '03')]: {
    blocks: [
      {
        type: 'paragraph',
        text: L(
          'Deployment puts your app online: build the React front end into static files, run the Express API on a server, and use a hosted MongoDB (Atlas). Secrets live in environment variables.',
          'Le déploiement met l\'app en ligne : compiler le front React en fichiers statiques, exécuter l\'API Express sur un serveur, utiliser un MongoDB hébergé (Atlas). Les secrets vont dans des variables d\'environnement.',
          'النشر يضع تطبيقك على الإنترنت: ابنِ واجهة React كملفات ثابتة، وشغّل واجهة Express على خادم، واستخدم MongoDB مستضافاً (Atlas). والأسرار توضع في متغيرات البيئة.',
        ),
      },
      {
        type: 'code',
        language: 'bash',
        code: `# front end\nnpm run build        # outputs static files in dist/\n\n# back end\nMONGO_URL=... JWT_SECRET=... node server.js`,
      },
      {
        type: 'mcq',
        id: 'ex1',
        prompt: L(
          'Where should the database password live in production?',
          'Où doit vivre le mot de passe de la base en production ?',
          'أين يجب أن توضع كلمة مرور قاعدة البيانات في الإنتاج؟',
        ),
        choices: [
          {
            text: L(
              'In an environment variable',
              'Dans une variable d\'environnement',
              'في متغير بيئة',
            ),
          },
          { text: L('In the React code', 'Dans le code React', 'في كود React') },
          { text: L('In a public GitHub file', 'Dans un fichier GitHub public', 'في ملف عام على GitHub') },
        ],
        correctIndex: 0,
      },
      {
        type: 'orderSteps',
        id: 'ex2',
        prompt: L(
          'Order the deployment steps.',
          'Ordonne les étapes de déploiement.',
          'رتّب خطوات النشر.',
        ),
        steps: [
          L('Create the MongoDB Atlas cluster', 'Créer le cluster MongoDB Atlas', 'أنشئ عنقود MongoDB Atlas'),
          L('Deploy the Express API with env vars', 'Déployer l\'API Express avec les variables d\'env', 'انشر واجهة Express مع متغيرات البيئة'),
          L('Build and host the React front end', 'Compiler et héberger le front React', 'ابنِ واستضف واجهة React'),
          L('Test the live app end to end', 'Tester l\'app en ligne de bout en bout', 'اختبر التطبيق المنشور من البداية للنهاية'),
        ],
      },
    ],
  },
}
