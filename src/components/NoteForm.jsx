import { useState } from "react";

function NoteForm({ createNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [scrollHeight, setScrollHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
    };

    createNote({
      date,
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };






  console.log(description.length);

  return (
    <div className="max-w-md mx-auto">
      <form className="form-note" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          style={{ height: `${scrollHeight}px`}}
          className="text-area"
          value={description}
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value)}}
        ></textarea>
        <button
          type="submit"
          className="flex items-center justify-center font-bold mx-auto w-96 my-10 border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-black hover:text-white focus:outline-none focus:shadow-outline"
          onClick={() => {
            setTitle(title);
            setDescription(description);
            setDate(DateComponent);
          }}
          disabled={ description.length > 1 ? false : true }
          style={{  }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
