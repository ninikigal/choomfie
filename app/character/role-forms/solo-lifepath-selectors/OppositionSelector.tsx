"use client"

import { SoloLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof SoloLifepathFormData, value: SoloLifepathFormData["opposition"]) => void;
    onPrev: () => void;
}

const oppositions = [
    "A Corporation you may have angered",
    "A boostergang you may have tackled earlier",
    "Corrupt Lawmen or Lawmen who mistakenly think you're guilty of something",
    "A rival Solo from another Corp",
    "A Fixer who sees you as a threat",
    "A rival Solo who sees you as their nemesis"
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