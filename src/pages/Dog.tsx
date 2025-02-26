import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Deer", path: "/deer" },
  { name: "Dolphin", path: "/dolphin" },
  { name: "Donkey", path: "/donkey" },
  { name: "Duck", path: "/duck" }
];

const DogGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dog Name Generator - Find The Perfect Name For Your Canine Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for dogs with our Dog Name Generator. Perfect for puppies, pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Dog Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for dogs from our collection of creative names. Perfect for puppies, pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Dog"
        facts={animalData.dog.facts}
        bestNames={animalData.dog.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default DogGenerator; 