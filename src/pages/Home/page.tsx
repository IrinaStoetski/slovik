import Input from "../../components/ui/Input";
import { SparklesIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-3 gap-5 pt-5">
      <Input
        icon={
          <SparklesIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-default-icon" />
        }
      />
      <h1 className="w-full">Welcome to the Home Page</h1>
      <p>This is a simple home page component.</p>
    </div>
  );
};

export default Home;
