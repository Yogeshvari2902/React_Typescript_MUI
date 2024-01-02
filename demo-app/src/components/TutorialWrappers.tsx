import React from "react";
import { useParams } from 'react-router-dom';
import Tutorial from "./Tutorial";

const TutorialWrapper: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div>No tutorial ID provided</div>;
  }

  return <Tutorial id={id} />;
};

export default TutorialWrapper;
