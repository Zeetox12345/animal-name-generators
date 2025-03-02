import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Hippo", path: "/hippo" },
  { name: "Horse", path: "/horse" },
  { name: "Hyena", path: "/hyena" },
  { name: "Jellyfish", path: "/jellyfish" }
];

const IguanaGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Iguana Name Generator - 10,000+ Unique Iguana Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect iguana name with our Iguana Name Generator! Browse through 10,000+ unique and creative names inspired by these fascinating reptiles. Perfect for pet iguanas, characters, or creative projects!" 
        />
        <meta property="og:title" content="Iguana Name Generator - Find The Perfect Iguana Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for iguanas from our collection of 10,000+ creative iguana names. Perfect for pets, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Iguana"
        facts={animalData.iguana.facts}
        bestNames={animalData.iguana.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default IguanaGenerator; 