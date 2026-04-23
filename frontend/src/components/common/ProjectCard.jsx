import { Card, Stack, Text, Box, Group, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconFolder, IconEdit, IconTrash } from "@tabler/icons-react";

/**
 * ProjectCard component
 * Displays folder icon, project title, and edit/delete actions
 */
export function ProjectCard({ project, onEdit, onDelete, canModify = false }) {
  const navigate = useNavigate();
  const { id, title, color = "indigo" } = project;

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit?.(project);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete?.(project);
  };

  return (
    <Card
      withBorder
      padding="lg"
      radius="md"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--mantine-shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Action Buttons - Top Right - Only shown for ADMIN */}
      {canModify && (
        <Group gap="xs" style={{ position: "absolute", top: 8, right: 8 }}>
          <ActionIcon
            variant="light"
            color="blue"
            size="sm"
            onClick={handleEdit}
            title="Edit Project"
          >
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon
            variant="light"
            color="red"
            size="sm"
            onClick={handleDelete}
            title="Delete Project"
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      )}

      <Stack align="center" gap="sm" mt="md">
        {/* Big Folder Icon */}
        <Box
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            background: `var(--mantine-color-${color}-light)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconFolder
            size={50}
            color={`var(--mantine-color-${color}-6)`}
          />
        </Box>

        {/* Project Title */}
        <Text fw={600} size="md" ta="center" lineClamp={2}>
          {title}
        </Text>
      </Stack>
    </Card>
  );
}

export default ProjectCard;
