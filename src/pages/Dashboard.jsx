import CourseCard from "../components/CourseCard";
import coursesData from "../data/coursesData";
import { useCourses } from "../context/CourseContext";
import { h1FontSize, h2FontSize, sectionStyle } from "../styles/classes";

//page for show user courses
const Dashboard = () => {
  const { userCourses } = useCourses();
  return (
    <>
      <section className={sectionStyle}>
        <h1 className={h1FontSize}>My Dashboard</h1>
        <h2 className={h2FontSize}>Welcome back!</h2>
        <h2 className={h2FontSize}>Continue where you left off.</h2>
      </section>
      <section className={sectionStyle}>
        <h2 className={h2FontSize}>Courses Enrolled: {userCourses.length}</h2>
      </section>
      <section className={sectionStyle}>
        <h2 className={h2FontSize}>Continue Learning</h2>
        <CourseCard
          isShop={false}
          courses={coursesData.filter((x) => userCourses?.includes(x.id))}
          text={"Continue Learning"}
        />
      </section>
      <section>
        <h2 className={h2FontSize}>Keep learning every day.</h2>
      </section>
    </>
  );
};

export default Dashboard;
