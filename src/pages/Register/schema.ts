import * as yup from "yup";

export const taskSchema = yup
  .object()
  .shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    date: yup
      .string()
      .test("is-date", "Não é uma data válida", (value?: string) => {
        if (!value) return false;
        const [day, month, year] = value.split("/");
        return (
          new Date(`${year}-${month}-${day}`).toLocaleDateString() !==
          "Invalid Date"
        );
      })
      .required("Campo obrigatório"),
  })
  .required();
