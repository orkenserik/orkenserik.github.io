import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import forteqr from "../../Assets/Projects/forteqr.png";
import humo from "../../Assets/Projects/humo.png";
import mig from "../../Assets/Projects/mig.png";
import randlook from "../../Assets/Projects/randlook.png";
import sberpost from "../../Assets/Projects/sberpost.png";
import steppe from "../../Assets/Projects/steppe.png";
import tarihijol from "../../Assets/Projects/tarihijol.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={steppe}
              isBlog={false}
              title="The Steppe"
              description="The Steppe - сайт о людях и для людей. Мы рассказываем о жизни, работе и увлечениях современных жителей городов Казахстана и Центральной Азии. Мы делаем качественный контент, не гонимся за сенсациями и информационными скандалами."
              content={["Swift", "MVVM", "RxSwift", "Realm"]}
              link="https://apps.apple.com/kz/app/the-steppe/id1238301321"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tarihijol}
              isBlog={false}
              title="Tarihi jo‪l"
              description="С помощью приложения «Тарихи Жол» вы можете окунуться в мир историко-культурных мест в познавательном формате на пяти языках"
              content={["Swift", "MVVM", "Realm", "ARKit", "AudioKit", "VR" ]}
              link="https://apps.apple.com/kz/app/tarihi-jol/id1405587108"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randlook}
              isBlog={false}
              title="Randloo‪k‬"
              description="Randlook is a new type of handy and fast outfit constructor app, where everyone can create an outfit, combining different clothing items of the most famous clothing brands within couple of clicks."
              content={["Swift", "MVVM"]}
              link="https://apps.apple.com/kz/app/tarihi-jol/id1405587108"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forteqr}
              isBlog={false}
              title="ForteQR для коммерсанто‪в"
              description="Мобильное приложение для коммерсантов-участников эквайринговой сети АО ForteBank."
              content={["Swift", "MVVM"]}
              link="https://apps.apple.com/us/app/forteqr-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D1%80%D1%81%D0%B0%D0%BD%D1%82%D0%BE%D0%B2/id1465698062"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humo}
              isBlog={false}
              title="Humo для Бизнес‪а"
              description="Humo для Бизнеса – мобильное приложение для юридических лиц и индивидуальных предпринимателей, позволяющее дистанционно управлять счетами."
              content={["Swift", "MVVM", "BFF"]}
              link="https://apps.apple.com/us/app/humo-%D0%B4%D0%BB%D1%8F-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0/id1529071606"
            />
          </Col>
        </Row>
          
          <h1 className="project-heading">
            My supported <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={mig}
                isBlog={false}
                title="Курсы валют Ми‪Г"
                description="Онлайн-мониторинг курсов валют сети обменных пунктов МиГ"
                content={["Swift", "MVC"]}
                link="https://apps.apple.com/kz/app/%D0%BA%D1%83%D1%80%D1%81%D1%8B-%D0%B2%D0%B0%D0%BB%D1%8E%D1%82-%D0%BC%D0%B8%D0%B3/id955480750"
              />
            </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sberpost}
              isBlog={false}
              title="SberPos‪t"
              description="Приложение предназначенное для аккредитованных курьерских служб ДБ АО Сбербанк"
              content={["Swift", "MVC"]}
              link="https://apps.apple.com/ru/app/sberpost/id1401191485"
            />
          </Col>
          
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
