import faker from "faker";
import { useFormik } from "formik";

const Form = ({ notes, setNotes }) => {
  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      description: "",
    },
    onSubmit: ({ title, description }, { resetForm }) => {
      const newNoteObj = {
        id: faker.datatype.uuid(),
        title,
        description,
      };

      setNotes([...notes, newNoteObj]);
      resetForm();
    },
  });

  const {
    values: { title, description },
  } = formik;

  return (
    <form style={formStyle} onSubmit={formik.handleSubmit}>
      <input
        style={inputStyle}
        id="title"
        name="title"
        onChange={formik.handleChange}
        type="text"
        value={title}
        placeholder="title"
      />
      <input
        style={inputStyle}
        id="description"
        name="description"
        onChange={formik.handleChange}
        type="text"
        value={description}
        placeholder="description"
      />
      <button style={buttonStyle} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  margin: "0 auto 30px",
};

const inputStyle = {
  border: "1px solid #303030",
  height: "30px",
  backgroundColor: "transparent",
  overflow: "hidden",
  outline: "none",
  paddingLeft: "10px",
  marginBottom: "3px",
};

const buttonStyle = {
  border: "1px solid #303030",
  height: "30px",
  backgroundColor: "#303030",
  color: "white",
  textTransform: "upperCase",
  fontWeight: "bold",
  letterSpacing: "2px",
  borderRadius: "0 0 5px 5px",
};
