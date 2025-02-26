import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Deer", path: "/deer" },
  { name: "Dog", path: "/dog" },
  { name: "Donkey", path: "/donkey" },
  { name: "Duck", path: "/duck" }
];

const DolphinGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dolphin Name Generator - Find The Perfect Name For Your Dolphin</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for dolphins with our Dolphin Name Generator. Perfect for marine animals, characters, or creative projects!" 
        />
        <meta property="og:title" content="Dolphin Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for dolphins from our collection of creative names. Perfect for marine animals, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Dolphin"
        facts={animalData.dolphin.facts}
        bestNames={animalData.dolphin.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default DolphinGenerator; 