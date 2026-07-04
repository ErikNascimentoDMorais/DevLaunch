import AppRoutes from "./routes/index.jsx";
import CourseProvider from "./context/CourseContext";

const App = () => {
  return (
    <CourseProvider>
      <AppRoutes />
    </CourseProvider>
  );
};

export default App;
