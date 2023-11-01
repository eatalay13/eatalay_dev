"use client";

import { useState } from "react";

export default function HelloBtn(): JSX.Element {
    const [message, setMessage] = useState<string>("Hello World!");

    function handleClick() {
        setMessage("Hello Next.js!");
    }

    return (
        <>
            <button onClick={handleClick}>Hello</button>
            <p>{message}</p>
        </>
    );
}