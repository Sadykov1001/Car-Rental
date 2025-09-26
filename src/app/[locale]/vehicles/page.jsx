import Image from 'next/image'
import mercedess from '@/app/images/mercedes.png'
import { getTranslations } from 'next-intl/server'
import { Fuel, SlidersHorizontal, Snowflake } from 'lucide-react'

export default async function VehiclesPage() {
	const t = await getTranslations()

	const data = [
		{
			id: 1,
			name: 'Mercedes',
			price: '$100',
			year: 2022,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 2,
			name: 'Bmw m5 f10',
			price: '$95',
			year: 2023,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 3,
			name: 'Cadillac',
			price: '$200',
			year: 2025,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 4,
			name: 'Lexus',
			price: '$70',
			year: 2020,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 5,
			name: 'Bmw m8',
			price: '$250',
			year: 2024,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 6,
			name: 'Supra',
			price: '$60',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 7,
			name: 'Tayota',
			price: '$70',
			year: '2018',
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
		{
			id: 8,
			name: 'Camry',
			price: '$100',
			year: 2017,
			img: mercedess,
			type: `${t('Sedan')}`,
		},
	]
	return (
		<>
			<section>
				<h1 className='text-[40px] text-center font-bold'>Select a vehicle group</h1>
				<div className='flex flex-wrap gap-30 justify-center'>
					{data.map((e, i) => {
						return (
							<div key={i} className='space-y-2.5'>
								<Image src={e.img} alt='Car' className='w-[300px] ' />
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
						)
					})}
				</div>
			</section>
		</>
	)
}

