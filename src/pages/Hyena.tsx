import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Hippo", path: "/hippo" },
  { name: "Horse", path: "/horse" },
  { name: "Iguana", path: "/iguana" },
  { name: "Jellyfish", path: "/jellyfish" }
];

const HyenaGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hyena Name Generator - 10,000+ Unique Hyena Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect hyena name with our Hyena Name Generator! Browse through 10,000+ unique and creative names inspired by these intelligent and social predators. Perfect for characters, creative projects, or wildlife enthusiasts!" 
        />
        <meta property="og:title" content="Hyena Name Generator - Find The Perfect Hyena Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for hyenas from our collection of 10,000+ creative hyena names. Perfect for characters, creative projects, or wildlife enthusiasts." 
        />
      </Helmet>
      <NameGenerator
        animal="Hyena"
        facts={animalData.hyena.facts}
        bestNames={animalData.hyena.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default HyenaGenerator; 