import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Dog", path: "/dog" },
  { name: "Dolphin", path: "/dolphin" },
  { name: "Donkey", path: "/donkey" },
  { name: "Duck", path: "/duck" }
];

const DeerGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Deer Name Generator - Find The Perfect Name For Your Deer</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for deer with our Deer Name Generator. Perfect for pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Deer Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for deer from our collection of creative names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Deer"
        facts={animalData.deer.facts}
        bestNames={animalData.deer.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default DeerGenerator; 