import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Layout } from "./Layout";

interface NameGeneratorProps {
  animal: string;
  facts: string[];
  bestNames: {
    descriptive: string[];
    funny: string[];
    cute: string[];
    male: string[];
    female: string[];
  };
  otherGenerators: Array<{
    name: string;
    path: string;
  }>;
}

export const NameGenerator = ({
  animal,
  facts,
  bestNames,
  otherGenerators,
}: NameGeneratorProps) => {
  const [isMale, setIsMale] = useState(true);
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);

  const generateNames = () => {
    const nameList = isMale ? bestNames.male : bestNames.female;
    const selectedNames: string[] = [];
    const usedIndexes = new Set();

    while (selectedNames.length < Math.min(10, nameList.length)) {
      const randomIndex = Math.floor(Math.random() * nameList.length);
      if (!usedIndexes.has(randomIndex)) {
        selectedNames.push(nameList[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }

    setGeneratedNames(selectedNames);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {animal} Name Generator
          </h1>
          <p className="text-xl text-gray-600">
            Generate the perfect name for your {animal.toLowerCase()}.
          </p>
        </section>

        {/* Generator Section */}
        <section className="mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className={`text-lg ${!isMale ? "text-gray-600" : ""}`}>
                Male
              </span>
              <Switch
                checked={!isMale}
                onCheckedChange={(checked) => setIsMale(!checked)}
              />
              <span className={`text-lg ${isMale ? "text-gray-600" : ""}`}>
                Female
              </span>
            </div>

            <div className="text-center space-y-6">
              <Button
                onClick={generateNames}
                className="mb-6"
                size="lg"
              >
                Generate Names
              </Button>
              
              <div className="overflow-hidden">
                {generatedNames.length > 0 && (
                  <div 
                    className="grid grid-cols-2 gap-4 animate-fade-in"
                  >
                    {generatedNames.map((name, index) => (
                      <div 
                        key={index}
                        className="text-xl font-semibold text-primary p-2 rounded-md hover:bg-gray-50"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </section>

        {/* Table of Contents */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Contents</h2>
          <nav className="space-y-2">
            <a href="#how-it-works" className="block text-brand hover:text-brand-dark">
              How the Generator Works
            </a>
            <a href="#animal-info" className="block text-brand hover:text-brand-dark">
              {animal} Information
            </a>
            <a href="#best-names" className="block text-brand hover:text-brand-dark">
              Best Names Table
            </a>
            <a href="#other-generators" className="block text-brand hover:text-brand-dark">
              Other Generators
            </a>
          </nav>
        </Card>

        {/* How it Works */}
        <section id="how-it-works" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How it Works</h2>
          <Card className="p-6">
            <p className="text-gray-600">
              Our {animal.toLowerCase()} name generator uses a carefully curated
              list of names that are perfect for your pet. Simply choose between
              male and female names, click the generate button, and discover the
              perfect name!
            </p>
          </Card>
        </section>

        {/* Animal Information */}
        <section id="animal-info" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{animal} Information</h2>
          <Card className="p-6">
            <ul className="space-y-2">
              {facts.map((fact, index) => (
                <li key={index} className="text-gray-600">
                  • {fact}
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Best Names Table */}
        <section id="best-names" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Best Names</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(bestNames).map(([category, names]) => (
              <Card key={category} className="p-6">
                <h3 className="text-lg font-semibold mb-3 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()} Names
                </h3>
                <ul className="space-y-2">
                  {names.map((name, index) => (
                    <li key={index} className="text-gray-600">
                      • {name}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Generators */}
        <section id="other-generators">
          <h2 className="text-2xl font-semibold mb-4">Other Generators</h2>
          <Card className="p-6">
            <div className="flex flex-wrap gap-4">
              {otherGenerators.map((generator) => (
                <Button
                  key={generator.name}
                  variant="outline"
                  asChild
                >
                  <a href={generator.path}>{generator.name} Names</a>
                </Button>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
};
