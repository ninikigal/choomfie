"use client"

import { useState } from "react";
import { LifepathFormData } from "../formTypes";

type Personality = string;

interface PersonalitySelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onNext: () => void;
    onPrev: () => void;
}

const personalities: Personality[] = [
    "Shy and secretive",
    "Rebellious, antisocial, and violent",
    "Arrogant, proud, and aloof",
    "Moody, rash, and headstrong",
    "Picky, fussy, and nervous",
    "Stable and serious",
    "Silly and fluff-headed",
    "Sneaky and deceptive",
    "Intellectual and detached",
    "Friendly and outgoing"
]

export default function PersonalitySelector({ setValue, onNext, onPrev }: PersonalitySelectorProps) {

    return (
        <div>
            <h3>select personality</h3>
            {
                personalities.map((personality) => (
                    <button
                        type="button"
                        key={personality}
                        onClick={() => {
                          setValue("personality", personality);
                        }}
                    >
                        {personality}
                    </button>
                ))
            }
            <button onClick={onPrev}>go back breh</button>
            <button onClick={onNext}>go next</button>
        </div>
    )
}