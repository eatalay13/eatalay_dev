"use client";

import { useEffect, useState } from "react";

export default function HelloBtn(): JSX.Element {
    const [message, setMessage] = useState<string>("Hello World!");

    useEffect(() => {
        console.log("HelloBtn mounted");

        return () => {
            console.log("HelloBtn unmounted");
        };
    }, []);

    return (
        <>
            <button onClick={() => setMessage("Hello Next.js!")}>Hello</button>
            <p>{message}</p>
        </>
    );
}