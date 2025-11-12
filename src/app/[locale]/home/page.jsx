'use client'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import carbg from '@/app/images/carBg.png'
import drift from '@/app/images/drift.png'
import img1 from '@/app/images/img1.webp'
import {
	Calendar,
	Car,
	Fuel,
	MapPin,
	SlidersHorizontal,
	Snowflake,
	Wallet,
} from 'lucide-react'
import { ZustandRequests } from '@/zustand/zustand'
import { useEffect } from 'react'
import BookingCar from '../booking/page'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations()
	const { getDataCars, dataCars } = ZustandRequests()

	useEffect(() => {
		getDataCars()
	}, [])

	return (
		<>
			<section className='bg-[#5937E0] relative z-[0] rounded-[30px] xl:flex xl:flex-row flex flex-col '>
				<Image
					src={carbg}
					alt='Bmw'
					className='absolute z-[-1] xl:left-100 top-40'
				/>
				<Image src={drift} alt='Drift' className='absolute z-[-2] ' />
				<div className='text-center xl:text-start xl:w-[50%] xl:pl-[100px] pl-[10px] xl:mt-[50px] space-y-5 py-[100px] relative z-[10]'>
					<h2 className='text-white text-[40px] font-bold xl:w-[70%] font'>
						{t('heroTitle')}
					</h2>
					<p className='text-white xl:w-[70%] '>{t('heroSubtitle')}</p>
					<br />
					<br />
					<Link href={`/vehicles`}>
						<button className='bg-[#FF9E0C] text-white px-[20px] py-[5px] rounded-[10px]'>
							{t('heroButton')}
						</button>
					</Link>
				</div>
				<div className='bg-white  xl:my-[50px] xl:w-[400px] rounded-[30px] xl:ml-[200px]'>
					<BookingCar />
					<br />
				</div>
			</section>

			<section className='xl:mx-[70px] xl:flex xl:justify-between  text-center mt-[100px] gap-50 mx-[20px]'>
				<div className='flex flex-col items-center space-y-2'>
					<MapPin size={50} />
					<h3 className='font-bold text-[20px]'>{t('availabilityTitle')}</h3>
					<p>{t('availabilityText')}</p>
				</div>
				<div className='flex flex-col items-center space-y-2'>
					<Car size={50} />
					<h3 className='font-bold text-[20px]'>{t('comfortTitle')}</h3>
					<p>{t('comfortText')}</p>
				</div>
				<div className='flex flex-col items-center space-y-2'>
					<Wallet size={50} />
					<h3 className='font-bold text-[20px]'>{t('savingsTitle')}</h3>
					<p>{t('savingsText')}</p>
				</div>
			</section>

			<br />
			<br />

			<section>
				<div className='flex justify-between xl:mx-[0px] mx-[10px]'>
					<h2 className='xl:text-[30px] text-[20px] font-bold' >
						{t('chooseCarSectionTitle')}
					</h2>
					<Link href={'/vehicles'}>
						<button className='text-[#5937E0]'>{t('chooseCarButton')}</button>
					</Link>
				</div>
				<br />
				<br />
				<div className='flex flex-wrap gap-20 justify-center'>
					{dataCars?.slice(0, 3)?.map((e, i) => (
						<div key={i} className='space-y-2.5'>
							<div className='relative w-[370px] h-[220px] overflow-hidden rounded-xl'>
								<Image src={e.img} alt={e.name} fill unoptimized />
							</div>

							<div className='flex justify-between items-center'>
								<div>
									<h2 className='text-[20px] font-bold'>{e.name}</h2>
									<h2>{e.type}</h2>
								</div>
								<div>
									<h2 className='text-[#5937E0] font-bold text-[20px]'>
										{e.price}$
									</h2>
									<h2>{t('carCardPerDay')}</h2>
								</div>
							</div>

							<div className='flex gap-5'>
								<div className='flex items-center gap-2'>
									<SlidersHorizontal />
									<p>{t('carCardAutomat')}</p>
								</div>
								<div className='flex items-center gap-2'>
									<Fuel />
									<p>{t('carCardFuel')}</p>
								</div>
								<div className='flex items-center gap-2'>
									<Snowflake />
									<p>{t('carCardAirConditioner')}</p>
								</div>
							</div>

							<Link href={`/vehicles/${e.id}`}>
								<button className='w-full bg-[#5937E0] text-white py-[5px] rounded-xl '>
									{t('carCardViewDetails')}
								</button>
							</Link>
						</div>
					))}
				</div>
			</section>

			<section className='xl:flex xl:w-[80%] xl:gap-30 xl:items-center m-auto my-[50px]'>
				<div className='xl:mx-[0px] mx-[10px]'>
					<Image
						src={img1}
						className='rounded-2xl w-[400px] h-[500px]'
						alt='img'
					/>
				</div>
				<div className='space-y-2.5 xl:w-[45%] mx-[10px] mt-[30px]'>
					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[13px] text-white bg-[#5937E0] items-center rounded-full'>
							{t('step1Number')}
						</p>
						<h2 className='font-semibold'>{t('step1Title')}</h2>
					</div>
					<p className='text-gray-600'>{t('step1Text')}</p>

					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[13px] text-white bg-[#5937E0] items-center rounded-full'>
							{t('step2Number')}
						</p>
						<h2 className='font-semibold'>{t('step2Title')}</h2>
					</div>
					<p className='text-gray-600'>{t('step2Text')}</p>

					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[13px] text-white bg-[#5937E0] items-center rounded-full'>
							{t('step3Number')}
						</p>
						<h2 className='font-semibold'>{t('step3Title')}</h2>
					</div>
					<p className='text-gray-600'>{t('step3Text')}</p>

					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[13px] text-white bg-[#5937E0] items-center rounded-full'>
							{t('step4Number')}
						</p>
						<h2 className='font-semibold'>{t('step4Title')}</h2>
					</div>
					<p className='text-gray-600'>{t('step4Text')}</p>
				</div>
			</section>
		</>
	)
}
