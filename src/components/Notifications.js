import React from "react";
import { useEffect } from "react";
import {
  useHMSNotifications,
  HMSNotificationTypes,
} from "@100mslive/hms-video-react";

const Notification = () => {
  const notification = useHMSNotifications();


  useEffect(() => {
    if (!notification) {
      return;
    }

    console.log("notification type", notification.type);
    console.log("data", notification.data);

    // you can use the following to show appropriate toast notifications for eg.
    switch (notification.type) {
      case HMSNotificationTypes.PEER_JOINED:
        console.log(`${notification.data.name} joined`);
        break;
      case HMSNotificationTypes.PEER_LEFT:
        console.log(`${notification.data.name} left`);
        break;
      case HMSNotificationTypes.NEW_MESSAGE:
        console.log(
          `${notification.data.message} received from ${notification.data.senderName}`
        );
        break;
      case HMSNotificationTypes.ERROR:
        console.log("[Error]", notification.data);
        console.log("[Error Code]", notification.data.code);
        break;
      case HMSNotificationTypes.RECONNECTING:
        console.log("[Reconnecting]", notification.data);
        break;
      case HMSNotificationTypes.RECONNECTED:
        console.log("[Reconnected]");
        break;
      default:
        break;
    }
  }, [notification]);

  return (
    <div className="notification-bar">
      {notification?.type}
    </div>
  );
};

export default Notification;