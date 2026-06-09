import { Tab } from "react-aria-components";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const TabItem = ({ title, href, Icon }: Props) => (
  <Tab
    key={href}
    href={href}
    render={(props) =>
      "href" in props ? (
        <NavLink
          to={href}
          {...props}
          className={({ isActive }) =>
            twMerge(
              "pb-2 transition text-secondary flex  border-transparent border-b-2 items-center justify-center flex-col gap-2",
              isActive && "text-accent border-accent"
            )
          }
        />
      ) : (
        <div {...props} />
      )
    }
  >
    <Icon className="w-6 h-6" />
    {title}
  </Tab>
);

export default TabItem;
