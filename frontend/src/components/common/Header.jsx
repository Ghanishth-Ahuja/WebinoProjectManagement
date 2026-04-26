// src/layouts/components/Header.js
import { Group, Text, ActionIcon, Burger, Box } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun,IconBell } from "@tabler/icons-react";
import { UserMenu } from "./UserMenu";

export default function Header({ mobileOpened, toggleMobile }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Group h="100%" px="md" justify="space-between">
      {/* Left */}
      <Group>
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
        />
        <Text size="xl" fw={700}>
          WebinoSolutions
        </Text>
      </Group>

      {/* Right */}
      <Box style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <ActionIcon
        variant="default"
        size={"lg"}
        >
          <IconBell size={20}/>
        </ActionIcon>
        <ActionIcon
          onClick={toggleColorScheme}
          variant="default"
          size="lg"
          aria-label="Toggle color scheme">
          {colorScheme === "dark" ? (
            <IconSun size={20} />
          ) : (
            <IconMoon size={20} />
          )}
        </ActionIcon> 
          <UserMenu />
        
      </Box>
    </Group>
  );
}
