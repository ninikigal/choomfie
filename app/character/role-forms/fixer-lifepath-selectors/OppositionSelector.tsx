"use client"

import { FixerLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof FixerLifepathFormData, value: FixerLifepathFormData["opposition"]) => void;
    onPrev: () => void;
}

const oppositions = [
    "Combat Zone gangers who want you to work for them exclusively",
    "Rival Fixers trying to steal your clients",
    "Execs who want you to work for them exclusively",
    "Enemy of a former client who wants to clean up \"loose ends\"—like you",
    "Old client who thinks you screwed them over",
    "Rival Fixer trying to beat you out for resources and parts"
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