import React from "react";
import Blogs from "../../Components/Constant/Blogs/Blogs";
import Header from "../../Components/Constant/Header/Header";
import Services from "../../Components/Constant/Services/Services";

const Home = () => {
    return (
        <div className="page">
            <Header />
            <Services />
            <Blogs />
        </div>
    );
};

export default Home;
