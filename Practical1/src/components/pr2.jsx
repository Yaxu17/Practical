import React, { useState } from "react";

function event() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Live Input</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{name}</h2>
    </div>
  );
}

export default event;