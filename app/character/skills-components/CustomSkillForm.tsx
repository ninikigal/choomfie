import { CustomSkill } from "../formTypes";

interface CustomSkillFormProps {
    skillName: string;
    value: CustomSkill[];
    setValue: (subSkills: CustomSkill[]) => void;
}

const CustomSkillForm = ({ skillName, value, setValue }: CustomSkillFormProps) => {

    const addNewSkill = () => {
        setValue([...value, {name: "lol", skillPoints: null} as CustomSkill])
    }

    return (
        <div>
            {value.map((skill, index) => (
                <div key={index}>
                    <h1>hello</h1>
                </div>
            ))}
            <button type="button" onClick={addNewSkill}>Add new {skillName} skill</button>
        </div>
    )
}

export default CustomSkillForm;
