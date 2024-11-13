"use client"
import { useForm } from "react-hook-form";

interface LifePathFormData {
    culturalorigin: string;
}

interface LifepathFormProps {
    data: LifePathFormData;
    onFormSubmit: (data: LifePathFormData) => void;
    onPreviousClick: () => void;
}

export default function LifepathForm({ data, onFormSubmit, onPreviousClick}: LifepathFormProps) {
    const { register, handleSubmit } = useForm<LifePathFormData>({
        defaultValues: data
    })

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* Cultural Origins */}
            <label htmlFor="culturalorigin">Your Cultural Region</label>
            <input
                id="culturalorigin" 
                type="text"
                {...register("culturalorigin")}
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