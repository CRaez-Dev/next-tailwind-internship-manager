'use client'
import { FC, useEffect } from 'react'
import Image from 'next/image'
import { useSnapshot } from 'valtio'
import { ProfileStore, UserProfile } from '@/store/profile'
import { formatCamelCaseToUpperCase } from '@/utils/utils'
import { RequestStatus } from '@/types/types'

const ProfileForm: FC = () => {
	const { profileData,profileDataStatus } = useSnapshot(ProfileStore)

	useEffect(() => {
		ProfileStore.getProfileData()
	}, [])

	return (
		<>
			{ profileDataStatus === RequestStatus.ready &&
				<div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark pt-4">

					<div className="px-6 pb-6 text-center flex flex-col lg:pb-8 xl:pb-11.5">

						<div className="h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
							<Image
								src={'/images/user/user-06.png'}
								width={160}
								height={160}
								alt="profile"
							/>

						</div>


						<div className='text-left mt-4'>
							<h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
								{`${profileData.name} ${profileData.lastName}`}
							</h3>

							{
								Object.keys(profileData).map((key, index) => {
									return (
										<div key={index} className="mt-4 flex flex-row gap-4">
											<h4 className="font-semibold text-black dark:text-white">
												{formatCamelCaseToUpperCase(key)}:
											</h4>
											<p>
												{profileData[key as keyof UserProfile]}
											</p>
										</div>
									)

								})
							}
						</div>
					</div>
				</div>
			}
		</>

	)
}

export default ProfileForm