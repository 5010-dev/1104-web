import { create } from 'zustand'
import { DeviceType } from '../types/deviceType'

export interface DeviceTypeStore {
	deviceType: DeviceType
	updateDeviceType: (deviceType: DeviceType) => void
}

export const useDeviceTypeStore = create<DeviceTypeStore>((set) => ({
	deviceType: 'desktop',
	updateDeviceType: (deviceType) => set({ deviceType: deviceType }),
}))
