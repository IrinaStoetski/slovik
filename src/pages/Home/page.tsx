import Input from "../../components/ui/Input";
import { SparklesIcon } from "lucide-react";

const Home = () => {
  return (
    <section className="flex flex-col items-center pt-40 px-3 gap-5 h-full">
      <Input
        placeholder="Capture a word or phrase"
        icon={
          <SparklesIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
        }
      />
      <div className="flex items-center flex-col text-center mt-6">
        <div className="rounded-full p-2 flex items-center justify-center w-16 h-16 bg-surface">
          <SparklesIcon className="w-8 h-8 text-accent" />
        </div>
        <h2 className="w-full text-primary my-3 text-2xl font-bold">
          Start capturing words
        </h2>
        <p className="text-secondary">
          Type any English word or phrase to get started.
        </p>
      </div>
    </section>
  );
};

export default Home;
