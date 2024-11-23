"use client"

import { useForm } from 'react-hook-form';
import { RoleFormData } from './formTypes';

interface RoleFormProps {
  data: RoleFormData;
  onFormSubmit: (data: RoleFormData) => void;
  onPreviousClick: () => void;
}

const roles = [
  "rockerboy", 
  "solo", 
  "netrunner", 
  "tech", 
  "medtech",
  "media", 
  "exec", 
  "lawman", 
  "fixer", 
  "nomad"
];

export default function RoleForm({ data, onFormSubmit, onPreviousClick }: RoleFormProps) {
  const { setValue, handleSubmit } = useForm<RoleFormData>({
    defaultValues: data
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {roles.map((role) => (
        <button
          type="button"
          key={role}
          onClick={() => setValue("role", role as RoleFormData["role"])}
        >
          {role}
        </button>
      ))}
      
      <button type="submit">Next</button>
      <button onClick={onPreviousClick}>BACK</button>
    </form>
  );
}