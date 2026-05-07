import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from '../utils/ApiService';
import { Loader } from "@mantine/core";
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


export default function Dashboard() {
  const navigate = useNavigate();

  // State for dynamic data
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
    totalTasks: 0,
  });

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Fetch projects
        const projectsResponse = await ApiService.GetData('/project/getProjectsByUserId');
        const projectsData = projectsResponse.data || [];
        setProjects(projectsData.slice(0, 3)); // Show only recent 3 projects

        // Calculate stats
        const totalProjects = projectsData.length;
        const activeProjects = projectsData.filter(p => p.status === 'active').length;
        const completedProjects = projectsData.filter(p => p.status === 'completed').length;

        // Fetch tasks for total count (you might need to create an endpoint for this)
        // For now, we'll set a placeholder
        const totalTasks = 0; // Placeholder

        setStats({
          totalProjects,
          activeProjects,
          completedProjects,
          totalTasks,
        });

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <Container size="xl" py="xl">
        <Group justify="center">
          <Loader size="lg" />
        </Group>
      </Container>
    );
  }

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
            {stats.totalProjects}
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
            {stats.activeProjects}
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
            {stats.completedProjects}
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
            {stats.totalTasks}
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
          {projects.length === 0 ? (
            <Card withBorder padding="md">
              <Text ta="center" c="dimmed">No projects found. Create your first project!</Text>
            </Card>
          ) : (
            projects.map((project) => (
              <Card
                key={project.id}
                withBorder
                padding="md"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <Group justify="space-between" mb="xs">
                  <Text fw={600}>{project.title}</Text>
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
                  {project.projectmembers?.length || 0} members • Created {new Date(project.createdAt).toLocaleDateString()}
                </Text>
              </Card>
            ))
          )}
        </SimpleGrid>
      </Stack>

      {/* Recent Activity Section */}
      {/* <Stack gap="md">
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
      </Stack> */}
    </Container>
  );
}