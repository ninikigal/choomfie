"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FixerLifepathFormData } from "../formTypes"
import TypeSelector from "./fixer-lifepath-selectors/TypeSelector";
import PartnerSelector from "./fixer-lifepath-selectors/PartnerSelector";
import WorkspaceSelector from "./fixer-lifepath-selectors/WorkspaceSelector";
import ClientSelector from "./fixer-lifepath-selectors/ClientSelector";
import OppositionSelector from "./fixer-lifepath-selectors/OppositionSelector";

interface FixerLifepathFormProps {
    data: FixerLifepathFormData;
    onFormSubmit: (data: FixerLifepathFormData) => void;
    onPreviousClick: () => void;
}

function FixerLifepathForm({data, onFormSubmit, onPreviousClick}: FixerLifepathFormProps) {
    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit, watch } = useForm<FixerLifepathFormData>({
        defaultValues: data
    })

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    const hasPartner = watch("hasPartner");

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <TypeSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <PartnerSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 3 && <WorkspaceSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 4 && <ClientSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 5 && <OppositionSelector setValue={setValue} onPrev={goToPrevStep} />}
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}

export default FixerLifepathForm;