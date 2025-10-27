import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { name: "Arun", room: "101" },
    { name: "Meena", room: "202" },
  ]);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const addStudent = () => {
    if (name.trim() === "" || room.trim() === "") return;
    setStudents([...students, { name, room }]);
    setName("");
    setRoom("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Hostel Management</h1>

      {/* Add Student Form */}
      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          placeholder="Room Number"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Show Student List */}
      <div style={{ marginTop: "30px" }}>
        <h2>Student List</h2>
        <ul>
          {students.map((s, i) => (
            <li key={i}>
              {s.name} - Room {s.room}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
