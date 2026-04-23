import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
  Button,
  Stack,
  Box,
  Avatar,
  Badge,
} from "@mantine/core";
import {
  IconChecklist,
  IconClock,
  IconCheck,
  IconFolder,
  IconArrowRight,
} from "@tabler/icons-react";

// Sample projects for dashboard
const recentProjects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "active",
    progress: 75,
    members: 4,
    color: "indigo",
  },
  {
    id: 2,
    name: "Mobile App",
    status: "active",
    progress: 45,
    members: 3,
    color: "blue",
  },
  {
    id: 3,
    name: "Database Migration",
    status: "completed",
    progress: 100,
    members: 2,
    color: "green",
  },
];

const recentActivity = [
  { user: "John Doe", action: "completed task", item: "Setup database", time: "2 hours ago" },
  { user: "Jane Smith", action: "created task", item: "Design homepage", time: "4 hours ago" },
  { user: "Mike Johnson", action: "moved task to", item: "In Progress", time: "5 hours ago" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  // Sample stats
  const totalProjects = 8;
  const activeProjects = 5;
  const completedProjects = 2;
  const totalTasks = 24;

  return (
    <Container size="xl" py="xl">
      {/* Header Section */}
      <Group justify="space-between" align="flex-start" mb="lg">
        <Box>
          <Title order={1} mb="xs">
            Dashboard
          </Title>
          <Text size="sm" c="dimmed">
            Overview of your projects and recent activity
          </Text>
        </Box>
        <Button
          leftSection={<IconFolder size={16} />}
          variant="filled"
          onClick={() => navigate("/projects")}
        >
          View Projects
        </Button>
      </Group>

      {/* Stats Cards */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mb="xl">
        {/* Total Projects */}
        <Card withBorder shadow="sm">
          <Group justify="space-between" mb="xs">
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              Total Projects
            </Text>
            <IconFolder
              size={20}
              stroke={1.5}
              color="var(--mantine-color-blue-6)"
            />
          </Group>
          <Text size="xl" fw={700}>
            {totalProjects}
          </Text>
          <Badge color="blue" size="sm" mt="sm" variant="light">
            Active & Completed
          </Badge>
        </Card>

        {/* Active Projects */}
        <Card withBorder shadow="sm">
          <Group justify="space-between" mb="xs">
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              Active Projects
            </Text>
            <IconClock
              size={20}
              stroke={1.5}
              color="var(--mantine-color-yellow-6)"
            />
          </Group>
          <Text size="xl" fw={700}>
            {activeProjects}
          </Text>
          <Badge color="yellow" size="sm" mt="sm" variant="light">
            In Progress
          </Badge>
        </Card>

        {/* Completed Projects */}
        <Card withBorder shadow="sm">
          <Group justify="space-between" mb="xs">
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              Completed
            </Text>
            <IconCheck
              size={20}
              stroke={1.5}
              color="var(--mantine-color-green-6)"
            />
          </Group>
          <Text size="xl" fw={700}>
            {completedProjects}
          </Text>
          <Badge color="green" size="sm" mt="sm" variant="light">
            This Month
          </Badge>
        </Card>

        {/* Total Tasks */}
        <Card withBorder shadow="sm">
          <Group justify="space-between" mb="xs">
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              Total Tasks
            </Text>
            <IconChecklist
              size={20}
              stroke={1.5}
              color="var(--mantine-color-indigo-6)"
            />
          </Group>
          <Text size="xl" fw={700}>
            {totalTasks}
          </Text>
          <Badge color="indigo" size="sm" mt="sm" variant="light">
            Across Projects
          </Badge>
        </Card>
      </SimpleGrid>

      {/* Recent Projects Section */}
      <Stack gap="md" mb="xl">
        <Group justify="space-between" align="center">
          <Title order={3}>Recent Projects</Title>
          <Button
            variant="light"
            rightSection={<IconArrowRight size={16} />}
            onClick={() => navigate("/projects")}
          >
            View All
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {recentProjects.map((project) => (
            <Card
              key={project.id}
              withBorder
              padding="md"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <Group justify="space-between" mb="xs">
                <Text fw={600}>{project.name}</Text>
                <Badge
                  color={
                    project.status === "completed"
                      ? "green"
                      : project.status === "active"
                        ? "blue"
                        : "gray"
                  }
                  size="sm"
                  variant="light"
                >
                  {project.status}
                </Badge>
              </Group>
              <Text size="sm" c="dimmed" mb="md">
                {project.members} members • {project.progress}% complete
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>

      {/* Recent Activity Section */}
      <Stack gap="md">
        <Title order={3}>Recent Activity</Title>
        <Card withBorder>
          <Stack gap="sm">
            {recentActivity.map((activity, idx) => (
              <Group key={idx} gap="sm" py="xs">
                <Avatar name={activity.user} size="sm" />
                <div style={{ flex: 1 }}>
                  <Text size="sm">
                    <Text span fw={500}>
                      {activity.user}
                    </Text>{" "}
                    {activity.action}{" "}
                    <Text span fw={500}>
                      {activity.item}
                    </Text>
                  </Text>
                  <Text size="xs" c="dimmed">
                    {activity.time}
                  </Text>
                </div>
              </Group>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}