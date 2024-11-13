import { useForm } from 'react-hook-form';

interface RoleFormData {
  role: string;
}

interface RoleFormProps {
  data: RoleFormData;
  onFormSubmit: (data: RoleFormData) => void;
}

export default function RoleForm({ data, onFormSubmit }: RoleFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<RoleFormData>({
    defaultValues: data
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input {...register("role", { required: 'Role is required' })} />
      {errors.role && <span>{errors.role.message}</span>}
      
      <button type="submit">Next</button>
    </form>
  );
}