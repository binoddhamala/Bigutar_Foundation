import Layout from "../Components/Layout/Layout";
import "../Styles/HomeStyles.css";

/*import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Link } from "react-router-dom";
import "../Styles/HomeStyles.css";
import home from "../Images/home.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${home})` }}>
        <div className="headerContainer">
          <h1>Welcome</h1>
          <p>Bigutar Development Foundation Nepal</p>
          <Link to="/about">
            <button>ABOUT US</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;*/

export default function Home() {
  return (
    <Layout>
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Bigutar</span>{" "}
            <br />
            Development Foundation Nepal
          </h1>
          
        </div>
        <button className="btn btn-primary">About us</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/home.jpg" alt="Hero Section" />
      </div>
    </section>
    </Layout>
  );
}
