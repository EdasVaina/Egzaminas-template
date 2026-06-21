import { useState } from "react";
import axios from "axios";

const API = "http://localhost:3000";

export default function PostGetTest() {
    const [message, setMessage] = useState("");
    const [data, setData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    // POST
    const sendData = async () => {
        await axios.post(`${API}/api/data`, { message });
        setMessage("");
    };

    // GET
    const getData = async () => {
        const res = await axios.get(`${API}/api/data`);
        setData(res.data.data);
    };
    // DELETE
    const deleteItem = async (index) => {
        await axios.delete(`${API}/api/data/${index}`);
        getData(); //refresh
    };
    // UPDATE
    const startEdit = (index, value) => {
        setEditingIndex(index);
        setEditingValue(value);
    };

    const saveEdit = async (index) => {
        if (!editingValue) return;

        await axios.put(`${API}/api/data/${index}`, {
            message: editingValue,
        });

        setEditingIndex(null);
        setEditingValue("");
        getData();
    };


    return (
        <div style={{ padding: 20 }}>
            <h1>CRUD App (with UPDATE)</h1>

            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="New message"
            />

            <button onClick={sendData}>POST</button>
            <button onClick={getData}>GET</button>

            <hr />

            <ul>
                {data.map((item, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>
                        {editingIndex === i ? (
                            <>
                                <input
                                    value={editingValue}
                                    onChange={(e) => setEditingValue(e.target.value)} />
                                <button onClick={() => saveEdit(i)}>Save</button>
                                <button onClick={() => setEditingIndex(null)}>Cancel</button></>
                        ) : (
                            <>
                                {item}
                                <button onClick={() => startEdit(i, item)}>Edit</button>
                                <button onClick={() => deleteItem(i)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}