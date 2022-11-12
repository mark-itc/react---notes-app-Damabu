function NoteCard({ note }) {
  return (
    <div className="border border-gray-800 p-4 rounded-md">
      <h1 className="capitalize">{note.title}</h1>
    </div>
  );
}

export default NoteCard;
