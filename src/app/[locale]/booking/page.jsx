'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ZustandRequests } from '@/zustand/zustand'

const BookingCar = () => {
	const { getDataCars, dataCars } = ZustandRequests()
	const [selectedType, setSelectedType] = useState('')
	const [loading, setLoading] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		getDataCars()
	}, [])

	// Определяем текущий язык (locale) из URL
	const locale = pathname.split('/')[1] || 'en'

	const handleBooking = async e => {
		e.preventDefault()
		setLoading(true)

		const formData = new FormData(e.target)

		try {
			const res = await fetch('/api/telegram', {
				method: 'POST',
				body: formData,
			})

			if (res.redirected) {
				window.location.href = res.url // редирект на thank-you
			} else {
				const text = await res.text()
				alert('Ждите звонка сотрудников ')
			}
		} catch (err) {
			console.error('Ошибка при отправке бронирования:', err)
			alert('Ошибка при отправке бронирования')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			<h2 className='text-[20px] text-center font-bold pt-[50px]'>
				Book your car
			</h2>

			<div className='flex flex-col gap-5 p-10'>
				<form onSubmit={handleBooking} className='space-y-2.5'>
					{/* Отправляем язык вместе с формой */}
					<input type='hidden' name='user_locale' value={locale} />

					<select
						className='w-full bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'
						value={selectedType}
						onChange={e => setSelectedType(e.target.value)}
						name='user_car'
						required
					>
						<option value='' className='hidden'>
							Cars type
						</option>
						{dataCars.map(e => (
							<option key={e.id} value={e.name}>
								{e.name}
							</option>
						))}
					</select>

					<select
						className='w-full bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'
						name='user_place_rental'
						required
					>
						<option value='' className='hidden'>
							Place of rental
						</option>
						<option value='Dushanbe'>Dushanbe</option>
						<option value='Khujand'>Khujand</option>
						<option value='Kulob'>Kulob</option>
						<option value='Pomir'>Pomir</option>
						<option value='Vahdat'>Vahdat</option>
					</select>

				

					<input
						type='date'
						className='w-full bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'
						name='user_start_date'
						required
					/>

					
					<input
						type='number'
						className='w-full bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'
						name='user_phone_number'
						required
						placeholder='Phone Number'
					/>
					<input
						type='email'
						className='w-full bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'
						name='user_email'
						required
						placeholder='Enter your Email'
					/>

					<button
						type='submit'
						disabled={loading}
						className='bg-[#FF9E0C] w-full text-white px-[20px] py-[5px] rounded-[10px]'
					>
						{loading ? 'Booking...' : 'Book now'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default BookingCar
