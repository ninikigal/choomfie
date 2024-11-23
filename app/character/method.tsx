"use client"

import { MethodFormData } from "./formTypes";
import { useForm } from "react-hook-form";

interface MethodFormProps {
    data: MethodFormData;
    onFormSubmit: (data: MethodFormData) => void;
}

const methods = [
    "streetrat",
    "edgerunner",
    "complete",
]

export default function MethodForm({data, onFormSubmit}: MethodFormProps) {
    const { setValue, handleSubmit } = useForm<MethodFormData>({
        defaultValues: data,
    })

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <h1>choose method</h1>
            {methods.map((method) => (
                <button
                    type="button"
                    key={method}
                    onClick={() =>
                        setValue("method", method as MethodFormData["method"])
                    }
                >
                    {method}
                </button>
            ))}
            <button>SUBMIT</button>
        </form>
    )
}