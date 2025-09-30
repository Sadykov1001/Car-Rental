import Image from 'next/image'
import React from 'react'
import img3 from '@/app/images/img3.png'
import { Calendar, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import mersLogo from '@/app/images/mersLogo.png'
import bmwLogo from '@/app/images/bmwLogo.png'
import audiLogo from '@/app/images/audiLogo.png'
import fordLogo from '@/app/images/fordLogo.png'
import jeepLogo from '@/app/images/jeepLogo.png'
import toyotaLogo from '@/app/images/toyotaLogo.png'
const ContactPage = () => {
	return (
		<>
			<h2 className='text-[40px] font-bold text-center'>Contact Us</h2>
			<span className='flex justify-center gap-2'>
				<p className='text-[#9B9B9B]'>Home / </p>
				<p>Contact Us</p>
			</span>
			<section className='flex items-center gap-[50px]'>
				<div className='bg-[#5937E0] xl:my-[50px] xl:w-[400px] rounded-[30px]'>
					<h2 className='text-[20px] text-white text-center  font-bold pt-[50px]'>
						Book your car
					</h2>
					<div className='flex flex-col gap-5 p-10'>
						<select className='bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'>
							<option value=''>Car type</option>
						</select>
						<select className='bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'>
							<option value=''>Place of rental</option>
							<option value=''>Place of rental</option>
						</select>
						<select className='bg-[#FAFAFA] px-[10px] py-[5px] rounded-[10px]'>
							<option value=''>Place of return</option>
						</select>
						<div className='flex items-center justify-between  rounded-2xl bg-gray-50 px-4 py-2 '>
							<input
								type='date'
								className='bg-transparent outline-none flex-1'
								placeholder='Rental date'
							/>
							<Calendar size={20} className='text-gray-600' />
						</div>
						<div className='flex items-center justify-between  rounded-2xl bg-gray-50 px-4 py-2 '>
							<input
								type='date'
								className='bg-transparent outline-none flex-1'
								placeholder='Rental date'
							/>
							<Calendar size={20} className='text-gray-600' />
						</div>
					</div>
					<div className='text-center w-[250px] m-auto'>
						<button className='bg-[#FF9E0C] w-full  text-white  px-[20px] py-[5px] rounded-[10px]'>
							Book now
						</button>
					</div>
					<br />
				</div>
				<Image src={img3} alt='hichi' className='w-[900px] h-[480px]' />
			</section>
			<section className='xl:my-[50px] flex justify-between xl:mr-[50px]'>
				<div className='flex items-center gap-2'>
					<button className=' bg-[#FF9E0C] p-[10px] text-white rounded-full'>
						<MapPin />
					</button>
					<div>
						<p>Address</p>
						<p className='font-semibold'>Oxford Ave. Cary, NC 27511</p>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<button className=' bg-[#FF9E0C] p-[10px] text-white rounded-full'>
						<Mail />
					</button>
					<div>
						<p>Email</p>
						<p className='font-semibold'>nwiger@yahoo.com</p>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<button className=' bg-[#FF9E0C] p-[10px] text-white rounded-full'>
						<Phone />
					</button>
					<div>
						<p>Phone</p>
						<p className='font-semibold'>+537 547-6401</p>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<button className=' bg-[#FF9E0C] p-[10px] text-white rounded-full'>
						<Clock3 />
					</button>
					<div>
						<p>Opening hours</p>
						<p className='font-semibold'>Sun-Mon: 10am - 10pm</p>
					</div>
				</div>
			</section>

			<section>
				<iframe
					src="
				https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61544.794426170505!2d33.926776282321356!3d35.139242872505235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc9de2ec388ab%3A0x90b5c9b9584b6f10!2sEastern%20Mediterranean%20University!5e0!3m2!1sru!2s!4v1759207892128!5m2!1sru!2s'
					width='100%'
					height='100%'
					style='border:0;'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				"
					className='w-[97%] h-[100vh] xl:mr-[100px]'
					allowFullScreen
				></iframe>
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

export default ContactPage
