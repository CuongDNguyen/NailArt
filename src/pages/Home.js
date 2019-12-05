import React from 'react';
import "../styles/Home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div id="bodyPaper" className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3 id="menuTitle">Nail Art Menu</h3>
                    <Link to="/menu">
                        <img id="menuImage" src="./assets/nailart-image.jpg" alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;