import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit enim tenetur temporibus quis qui. Sit officia accusantium nostrum? Iste!
    </Header>


    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam nihil nam iste accusamus deserunt perferendis explicabo repudiandae eaque sint vero nisi quibusdam dolor, alias, quaerat dolores? Pariatur eum doloremque accusamus minus tenetur quidem quaerat, quasi distinctio, facere debitis exercitationem.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora quo consequuntur laborum delectus voluptate maiores exercitationem deserunt doloribus, accusamus soluta maxime deleniti nulla est harum amet nam perspiciatis fuga!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati aspernatur hic reiciendis, impedit itaque minus quo tempora quasi inventore.</p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam nihil nam iste accusamus deserunt perferendis explicabo repudiandae eaque sint vero nisi quibusdam dolor, alias, quaerat dolores? Pariatur eum doloremque accusamus minus tenetur quidem quaerat, quasi distinctio, facere debitis exercitationem.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora quo consequuntur laborum delectus voluptate maiores exercitationem deserunt doloribus, accusamus soluta maxime deleniti nulla est harum amet nam perspiciatis fuga!</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Vision Image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="mission Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam nihil nam iste accusamus deserunt perferendis explicabo repudiandae eaque sint vero nisi quibusdam dolor, alias, quaerat dolores? Pariatur eum doloremque accusamus minus tenetur quidem quaerat, quasi distinctio, facere debitis exercitationem.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora quo consequuntur laborum delectus voluptate maiores exercitationem deserunt doloribus, accusamus soluta maxime deleniti nulla est harum amet nam perspiciatis fuga!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati aspernatur hic reiciendis, impedit itaque minus quo tempora quasi inventore.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
