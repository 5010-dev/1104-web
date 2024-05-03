import { create } from 'zustand'
import { DeviceType } from '../types/deviceType.types'

export interface DeviceTypeState {
	deviceType: DeviceType
}

export interface DeviceTypeAction {
	updateDeviceType: (deviceType: DeviceType) => void
}

export const useDeviceTypeStore = create<DeviceTypeState & DeviceTypeAction>(
	(set) => ({
		deviceType: 'desktop',
		updateDeviceType: (deviceType) => set({ deviceType: deviceType }),
	}),
)
