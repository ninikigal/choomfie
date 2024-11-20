"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { MedtechLifepathFormData } from "../formTypes";
import TypeSelector from "./medtech-lifepath-selectors/TypeSelector";
import PartnerSelector from "./medtech-lifepath-selectors/PartnerSelector";
import WorkspaceSelector from "./medtech-lifepath-selectors/WorkspaceSelector";
import ClientSelector from "./medtech-lifepath-selectors/ClientSelector";
import SuppliesSourceSelector from "./medtech-lifepath-selectors/SuppliesSourceSelector";

interface MedtechLifepathFormProps {
    data: MedtechLifepathFormData;
    onFormSubmit: (data: MedtechLifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function MedtechLifepathForm({data, onFormSubmit, onPreviousClick}: MedtechLifepathFormProps) {
    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit } = useForm<MedtechLifepathFormData>({
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
                <SuppliesSourceSelector setValue={setValue} onPrev={goToPrevStep} />
            }
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}
