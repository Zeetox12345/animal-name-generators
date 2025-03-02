import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Hippo", path: "/hippo" },
  { name: "Horse", path: "/horse" },
  { name: "Hyena", path: "/hyena" },
  { name: "Iguana", path: "/iguana" }
];

const JellyfishGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jellyfish Name Generator - 10,000+ Unique Jellyfish Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect jellyfish name with our Jellyfish Name Generator! Browse through 10,000+ unique and creative names inspired by these mesmerizing ocean creatures. Perfect for aquarium jellyfish, characters, or creative projects!" 
        />
        <meta property="og:title" content="Jellyfish Name Generator - Find The Perfect Jellyfish Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for jellyfish from our collection of 10,000+ creative jellyfish names. Perfect for aquarium specimens, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Jellyfish"
        facts={animalData.jellyfish.facts}
        bestNames={animalData.jellyfish.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default JellyfishGenerator; 