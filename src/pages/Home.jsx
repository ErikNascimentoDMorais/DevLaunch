import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/coursesData";
import { buttonStyle, h2FontSize, sectionStyle } from "../styles/classes";
const Home = () => {
  const popularCourses = coursesData.slice(0, 4);
  return (
    <section className="min-h-screen p-3">
      <section className={sectionStyle}>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Welcome to DevLaunch
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold">
          Learn skills. Build your future.
        </h2>
        <h2 className={h2FontSize}>
          High-quality programming courses to boost your career.
        </h2>
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to={"/courses"}
            className="bg-blue-600 text-white px-6 mt-10 py-3 rounded-lg hover:font-bold text-center"
          >
            Explore Courses
          </Link>
          <Link
            to={"/dashboard"}
            className="bg-blue-600 text-white px-6 mt-10 py-3 rounded-lg hover:font-bold text-center"
          >
            My Dashboard
          </Link>
        </div>
      </section>
      <section className={sectionStyle}>
        <h2 className={h2FontSize}>Featured Courses</h2>
        <CourseCard
          courses={popularCourses}
          isShop={true}
          slug={""}
          text={""}
          hasButton={""}
        />
      </section>
      <section className={sectionStyle}>
        <h2 className={h2FontSize}>Why choose DevLaunch?</h2>
        <ul className="mt-4 font-bold text-lg">
          <li>✓ Hands-on learning</li>
          <li>✓ Free programming courses</li>
          <li>✓ Track your learning progress</li>
        </ul>
      </section>
      <h3 className="mt-4 font-bold text-xl text-center">
        Ready to start learning?
      </h3>
      <section className="mt-6 flex gap-4 justify-center">
        <Link to={"/courses"} className={buttonStyle}>
          Browse All Courses
        </Link>
      </section>
    </section>
  );
};

export default Home;
