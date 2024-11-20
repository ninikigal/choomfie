"use client"

import { ExecLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof ExecLifepathFormData, value: ExecLifepathFormData["opposition"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const oppositions = [
    "Rival Corp in the same industry",
    "Law enforcement is watching you",
    "Local Media wants to bring you down",
    "Different divisions in your own company are feuding with each other",
    "Local government doesn't like your Corp",
    "International Corporations are eyeing you for a hostile takeover"
];

export default function OppositionSelector({setValue, onPrev, onNext}: OppositionSelectorProps) {
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
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}