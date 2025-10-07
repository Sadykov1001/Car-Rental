import car from '@/app/images/car.png'
import img2 from '@/app/images/img2.png'
import rounded from '@/app/images/rounded.png'
import video from '@/app/images/video.png'
import { Check, Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Questions from '../components/Questions'
const AboutPage = () => {
	return (
		<>
			<h1 className='text-[40px] text-center font-bold'>About Us</h1>
			<span className='flex justify-center gap-2'>
				<p className='text-[#9B9B9B]'>Home / </p>
				<p>About Us</p>
			</span>
			<section className='xl:flex mx-[10px] xl:gap-[100px] items-start my-[50px]'>
				<h2 className='text-[35px] font-bold xl:w-[20%]'>
					Where every drive feels extraordinary
				</h2>
				<div className='space-y-4 xl:w-[28%]'>
					<h2 className='font-bold text-[18px]'>Variety Brands</h2>
					<h2>
						Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit
						quam natoque ornare cursus viverra odio
					</h2>
					<h2 className='font-bold text-[18px]'>Maximum Freedom</h2>
					<h2>
						Diam quam gravida ultricies velit duis consequat integer. Est
						aliquam posuere vel rhoncus massa volutpat in
					</h2>
				</div>
				<div className='space-y-4 xl:w-[28%]'>
					<h2 className='font-bold text-[18px]'>Awesome Suport</h2>
					<h2>
						Eget adipiscing augue sit quam natoque ornare cursus viverra odio.
						Diam quam gravida ultricies velit
					</h2>
					<h2 className='font-bold text-[18px]'>flexibility on the go</h2>
					<h2 className=''>
						Vitae pretium nulla sed quam id nisl semper. Vel non in proin
						egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque
						nisl
					</h2>
				</div>
			</section>
			<Image src={video} alt='video' className='xl:mx-[0px] mx-[]' />
			<section className='xl:flex xl:justify-between xl:flex-row flex flex-col items-center  mx-[50px] gap-[100px] my-[50px]'>
				<div className=''>
					<h2 className='text-[70px] font-bold text-[#5937E0]'>20k+</h2>
					<p className='font-bold'>Happy customers</p>
				</div>
				<div className=''>
					<h2 className='text-[70px] font-bold text-[#5937E0]'>540+</h2>
					<p className='font-bold'>Count of cars</p>
				</div>
				<div className=''>
					<h2 className='text-[70px] font-bold text-[#5937E0]'>25+</h2>
					<p className='font-bold'>Years of experince</p>
				</div>
			</section>
			<section className='space-y-5 xl:flex items-center xl:mx-[70px] mx-[20px] gap-50 my-[50px]'>
				<div className='space-y-5 xl:w-[50%] mx-[10px] mt-[30px] '>
					<h2 className='xl:w-[70%] font-bold xl:text-[40px] text-[25px] text-center xl:text-start'>
						Unlock unforgettable memories on the road
					</h2>
					<h2 className='text-center xl:text-start text-gray-600'>
						Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
						tristique et gravida. Quis nunc interdum gravida ullamcorper
					</h2>
					<div className='xl:flex items-center space-y-5'>
						<div className='space-y-5'>
							<div className='flex items-center gap-[10px]'>
								<p className=' p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>
									Velit semper morbi. Purus non eu cursus porttitor tristique et
									gravida
								</h3>
							</div>
							<div className='flex items-center gap-[10px]'>
								<p className=' p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>
									Aliquam adipiscing velit semper morbi. Purus non eu cursus
									porttitor
								</h3>
							</div>
						</div>
						<div className='space-y-5'>
							<div className='flex items-center gap-[10px]'>
								<p className=' p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>
									Purus non eu cursus porttitor tristique et gravida. Quis nunc
									interdum
								</h3>
							</div>
							<div className='flex items-center gap-[10px]'>
								<p className=' p-[5px] text-white bg-[#5937E0] items-center rounded-full'>
									<Check />
								</p>
								<h3 className='text-gray-600'>
									Quis nunc interdum gravida ullamcorper
								</h3>
							</div>
						</div>
					</div>
				</div>
				<Image src={img2} alt='img2' className='w-[400px]' />
			</section>
			<section>
				<h2 className='xl:text-[45px] text-[25px] text-center font-bold'>
					Reviews from our customers
				</h2>
				<div className='xl:flex xl:mx-[50px] xl:gap-[50px] '>
					<div className='bg-[#5937E0] text-white p-[20px] rounded-lg space-y-5 xl:w-[30%] my-[20px] mx-[10px] xl:mx-[0px] '>
						<p className='text-[50px] text-white'>
							<Quote />
						</p>
						<div className='flex flex-col items-center text-center space-y-3'>
							<h2 className='mx-[10px]'>
								{' '}
								Et aliquet netus at sapien pellentesque mollis nec dignissim
								maecenas. Amet erat volutpat quisque odio purus feugiat. In
								gravida neque{' '}
							</h2>
							<Image src={rounded} alt='Photo' />
							<h3 className='font-bold'>Jhon Doe</h3>
						</div>
					</div>
					<div className='bg-[#5937E0] text-white p-[20px] rounded-lg space-y-5 xl:w-[30%] my-[20px] mx-[10px] xl:mx-[0px] '>
						<p className='text-[50px] text-white'>
							<Quote />
						</p>
						<div className='flex flex-col items-center text-center space-y-3'>
							<h2 className='mx-[10px]'>
								Purus consectetur varius quis urna phasellus enim mattis. Sem
								tincidunt tortor nunc egestas amet adipiscing ligula
							</h2>
							<Image src={rounded} alt='Photo' />
							<h3 className='font-bold'>Jhon Doe</h3>
						</div>
					</div>
					<div className='bg-[#5937E0] text-white p-[20px] rounded-lg space-y-5 xl:w-[30%] my-[20px] mx-[10px] xl:mx-[0px] '>
						<p className='text-[50px] text-white'>
							<Quote />
						</p>
						<div className='flex flex-col items-center text-center space-y-3'>
							<h2 className='mx-[10px]'>
								Quam neque odio urna euismod felis. Sit egestas magna in quisque
								famesdapibus quis sapien magna. Nisl non eget sit pellentesque
							</h2>
							<Image src={rounded} alt='Photo' />
							<h3 className='font-bold'>Jhon Doe</h3>
						</div>
					</div>
				</div>
			</section>
			<section className='my-[50px]'>
				<h2 className='xl:text-[45px] text-[25px] text-center font-bold'>
					Top Car Rental Questions
				</h2>
				<Questions />
			</section>
			<section className='bg-[#5937E0] text-white p-[50px] rounded-lg xl:flex xl:justify-between items-center xl:mx-[70px] mx-[20px] gap-50 my-[50px]'>
				<div className='space-y-5 xl:w-[40%] mx-[10px] mt-[30px] '>
					<h2 className='text-[40px] font-bold'>Looking for a car?</h2>
					<h2 className='text-[30px] font-semibold'>+537 547-6401</h2>
					<p>
						Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
						bibendum ullamcorper in
					</p>
					<Link href='/vehicles'>
						<button className='bg-[#FF9E0C] text-white p-[10px] rounded-lg mt-[20px]'>
							Veiw All Cars
						</button>
					</Link>
				</div>
				<Image
					src={car}
					alt='car'
					className='xl:w-[500px] mx-auto absolute right-[250px] top-[2900px] '
				/>
			</section>
		</>
	)
}

export default AboutPage
