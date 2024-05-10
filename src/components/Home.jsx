import React from 'react'
import "../components/home.css"
import SkillSailer from "../assets/SkillSailer.png"
import study from '../assets/study.jpg'
export const Home = () => {
  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className="navbar" id="navi">
        <div className="nav-logo">
          <img src={SkillSailer} alt="img"/>
        </div>
        <div className="nav-items">
          <ul>
            <li><a href="#"><strong>Home</strong> </a></li>
            <li><a href="#"><strong>About</strong> </a></li>
            <li><a href="#"> <strong>Contact</strong> </a></li>
          </ul>
        </div>
        <div className="nav-button">
          <div className="anim-layer" />
          <a>Login / Sign Up</a>
        </div>
      </div>
      <section>
        <div className="homepg">
          <div className="main" id="home">
            <div className="main_content">
              <div className="main_text">
                <h1>Welcome to<br />SkillSailer</h1>
                <p>Empowering students to discover their ideal career paths and connecting them with companies
                  actively seeking their skills.</p>
              </div>
              <div className="main_image">
                <img src={study} alt="" />
              </div>
            </div>
            <br />
            <br />
            <div className="button">
              <a>Take a Quiz</a>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}