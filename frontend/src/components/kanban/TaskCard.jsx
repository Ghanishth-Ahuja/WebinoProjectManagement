import { Card, Text, Badge, Group, Avatar, Stack } from '@mantine/core';
import { IconCalendar, IconGripVertical } from '@tabler/icons-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Reusable component - use anywhere!
export function TaskCard({ task, onClick }) {
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
    cursor: isDragging ? 'grabbing' : 'grab',
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

  return (
    <Card
      ref={setNodeRef}
      style={style}
      shadow="sm"
      padding="sm"
      radius="md"
      withBorder
      onClick={onClick}
    >
      <Stack gap="xs">
        {/* Title with drag handle */}
        <Group gap="xs" wrap="nowrap" {...attributes} {...listeners} style={{ cursor: 'grab' }}>
          <IconGripVertical size={16} color="gray" />
          <Text fw={500} size="sm" style={{ flex: 1, userSelect: 'none' }}>{task.title}</Text>
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