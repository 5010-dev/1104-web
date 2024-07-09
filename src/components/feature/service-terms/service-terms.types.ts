import { ServiceTermsList } from '../../../store/terms/service-terms.types'

export type ServiceTermsProps = {
	id?: string
	className?: string
	terms: keyof ServiceTermsList
	height?: string
}

export type ServiceTermsContainerProps = {
	$height?: string
}
