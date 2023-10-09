import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

enum NotificationPermission {
  "default",
  "denied",
  "granted",
}

const hasNotificationInBrowser = "Notification" in window;
export function useRequesrNotificationPermission() {
  const [permission, setPermission] = useState(NotificationPermission.default);

  useEffect(() => {
    if (!hasNotificationInBrowser) {
      toast.error("Your browser does not support notifications");
      return;
    }

    if (Notification.permission === "granted") {
      setPermission(NotificationPermission.granted);
      return;
    }

    if (Notification.permission === "denied") {
      setPermission(NotificationPermission.denied);
      return;
    }

    async function requestPermission() {
      const permission = await Notification.requestPermission();

      console.log("permission", permission);
      setPermission(permission);
    }

    requestPermission();
  }, []);
}
