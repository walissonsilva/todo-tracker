import * as ToastMessage from "react-native-toast-message";

interface ToastProps extends ToastMessage.ToastShowParams {}

export const Toast = (props: ToastProps) => {
  ToastMessage.default.show(props);
};
