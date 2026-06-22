import { useState, useRef } from "react";
import axios from "axios";

const API = "http://localhost:3000";

export default function PostGetTest() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [data, setData] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingValue, setEditingValue] = useState("");
    const [{ divs }, setDivs] = useState({ divs: [] });

    const countRef = useRef(0);
    const countRef2 = useRef(0);

    // const addDivs = () => {
    //     divs.push(<div key={divs.length}>Hello</div>);
    //     setDivs({ divs: [...divs] });
    //     console.log('divs')
    // };

    // POST
    const sendData = async () => {
        await axios.post(`${API}/api/data`, { title, desc });
        console.log(title, desc)
        setTitle("");
        setDesc("");
        countRef.current += 1;
        if (countRef.current % 2 === 0) {
            // addDivs();
            countRef = 0;
        }
    };

    // GET
    const getData = async () => {
        const res = await axios.get(`${API}/api/data`);
        setData(res.data.data);
        // addDivs();
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
            title: editingValue,
        });

        setEditingIndex(null);
        setEditingValue("");
        getData();
    };


    return (
        <div style={{ padding: 20 }}>
            <h1>Menu</h1>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New title" />
            <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="description" />

            <button onClick={sendData}>POST</button>
            <button onClick={getData}>GET</button>

            <hr />

            <ul>
                {data.map((item, i) => (
                    <p key={i} style={{ marginBottom: 10 }}>
                        {/* {divs} */}
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
                    </p>
                ))}
            </ul>
        </div>
    );
}