"use client"

import { NetrunnerLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof NetrunnerLifepathFormData, value: NetrunnerLifepathFormData["type"]) => void;
    onNext: () => void;
}

const types = [
    "Freelancer who will hack for hire",
    "Corporate \"clone runner\" who hacks for the Man",
    "Hacktivist interested in cracking systems and exposing bad guys",
    "Just like to crack systems for the fun of it",
    "Part of a regular team of freelancers",
    "Hack for a Media, politico, or Lawman who hires you as needed"
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