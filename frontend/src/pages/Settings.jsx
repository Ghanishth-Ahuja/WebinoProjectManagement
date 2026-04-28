import { useState, useContext } from "react";
import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Button,
  TextInput,
  Divider,
  Tabs,
  Avatar,
  Select,
  Switch,
  Badge,
  ActionIcon,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconUser,
  IconLock,
  IconBell,
  IconPalette,
  IconCheck,
  IconTrash,
  IconUpload,
} from "@tabler/icons-react";
import UserContext from "../context/UserContext.js";
import { notifications } from "@mantine/notifications";
import ApiService from "../utils/ApiService.js";
import { notifyError, notifySuccess } from "../utils/Notification.jsx";

/**
 * Reusable SectionCard component for settings sections
 */
function SectionCard({ title, description, children, icon: Icon }) {
  return (
    <Card withBorder>
      <Stack gap="md">
        <Group gap="xs">
          {Icon && <Icon size={20} color="var(--mantine-color-indigo-6)" />}
          <div>
            <Text fw={500}>{title}</Text>
            {description && (
              <Text size="xs" c="dimmed">
                {description}
              </Text>
            )}
          </div>
        </Group>
        <Divider />
        {children}
      </Stack>
    </Card>
  );
}

/**
 * Profile Tab Content
 */
function ProfileTab() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Name is too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })
  const [userName,setUserName]=useState(form.getInputProps("name").value)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await ApiService.PostData(`/user/updateUserName/${user?.id}`, {userName});
      if (response.success) {
        setUser({ ...user, name: userName });
        notifySuccess(
          "Profile updated successfully",
        );
      }
    } catch (error) {
      notifyError("Failed to update profile",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack gap="md">
      <SectionCard
        title="Profile Information"
        description="Update your personal details and public profile"
        icon={IconUser}
      >
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            {/* Avatar Upload Section */}
            <Group align="flex-start">
              <Avatar size="xl" name={user?.name} />
              <Stack gap="xs">
                <Button
                  variant="light"
                  size="sm"
                  leftSection={<IconUpload size={14} />}
                >
                  Change Avatar
                </Button>
                <Text size="xs" c="dimmed">
                  JPG, PNG or GIF. Max size 2MB.
                </Text>
              </Stack>
            </Group>

            <TextInput
              label="Full Name"
              placeholder="Your name"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />

            <TextInput
              label="Email Address"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
              readOnly={true}
              disabled={true}

            />
            <Group justify="flex-end">
              <Button type="submit" loading={isLoading}>
                Save Changes
              </Button>
            </Group>
          </Stack>
        </form>
      </SectionCard>
    </Stack>
  );
}

/**
 * Security Tab Content
 */
function SecurityTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (currentPassword.length === 0) {
      newErrors.currentPassword = "Current password is required";
    }
    if (newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }
    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      const response = await ApiService.PostData("/user/changepassword", {
        currentPassword,
        newPassword,
        confirmPassword
      });

      if (response.success) {
        notifySuccess("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setErrors({});
      }
    } catch (error) {
      notifyError(error?.message ?? "Failed to change password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack gap="md">
      <SectionCard
        title="Change Password"
        description="Update your password to keep your account secure"
        icon={IconLock}
      >
        <form onSubmit={handlePasswordChange}>
          <Stack gap="md">
            <TextInput
              type="password"
              label="Current Password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              error={errors.currentPassword}
            />
            <TextInput
              type="password"
              label="New Password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              error={errors.newPassword}
            />
            <TextInput
              type="password"
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
            />
            <Group justify="flex-end">
              <Button type="submit" loading={isLoading}>
                Update Password
              </Button>
            </Group>
          </Stack>
        </form>
      </SectionCard>

      {/* <SectionCard
        title="Danger Zone"
        description="Irreversible actions for your account"
        icon={IconTrash}
      >
        <Stack gap="md">
          <Group justify="space-between" align="center">
            <div>
              <Text fw={500}>Delete Account</Text>
              <Text size="xs" c="dimmed">
                Permanently delete your account and all data
              </Text>
            </div>
            <Button variant="filled" color="red">
              Delete Account
            </Button>
          </Group>
        </Stack>
      </SectionCard> */}
    </Stack>
  );
}

/**
 * Notifications Tab Content
 */
// function NotificationsTab() {
//   const [settings, setSettings] = useState({
//     emailNotifications: true,
//     taskAssignments: true,
//     dueDateReminders: true,
//     projectUpdates: false,
//     weeklyDigest: true,
//   });

//   const handleToggle = (key) => {
//     setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <Stack gap="md">
//       <SectionCard
//         title="Notification Preferences"
//         description="Choose what notifications you want to receive"
//         icon={IconBell}
//       >
//         <Stack gap="md">
//           <Group justify="space-between">
//             <div>
//               <Text fw={500}>Email Notifications</Text>
//               <Text size="xs" c="dimmed">
//                 Receive notifications via email
//               </Text>
//             </div>
//             <Switch
//               checked={settings.emailNotifications}
//               onChange={() => handleToggle("emailNotifications")}
//             />
//           </Group>

//           <Divider />

//           <Group justify="space-between">
//             <div>
//               <Text fw={500}>Task Assignments</Text>
//               <Text size="xs" c="dimmed">
//                 When you're assigned to a task
//               </Text>
//             </div>
//             <Switch
//               checked={settings.taskAssignments}
//               onChange={() => handleToggle("taskAssignments")}
//             />
//           </Group>

//           <Group justify="space-between">
//             <div>
//               <Text fw={500}>Due Date Reminders</Text>
//               <Text size="xs" c="dimmed">
//                 Reminders before task deadlines
//               </Text>
//             </div>
//             <Switch
//               checked={settings.dueDateReminders}
//               onChange={() => handleToggle("dueDateReminders")}
//             />
//           </Group>

//           <Group justify="space-between">
//             <div>
//               <Text fw={500}>Project Updates</Text>
//               <Text size="xs" c="dimmed">
//                 Updates about projects you're part of
//               </Text>
//             </div>
//             <Switch
//               checked={settings.projectUpdates}
//               onChange={() => handleToggle("projectUpdates")}
//             />
//           </Group>

//           <Group justify="space-between">
//             <div>
//               <Text fw={500}>Weekly Digest</Text>
//               <Text size="xs" c="dimmed">
//                 Weekly summary of your activity
//               </Text>
//             </div>
//             <Switch
//               checked={settings.weeklyDigest}
//               onChange={() => handleToggle("weeklyDigest")}
//             />
//           </Group>
//         </Stack>
//       </SectionCard>
//     </Stack>
//   );
// }

/**
 * Main Settings Page
 */
export default function Settings() {
  const { user } = useContext(UserContext);

  return (
    <Container size="xl" py="xl">
      {/* Page Header */}
      <Stack gap="xs" mb="xl">
        <Title order={1}>Settings</Title>
        <Text c="dimmed">Manage your account settings and preferences</Text>
      </Stack>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab
            value="profile"
            leftSection={<IconUser size={16} />}
          >
            Profile
          </Tabs.Tab>
          <Tabs.Tab
            value="security"
            leftSection={<IconLock size={16} />}
          >
            Security
          </Tabs.Tab>
          {/* <Tabs.Tab
            value="notifications"
            leftSection={<IconBell size={16} />}
          >
            Notifications
          </Tabs.Tab> */}
        </Tabs.List>

        <Tabs.Panel value="profile" pl="md">
          <ProfileTab />
        </Tabs.Panel>

        <Tabs.Panel value="security" pl="md">
          <SecurityTab />
        </Tabs.Panel>

        {/* <Tabs.Panel value="notifications" pl="md">
          <NotificationsTab />
        </Tabs.Panel> */}
      </Tabs>
    </Container>
  );
}
