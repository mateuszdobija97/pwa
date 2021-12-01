import NoteItem from "./NoteItem";

const NoteList = ({ notes, setNotes }) => (
  <div className="note-list">
    <ul style={listStyle}>
      {notes?.map((note) => (
        <NoteItem key={note.id} note={note} setNotes={setNotes} notes={notes} />
      ))}
    </ul>
  </div>
);

export default NoteList;

const listStyle = {
  listStyle: "none",
};
