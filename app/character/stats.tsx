"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import { StatsFormData, MethodFormData } from "./formTypes"


interface StatsFormProps {
    data: StatsFormData;
    method: MethodFormData["method"];
    onFormSubmit: (data: StatsFormData) => void;
    onPreviousClick: () => void;
}

export default function StatsForm({data, method, onFormSubmit, onPreviousClick, }: StatsFormProps) {
    
    const initialPoints = 62;
    const [availablePoints, setAvailablePoints] = useState(initialPoints);
    const { register, getValues, handleSubmit } = useForm<StatsFormData>({
        defaultValues: data
    })

    const recalculatePoints = () => {
        const values = getValues();
        const totalSpent = Object.values(values).reduce(
            (sum, val) => sum + (Number(val) || 0),
            0
        )

        setAvailablePoints(initialPoints - totalSpent);
    }

    useEffect(() => {
        recalculatePoints();
    }, [])

    return (
        <div>
            <h1>points haz: {availablePoints}</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>int</label>
                <input
                    type="number"
                    {...register("intelligence", {
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>ref</label>
                <input
                    type="number"
                    {...register("reflexes",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>dex</label>
                <input
                    type="number"
                    {...register("dexterity",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>tech</label>
                <input
                    type="number"
                    {...register("technique",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>cool</label>
                <input
                    type="number"
                    {...register("cool",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
            
                <label>will</label>
                <input
                    type="number"
                    {...register("willpower",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>luck</label>
                <input
                    type="number"
                    {...register("luck",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>move</label>
                <input 
                    type="number"
                    {...register("movement",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>body</label>
                <input
                    type="number" 
                    {...register("body",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <label>emp</label>
                <input 
                    type="number"
                    {...register("empathy",{
                        valueAsNumber: true,
                        onChange: recalculatePoints,
                        max: 8
                    })}
                    max={8}
                    min={2}
                />
                <button>submit stats</button>
            </form>
        </div>
    )
}