import React, {Fragment} from 'react';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import Form, {
    FormHeader,
    FormFooter,
    Field,
} from '@atlaskit/form';
import {PasswordField} from "shared/components/Form";
import Space from "shared/components/Space";
import {AuthDispatch} from "features/auth/auth.slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "store/rootReducer";
import SectionMessage from "@atlaskit/section-message";
type IFormLogin = {
    email: string,
    password: string,
    remember: boolean
}
const LoginPage = () => {
    const {
       error,
       loading,
    } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    function onSubmit(data: IFormLogin) {
        dispatch(AuthDispatch(data));
    }
  return (
      <Form<IFormLogin>
          onSubmit={onSubmit}>
          {({ formProps }) => (
              <form {...formProps}>
                  <FormHeader>
                      <h3 className={'center'}>Login to your account</h3>
                  </FormHeader>
                  <Field
                      name="email"
                      isRequired
                      defaultValue=""
                  >
                      {({ fieldProps }) => (
                          <Fragment>
                              <TextField
                                  placeholder={'Enter Email'}
                                  autoFocus={true}
                                  autoComplete="off"
                                  {...fieldProps} />
                          </Fragment>
                      )}
                  </Field>
                  <Space height={'1rem'}/>
                  <Field
                      name="password"
                      defaultValue=""
                      isRequired
                  >
                      {({ fieldProps }) => <PasswordField
                          {...fieldProps}
                      />}
                  </Field>
                  <Space height={'1rem'}/>
                  {error && (
                      <SectionMessage
                          appearance={'error'}>
                          {error}
                      </SectionMessage>
                  )}
                  <FormFooter >
                      <Button shouldFitContainer type="submit" appearance="primary" isLoading={loading}>
                          Sign in
                      </Button>
                      <hr/>
                  </FormFooter>
              </form>
          )}
      </Form>
  )
};
export default LoginPage;
