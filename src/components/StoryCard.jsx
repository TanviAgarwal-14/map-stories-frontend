import React from "react";
import "../styles/StoryCard.css";

const StoryCard = ({ story }) => (
  <div className="story-card">
    <img src={story.photo} alt={story.title} className="story-photo" />
    <div className="story-content">
      <h3>{story.title}</h3>
      <p>{story.description}</p>
    </div>
  </div>
);

export default StoryCard;