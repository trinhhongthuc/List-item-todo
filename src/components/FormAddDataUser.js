import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";

import { addSaga } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const FormAddDataUser = ({ setHidden, hidden, actionAdd }) => {
  const [title, setValueTitle] = useState("");
  const [body, setValueBody] = useState("");

  const onClickButtonAdd = () => {
    if (title === "" || body === "") return;
    const data = {
      id: uuidv4(),
      title: title,
      body: body,
    };
    actionAdd(data);
    setValueTitle("");
    setValueBody("");
  };

  return (
    <form className="wrapper-form" onSubmit={(e) => e.preventDefault()}>
      <div className="wrapper-form-header">
        <h2 className="wrapper-form-heading">Add to list</h2>
        <AiOutlineClose
          className="wrapper-form-icon-close"
          onClick={() => setHidden(!hidden)}
        />
      </div>
      <div className="wrapper-form-content">
        <input
          type="text"
          className="wrapper-form-content-title"
          placeholder="Enter your Title"
          value={title}
          onChange={(e) => setValueTitle(e.target.value)}
        />
        <textarea
          className="wrapper-form-content-body"
          placeholder="Enter your Content"
          value={body}
          onChange={(e) => setValueBody(e.target.value)}
        ></textarea>

        <button
          className="wrapper-form-content-button"
          onClick={() => onClickButtonAdd()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  actionAdd: (data) => {
    dispatch(addSaga(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAddDataUser);
