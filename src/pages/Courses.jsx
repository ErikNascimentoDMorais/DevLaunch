import coursesData from "../data/coursesData.js";
import CourseCard from "../components/CourseCard.jsx";
import { h1FontSize, h2FontSize, sectionStyle } from "../styles/classes.js";

//Page for show Courses
const Courses = () => {
  return (
    <>
      <section className={sectionStyle}>
        <h1 className={h1FontSize}>Courses</h1>
        <h2 className={h2FontSize}>Programming Courses</h2>
      </section>
      <section className={sectionStyle}>
        <CourseCard courses={coursesData} isShop={true} />
      </section>
      <section className={sectionStyle}>
        <h2 className={h2FontSize}>8 Courses Available</h2>
        <h2 className={h2FontSize}>100% Free</h2>
      </section>
      <section className="p-5 mb-8">
        <h3 className="my-4 text-xl py-3 font-bold">
          More courses coming soon.
        </h3>
      </section>
    </>
  );
};

export default Courses;
