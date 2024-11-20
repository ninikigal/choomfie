"use client"

import { TechLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof TechLifepathFormData, value: TechLifepathFormData["type"]) => void;
    onNext: () => void;
}

const types = [
    "Cyberware Technician",
    "Vehicle Mechanic",
    "Jack of All Trades",
    "Small Electronics Technician",
    "Weaponsmith",
    "Crazy Inventor",
    "Robot and Drone Mechanic",
    "Heavy Machinery Mechanic",
    "Scavenger",
    "Nautical Mechanic"

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