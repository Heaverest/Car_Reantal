import { useForm } from 'react-hook-form'

const LoginScreen = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitForm = (data) => {
    console.log(data.email)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email', { required: "A valid email address is required" } )}
          required
        />
        {errors?.name && errors.name.message}
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password', { required: "Ooooppss!! no password" } )}
          required
        />
        {errors?.name && errors.name.message}
      </div>
      <button type='submit' className='button'>
        Login
      </button>
    </form>
  )
}
export default LoginScreen