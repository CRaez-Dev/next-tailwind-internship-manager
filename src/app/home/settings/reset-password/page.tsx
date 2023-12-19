import React from 'react'
import ResetPasswordForm from './components/ResetPasswordForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Reset Password | UNFV Internship manager',
	description: 'Reset Password Page'
}

const ResetPasswordPage = () => {
	return (
		<ResetPasswordForm />
	)
}

export default ResetPasswordPage