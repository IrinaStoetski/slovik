import { BrainIcon } from "lucide-react";

import EmptyState from "../../components/EmptyState";

const Practice = () => {
  return (
    <section className="h-full pt-40">
      <EmptyState
        icon={<BrainIcon size={48} className="text-secondary" />}
        title="No words yet"
        description="Capture some words to start practicing"
      />
    </section>
  );
};

export default Practice;
