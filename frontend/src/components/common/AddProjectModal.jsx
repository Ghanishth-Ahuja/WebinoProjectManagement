import { useState, useEffect } from "react";
import {
  Button,
  Stack,
  Modal,
  Container,
  Title,
  TextInput,
  Group,
  Chip,
  Text,
  Box,
  Alert,
} from "@mantine/core";
import { IconPlus, IconX, IconAlertCircle } from "@tabler/icons-react";

export default function AddProjectModal({ close, opened, handleSubmit, isEdit = false, project = null }) {
  const [projectTitle, setProjectTitle] = useState("");

  // Multi-email input state
  const [emailInput, setEmailInput] = useState("");
  const [emails, setEmails] = useState([]);
  const [validationError, setValidationError] = useState("");
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Pre-fill data when in edit mode
  useEffect(() => {
    if (isEdit && project) {
      setProjectTitle(project.title || "");
      // Extract emails from projectmembers if available
      const memberEmails = project.projectmembers?.map(pm => pm.user?.email).filter(Boolean) || [];
      setEmails(memberEmails);
    } else {
      // Reset form when opening in create mode
      setProjectTitle("");
      setEmails([]);
      setEmailInput("");
      setValidationError("");
      setSubmitError("");
    }
  }, [isEdit, project, opened]);

  // Validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Add email to list
  const addEmail = () => {
    const trimmed = emailInput.trim().toLowerCase();
    if (!trimmed) return;

    if (!isValidEmail(trimmed)) {
      setValidationError("Invalid email format");
      return;
    }

    if (emails.includes(trimmed)) {
      setValidationError("Email already added");
      return;
    }

    setEmails([...emails, trimmed]);
    setEmailInput("");
    setValidationError("");
  };

  // Remove email from list
  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((e) => e !== emailToRemove));
  };

  // Handle Enter key to add email
  const handleEmailKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addEmail();
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setValidationError("");
    setSubmitError("");
    setIsSubmitting(true);

    try {
      // Submit to parent - backend handles email validation & invitations
      const result = await handleSubmit({
        title: projectTitle,
        memberEmails: emails,
      });
      
      // Reset form on success
      setProjectTitle("");
      setEmails([]);
      setEmailInput("");
      setSubmitError("");
    } catch (error) {
      // Show error in modal, keep it open
      setSubmitError(error.message || "Failed to create project");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      onClose={close}
      opened={opened}
      size="lg"
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Container size="sm" px="md">
        <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
          <Stack gap="md">
            <Title order={3} ta="center" fw={600}>
              {isEdit ? "Update Project" : "Add Project Details"}
            </Title>

            <TextInput
              label="Project Title"
              placeholder="Enter project title"
              required
              size="sm"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />

            {/* Multi-Email Input Section */}
            <Box>
              <Text size="sm" fw={500} mb="xs">
                Project Members (Email)
              </Text>
              
              <Group gap="xs" mb="xs">
                <TextInput
                  placeholder="Enter email and press Enter"
                  size="sm"
                  style={{ flex: 1 }}
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                    setValidationError("");
                  }}
                  onKeyDown={handleEmailKeyDown}
                  error={validationError}
                />
                <Button
                  size="sm"
                  variant="light"
                  onClick={addEmail}
                  disabled={!emailInput.trim()}
                >
                  <IconPlus size={16} />
                </Button>
              </Group>

              {/* Display added emails as chips */}
              {emails.length > 0 && (
                <Box mb="sm">
                  <Text size="xs" c="dimmed" mb="xs">
                    Added members ({emails.length}) - invitations will be sent to unregistered users:
                  </Text>
                  <Group gap="xs" wrap="wrap">
                    {emails.map((email) => (
                      <Chip
                        key={email}
                        checked={false}
                        onClick={() => {}}
                        color="indigo"
                        variant="filled"
                      >
                        <Group gap="xs">
                          {email}
                          <IconX
                            size={14}
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              removeEmail(email);
                            }}
                          />
                        </Group>
                      </Chip>
                    ))}
                  </Group>
                </Box>
              )}

              {/* Submission Error */}
              {submitError && (
                <Alert
                  icon={<IconAlertCircle size={16} />}
                  color="red"
                  variant="light"
                  mt="sm"
                >
                  {submitError}
                </Alert>
              )}
            </Box>
            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                variant="filled"
                size="sm"
                radius="md"
                disabled={!projectTitle.trim() || isSubmitting}
                loading={isSubmitting}
              >
                {isEdit ? "Update Project" : "Create Project"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Container>
    </Modal>
  );
}
