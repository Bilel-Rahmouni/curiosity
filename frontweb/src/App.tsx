import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell/AppShell'
import { AuthProvider } from './auth/AuthProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import { RequireRole } from './auth/RequireRole'
import { ProgressProvider } from './progress/ProgressProvider'
import { SubscriptionProvider } from './billing/SubscriptionProvider'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { AccountPage } from './pages/AccountPage/AccountPage'
import { AdminLessonPage } from './pages/AdminLessonPage/AdminLessonPage'
import { AdminPage } from './pages/AdminPage/AdminPage'
import { ClassroomPage } from './pages/ClassroomPage/ClassroomPage'
import { FamilyPage } from './pages/FamilyPage/FamilyPage'
import { HomePage } from './pages/HomePage/HomePage'
import { LearnPage } from './pages/LearnPage/LearnPage'
import { LessonPage } from './pages/LessonPage/LessonPage'
import { LevelPage } from './pages/LevelPage/LevelPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { PathPage } from './pages/PathPage/PathPage'
import { PracticePage } from './pages/PracticePage/PracticePage'
import { PricingPage } from './pages/PricingPage/PricingPage'
import { QuizPage } from './pages/QuizPage/QuizPage'
import { StudentClassPage } from './pages/StudentClassPage/StudentClassPage'
import { CertificatePage } from './pages/CertificatePage/CertificatePage'
import { PlacementPage } from './pages/PlacementPage/PlacementPage'
import { BoardPage } from './pages/BoardPage/BoardPage'
import { SubjectPage } from './pages/SubjectPage/SubjectPage'
import { TeachersPage } from './pages/TeachersPage/TeachersPage'
import { TeachPage } from './pages/TeachPage/TeachPage'
import { UnitPage } from './pages/UnitPage/UnitPage'

export function AppRouter() {
  return (
    <ThemeProvider>
    <AuthProvider>
      <SubscriptionProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<HomePage />} />
              <Route path="learn" element={<LearnPage />} />
              <Route path="learn/:subjectSlug" element={<SubjectPage />} />
              <Route
                path="learn/:subjectSlug/:levelSlug"
                element={<LevelPage />}
              />
              <Route
                path="learn/:subjectSlug/:levelSlug/:unitSlug"
                element={<UnitPage />}
              />
              <Route
                path="learn/:subjectSlug/:levelSlug/:unitSlug/:lessonSlug"
                element={<LessonPage />}
              />
              <Route path="path" element={<PathPage />} />
              <Route path="practice" element={<PracticePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="quiz/:quizId" element={<QuizPage />} />
              <Route path="class/:classroomId" element={<StudentClassPage />} />
              <Route path="certificate/:serial" element={<CertificatePage />} />
              <Route path="placement" element={<PlacementPage />} />
              <Route path="board/:classroomId" element={<BoardPage />} />
              <Route path="teachers" element={<TeachersPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route
                path="teach"
                element={
                  <RequireRole roles={['teacher', 'admin']}>
                    <TeachPage />
                  </RequireRole>
                }
              />
              <Route
                path="teach/:classroomId"
                element={
                  <RequireRole roles={['teacher', 'admin']}>
                    <ClassroomPage />
                  </RequireRole>
                }
              />
              <Route
                path="family"
                element={
                  <RequireRole roles={['parent', 'admin']}>
                    <FamilyPage />
                  </RequireRole>
                }
              />
              <Route
                path="admin"
                element={
                  <RequireRole roles={['admin']}>
                    <AdminPage />
                  </RequireRole>
                }
              />
              <Route
                path="admin/:subjectSlug/:levelSlug/:unitSlug/:lessonSlug"
                element={
                  <RequireRole roles={['admin']}>
                    <AdminLessonPage />
                  </RequireRole>
                }
              />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
      </SubscriptionProvider>
    </AuthProvider>
    </ThemeProvider>
  )
}
