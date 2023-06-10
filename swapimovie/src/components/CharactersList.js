import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Character from "./Character";

const CharactersList = (movie) => {
  const charList = movie.movieInfo.characters;
  const length = charList.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carousel-wrapper">
      <Link to="/" className="back">
        Back to Movies
      </Link>
      <FaChevronLeft className="left" onClick={prevSlide} />
      <FaChevronRight className="right" onClick={nextSlide} />
      {charList.map((char, idx) => {
        return (
          <div
            className={idx === current ? "slide current" : "slide"}
            key={idx}
          >
            {idx === current && <Character char={char} />}
          </div>
        );
      })}
    </section>
  );
};

export default CharactersList;
