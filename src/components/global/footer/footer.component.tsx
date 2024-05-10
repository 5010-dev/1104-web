import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { FooterContainer } from './footer.styles'

import TextLink from '../text-link/text-link.component'

export default function Footer() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { logoUrl, simpleDisclaimer } = useContentsStore(
		(state) => state.footer,
	)
	const {
		name,
		ceo,
		address,
		regNum,
		onlineBizNum,
		privacyOfficer,
		csMail,
		hosting,
	} = useContentsStore((state) => state.footer.companyInfo)

	const handleNumCheckClick = (e: MouseEvent<HTMLSpanElement>) => {
		const numStr = regNum.replace(/-/g, '')
		const num = parseInt(numStr)
		window.open(`http://www.ftc.go.kr/bizCommPop.do?wrkr_no=${num}`, '_blank')
	}

	return (
		<FooterContainer $deviceType={deviceType}>
			<div id="components-container">
				<div id="company-info">
					<img id="company-logo" src={logoUrl} alt="company-logo" />
					<div id="company-info-text-container">
						<p className="company-info-text">{`상호: ${name} | 대표: ${ceo} | 소재지: ${address}`}</p>
						<p className="company-info-text">
							{`사업자등록번호: ${regNum}`}
							<span id="reg-num-check-link" onClick={handleNumCheckClick}>
								사업자정보확인
							</span>
						</p>
						<p className="company-info-text">{`통신판매신고번호: ${onlineBizNum}`}</p>
						<p className="company-info-text">{`개인정보관리책임자: ${privacyOfficer} | 이메일: ${csMail}`}</p>
						<p className="company-info-text">{`호스팅 제공자: ${hosting}`}</p>
					</div>
				</div>
				<div id="legal-menu">
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						text="서비스 이용약관"
						handleClick={() => {}}
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						text="개인정보 처리방침"
						handleClick={() => {}}
					/>
				</div>
				<div id="disclaimer-container">
					{simpleDisclaimer.map((item, index) => (
						<p key={index}>{item}</p>
					))}
					<div id="copyright-text">
						<span>© Copyright 1104 R&I.</span>All rights Reserved
					</div>
				</div>
			</div>
		</FooterContainer>
	)
}
