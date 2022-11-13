import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
