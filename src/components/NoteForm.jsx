import { useState } from "react";
import DateComponent from "./DateComponent";

function NoteForm({ createNote }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote({
      date,
      title,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <button
          className=" flex items-center justify-center mx-auto w-80 border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          onClick={() => {
            setTitle("Example note");
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
