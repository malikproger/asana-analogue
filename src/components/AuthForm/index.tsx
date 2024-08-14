import { useMemo, useState } from 'react';
import { useLoginMutation, useRegistrationMutation } from '../../api/authService';
import { AuthType } from '../../types';
import {
  AuthFormStyled,
  AuthLabel,
  AuthLink,
  ButtonFormStyled,
  Heading,
  InputFormStyled,
} from './styled';
import { FormFields } from './types';

export const AuthForm = () => {
  const [authType, setAuthType] = useState<AuthType>('sign-up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState<FormFields[]>([]);
  const [login] = useLoginMutation();
  const [register] = useRegistrationMutation();

  const switchAuthType = () => {
    setAuthType((prevAuthType) => {
      if (prevAuthType === 'sign-in') {
        return 'sign-up';
      }

      return 'sign-in';
    });
  };

  const isInvalid = useMemo(() => {
    if (authType === 'sign-in') {
      return !email.trim() || !password.trim();
    }
    return (
      !email.trim() ||
      !password.trim() ||
      password.trim().length < 6 ||
      password !== repeatedPassword
    );
  }, [authType, email, password, repeatedPassword]);

  const validate = () => {
    if (!email.trim()) {
      setInvalidFields((prev) => [...prev, 'email']);
    }
    if (!password.trim() || password.trim().length < 6) {
      setInvalidFields((prev) => [...prev, 'password']);
    }
    if (authType === 'sign-up' && (!repeatedPassword.trim() || password !== repeatedPassword)) {
      setInvalidFields((prev) => [...prev, 'repeatedPassword']);
    }
  };

  const handleSubmit = async () => {
    try {
      if (isInvalid) {
        return validate();
      }

      setIsSubmitting(true);

      const authFunc = authType === 'sign-in' ? login : register;
      await authFunc({ email, password });
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeInvalidField = (field: FormFields) => {
    setInvalidFields((prev) => prev.filter((it) => it !== field));
  };

  return (
    <AuthFormStyled>
      <Heading>{authType === 'sign-up' ? 'Создать аккаунт' : 'Войти в аккаунт'}</Heading>
      <InputFormStyled
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          removeInvalidField('email');
        }}
        error={{ visible: invalidFields.includes('email') }}
      />
      <InputFormStyled
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          removeInvalidField('password');
        }}
        placeholder="Пароль"
        type="password"
        error={{
          visible: invalidFields.includes('password'),
          text: password.length < 6 ? 'Минимум 6 символов' : 'Обязательное поле',
        }}
      />
      {authType === 'sign-up' && (
        <InputFormStyled
          value={repeatedPassword}
          onChange={(e) => {
            setRepeatedPassword(e.target.value);
            removeInvalidField('repeatedPassword');
          }}
          placeholder="Повторить пароль"
          type="password"
          error={{
            visible: invalidFields.includes('repeatedPassword'),
            text: repeatedPassword ? 'Пароли не совпадают' : 'Обязательное поле',
          }}
        />
      )}
      <ButtonFormStyled onClick={handleSubmit} loading={isSubmitting}>
        {authType === 'sign-up' ? 'Зарегистрироваться' : 'Войти'}
      </ButtonFormStyled>
      <AuthLabel>
        {authType === 'sign-up' ? (
          <>
            Уже зарегистрированы? <AuthLink onClick={switchAuthType}>Войдите</AuthLink>
          </>
        ) : (
          <>
            Нету аккаунта? <AuthLink onClick={switchAuthType}>Зарегистрируйтесь</AuthLink>
          </>
        )}
      </AuthLabel>
    </AuthFormStyled>
  );
};
