import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User/user-context";
import './Signin.css';


const defaultFormFields = {
  email: '',
  password: ''
}




const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const { setCurrentUser } = useContext(UserContext);

  return (
    <div className="signin-form-container">
      <form>
        <label>
          Email:
          <input
            label="email"
            type="email"
            required
            name="email"
            value={email} />
        </label>
        <label>
          Password:
          <input />
        </label>
      </form>

      <button>Confirm</button>
    </div>
  )
}

export default SignInForm;