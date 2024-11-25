import React, { useEffect, useState } from "react";
import axios from "axios";
import StoryCard from "../components/StoryCard";
import "../styles/YourStories.css";

const YourStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/stories");
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    fetchStories();
  }, []);

  return (
    <div className="your-stories-page">
      <h2>Your Stories</h2>
      <div className="story-cards-container">
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default YourStories;