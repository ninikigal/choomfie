"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ExecLifepathFormData } from "../formTypes";
import TypeSelector from "./exec-lifepath-selectors/TypeSelector";
import DivisionSelector from "./exec-lifepath-selectors/DivisionSelector";
import MoralsSelector from "./exec-lifepath-selectors/MoralsSelector";
import BasedSelector from "./exec-lifepath-selectors/BasedSelector";
import OppositionSelector from "./exec-lifepath-selectors/OppositionSelector";
import BossStandingSelector from "./exec-lifepath-selectors/BossStandingSelector";

interface ExecLifepathFormProps {
    data: ExecLifepathFormData;
    onFormSubmit: (data: ExecLifepathFormData) => void;
    onPreviousClick: () => void;
}

function ExecLifepathForm({data, onFormSubmit, onPreviousClick}: ExecLifepathFormProps) {
    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit } = useForm<ExecLifepathFormData>({
        defaultValues: data
    })

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <TypeSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <DivisionSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 3 && <MoralsSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 4 && <BasedSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 5 && <OppositionSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 6 && <BossStandingSelector setValue={setValue} onPrev={goToPrevStep} />}
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}

export default ExecLifepathForm;