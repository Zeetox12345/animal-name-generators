import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Ape", path: "/ape" },
  { name: "Bat", path: "/bat" }
];

const AntGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ant Name Generator - 10,000+ Unique Ant Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect ant name with our Ant Name Generator! Browse through 10,000+ unique and creative names inspired by these fascinating insects. Perfect for pet ants, characters, or creative projects!" 
        />
        <meta property="og:title" content="Ant Name Generator - Find The Perfect Ant Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for ants from our collection of 10,000+ creative ant names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Ant"
        facts={animalData.ant.facts}
        bestNames={animalData.ant.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default AntGenerator;
