import { useState, MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useFooterContentsStore } from '../../../store/contents/footerContentsStore'

import { FooterTerms } from './footer.types'
import { FooterContainer } from './footer.styles'

import TextLink from '../text-link/text-link.component'
import TermsModal from '../terms-modal/terms-modal.component'

export default function Footer() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { logoUrl, simpleDisclaimer } = useFooterContentsStore()
	const {
		name,
		ceo,
		address,
		tel,
		regNum,
		// onlineBizNum,
		privacyOfficer,
		csMail,
		hosting,
	} = useFooterContentsStore((state) => state.companyInfo)
	const [showTerms, setShowTerms] = useState<boolean>(false)
	const [termsData, setTermsData] = useState<FooterTerms>()

	// const handleNumCheckClick = (e: MouseEvent<HTMLSpanElement>) => {
	// 	const numStr = regNum.replace(/-/g, '')
	// 	const num = parseInt(numStr)
	// 	window.open(`http://www.ftc.go.kr/bizCommPop.do?wrkr_no=${num}`, '_blank')
	// }

	const handleShowTerms = (
		e: MouseEvent<HTMLSpanElement> | KeyboardEvent,
		terms: FooterTerms,
	) => {
		terms && setTermsData(terms)
		setShowTerms((state) => !state)
	}

	return (
		<FooterContainer $deviceType={deviceType}>
			{showTerms && termsData !== undefined ? (
				<TermsModal
					title={
						termsData === 'policyTerms'
							? '서비스 이용약관'
							: '개인정보 처리방침'
					}
					terms={termsData}
					handleClose={(e) => handleShowTerms(e, termsData)}
				/>
			) : null}
			<div id="components-container">
				<div id="company-info">
					<img id="company-logo" src={logoUrl} alt="company-logo" />
					<div id="company-info-text-container">
						<p className="company-info-text">{`상호: ${name} | 대표: ${ceo} | 전화: ${tel}`}</p>
						<p className="company-info-text">{`소재지: ${address}`}</p>
						<p className="company-info-text">
							{`사업자등록번호: ${regNum}`}
							{/* // TODO: 통신판매업 등록 이후 활성화 */}
							{/* <span id="reg-num-check-link" onClick={handleNumCheckClick}>
								사업자정보확인
							</span> */}
						</p>
						{/* <p className="company-info-text">{`통신판매신고번호: ${onlineBizNum}`}</p> */}
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
						handleClick={(e) => handleShowTerms(e, 'policyTerms')}
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						text="개인정보 처리방침"
						handleClick={(e) => handleShowTerms(e, 'privacyTerms')}
					/>
				</div>
				<div id="disclaimer-container">
					{simpleDisclaimer.map((item, index) => (
						<p key={index}>{item}</p>
					))}
					<div id="copyright-text">
						<span>© Copyright TEAM 5010.</span>All rights Reserved
					</div>
				</div>
			</div>
		</FooterContainer>
	)
}
