import { RouterProvider, TabList, Tabs } from "react-aria-components";
import { TABS_CONFIG } from "./consts";
import { useLocation, useNavigate } from "react-router";
import { TabItem } from "./components";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="pt-3 text-center border-t border-t-muted bg-surface text-secondary text-sm w-full">
      <RouterProvider navigate={navigate}>
        <Tabs selectedKey={location.pathname}>
          <TabList className="flex items-center justify-around gap-4">
            {TABS_CONFIG.map(({ title, href, icon }) => (
              <TabItem key={href} title={title} href={href} Icon={icon} />
            ))}
          </TabList>
        </Tabs>
      </RouterProvider>
    </footer>
  );
};

export default Footer;
