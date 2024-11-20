"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LawmanLifepathFormData } from "../formTypes";
import PositionSelector from "./lawman-lifepath-selectors/PositionSelector";
import JurisdictionSelector from "./lawman-lifepath-selectors/JurisdictionSelector";
import CorruptSelector from "./lawman-lifepath-selectors/CorruptSelector";
import OppositionSelector from "./lawman-lifepath-selectors/OppositionSelector";
import TargetSelector from "./lawman-lifepath-selectors/TargetSelector";

interface LawmanLifepathFormProps {
    data: LawmanLifepathFormData;
    onFormSubmit: (data: LawmanLifepathFormData) => void;
    onPreviousClick: () => void;
}

function LawmanLifepathForm({data, onFormSubmit, onPreviousClick}: LawmanLifepathFormProps) {
    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit } = useForm<LawmanLifepathFormData>({
        defaultValues: data
    })

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <PositionSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <JurisdictionSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 3 && <CorruptSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 4 && <OppositionSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 5 && <TargetSelector setValue={setValue} onPrev={goToPrevStep} />}
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}

export default LawmanLifepathForm;