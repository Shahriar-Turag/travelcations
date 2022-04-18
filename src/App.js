import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import AccountPage from "./Pages/AccountPage/AccountPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/blogs" element={<BlogPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
