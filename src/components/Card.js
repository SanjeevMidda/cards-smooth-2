import React, { useEffect, useState } from "react";
import { useTransform, motion } from "framer-motion";

const Card = ({ text, index, progress }) => {
  let range = [index * 0.25, 1];
  let targetScale = 1 - (5 - index) * 0.05;

  const cardScale = useTransform(progress, range, [1, targetScale]);

  const [currentProgress, setCurrentProgress] = useState(progress);

  useEffect(() => {
    setCurrentProgress(progress);
  }, progress);

  let cardStyles = {
    top: `calc(-10% + ${index * 25}px)`,
    transform: `scale(${2})`,
  };

  console.log(currentProgress);

  return (
    <motion.div className="cardContainer">
      <motion.div className="card" style={cardStyles}>
        <h1>{text}</h1>
      </motion.div>
    </motion.div>
  );
};

export default Card;
