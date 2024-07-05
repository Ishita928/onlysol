import "./App.css";
import {Route, Routes,useNavigate} from "react-router-dom";
import News from "./pages/News"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fitness from "./pages/Fitness";
import Aibot from "./pages/Aibot";
import ExerciseDetail from "./pages/ExerciseDetail";
import Bmi from "./pages/Bmi";
import "./index.css"

function App() {
  return (
    <div>


<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/news" element={<News/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Fitness" element={<Fitness/>}/>
<Route path="/Bmi" element={<Bmi/>}/>
<Route path="/Fitness/exercise/:id" element={<ExerciseDetail />} />
<Route path="/Aibot" element={<Aibot/>}/>
</Routes>
    </div>

  );
}

export default App;
