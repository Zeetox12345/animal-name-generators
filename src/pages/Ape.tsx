import { NameGenerator } from "@/components/NameGenerator";
import { animalData } from "@/data/animalNames";
import { Helmet } from "react-helmet-async";

const otherGenerators = [
  { name: "Ant", path: "/ant" },
  { name: "Alpaca", path: "/alpaca" },
  { name: "Alligator", path: "/alligator" },
  { name: "Bat", path: "/bat" }
];

const ApeGenerator = () => {
  return (
    <>
      <Helmet>
        <title>Ape Name Generator - 10,000+ Unique Ape Names | Find The Perfect Name</title>
        <meta 
          name="description" 
          content="Find the perfect ape name with our Ape Name Generator! Access 10,000+ unique and creative names inspired by these intelligent primates. Perfect for characters, creative projects, or virtual pets!" 
        />
        <meta property="og:title" content="Ape Name Generator - Find The Perfect Ape Name" />
        <meta 
          property="og:description" 
          content="Generate unique and meaningful names for apes from our collection of 10,000+ creative ape names. Perfect for characters, creative projects, or virtual pets." 
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
