"use client"

import { TechLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof TechLifepathFormData, value: TechLifepathFormData["opposition"]) => void;
    onPrev: () => void;
}

const oppositionTypes = [
    "Combat Zone gangers who want you to work for them exclusively",
    "Rival Tech trying to steal your customers",
    "Corporates who want you to work for them exclusively",
    "Larger manufacturer trying to bring you down because your mods are a threat",
    "Old client who thinks you screwed them over",
    "Rival Tech trying to beat you out for resources and parts"
];

export default function OppositionSelector({setValue, onPrev}: OppositionSelectorProps) {
    return (
        <div>
            {oppositionTypes.map((opposition) => (
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