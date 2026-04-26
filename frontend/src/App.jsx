import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./components/guards/AuthGuard.jsx";
import { PublicGuard } from "./components/guards/PublicGuard.jsx";
import { AppLayout } from "./components/layout/AppLayout.jsx";
import {
  Dashboard,
  ResetPassword,  
  Login,
  Signup,
  ResetPasswordAuth,
  ProjectMembers,
  Settings,
  ProjectDetail,
  TaskDetails,
} from "./pages/index.js";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Redirect root to login by default */}
      {/* the replace prop prevents the user from going back to the root path */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public routes - accessible when NOT logged in */}
      <Route element={<PublicGuard />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPasswordAuth />} />
      </Route>

      {/* Protected routes - require authentication */}
      <Route element={<AuthGuard />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/members" element={<ProjectMembers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/projects/:projectId/tasks/:taskId" element={<TaskDetails />} />
        </Route>  
      </Route>

      {/* Catch all - redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;