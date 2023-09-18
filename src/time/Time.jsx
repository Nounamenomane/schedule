import css from "./Time.module.css";
function Time() {
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
      {time(1, "7.40 – 8.25")}
      {time(2, "8.30 – 9.15")}
      {time(3, "9.20 – 10.05")}
      {time(4, "10.15 – 11.00")}
      {time(5, "11.05 – 11.50")}
      {time(6, "11.55 – 12.40")}
      {time(7, "12.45 – 13.30")}
      {time(8, "13.40 – 14.25")}
    </div>
  );
}

export default Time;
