const Modal = ({ setModalOn }) => {
    const handleCancelClick = () => {
      console.log(Modal);
      setModalOn(false);
    };
  
    return (
      <div className=" bg-gray-700 opacity-80 fixed inset-0 z-50   ">
        <div className="flex h-screen justify-center items-center ">
          <div className=" opacity- flex-col justify-center  bg-white py-12 px-24 rounded-xl mx-auto border border-gray-200 bg-white p-4 rounded-md">
            <div className=" flex items-center justify-center ">
              <h2 className="text-gray-400 text-xs">Date Info</h2>
              <button
                className="font-extrabold ml-3 mb-2"
                onClick={handleCancelClick}
              >
                X
              </button>
            </div>
            <div className="cursor-pointer">
              <h1 className="capitalize flex justify-center font-bold">
                Note Title
              </h1>
              <p className="flex justify-center">Description</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;