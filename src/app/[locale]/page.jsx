import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import carbg from '@/app/images/carBg.png'
import drift from '@/app/images/drift.png'
import img1 from '@/app/images/img1.png'
import mercedess from '@/app/images/mercedes.png'
import appleDownload from '@/app/images/appleDownload.png'
import playMarketDownload from '@/app/images/playMarketDownload.png'
import phone from '@/app/images/image.png'
import {
	Calendar,
	Car,
	Fuel,
	MapPin,
	SlidersHorizontal,
	Snowflake,
	Wallet,
} from 'lucide-react'
export default async function Home() {
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
	]
	return (
		<>
			<section className='bg-[#5937E0] relative z-[-10] rounded-[30px] xl:flex xl:flex-row flex flex-col '>
				<Image
					src={carbg}
					alt='Bmw'
					className='absolute z-[-1] xl:left-100 top-40'
				/>
				<Image src={drift} alt='Drift' className='absolute z-[-2] ' />
				<div className='text-center xl:text-start xl:w-[50%] xl:pl-[100px] pl-[10px] xl:mt-[50px] space-y-5 py-[100px] relative z-[1]'>
					<h2 className='text-white text-[40px] font-bold xl:w-[70%] font'>
						Experience the road like never before
					</h2>
					<p className='text-white xl:w-[70%] '>
						Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
						tristique et gravida. Quis nunc interdum gravida ullamcorper
					</p>
					<button className='bg-[#FF9E0C] text-white px-[20px] py-[5px] rounded-[10px]'>
						View all cars
					</button>
				</div>
				<div className='bg-white  xl:my-[50px] xl:w-[400px] rounded-[30px] xl:ml-[200px]'>
					<h2 className='text-[20px] text-center  font-bold pt-[50px]'>
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
			</section>
			<section className='xl:mx-[70px] xl:flex xl:justify-between  text-center mt-[100px] gap-50 mx-[20px]'>
				<div className='flex flex-col items-center space-y-2'>
					<MapPin size={50} />
					<h3 className='font-bold text-[20px]'>Availability</h3>
					<p>
						Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
					</p>
				</div>
				<div className='flex flex-col items-center space-y-2'>
					<Car size={50} />
					<h3 className='font-bold text-[20px]'>Comfort</h3>
					<p>
						Gravida auctor fermentum morbi vulputate ac egestas orcietium
						convallis
					</p>
				</div>
				<div className='flex flex-col items-center space-y-2'>
					<Wallet size={50} />
					<h3 className='font-bold text-[20px]'>Saving's</h3>
					<p>
						Pretium convallis id diam sed commodo vestibulum lobortis volutpat
					</p>
				</div>
			</section>
			<section className='xl:flex xl:w-[80%] xl:gap-30 xl:items-center m-auto my-[50px] '>
				<Image src={img1} className='w-[400px] h-[500px]' alt='img' />
				<div className='space-y-2.5 xl:w-[45%] mx-[10px] mt-[30px] '>
					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[15px] text-white bg-[#5937E0] items-center rounded-full'>
							1
						</p>
						<h2 className='font-semibold'>Erat at semper </h2>
					</div>
					<p className='text-gray-600'>
						Non amet fermentum est in enim at sit ullamcorper. Sit elementum
						rhoncus nullam feugiat. Risus sem fermentum
					</p>
					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[15px] text-white bg-[#5937E0] items-center rounded-full'>
							2
						</p>
						<h2 className='font-semibold'>Urna nec vivamus risus duis arcu </h2>
					</div>
					<p className='text-gray-600'>
						Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
						tristique et gravida. Quis nunc interdum gravida ullamcorper
					</p>
					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[15px] text-white bg-[#5937E0] items-center rounded-full'>
							3
						</p>
						<h2 className='font-semibold'>Lobortis euismod imperdiet tempus</h2>
					</div>
					<p className='text-gray-600'>
						Viverra scelerisque mauris et nullam molestie et. Augue adipiscing
						praesent nisl cras nunc luctus viverra nisi
					</p>
					<div className='flex items-center gap-[10px]'>
						<p className='py-[5px] px-[15px] text-white bg-[#5937E0] items-center rounded-full'>
							4
						</p>
						<h2 className='font-semibold'>
							Cras nulla aliquet nam eleifend amet et
						</h2>
					</div>
					<p className='text-gray-600'>
						Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
						tristique et gravida. Quis nunc interdum gravida ullamcorper sed
						integer. Quisque eleifend tincidunt vulputate libero
					</p>
				</div>
			</section>

			<section>
				<div className='flex justify-between'>
					<h2 className='text-[30px] font-bold'>
						Choose the car that suits you
					</h2>
					<button>Veiw all</button>
				</div>
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
			<section className='flex items-center '>
				<div className='space-y-5 xl:w-[50%] mx-[10px] mt-[30px] '>
					<h2 className='font-bold text-[40px]'>Download mobile app</h2>
					<p className='w-[600px] text-gray-600 '>
						Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
						turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
						aliquet cras hendrerit enim condimentum. Condimentum interdum risus
						bibendum urna .
					</p>
					<div className='flex gap-5'>
						<Image src={appleDownload} alt='App Store' width={180} height={60} />
						<Image
							src={playMarketDownload}
							alt='Google Play'
							width={180}
							height={60}
						/>
					</div>
				</div>
				<Image src={phone} alt='Phone' className='w-[400px]' />
			</section>
		</>
	)
}
