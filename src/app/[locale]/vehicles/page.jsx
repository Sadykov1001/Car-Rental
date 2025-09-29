'use client'

import { useState } from 'react'
import Image from 'next/image'
import mercedess from '@/app/images/mercedes.png'
import { Fuel, SlidersHorizontal, Snowflake } from 'lucide-react'
import mersLogo from '@/app/images/mersLogo.png'
import bmwLogo from '@/app/images/bmwLogo.png'
import audiLogo from '@/app/images/audiLogo.png'
import fordLogo from '@/app/images/fordLogo.png'
import jeepLogo from '@/app/images/jeepLogo.png'
import toyotaLogo from '@/app/images/toyotaLogo.png'
export default function VehiclesPage() {
	const [filter, setFilter] = useState('all')

	const data = [
		{
			id: 1,
			name: 'Mercedes',
			price: '$100',
			year: 2022,
			img: mercedess,
			type: 'Sedan',
		},
		{
			id: 2,
			name: 'BMW m5 f10',
			price: '$95',
			year: 2023,
			img: mercedess,
			type: 'Sedan',
		},
		{
			id: 3,
			name: 'Cadillac',
			price: '$200',
			year: 2025,
			img: mercedess,
			type: 'SUV',
		},
		{
			id: 4,
			name: 'Lexus',
			price: '$70',
			year: 2020,
			img: mercedess,
			type: 'Pickup',
		},
		{
			id: 5,
			name: 'BMW m8',
			price: '$250',
			year: 2024,
			img: mercedess,
			type: 'Cabriolet',
		},
		{
			id: 6,
			name: 'Supra',
			price: '$60',
			year: 2017,
			img: mercedess,
			type: 'Minivan',
		},
	]

	const filteredData =
		filter === 'all' ? data : data.filter(car => car.type === filter)

	return (
		<>
			<section>
				<h1 className='xl:text-[40px] text-[25px] text-center font-bold'>
					Select a vehicle group
				</h1>

				<div className='xl:flex xl:flex-row flex flex-col mx-[15px] xl:mx-[0px] gap-[10px] justify-center my-5'>
					<button
						onClick={() => setFilter('all')}
						className={`px-[20px] py-[5px] rounded-[10px]  ${
							filter === 'all' ? 'bg-[#5937E0] text-white' : 'bg-gray-200'
						}`}
					>
						All vehicles
					</button>
					<button
						onClick={() => setFilter('Sedan')}
						className={`px-[20px] py-[5px] rounded-[10px]  ${
							filter === 'Sedan' ? 'bg-[#5937E0] text-white' : 'bg-gray-200'
						}`}
					>
						Sedan
					</button>
					<button
						onClick={() => setFilter('Cabriolet')}
						className={`px-[20px] py-[5px] rounded-[10px]  ${
							filter === 'Cabriolet' ? 'bg-[#5937E0] text-white' : 'bg-gray-200'
						}`}
					>
						Cabriolet
					</button>
					<button
						onClick={() => setFilter('Pickup')}
						className={`px-[20px] py-[5px] rounded-[10px]  ${
							filter === 'Pickup' ? 'bg-[#5937E0] text-white' : 'bg-gray-200'
						}`}
					>
						Pickup
					</button>
					<button
						onClick={() => setFilter('SUV')}
						className={`px-[20px] py-[5px] rounded-[10px]  ${
							filter === 'SUV' ? 'bg-[#5937E0] text-white' : 'bg-gray-200'
						}`}
					>
						SUV
					</button>
					<button
						onClick={() => setFilter('Minivan')}
						className={`px-[20px] py-[5px] rounded-[10px]  ${
							filter === 'Minivan' ? 'bg-[#5937E0] text-white' : 'bg-gray-200'
						}`}
					>
						Minivan
					</button>
				</div>

				<div className='flex flex-wrap gap-10 justify-center'>
					{filteredData.map(e => (
						<div key={e.id} className='space-y-2.5 w-[350px]'>
							<Image src={e.img} alt='Car' className='w-[300px] rounded-xl' />
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
							<button className='w-full bg-[#5937E0] text-white py-[5px] rounded-xl '>
								View Details
							</button>
						</div>
					))}
				</div>
			</section>
			<section className='flex items-center justify-center gap-20 my-20 '>
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
