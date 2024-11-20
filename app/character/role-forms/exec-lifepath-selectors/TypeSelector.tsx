"use client"

import { ExecLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof ExecLifepathFormData, value: ExecLifepathFormData["type"]) => void;
    onNext: () => void;
}

const types = [
    "Financial",
    "Media and Communications",
    "Cybertech and Medical Technologies",
    "Pharmaceuticals and Biotech",
    "Food, Clothing, or other General Consumables",
    "Energy Production",
    "Personal Electronics and Robotics",
    "Corporate Services",
    "Consumer Services",
    "Real Estate and Construction"
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