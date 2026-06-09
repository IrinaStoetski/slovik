import { useState } from "react";

import { MenuIcon, SparklesIcon } from "lucide-react";
import { Button } from "react-aria-components";

import { ROUTES } from "../../utils/consts/routes";
import { Menu } from "./components";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4">
      <a href={ROUTES.HOME} className="text-accent font-[Henny_Penny] flex gap-2 text-2xl">
        <SparklesIcon className="text-accent" size={24} />
        Slovik
      </a>
      <Button onPress={() => setIsMenuOpen((prev) => !prev)} aria-label="Menu">
        <MenuIcon size={24} />
      </Button>
      <Menu isOpen={isMenuOpen} email="user@example.com" onLogout={() => {}} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
