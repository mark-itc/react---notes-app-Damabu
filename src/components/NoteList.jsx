import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote, allStatesApp }) {
  if (notes.length === 0) {
    return <h1 className="flex items-center justify-center font-bold">Empty Notes</h1>;
  }

  console.log(notes);

  return (
    <div className="grid grid-cols-5 gap-2">
      {notes.map((note, index) => (
        <NoteCard key={index} note={notes[index]} id={index} deleteNote={deleteNote} allStatesApp={allStatesApp} />
      ))}
    </div>
  );
}

export default NoteList;
