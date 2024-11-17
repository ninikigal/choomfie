"use client"

import { useState } from "react";
import { LifepathFormData, TragicLoveAffairFormData } from "../formTypes"

interface TragicLoveAffairSelectorProps {
    setValue: (field: keyof LifepathFormData, value: TragicLoveAffairFormData[]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const endings = [
    "Your lover died in an accident.",
    "Your lover mysteriously vanished.",
    "It just didn't work out.",
    "A personal goal or vendetta came between you and your lover.",
    "Your lover was kidnapped.",
    "Your lover went insane or cyberpsycho.",
    "Your lover committed suicide.",
    "Your lover was killed in a fight.",
    "A rival cut you out of the action.",
    "Your lover is imprisoned or exiled."
];

export default function TragicLoveAffairSelector({setValue, onPrev, onNext}: TragicLoveAffairSelectorProps) {

    const [lovers, setLovers] = useState<TragicLoveAffairFormData[]>([]);
    const [nextId, setNextId] = useState(0);

    const addEnemy = () => {
        const newLover: TragicLoveAffairFormData = {id: nextId, end: null};
        setLovers((prevState) => [...prevState, newLover]);
        setNextId((prevId) => prevId + 1)
    };

    const removeLover = (id: number) => {
        setLovers((prevState) => prevState.filter((lover) => lover.id !== id));
    };

    const updateLover = (id: number, end: string) => {
        setLovers((prevState) => 
            prevState.map((lover) => 
                lover.id === id ? {...lover, end: end} : lover
            )
        );
    };

    const handleSubmit = () => {
        setValue("lovers", lovers);
        onNext();
    };

    return (
        <div>
            {lovers.map((lover, index) => (
                <div key={index}>
                    <h3>lover {index}</h3>
                    <p>lover type</p>
                    {endings.map((end) => (
                        <button
                            type="button"
                            key={end}
                            onClick={() => updateLover(lover.id, end)}
                        >
                            {end}
                        </button>
                    ))}
                    <button
                        type="button"
                        key={index}
                        onClick={() => removeLover(lover.id)}
                    >
                    DELETE
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={addEnemy}
            >   
            ADD
            </button>
            <button onClick={onPrev}>PREV</button>
            <button onClick={handleSubmit}>NEXT</button>
        </div>
    );
}