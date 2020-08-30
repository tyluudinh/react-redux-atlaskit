import React, {Fragment} from 'react';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import Form, {
    FormHeader,
    FormFooter,
    Field,
    ErrorMessage,
} from '@atlaskit/form';
import './Login.scss';
import {sleep} from "shared/utils/sleep";
import {PasswordField} from "shared/components/Form";
import Space from "shared/components/Space";
type IFormLogin = {
    username: string,
    password: string,
    remember: boolean
}
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img
                    height={80}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiwDK-ICxwdNAWjjWiT5hU4efShwJQIFS45Q&usqp=CAU"
                    alt="Logo"/>
            </div>
        </header>
    );
};
const LoginPage = (props: {}) => {
    function onSubmit(data: IFormLogin) {
        return sleep(2000)
            .then(() =>  {
                return {
                    username: 'USER_NAME'
                } as IFormLogin;
            },
        );
    }
  return (
      <div className="login__page" {...props}>
          <Header/>
          <section role="main">
              <Form<IFormLogin>
                  onSubmit={onSubmit}>
                  {({ formProps, submitting }) => (
                      <form {...formProps}>
                          <FormHeader>
                              <h3 className={'center'}>Login to your account</h3>
                          </FormHeader>
                          <Field
                              name="username"
                              isRequired
                              defaultValue=""
                          >
                              {({ fieldProps, error }) => (
                                  <Fragment>
                                      <TextField
                                          placeholder={'Enter Email'}
                                          autoFocus={true}
                                          autoComplete="off"
                                          {...fieldProps} />
                                      {error && (
                                          <ErrorMessage>
                                              This user name is already in use, try another one.
                                          </ErrorMessage>
                                      )}
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
                          <FormFooter >
                              <Button shouldFitContainer type="submit" appearance="primary" isLoading={submitting}>
                                  Sign up
                              </Button>
                          </FormFooter>
                      </form>
                  )}
              </Form>
          </section>
      </div>
  )
};
export default LoginPage;
