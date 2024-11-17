"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { RockerLifepathFormData } from "../formTypes";
import TypeSelector from "./rockerboy-lifepath-selectors/TypeSelector";
import GroupOrSoloSelector from "./rockerboy-lifepath-selectors/GroupOrSoloSelector";
import LeaveReasonSelector from "./rockerboy-lifepath-selectors/LeaveReasonSelector";
import PerformingVenueSelector from "./rockerboy-lifepath-selectors/PerformingVenueSelector";
import OppositionSelector from "./rockerboy-lifepath-selectors/OppositionSelector";


interface RockerLifepathFormProps {
    data: RockerLifepathFormData;
    onFormSubmit: (data: RockerLifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function RockerLifepathForm({data, onFormSubmit, onPreviousClick}: RockerLifepathFormProps) {

    const [subStep, setSubStep] = useState(1);

    const { setValue, handleSubmit, watch } = useForm<RockerLifepathFormData>({
        defaultValues: data
    })

    const isInGroup = watch("isInGroup");
    const wasInGroup = watch("wasInGroup");

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <TypeSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <GroupOrSoloSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {subStep === 3 && (!isInGroup && wasInGroup) &&
                <LeaveReasonSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {((subStep === 3 && ((!isInGroup && !wasInGroup) || (isInGroup && !wasInGroup))) ||
                (subStep === 4 && (!isInGroup && wasInGroup))) &&
                <PerformingVenueSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {((subStep === 4 && ((!isInGroup && !wasInGroup) || (isInGroup && !wasInGroup))) ||
                (subStep === 5 && (!isInGroup && wasInGroup))) &&
                <OppositionSelector setValue={setValue} onPrev={goToPrevStep}/>
            }
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}