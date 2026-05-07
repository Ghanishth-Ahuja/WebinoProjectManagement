// src/layouts/AppLayout.js
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

import { Header, Navbar } from "../common/index";
// import { Footer } from "./components/Footer";   // uncomment if you want footer

export function AppLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  // Optional: later add desktop collapsed sidebar
  // const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened /* , desktop: !desktopOpened */ },
      }}
      padding="md"
      // footer={{ height: 60 }}   // uncomment if using footer
      withBorder={false} // many modern apps remove the border
    >
      <AppShell.Header>
        <Header mobileOpened={mobileOpened} toggleMobile={toggleMobile} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
