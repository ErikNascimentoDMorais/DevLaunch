import { useContext, createContext, useEffect, useState } from "react";
import { setItem, getItem } from "../utils/localStorage.js";

export const CourseContext = createContext();

//personalized hook for CourseContext
export const useCourses = () => {
  return useContext(CourseContext);
};

//CourseProvide give context and state for aplication, which resolve problemns of async between state and localStorage
const CourseProvider = ({ children }) => {
  // Passing a function to useState delays the initialization.
  // It runs only on the first render.
  const [userCourses, setUserCourses] = useState(
    () => getItem("courses") || [],
  );

  //Remove elements whit same id
  const cleanUserCourses = (arr) => [...new Set(arr)];

  //useEffect update localStorage after update of state(userCourses)
  useEffect(() => {
    setItem("courses", userCourses);
  }, [userCourses]);

  // prev always contains the most recent state,
  // preventing stale state issues when multiple updates happen.
  const addCourse = (id) => {
    setUserCourses((prev) => cleanUserCourses([...prev, id]));
  };

  //removeCourse of state
  const removeCourse = (id) => {
    setUserCourses((prev) => prev.filter((courseId) => courseId !== id));
  };

  return (
    <CourseContext.Provider
      value={{
        userCourses,
        addCourse,
        removeCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
export default CourseProvider;
