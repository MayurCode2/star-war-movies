import { useEffect, useState } from "react";

const Character = ({ char }) => {
  const api = char;

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [working, setWorking] = useState(true);

  useEffect(() => {
    loadName();
  }, []);

  const loadName = () => {
    fetchName().then((data) => {
      setName(data.name);
      loadSpecies(data.species.length > 0 ? data.species : "");
    });
  };

  const fetchName = () => {
    return fetch(api)
      .then((data) => data.json())
      .catch((err) => {
        console.error(err);
      });
  };

  const loadSpecies = (api) => {
    fetchSpecies(api).then((data) => {
      setSpecies(data?.name ?? "Human");
      setWorking(false);
    });
  };

  const fetchSpecies = (api) => {
    return fetch(...api)
      .then((data) => data.json())
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {working ? (
        <div>Loading...</div>
      ) : (
        <div className="content">
          <div>{name}</div>
          <div>{"Species: " + species}</div>
        </div>
      )}
    </>
  );
};

export default Character;
