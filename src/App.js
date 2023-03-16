import "./App.css";
import Course from "./Course";

import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';


function App() {
  return (
    <div className="App">
      <Course
        image = {Angular}
        title="Angular"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
        asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
        dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
      <Course
        image = {Bootstrap}
        title="Bootstrap 5"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
        asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
        dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
      <Course
        image = {Csharp}
        title="KompleWeb"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
      asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
      dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
      <Course
        image = {KompleWeb}
        title="FrontEnd"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus
        asperiores ipsum, nam similique quos, dolores quia vitae, tenetur maiores
        dolore nisi ducimus eum consequuntur iure recusandae enim. Magnam, eius."
      />
    </div>
  );
}

export default App;
