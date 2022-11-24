import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";
import localforage from "localforage";

function App() {
  const [notes, setNotes] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [noteModal, setNoteModal] = useState({});

  useEffect(() => {
    localforage.getItem("data").then((res) => {
      if (res == null) {
        localforage.setItem("data", notes);
      } else {
        setNotes(res);
      }
    });
  }, []);

  const allStatesApp = {
    notes,
    setNotes,
    modalOn,
    setModalOn,
    noteModal,
    setNoteModal,
  };

  function deleteNote(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId));
  }
  
  localforage.setItem("data", notes);

  return (
    <main className="h-screen">
      <div className="container mx-auto">
        <NoteForm allStatesApp={allStatesApp} />
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          allStatesApp={allStatesApp}
        />
      </div>

      {modalOn && (
        <Overlay allStatesApp={allStatesApp}>
          <Modal note={noteModal} allStatesApp={allStatesApp} />
        </Overlay>
      )}
    </main>
  );
}

export default App;
