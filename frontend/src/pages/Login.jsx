import { useContext, useState } from "react";
import {
  Container,
  Card,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Anchor,
  Group,
  Divider,
  Box,
  Stack,
  Center,
  Alert,
} from "@mantine/core";
import { IconAlertCircle, IconArrowLeft, IconArrowNarrowLeft } from "@tabler/icons-react";
import {notifyError,notifySuccess} from "../utils/Notification.jsx"
import { useNavigate } from "react-router-dom";
import ApiService from "../utils/ApiService.js";
import UserContext  from "../context/UserContext.js";
export default function Login() {
  const { setUser, setIsAuthenticated } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [formdata, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await ApiService.PostData("/user/login", formdata);
      if (response.success) {
        notifySuccess("Login Successful");
        navigate("/dashboard");
        setUser({name:response.data?.name,email:response.data?.email,id:response.data?.id,avatar:response.data?.avatar});
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError({ error: true, message: error?.message });
      setLoading(false);
      notifyError(`Login Failed ${error?.message}`)
    }
  };
  const setData = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <Container size="sm" py="xl" px="md">
      <Center h="100vh" style={{ minHeight: "100vh" }}>
        <Card
          shadow="sm"
          radius="md"
          withBorder
          p="xl"
          maw={420}
          w="100%"
          style={{ backgroundColor: "transparent" }}>
          <Group justify="flex-start">
            <Button
              onClick={() => navigate(-1)}
              leftSection={<IconArrowNarrowLeft />}
              variant="transparent">
              Go back
            </Button>
          </Group>
          <Stack gap="lg" align="center">
            <Title order={2} ta="center" fw={700}>
              Login
            </Title>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Stack gap="md">
                <TextInput
                  label={"Email "}
                  placeholder={"Enter your email "}
                  required
                  size="sm"
                  name="email"
                  value={formdata.email}
                  onChange={(e) => setData(e)}
                />

                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  required
                  size="sm"
                  value={formdata.password}
                  name="password"
                  onChange={(e) => setData(e)}
                />
                <Group justify="flex-end">
                  <Anchor
                    component="button"
                    size="sm"
                    type="button"
                    onClick={() => navigate("/resetpassword")}>
                    Forgot password?
                  </Anchor>
                </Group>
                <Button
                  type="submit"
                  fullWidth
                  loading={loading}
                  size="sm"
                  variant="outline"
                  radius="md"
                  styles={{
                    root: {
                      "&:hover": {
                        backgroundColor: "#5f3dc4",
                        color: "white",
                      },
                    },
                  }}>
                  Login
                </Button>
              </Stack>
            </form>
            <Divider label="OR" labelPosition="center" w="100%" />
            <Group gap="xs" justify="center">
              <Text size="sm" c="dimmed">
                Don't have an account?
              </Text>
              <Anchor
                component="button"
                type="button"
                size="sm"
                onClick={() => navigate("/signup")}>
                signup
              </Anchor>
            </Group>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
