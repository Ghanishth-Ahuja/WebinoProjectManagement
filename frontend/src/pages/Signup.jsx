import { useState, useEffect } from "react";
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
  Loader,
} from "@mantine/core";
import { IconAlertCircle, IconArrowNarrowLeft, IconMail } from "@tabler/icons-react";

import { useNavigate, useSearchParams } from "react-router-dom";
import ApiService from "../utils/ApiService.js";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [formdata, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  
  // Invitation token handling
  const [searchParams] = useSearchParams();
  const invitationToken = searchParams.get("invitationLink");
  const [isValidatingToken, setIsValidatingToken] = useState(false);
  const [invitationData, setInvitationData] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  
  const navigate = useNavigate();

  // Validate invitation token on mount
  useEffect(() => {
    if (invitationToken) {
      setIsValidatingToken(true);
      validateInvitationToken(invitationToken);
    }
  }, [invitationToken]);

  const validateInvitationToken = async (token) => {
    try {
      const response = await ApiService.GetData(`/project/validateInvitationToken/${token}`);
      if (response.success) {
        setInvitationData(response.data);
        // Pre-fill email from invitation
        setFormData(prev => ({ ...prev, email: response.data.email }));
      } else {
        setTokenError("Invalid or expired invitation link");
      }
    } catch (error) {
      console.error("Token validation error:", error);
      setTokenError("Failed to validate invitation");
    } finally {
      setIsValidatingToken(false);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if(invitationToken)
      {
        const response = await ApiService.PostData("/user/registerUserUsingInvitation", {...formdata,invitationToken});
        if (response.success) navigate("/dashboard");
      }
      const response = await ApiService.PostData("/user/register", formdata);
      if (response.success) navigate("/login");
    } catch (error) {
      setError({ error: true, message: error?.message });
      setLoading(false);
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
              Signup
            </Title>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Stack gap="md">
                {/* Show invitation banner if token exists */}
                {invitationData && (
                  <Alert
                    icon={<IconMail size={16} />}
                    title="Project Invitation"
                    color="blue"
                    variant="light"
                  >
                    <Text size="sm">
                      You've been invited to join <strong>{invitationData.projectTitle}</strong>. 
                      Complete your registration to accept the invitation.
                    </Text>
                  </Alert>
                )}

                {tokenError && (
                  <Alert
                    icon={<IconAlertCircle size={16} />}
                    title="Invalid Invitation"
                    color="red"
                    variant="light"
                  >
                    <Text size="sm">{tokenError}</Text>
                    <Text size="xs" c="dimmed" mt="xs">
                      You can still sign up normally below.
                    </Text>
                  </Alert>
                )}

                <TextInput
                  label={"Email"}
                  placeholder={"Enter your email "}
                  required
                  size="sm"
                  name="email"
                  value={formdata.email}
                  onChange={(e) => setData(e)}
                  disabled={!!invitationData}
                  readOnly={!!invitationData}
                  rightSection={invitationData ? <IconMail size={16} color="gray" /> : null}
                />
                <TextInput
                  label={"Username"}
                  placeholder={"Enter your username "}
                  required
                  size="sm"
                  name="name"
                  value={formdata.name}
                  onChange={(e) => setData(e)}
                />
                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  required
                  size="sm"
                  name="password"
                  value={formdata.password}
                  onChange={(e) => setData(e)}
                />
                <Group justify="flex-end"></Group>
                {error.error && (
                  <Alert
                    title="Error"
                    style={{ width: "100%" }}
                    color="red"
                    variant="outline"
                    icon={<IconAlertCircle />}>
                    Login failed. {error.message}
                  </Alert>
                )}
                <Button
                  type="submit"
                  fullWidth
                  loading={loading || isValidatingToken}
                  size="sm"
                  variant="outline"
                  radius="md">
                  {invitationData ? "Accept Invitation & Sign Up" : "Sign Up"}
                </Button>
              </Stack>
            </form>

            <Divider label="OR" labelPosition="center" w="100%" />

            <Group gap="xs" justify="center">
              <Text size="sm" c="dimmed">
                Already have an account?
              </Text>
              <Anchor
                component="button"
                type="button"
                size="sm"
                onClick={() => navigate("/login")}>
                Login
              </Anchor>
            </Group>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
