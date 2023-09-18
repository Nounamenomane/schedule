import Time from "../time/Time";
import css from "./Lesson.module.css";
function Lesson(props) {
  return (
    <div className={css.schedule}>
      <div className={css.week}>
        <h2>{props.day}</h2>
      </div>
      <div className={css.lessons}>
        <Time />
        <div className={css.lesson}>
          <h3>{props.lesson1}</h3>
          <h3>{props.lesson2}</h3>
          <h3>{props.lesson3}</h3>
          <h3>{props.lesson4}</h3>
          <h3>{props.lesson5}</h3>
          <h3>{props.lesson6}</h3>
          <h3>{props.lesson7}</h3>
          <h3>{props.lesson8}</h3>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
