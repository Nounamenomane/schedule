import "./App.css";
import Lesson from "./lessons/Lesson";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Расписание уроков 11В класс</h1>
      </div>
      <Lesson
        day="Понедельник"
        lesson2="Русский язык (26)"
        lesson3="История (18)"
        lesson4="Алгебра (19)"
        lesson5="Английский язык (24/36)"
        lesson6="Кыргызский язык (28/34)"
        lesson7="География (15)"
        lesson8="Русская литература (26)"
      />{" "}
      <Lesson
        day="Вторник"
        lesson2="История (15)"
        lesson3="Физическая культура (спортзал)"
        lesson4="Кыргызский язык (28/34)"
        lesson5="Допризывная подготовка (35)"
        lesson6="Допризывная подготовка (35)"
        lesson7="Физика (20)"
        lesson8="Русская литература (26)"
      />{" "}
      <Lesson
        day="Среда"
        lesson1="класс.час"
        lesson2="Кыргызский язык (28/34)"
        lesson3="Русский язык (26)"
        lesson4="Алгебра (19)"
        lesson5="Геометрия (19)"
        lesson6="Физика (20)"
        lesson7="Русская литература (26)"
      />
      <Lesson
        day="Четверг"
        lesson1="Кыргызский язык (28/34)"
        lesson2="Человек и общество ШК (21)"
        lesson3="Физическая культура (спортзал)"
        lesson4="Химия (18)"
        lesson5="Химия (18)"
        lesson6="Информатика (23/19)"
        lesson7="Русский язык (26)"
      />{" "}
      <Lesson
        day="Пятница"
        lesson1="Физика (20)"
        lesson2="Биология (25)"
        lesson3="Человек и общество (21)"
        lesson4="Алгебра (19)"
        lesson5="Английский язык (24/36)"
        lesson6="Финансовая грамотность (27)"
        lesson7="Кыргызская литература (27)"
      />
    </div>
  );
}

export default App;
