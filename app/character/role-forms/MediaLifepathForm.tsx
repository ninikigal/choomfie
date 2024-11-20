"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { SoloLifepathFormData } from "../formTypes";
import TypeSelector from "./media-lifepath-selectors/TypeSelector";
import PublicationSelector from "./media-lifepath-selectors/PublicationSelector";
import EthicsSelector from "./media-lifepath-selectors/EthicsSelector";
import StoriesSelector from "./media-lifepath-selectors/StoriesSelector";

interface SoloLifepathFormProps {
    data: SoloLifepathFormData;
    onFormSubmit: (data: SoloLifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function SoloLifepathForm({data, onFormSubmit, onPreviousClick}: SoloLifepathFormProps) {

    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit } = useForm<SoloLifepathFormData>({
        defaultValues: data
    })

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <TypeSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <PublicationSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 3 && <EthicsSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 4 && <StoriesSelector setValue={setValue} onPrev={goToPrevStep} />}
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}