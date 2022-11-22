import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { notes as data } from "./data/notes";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";


function App() {
  const [notes, setNotes] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [ noteModal, setNoteModal ] = useState({})

  useEffect(() => {
    setNotes(data);
  }, []);

  const allStatesApp = {
    notes,
    setNotes,
    modalOn,
    setModalOn,
    noteModal,
    setNoteModal
  }


  function deleteNote(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId));
  }

  return (
    <main className="h-screen">
      <div className="container mx-auto">
        <NoteForm allStatesApp={allStatesApp} />
        <NoteList notes={notes} deleteNote={deleteNote} allStatesApp={allStatesApp} />
      </div>


      {modalOn && (
          <Overlay allStatesApp={allStatesApp}>
            <Modal
              note={noteModal}
              allStatesApp={allStatesApp}
              //title={title}
              //description={description}
              // close={closeModal}
            />
          </Overlay>
        )}
    </main>
  );
}

export default App;
