import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
//import Error from '../components/Error'
//import Spinner from '../components/Spinner'
import { registerUser } from '../Redux/features/auth/authActions'

const RegisterScreen = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch')
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <p>{error}</p>}
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          className='form-input'
          {...register('firstName')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Confirm Password</label>
        <input
          type='password'
          className='form-input'
          {...register('confirmPassword')}
          required
        />
      </div>
      <button type='submit' className='button' disabled={loading}>
        {loading ? 'Loading....' : 'Register'}
      </button>
    </form>
  )
}
export default RegisterScreen


















// import React from "react";
// import { useForm } from "react-hook-form";

// const RegisterForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const handleRegistration = (data) => console.log(data);
//   const handleError = (errors) => {};

//   const registerOptions = {
//     name: { required: "Name is required" },
//     email: { required: "Email is required" },
//     password: {
//       required: "Password is required",
//       minLength: {
//         value: 8,
//         message: "Password must have at least 8 characters"
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(handleRegistration, handleError)}>
//       <div>
//         <label>Name</label>
//         <input name="name" type="text" {...register('name', registerOptions.name) }/>
//         <small className="text-danger">
//           {errors?.name && errors.name.message}
//         </small>
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           {...register('email', registerOptions.email)}
//         />
//         <small className="text-danger">
//           {errors?.email && errors.email.message}
//         </small>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           {...register('password', registerOptions.password)}
//         />
//         <small className="text-danger">
//           {errors?.password && errors.password.message}
//         </small>
//       </div>
//       <button>Submit</button>
//     </form>
//   );
// };
// export default RegisterForm;