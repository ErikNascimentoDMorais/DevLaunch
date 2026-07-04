//Card Component for Courses
import { cardStyle } from "../styles/classes";
import BlueButton from "./BlueButton";

const CourseCard = ({
  courses,
  isShop,
  text = "buy",
  slug,
  hasButton = true,
}) => {
  return (
    <div className="grid grid-cols-12">
      {courses.map((x) => (
        <div key={x.id} alt={x.name} className={cardStyle}>
          <p className="text-2xl text-slate-800 text-center h-15">{x.name}</p>
          <img src={x.imgSrc} className="h-50" />
          {isShop && (
            <>
              <p className="text-center text-2xl line-through text-slate-500">
                ${x.oldPrice}
              </p>
              {x.isFree && (
                <p className="text-green-600 font-bold text-center text-4xl">
                  Free
                </p>
              )}
            </>
          )}
          {hasButton && (
            <BlueButton
              text={text}
              id={x.id}
              type={isShop ? "buy" : "continue"}
              slug={slug}
            />
          )}
          <i className="mt-4">By {x.instructor}</i>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
