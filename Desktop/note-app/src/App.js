import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import TopDiv from "./components/TopDiv";
import SearchBar from "./components/SearchBar";
function App() {
  const inititalNotes = [
    { id: nanoid(), text: "This is the first note", date: "17/02/2023" },
    { id: nanoid(), text: "This is the second note", date: "17/02/2023" },
    { id: nanoid(), text: "This is the third note", date: "17/02/2023" },
    { id: nanoid(), text: "This is the fourth note", date: "17/02/2023" },
    { id: nanoid(), text: "This is the fifth note", date: "17/02/2023" },
  ];

  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react_notes_app_data"));
    if (savedNotes.length > 0) {
      setNotes(savedNotes);
    } else {
      setNotes(inititalNotes);
    }
  }, [inititalNotes]);

  const handleAdd = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem("react_notes_app_data", JSON.stringify(newNotes));
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("react_notes_app_data", JSON.stringify(newNotes));
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="app">
        <TopDiv setDarkMode={setDarkMode} />
        <SearchBar setSearchText={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
export default App;
