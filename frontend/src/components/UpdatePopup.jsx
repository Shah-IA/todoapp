import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const UpdatePopup = ({ setShowPopup, updateTodo, id, popupContent }) => {
  const [input, setInput] = useState(popupContent.text);

  const handleCrossPopUp = () => {
    setShowPopup(false);
  };

  const handleUpated = () => {
    updateTodo(id, input);
    setShowPopup(false);
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={handleCrossPopUp} />
        <h1>Update Todo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update todo"
          />

          <button onClick={handleUpated}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePopup;
