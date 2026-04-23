import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Text,
  Group,
  Button,
  Stack,
  Box,
  Card,
  Grid,
  Select,
  TextInput,
  Textarea,
  Modal,
  Menu,
  Loader,
  Center,
  Badge,
  ActionIcon,
  SimpleGrid,
  Table,
  Tabs,
  Avatar,
  ScrollArea,
  Divider,
  FileInput,
} from "@mantine/core";
import { DatePickerInput, DateTimePicker } from "@mantine/dates";
import { notifyError, notifySuccess } from "../utils/Notification.jsx";
import { useDisclosure } from "@mantine/hooks";
import {
  IconPlus,
  IconFilter,
  IconUsers,
  IconMessage,
  IconPaperclip,
  IconSend,
  IconUser,
  IconCrown,
  IconX,
  IconArrowLeft,
  IconChecklist,
  IconClock,
  IconCheck,
  IconSearch,
  IconDotsVertical,
  IconMail,
  IconTrash,
} from "@tabler/icons-react";
import { Board } from "../components/kanban/Board";
import ApiService from "../utils/ApiService.js";
import UserContext from "../context/UserContext.js";

// Sample lists - these would come from the project
const initialLists = [
  { id: "backlog", title: "Backlog" },
  { id: "in-progress", title: "In Progress" },
  { id: "in-review", title: "In Review" },
  { id: "completed", title: "Completed" },
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState(initialLists);

  // Modal state
  const [opened, { open, close }] = useDisclosure(false);
  console.log(project);
  // Filter states
  const [filterAssignee, setFilterAssignee] = useState(null);
  const [filterPriority, setFilterPriority] = useState(null);
  const [filterDateFrom, setFilterDateFrom] = useState(null);
  const [filterDateTo, setFilterDateTo] = useState(null);

  // New task form state
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
    assignee: "",
    deadline: null,
  });

  // Members tab state
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [memberRoleFilter, setMemberRoleFilter] = useState(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [isInviting, setIsInviting] = useState(false);

  const removeUserFromProject = async(userId) => {
    try {
      const response = await ApiService.DeleteData(`/project/deleteProjectMember/${projectId}`,{userId});
      setProject({
        ...project,
        projectmembers: project.projectmembers.filter((member) => member.userId !== userId),
      });
      notifySuccess("Member deleted successfully")
    } catch (error) {
      notifyError("Failed to  remove user from project")
      console.error("Error removing user from project:", error);
    }
  }
  // Get current user from localStorage
  const {user} = useContext(UserContext)
  const currentUserId = user?.id;

  // Check if current user is ADMIN for this project
  const isCurrentUserAdmin = project?.projectmembers?.some(
    (member) => member.userId === currentUserId && member.role === "ADMIN"
  );

  // Chat state
  const [messages, setMessages] = useState([
    {
      id: "1",
      senderId: "admin",
      senderName: "Admin",
      content: "Welcome to the project chat! Use this space to discuss tasks and updates.",
      timestamp: new Date().toISOString(),
      type: "text",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [attachment, setAttachment] = useState(null);

  // Fetch project data
  const fetchProject = async () => {
    setIsLoading(true);
    try {
      const resp = await ApiService.GetData(`/project/getProjectByProjectId/${projectId}`);
      console.log(resp);

      if (resp.success && resp.data) {
        // Use actual API response data
        setProject({
          id: resp.data.id,
          title: resp.data.title,
          createdAt: resp.data.createdAt,
          updatedAt: resp.data.updatedAt,
          creatorId: resp.data.creatorId,
          projectmembers: resp.data.projectmembers || [],
          invitations: resp.data.invitations || [],
          status: "active", // Default status since not in response
        });

        // For now, set empty tasks array - you might want to fetch tasks separately
        setTasks([]);
      } else {
        console.error("Invalid response format:", resp);
        notifyError("Failed to load project data");
        setProject(null);
        setTasks([]);
      }
    } catch (error) {
      console.error("Failed to fetch project:", error);
      setProject(null);
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProject();
  }, [projectId]);

  // Get unique users for filters and dropdown (from project members)
  const uniqueUsers = project?.projectmembers
    ?.filter(member => member.user) // Filter out members without user data
    ?.map(member => ({
      value: member.userId, // Use userId as unique value
      label: member.user?.name || member.user?.email || 'Unknown User'
    }))
    ?.filter((user, index, self) =>
      // Remove duplicates based on value (userId)
      index === self.findIndex(u => u.value === user.value)
    ) || [];

  // Filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filterAssignee && task.assignee?.name !== filterAssignee) return false;
    if (filterPriority && task.priority !== filterPriority) return false;
    if (filterDateFrom && new Date(task.deadline) < filterDateFrom)
      return false;
    if (filterDateTo && new Date(task.deadline) > filterDateTo) return false;
    return true;
  });

  // Handle drag end - move task to new column
  const handleDragEnd = (taskId, newListId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, listId: newListId } : task
      )
    );
  };

  // Handle add new task
  const handleAddTask = async () => {
    if (!newTask.title) return;

    try {
      const response = await ApiService.PostData("/project/assignNewTaskToUser", {
        projectId,
        userId: newTask.assignee,
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority,
        deadline: new Date(newTask.deadline)
      });

      if (response.success) {
        notifySuccess(response.message || "Task created successfully!");
        setNewTask({
          title: "",
          description: "",
          priority: "MEDIUM",
          assignee: "",
          deadline: null,
        });
        close();
      } else {
        notifyError(response.message || "Failed to create task");
      }
    } catch (error) {
      notifyError(error.message || "Failed to create task");
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setFilterAssignee(null);
    setFilterPriority(null);
    setFilterDateFrom(null);
    setFilterDateTo(null);
  };
  const addMemberToProject = async() => {
    if (!inviteEmail.trim()) {
      notifyError("Please enter an email address");
      return;
    }
    console.log("Inviting email:", inviteEmail);
    setIsInviting(true);
    try {
      const response = await ApiService.PostData(
        `/project/addProjectMember/${projectId}`,
        { email: inviteEmail }
      );
      
      if (response.success) {
        // Refresh project data to show new member
        await fetchProject();
        setInviteEmail("");
        notifySuccess(response.message || "Member added successfully!");
      } else {
        notifyError(response.message || "Failed to add member");
      }
    } catch (error) {
      notifyError(error.message || "Failed to add member");
    } finally {
      setIsInviting(false);
    }
  }
  // Calculate stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.listId === "completed").length;
  const inProgressTasks = tasks.filter(
    (t) => t.listId === "in-progress"
  ).length;
  const backlogTasks = tasks.filter((t) => t.listId === "backlog").length;

  // Show loader while loading
  if (isLoading) {
    return (
      <Container size="xl" py="xl">
        <Center h={400}>
          <Stack align="center" gap="md">
            <Loader size="lg" />
            <Text c="dimmed">Loading project...</Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  return (
    <>
    <Container size="xl" py="xl">
      {/* Header Section with Back Button */}
      <Group justify="space-between" align="flex-start" mb="lg">
        <Stack gap="xs">
          <Group gap="xs">
            <ActionIcon
              variant="light"
              size="lg"
              onClick={() => navigate("/projects")}
            >
              <IconArrowLeft size={20} />
            </ActionIcon>
            <div>
              <Title order={1}>{project?.title || "Project"}</Title>
              <Text size="sm" c="dimmed">
                Created {project?.createdAt ? new Date(project.createdAt).toLocaleDateString("en-GB") : ""}
              </Text>
            </div>
          </Group>
        </Stack>
        {isCurrentUserAdmin && (
          <Button leftSection={<IconPlus size={16} />} variant="filled" onClick={open}>
            Assign New Task
          </Button>
        )}
      </Group>

      <Tabs defaultValue="tasks" keepMounted={false}>
        <Tabs.List mb="xl">
          <Tabs.Tab value="tasks" leftSection={<IconChecklist size={16} />}>
            Tasks
          </Tabs.Tab>
          <Tabs.Tab value="members" leftSection={<IconUsers size={16} />}>
            Project Members
          </Tabs.Tab>
          <Tabs.Tab value="chat" leftSection={<IconMessage size={16} />}>
            Chat Room
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tasks">
          

      {/* Stats Cards */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mb="xl">
        <Card withBorder shadow="sm">
          <Group justify="space-between" mb="xs">
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              Total Tasks
            </Text>
            <IconChecklist
              size={20}
              stroke={1.5}
              color="var(--mantine-color-blue-6)"
            />
          </Group>
          <Text size="xl" fw={700}>
            {totalTasks}
          </Text>
        </Card>

        <Card withBorder shadow="sm">
          <Group justify="space-between" mb="xs">
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              In Progress
            </Text>
            <IconClock
              size={20}
              stroke={1.5}
              color="var(--mantine-color-yellow-6)"
            />
          </Group>
          <Text size="xl" fw={700}>
            {inProgressTasks}
          </Text>
        </Card>

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
            {completedTasks}
          </Text>
        </Card>

        <Card withBorder shadow="sm">
          <Group justify="space-between" mb="xs">
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              Backlog
            </Text>
            <IconChecklist
              size={20}
              stroke={1.5}
              color="var(--mantine-color-gray-6)"
            />
          </Group>
          <Text size="xl" fw={700}>
            {backlogTasks}
          </Text>
        </Card>
      </SimpleGrid>

      {/* Task Board Header */}
      <Group justify="space-between" align="center" mb="md">
        <Title order={3}>Task Board</Title>
        <Text size="sm" c="dimmed">
          Drag and drop tasks to update status
        </Text>
      </Group>

      {/* Filters Section */}
      <Card
        withBorder
        style={{ background: "transparent" }}
        shadow="sm"
        mb="lg"
        p="md"
      >
        <Group justify="space-between" align="center" mb="xs">
          <Group gap="xs">
            <IconFilter size={18} />
            <Text fw={600}>Filters</Text>
          </Group>
          {(filterAssignee ||
            filterPriority ||
            filterDateFrom ||
            filterDateTo) && (
            <Button
              variant="light"
              color="red"
              size="xs"
              leftSection={<IconX size={14} />}
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          )}
        </Group>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Select
              label="Assignee"
              placeholder="All Users"
              data={uniqueUsers}
              value={filterAssignee}
              onChange={setFilterAssignee}
              clearable
              searchable
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Select
              label="Priority"
              placeholder="All Priorities"
              data={[
                { value: "URGENT", label: "Urgent" },
                { value: "HIGH", label: "High" },
                { value: "MEDIUM", label: "Medium" },
                { value: "LOW", label: "Low" },
              ]}
              value={filterPriority}
              onChange={setFilterPriority}
              clearable
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <DatePickerInput
              label="From Date"
              placeholder="Start date"
              value={filterDateFrom}
              onChange={setFilterDateFrom}
              clearable
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <DatePickerInput
              label="To Date"
              placeholder="End date"
              value={filterDateTo}
              onChange={setFilterDateTo}
              clearable
            />
          </Grid.Col>
        </Grid>
        {filteredTasks.length !== tasks.length && (
          <Text size="sm" c="dimmed" mt="sm">
            Showing {filteredTasks.length} of {tasks.length} tasks
          </Text>
        )}
      </Card>

          {/* Kanban Board */}
          <Board lists={lists} tasks={filteredTasks} onDragEnd={handleDragEnd} />
        </Tabs.Panel>

        {/* Project Members Tab */}
        <Tabs.Panel value="members">
          <Card withBorder mb="lg" p="md">
            <Group gap="md">
              {isCurrentUserAdmin && (
                <>
                  <Badge variant="light">Enter Email</Badge>
                  <TextInput
                    placeholder="Enter email..."
                    leftSection={<IconSearch size={16} />}
                    style={{ flex: 1 }}
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && inviteEmail.trim()) {
                        addMemberToProject();
                      }
                    }}
                  />
                  <Button
                    leftSection={<IconPlus size={16} />}
                    variant="filled"
                    onClick={addMemberToProject}
                    loading={isInviting}
                    disabled={!inviteEmail.trim()}
                  >
                    Add Member
                  </Button>
                  <Divider size="md" orientation="vertical" />
                </>
              )}
              <TextInput
                placeholder="Search members..."
                leftSection={<IconSearch size={16} />}
                value={memberSearchQuery}
                onChange={(e) => setMemberSearchQuery(e.target.value)}
                style={{ flex: 1 }}
              />
              <Select
                placeholder="Filter by role"
                data={["ADMIN", "MEMBER"]}
                value={memberRoleFilter}
                onChange={setMemberRoleFilter}
                clearable
                style={{ width: 200 }}
              />
              {(memberSearchQuery || memberRoleFilter) && (
                <Button variant="light" color="red" onClick={() => {
                  setMemberSearchQuery("");
                  setMemberRoleFilter(null);
                }}>
                  Clear
                </Button>
              )}
            </Group>
          </Card>

          <Card withBorder>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Member</Table.Th>
                  <Table.Th>Role</Table.Th>
                  <Table.Th>Joined</Table.Th>
                  <Table.Th style={{ textAlign: "right" }}>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {console.log(project)}
                {project?.projectmembers
                  ?.filter(member => {
                    const matchesSearch = member.user?.name?.toLowerCase().includes(memberSearchQuery.toLowerCase()) ||
                                         member.user?.email?.toLowerCase().includes(memberSearchQuery.toLowerCase());
                    const matchesRole = memberRoleFilter ? member.role === memberRoleFilter : true;
                    return matchesSearch && matchesRole;
                  })
                  ?.map((member) => (
                    
                    <Table.Tr key={member.id}>
                      <Table.Td>
                        <Group gap="sm">
                          <Avatar color="indigo" radius="xl">
                            {member.user?.name
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase() || "U"}
                          </Avatar>
                          <Stack gap={0}>
                            <Text fw={500}>{member.user?.name || "Unknown User"}</Text>
                            <Text size="xs" c="dimmed">
                              {member.user?.email || ""}
                            </Text>
                          </Stack>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Badge color={member.role === "ADMIN" ? "red" : "blue"} variant="light">
                          {member.role === "ADMIN" ? "Admin" : "Member"}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{member.user.createdAt ? new Date(member.user?.createdAt).toLocaleDateString("en-GB") : "N/A"}</Text>
                      </Table.Td>
                      <Table.Td style={{ textAlign: "right" }}>
                        <Menu position="bottom-end">
                          <Menu.Target>
                            <ActionIcon variant="subtle">
                              <IconDotsVertical size={16} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            {isCurrentUserAdmin && member.userId !== currentUserId && (
                              <>
                                <Menu.Divider />
                                <Menu.Item
                                  leftSection={<IconTrash size={14} />}
                                  color="red"
                                  onClick={() => removeUserFromProject(member.userId)}
                                >
                                  Remove
                                </Menu.Item>
                              </>
                            )}
                          </Menu.Dropdown>
                        </Menu>
                      </Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>

            {(!project?.projectmembers || project.projectmembers.length === 0) && (
              <Stack align="center" py="xl">
                <IconUser size={48} color="gray" />
                <Text c="dimmed">No members found</Text>
              </Stack>
            )}
          </Card>

          {/* Pending Invitations Section */}
          {project?.invitations && project.invitations.length > 0 && (
            <Card withBorder mt="lg">
              <Text fw={600} mb="md">Pending Invitations</Text>
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Email</Table.Th>
                    <Table.Th>Role</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Expires At</Table.Th>
                    {/* <Table.Th style={{ textAlign: "right" }}>Actions</Table.Th> */}
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {project.invitations
                    .filter(inv => inv.status === "PENDING")
                    .map((invitation) => (
                      <Table.Tr key={invitation.id}>
                        <Table.Td>
                          <Group gap="sm">
                            <IconMail size={16} color="gray" />
                            <Text>{invitation.email}</Text>
                          </Group>
                        </Table.Td>
                        <Table.Td>
                          <Badge color="blue" variant="light">
                            {invitation.role}
                          </Badge>
                        </Table.Td>
                        <Table.Td>
                          <Badge color="yellow" variant="dot" size="sm">
                            {invitation.status}
                          </Badge>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm">
                            {invitation.expiresAt
                              ? new Date(invitation.expiresAt).toLocaleDateString("en-GB")
                              : "N/A"}
                          </Text>
                        </Table.Td>
                        {/* <Table.Td style={{ textAlign: "right" }}>
                          {isCurrentUserAdmin && (
                            <Menu position="bottom-end">
                              <Menu.Target>
                                <ActionIcon variant="subtle">
                                  <IconDotsVertical size={16} />
                                </ActionIcon>
                              </Menu.Target>
                              <Menu.Dropdown>
                                <Menu.Item
                                  leftSection={<IconTrash size={14} />}
                                  color="red"
                                  onClick={() => alert("Cancel invitation functionality")}
                                >
                                  Cancel Invitation
                                </Menu.Item>
                              </Menu.Dropdown>
                            </Menu>
                          )}
                        </Table.Td> */}
                      </Table.Tr>
                    ))}
                </Table.Tbody>
              </Table>

              {project.invitations.filter(inv => inv.status === "PENDING").length === 0 && (
                <Stack align="center" py="xl">
                  <IconMail size={48} color="gray" />
                  <Text c="dimmed">No pending invitations</Text>
                </Stack>
              )}
            </Card>
          )}
        </Tabs.Panel>

        {/* Chat Room Tab */}
        <Tabs.Panel value="chat">
          <Card withBorder style={{ height: "600px", display: "flex", flexDirection: "column" }}>
            <Card.Section withBorder inheritPadding py="sm">
              <Text fw={600}>Project Chat Room</Text>
            </Card.Section>

            <ScrollArea style={{ flex: 1, padding: "16px" }}>
              <Stack gap="md">
                {messages.map((message) => (
                  <Group key={message.id} justify={message.senderId === "admin" ? "flex-end" : "flex-start"}>
                    <Box style={{ maxWidth: "70%" }}>
                      <Group gap="xs" mb="xs">
                        <Avatar size="sm" color="indigo">
                          {message.senderName.split(" ").map(n => n[0]).join("").toUpperCase()}
                        </Avatar>
                        <Text size="xs" fw={500}>{message.senderName}</Text>
                        <Text size="xs" c="dimmed">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </Text>
                      </Group>
                      <Card
                        shadow="sm"
                        padding="sm"
                        radius="md"
                        style={{
                          backgroundColor: message.senderId === "admin" ? "var(--mantine-color-blue-light)" : "var(--mantine-color-gray-light)",
                        }}
                      >
                        <Text size="sm">{message.content}</Text>
                      </Card>
                    </Box>
                  </Group>
                ))}
              </Stack>
            </ScrollArea>

            <Card.Section withBorder inheritPadding p="sm">
              <Group gap="sm">
                <TextInput
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  style={{ flex: 1 }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && newMessage.trim()) {
                      const message = {
                        id: String(Date.now()),
                        senderId: "admin",
                        senderName: "Admin",
                        content: newMessage,
                        timestamp: new Date().toISOString(),
                        type: attachment ? "file" : "text",
                        attachment: attachment,
                      };
                      setMessages(prev => [...prev, message]);
                      setNewMessage("");
                      setAttachment(null);
                    }
                  }}
                />
                <FileInput
                  placeholder="Attach file"
                  value={attachment}
                  onChange={setAttachment}
                  size="sm"
                  style={{ width: 150 }}
                  leftSection={<IconPaperclip size={14} />}
                  clearable
                />
                <Button
                  leftSection={<IconSend size={14} />}
                  onClick={() => {
                    if (!newMessage.trim() && !attachment) return;
                    const message = {
                      id: String(Date.now()),
                      senderId: "admin",
                      senderName: "Admin",
                      content: newMessage,
                      timestamp: new Date().toISOString(),
                      type: attachment ? "file" : "text",
                      attachment: attachment,
                    };
                    setMessages(prev => [...prev, message]);
                    setNewMessage("");
                    setAttachment(null);
                  }}
                  disabled={!newMessage.trim() && !attachment}
                >
                  Send
                </Button>
              </Group>
            </Card.Section>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Container>
    <Modal opened={opened} onClose={close} title="Create New Task" size="lg">
            <Stack>
              <TextInput
                label="Task Title"
                placeholder="Enter task title"
                required
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
              />
          <Textarea
            label="Description"
            placeholder="Enter task description"
            minRows={3}
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <Grid>
            <Grid.Col span={6}>
              <Select
                label="Priority"
                data={[
                  { value: "URGENT", label: "Urgent" },
                  { value: "HIGH", label: "High" },
                  { value: "MEDIUM", label: "Medium" },
                  { value: "LOW", label: "Low" },
                ]}
                value={newTask.priority}
                onChange={(val) => setNewTask({ ...newTask, priority: val })}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label="Assign To"
                data={uniqueUsers}
                placeholder="Select user"
                value={newTask.assignee}
                onChange={(val) =>
                  setNewTask({ ...newTask, assignee: val })
                }
                searchable
                clearable
              />
            </Grid.Col>
          </Grid>
          <DateTimePicker
            label="Deadline"
            placeholder="Pick a date"
            value={newTask.deadline}
            onChange={(val) => {
              setNewTask({ ...newTask, deadline: val })
            }}
            clearable
          />{console.log(newTask.deadline)}
          <Group justify="flex-end" mt="md">
            <Button variant="light" onClick={close}>
              Cancel
            </Button>
            <Button onClick={handleAddTask} disabled={!newTask.title}>
              Create Task
            </Button>
          </Group>
        </Stack>
      </Modal>
      </>
  );
}
