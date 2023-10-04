/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, login} from '../core/_requests'
import {toAbsoluteUrl} from '../../../../pim/helpers'
import {useAuth} from '../core/Auth'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Username is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  username: 'johdoe@spygar.com',
  password: 'admin',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.username, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })
  return (
      <form className='form w-100' onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
        <div className="card-body">
          <div className="text-start mb-10">
            <h1 className="text-dark mb-3 fs-3x" data-kt-translate="sign-in-title">Sign In</h1>
            <div className="text-gray-400 fw-semibold fs-6" data-kt-translate="general-desc">Get unlimited access & earn money</div>
          </div>
          <div className="fv-row mb-8">
            <input type="text" placeholder="Email" name="email" autoComplete="off" data-kt-translate="sign-in-input-email" className="form-control form-control-solid" />
          </div>
          <div className="fv-row mb-7">
            <input type="text" placeholder="Password" name="password" autoComplete="off" data-kt-translate="sign-in-input-password" className="form-control form-control-solid" />
          </div>
          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
            <div></div>
            <a href="../../demo7/dist/authentication/layouts/fancy/reset-password.html" className="link-primary" data-kt-translate="sign-in-forgot-password">Forgot Password ?</a>
          </div>
          <div className="d-flex flex-stack">
            <button id="kt_sign_in_submit" className="btn btn-primary me-2 flex-shrink-0">
              <span className="indicator-label" data-kt-translate="sign-in-submit">Sign In</span>
              <span className="indicator-progress">
												<span data-kt-translate="general-progress">Please wait...</span>
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
											</span>
            </button>
            <div className="d-flex align-items-center">
              <div className="text-gray-400 fw-semibold fs-6 me-3 me-md-6" data-kt-translate="general-or">Or</div>
              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="p-4" />
              </a>
              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light me-3">
                <img alt="Logo" src="assets/media/svg/brand-logos/facebook-3.svg" className="p-4" />
              </a>
              <a href="#" className="symbol symbol-circle symbol-45px w-45px bg-light">
                <img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show p-4" />
                <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show p-4" />
              </a>
            </div>
          </div>
        </div>
      </form>
  )
}
