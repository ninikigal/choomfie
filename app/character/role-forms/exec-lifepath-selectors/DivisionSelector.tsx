"use client"

import { ExecLifepathFormData } from "../../formTypes"

interface DivisionSelectorProps {
    setValue: (field: keyof ExecLifepathFormData, value: ExecLifepathFormData["division"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const divisions = [
    "Procurement",
    "Manufacturing",
    "Research and Development",
    "Human Resources",
    "Public Affairs/Publicity/Advertising",
    "Mergers and Acquisition"
];

export default function DivisionSelector({setValue, onPrev, onNext}: DivisionSelectorProps) {
    return (
        <div>
            {divisions.map((division) => (
                <button
                    type="button"
                    key={division}
                    onClick={() => setValue("division", division)}
                >
                    {division}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}