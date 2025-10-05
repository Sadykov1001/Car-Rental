import axios from 'axios'
import { create } from 'zustand'

export const ZustandRequests = create((set, get) => ({
	dataCars: [],
	dataCarsById: [],
	getDataCars: async () => {
		try {
			const { data } = await axios.get(
				`https://685009dfe7c42cfd17971652.mockapi.io/js/lesson2`
			)
			set({ dataCars: data })
		} catch (error) {
			console.error(error)
		}
	},
	getDataCarsById: async (id) => {
		try {
			const { data } = await axios.get(
				`https://685009dfe7c42cfd17971652.mockapi.io/js/lesson2/${id}`
			)
			set({ dataCarsById: data })
		} catch (error) {
			console.error(error)
		}
	},
}))
