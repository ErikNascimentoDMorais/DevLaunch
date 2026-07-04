import { useParams } from "react-router-dom";
import coursesData from "../data/coursesData";
import { useEffect, useState } from "react";
import { setItem, getItem } from "../utils/localStorage.js";
import { h1FontSize, h2FontSize, sectionStyle } from "../styles/classes.js";

const CourseDetails = ({ courses }) => {
  //lesson index
  const [lesson, setLesson] = useState(0);
  const { slug } = useParams();
  const course = coursesData.find((c) => c.slug == slug);
  const [completedList, setCompletedList] = useState(
    () => getItem(`completedList-${slug}`) || [],
  );
  const playerStyle =
    "bg-slate-200 min-h-40 md:min-h-100 gap-3 p-4 pb-0 dark:border-slate-200 border-slate-800 border-4 my-4 mx-4 flex flex-col justify-center items-center rounded-2xl";

  //length of courses
  const [totalLessons, completedListLength] = [
    course.lessons.length,
    completedList.length,
  ];

  //toggle between complete and incomplete (adding and removing elements from completedList)
  const lessonMark = (l) => {
    if (completedList.includes(l.id)) {
      setCompletedList(completedList.filter((x) => x != l.id));
    } else {
      setCompletedList([...new Set([...completedList, l.id])]);
    }
  };
  useEffect(() => {
    setItem(`completedList-${slug}`, completedList);
  }, [completedList]);
  return (
    <section className="min-h-screen p-3">
      <h1 className="text-xl md:text-2xl font-bold">{course.name}</h1>
      <h1 className={h1FontSize}>{course.lessons[lesson].title}</h1>
      <div className={playerStyle}>
        <p className="text-xl md:text-2xl font-bold text-center">
          Video is currently unavailable
        </p>
      </div>
      <div className={sectionStyle}>
        <h2 className={h2FontSize}>Description</h2>
        <p>{course.lessons[lesson].description}</p>
      </div>
      <p className="tex-xl md:text-2xl font-bold text-center">More Lessons</p>
      <p>
        Completed Lessons : {completedListLength}/{totalLessons}
      </p>
      {course.lessons.map((l) => {
        return (
          <div
            key={l.id}
            className={`gap-3 p-5 pb-0 dark:border-slate-200 border-slate-800 border-4 my-4 mx-4 flex flex-col justify-center items-center rounded-2xl ${
              completedList.includes(l.id)
                ? "bg-green-200 border-green-500 text-slate-950"
                : "bg-slate-200"
            }`}
          >
            <button
              onClick={() => {
                setLesson(l.id - 1);
              }}
            >
              {l.title}
            </button>

            <button
              className="border-slate-200 text-slate-100 bg-slate-800 my-2 p-2 rounded-xl"
              onClick={() => {
                lessonMark(l);
              }}
            >
              {completedList.includes(l.id)
                ? "Mark as Incomplete"
                : "Mark Completed"}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default CourseDetails;
