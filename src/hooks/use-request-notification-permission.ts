import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Permission =  globalThis.NotificationPermission

const hasNotificationInBrowser = "Notification" in window;
export function useRequestNotificationPermission() {
  const [permission, setPermission] = useState<Permission>('default');

  useEffect(() => {
    if (!hasNotificationInBrowser) {
      toast.error("Your browser does not support notifications");
      return;
    }

    if (Notification.permission === "granted") {
      setPermission('granted');
      return;
    }

    if (Notification.permission === "denied") {
      setPermission('denied');
      return;
    }

    async function requestPermission() {
      const permission = await Notification.requestPermission();

      setPermission(permission);
    }

    requestPermission();
  }, []);

  return {
    permission
  }
}
