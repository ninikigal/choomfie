"use client"
import { useReducer } from "react";
import { RoleFormData, LifepathFormData, createEmptyStepData } from "./formTypes";

import RoleForm from "./role";
import LifepathForm from "./lifepath";
import RoleLifepath from "./rolelifepath";

interface FormData {
    step1: RoleFormData,
    step2: LifepathFormData
}

type FormAction = 
    | { type: "UPDATE_STEP"; step: keyof FormData; data: Partial<FormData[keyof FormData]> }
    | { type: "NEXT_STEP" }
    | { type: "PREV_STEP" };

const initialState: FormData & { currentStep: number } = {
    currentStep: 1, 
    step1: createEmptyStepData("role"),
    step2: createEmptyStepData("lifepath")
}

function formReducer(state: typeof initialState, action: FormAction) {
    switch (action.type) {
        case "UPDATE_STEP":
            return { ...state, [action.step]: {
                ...state[action.step], ...action.data} };
        case "NEXT_STEP":
            return { ...state, currentStep: Math.min(state.currentStep + 1, 3) };
        case "PREV_STEP":
            return { ...state, currentStep: Math.max(state.currentStep -1, 1 ) };
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

    const handleFormSubmit = () => {
        console.log("Form Submitted:", state);
    }

    return (
        <div>
            <h1>Step {state.currentStep}</h1>
            {state.currentStep === 1 && (
                <RoleForm
                    data={state.step1}
                    onFormSubmit={(data) => handleStepSubmit("step1", data)}
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
                <button onClick={handlePrevStep}>goback</button>
            )}

            {/* Debug section */}
            <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <h2>Debug: Current State</h2>
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
        </div>
    )
}