"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LifepathFormData } from "./formTypes";
import CulturalSelector from "./CulturalSelector";
import PersonalitySelector from "./PersonalitySelector";
import ClothingHairStyleSelector from "../ClothingHairStyleSelector";
import AffectationSelector from "./AffectationSelector";
import CoreValueSelector from "./CoreValueSelector";

interface LifepathFormProps {
    data: LifepathFormData;
    onFormSubmit: (data: LifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function LifepathForm({ data, onFormSubmit, onPreviousClick}: LifepathFormProps) {
    const [subStep, setSubStep] = useState<number>(1);

    const { setValue, handleSubmit } = useForm<LifepathFormData>({
        defaultValues: data
    })

    const goToNextStep = () => setSubStep((prevStep) => prevStep + 1);
    const goToPrevStep = () => setSubStep((prevStep) => prevStep - 1);

    const handleFinalSubmit = (formData: LifepathFormData) => {
        onFormSubmit(formData); // Only submits when both fields are set
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* Cultural Origins */}
            {
                subStep === 1 && 
                <CulturalSelector setValue={setValue} onNext={goToNextStep}/>
            }
            {/* Personality */}
            {
                subStep === 2 &&
                <PersonalitySelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Dress and Personal Style */}
            {
                subStep === 3 &&
                <ClothingHairStyleSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Things You Value the Most */}
            {
                subStep === 4 &&
                <AffectationSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* What Do You Value Most? */}
            {
                subStep === 5 &&
                <CoreValueSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* How Do You Feel About Most People? */}
            {
                subStep === 6 &&
                // Add component for "How Do You Feel About Most People?"
            }
            {/* Most Valued Person in Your Life? */}
            {
                subStep === 7 &&
                // Add component for "Most Valued Person in Your Life?"
            }
            {/* Most Valued Possession You Own? */}
            {
                subStep === 8 &&
                // Add component for "Most Valued Possession You Own?"
            }
            {/* Original Family Background */}
            {
                subStep === 9 &&
                // Add component for "Original Family Background"
            }
            {/* Environment */}
            {
                subStep === 10 &&
                // Add component for "Environment"
            }
            {/* Family Crisis */}
            {
                subStep === 11 &&
                // Add component for "Family Crisis"
            }
            {/* Your Friends */}
            {
                subStep === 12 &&
                // Add component for "Your Friends"
            }
            {/* Your Enemies */}
            {
                subStep === 13 &&
                // Add component for "Your Enemies"
            }
            {/* Sweet Revenge */}
            {
                subStep === 14 &&
                // Add component for "Sweet Revenge"
            }
            {/* Tragic Love Affair(s) */}
            {
                subStep === 15 &&
                // Add component for "Tragic Love Affair(s)"
            }
            {/* Life Goals */}
            {
                subStep === 16 &&
                // Add component for "Life Goals"
            }
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}