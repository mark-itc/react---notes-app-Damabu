import { useState } from "react";
import DateComponent from "./DateComponent";

function NoteForm({ createNote }) {
  const [title, setTitle] = useState("Note number ");
  const [description, setDescription] = useState("Example note")
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote({
      date,
      title,
      description,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <button
          className="flex items-center justify-center font-bold mx-auto w-96 my-10 border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-black hover:text-white focus:outline-none focus:shadow-outline"
          onClick={() => {
            setTitle(title);
            setDescription(description);
            setDate(DateComponent);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
