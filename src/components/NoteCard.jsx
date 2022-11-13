function NoteCard({ note, deleteNote }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      deleteNote(note.id);
    }
  };

  return (
    <div className=" mx-auto border border-gray-200 p-4 rounded-md">
      <div className=" flex items-center ">
        <h2 className="text-gray-400 text-xs">{note.date}</h2>
        <button className="font-extrabold mx-2" 
        onClick={handleDelete}>
          X
        </button>
      </div>
      <h1 className="capitalize">{note.title}</h1>
    </div>
  );
}

export default NoteCard;
