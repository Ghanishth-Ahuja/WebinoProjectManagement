import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Group,
  TextInput,
  Button,
  Loader,
  Center,
  Modal,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { IconFolderPlus, IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../components/common/ProjectCard";
import ApiService from "../utils/ApiService";
import { notifyError, notifySuccess } from "../utils/Notification.jsx";
import { useDisclosure } from "@mantine/hooks";
import { AddProjectModal } from "../components/common";
import UserContext from "../context/UserContext.js";



export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  
  // Edit mode state
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Delete confirmation state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  // Fetch all projects
  const fetchAllProjects = async () => {
    try {
      setLoading(true);
      const response = await ApiService.GetData("/project/getProjectsByUserId");
      setProjects(response.data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle project creation with navigation
  const handleCreateProject = async (projectData) => {
    try {
      // API call to create project - backend handles email validation & invitations
      const response = await ApiService.PostData("/project/create", {
        title: projectData.title,
        memberEmails: projectData.memberEmails || [],
      });

      if (response.success) {
        notifySuccess(response.data?.message || "Project created successfully!");

        // Close modal
        close();

        // Refresh projects list to show the new project
        fetchAllProjects();

        // Navigate to the new project page
        const projectId = response.data?.project?.id || response.data?.projectId;
        if (projectId) {
          navigate(`/projects/${projectId}`);
        }

        return response.data;
      }
    } catch (error) {
      console.error("Failed to create project:", error);
      notifyError(error.message || "Failed to create project");
      throw error;
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  // Handle edit project - open modal with project data
  const handleEdit = (project) => {
    setIsEditMode(true);
    setSelectedProject(project);
    open();
  };

  // Handle open create modal
  const handleOpenCreate = () => {
    setIsEditMode(false);
    setSelectedProject(null);
    open();
  };

  // Handle delete click - open confirmation
  const handleDeleteClick = (project) => {
    setProjectToDelete(project);
    setDeleteModalOpen(true);
  };

  // Handle confirm delete
  const handleConfirmDelete = async () => {
    if (!projectToDelete) return;
    
    setIsDeleting(true);
    try {
      const response = await ApiService.DeleteData(`/project/deleteProjectById`,{projectId:projectToDelete.id});
      
      if (response.success) {
        notifySuccess("Project deleted successfully!");
        setDeleteModalOpen(false);//close modal
        setProjectToDelete(null);
        fetchAllProjects(); // Refresh list 
      }
    } catch (error) {
      console.error("Failed to delete project:", error);
      notifyError(error.message || "Failed to delete project");
    } finally {
      setIsDeleting(false);
    }
  };

  // Get current user from context
  const {user} = useContext(UserContext)
  const currentUserId = user?.id;

  // Check if user is ADMIN for a specific project
  const isProjectAdmin = (project) => {
    return project.projectmembers?.some(
      (member) => member.userId === currentUserId && member.role === "ADMIN"
    );
  };

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });


  return (<>
    <Container size="xl" py="xl">
      {/* Header Section */}
      <Group justify="space-between" align="flex-start" mb="lg">
        <div>
          <Title order={1}>Projects</Title>
          <Text c="dimmed" size="sm">
            Manage and track your project progress
          </Text>
        </div>
        <Button
          variant="outline"
          justify="flex-start"
          leftSection={<IconFolderPlus />}
          onClick={handleOpenCreate}>
          Add New Project
        </Button>
      </Group>

      {/* Filters Section */}
      <Group mb="xl" gap="md">
        <TextInput
          placeholder="Search projects..."
          leftSection={<IconSearch size={16} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1, maxWidth: 300 }}
        />
        <Text c="dimmed" size="sm">
          {projects.length} project{projects.length !== 1 ? 's' : ''}
        </Text>
      </Group>

      {/* Projects Grid */}
      {loading ? <Center >
        <Loader color="blue" size="xl" />
      </Center> : filteredProjects.length > 0 ? (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              canModify={isProjectAdmin(project)}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Text c="dimmed" ta="center" py="xl">
          No projects found matching your criteria.
        </Text>
      )}
    </Container>
    <AddProjectModal
      open={open}
      close={close}
      opened={opened}
      handleSubmit={handleCreateProject}
      isEdit={isEditMode}
      project={selectedProject}
    />
    
    {/* Delete Confirmation Modal */}
    <Modal
      opened={deleteModalOpen}
      onClose={() => setDeleteModalOpen(false)}
      title="Confirm Delete"
      centered
      size="sm"
    >
      <Text size="sm">
        Are you sure you want to delete the Project - <strong>{projectToDelete?.title}</strong>?
      </Text>
      <Text size="xs" c="dimmed" mt="xs">
        This action cannot be undone.
      </Text>
      <Group justify="flex-end" mt="lg">
        <Button variant="light" onClick={() => setDeleteModalOpen(false)}>
          Cancel
        </Button>
        <Button 
          color="red" 
          onClick={handleConfirmDelete}
          loading={isDeleting}
        >
          OK
        </Button>
      </Group>
    </Modal>
  </>
  );
}
