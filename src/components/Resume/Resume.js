import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BS in Computer Science, Suleyman Demirel University, Kazakhstan"
              date="2014 - 2018"
              content={[""]}
            />
            <Resumecontent
              title="Kazakh-Turkish High School for Gifted Boys, Kazakhstan, Taldykorgan "
              date="2009 - 2014"
              content={[""]}
            />
          </Col>
          
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="iOS Developer, Takebs LLC"
              date="2016 - 2017"
              content={[
                "Developed the app ‘Takebs. The app is for making deliveries internationally and within the city you live in. Hired Android Developer, Backend Developer and Designer, gave tasks and managed their work.",
              ]}
            />
          
          <Resumecontent
            title="iOS Developer, GOODAPP Labs "
            date="2017 May— 2018"
            content={["Maintenance and development of new features. Experience of working in a team on popular Kazakhstani ’The Steppe’ - a progressive site about life, work and hobbies (being released in September 2017)"]}
          />
          
          <Resumecontent
            title="iOS Developer, Crystal Spring "
            date="2018 - 2019"
            content={["Development of mobile applications and software for banks in Kazakhstan.", "Forte QR - Application like a mVisa. the new transformative way to pay with your mobile phone. There’s no need to carry cash. Just scan the QR code to make your payments.", "HUMO Online - Mobile application for intrabank transfers, banking information services, utility payments and more.", "Support and make new features apps like: МиГ- Online monitoring of exchange rates of the network of exchange offices “МиГ” SberPost - The application is intended for accredited courier services SB “Sberbank”"]}
          />
          
          <Resumecontent
            title="CTO, Randlook (Startup) "
            date="2019 — 2020"
            content={["Developed the app ‘Randlook. The app is a new type of handy and fast outfit constructor app, where everyone can create an outfit, combining clothing items of the most famous clothing brands within couple of clicks."]}
          />
          
          <Resumecontent
            title="Freelancer "
            date="2020 — 2021"
            content={["having fun"]}
          />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
