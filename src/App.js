import React from "react";
import { inject, observer } from "mobx-react";

import "./app.css";

import { List } from "./components/list";
import { Cat } from "./components/cat";
import { SearchFilter } from "./components/searchFilter";

@inject("catsStore")
@observer
class App extends React.Component {
  render() {
    const {
      cat,
      filter,
      changeFilter,
      cats,
      suspendCat,
      getInfo
    } = this.props.catsStore;

    return (
      <div className="main">
        <div className="list">
          <SearchFilter filter={filter} changeFilter={changeFilter} />
          <List cats={cats} suspendCat={suspendCat} getInfo={getInfo} />
        </div>
        {cat && <Cat cat={cat} />}
      </div>
    );
  }
}

export default App;
