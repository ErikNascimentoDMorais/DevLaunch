import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
