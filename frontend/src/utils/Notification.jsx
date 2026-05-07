// utils/notify.js

import { notifications } from "@mantine/notifications";

export const notifyError = (message, title = "Error") => {
  notifications.show({
    color: "red",
    title,
    message,
    position: "bottom-right",
  });
};

export const notifySuccess = (message, title = "Success") => {
  notifications.show({
    color: "green",
    title,
    message,
    position: "bottom-right",
  });
};
