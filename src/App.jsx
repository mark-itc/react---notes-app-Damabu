import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { notes as data } from "./data/notes";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(data);
  }, []);

  function createNote(noteTitle) {
    setNotes([
      ...notes,
      {
        title: noteTitle,
        id: notes.length,
      },
    ]);
  }

  return (
    <main className="h-screen">
      <div className="container mx-auto">
        <NoteForm createNote={createNote} />
        <NoteList notes={notes} />
      </div>
    </main>
  );
}

export default App;
