import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Bat", path: "/bat" }
];

const ApeGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ape Name Generator - 10,000+ Unique Ape Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect ape name with our Ape Name Generator! Browse through 10,000+ unique and creative names inspired by these intelligent primates. Perfect for pet apes, characters, or creative projects!" 
        />
        <meta property="og:title" content="Ape Name Generator - Find The Perfect Ape Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for apes from our collection of 10,000+ creative ape names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Ape"
        facts={animalData.ape.facts}
        bestNames={animalData.ape.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default ApeGenerator;
