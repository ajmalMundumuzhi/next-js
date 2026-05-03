"use client";

import { useState } from "react";

async function makePostResponse () {
    const res = await fetch(`http://localhost:3001/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Jack"}),
        cache: 'no-store'
    });

    const data = await res.json();
    return {data};
}

export default function Friends () {
    const [ message, setMessage ] = useState("");
    const onClick = async () => {
        const { data } = await makePostResponse();
        setMessage(data.message)
    };
    return (
        <h1>
            {" "}
            Hey {message} <button onClick={onClick}>Click Me</button>
        </h1>
    )
}