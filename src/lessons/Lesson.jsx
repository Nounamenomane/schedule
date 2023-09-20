import Time from "../time/Time";
import WensdayTime from "../time/WensdayTime";
import css from "./Lesson.module.css";
function Lesson(props) {
  return (
    <div className={css.schedule}>
      <div className={css.week}>
        <h2>{props.day}</h2>
      </div>
      <div className={css.lessons}>
        {props.day === "Понедельник" ||
        props.day === "Вторник" ||
        props.day === "Четверг" ||
        props.day === "Пятница" ? (
          <Time timeData={props.timeData} />
        ) : null}
        {props.day === "Среда" ? (
          <WensdayTime timeData={props.timeData} />
        ) : null}
        <div className={css.lesson}>
          <h3>{props.lesson1}</h3>
          <h3 style={props.style1}>{props.lesson2}</h3>
          <h3 style={props.style2}>{props.lesson3}</h3>
          <h3>{props.lesson4}</h3>
          <h3 style={props.style3}>{props.lesson5}</h3>
          <h3>{props.lesson6}</h3>
          <h3>{props.lesson7}</h3>
          <h3>{props.lesson8}</h3>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
