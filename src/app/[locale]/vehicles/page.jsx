'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Fuel, SlidersHorizontal, Snowflake } from 'lucide-react'
import { useTranslations } from 'next-intl' // импорт хука для переводов
import mersLogo from '@/app/images/mersLogo.png'
import bmwLogo from '@/app/images/bmwLogo.png'
import audiLogo from '@/app/images/audiLogo.png'
import fordLogo from '@/app/images/fordLogo.png'
import jeepLogo from '@/app/images/jeepLogo.png'
import toyotaLogo from '@/app/images/toyotaLogo.png'
import Link from 'next/link'
import { ZustandRequests } from '@/zustand/zustand'

export default function VehiclesPage() {
	const t = useTranslations()
	const { getDataCars, dataCars } = ZustandRequests()
	const [filter, setFilter] = useState('all')

	useEffect(() => {
		getDataCars()
	}, [])

	// Фильтрация без учёта регистра
	const filteredData =
		filter === 'all'
			? dataCars
			: dataCars.filter(car => car.type.toLowerCase() === filter.toLowerCase())

	return (
		<>
			<section>
				<h1 className='xl:text-[40px] text-[25px] text-center font-bold'>
					{t('pageTitle')}
				</h1>

				{/* Фильтры */}
				<div className='xl:flex xl:flex-row flex flex-col mx-[15px] xl:mx-[0px] gap-[10px] justify-center my-5'>
					{['all', 'Sedan', 'Cabriolet', 'Pickup', 'SUV', 'Minivan'].map(
						type => (
							<button
								key={type}
								onClick={() => setFilter(type)}
								className={`px-[20px] py-[5px] rounded-[10px] ${
									filter === type ? 'bg-[#5937E0] text-white' : 'bg-gray-200'
								}`}
							>
								{type === 'all' ? t('filterAll') : t(type)}
							</button>
						)
					)}
				</div>

				{/* Карточки машин */}
				<div className='flex flex-wrap gap-10 justify-center'>
					{filteredData?.length > 0 ? (
						filteredData.map(e => (
							<div key={e.id} className='space-y-2.5 xl:w-[380px]'>
								<div className='relative w-[380px] h-[220px] overflow-hidden rounded-xl'>
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
										<h2>{t('carPricePerDay')}</h2>
									</div>
								</div>

								<div className='flex gap-5'>
									<div className='flex items-center gap-2'>
										<SlidersHorizontal />
										<p>{t('carGear')}</p>
									</div>
									<div className='flex items-center gap-2'>
										<Fuel />
										<p>{t('carFuel')}</p>
									</div>
									<div className='flex items-center gap-2'>
										<Snowflake />
										<p>{t('carAC')}</p>
									</div>
								</div>

								<Link href={`/vehicles/${e.id}`}>
									<button className='w-full bg-[#5937E0] text-white py-[5px] rounded-xl'>
										{t('viewDetailsButton')}
									</button>
								</Link>
							</div>
						))
					) : (
						<p className='text-center text-gray-500'>{t('noCarsText')}</p>
					)}
				</div>
			</section>

			{/* Логотипы */}
			<section className='xl:flex xl:flex-row flex flex-col items-center gap-[20px] xl:items-center xl:justify-center xl:gap-20 my-20'>
				<Image className='w-[70px]' src={toyotaLogo} alt='Toyota' />
				<Image className='w-[70px]' src={fordLogo} alt='Ford' />
				<Image className='w-[70px]' src={mersLogo} alt='Merc' />
				<Image className='w-[70px]' src={jeepLogo} alt='Jeep' />
				<Image className='w-[70px]' src={bmwLogo} alt='Bmw' />
				<Image className='w-[70px]' src={audiLogo} alt='Audi' />
			</section>
		</>
	)
}
