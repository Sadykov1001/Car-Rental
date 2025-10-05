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
import BookingCar from '../booking/page'
const ContactPage = () => {
	return (
		<>
			<h2 className='text-[40px] font-bold text-center'>Contact Us</h2>
			<span className='flex justify-center gap-2'>
				<p className='text-[#9B9B9B]'>Home / </p>
				<p>Contact Us</p>
			</span>
			<section className='xl:flex items-center gap-[50px]'>
				<div className='mx-[20px] xl:mx-[0px] xl:w-[30%] bg-[#5937E0] rounded-2xl h-[480px]'>
					<BookingCar />
				</div>
				<Image src={img3} alt='hichi' className='w-[900px] h-[480px]' />
			</section>
			<section className='xl:my-[50px] xl:flex mx-[20px] my-[20px] justify-between xl:mr-[50px] space-y-3'>
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
			<section className='xl:flex xl:items-center flex flex-col items-center xl:justify-center gap-20 my-20 '>
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
