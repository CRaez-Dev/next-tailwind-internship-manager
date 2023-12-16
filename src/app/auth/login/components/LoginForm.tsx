'use client'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSnapshot } from 'valtio'

import Input from '@/components/Input/Input'
import Alert, { AlertData, AlertType, INIT_ALERTDATA } from '@/components/Alert/Alerts'

import { Login, LoginStore } from '@/store/auth/login'
import { NonFunctionProperties } from '@/types/types'

const LoginForm = () => {
	const [alertData, setAlertData] = useState<AlertData>(INIT_ALERTDATA)

	const router = useRouter()
	const { email, password } = useSnapshot<Login>(LoginStore)

	const handleOnChangeValues = ({ target }: ChangeEvent<HTMLInputElement>) => LoginStore.updateForm(target.name as keyof NonFunctionProperties<Login>, target.value)

	const handleOnSimpleLogin = async () => {
		const response = await LoginStore.logIn()
		setAlertData({ ...response, show: true })
		router.push('/home')		
	}

	return (

		<form>
			{
				alertData.show &&
				<Alert handleDisplay={() => {
					setAlertData((e: AlertData) => ({ ...e, show: false }))
				}} delay={3000} type={alertData.success ? AlertType.SUCCESS : AlertType.DANGER} title={alertData.msg.title} text={alertData.msg.msg} />

			}
			<Input
				label='Email'
				name='email'
				value={email}
				type='email'
				placeholder="Enter your email"
				iconSvg={
					<svg
						className="fill-current"
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.5">
							<path
								d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
								fill=""
							/>
						</g>
					</svg>
				}
				onChangeValue={handleOnChangeValues}
			/>
			<Input
				label='Password'
				name='password'
				value={password}
				type='password'
				placeholder="Type your password"
				iconSvg={
					<svg
						className="fill-current"
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.5">
							<path
								d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
								fill=""
							/>
							<path
								d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
								fill=""
							/>
						</g>
					</svg>
				}
				onChangeValue={handleOnChangeValues}
			/>

			<div className="mb-5">
				<button
					type="button"
					className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
					onClick={handleOnSimpleLogin}
				>
					LogIn
				</button>
			</div>

			<button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="32px"
						height="32px">
						<linearGradient
							id="Yjxgqidz2JT1PABcYtFE5a"
							x1="31.645"
							x2="31.645"
							y1="6.839"
							y2="40.615"
							gradientUnits="userSpaceOnUse">
							<stop offset="0" stopColor="#e68e00" />
							<stop offset=".036" stopColor="#e38400" />
							<stop offset=".171" stopColor="#db6200" />
							<stop offset=".299" stopColor="#d44a00" />
							<stop offset=".417" stopColor="#d03b00" />
							<stop offset=".515" stopColor="#cf3600" />
							<stop offset=".878" stopColor="#d22900" />
							<stop offset="1" stopColor="#d42400" />
						</linearGradient>
						<path
							fill="url(#Yjxgqidz2JT1PABcYtFE5a)"
							d="M35.883,7.341C37.726,7.85,39,9.508,39,11.397v25.162c0,1.906-1.301,3.57-3.168,4.065	L24.29,43.863L28,36V11l-3.148-6.885L35.883,7.341z" /><linearGradient id="Yjxgqidz2JT1PABcYtFE5b" x1="13.922" x2="29.051" y1="34.951" y2="41.073" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f52537" /><stop offset=".293" stopColor="#f32536" /><stop offset=".465" stopColor="#ea2434" /><stop offset=".605" stopColor="#dc2231" /><stop offset=".729" stopColor="#c8202c" /><stop offset=".841" stopColor="#ae1e25" /><stop offset=".944" stopColor="#8f1a1d" /><stop offset="1" stopColor="#7a1818" /></linearGradient><path fill="url(#Yjxgqidz2JT1PABcYtFE5b)" d="M28,35v3.927c0,3.803-3.824,6.249-7.019,4.491l-6.936-4.445	c-0.802-0.466-1.236-1.462-0.964-2.457C13.334,35.59,14.202,35,15.115,35H28z" /><linearGradient id="Yjxgqidz2JT1PABcYtFE5c" x1="5.382" x2="25.874" y1="32.289" y2="1.78" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d96ab1" /><stop offset=".137" stopColor="#d9538b" /><stop offset=".495" stopColor="#d91a2a" /><stop offset=".575" stopColor="#d31a29" /><stop offset=".68" stopColor="#c21926" /><stop offset=".8" stopColor="#a71821" /><stop offset=".929" stopColor="#811619" /><stop offset="1" stopColor="#691515" /></linearGradient><path fill="url(#Yjxgqidz2JT1PABcYtFE5c)" d="M21.946,4.526l-11.924,6.786C8.772,12.024,8,13.351,8,14.789v18.429	c0,1.357,1.459,2.215,2.645,1.554l4.472-2.491C15.662,31.978,16,31.402,16,30.778V17.743c0-1.307,0.78-2.48,1.963-2.949L28,11.308	v-3.09C28,5.014,24.669,2.983,21.946,4.526z" />
					</svg>
				</span>
				Sign in with Office 365
			</button>

		</form>
	)
}

export default LoginForm