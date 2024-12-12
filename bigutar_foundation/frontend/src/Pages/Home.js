import Layout from "../Components/Layout/Layout";
import "../Styles/HomeStyles.css";
export default function Home() {
  return (
    <Layout>
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome</p>
          <h1 className="hero--section--title">
            Bigutar  Development  Foundation Nepal
           
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