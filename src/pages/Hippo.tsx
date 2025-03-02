import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const otherGenerators = [
  { name: "Hedgehog", path: "/hedgehog" },
  { name: "Horse", path: "/horse" },
  { name: "Hyena", path: "/hyena" },
  { name: "Iguana", path: "/iguana" }
];

const HippoGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hippo Name Generator - 10,000+ Unique Hippo Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Discover the perfect hippo name with our Hippo Name Generator! Browse through 10,000+ unique and creative names inspired by these magnificent water-loving giants. Perfect for pet hippos, zoo animals, characters, or creative projects!" 
        />
        <meta property="og:title" content="Hippo Name Generator - Find The Perfect Hippo Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for hippos from our collection of 10,000+ creative hippo names. Perfect for zoo animals, characters, or creative projects." 
        />
      </Helmet>
      <NameGenerator
        animal="Hippo"
        facts={animalData.hippo.facts}
        bestNames={animalData.hippo.names}
        otherGenerators={otherGenerators}
      />
    </>
  );
};

export default HippoGenerator; 