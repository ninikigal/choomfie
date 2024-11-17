"use client"

import { SoloLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof SoloLifepathFormData, value: SoloLifepathFormData["type"]) => void;
    onNext: () => void;
}

const types = [
    "Bodyguard",
    "Street Muscle for Hire",
    "Corporate Enforcer who takes jobs on the side",
    "Corporate or Freelance Black Ops Agent",
    "Local Vigilante for Hire",
    "Assassin/Hitman for Hire"
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