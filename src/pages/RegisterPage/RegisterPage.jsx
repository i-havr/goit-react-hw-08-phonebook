import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { register } from 'redux/auth/auth-operations';
import {
  RegisterPageStyled,
  ContainerStyled,
  SectionStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  LinkStyled,
} from './RegisterPage.styled';
import { Button } from 'components/Button/Button';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterPageStyled>
      <SectionStyled>
        <ContainerStyled>
          <h1>Please register an account</h1>

          <FormStyled onSubmit={handleSubmit} autoComplete="off">
            <LabelStyled>
              Name
              <InputStyled
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </LabelStyled>

            <LabelStyled>
              Email
              <InputStyled
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
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
            <Button>Create account</Button>
          </FormStyled>
          <p>
            Already registered? <LinkStyled to={'/login'}> Log in!</LinkStyled>
          </p>
          <Toaster />
        </ContainerStyled>
      </SectionStyled>
    </RegisterPageStyled>
  );
}
