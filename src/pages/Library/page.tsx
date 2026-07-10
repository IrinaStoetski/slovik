import { LibraryBigIcon } from "lucide-react";

import EmptyState from "../../components/EmptyState";

const Library = () => {
  return (
    <section className="h-full pt-40">
      <EmptyState
        icon={<LibraryBigIcon size={48} className="text-secondary" />}
        title="Your library is empty"
        description="Go capture some words!"
      />
    </section>
  );
};

export default Library;
