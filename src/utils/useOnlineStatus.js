import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    // if online
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    // if offline
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value 
  return onlineStatus;
};

export default useOnlineStatus;
