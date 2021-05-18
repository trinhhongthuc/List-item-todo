import React from "react";
import { connect } from "react-redux";

// import types from "../redux/type";
import { getDataSaga } from "../redux/actions";
import BoxItem from "./boxItem";

const User = ({ Todo, FetchReducers }) => {
  const onClickButton = () => {
    FetchReducers();
    console.log("todo", Todo.length);
  };
  return (
    <div className="wrapper-user">
      <h3></h3>
      {Todo.length === 0 && (
        <div className="wrapper-button">
          <h2 className="wrapper-button-heading">List item</h2>
          <button className="button" onClick={() => onClickButton()}>
            {" "}
            click me
          </button>
        </div>
      )}
      {Todo.length > 0 && (
        <div className="container">
          <h2 className="wrapper-button-heading-todo">List item Todo</h2>
          <div className="row">
            {Todo.map((item) => {
              return (
                <BoxItem key={item.id} title={item.title} body={item.body} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { Todo: state.FetchDataUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FetchReducers: () => {
      dispatch(getDataSaga());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
