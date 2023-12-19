import { FC } from 'react'
import { Metadata } from 'next'
import ProfileForm from './components/ProfileForm'

export const metadata: Metadata = {
	title: 'Profile | UNFV Internship manager',
	description: 'Profile Page'
}

const ProfilePage: FC = () => {
	return (
		<ProfileForm />
	)
}

export default ProfilePage
