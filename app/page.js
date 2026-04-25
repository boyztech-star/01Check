"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  async function search() {
    const res = await fetch(`/api/search?q=${q}`);
    const json = await res.json();
    setData(json);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>PricePoka Pro</h1>

      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search..." />
      <button onClick={search}>Search</button>

      <div>
        {data.map((item, i) => (
          <div key={i} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <small>{item.source}</small>
          </div>
        ))}
      </div>
    </main>
  );
}