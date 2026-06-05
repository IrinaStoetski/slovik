import { TabList, Tabs } from "react-aria-components";
import { TABS_CONFIG } from "./consts";
import { useLocation } from "react-router";
import { TabItem } from "./components";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="pt-3 text-center border-t border-t-muted bg-surface text-secondary text-sm w-full shadow-light-glow">
      <Tabs selectedKey={location.pathname}>
        <TabList className="flex items-center justify-around gap-4">
          {TABS_CONFIG.map(({ title, href, icon }) => (
            <TabItem key={href} title={title} href={href} Icon={icon} />
          ))}
        </TabList>
      </Tabs>
    </footer>
  );
};

export default Footer;
