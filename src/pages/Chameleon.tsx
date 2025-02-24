import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Capybara", path: "/capybara" },
  { name: "Cat", path: "/cat" },
  { name: "Chicken", path: "/chicken" },
  { name: "Chipmunk", path: "/chipmunk" }
];

const ChameleonGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Chameleon Name Generator - Find The Perfect Name For Your Color-Changing Friend</title>
        <meta 
          name="description" 
          content="Generate unique and creative names for chameleons with our Chameleon Name Generator. Perfect for reptile pets, characters, or creative projects!" 
        />
        <meta property="og:title" content="Chameleon Name Generator - Find The Perfect Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for chameleons from our collection of creative names. Perfect for reptile pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Chameleon"
        facts={animalData.chameleon.facts}
        bestNames={animalData.chameleon.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default ChameleonGenerator; 