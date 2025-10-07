'use client'

import { ZustandRequests } from '@/zustand/zustand'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import {
	Check,
	DoorClosed,
	Fuel,
	MapPinCheck,
	SlidersHorizontal,
	UsersIcon,
} from 'lucide-react'
import Image from 'next/image'

const ProductByIdPage = () => {
	const { productbyid } = useParams()
	const { getDataCarsById, dataCarsById } = ZustandRequests()

	useEffect(() => {
		getDataCarsById(productbyid)
	}, [productbyid])

	return (
		<>
			<div className='p-5 xl:flex '>
				<div className='w-[50%]'>
					<h1 className='font-bold text-[30px]'>{dataCarsById.name}</h1>
					<div className='flex gap-[5px] items-center'>
						<h2 className='text-[#5937E0] font-bold text-[25px]'>
							{dataCarsById.price}$
						</h2>
						<p className='text-gray-600'>/day</p>
					</div>
					<div className='relative xl:w-[600px] w-[350px] xl:h-[320px] h-[250px] overflow-hidden rounded-xl'>
						<Image src={dataCarsById.img} fill className='' unoptimized />
					</div>
					<br />
				</div>
				<div className='space-y-15'>
					<h2 className='font-bold text-[20px]'>Technical Specification</h2>
					<div className='flex xl:justify-between gap-[60px] xl:gap-[0px] xl:w-[500px] '>
						<div className='space-y-1.5'>
							<SlidersHorizontal />
							<h3 className='font-bold'>Gear Box</h3>
							<p className='text-gray-600'>Automat</p>
						</div>
						<div className='space-y-1.5'>
							<Fuel />
							<h3 className='font-bold'>Petrol</h3>
							<p className='text-gray-600'>PB 95</p>
						</div>
						<div className='space-y-1.5'>
							<DoorClosed />
							<h3 className='font-bold'>Doors</h3>
							<p className='text-gray-600'>2</p>
						</div>
					</div>
					<div className='flex xl:justify-between gap-[60px] xl:gap-[0px] xl:w-[500px] '>
						<div className='space-y-1.5'>
							<SlidersHorizontal />
							<h3 className='font-bold'>Air Conditioner</h3>
							<p className='text-gray-600'>Yes</p>
						</div>
						<div className='space-y-1.5'>
							<UsersIcon />
							<h3 className='font-bold'>Seats</h3>
							<p className='text-gray-600'>4</p>
						</div>
						<div className='space-y-1.5'>
							<MapPinCheck />
							<h3 className='font-bold'>Distance</h3>
							<p className='text-gray-600'>500</p>
						</div>
					</div>

					<div className='space-y-5'>
						<h2 className='font-bold text-[22px]'>Car Equipment</h2>
						<div className='flex  gap-[40px]'>
							<div className='space-y-5'>
								<div className='flex gap-[20px] items-center'>
									<button className='bg-[#5937E0] rounded-full p-[5px] text-white'>
										<Check />
									</button>
									<p className='font-semibold text-gray-500 '>ABS</p>
								</div>
								<div className='flex gap-[20px] items-center'>
									<button className='bg-[#5937E0] rounded-full p-[5px] text-white'>
										<Check />
									</button>
									<p className='font-semibold text-gray-500 '>Air Bags</p>
								</div>
								<div className='flex gap-[20px] items-center'>
									<button className='bg-[#5937E0] rounded-full p-[5px] text-white'>
										<Check />
									</button>
									<p className='font-semibold text-gray-500 '>Cruise Control</p>
								</div>
							</div>
							<div className='space-y-5'>
								<div className='flex gap-[20px] items-center'>
									<button className='bg-[#5937E0] rounded-full p-[5px] text-white'>
										<Check />
									</button>
									<p className='font-semibold text-gray-500 '>Air filter</p>
								</div>
								<div className='flex gap-[20px] items-center'>
									<button className='bg-[#5937E0] rounded-full p-[5px] text-white'>
										<Check />
									</button>
									<p className='font-semibold text-gray-500 '>Turbocharger</p>
								</div>
								<div className='flex gap-[20px] items-center'>
									<button className='bg-[#5937E0] rounded-full p-[5px] text-white'>
										<Check />
									</button>
									<p className='font-semibold text-gray-500 '>GPS navigation</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductByIdPage