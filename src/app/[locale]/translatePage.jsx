'use client'
import { getTranslations } from 'next-intl/server'
import Home from './Home'
import AboutPage from './about/page'
import ContactPage from './contact/page'
import VehiclesPage from './vehicles/page'

export default async function TranslatePage() {
	const t = await getTranslations()

	return (
		<div>
			<Home t={t} />
			<AboutPage t={t} />
			<ContactPage t={t} />
			<VehiclesPage t={t} />
		</div>
	)
}
