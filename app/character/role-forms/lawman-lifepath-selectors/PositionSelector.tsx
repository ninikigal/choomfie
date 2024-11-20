"use client"

import { LawmanLifepathFormData } from "../../formTypes"

interface PositionSelectorProps {
    setValue: (field: keyof LawmanLifepathFormData, value: LawmanLifepathFormData["positions"]) => void;
    onNext: () => void;
}

const positions = [
    "Guard",
    "Standard Beat or Patrol",
    "Criminal Investigation",
    "Special Weapons and Tactics",
    "Motor Patrol",
    "Internal Affairs"
];

export default function PositionSelector({setValue, onNext}: PositionSelectorProps) {
    return (
        <div>
            {positions.map((position) => (
                <button
                    type="button"
                    key={position}
                    onClick={() => setValue("positions", position)}
                >
                    {position}
                </button>
            ))}
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}