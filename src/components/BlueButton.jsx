import { useCourses } from "../context/CourseContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";

//Default button component
const BlueButton = ({ text = null, id, type }) => {
  const { addCourse } = useCourses();
  const navigate = useNavigate();
  const defaultButtonStyle =
    "bg-blue-600 text-white px-6 text-2xl text-center py-3 rounded-lg hover:font-bold hover:text-3xl";

  if (type == "continue") {
    return (
      <button
        onClick={() =>
          navigate(`/course/${coursesData.find((x) => x.id == id).slug}`)
        }
        className={defaultButtonStyle}
      >
        {text}
      </button>
    );
  } else if (type == "buy") {
    return (
      <button
        className={defaultButtonStyle}
        onClick={() => {
          addCourse(id);
        }}
      >
        {text}
      </button>
    );
  } else {
    return;
  }
};

export default BlueButton;
