"use client"

import { NetrunnerLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof NetrunnerLifepathFormData, value: NetrunnerLifepathFormData["opposition"]) => void;
    onPrev: () => void;
}

const oppositionTypes = [
    "You think it might be a rogue AI or a NET Ghost. Either way, it's bad news.",
    "Rival Netrunners who just don't like you.",
    "Corporates who want you to work for them exclusively.",
    "Lawmen who consider you an illegal \"black hat\" and want to bust you.",
    "Old clients who think you screwed them over.",
    "Fixer or another client who wants your services exclusively."
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