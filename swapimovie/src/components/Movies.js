import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movies = ({ movies }) => {
  const [current, setCurrent] = useState(0);
  const length = movies.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carousel-wrapper">
      <h1>Star Wars Films: Character List</h1>
      <FaChevronLeft className="left" onClick={prevSlide} />
      <FaChevronRight className="right" onClick={nextSlide} />
      {movies.map((movie, idx) => (
        <div className={idx === current ? "slide current" : "slide"} key={idx}>
          {idx === current && (
            <div className="content">
              <div>{movie.title}</div>
              <div>
                <Link to={`/${idx}/chars`}>Characters</Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Movies;
