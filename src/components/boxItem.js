import React from "react";

const BoxItem = ({ title, body }) => {
  return (
    <div className="col-3">
      <div className="wrapper-box-item">
        <div className="heading">{title}</div>
        <div className="body">{body}</div>
      </div>
    </div>
  );
};

export default BoxItem;
