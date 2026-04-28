import { Card, Text, Badge, Group, Avatar, Stack, ActionIcon } from '@mantine/core';
import { IconCalendar, IconGripVertical, IconTrash } from '@tabler/icons-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useNavigate, useParams } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import ApiService from '../../utils/ApiService.js';
import { notifyError, notifySuccess } from '../../utils/Notification.jsx';

// Reusable component - use anywhere!
export function TaskCard({ task, userRole, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { task } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? 'grabbing' : 'pointer',
    touchAction: 'none', // Critical for drag to work!
  };

  // Color based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'URGENT': return 'red';
      case 'HIGH': return 'orange';
      case 'MEDIUM': return 'yellow';
      case 'LOW': return 'green';
      default: return 'gray';
    }
  };
  const navigate = useNavigate();
  const { projectId } = useParams();

  const handleCardClick = (e) => {
    // Prevent navigation if clicking on drag handle
    if (e.target.closest('[data-drag-handle]')) return;
    navigate(`/projects/${projectId}/tasks/${task.id}`);
  };

  const handleDelete = async (e) => {
    e.stopPropagation(); // Prevent card click
    try {
      await ApiService.DeleteData(`/project/deleteTaskByTaskId/${task.id}`);
      notifySuccess('Task deleted successfully');
      onDelete?.(task.id); // Notify parent to remove from state
    } catch (error) {
      notifyError(error.message || 'Failed to delete task');
    }
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      shadow="sm"
      padding="sm"
      radius="md"
      withBorder
      onClick={handleCardClick}
    >
      <Stack gap="xs">
        {/* Title with drag handle */}
        <Group gap="xs" wrap="nowrap">
          <Group gap="xs" wrap="nowrap" {...attributes} {...listeners} style={{ cursor: isDragging ? 'grabbing' : 'grab', flex: 1 }} data-drag-handle>
            <IconGripVertical size={16} color="gray" />
            <Text fw={500} size="sm" style={{ flex: 1, userSelect: 'none' }}>{task.title}</Text>
          </Group>
          {userRole && (
            <ActionIcon
              color="red"
              variant="light"
              size="sm"
              onClick={handleDelete}
            >
              <IconTrash size={14} />
            </ActionIcon>
          )}
        </Group>
        
        {/* Description (optional) */}
        {task.description && (
          <Text size="xs" c="dimmed" lineClamp={2}>
            {task.description}
          </Text>
        )}
        
        {/* Priority badge + Assignee */}
        <Group justify="space-between" mt="xs">
          <Badge 
            color={getPriorityColor(task.priority)} 
            size="sm"
          >
            {task.priority}
          </Badge>
          
          {task.assignee && (
            <Avatar 
              size="sm" 
              radius="xl"
              src={task.assignee.avatar}
            >
              {task.assignee.name[0]}
            </Avatar>
          )}
        </Group>
        
        {/* Deadline */}
        {task.deadline && (
          <Group gap={4}>
            <IconCalendar size={14} stroke={1.5} />
            <Text size="xs" c="dimmed">
              {new Date(task.deadline).toLocaleDateString()}
            </Text>
          </Group>
        )}
      </Stack>
    </Card>
  );
}