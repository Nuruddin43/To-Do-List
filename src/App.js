import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Calendar from "./Pages/OtherRoute/Calendar";
import CompletedTask from "./Pages/OtherRoute/CompletedTask";
import Login from "./Pages/OtherRoute/Login";
import ToDo from "./Pages/OtherRoute/ToDo";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/completedtask"
          element={<CompletedTask></CompletedTask>}
        ></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="/calendar" element={<Calendar></Calendar>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
