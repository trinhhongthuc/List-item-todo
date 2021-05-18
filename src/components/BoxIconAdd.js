import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

import FormAddDataUser from "./FormAddDataUser";
const BoxIconAdd = () => {
  const [hidden, setHidden] = useState(false);
  const [button, setButton] = useState(true);

  const onClickButtonAdd = () => {
    setHidden(!hidden);
    // setButton(!button);
  };
  return (
    <>
      {/* {button && ( */}
      <button onClick={() => onClickButtonAdd()} className="wrapper-box-icon">
        <IoIosAddCircle />
      </button>
      {/* )} */}
      {hidden && <FormAddDataUser setHidden={setHidden} hidden={hidden} />}
    </>
  );
};

export default BoxIconAdd;
