import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [classes, setClasses] = useState();
  return (
    <form>
      <label>
        Enter your name:
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </label>
      <br />
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Class
        <input
          type="text"
          value={setClasses}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
};

export default MyForm;
