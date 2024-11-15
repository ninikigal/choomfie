"use client"

import { LifepathFormData } from "./formTypes";

interface FeelingsOfPeopleSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Feeling = string;

const feelings: Feeling[] = [
    "I stay neutral.",
    "Honor I stay neutral.",
    "Your word I like almost everyone.",
    "Honesty I hate almost everyone.",
    "Knowledge People are tools. Use them for your own goals then discard them.",
    "Vengeance Every person is a valuable individual.",
    "Love People are obstacles to be destroyed if they cross me.",
    "Power People are untrustworthy. Don't depend on anyone.",
    "Family Wipe 'em all out and let the cockroaches take over.",
    "Friendship People are wonderful!"
]

export default function FeelingsOfPeopleSelector({ setValue, onPrev, onNext }: FeelingsOfPeopleSelectorProps) {

    return (
        <div>
            <h3>select feelings lol</h3>
            {
                feelings.map((feeling) => (
                    <button
                        type="button"
                        key={feeling}
                        onClick={() => {
                            setValue("feelingsOfPeople", feeling)
                        }}
                    >
                        {feeling}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}