import './authentication.styles.scss';
import SignInForm from '../../components/sign-in/sign-in-form.component';
import SignUpForm from '../../components/sign-up/sign-up-form.component';

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
