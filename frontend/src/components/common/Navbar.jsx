import { Button, NavLink, Stack } from "@mantine/core";
import {
  IconHome,
  IconFolder,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();


  const navbarItems = [
    {
      slug: "/dashboard",
      label: "Dashboard",
      leftSection: <IconHome size={20} />,
      active: location.pathname === "/dashboard",
    },
    {
      slug: "/projects",
      label: "Projects",
      leftSection: <IconFolder size={20} />,
      active: location.pathname.startsWith("/projects"),
    },
    {
      slug: "/settings",
      label: "Settings",
      leftSection: <IconSettings size={20} />,
      active: location.pathname === "/settings",
    },
  ];
  return (
    <>
      <Stack gap={4}>
        
        {navbarItems?.map((navItem) => (
          <NavLink
            key={navItem?.slug}
            component={Link}
            to={navItem?.slug}
            label={navItem?.label}
            leftSection={navItem?.leftSection}
            active={navItem?.active}
          />
        ))}
      </Stack>
      
    </>
  );
}
