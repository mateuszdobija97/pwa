import { useLocalStorage } from "react-use";

import { Navigation } from "../../components";
import NoteList from "./NoteList";
import Form from "./Form";

const Offline = () => {
  const [notes, setNotes] = useLocalStorage("notes", []);

  return (
    <div style={notesWrapperStyle}>
      <Navigation />
      <main className="offline__content">
        <h2 style={notesHeaderStyle}>Notes</h2>
        <Form notes={notes} setNotes={setNotes} />
        {notes && <NoteList notes={notes} setNotes={setNotes} />}
      </main>
    </div>
  );
};

export default Offline;

const notesWrapperStyle = {
  backgroundColor: "#fae9d4",
  height: "100vh",
};

const notesHeaderStyle = {
  textAlign: "center",
  padding: "7px",
  color: "#303030",
};
