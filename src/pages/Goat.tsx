import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Fly", path: "/fly" },
  { name: "Fox", path: "/fox" },
  { name: "Frog", path: "/frog" },
  { name: "Giraffe", path: "/giraffe" }
];

const GoatGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Goat Name Generator - 10,000+ Unique Goat Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect goat name with our Goat Name Generator! Browse through 10,000+ unique and creative names inspired by these playful and intelligent animals. Perfect for pet goats, farm animals, characters, or creative projects!" 
        />
        <meta property="og:title" content="Goat Name Generator - Find The Perfect Goat Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for goats from our collection of 10,000+ creative goat names. Perfect for pets, farm animals, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Goat"
        facts={animalData.goat.facts}
        bestNames={animalData.goat.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default GoatGenerator; 