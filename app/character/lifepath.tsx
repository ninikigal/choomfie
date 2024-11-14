"use client"

import { useForm, Controller } from "react-hook-form";
import { LifepathFormData } from "./formTypes";
import CulturalSelector from "./CulturalSelector";

interface LifepathFormProps {
    data: LifepathFormData;
    onFormSubmit: (data: LifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function LifepathForm({ data, onFormSubmit, onPreviousClick}: LifepathFormProps) {
    const { register, setValue, handleSubmit } = useForm<LifepathFormData>({
        defaultValues: data
    })

    const handleFinalSubmit = (formData: LifepathFormData) => {
        onFormSubmit(formData); // Only submits when both fields are set
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* Cultural Origins */}
            <CulturalSelector setValue={setValue} />
            {/* <label htmlFor="cultural-origin">Your Cultural Region</label>
            <input
                id="cultural-origin" 
                type="text"
                {...register("culturalOrigin")}
            />
            <input
                id="languages"
                type="text"
                {...register("languages")}
            /> */}
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