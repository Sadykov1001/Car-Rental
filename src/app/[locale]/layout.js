import './globals.css'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import logo from '@/app/images/Logo.png'
import playMarketDownload from '@/app/images/playMarketDownload.png'
import appleDownload from '@/app/images/appleDownload.png'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
} from 'lucide-react'
import Link from 'next/link'
export default async function RootLayout({ children, params }) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	const t = await getTranslations()
	return (
		<html lang='en'>
			<body className='max-w-[1400px] m-auto'>
				<header className='flex justify-between items-center p-5 '>
					<Image src={logo} alt='logo' />
					<div className='flex gap-5'>
						<Link href='/'>{t('Home')}</Link>
						<Link href='/vehicles'>{t('Vehicles')}</Link>
						<Link href='/details'>{t('Details')}</Link>
						<Link href='/about'>{t('About Us')}</Link>
						<Link href='/contact'>{t('Contact Us')}</Link>
					</div>
					<div className='flex gap-[15px] items-center'>
						<div className='flex items-center gap-2'>
							<button className=' bg-[#5937E0] p-[10px] text-white rounded-full'>
								<Phone />
							</button>
							<div>
								<p>Need help?</p>
								<p className='font-semibold'>+996 247-1680</p>
							</div>
						</div>
						<div>
							<select>
								<option value='en'>en</option>
								<option value='tr'>tr</option>
								<option value='ru'>ru</option>
								<option value='tj'>tj</option>
							</select>
						</div>
					</div>
				</header>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
				<footer className='flex justify-between'>
					<div>
						<Image src={logo} alt='logo' />
						<br />
						<div>
							<p className='w-[250px] font-bold mb-[5px]'>
								Faucibus faucibus pellentesque dictum turpis. Id pellentesque
								turpis massa a id iaculis lorem turpis euismod. Purus at quisque
								integer sit.
							</p>
							<div className='flex gap-1'>
								<button className='bg-[#1877F2] text-white p-4 rounded-full'>
									<Facebook size={18} />
								</button>
								<button className='bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white  rounded-full p-4'>
									<Instagram size={18} />
								</button>
								<button className='bg-[#1DA1F2] text-white p-4  rounded-full'>
									<Twitter size={18} />
								</button>
								<button className='bg-[#FF0000] text-white p-4 rounded-full '>
									<Youtube size={18} />
								</button>
							</div>
						</div>
					</div>
					<div>
						<div className='flex items-center gap-2'>
							<button className=' bg-[#FF9E0C] p-[10px] text-white rounded-full'>
								<MapPin />
							</button>
							<div>
								<p>Address</p>
								<p className='font-semibold'>Oxford Ave. Cary, NC 27511</p>
							</div>
						</div>
						<br />
						<div>
							<h2 className='font-bold text-[20px] mb-[5px]'>
								{t('Useful links')}
							</h2>
							<div className='flex flex-col'>
								<Link href='/'>{t('Home')}</Link>
								<Link href='/vehicles'>{t('Vehicles')}</Link>
								<Link href='/details'>{t('Details')}</Link>
								<Link href='/about'>{t('About Us')}</Link>
								<Link href='/contact'>{t('Contact Us')}</Link>
							</div>
						</div>
					</div>
					<div>
						<div className='flex items-center gap-2'>
							<button className=' bg-[#FF9E0C] p-[10px] text-white rounded-full'>
								<Mail />
							</button>
							<div>
								<p>Email</p>
								<p className='font-semibold'>nwiger@yahoo.com</p>
							</div>
						</div>
						<br />
						<div>
							<h2 className='font-bold text-[20px] mb-[5px]'>
								{t('Vehicles')}
							</h2>
							<p>{t('Sedan')}</p>
							<p>{t('Cabriolet')}</p>
							<p>{t('Pickup')}</p>
							<p>{t('Minivan')}</p>
							<p>{t('SUV')}</p>
						</div>
					</div>
					<div>
						<div className='flex items-center gap-2'>
							<button className=' bg-[#FF9E0C] p-[10px] text-white rounded-full'>
								<Phone />
							</button>
							<div>
								<p>Phone</p>
								<p className='font-semibold'>+537 547-6401</p>
							</div>
						</div>
						<br />
						<div>
							<h2 className='font-bold text-[20px] mb-[5px]'>
								{t('Download App')}
							</h2>
							<div className='flex flex-col gap-2'>
								<a
									href='https://www.apple.com/app-store/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Image
										src={appleDownload}
										alt='App Store'
										width={180}
										height={60}
									/>
								</a>

								<a
									href='https://play.google.com/store/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Image
										src={playMarketDownload}
										alt='Google Play'
										width={180}
										height={60}
									/>
								</a>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	)
}
