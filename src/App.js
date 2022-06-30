import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Calendar from "./Pages/OtherRoute/Calendar";
import CompletedTask from "./Pages/OtherRoute/CompletedTask";
import ToDo from "./Pages/OtherRoute/ToDo";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<CompletedTask></CompletedTask>}></Route>
        <Route path="/" element={<ToDo></ToDo>}></Route>
        <Route path="/" element={<Calendar></Calendar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
