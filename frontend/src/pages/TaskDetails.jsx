import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container, Title, Text, Badge, Group, Avatar, Stack, Tabs, Card,
  Button, Textarea, FileInput, ScrollArea, Divider, Loader, Alert,
  ActionIcon, Paper
} from '@mantine/core';
import {
  IconArrowLeft, IconCalendar, IconPaperclip, IconSend, IconTrash,
  IconDownload, IconEye
} from '@tabler/icons-react';
import ApiServices from '../utils/ApiService';
import { notifications } from '@mantine/notifications';
import { notifyError, notifySuccess } from '../utils/Notification';

export default function TaskDetails() {
  const { projectId, taskId } = useParams();
  const navigate = useNavigate();

  // State
  const [task, setTask] = useState(null);
  const [comments, setComments] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Load task details, comments, and attachments on mount
  useEffect(() => {
    loadTaskData();
  }, [projectId, taskId]);

  const loadTaskData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load task details
      const taskResponse = await ApiServices.GetData(`/project/getTaskByTaskId/${taskId}`);
      setTask(taskResponse.data);

      // Load comments
      const commentsResponse = await ApiServices.GetData(`/project/getCommentsByTaskId/${taskId}`);
      setComments(commentsResponse.data || []);

      // Load attachments
      const attachmentsResponse = await ApiServices.GetData(`/project/getAttachmentsByTaskId/${taskId}`);
      setAttachments(attachmentsResponse.data || []);

    } catch (error) {
      console.error('Error loading task data:', error);
      setError(error.message || 'Failed to load task details');
    } finally {
      setLoading(false);
    }
  };

  // Priority color mapping
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'URGENT': return 'red';
      case 'HIGH': return 'orange';
      case 'MEDIUM': return 'yellow';
      case 'LOW': return 'green';
      default: return 'gray';
    }
  };

  // Add comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const response = await ApiServices.PostData(`/project/createCommentOnTask/${taskId}`, {
        content: newComment
      });

      setComments(prev => [...prev, response.data]);
      setNewComment('');
    } catch (error) {
      notifyError(error.message || 'Failed to add comment');
    }
  };

  // Upload attachment
  const handleUploadAttachment = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);
    if(selectedFile.size > 1024 * 1024 * 10) {
      notifyError('File larger than 10 MB');
      return;
    }
    // return  
    try { 
      setUploading(true);
      const response = await ApiServices.PostWithFormData(`/project/addAttachmentsToTask/${taskId}`, formData);

      setAttachments(prev => [...prev, response.data]);
      setSelectedFile(null); // Clear selection after upload
      notifySuccess('File uploaded successfully');
    } catch (error) {
      notifyError(error.message || 'Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  // Delete comment
  const handleDeleteComment = async (commentId) => {
    try {
      await ApiServices.DeleteData(`/project/deleteCommentOnTaskByTaskId/${commentId}`);
      setComments(prev => prev.filter(c => c.id !== commentId));
      notifySuccess('Comment deleted');
    } catch (error) {
      notifyError(
        error.message || 'Failed to delete comment'
      );
    }
  };

  // Delete attachment
  const handleDeleteAttachment = async (attachmentId) => {
    try {
      await ApiServices.DeleteData(`/project/deleteAttachmentOnTaskByTaskId/${attachmentId}`);
      setAttachments(prev => prev.filter(a => a.id !== attachmentId));
      notifySuccess('Attachment deleted');
    } catch (error) {
      notifyError(
        error.message || 'Failed to delete attachment'
      );
    }
  };

  // Download attachment
  const handleDownloadAttachment = async (attachment) => {
    try {
      // Assuming the attachment has a url or we need to fetch it
      window.open(attachment.url, '_blank');
    } catch (error) {
      notifyError('Failed to download file');
    }
  };

  if (loading) {
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Loader size="lg" />
        </Group>
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="lg" py="xl">
        <Alert color="red" title="Error">
          {error}
        </Alert>
      </Container>
    );
  }

  if (!task) {
    return (
      <Container size="lg" py="xl">
        <Alert color="yellow" title="Not Found">
          Task not found
        </Alert>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      {/* Header */}
      <Group mb="xl">
        <ActionIcon
          variant="light"
          size="lg"
          onClick={() => navigate(`/projects/${projectId}`)}
        >
          <IconArrowLeft size={20} />
        </ActionIcon>
        <Title order={2}>Task Details</Title>
      </Group>

      {/* Task Info Card */}
      <Card withBorder shadow="sm" mb="xl">
        <Group justify="space-between" mb="md">
          <Title order={3}>{task.title}</Title>
          <Badge color={getPriorityColor(task.priority)} size="lg">
            {task.priority}
          </Badge>
        </Group>

        {task.description && (
          <Text mb="md">{task.description}</Text>
        )}

        <Group gap="xl">
          {task.deadline && (
            <Group gap="xs">
              <IconCalendar size={16} />
              <Text size="sm">Due: {new Date(task.deadline).toLocaleDateString()}</Text>
            </Group>
          )}

          {task.assignee && (
            <Group gap="xs">
              Assignee Name: <Text size="sm">{task.assignee.name}</Text>
            </Group>
          )}
          {task.assignee && (
            <Group gap="xs">
              Assignee email :<Text size="sm">{task.assignee.email}</Text>
            </Group>
          )}
        </Group>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="comments">
        <Tabs.List mb="xl">
          <Tabs.Tab value="comments">Comments ({comments.length})</Tabs.Tab>
          <Tabs.Tab value="attachments">Attachments ({attachments.length})</Tabs.Tab>
        </Tabs.List>

        {/* Comments Tab */}
        <Tabs.Panel value="comments">
          <Card withBorder>
            <Stack gap="md">
              {/* Comments List */}
              <ScrollArea h={400}>
                <Stack gap="md">
                  {comments.length === 0 ? (
                    <Text c="dimmed" ta="center" py="xl">
                      No comments yet. Be the first to comment!
                    </Text>
                  ) : (
                    comments.map((comment) => (
                      <Paper key={comment.id} withBorder p="md">
                        <Group justify="space-between" mb="xs">
                          <Group gap="xs">
                            <Avatar size="sm" color="blue">
                              {comment.author?.name?.[0] || 'U'}
                            </Avatar>
                            <Text fw={500} size="sm">{comment.author?.name || 'Unknown'}</Text>
                            <Text size="xs" c="dimmed">
                              {new Date(comment.createdAt).toLocaleString()}
                            </Text>
                          </Group>
                          <ActionIcon
                            color="red"
                            variant="light"
                            size="sm"
                            onClick={() => handleDeleteComment(comment.id)}
                          >
                            <IconTrash size={14} />
                          </ActionIcon>
                        </Group>
                        <Text>{comment.content}</Text>
                      </Paper>
                    ))
                  )}
                </Stack>
              </ScrollArea>

              <Divider />

              {/* Add Comment */}
              <Stack gap="sm">
                <Textarea
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  minRows={3}
                />
                <Group justify="flex-end">
                  <Button
                    leftSection={<IconSend size={16} />}
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                  >
                    Post Comment
                  </Button>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </Tabs.Panel>

        {/* Attachments Tab */}
        <Tabs.Panel value="attachments">
          <Card withBorder>
            <Stack gap="md">
              {/* Attachments List */}
              <ScrollArea h={400}>
                <Stack gap="md">
                  {attachments.length === 0 ? (
                    <Text c="dimmed" ta="center" py="xl">
                      No attachments yet.
                    </Text>
                  ) : (
                    attachments.map((attachment) => (
                      <Paper key={attachment.id} withBorder p="md">
                        <Group justify="space-between">
                          <Group gap="xs">
                            <IconPaperclip size={16} />
                            <div>
                              <Text fw={500} size="sm">{attachment.filename}</Text>
                              <Text size="xs" c="dimmed">
                                {new Date(attachment.createdAt).toLocaleString()} • {(attachment.size / 1024).toFixed(1)} KB
                              </Text>
                            </div>
                          </Group>
                          <Group gap="xs">
                            <ActionIcon
                              variant="light"
                              onClick={() => handleDownloadAttachment(attachment)}
                            >
                              <IconDownload size={16} />
                            </ActionIcon>
                            <ActionIcon
                              color="red"
                              variant="light"
                              onClick={() => handleDeleteAttachment(attachment.id)}
                            >
                              <IconTrash size={16} />
                            </ActionIcon>
                          </Group>
                        </Group>
                      </Paper>
                    ))
                  )}
                </Stack>
              </ScrollArea>

              <Divider />

              {/* Upload File */}
              <Stack gap="sm">
                <Group align="flex-end">
                  <FileInput
                    placeholder="Choose file to upload"
                    leftSection={<IconPaperclip size={16} />}
                    value={selectedFile}
                    onChange={setSelectedFile}
                    disabled={uploading}
                    accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,jpg,.jpeg,.svg,.png,.gif"
                    style={{ flex: 1 }}
                  />
                  <Button
                    onClick={handleUploadAttachment}
                    disabled={!selectedFile || uploading}
                    loading={uploading}
                  >
                    Add Attachment
                  </Button>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
