import { notes } from "../data/notes";


function fixDelete() {
  (notes.length + 1)}


function NoteCard({ note, deleteNote }) {

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      deleteNote(note.id);
      fixDelete();
    }
  };

  return (
    <div className="cursor-pointer mx-auto border border-gray-200 p-4 rounded-md">
      <div className=" flex items-center justify-center ">
        <h2 className="text-gray-400 text-xs">{note.date}</h2>
        <button className="font-extrabold ml-3 mb-2" 
        onClick={handleDelete}>
          X
        </button>
      </div>
      <h1 className="capitalize flex justify-center font-bold">{note.title}</h1>
      <p className="flex justify-center">{note.description}</p>
    </div>
  );
}

export default NoteCard;
