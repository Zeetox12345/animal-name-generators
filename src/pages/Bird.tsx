import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Bear", path: "/bear" },
  { name: "Bee", path: "/bee" },
  { name: "Beetle", path: "/beetle" },
  { name: "Butterfly", path: "/butterfly" }
];

const BirdGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bird Name Generator - 10,000+ Unique Bird Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect bird name with our Bird Name Generator! Browse through 10,000+ unique and creative names inspired by these beautiful creatures. Perfect for pet birds, characters, or creative projects!" 
        />
        <meta property="og:title" content="Bird Name Generator - Find The Perfect Bird Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for birds from our collection of 10,000+ creative bird names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Bird"
        facts={animalData.bird.facts}
        bestNames={animalData.bird.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default BirdGenerator; 