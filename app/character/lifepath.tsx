"use client"

import { useForm } from "react-hook-form";
import { LifepathFormData } from "./formTypes";

interface LifepathFormProps {
    data: LifepathFormData;
    onFormSubmit: (data: LifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function LifepathForm({ data, onFormSubmit, onPreviousClick}: LifepathFormProps) {
    const { register, handleSubmit } = useForm<LifepathFormData>({
        defaultValues: data
    })

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* Cultural Origins */}
            <label htmlFor="cultural-origin">Your Cultural Region</label>
            <input
                id="cultural-origin" 
                type="text"
                {...register("culturalOrigin")}
            />

            {/* Personality */}
            {/* Dress and Personal Style */}
            {/* Motivations and Relationships */}
            {/* Things You Value the Most */}
            {/* Original Family BAckground */}
            {/* Environment */}
            {/* Family Crisis */}
            {/* Your Friends */}
            {/* Your Enemies */}
            {/* Sweet Revenge */}
            {/* Tragic Love Affair(s) */}
            {/* Life Goals */}
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}