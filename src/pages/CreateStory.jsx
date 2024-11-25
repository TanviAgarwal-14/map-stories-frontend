import React, { useState } from "react";
import MapComponent from "../components/MapComponent";
import "../styles/CreateStory.css";
import axios from "axios";

const CreateStory = () => {
  const [position, setPosition] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSaveStory = async () => {
    if (!position || !title || !description) {
      alert("Please fill in all fields and place a marker!");
      return;
    }

    const storyData = { title, description, location: { coordinates: position }, photo };
    try {
      await axios.post("http://localhost:5000/api/stories", storyData);
      alert("Story saved successfully!");
    } catch (error) {
      console.error("Error saving story:", error);
      alert("Failed to save story!");
    }
  };

  return (
    <div className="create-story-page">
      <h2>Create a New Story</h2>
      <MapComponent position={position} setPosition={setPosition} />
      <form className="story-form">
        <input
          type="text"
          placeholder="Story Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Story Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
        <button type="button" onClick={handleSaveStory}>
          Save Story
        </button>
      </form>
    </div>
  );
};

export default CreateStory;