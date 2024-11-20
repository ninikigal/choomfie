"use client"

import { ExecLifepathFormData } from "../../formTypes"

interface BasedSelectorProps {
    setValue: (field: keyof ExecLifepathFormData, value: ExecLifepathFormData["based"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const basedLocations = [
    "One city",
    "Several cities",
    "Statewide",
    "National",
    "International, offices in a few major cities",
    "International, offices everywhere"
];

export default function BasedSelector({setValue, onPrev, onNext}: BasedSelectorProps) {
    return (
        <div>
            {basedLocations.map((location) => (
                <button
                    type="button"
                    key={location}
                    onClick={() => setValue("based", location)}
                >
                    {location}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}