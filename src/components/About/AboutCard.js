import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Serik Orken </span>
            from <span className="purple"> Almaty, Kazakhstan.</span>
            <br />I am a Mobile Developer or more precisely, <span className="purple">iOS Developers </span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
          Playing Games (CS 1.6, CS:GO, COD: Warzone, Dota2, Fifa)
            </li>
            <li className="about-activity">
                Designing Logo
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
