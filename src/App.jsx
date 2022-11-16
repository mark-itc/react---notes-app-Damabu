import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { notes as data } from "./data/notes";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(data);
  }, []);

  function createNote(note) {
    
    setNotes([
      ...notes,
      {
        date: note.date,
        title: note.title + " " + (notes.length + 1),
        description: note.description,
        id: notes.length,
      },
    ]);
  }

  function deleteNote(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId));
  }

  return (
    <main className="h-screen">
      <div className="container mx-auto">
        <NoteForm createNote={createNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </main>
  );
}

export default App;
