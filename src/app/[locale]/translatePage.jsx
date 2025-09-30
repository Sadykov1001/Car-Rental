// app/[locale]/page.jsx
import { getTranslations } from 'next-intl/server'
import Home from './Home'

export default async function TranslatePage() {
  const t = await getTranslations()

  return <Home t={t} />
}
