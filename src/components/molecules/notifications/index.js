import Success from "./success";
import Error from "./error";

export const notificationState = {
  error: "error",
  success: "success",
  warning: "warning",
};

export const Notification = ({ state, ...props }) => {
  if (state === notificationState.success) {
    return <Success {...props} />;
  }

  if (state === notificationState.error) {
    return <Error {...props} />;
  }

  return <Success {...props} />;
};
