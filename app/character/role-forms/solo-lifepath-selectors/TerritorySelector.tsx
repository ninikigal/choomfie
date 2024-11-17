"use client"

import { SoloLifepathFormData } from "../../formTypes"

interface TerritorySelectorProps {
    setValue: (field: keyof SoloLifepathFormData, value: SoloLifepathFormData["territory"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const territories = [
    "A Corporate Zone",
    "Combat Zones",
    "The whole City",
    "The territory of a single Corporation",
    "The territory of a particular Fixer or contact",
    "Wherever the money takes you"
];

export default function TerritorySelector({setValue, onPrev, onNext}: TerritorySelectorProps) {

    return (
        <div>
            {territories.map((territory) => (
                <button
                    type="button"
                    key={territory}
                    onClick={() => setValue("territory", territory)}
                >
                    {territory}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}