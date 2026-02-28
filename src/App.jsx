import MainPage from "./page/MainPage/MainPage.jsx";
import {Router, Route, Routes} from "react-router-dom";
import AboutPage from "./page/AboutPage/AboutPage.jsx";
import PricingPage from "./page/PriciesPage/PricingPage.jsx";
import ProjectPage from "./page/ProjectPage/ProjectPage.jsx";
function App() {

  return (
    <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
    </>
  )
}

export default App
