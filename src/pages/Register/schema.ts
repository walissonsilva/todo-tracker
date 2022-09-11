import * as yup from "yup";

export const taskSchema = yup
  .object()
  .shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  })
  .required();
