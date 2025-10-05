// app/api/telegram/route.js

const TOKEN = '8398615795:AAFsKEy-2tZgpmcjKDJT5pZGS7tyTPciVgs'
const CHAT_ID = '5673979559'

export async function GET(req) {
	return new Response('✅ Telegram API endpoint is working (GET)', {
		status: 200,
	})
}

export async function POST(req) {
	try {
		const data = await req.formData()

		const userCarType = data.get('user_car') || 'Not specified'
		const userPlaceRental = data.get('user_place_rental') || 'Not specified'
		const userStartDate = data.get('user_start_date') || 'Not specified'
		const userPhoneNumber = data.get('user_phone_number') || 'Not specified'
		const userEmail = data.get('user_email') || 'Not specified'
		const currentLocale = data.get('user_locale') || 'en'

		const text = `
🚗 <b>New Booking (${currentLocale.toUpperCase()})</b>
<b>Car Model:</b> ${userCarType}
<b>Place Rental:</b> ${userPlaceRental}
<b>Start Date:</b> ${userStartDate}
<b>Phone Number:</b> ${userPhoneNumber}
<b>Email:</b> ${userEmail}
`

		const response = await fetch(
			`https://api.telegram.org/bot${TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text,
					parse_mode: 'HTML',
				}),
			}
		)

		const result = await response.json()
		console.log('Telegram API response:', result)

		if (!response.ok) {
			return new Response(`Failed to send message: ${result.description}`, {
				status: 500,
			})
		}

		return Response.redirect(`/${currentLocale}/thank-you`)
	} catch (err) {
		console.error('Error in /api/telegram:', err)
		return new Response('Internal Server Error', { status: 500 })
	}
}
