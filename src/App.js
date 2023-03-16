import "./App.css";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <Course
        title="Angular"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
        asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
        dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
      <Course
        title="Bootstrap 5"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
        asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
        dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
      <Course
        title="KompleWeb"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
      asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
      dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
      <Course
        title="Frontend"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
        asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
        dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
    </div>
  );
}

export default App;
