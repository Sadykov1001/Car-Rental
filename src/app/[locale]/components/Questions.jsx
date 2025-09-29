'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, X } from 'lucide-react'

const faqData = [
	{
		id: 1,
		q: 'How does it work?',
		a: 'You choose a car, book it online or by phone, make the payment, and pick it up at the rental office or delivery location.',
	},
	{
		id: 2,
		q: 'What is the minimum rental period?',
		a: 'The minimum rental period for cars is two days.',
	},
	{
		id: 3,
		q: 'What is the minimum age to rent a car?',
		a: 'You can rent a car starting from the age of 21. Some models may require a higher age.',
	},
	{
		id: 4,
		q: 'What deposit is required when renting a car?',
		a: 'The deposit depends on the car class and insurance; usually from $200 to $1000, or a hold on your credit card.',
	},
]

export default function FAQAccordion() {
	const [openId, setOpenId] = useState(null)
	const [heights, setHeights] = useState({})

	const refs = useRef({})

	useEffect(() => {
		const newHeights = {}
		faqData.forEach(item => {
			if (refs.current[item.id]) {
				newHeights[item.id] = refs.current[item.id].scrollHeight
			}
		})
		setHeights(newHeights)
	}, [])

	const toggle = id => {
		setOpenId(prev => (prev === id ? null : id))
	}

	return (
		<section className='max-w-[900px] mx-auto bg-white rounded-md shadow-sm'>
			{faqData.map(item => {
				const isOpen = openId === item.id
				return (
					<div key={item.id} className='border-b last:border-b-0'>
						<div className='flex items-center justify-between px-6 py-8'>
							<button
								onClick={() => toggle(item.id)}
								className='text-left flex-1'
							>
								<h3 className='text-[22px] md:text-[26px] font-bold leading-tight'>
									{item.q}
								</h3>
							</button>

							<button
								onClick={() => toggle(item.id)}
								className={`ml-6 flex items-center justify-center w-10 h-10 rounded-full transition-all ${
									isOpen
										? 'bg-red-500 text-white'
										: 'bg-transparent text-gray-700'
								}`}
							>
								{isOpen ? <X size={18} /> : <Plus size={22} />}
							</button>
						</div>

						<div
							ref={el => (refs.current[item.id] = el)}
							style={{
								maxHeight: isOpen ? `${heights[item.id]}px` : '0px',
							}}
							className={`px-6 overflow-hidden transition-[max-height] duration-500 ease-in-out`}
						>
							<p className='pb-8 text-base leading-relaxed text-gray-700'>
								{item.a}
							</p>
						</div>
					</div>
				)
			})}
		</section>
	)
}
