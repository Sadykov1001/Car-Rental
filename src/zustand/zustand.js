import axios from 'axios'
import { create } from 'zustand'

export const ZustandRequests = create((set, get) => ({
	dataCars: [],
	getDataCars: async () => {
		try {
			const { data } = await axios.get(
				`https://34ced9dba89b119a.mokky.dev/Cars`
			)
			set({ dataCars: data })
		} catch (error) {
			console.error(error)
		}
	},
}))
