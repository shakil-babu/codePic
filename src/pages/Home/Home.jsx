import React from "react";
import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <section className="home-area">
          <Header />
          <Body />
        </section>
      </div>
    </>
  );
};

export default Home;
