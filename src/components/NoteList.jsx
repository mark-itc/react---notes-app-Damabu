import NoteCard from "./NoteCard";

function NoteList({ notes }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
