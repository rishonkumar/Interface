import React from "react";
import InterfaceEditor from "./components/InterfaceEditor";
// import InterfaceEditor from "./InterfaceEditor";

const App = () => {
  const data = [
    {
      name: "field1",
      type: "string",
      nestedFields: [],
    },
    {
      name: "field2",
      type: "object",
      nestedFields: [
        {
          name: "subfield1",
          type: "string",
          nestedFields: [],
        },
      ],
    },
  ];

  return (
    <div>
      {/* <InterfaceEditor data={data} /> */}
      <InterfaceEditor data={data} />
    </div>
  );
};

export default App;
