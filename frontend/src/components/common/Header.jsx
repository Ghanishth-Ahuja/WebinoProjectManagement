import { Group, Text, ActionIcon, Burger, Box,Indicator } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun,IconBell } from "@tabler/icons-react";
import { UserMenu } from "./UserMenu";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import ApiService from "../../utils/ApiService";
import { useNavigate } from "react-router-dom";

export default function Header({ mobileOpened, toggleMobile }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  async function getAllNotifications()
  {
    try {
      const getAllNotifications = await ApiService.GetData(`/project/getAllNotificationsByUserId/${user?.id}`)
      console.log(getAllNotifications)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>
  {
    getAllNotifications()
  },[user])
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
        <Indicator label={10} size={20}
        >
          <ActionIcon
        variant="default"
        size={"lg"}
        onClick={()=>navigate("/notifications")}
        >
          <IconBell size={20}/>
        </ActionIcon>
        </Indicator>
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
