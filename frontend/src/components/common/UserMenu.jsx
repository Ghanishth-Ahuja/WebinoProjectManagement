import { Menu, Button, Text, Avatar, Stack, Divider } from "@mantine/core";
import {
  IconSettings,
  IconUser,
  IconLogout,
  IconChevronDown,
} from "@tabler/icons-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext.js";
import ApiService from "../../utils/ApiService.js";
import { notifySuccess } from "../../utils/Notification.jsx";

/**
 * Reusable UserMenu component
 * Shows user info and dropdown menu with settings, profile, logout
 */
export function UserMenu() {
  const { user, setUser, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await ApiService.PostData("/user/logout", {});
      localStorage.clear(); // Clear all localStorage to reset authentication state
      setUser([]);
      setIsAuthenticated(false);
      notifySuccess("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuItems = [
    {
      label: "Settings",
      icon: <IconSettings size={16} />,
      onClick: () => navigate("/settings"),
    },
  ];

  return (
    <Menu shadow="md" width={200} position="bottom-end" withArrow>
      <Menu.Target>
        <Button
          variant="subtle"
          color="gray"
          rightSection={<IconChevronDown size={14} />}
          px="xs"
        >
          <Avatar name={user?.name} size="sm" mr="xs" />
          <Text size="sm" fw={500} visibleFrom="sm">
            {user?.name || "User"}
          </Text>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {/* User Info Section */}
        <Menu.Label p="sm">
          <Stack gap="xs" maw={200}>
            <Text fw={500} size="sm" lineClamp={1}>
              {user?.name}
            </Text>
            <Text size="xs" c="dimmed" lineClamp={1} title={user?.email}>
              {user?.email}
            </Text>
          </Stack>
        </Menu.Label>

        <Divider />

        {/* Menu Items */}
        {menuItems.map((item) => (
          <Menu.Item key={item.label} leftSection={item.icon} onClick={item.onClick}>
            {item.label}
          </Menu.Item>
        ))}

        <Divider />

        {/* Logout */}
        <Menu.Item
          leftSection={<IconLogout size={16} />}
          color="red"
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
