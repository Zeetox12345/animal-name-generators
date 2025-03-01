import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Goat", path: "/goat" },
  { name: "Goose", path: "/goose" },
  { name: "Hamster", path: "/hamster" },
  { name: "Hedgehog", path: "/hedgehog" }
];

const GuineaPigGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Guinea Pig Name Generator - 10,000+ Unique Guinea Pig Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect guinea pig name with our Guinea Pig Name Generator! Browse through 10,000+ unique and creative names inspired by these adorable rodents. Perfect for pet guinea pigs, characters, or creative projects!" 
        />
        <meta property="og:title" content="Guinea Pig Name Generator - Find The Perfect Guinea Pig Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for guinea pigs from our collection of 10,000+ creative guinea pig names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="guinea pig"
        facts={animalData.guineaPig.facts}
        bestNames={animalData.guineaPig.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default GuineaPigGenerator; 