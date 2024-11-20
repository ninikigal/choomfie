"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { TechLifepathFormData } from "../formTypes";
import TypeSelector from "./tech-lifepath-selectors/TypeSelector";
import PartnerSelector from "./tech-lifepath-selectors/PartnerSelector";
import WorkspaceSelector from "./tech-lifepath-selectors/WorkspaceSelector";
import ClientSelector from "./tech-lifepath-selectors/ClientSelector";
import SuppliesSourceSelector from "./tech-lifepath-selectors/SuppliesSourceSelector";
import OppositionSelector from "./tech-lifepath-selectors/OppositionSelector";

interface TechLifepathFormProps {
    data: TechLifepathFormData;
    onFormSubmit: (data: TechLifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function TechLifepathForm({data, onFormSubmit, onPreviousClick}: TechLifepathFormProps) {
    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit } = useForm<TechLifepathFormData>({
        defaultValues: data
    });

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <TypeSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <PartnerSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 3 && 
                <WorkspaceSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />
            }
            {subStep === 4 &&
                <ClientSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />
            }
            {subStep === 5 && 
                <SuppliesSourceSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />
            }
            {subStep === 6 && 
                <OppositionSelector setValue={setValue} onPrev={goToPrevStep} />
            }
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}