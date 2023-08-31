import "./App.css";
import NoteForm from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import Notestatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { useReducer, useState } from "react";
import { Component } from "react";
import { NoteProvider } from "./Context/NotesContext";
//


function App() {
  // const [notes, setNotes] = useState([]);

  const [sortBy, setsortBy] = useState("latest");


  //local 
  // const [check, setcheck] = useState(true);
  // localStorage.getItem("chacked")
  // localStorage.setItem("chacked", setcheck())


  // const handelNote = (newNote) => {
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  //   dispatch({ type: "addNewNote", payload: newNote })
  // };
  // const HandelDelet = (id) => {
  //    const filteredNote = notes.filter((n) => n.id !== id);
  //    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  //   dispatch({ type: "deleteNote", payload: id })
  // };

  // const HandelCompleted = (e) => {

  //   const noteId = Number(e.target.value);
  //   dispatch({ type: "complated", payload: noteId })

  //   // setNotes((prevcheckNotes) =>
  //   //   prevcheckNotes.map((note) =>
  //   //     note.id === noteId ? { ...note, Completed: !note.Completed } : note
  //   //   )
  //   // );
  // };

  //components
  return (
    <NoteProvider>
      <div className="container">
        <NoteHeader
          onSort={(e) => setsortBy(e.target.value)}
          sortBy={sortBy}

        />
        <div className="note-app">
          <NoteForm />
          <div className="note-container">
            <Notestatus />
            <NoteList
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;