import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import OrgTreeComponent, {
  useTree,
} from "./local_packages/react-drag-hierarchy-tree/src";

function App() {
  const data = {
    id: 1,
    label: "President",
    children: [
      {
        id: 2,
        label: "Administrative",
        children: [
          {
            id: 3,
            label: "Director",
            children: [],
          },
        ],
      },
      {
        id: 2,
        label: "Administrative",
        children: [
          {
            id: 3,
            label: "Director",
            children: [],
          },
        ],
      },
    ],
  };

  const { treeRef } = useTree();

  const onClick = () => {
    treeRef.current?.onExpandNodes();
  };

  useEffect(() => {
    console.log(treeRef.current);
  });

  return (
    <div className="App">
      <button onClick={onClick}>close/open</button>
      <OrgTreeComponent data={data} ref={treeRef} horizontal />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
