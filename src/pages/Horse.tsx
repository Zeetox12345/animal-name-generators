import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Hippo", path: "/hippo" },
  { name: "Hyena", path: "/hyena" },
  { name: "Iguana", path: "/iguana" },
  { name: "Jellyfish", path: "/jellyfish" }
];

const HorseGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Horse Name Generator - 10,000+ Unique Horse Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect horse name with our Horse Name Generator! Browse through 10,000+ unique and creative names inspired by these majestic and noble animals. Perfect for pet horses, farm animals, characters, or creative projects!" 
        />
        <meta property="og:title" content="Horse Name Generator - Find The Perfect Horse Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for horses from our collection of 10,000+ creative horse names. Perfect for pets, farm animals, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Horse"
        facts={animalData.horse.facts}
        bestNames={animalData.horse.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default HorseGenerator; 