import { MouseEvent, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ROUTES } from '../../../../routes/routes'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { useToastMessageStore } from '../../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../../hooks/useNavigateWithScroll'

import {
	CheckoutFailContainer,
	CheckoutFailSectionContainer,
} from './checkout-fail.styles'

import Button from '../../../../components/global/button/button.component'
import Warning from '../../../../components/global/warning/warning.component'

export default function CheckoutFail() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()
	const [searchParams] = useSearchParams()

	const code = searchParams.get('code')
	const message = searchParams.get('message')
	const orderId = searchParams.get('orderId')

	const [isValid, setIdValid] = useState<boolean>(false)

	const handleHome = (e: MouseEvent<HTMLSpanElement>) => navigate(ROUTES.HOME)

	useEffect(() => {
		if (!code || !orderId || !message) {
			updateToastMessage('잘못된 요청입니다.')
			navigate(ROUTES.HOME)
		} else {
			setIdValid(true)
		}
	}, [code, orderId, message, navigate, updateToastMessage])

	return (
		<CheckoutFailContainer $deviceType={deviceType}>
			{isValid ? (
				<CheckoutFailSectionContainer
					$deviceType={deviceType}
					id="contents-container"
				>
					<div id="checkout-fail-title-container">
						<Warning text="결제를 실패했어요." />
						<div id="checkout-fail-body-container">
							<p className="checkout-fail-body">{message}</p>
						</div>
					</div>
					<Button
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounding"
						text="← 홈으로 돌아가기"
						handleClick={handleHome}
					/>
				</CheckoutFailSectionContainer>
			) : null}
		</CheckoutFailContainer>
	)
}
