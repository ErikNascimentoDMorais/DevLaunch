import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Courses from "../pages/Courses.jsx";
import CourseDetails from "../pages/CourseDetails.jsx";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact.jsx";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <MainLayout>
          <Home />
        </MainLayout>
      }
    />
    <Route
      path="/home"
      element={
        <MainLayout>
          <Home />
        </MainLayout>
      }
    />
    <Route
      path="*"
      element={
        <MainLayout>
          <NotFound />
        </MainLayout>
      }
    />
    <Route
      path="/courses"
      element={
        <MainLayout>
          <Courses />
        </MainLayout>
      }
    />
    <Route
      path="/course/:slug"
      element={
        <MainLayout>
          <CourseDetails />
        </MainLayout>
      }
    />
    <Route
      path="/dashboard"
      element={
        <MainLayout>
          <Dashboard />
        </MainLayout>
      }
    />
    <Route
      path="/contact"
      element={
        <MainLayout>
          <Contact />
        </MainLayout>
      }
    />
  </Routes>
);

export default AppRoutes;
