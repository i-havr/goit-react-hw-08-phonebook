import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { logIn } from 'redux/auth/auth-operations';
import {
  LogInPageStyled,
  ContainerStyled,
  SectionStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  LinkStyled,
} from './LogInPage.styled';
import { Button } from 'components/Button/Button';

export default function LogInPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LogInPageStyled>
      <SectionStyled>
        <ContainerStyled>
          <h1>Please login to your account</h1>

          <FormStyled onSubmit={handleSubmit} autoComplete="off">
            <LabelStyled>
              Email
              <InputStyled
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                autoFocus
              />
            </LabelStyled>

            <LabelStyled>
              Password
              <InputStyled
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </LabelStyled>

            <Button>Log in</Button>
          </FormStyled>
          <p>
            Not registered yet?{' '}
            <LinkStyled to={'/register'}>Sign up!</LinkStyled>
          </p>
          <Toaster />
        </ContainerStyled>
      </SectionStyled>
    </LogInPageStyled>
  );
}
