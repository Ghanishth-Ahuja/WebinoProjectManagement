import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Card,
  Avatar,
  Group,
  Badge,
  Button,
  Stack,
  Table,
  ActionIcon,
  Menu,
  TextInput,
  Select,
  Modal,
  Grid,
  Box,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconPlus,
  IconSearch,
  IconDotsVertical,
  IconMail,
  IconTrash,
  IconEdit,
  IconUserCheck,
} from "@tabler/icons-react";

// Sample data for project members
const initialMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    avatar: null,
    joinedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Manager",
    status: "Active",
    avatar: null,
    joinedAt: "2024-02-20",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "Developer",
    status: "Active",
    avatar: null,
    joinedAt: "2024-03-10",
  },
  {
    id: "4",
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    role: "Designer",
    status: "Offline",
    avatar: null,
    joinedAt: "2024-03-25",
  },
  {
    id: "5",
    name: "Tom Wilson",
    email: "tom.wilson@example.com",
    role: "Developer",
    status: "Active",
    avatar: null,
    joinedAt: "2024-04-05",
  },
];

const roleColors = {
  Admin: "red",
  Manager: "orange",
  Developer: "blue",
  Designer: "green",
  Viewer: "gray",
};

export default function ProjectMembers() {
  const [members, setMembers] = useState(initialMembers);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [editingMember, setEditingMember] = useState(null);

  // New member form state
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "Developer",
  });

  // Filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter ? member.role === roleFilter : true;
    return matchesSearch && matchesRole;
  });

  // Get unique roles for filter
  const uniqueRoles = [...new Set(members.map((m) => m.role))];

  // Handle add/edit member
  const handleSaveMember = () => {
    if (!newMember.name || !newMember.email) return;

    if (editingMember) {
      // Edit existing member
      setMembers((prev) =>
        prev.map((m) =>
          m.id === editingMember.id ? { ...m, ...newMember } : m
        )
      );
    } else {
      // Add new member
      const member = {
        id: String(Date.now()),
        ...newMember,
        status: "Active",
        avatar: null,
        joinedAt: new Date().toISOString().split("T")[0],
      };
      setMembers((prev) => [...prev, member]);
    }

    setNewMember({ name: "", email: "", role: "Developer" });
    setEditingMember(null);
    close();
  };

  // Handle edit click
  const handleEdit = (member) => {
    setEditingMember(member);
    setNewMember({
      name: member.name,
      email: member.email,
      role: member.role,
    });
    open();
  };

  // Handle delete
  const handleDelete = (memberId) => {
    setMembers((prev) => prev.filter((m) => m.id !== memberId));
  };
  const  handleInvite =async ()=>{
alert("Invitation sent!");
  }
  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Container size="xl" py="xl">
      {/* Header */}
      <Group justify="space-between" align="flex-start" mb="lg">
        <Box>
          <Title order={1} mb="xs">
            Project Members
          </Title>
        </Box>
      </Group>

      {/* Filters */}
      {/* <Card withBorder mb="lg" p="md">
        <Group gap="md">
          <Badge variant="light">Enter Email</Badge>
          <TextInput
            placeholder="Enter email..."
            leftSection={<IconSearch size={16} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1 }}
          />
         <Button
          leftSection={<IconPlus size={16} />}
          variant="filled"
          onClick={handleInvite}
        >
          Add Member
        </Button>
        </Group>
      </Card> */}
      <Card withBorder mb="lg" p="md">
        
        <Group gap="md">
          {/* <Group gap="md"> */}
          <Badge variant="light">Enter Email</Badge>
          <TextInput
            placeholder="Enter email..."
            leftSection={<IconSearch size={16} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1 }}
          />
         <Button
          leftSection={<IconPlus size={16} />}
          variant="filled"
          onClick={handleInvite}
        >
          Add Member
        </Button>      <Divider size="md" orientation="vertical" />

        {/* </Group> */}
          <TextInput
            placeholder="Search members..."
            leftSection={<IconSearch size={16} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1 }}
          />
          <Select
            placeholder="Filter by role"
            data={uniqueRoles}
            value={roleFilter}
            onChange={setRoleFilter}
            clearable
            style={{ width: 200 }}
          />
          {(searchQuery || roleFilter) && (
            <Button variant="light" color="red" onClick={() => {
              setSearchQuery("");
              setRoleFilter(null);
            }}>
              Clear
            </Button>
          )}
        </Group>
      </Card>

      {/* Members Table */}
      <Card withBorder>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Member</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Joined</Table.Th>
              <Table.Th style={{ textAlign: "right" }}>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredMembers.map((member) => (
              <Table.Tr key={member.id}>
                <Table.Td>
                  <Group gap="sm">
                    <Avatar color="indigo" radius="xl">
                      {getInitials(member.name)}
                    </Avatar>
                    <Stack gap={0}>
                      <Text fw={500}>{member.name}</Text>
                      <Text size="xs" c="dimmed">
                        {member.email}
                      </Text>
                    </Stack>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Badge color={roleColors[member.role]} variant="light">
                    {member.role}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Badge
                      color={member.status === "Active" ? "green" : "gray"}
                      variant="dot"
                      size="sm"
                    >
                      {member.status}
                    </Badge>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{member.joinedAt}</Text>
                </Table.Td>
                <Table.Td style={{ textAlign: "right" }}>
                  <Menu position="bottom-end">
                    <Menu.Target>
                      <ActionIcon variant="subtle">
                        <IconDotsVertical size={16} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item
                        leftSection={<IconMail size={14} />}
                        onClick={() => handleInvite(member.email)}
                      >
                        Send Invite
                      </Menu.Item>
                      <Menu.Item
                        leftSection={<IconEdit size={14} />}
                        onClick={() => handleEdit(member)}
                      >
                        Edit Role
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item
                        leftSection={<IconTrash size={14} />}
                        color="red"
                        onClick={() => handleDelete(member.id)}
                      >
                        Remove
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        {filteredMembers.length === 0 && (
          <Stack align="center" py="xl">
            <IconUserCheck size={48} color="gray" />
            <Text c="dimmed">No members found</Text>
          </Stack>
        )}
      </Card>

      {/* Add/Edit Member Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title={editingMember ? "Edit Member" : "Add New Member"}
        size="md"
      >
        <Stack>
          <TextInput
            label="Full Name"
            placeholder="Enter member name"
            required
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
          />
          <TextInput
            label="Email"
            placeholder="Enter email address"
            required
            type="email"
            value={newMember.email}
            onChange={(e) =>
              setNewMember({ ...newMember, email: e.target.value })
            }
          />
          <Select
            label="Role"
            data={["Admin", "Manager", "Developer", "Designer", "Viewer"]}
            value={newMember.role}
            onChange={(val) => setNewMember({ ...newMember, role: val })}
          />
          <Group justify="flex-end" mt="md">
            <Button variant="light" onClick={close}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveMember}
              disabled={!newMember.name || !newMember.email}
            >
              {editingMember ? "Save Changes" : "Add Member"}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Container>
  );
}
