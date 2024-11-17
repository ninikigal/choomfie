"use client"

import { RockerLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof RockerLifepathFormData, value: RockerLifepathFormData["type"]) => void;
    onNext: () => void;
}

const types = [
    "Musician",
    "Slam Poet",
    "Street Artist",
    "Performance Artist",
    "Comedian",
    "Orator",
    "Politico",
    "Rap Artist",
    "DJ",
    "Idoru"
];

export default function TypeSelector({setValue, onNext}: TypeSelectorProps) {

    return (
        <div>
            {types.map((type) => (
                <button
                    type="button"
                    key={type}
                    onClick={() => setValue("type", type)}
                >
                    {type}
                </button>
            ))}
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}