"use client"

import { RockerLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof RockerLifepathFormData, value: RockerLifepathFormData["opposition"]) => void;
    onPrev: () => void;
}

const oppositions = [
    "Old group member who thinks you did them dirty",
    "Rival group or artist trying to steal market share",
    "Corporate enemies who don't like your message",
    "Critic or other 'influencer' trying to bring you down",
    "Older media star who feels threatened by your rising fame",
    "Romantic interest or media figure who wants revenge for personal reasons"
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