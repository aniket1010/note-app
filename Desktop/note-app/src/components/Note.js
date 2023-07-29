import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, text, date, handleDelete }) => {
  return (
    <div className="note">
      <p className="para">{text}</p>
      <div className="note-footer">
        <small className="date">{date}</small>
        <MdDeleteForever
          className="delete-icon"
          onClick={() => handleDelete(id)}
          size="1.5em"
        />
      </div>
    </div>
  );
};
export default Note;
