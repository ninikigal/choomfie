"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { NomadLifepathFormData } from "../formTypes";
import PackSizeSelector from "./nomad-lifepath-selectors/PackSizeSelector";
import BasedSelector from "./nomad-lifepath-selectors/WorkSelector";
import TypeSelector from "./nomad-lifepath-selectors/TypeSelector";
import PhilosophySelector from "./nomad-lifepath-selectors/PhilosophySelector";
import OppositionSelector from "./nomad-lifepath-selectors/OppositionSelector";

interface NomadLifepathFormProps {
    data: NomadLifepathFormData;
    onFormSubmit: (data: NomadLifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function NomadLifepathForm({data, onFormSubmit, onPreviousClick}: NomadLifepathFormProps) {
    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit } = useForm<NomadLifepathFormData>({
        defaultValues: data
    });

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <PackSizeSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <BasedSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 3 && <TypeSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 4 && <PhilosophySelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 5 && <OppositionSelector setValue={setValue} onPrev={goToPrevStep} />}
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    );
}