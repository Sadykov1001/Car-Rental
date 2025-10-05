'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Fuel, SlidersHorizontal, Snowflake } from 'lucide-react'
import mersLogo from '@/app/images/mersLogo.png'
import bmwLogo from '@/app/images/bmwLogo.png'
import audiLogo from '@/app/images/audiLogo.png'
import fordLogo from '@/app/images/fordLogo.png'
import jeepLogo from '@/app/images/jeepLogo.png'
import toyotaLogo from '@/app/images/toyotaLogo.png'
import Link from 'next/link'
import { ZustandRequests } from '@/zustand/zustand'

export default function VehiclesPage() {
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
					Select a vehicle group
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
								{type === 'all' ? 'All vehicles' : type}
							</button>
						)
					)}
				</div>

				{/* Карточки машин */}
				<div className='flex flex-wrap gap-10 justify-center'>
					{filteredData?.length > 0 ? (
						filteredData.map(e => (
							<div key={e.id} className='space-y-2.5 w-[350px]'>
								<div className='relative w-[350px] h-[220px] overflow-hidden rounded-xl'>
									<Image
										src={e.img}
										alt={e.name}
										fill
										className=''
										unoptimized
									/>
								</div>

								<div className='flex justify-between items-center'>
									<div>
										<h2 className='text-[20px] font-bold'>{e.name}</h2>
										<h2>{e.type}</h2>
									</div>
									<div>
										<h2 className='text-[#5937E0] font-bold text-[20px]'>
											{e.price}
										</h2>
										<h2>per day</h2>
									</div>
								</div>

								<div className='flex gap-5'>
									<div className='flex items-center gap-2'>
										<SlidersHorizontal />
										<p>Automat</p>
									</div>
									<div className='flex items-center gap-2'>
										<Fuel />
										<p>PB 95</p>
									</div>
									<div className='flex items-center gap-2'>
										<Snowflake />
										<p>Air Conditioner</p>
									</div>
								</div>

								<Link href={`/vehicles/${e.id}`}>
									<button className='w-full bg-[#5937E0] text-white py-[5px] rounded-xl'>
										View Details
									</button>
								</Link>
							</div>
						))
					) : (
						<p className='text-center text-gray-500'>Нет машин по фильтру</p>
					)}
				</div>
			</section>

			{/* Логотипы */}
			<section className='flex items-center justify-center gap-20 my-20'>
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
