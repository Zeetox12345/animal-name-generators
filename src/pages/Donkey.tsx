import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Deer", path: "/deer" },
  { name: "Dog", path: "/dog" },
  { name: "Dolphin", path: "/dolphin" },
  { name: "Duck", path: "/duck" }
];

const DonkeyGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Donkey Name Generator - Find The Perfect Name For Your Donkey</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for donkeys with our Donkey Name Generator. Perfect for farm animals, characters, or creative projects!" 
        />
        <meta property="og:title" content="Donkey Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for donkeys from our collection of creative names. Perfect for farm animals, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Donkey"
        facts={animalData.donkey.facts}
        bestNames={animalData.donkey.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default DonkeyGenerator; 