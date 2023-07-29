import { useState } from "react";
const AddNote = ({ handleAdd }) => {
  const [newText, setNewText] = useState("");

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length>=0)
      setNewText(event.target.value);
  };

  const handleClick = () => {
    if (newText.trim().length > 0) handleAdd(newText);
    else alert("Add text to save!");
    setNewText("");
  };

  const characterLimit = 100;

  return (
    <div className="note add">
      <textarea
        onChange={handleChange}
        rows={8}
        cols={10}
        placeholder="Add a new note..."
        value={newText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - newText.length} remaining</small>
        <button onClick={handleClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
