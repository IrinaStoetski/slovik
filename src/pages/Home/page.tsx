import { SparklesIcon } from "lucide-react";

import EmptyState from "../../components/EmptyState";
import Input from "../../components/ui/Input";

const Home = () => {
  return (
    <section className="flex flex-col items-center pt-20 px-3 gap-5 h-full">
      <Input
        placeholder="Capture a word or phrase"
        icon={<SparklesIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />}
      />
      <EmptyState
        icon={
          <div className="rounded-full p-2 flex items-center justify-center w-16 h-16 bg-surface">
            <SparklesIcon className="w-8 h-8 text-accent" />
          </div>
        }
        title="Start capturing words"
        description="Type any English word or phrase to get started."
      />
    </section>
  );
};

export default Home;
