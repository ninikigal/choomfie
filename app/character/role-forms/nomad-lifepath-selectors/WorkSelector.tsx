"use client"

import { useState } from "react";
import { NomadLifepathFormData } from "../../formTypes"

interface BasedSelectorProps {
    setValue: (field: keyof NomadLifepathFormData, value: NomadLifepathFormData["workType" | "work"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const typeOptions = ["sea", "air", "land"];

const landWork = [
    "Gogang",
    "Passenger transport",
    "Chautauqua/school",
    "Traveling show/carnival",
    "Migrant farmers",
    "Cargo transport",
    "Shipment protection",
    "Smuggling",
    "Mercenary army",
    "Construction work gang"
];

const airWork = [
    "Air piracy",
    "Cargo transport",
    "Passenger transport",
    "Aircraft protection",
    "Smuggling",
    "Combat support"
];

const seaWork = [
    "Piracy",
    "Cargo transport",
    "Passenger transport",
    "Smuggling",
    "Combat support",
    "Submarine warfare"
]

export default function WorkSelector({setValue, onPrev, onNext}: BasedSelectorProps) {
    const [workType, setWorkType] = useState<string | null>(null);

    return (
        <div>
            <h3>Where is your pack typed?</h3>
            {typeOptions.map((type) => (
                <button
                    type="button"
                    key={type}
                    onClick={() => {
                        {workType !== type ? setValue("work", null) : null}
                        setValue("workType", type)
                        setWorkType(type)
                    }}
                >
                    {type}
                </button>
            ))}
            {workType === "land" && (
                <div>
                    <h2>choose land work</h2>
                    {landWork.map((work) => (
                        <button
                            type="button"
                            key={work}
                            onClick={() => {
                                setValue("work", work)
                            }}
                        >
                            {work}
                        </button>
                    ))}
                </div>
            )}
            {workType === "air" && (
                <div>
                    <h2>choose air work</h2>
                    {seaWork.map((work) => (
                        <button
                            type="button"
                            key={work}
                            onClick={() => {
                                setValue("work", work)
                            }}
                        >
                            {work}
                        </button>
                    ))}
                </div>
            )}
            {workType === "sea" && (
                <div>
                    <h2>choose sea work</h2>
                    {seaWork.map((work) => (
                        <button
                            type="button"
                            key={work}
                            onClick={() => {
                                setValue("work", work)
                            }}
                        >
                            {work}
                        </button>
                    ))}
                </div>
            )}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}