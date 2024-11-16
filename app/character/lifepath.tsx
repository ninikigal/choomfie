"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LifepathFormData } from "./formTypes";
import CulturalSelector from "./selectors/CulturalSelector";
import PersonalitySelector from "./selectors/PersonalitySelector";
import ClothingHairStyleSelector from "./selectors/ClothingHairStyleSelector";
import AffectationSelector from "./selectors/AffectationSelector";
import CoreValueSelector from "./selectors/CoreValueSelector";
import FeelingsOfPeopleSelector from "./selectors/FeelingsOfPeopleSelector";
import PersonValueSelector from "./selectors/PersonValueSelector";
import PossessionValueSelector from "./selectors/PossessionValueSelector";
import FamilyBackgroundSelector from "./selectors/FamilyBackgroundSelector";
import ChildhoodEnvironmentSelector from "./selectors/ChildhoodEnvironmentSelector";
import FamilyCrisisSelector from "./selectors/FamilyCrisisSelector";
import FriendsSelector from "./selectors/FriendsSelector";
import EnemiesSelector from "./selectors/EnemiesSelector";
import TragicLoveAffairSelector from "./selectors/TragicLoveAffairSelector";
import LifeGoalSelector from "./selectors/LifeGoalSelector";

interface LifepathFormProps {
    data: LifepathFormData;
    onFormSubmit: (data: LifepathFormData) => void;
    onPreviousClick: () => void;
}

export default function LifepathForm({ data, onFormSubmit, onPreviousClick}: LifepathFormProps) {
    const [subStep, setSubStep] = useState<number>(15);

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
                <FeelingsOfPeopleSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Most Valued Person in Your Life? */}
            {
                subStep === 7 && 
                <PersonValueSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Most Valued Possession You Own? */}
            {
                subStep === 8 &&
                <PossessionValueSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Original Family Background */}
            {
                subStep === 9 && 
                <FamilyBackgroundSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Environment */}
            {
                subStep === 10 &&
                <ChildhoodEnvironmentSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Family Crisis */}
            {
                subStep === 11 &&
                <FamilyCrisisSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Your Friends */}
            {
                subStep === 12 &&
                <FriendsSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Your Enemies */}
            {
                subStep === 13 &&
                <EnemiesSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Tragic Love Affair(s) */}
            {
                subStep === 14 &&
                <TragicLoveAffairSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            {/* Life Goals */}
            {
                subStep === 15 &&
                <LifeGoalSelector setValue={setValue} onPrev={goToPrevStep} onNext={goToNextStep}/>
            }
            <button type="submit">Submit</button>
            <button onClick={onPreviousClick}>Back</button>
        </form>
    )
}