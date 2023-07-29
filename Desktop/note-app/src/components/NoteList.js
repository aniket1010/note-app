import Note from "./Note";
import AddNote from "./AddNote";
const NoteList = ({ notes, handleAdd, handleDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
      <AddNote handleAdd={handleAdd} />
    </div>
  );
};
export default NoteList;
