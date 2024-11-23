"use client"

import { useState } from "react"
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
    const [availablePoints, setAvailablePoints] = useState(62);
    const { register, handleSubmit } = useForm<StatsFormData>({
        defaultValues: data
    })

    const handleStatChange = (e: any) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>points haz: {availablePoints}</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>int</label>
                <input
                    type="number"
                    {...register("intelligence")}
                    onChange={(e) => handleStatChange(e)}
                />
                <label>ref</label>
                <input
                    type="number"
                    {...register("reflexes")}
                />
                <label>dex</label>
                <input
                    type="number"
                    {...register("dexterity")}
                />
                <label>tech</label>
                <input
                    type="number"
                    {...register("technique")}
                />
                <label>cool</label>
                <input
                    type="number"
                    {...register("cool")}
                />
            
                <label>will</label>
                <input
                    type="number"
                    {...register("willpower")}
                />
                <label>luck</label>
                <input
                    type="number"
                    {...register("luck")}
                />
                <label>move</label>
                <input 
                    type="number"
                    {...register("movement")}
                    
                />
                <label>body</label>
                <input
                    type="number" 
                    {...register("body")}
                />
                <label>emp</label>
                <input 
                    type="number"
                    {...register("empathy")}
                />
                <button>submit stats</button>
            </form>
        </div>
    )
}