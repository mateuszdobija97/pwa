const NoteItem = ({ note: { id, title, description }, notes, setNotes }) => {
  const removeNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  return (
    <li style={itemStyle}>
      <div style={divLeftStyle}>
        <p style={textStyle}>Title: {title}</p>
        <p style={textStyle}>Description: {description}</p>
      </div>
      <div style={divRightStyle}>
        <button style={buttonStyle} onClick={() => removeNote(id)}>
          X
        </button>
      </div>
    </li>
  );
};

export default NoteItem;

const itemStyle = {
  display: "flex",
  width: "80%",
  margin: "7px auto",
  borderLeft: "2px solid #303030",
  borderBottom: "2px solid #303030",
  paddingLeft: "10px",
  padddingBottom: "10px",
};

const textStyle = {
  padding: "5px 0",
};

const buttonStyle = {
  cssFloat: "right",
  backgroundColor: "#d4412a",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  borderStyle: "none",
  color: "white",
};

const divLeftStyle = {
  flexBasis: "70%",
};

const divRightStyle = {
  flexBasis: "30%",
};
