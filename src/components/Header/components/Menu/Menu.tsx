import { XIcon, SettingsIcon, LogOutIcon } from "lucide-react";
import { Button } from "react-aria-components";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";
import { ROUTES } from "../../../../utils/consts/routes";

interface Props {
  isOpen: boolean;
  email: string;
  onLogout: () => void;
  onClose: () => void;
}

const Menu = ({ email, isOpen, onLogout, onClose }: Props) => {
  return (
    <div
      className={twMerge(
        "z-50 w-0 shadow-light-glow flex absolute overflow-x-hidden ease-in-out flex-col rounded-bl-md rounded-bb-md right-0 bottom-0 top-0 transition-all duration-500 bg-surface",
        isOpen && "w-4/5 pl-5",
      )}
    >
      <Button onPress={onClose} className="self-end p-4">
        <XIcon size={24} />
      </Button>
      <p className="text-muted">{email}</p>
      <ul className="flex flex-col gap-4 mt-6 text-primary font-bold">
        <li className="mb-4">
          <NavLink to={ROUTES.SETTINGS} className="flex gap-2 items-center">
            <SettingsIcon size={16} className="text-accent" /> Settings
          </NavLink>
        </li>
        <li>
          <button
            onClick={onLogout}
            className="flex gap-2 items-center font-normal text-danger"
          >
            <LogOutIcon size={16} className="text-danger" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
