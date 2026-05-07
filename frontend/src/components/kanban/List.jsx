import { Paper, Text, Stack, Badge, Group } from "@mantine/core";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TaskCard } from "./TaskCard";

export function List({ list, tasks, onTaskClick, userRole, onDelete }) {
  const { setNodeRef, isOver } = useDroppable({
    id: list.id,
    data: { list },
  });

  return (
    <Paper
      ref={setNodeRef}
      p="md"
      withBorder
      style={{
        minHeight: 400,
        backgroundColor: isOver ? "var(--mantine-color-gray-1)" : undefined,
        transition: "background-color 0.2s",
      }}
    >
      <Group justify="space-between" mb="md">
        <Text fw={600} size="lg">
          {list.title}
        </Text>
        <Badge>{tasks.length}</Badge>
      </Group>

      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <Stack gap="sm">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onTaskClick={onTaskClick} userRole={userRole} onDelete={onDelete} />
          ))}
        </Stack>
      </SortableContext>
    </Paper>
  );
}
