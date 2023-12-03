import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoginRed } from "../../Redux/header-reducer";


const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
  .email('Неверно введена почта')
    .required('Поле не заполнено'),
  password: Yup.string().required('Поле не заполнено'),
});



// const DisplayingErrorMessagesSchema = Yup.object().shape({
//   userName: Yup.string().required('Обязательное поле'),
//   password: Yup.string().min(6, 'Задано слишком мало символов').required('Обязательное поле'),
// });


function LoginForm({LoginRed}: any) {
  return <Formik
    initialValues={{
      username: '',
      password: '',
      checkbox: false,
    }}
    validationSchema={DisplayingErrorMessagesSchema}
    onSubmit={values => {
      // same shape as initial values
      LoginRed(values)
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <div>
          <div>Email</div>
          <Field type='text' name="username" />
          {/* If this field has been touched, and it contains an error, display it
          */}
          {touched.username && errors.username && <div>{errors.username}</div>}
          
        </div>
        <div>
        <div>Password</div>
          <Field type='password' name="password"  />
          {/* If this field has been touched, and it contains an error, display
         it */}
          {touched.password && errors.password  && <div>{errors.password }</div>}
          
        </div>
        <div>
          <Field name="checkbox" type='checkbox' />
          {/* If this field has been touched, and it contains an error, display
         it */}
          {/* {touched.email && errors.email && <div>{errors.email}</div>} */}
          Remember me
        </div>
        <button type="submit">Submit</button>
      </Form>
    )
    }
  </Formik >
}



function Login({LoginRed, auth }: any) {
  if(auth){       
    return  <Navigate to={'/users'} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm LoginRed = {LoginRed}/>

    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    auth: state.header.isFetchin
  }
}

export default connect(mapStateToProps, {LoginRed})(Login) 