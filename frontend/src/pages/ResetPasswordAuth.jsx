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
  Image,
  Loader,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconArrowNarrowLeft,
  IconMessage,
} from "@tabler/icons-react";

import { useNavigate, useParams } from "react-router-dom";
import ApiService from "../utils/ApiService.js";
export default function ResetPasswordAuth() {
  const authtoken = useParams();
  const [token, setToken] = useState("");
  const [isValid, setIsValid] = useState();
  const [pageLoad, setPageLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    shouldShow: false,
    error: false,
    message: "",
  });
  const [formdata, setFormData] = useState({ password: "", confirpassword: "" ,token:authtoken.token});
  const navigate = useNavigate();
  const authenticateResettoken = async () => {
    try {
      const response = await ApiService.PostData(
        "/user/resetpasswordvalidate",
        authtoken,
      );
      if (response?.success) setIsValid(true);
      setPageLoad(false);
    } catch (error) {
      console.error("some error occured", error);
      setIsValid(false);
      setPageLoad(false);
    }
  };
  useEffect(() => {
    authenticateResettoken();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await ApiService.PostData(
        "/user/resetpassword",
        formdata,
      );
      setMessage({
        shouldShow: true,
        error: false,
        message: [response?.message],
      });
      setLoading(false);
      navigate("/login")
      // if (response.success) navigate("/dashboard");
    } catch (error) {
      setMessage({
        shouldShow: true,
        error: true,
        message:
          error.statusCode == 500 ? "Internal Server Error" : error?.message,
      });
      setLoading(false);
    }
  };
  const setData = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <Container size="sm" py="xl" px="md">
      <Center h="100vh" style={{ minHeight: "100vh" }}>
        {pageLoad ? (
          <Loader color="blue" size={50} />
        ) : (
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
                onClick={() => navigate("/")}
                leftSection={<IconArrowNarrowLeft />}
                variant="transparent">
                Go to Home
              </Button>
            </Group>
            {isValid ? (
              <Stack gap="lg" align="center">
                <Title order={2} ta="center" fw={700}>
                  Reset Password
                </Title>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <Stack gap="md">
                    <PasswordInput
                      label={"Enter New Password "}
                      placeholder={"Enter your password "}
                      required
                      size="sm"
                      name="password"
                      value={formdata.password}
                      onChange={(e) => setData(e)}
                    />

                    <PasswordInput
                      label={"Re-Enter New Password "}
                      placeholder={"Enter your password "}
                      required
                      size="sm"
                      name="confirmpassword"
                      value={formdata.confirmpassword}
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
                      Change Password
                    </Button>
                  </Stack>
                </form>

                {/* <Divider label="OR" labelPosition="center" w="100%" /> */}

                {/* <Group gap="xs" justify="center">
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
            </Group> */}
              </Stack>
            ) : (
              <>
                <Image src="/401_Error_Unauthorized.svg" />
                <Alert
                  title="Password Reset Link Expired"
                  style={{ width: "100%" }}
                  color="red"
                  variant="outline"
                  icon={<IconAlertCircle />}></Alert>
              </>
            )}
          </Card>
        )}
      </Center>
    </Container>
  );
}
