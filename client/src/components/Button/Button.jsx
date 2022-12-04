import './Button.css';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  facebook: 'facebook-sign-in',
  signin: 'sign-in',
  confirm: 'confirm'
}


const Button = ({ children, buttonType, ...otherProps }) => {
return (
  <button className=
  {`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
  {...otherProps}>
    {children}
  </button>
)
}

export default Button;

