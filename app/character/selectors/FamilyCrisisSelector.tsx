"use client"

import { LifepathFormData } from "../formTypes"

interface FamilyCrisisSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Crisis = string;

const crises: Crisis[] = [
    "Your family lost everything through betrayal.",
    "Your family lost everything through bad management.",
    "Your family was exiled or otherwise driven from their original home/nation/Corporation.",
    "Your family is imprisoned, and you alone escaped.",
    "Your family vanished. You are the only remaining member.",
    "Your family was killed, and you were the only survivor.",
    "Your family is involved in a long-term conspiracy, organization, or association, such as a crime family or revolutionary group.",
    "Your family was scattered to the winds due to misfortune.",
    "Your family is cursed with a hereditary feud that has lasted for generations.",
    "You are the inheritor of a family debt; you must honor this debt before moving on with your life"
]

export default function FamilyCrisisSelector({setValue, onPrev, onNext}: FamilyCrisisSelectorProps) {

    return (
        <div>
            <h3>select family crisis</h3>
            {
                crises.map((crisis) => (
                    <button
                        type="button"
                        key={crisis}
                        onClick={() => {
                            setValue("familyCrisis", crisis);
                        }}
                    > 
                        {crisis}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}