"use client"
import { useState } from "react";
import RoleForm from "./role";

export default function CharacterPage() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click pl0x</button>
            <RoleForm />
        </div>
    )
}