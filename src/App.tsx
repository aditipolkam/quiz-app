import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateQuiz from "./components/CreateQuiz";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
