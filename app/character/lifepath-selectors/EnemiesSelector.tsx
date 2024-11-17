"use client"

import { useState } from "react";
import { LifepathFormData, EnemyFormData } from "../formTypes"

interface EnemySelectorProps {
    setValue: (field: keyof LifepathFormData, value: EnemyFormData[]) => void;
    onPrev: () => void;
    onNext: () => void;
}


const enemyType = [
    "Ex-enemy",
    "Ex-lover",
    "Estranged relative",
    "Childhood enemy",
    "Person working for you",
    "Person you work for",
    "Partner or coworker",
    "Corporate exec",
    "Government official",
    "Boosterganger"
];

const causes = [
    "Caused the other to lose face or status.",
    "Caused the loss of lover, enemy, or relative.",
    "Caused a major public humiliation.",
    "Accused the other of cowardice or some other major personal flaw.",
    "Deserted or betrayed the other.",
    "Turned down the other's offer of a job or romantic involvement.",
    "You just don't like each other.",
    "One of you was a romantic rival.",
    "One of you was a business rival.",
    "One of you set the other up for a crime they didn't commit."
];

const threats = [
    "Just themselves and even they won't go out of their way.",
    "Just themselves.",
    "Just themselves and a close enemy.",
    "Themselves and a few (1d6/2) friends.",
    "Themselves and a few (1d10/2) friends.",
    "An entire gang (at least 1d10 + 5 people).",
    "The local cops or other Lawmen.",
    "A powerful gang lord or small Corporation.",
    "A powerful Corporation.",
    "An entire city or government or agency"
];

const revenges = [
    "Avoid the scum.",
    "Go into a murderous rage and try to physically rip their face off.",
    "Backstab them indirectly.",
    "Verbally attack them.",
    "Set them up for a crime or other transgression they didn't commit.",
    "Set out to murder or maim them."
];

export default function EnemiesSelector({setValue, onPrev, onNext}: EnemySelectorProps) {

    const [enemies, setEnemies] = useState<EnemyFormData[]>([]);
    const [nextId, setNextId] = useState(0);

    const addEnemy = () => {
        const newEnemy: EnemyFormData = {id: nextId, type: null, cause: null, threat: null, revenge: null};
        setEnemies((prevState) => [...prevState, newEnemy]);
        setNextId((prevId) => prevId + 1)
    };

    const removeEnemy = (id: number) => {
        setEnemies((prevState) => prevState.filter((enemy) => enemy.id !== id));
    };

    const updateEnemy = (id: number, property: keyof EnemyFormData, value: EnemyFormData[keyof EnemyFormData]) => {
        setEnemies((prevState) => 
            prevState.map((enemy) => 
                enemy.id === id ? {...enemy, [property]: value} : enemy
            )
        );
    };

    const handleSubmit = () => {
        setValue("enemies", enemies);
        onNext();
    };

    return (
        <div>
            {enemies.map((enemy, index) => (
                <div key={index}>
                    <h3>enemy {index}</h3>
                    <p>enemy type</p>
                    {enemyType.map((type) => (
                        <button
                            type="button"
                            key={type}
                            onClick={() => updateEnemy(enemy.id, "type", type)}
                        >
                            {type}
                        </button>
                    ))}
                    <p>cause</p>
                    {causes.map((cause) => (
                        <button
                            type="button"
                            key={cause}
                            onClick={() => updateEnemy(enemy.id, "cause", cause)}
                        >
                            {cause}
                        </button>
                    ))}
                    <p>threat</p>
                    {threats.map((threat) => (
                        <button
                            type="button"
                            key={threat}
                            onClick={() => updateEnemy(enemy.id, "threat", threat)}
                        >
                            {threat}
                        </button>
                    ))}
                    <p>revenges</p>
                    {revenges.map((revenge) => (
                        <button
                            type="button"
                            key={revenge}
                            onClick={() => updateEnemy(enemy.id, "revenge", revenge)}
                        >
                            {revenge}
                        </button>
                    ))}
                    <button
                        type="button"
                        key={index}
                        onClick={() => removeEnemy(enemy.id)}
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