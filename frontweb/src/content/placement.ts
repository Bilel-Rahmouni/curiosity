import { localized as L, type LocalizedText } from './types'
import type { SubjectSlug } from '../data/curriculum'

export type PlacementQuestion = {
  prompt: LocalizedText
  choices: LocalizedText[]
  correctIndex: number
}

export type PlacementLevel = {
  levelSlug: string
  questions: PlacementQuestion[]
}

export type PlacementSet = {
  subjectSlug: SubjectSlug
  levels: PlacementLevel[]
}

/** A level is passed when at least PASS_THRESHOLD answers are correct. */
export const PASS_THRESHOLD = 2

export const placementSets: PlacementSet[] = [
  {
    subjectSlug: 'mathematics',
    levels: [
      {
        levelSlug: 'primary',
        questions: [
          {
            prompt: L('What is 7 + 5?', 'Combien font 7 + 5 ?', 'كم يساوي 7 + 5؟'),
            choices: [L('11', '11', '11'), L('12', '12', '12'), L('13', '13', '13')],
            correctIndex: 1,
          },
          {
            prompt: L('What is 3 × 4?', 'Combien font 3 × 4 ?', 'كم يساوي 3 × 4؟'),
            choices: [L('7', '7', '7'), L('12', '12', '12'), L('9', '9', '9')],
            correctIndex: 1,
          },
          {
            prompt: L(
              'Which fraction is bigger?',
              'Quelle fraction est la plus grande ?',
              'أي كسر أكبر؟',
            ),
            choices: [L('1/2', '1/2', '1/2'), L('3/4', '3/4', '3/4'), L('1/4', '1/4', '1/4')],
            correctIndex: 1,
          },
        ],
      },
      {
        levelSlug: 'middle',
        questions: [
          {
            prompt: L(
              'Solve 2x + 3 = 11. What is x?',
              'Résous 2x + 3 = 11. Que vaut x ?',
              'حل المعادلة 2س + 3 = 11. ما قيمة س؟',
            ),
            choices: [L('3', '3', '3'), L('4', '4', '4'), L('7', '7', '7')],
            correctIndex: 1,
          },
          {
            prompt: L(
              'What is (−2) × (−3)?',
              'Combien font (−2) × (−3) ?',
              'كم يساوي (−2) × (−3)؟',
            ),
            choices: [L('−6', '−6', '−6'), L('6', '6', '6'), L('−5', '−5', '−5')],
            correctIndex: 1,
          },
          {
            prompt: L(
              'What is 25% of 80?',
              'Combien font 25 % de 80 ?',
              'كم يساوي 25% من 80؟',
            ),
            choices: [L('15', '15', '15'), L('20', '20', '20'), L('25', '25', '25')],
            correctIndex: 1,
          },
        ],
      },
      {
        levelSlug: 'high',
        questions: [
          {
            prompt: L(
              'What is the derivative of x²?',
              'Quelle est la dérivée de x² ?',
              'ما مشتقة س²؟',
            ),
            choices: [L('x', 'x', 'س'), L('2x', '2x', '2س'), L('x²/2', 'x²/2', 'س²/2')],
            correctIndex: 1,
          },
          {
            prompt: L(
              'The solutions of x² − 5x + 6 = 0 are:',
              'Les solutions de x² − 5x + 6 = 0 sont :',
              'حلول المعادلة س² − 5س + 6 = 0 هي:',
            ),
            choices: [
              L('2 and 3', '2 et 3', '2 و3'),
              L('1 and 6', '1 et 6', '1 و6'),
              L('−2 and −3', '−2 et −3', '−2 و−3'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              'What is the limit of 1/x as x → +∞?',
              'Quelle est la limite de 1/x quand x → +∞ ?',
              'ما نهاية 1/س عندما س ← +∞؟',
            ),
            choices: [L('0', '0', '0'), L('1', '1', '1'), L('+∞', '+∞', '+∞')],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    subjectSlug: 'english',
    levels: [
      {
        levelSlug: 'beginner',
        questions: [
          {
            prompt: L(
              '"She ___ a student."',
              '« She ___ a student. »',
              '"She ___ a student."',
            ),
            choices: [L('is', 'is', 'is'), L('are', 'are', 'are'), L('am', 'am', 'am')],
            correctIndex: 0,
          },
          {
            prompt: L(
              'What is the plural of "child"?',
              'Quel est le pluriel de « child » ?',
              'ما جمع كلمة "child"؟',
            ),
            choices: [
              L('childs', 'childs', 'childs'),
              L('children', 'children', 'children'),
              L('childes', 'childes', 'childes'),
            ],
            correctIndex: 1,
          },
          {
            prompt: L(
              'What is the opposite of "big"?',
              'Quel est le contraire de « big » ?',
              'ما عكس كلمة "big"؟',
            ),
            choices: [
              L('small', 'small', 'small'),
              L('tall', 'tall', 'tall'),
              L('old', 'old', 'old'),
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        levelSlug: 'intermediate',
        questions: [
          {
            prompt: L(
              'What is the past tense of "go"?',
              'Quel est le prétérit de « go » ?',
              'ما الماضي من "go"؟',
            ),
            choices: [
              L('goed', 'goed', 'goed'),
              L('went', 'went', 'went'),
              L('gone', 'gone', 'gone'),
            ],
            correctIndex: 1,
          },
          {
            prompt: L(
              '"I have lived here ___ 2010."',
              '« I have lived here ___ 2010. »',
              '"I have lived here ___ 2010."',
            ),
            choices: [
              L('for', 'for', 'for'),
              L('since', 'since', 'since'),
              L('from', 'from', 'from'),
            ],
            correctIndex: 1,
          },
          {
            prompt: L(
              'Which sentence is correct?',
              'Quelle phrase est correcte ?',
              'أي جملة صحيحة؟',
            ),
            choices: [
              L(
                'He doesn\'t like coffee.',
                'He doesn\'t like coffee.',
                'He doesn\'t like coffee.',
              ),
              L(
                'He don\'t likes coffee.',
                'He don\'t likes coffee.',
                'He don\'t likes coffee.',
              ),
              L(
                'He doesn\'t likes coffee.',
                'He doesn\'t likes coffee.',
                'He doesn\'t likes coffee.',
              ),
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        levelSlug: 'advanced',
        questions: [
          {
            prompt: L(
              '"If I ___ rich, I would travel the world."',
              '« If I ___ rich, I would travel the world. »',
              '"If I ___ rich, I would travel the world."',
            ),
            choices: [
              L('was', 'was', 'was'),
              L('were', 'were', 'were'),
              L('am', 'am', 'am'),
            ],
            correctIndex: 1,
          },
          {
            prompt: L(
              'Which word is closest to "reluctant"?',
              'Quel mot est le plus proche de « reluctant » ?',
              'أي كلمة أقرب إلى "reluctant"؟',
            ),
            choices: [
              L('unwilling', 'unwilling', 'unwilling'),
              L('eager', 'eager', 'eager'),
              L('careless', 'careless', 'careless'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              'Which is the passive form of "She wrote the book"?',
              'Quelle est la forme passive de « She wrote the book » ?',
              'ما صيغة المبني للمجهول لجملة "She wrote the book"؟',
            ),
            choices: [
              L(
                'The book was written by her.',
                'The book was written by her.',
                'The book was written by her.',
              ),
              L(
                'The book is written by her.',
                'The book is written by her.',
                'The book is written by her.',
              ),
              L(
                'The book has written by her.',
                'The book has written by her.',
                'The book has written by her.',
              ),
            ],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    subjectSlug: 'french',
    levels: [
      {
        levelSlug: 'beginner',
        questions: [
          {
            prompt: L(
              'Which article goes with "maison"?',
              'Quel article accompagne « maison » ?',
              'أي أداة تعريف تناسب "maison"؟',
            ),
            choices: [L('le', 'le', 'le'), L('la', 'la', 'la'), L('les', 'les', 'les')],
            correctIndex: 1,
          },
          {
            prompt: L(
              '"Je ___ tunisien."',
              '« Je ___ tunisien. »',
              '"Je ___ tunisien."',
            ),
            choices: [
              L('suis', 'suis', 'suis'),
              L('es', 'es', 'es'),
              L('est', 'est', 'est'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              'What is the plural of "cheval"?',
              'Quel est le pluriel de « cheval » ?',
              'ما جمع كلمة "cheval"؟',
            ),
            choices: [
              L('chevals', 'chevals', 'chevals'),
              L('chevaux', 'chevaux', 'chevaux'),
              L('chevales', 'chevales', 'chevales'),
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        levelSlug: 'intermediate',
        questions: [
          {
            prompt: L(
              'Passé composé: "Je ___ au marché."',
              'Passé composé : « Je ___ au marché. »',
              'الماضي المركب: "Je ___ au marché."',
            ),
            choices: [
              L('suis allé', 'suis allé', 'suis allé'),
              L('ai allé', 'ai allé', 'ai allé'),
              L('vais allé', 'vais allé', 'vais allé'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              '"___ que tu viennes demain."',
              '« ___ que tu viennes demain. »',
              '"___ que tu viennes demain."',
            ),
            choices: [
              L('Il faut', 'Il faut', 'Il faut'),
              L('Il doit', 'Il doit', 'Il doit'),
              L('Il a', 'Il a', 'Il a'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              '"Tu vois Karim ? — Oui, je ___ vois."',
              '« Tu vois Karim ? — Oui, je ___ vois. »',
              '"Tu vois Karim ? — Oui, je ___ vois."',
            ),
            choices: [L('le', 'le', 'le'), L('lui', 'lui', 'lui'), L('la', 'la', 'la')],
            correctIndex: 0,
          },
        ],
      },
      {
        levelSlug: 'advanced',
        questions: [
          {
            prompt: L(
              'Subjunctive: "Bien qu\'il ___ tard, il travaille."',
              'Subjonctif : « Bien qu\'il ___ tard, il travaille. »',
              'صيغة الشرط: "Bien qu\'il ___ tard, il travaille."',
            ),
            choices: [
              L('soit', 'soit', 'soit'),
              L('est', 'est', 'est'),
              L('sera', 'sera', 'sera'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              'Which word is closest to "néanmoins"?',
              'Quel mot est le plus proche de « néanmoins » ?',
              'أي كلمة أقرب إلى "néanmoins"؟',
            ),
            choices: [
              L('cependant', 'cependant', 'cependant'),
              L('ensuite', 'ensuite', 'ensuite'),
              L('partout', 'partout', 'partout'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              '"Si j\'avais su, je ___ venu."',
              '« Si j\'avais su, je ___ venu. »',
              '"Si j\'avais su, je ___ venu."',
            ),
            choices: [
              L('serais', 'serais', 'serais'),
              L('serai', 'serai', 'serai'),
              L('suis', 'suis', 'suis'),
            ],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    subjectSlug: 'arabic',
    levels: [
      {
        levelSlug: 'beginner',
        questions: [
          {
            prompt: L(
              'Is the word "شمس" masculine or feminine?',
              'Le mot « شمس » est-il masculin ou féminin ?',
              'هل كلمة "شمس" مذكر أم مؤنث؟',
            ),
            choices: [
              L('Masculine', 'Masculin', 'مذكر'),
              L('Feminine', 'Féminin', 'مؤنث'),
            ],
            correctIndex: 1,
          },
          {
            prompt: L(
              'What is the plural of "كتاب"?',
              'Quel est le pluriel de « كتاب » ?',
              'ما جمع كلمة "كتاب"؟',
            ),
            choices: [L('كتب', 'كتب', 'كتب'), L('كاتبون', 'كاتبون', 'كاتبون'), L('كتائب', 'كتائب', 'كتائب')],
            correctIndex: 0,
          },
          {
            prompt: L(
              'What is the opposite of "كبير"?',
              'Quel est le contraire de « كبير » ?',
              'ما عكس كلمة "كبير"؟',
            ),
            choices: [L('صغير', 'صغير', 'صغير'), L('طويل', 'طويل', 'طويل'), L('قديم', 'قديم', 'قديم')],
            correctIndex: 0,
          },
        ],
      },
      {
        levelSlug: 'intermediate',
        questions: [
          {
            prompt: L(
              'What is the case of the subject (الفاعل) in Arabic?',
              'Quel est le cas du sujet (الفاعل) en arabe ?',
              'ما إعراب الفاعل؟',
            ),
            choices: [
              L('Nominative (مرفوع)', 'Nominatif (مرفوع)', 'مرفوع'),
              L('Accusative (منصوب)', 'Accusatif (منصوب)', 'منصوب'),
              L('Genitive (مجرور)', 'Génitif (مجرور)', 'مجرور'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              'What is the broken plural of "قلم"?',
              'Quel est le pluriel brisé de « قلم » ?',
              'ما جمع التكسير لكلمة "قلم"؟',
            ),
            choices: [L('أقلام', 'أقلام', 'أقلام'), L('قلمون', 'قلمون', 'قلمون'), L('قلمات', 'قلمات', 'قلمات')],
            correctIndex: 0,
          },
          {
            prompt: L(
              '"إنّ" makes the subject of the nominal sentence:',
              '« إنّ » met le sujet de la phrase nominale au :',
              '"إنّ" تجعل المبتدأ:',
            ),
            choices: [
              L('Accusative (منصوب)', 'Accusatif (منصوب)', 'منصوباً'),
              L('Nominative (مرفوع)', 'Nominatif (مرفوع)', 'مرفوعاً'),
              L('Genitive (مجرور)', 'Génitif (مجرور)', 'مجروراً'),
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        levelSlug: 'advanced',
        questions: [
          {
            prompt: L(
              'The particle "لم" puts the present-tense verb in the:',
              'La particule « لم » met le verbe au présent en :',
              'حرف "لم" يجعل الفعل المضارع:',
            ),
            choices: [
              L('Jussive (مجزوم)', 'Apocopé (مجزوم)', 'مجزوماً'),
              L('Accusative (منصوب)', 'Accusatif (منصوب)', 'منصوباً'),
              L('Nominative (مرفوع)', 'Nominatif (مرفوع)', 'مرفوعاً'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              'The absolute object (المفعول المطلق) is:',
              'Le complément absolu (المفعول المطلق) est :',
              'المفعول المطلق هو:',
            ),
            choices: [
              L(
                'An accusative verbal noun',
                'Un masdar à l\'accusatif',
                'مصدر منصوب',
              ),
              L('A nominative noun', 'Un nom au nominatif', 'اسم مرفوع'),
              L('A genitive noun', 'Un nom au génitif', 'اسم مجرور'),
            ],
            correctIndex: 0,
          },
          {
            prompt: L(
              'In "أريد أنْ يدرسَ", the verb "يدرسَ" is:',
              'Dans « أريد أنْ يدرسَ », le verbe « يدرسَ » est :',
              'في "أريد أنْ يدرسَ"، الفعل "يدرسَ":',
            ),
            choices: [
              L('Accusative (منصوب)', 'Accusatif (منصوب)', 'منصوب'),
              L('Jussive (مجزوم)', 'Apocopé (مجزوم)', 'مجزوم'),
              L('Nominative (مرفوع)', 'Nominatif (مرفوع)', 'مرفوع'),
            ],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
]
