"use client"

import { NomadLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof NomadLifepathFormData, value: NomadLifepathFormData["opposition"]) => void;
    onPrev: () => void;
}

const oppositions = [
    "Organized Crime",
    "Boostergangs",
    "Drug Runners",
    "Dirty Politicians",
    "Rival Packs in the same businesses",
    "Dirty Cops"
];

export default function OppositionSelector({setValue, onPrev}: OppositionSelectorProps) {
    return (
        <div>
            {oppositions.map((opposition) => (
                <button
                    type="button"
                    key={opposition}
                    onClick={() => setValue("opposition", opposition)}
                >
                    {opposition}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
        </div>
    );
}