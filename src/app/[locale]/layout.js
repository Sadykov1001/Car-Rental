import appleDownload from '../images/appleDownload.png'
import logo from '../images/Logo.png'
import playMarketDownload from '../images/playMarketDownload.png'
import { routing } from '@/i18n/routing'
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
} from 'lucide-react'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LanguageSwitcher from './components/languageSwitcher'
import './globals.css'
import MobileDrawer from './components/leftDrawer'
export default async function RootLayout({ children, params }) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	const t = await getTranslations()
	const data = [
		{
			name: 'Mercedes',
			price: '25$',
			type: 'Sedan',
		},
	]
	return (
		<html lang='en'>
			<body className='max-w-[1400px] m-auto'>
				<header className='flex justify-between items-center p-5 '>
					<Image src={logo} alt='logo' />
					<div className='gap-5 hidden xl:flex'>
						<Link className='font-semibold' href='/'>
							{t('Home')}
						</Link>
						<Link className='font-semibold' href='/vehicles'>
							{t('Vehicles')}
						</Link>
						<Link className='font-semibold' href='/about'>
							{t('About Us')}
						</Link>
						<Link className='font-semibold' href='/contact'>
							{t('Contact Us')}
						</Link>
					</div>
					<div className='flex  gap-[15px] items-center'>
						<div className='xl:flex hidden items-center gap-2'>
							<button className=' bg-[#5937E0] p-[10px] text-white rounded-full'>
								<Phone />
							</button>
							<div>
								<p>Need help?</p>
								<p className='font-semibold'>+996 247-1680</p>
							</div>
						</div>
						<div className='flex items-center gap-[10px]'>
							<LanguageSwitcher />
							<MobileDrawer />
						</div>
					</div>
				</header>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>

				<footer className='bg-gray-100 xl:bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-10 xl:flex xl:justify-between gap-10'>
					{/* Logo & Social */}
					<div className='xl:w-1/4'>
						<Image src={logo} alt='logo' className='mb-4' />
						<p className='mb-4 text-sm leading-relaxed'>
							Choose from a wide range of vehicles for every occasion. Fast booking, reliable cars, and great prices make your ride effortless and enjoyable.
						</p>
						<div className='flex gap-2'>
							<button className='bg-[#1877F2] hover:bg-[#145db2] text-white p-3 rounded-full transition-colors'>
								<Facebook size={18} />
							</button>
							<button className='bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] p-3 rounded-full text-white hover:opacity-90 transition-opacity'>
								<Instagram size={18} />
							</button>
							<button className='bg-[#1DA1F2] hover:bg-[#0d95e8] text-white p-3 rounded-full transition-colors'>
								<Twitter size={18} />
							</button>
							<button className='bg-[#FF0000] hover:bg-[#cc0000] text-white p-3 rounded-full transition-colors'>
								<Youtube size={18} />
							</button>
						</div>
					</div>

					{/* Address & Useful Links */}
					<div className='xl:w-1/4 space-y-6'>
						<div className='flex items-start gap-3'>
							<button className='bg-[#FF9E0C] p-3 rounded-full text-white'>
								<MapPin />
							</button>
							<div>
								<p className='text-sm'>Address</p>
								<p className='font-semibold'>Oxford Ave. Cary, NC 27511</p>
							</div>
						</div>

						<div>
							<h2 className='font-bold text-lg mb-2'>{t('Useful links')}</h2>
							<div className='flex flex-col gap-1 text-sm'>
								<Link
									href='/'
									className='hover:text-orange-500 transition-colors'
								>
									{t('Home')}
								</Link>
								<Link
									href='/vehicles'
									className='hover:text-orange-500 transition-colors'
								>
									{t('Vehicles')}
								</Link>
								<Link
									href='/about'
									className='hover:text-orange-500 transition-colors'
								>
									{t('About Us')}
								</Link>
								<Link
									href='/contact'
									className='hover:text-orange-500 transition-colors'
								>
									{t('Contact Us')}
								</Link>
							</div>
						</div>
					</div>

					{/* Email & Vehicle Types */}
					<div className='xl:w-1/4 space-y-6'>
						<div className='flex items-start gap-3'>
							<button className='bg-[#FF9E0C] p-3 rounded-full text-white'>
								<Mail />
							</button>
							<div>
								<p className='text-sm'>Email</p>
								<p className='font-semibold'>nwiger@yahoo.com</p>
							</div>
						</div>

						<div>
							<h2 className='font-bold text-lg mb-2'>{t('Vehicles')}</h2>
							<div className='flex flex-col gap-1 text-sm'>
								<p>{t('Sedan')}</p>
								<p>{t('Cabriolet')}</p>
								<p>{t('Pickup')}</p>
								<p>{t('Minivan')}</p>
								<p>{t('SUV')}</p>
							</div>
						</div>
					</div>

					{/* Phone & Download */}
					<div className='xl:w-1/4 space-y-6'>
						<div className='flex items-start gap-3'>
							<button className='bg-[#FF9E0C] p-3 rounded-full text-white'>
								<Phone />
							</button>
							<div>
								<p className='text-sm'>Phone</p>
								<p className='font-semibold'>+537 547-6401</p>
							</div>
						</div>

						<div>
							<h2 className='font-bold text-lg mb-2'>{t('Download App')}</h2>
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
										className='hover:scale-105 transition-transform'
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
										className='hover:scale-105 transition-transform'
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
