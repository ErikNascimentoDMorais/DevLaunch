import { h1FontSize, h2FontSize, sectionStyle } from "../styles/classes";

const NotFound = () => {
  return (
    <section className={sectionStyle}>
      <h1 className={h1FontSize + " text-center"}>Error 404</h1>
      <h2 className={h2FontSize + " text-center"}>Page Not Found</h2>
    </section>
  );
};

export default NotFound;
