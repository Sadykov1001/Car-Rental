'use client'

import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()

	const changeLanguage = e => {
		const locale = e.target.value

		// разбиваем путь на сегменты
		const segments = pathname.split('/')
		segments[1] = locale // заменяем первый сегмент на новый язык

		router.push(segments.join('/'))
	}

	return (
		<select onChange={changeLanguage} defaultValue={pathname.split('/')[1]}>
			<option value='en'>🇬🇧</option>
			<option value='ru'>🇷🇺</option>
			<option value='tj'>🇹🇯</option>
			<option value='tr'>🇹🇷</option>
		</select>
	)
}
