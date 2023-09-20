import css from "./Time.module.css";

function WensdayTime(props) {
  const time = (number, time) => {
    return (
      <div className={css.time_number}>
        <h3 className={css.number}>{number}</h3>
        <h3 className={css.time}>{time}</h3>
      </div>
    );
  };

  return (
    <div className={css.times}>
      {time(1, "7.40 – 08.10")}
      {time(2, "08.15 – 08.55")}
      {time(3, "09.00 – 09.40")}
      {time(4, "09.45 – 10.25")}
      {time(5, "10.30 – 11.10")}
      {time(6, "11.55 – 12.40")}
      {time(7, "12.00 – 12.40")}
      {time(8, "12.45 – 13.25")}
    </div>
  );
}

export default WensdayTime;
