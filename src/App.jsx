import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from "./components/Footer.jsx";

import ECommercePage from "./components/ECommercePage.jsx";
import EServicesPage from "./components/EServicesPage.jsx";


function App() {
    return (
        <Router>
            <Navbar />
            <main style={{flex: 1}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/e_commerce" element={<ECommercePage/>}/>
                    <Route path="/e_services" element={<EServicesPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    )
}

export default App;