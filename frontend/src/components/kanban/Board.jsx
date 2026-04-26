import { SimpleGrid, Box } from "@mantine/core";
import {
  DndContext,
  pointerWithin,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";
import { List } from "./List";
import { TaskCard } from "./TaskCard";

export function Board({ lists, tasks, onDragEnd, onTaskClick, userRole, onDelete = () => {} }) {
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id;
    const newListId = over.id;

    // Check if dropped on a list (column) or a task
    const isList = lists.some((list) => list.id === newListId);

    if (isList) {
      // Dropped on a column - move task to that list
      onDragEnd?.(taskId, newListId);
    } else {
      // Dropped on another task - get that task's list
      const targetTask = tasks.find((t) => t.id === newListId);
      if (targetTask && targetTask.listId !== tasks.find((t) => t.id === taskId)?.listId) {
        onDragEnd?.(taskId, targetTask.listId);
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Box p="md">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md">
          {lists.sort((a, b) => a.position - b.position).map((list) => (
            <List
              key={list.id}
              list={list}
              tasks={tasks.filter((t) => t.listId === list.id).sort((a, b) => a.position - b.position)}
              onTaskClick={onTaskClick}
              userRole={userRole}
              onDelete={onDelete}
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Drag overlay - shows the task being dragged */}
      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} userRole={userRole} onDelete={onDelete} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
