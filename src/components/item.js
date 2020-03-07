import React from "react";

export const Item = props => {
  const {
    obj: { id, isSuspended, name, shortInfo, suspendDate },
    getCatInfo,
    suspendCat
  } = props;

  return (
    <div
      key={id}
      className="object"
      style={{ background: isSuspended ? "grey" : "unset" }}
    >
      <p className="catName" onClick={getCatInfo(id, isSuspended)}>
        {name}
      </p>
      <p>{shortInfo}</p>
      {suspendDate && <p>deleted at {suspendDate}</p>}
      <button onClick={() => suspendCat(id)}>Suspend</button>
    </div>
  );
};
