import logo from "./logo.svg";
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
        lesson1="Алгебра (19)"
        lesson2="История (15)" 
        lesson3="Допризывная подготовка (35)"
        lesson4="Допризывная подготовка (35)"
        lesson5="Геометрия (19)"
        lesson6="Кыргызская литература (27)"
        lesson7="Кыргызский язык (28/34)"
      />{" "}
      <Lesson
        day="Вторник"
        lesson1="Биология (19)"
        lesson2="Английский язык (24/36)"
        lesson3="Русская литература (26)"
        lesson4="Русский язык (26)"
        lesson5="Английский язык (24/36)"
        lesson6="история (15)"
        lesson7="Кыргызский язык (28/34)"
      />{" "}
      <Lesson
        day="Среда"
        lesson1="класс.час"
        lesson2="Алгебра (19)"
        lesson3="Физика (20)"
        lesson4="География (15)"
        lesson5="Русская литература (26)"
        lesson6="Кыргызский язык (28/34)"
        lesson7="Русский язык (26)"
      />{" "}
      <Lesson
        day="Четверг"
        lesson1="Физика (20)"
        lesson2="Химия (18)"
        lesson3="Алгебра (19)"
        lesson4="Русский язык ШК (26)"
        lesson5="Физическая культура спортзал"
        lesson6="Химия (18)"
        lesson7="Человек и общество (21)"
      />{" "}
      <Lesson
        day="Пятница"
        lesson2="Физическая культура спортзал"
        lesson3="Финансовая грамотность (15)"
        lesson4="Физика (20)"
        lesson5="Геометрия (19)"
        lesson6="Кыргызский язык (28/34)"
        lesson7="Человек и общество (21) ШК"
        lesson8="Русская литература (26)"
      />
    </div>
  );
}

export default App;
