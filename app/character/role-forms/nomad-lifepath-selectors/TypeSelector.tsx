"use client"

import { NomadLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof NomadLifepathFormData, value: NomadLifepathFormData["type"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const types = [
    "Scout (negotiator)",
    "Outrider (protection, weapons)",
    "Transport pilot/driver",
    "Loadmaster (large cargo mover, trucker)",
    "Solo smuggler",
    "Procurement (fuel, vehicles, etc.)"
];

export default function TypeSelector({setValue, onPrev, onNext}: TypeSelectorProps) {
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
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}