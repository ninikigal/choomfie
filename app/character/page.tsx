"use client"
import { useReducer } from "react";
import { 
    MethodFormData, 
    RoleFormData, 
    LifepathFormData, 
    createEmptyStepData, 
    RockerLifepathFormData, 
    SoloLifepathFormData, 
    NetrunnerLifepathFormData, 
    TechLifepathFormData, 
    MedtechLifepathFormData, 
    MediaLifepathFormData, 
    ExecLifepathFormData, 
    LawmanLifepathFormData, 
    FixerLifepathFormData, 
    NomadLifepathFormData, 
    StatsFormData
} from "./formTypes";

import MethodForm from "./method";
import RoleForm from "./role";
import LifepathForm from "./lifepath";
import SoloLifepathForm from "./role-forms/SoloLifepathForm";
import RockerLifepathForm from "./role-forms/RockerboyLifepathForm";
import NetrunnerLifepathForm from "./role-forms/NetrunnerLifepathForm";
import TechLifepathForm from "./role-forms/TechLifepathForm";
import MedtechLifepathForm from "./role-forms/MedtechLifepathForm";
import MediaLifepathForm from "./role-forms/MediaLifepathForm";
import ExecLifepathForm from "./role-forms/ExecLifepathForm";
import LawmanLifepathForm from "./role-forms/LawmanLifepathForm";
import FixerLifepathForm from "./role-forms/FixerLifepathForm";
import NomadLifepathForm from "./role-forms/NomadLifepathForm";
import StatsForm from "./stats";

interface FormData {
    step0: MethodFormData
    step1: RoleFormData,
    step2: LifepathFormData
    step3:
        | RockerLifepathFormData
        | SoloLifepathFormData
        | NetrunnerLifepathFormData
        | TechLifepathFormData
        | MedtechLifepathFormData
        | MediaLifepathFormData
        | ExecLifepathFormData
        | LawmanLifepathFormData
        | FixerLifepathFormData
        | NomadLifepathFormData
    step4: StatsFormData
}

type FormAction = 
    | { type: "UPDATE_STEP"; step: keyof FormData; data: Partial<FormData[keyof FormData]> }
    | { type: "NEXT_STEP" }
    | { type: "PREV_STEP" };

const initialState: FormData & { currentStep: number } = {
    currentStep: 4,
    step0: createEmptyStepData("method"),
    step1: createEmptyStepData("role"),
    step2: createEmptyStepData("lifepath"),
    step3: createEmptyStepData("roleLifepath", ""),
    step4: createEmptyStepData("stats")
}

const preparePayload = (state: typeof initialState) => {
    return {
        role: state.step1.role,
        cultural_origin: state.step2.culturalOrigin,
    }
}

function formReducer(state: typeof initialState, action: FormAction) {
    switch (action.type) {
        case "UPDATE_STEP":
            return { 
                ...state,
                [action.step]: {
                    ...state[action.step], 
                    ...action.data
                },
                ...(action.step === "step1" && {
                    step3: createEmptyStepData("roleLifepath", (action.data as RoleFormData).role || ""),
                }),
            };
        case "NEXT_STEP":
            return { ...state, currentStep: Math.min(state.currentStep + 1, 4) };
        case "PREV_STEP":
            return { ...state, currentStep: Math.max(state.currentStep - 1, 0 ) };
        default:
            return state;
    }
}


export default function CharacterPage() {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleStepSubmit = (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => {
        dispatch({ type: "UPDATE_STEP", step, data });
        dispatch({ type: "NEXT_STEP" });
    }

    const handlePrevStep = () => {
        dispatch({ type: "PREV_STEP" });
    }

    const handleFormSubmit = async () => {
        const payload = preparePayload(state);
        console.log(payload);

        try {
            const response = await fetch('http://localhost:8000/api/characters/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`)
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div>
            <h1>Step {state.currentStep}</h1>
            {state.currentStep === 0 && (
                <MethodForm
                    data={state.step0}
                    onFormSubmit={(data) => handleStepSubmit("step0", data)}
                />
            )}
            {state.currentStep === 1 && (
                <RoleForm
                    data={state.step1}
                    onFormSubmit={(data) => handleStepSubmit("step1", data)}
                    onPreviousClick={() => handlePrevStep()}
                />
            )}
            {state.currentStep === 2 && (
                <LifepathForm 
                    data={state.step2}
                    onFormSubmit={(data) => handleStepSubmit("step2", data)}
                    onPreviousClick={() => handlePrevStep()}
                />
            )}
            {state.currentStep === 3 && (
                <div>
                    {state.step1.role === "solo" && (
                        <SoloLifepathForm
                            data={state.step3 as SoloLifepathFormData}
                            onFormSubmit={(data) => handleStepSubmit("step3", data)}
                            onPreviousClick={() => handlePrevStep()}
                        />
                    )}
                    {state.step1.role === "rockerboy" &&
                        <RockerLifepathForm
                        data={state.step3 as RockerLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "netrunner" &&
                        <NetrunnerLifepathForm
                        data={state.step3 as NetrunnerLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "tech" &&
                        <TechLifepathForm
                        data={state.step3 as TechLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "medtech" &&
                        <MedtechLifepathForm
                        data={state.step3 as MedtechLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "media" &&
                        <MediaLifepathForm
                        data={state.step3 as MediaLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "exec" &&
                        <ExecLifepathForm
                        data={state.step3 as ExecLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "lawman" &&
                        <LawmanLifepathForm
                        data={state.step3 as LawmanLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "fixer" &&
                        <FixerLifepathForm
                        data={state.step3 as FixerLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    {state.step1.role === "nomad" &&
                        <NomadLifepathForm
                        data={state.step3 as NomadLifepathFormData}
                        onFormSubmit={(data) => handleStepSubmit("step3", data)}
                        onPreviousClick={() => handlePrevStep()}
                        />
                    }
                    <button onClick={handlePrevStep}>goback</button>
                </div>
            )}
            {state.currentStep === 4 && 
                <StatsForm
                    data={state.step4}
                    method={state.step0.method}
                    onFormSubmit={(data) => handleStepSubmit("step4", data)}
                    onPreviousClick={() => handlePrevStep()}
                />
            }

            <button onClick={handleFormSubmit}>SUBMIT COMPLETELY</button>
            {/* Debug section */}
            <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <h2>Debug: Current State</h2>
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
        </div>
    )
}