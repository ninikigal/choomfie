"use client"

import { useState } from "react";
import { LifepathFormData} from "../formTypes"

interface LifeGoalSelectorProps {
    setValue: (field: keyof LifepathFormData, value: LifepathFormData["goal"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const goals = [
    "Get rid of a bad reputation",
    "Gain power and control",
    "Get off The Street no matter what it takes",
    "Cause pain and suffering to anyone who crosses you",
    "Live down your past life and try to forget it",
    "Hunt down those responsible for your miserable life and make them pay",
    "Get what's rightfully yours",
    "Save, if possible, anyone else involved in your background, like a lover, or family member",
    "Gain fame and recognition",
    "Become feared and respected"
];

export default function LifeGoalSelector({setValue, onPrev, onNext}: LifeGoalSelectorProps) {

    return (
        <div>
            {goals.map((goal) => (
                <button
                    type="button"
                    key={goal}
                    onClick={() => setValue("goal", goal)}
                >
                    {goal}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}