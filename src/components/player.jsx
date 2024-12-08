// Player.js
import React from "react";
import { Card } from "react-bootstrap"
import PropTypes from "prop-types";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default.jpg",
};

export default Player;
