import * as Toast from "react-native-toast-message";

export const showToast = (
  type: Toast.ToastShowParams["type"],
  title: string,
  message: string
) => {
  Toast.default.show({
    type,
    text1: title,
    text2: message,
    position: "top",
  });
};
