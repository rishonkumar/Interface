import React, { useState } from "react";

const InterfaceEditor = ({ data }) => {
  const [interfaceData, setInterfaceData] = useState(data);

  const handleFieldChange = (index, field) => {
    const newInterfaceData = [...interfaceData];
    newInterfaceData[index].name = field;
    setInterfaceData(newInterfaceData);
  };

  const handleAddField = () => {
    const newField = {
      name: "",
      type: "",
      nestedFields: [],
    };
    const newInterfaceData = [...interfaceData, newField];
    setInterfaceData(newInterfaceData);
  };

  const handleDeleteField = (index) => {
    const newInterfaceData = [...interfaceData];
    newInterfaceData.splice(index, 1);
    setInterfaceData(newInterfaceData);
  };

  const handleAddNestedField = (index, field) => {
    const newInterfaceData = [...interfaceData];
    newInterfaceData[index].nestedFields.push(field);
    setInterfaceData(newInterfaceData);
  };

  const handleSave = () => {
    console.log(interfaceData);
  };

  return (
    <div>
      {interfaceData.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.name}
            onChange={(event) => handleFieldChange(index, event.target.value)}
          />
          <button onClick={() => handleDeleteField(index)}>Delete</button>
          {field.type === "object" && (
            <InterfaceEditor
              data={field.nestedFields}
              handleFieldChange={(nestedIndex, nestedField) =>
                handleAddNestedField(index, {
                  name: nestedField,
                  type: "string",
                })
              }
              handleAddField={() =>
                handleAddNestedField(index, {
                  name: "",
                  type: "string",
                })
              }
              handleDeleteField={(nestedIndex) =>
                handleDeleteField(nestedIndex)
              }
              handleSave={handleSave}
            />
          )}
        </div>
      ))}
      <button onClick={handleAddField}>Add Field</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default InterfaceEditor;
