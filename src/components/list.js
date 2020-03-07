import React from "react";
import { Item } from "./item";

export const List = props => {
  const { cats, getInfo, suspendCat } = props;

  const getCatInfo = (id, isSuspended) => () => {
    if (!isSuspended) {
      getInfo(id);
    }
  };

  return (
    <div>
      {cats.map(obj => (
        <Item
          key={obj.id}
          obj={obj}
          suspendCat={suspendCat}
          getCatInfo={getCatInfo}
        />
      ))}
    </div>
  );
};
