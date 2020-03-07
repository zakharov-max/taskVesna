import React from "react";

export const SearchFilter = props => {
  const { filter, changeFilter } = props;

  return (
    <input
      placeholder="Live filter"
      value={filter}
      onChange={e => changeFilter(e.target.value)}
    />
  );
};
