import { useState } from "react";
import {
  Container,
  Card,
  TextInput,
  Button,
  Group,
  Stack,
  Center,
  Alert,
  Image,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconMessage,
  IconArrowNarrowLeft,
} from "@tabler/icons-react";

import { Navigate, useNavigate } from "react-router-dom";
import ApiService from "../utils/ApiService.js";
export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    shouldShow: false,
    error: false,
    message: "",
  });
  const [formdata, setFormData] = useState({ email: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await ApiService.PostData(
        "/user/sendresetpasswordmail",
        formdata,
      );
      setMessage({
        shouldShow: true,
        error: false,
        message: [response?.message],
      });
      setLoading(false);
    } catch (error) {
      setMessage({ shouldShow: true, error: true, message: error?.message });
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
            <Image src="/Reset_password.svg" />
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
                {message.shouldShow && (
                  <Alert
                    title={message?.error ? "Error" : "Success"}
                    style={{ width: "100%" }}
                    color={message?.error ? "red" : "green"}
                    variant="outline"
                    icon={
                      message?.error ? <IconAlertCircle /> : <IconMessage />
                    }>
                    {message.message}
                  </Alert>
                )}
                <Button
                  type="submit"
                  fullWidth
                  loading={loading}
                  size="sm"
                  variant="outline"
                  radius="md">
                  Send Password reset link
                </Button>
              </Stack>
            </form>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
