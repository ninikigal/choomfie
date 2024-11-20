"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { NetrunnerLifepathFormData } from "../formTypes";
import TypeSelector from "./netrunner-lifepath-selectors/TypeSelector";
import PartnerSelector from "./netrunner-lifepath-selectors/PartnerSelector";
import WorkspaceSelector from "./netrunner-lifepath-selectors/WorkspaceSelector";
import ClientSelector from "./netrunner-lifepath-selectors/ClientSelector";
import ProgramSourceSelector from "./netrunner-lifepath-selectors/ProgramSourceSelector";
import OppositionSelector from "./netrunner-lifepath-selectors/OppositionSelector";

interface NetrunnerLifepathFormProps {
    data: NetrunnerLifepathFormData;
    onFormSubmit: (data: NetrunnerLifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function NetrunnerLifepathForm({data, onFormSubmit, onPreviousClick}: NetrunnerLifepathFormProps) {
    const [subStep, setSubStep] = useState(1);

    const { watch, setValue, handleSubmit } = useForm<NetrunnerLifepathFormData>({
        defaultValues: data
    });

    const hasPartner = watch("hasPartner");

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {subStep === 1 && <TypeSelector setValue={setValue} onNext={goToNextStep} />}
            {subStep === 2 && <PartnerSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />}
            {((subStep === 3 && !hasPartner) || (subStep == 4 && hasPartner)) && 
                <WorkspaceSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />
            }
            {((subStep === 4 && !hasPartner) || (subStep == 5 && hasPartner)) &&
                <ClientSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />
            }
            {((subStep === 5 && !hasPartner) || (subStep === 6 && hasPartner)) && 
                <ProgramSourceSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep} />
            }
            {((subStep === 6 && !hasPartner) || (subStep === 7 && hasPartner)) && 
                <OppositionSelector setValue={setValue} onPrev={goToPrevStep} />
            }
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}