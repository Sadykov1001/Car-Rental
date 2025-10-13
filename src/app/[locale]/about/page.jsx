import car from '@/app/images/car.png'
import img2 from '@/app/images/img2.jpg'
import rounded from '@/app/images/rounded.png'
// import video from '@/app/images/video.mp4'
import { Check, Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Questions from '../components/Questions'
import { useTranslations } from 'next-intl'

const AboutPage = () => {
	const t = useTranslations()

	return (
		<>
			<h1 className='text-[40px] text-center font-bold'>{t('aboutTitle')}</h1>
			<span className='flex justify-center gap-2'>
				<p className='text-[#9B9B9B]'>{t('breadcrumbHome')} / </p>
				<p>{t('breadcrumbCurrent')}</p>
			</span>

			<section className='xl:flex mx-[10px] xl:gap-[100px] items-start my-[50px]'>
				<h2 className='text-[35px] font-bold xl:w-[20%]'>
					{t('section1Title')}
				</h2>
				<div className='space-y-4 xl:w-[28%]'>
					<h2 className='font-bold text-[18px]'>{t('varietyBrandsTitle')}</h2>
					<h2>{t('varietyBrandsText')}</h2>
					<h2 className='font-bold text-[18px]'>{t('maximumFreedomTitle')}</h2>
					<h2>{t('maximumFreedomText')}</h2>
				</div>
				<div className='space-y-4 xl:w-[28%]'>
					<h2 className='font-bold text-[18px]'>{t('awesomeSupportTitle')}</h2>
					<h2>{t('awesomeSupportText')}</h2>
					<h2 className='font-bold text-[18px]'>{t('flexibilityTitle')}</h2>
					<h2>{t('flexibilityText')}</h2>
				</div>
			</section>

			<section className='xl:flex xl:justify-between xl:flex-row flex flex-col items-center mx-[50px] gap-[100px] my-[50px]'>
				<div>
					<h2 className='text-[70px] font-bold text-[#5937E0]'>
						20k+
					</h2>
					<p className='font-bold'>{t('statsCustomers')}</p>
				</div>
				<div>
					<h2 className='text-[70px] font-bold text-[#5937E0]'>
						540+
					</h2>
					<p className='font-bold'>{t('statsCars')}</p>
				</div>
				<div>
					<h2 className='text-[70px] font-bold text-[#5937E0]'>
						25+
					</h2>
					<p className='font-bold'>{t('statsYears')}</p>
				</div>
			</section>

			<section className='space-y-5 xl:flex items-center xl:mx-[70px] mx-[20px] gap-50 my-[50px]'>
				<div className='space-y-5 xl:w-[50%] mx-[10px] mt-[30px]'>
					<h2 className='xl:w-[80%] font-bold xl:text-[40px] text-[25px] text-center xl:text-start'>
						{t('memoriesTitle')}
					</h2>
					<h2 className='text-center xl:text-start text-gray-600'>
						{t('memoriesText')}
					</h2>
					<div className='xl:flex items-start space-y-5 space-x-5'>
						<div className='space-y-5'>
							<div className='flex items-start gap-[10px]'>
								<p className='p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>{t('check1')}</h3>
							</div>
							<div className='flex items-start gap-[10px]'>
								<p className='p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>{t('check2')}</h3>
							</div>
						</div>
						<div className='space-y-5'>
							<div className='flex items-start gap-[10px]'>
								<p className='p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>{t('check3')}</h3>
							</div>
							<div className='flex items-start gap-[10px]'>
								<p className='p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>{t('check4')}</h3>
							</div>
						</div>
					</div>
				</div>
				<Image
					src={img2}
					alt='img2'
					className='w-[400px] h-[400px] rounded-2xl'
				/>
			</section>

			<section>
				<h2 className='xl:text-[45px] text-[25px] text-center font-bold'>
					{t('reviewsTitle')}
				</h2>
				<div className='xl:flex xl:mx-[50px] xl:gap-[50px]'>
					<div className='bg-[#5937E0] text-white p-[20px] rounded-lg space-y-5 xl:w-[30%] my-[20px] mx-[10px] xl:mx-[0px]'>
						<p className='text-[50px] text-white'>
							<Quote />
						</p>
						<div className='flex flex-col items-center text-center space-y-3'>
							<h2 className='mx-[10px]'>{t('review1Text')}</h2>
							<Image src={rounded} alt='Photo' />
							<h3 className='font-bold'>{t('review1Name')}</h3>
						</div>
					</div>
					<div className='bg-[#5937E0] text-white p-[20px] rounded-lg space-y-5 xl:w-[30%] my-[20px] mx-[10px] xl:mx-[0px]'>
						<p className='text-[50px] text-white'>
							<Quote />
						</p>
						<div className='flex flex-col items-center text-center space-y-3'>
							<h2 className='mx-[10px]'>{t('review2Text')}</h2>
							<Image src={rounded} alt='Photo' />
							<h3 className='font-bold'>{t('review2Name')}</h3>
						</div>
					</div>
					<div className='bg-[#5937E0] text-white p-[20px] rounded-lg space-y-5 xl:w-[30%] my-[20px] mx-[10px] xl:mx-[0px]'>
						<p className='text-[50px] text-white'>
							<Quote />
						</p>
						<div className='flex flex-col items-center text-center space-y-3'>
							<h2 className='mx-[10px]'>{t('review3Text')}</h2>
							<Image src={rounded} alt='Photo' />
							<h3 className='font-bold'>{t('review3Name')}</h3>
						</div>
					</div>
				</div>
			</section>

			<section className='my-[50px]'>
				<h2 className='xl:text-[45px] text-[25px] text-center font-bold'>
					{t('topQuestions')}
				</h2>
				<Questions />
			</section>

			<section className='bg-[#5937E0] relative text-white p-[50px] rounded-lg xl:flex xl:justify-between items-center xl:mx-[70px] mx-[20px] gap-50 my-[50px]'>
				<div className='space-y-5 xl:w-[40%] mx-[10px] mt-[30px]'>
					<h2 className='text-[40px] font-bold'>{t('lookingForCarTitle')}</h2>
					<h2 className='text-[30px] font-semibold'>
						{t('lookingForCarPhone')}
					</h2>
					<p>{t('lookingForCarText')}</p>
					<Link href='/vehicles'>
						<button className='bg-[#FF9E0C] text-white p-[10px] rounded-lg mt-[20px]'>
							{t('viewAllCars')}
						</button>
					</Link>
				</div>
				<Image
					src={car}
					alt='car'
					className='xl:w-[500px] mx-auto absolute right-[100px] top-[100px]'
				/>
			</section>
		</>
	)
}

export default AboutPage
