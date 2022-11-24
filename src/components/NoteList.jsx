import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote, allStatesApp }) {
  if (notes.length === 0) {
    return <h1 className="flex items-center justify-center font-bold">Empty Notes</h1>;
  }
  
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 justify-center">
      {notes.map((note, index) => (
        <NoteCard key={index} note={notes[index]} id={index} deleteNote={deleteNote} allStatesApp={allStatesApp} />
      ))}
    </div>
  );
}

export default NoteList;
