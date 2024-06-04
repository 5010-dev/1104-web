import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

import { useAuthDataStore } from '../../../../store/authDataStore'

import { TradingviewIdInputProps } from './tradingview-id-input.types'
import { TradingviewIdInputContainer } from './tradingview-id-input.styles'

import StyledHeading from '../../../global/styled-heading/styled-heading.component'
import Input from '../../../global/input/input.component'
import TextLink from '../../../global/text-link/text-link.component'
import Button from '../../../global/button/button.component'
import WarningText from '../../warning-text/warning-text.component'
import NotionPage from '../../../global/notion-page/notion-page.component'
import Modal from '../../../global/modal/modal.component'

export default function TradingviewIdInput(props: TradingviewIdInputProps) {
	const { onSubmitSuccess } = props
	const [isValid, setIsValid] = useState<boolean>(false)
	const [isGuideClicked, setIsGuideClicked] = useState<boolean>(false)
	const [isBeginnerClicked, setIsBeginnerClicked] = useState<boolean>(false)

	const updateLoginUser = useAuthDataStore((state) => state.updateLoginUser)
	const tradingviewId = useAuthDataStore(
		(state) => state.loginUser.tradingviewId,
	)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API

		onSubmitSuccess()
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateLoginUser(inputName, inputValue)
		setIsValid(validateInput(inputValue))
	}

	const validateInput = (value: string): boolean => {
		const idRegex = /^[a-zA-Z0-9_-]+$/
		return idRegex.test(value)
	}

	useEffect(() => {
		updateLoginUser('tradingviewId', '')
	}, [updateLoginUser])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

	return (
		<TradingviewIdInputContainer
			id="tradingview-input-form"
			onSubmit={handleSubmit}
		>
			<StyledHeading
				heading="트레이딩뷰 ID 입력"
				subheading="인디케이터 셋팅"
			/>
			{isBeginnerClicked ? (
				<Modal
					children={
						<p>
							국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기
							위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 대통령의
							임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를
							선거한다. 모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을
							추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을
							확인하고 이를 보장할 의무를 진다. 법률이 헌법에 위반되는 여부가
							재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에
							의하여 재판한다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에
							있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가
							불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
							모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다.
							대한민국의 국민이 되는 요건은 법률로 정한다. 국가의 세입·세출의
							결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의
							직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다.
							누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다.
							모든 국민은 학문과 예술의 자유를 가진다. 대통령후보자가 1인일
							때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면
							대통령으로 당선될 수 없다. 모든 국민은 헌법과 법률이 정한 법관에
							의하여 법률에 의한 재판을 받을 권리를 가진다. 탄핵결정은
							공직으로부터 파면함에 그친다. 그러나, 이에 의하여 민사상이나
							형사상의 책임이 면제되지는 아니한다. 대통령은 필요하다고 인정할
							때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에
							붙일 수 있다. 제1항의 지시를 받은 당해 행정기관은 이에 응하여야
							한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한
							때에도 그 법률안은 법률로서 확정된다. 대통령이 궐위된 때 또는
							대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한
							때에는 60일 이내에 후임자를 선거한다. 모든 국민은 종교의 자유를
							가진다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와
							국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.
							대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이
							공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한
							확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할
							때에는 국회의장이 이를 공포한다. 대법원장과 대법관이 아닌 법관의
							임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.
							국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이
							체포 또는 구금되지 아니한다. 국무총리는 국회의 동의를 얻어
							대통령이 임명한다. 학교교육 및 평생교육을 포함한 교육제도와 그
							운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로
							정한다. 대통령의 선거에 관한 사항은 법률로 정한다. 모든 국민은
							양심의 자유를 가진다. 모든 국민은 행위시의 법률에 의하여 범죄를
							구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여
							거듭 처벌받지 아니한다. 국가는 균형있는 국민경제의 성장 및 안정과
							적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을
							방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에
							관한 규제와 조정을 할 수 있다. 선거와 국민투표의 공정한 관리 및
							정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다. 재의의
							요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과
							출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은
							법률로서 확정된다. 국회의원은 국회에서 직무상 행한 발언과 표결에
							관하여 국회외에서 책임을 지지 아니한다. 연소자의 근로는 특별한
							보호를 받는다. 대통령은 국가의 원수이며, 외국에 대하여 국가를
							대표한다. 대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한
							평화적 통일 정책을 수립하고 이를 추진한다. 정부는 회계연도마다
							예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는
							회계연도 개시 30일전까지 이를 의결하여야 한다. 대법원은 법률에
							저촉되지 아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과
							사무처리에 관한 규칙을 제정할 수 있다. 감사원은 원장을 포함한 5인
							이상 11인 이하의 감사위원으로 구성한다. 국회의원은 법률이 정하는
							직을 겸할 수 없다. 정당은 법률이 정하는 바에 의하여 국가의 보호를
							받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을
							보조할 수 있다.
						</p>
					}
					handleClose={() => setIsBeginnerClicked(false)}
					bottomButtonText="가이드에 따라 가입을 마쳤어요."
					handleBottomButtonClick={() => setIsBeginnerClicked(false)}
				/>
			) : // <NotionPage
			// 	pageId="8599c75fae1740f1a5161fbbfcacd831"
			// 	description="아래의 가이드를 따라 트레이딩뷰 가입을 진행해 주세요. 모두 완료되면 아래의 버튼을 눌러 트레이딩뷰 ID 입력을 마무리 하세요."
			// 	bottomButtonText="가이드에 따라 가입을 마쳤어요."
			// 	handleBottomButtonClick={() => setIsBeginnerClicked(false)}
			// 	handleCloseButtonClick={() => setIsBeginnerClicked(false)}
			// />
			null}
			{isGuideClicked ? (
				<NotionPage
					pageId="cba97c976e714a01a618fd19f69da947"
					bottomButtonText="가이드대로 확인했어요"
					handleBottomButtonClick={() => setIsGuideClicked(false)}
					handleCloseButtonClick={() => setIsGuideClicked(false)}
				/>
			) : null}
			<Button
				type="button"
				id="beginner-button"
				className="input-items"
				accessibleName="tradingview-input-form"
				appearance="neutral"
				hierarchy="tertiary"
				stroke="filled"
				shape="rounding"
				icon={<FontAwesomeIcon icon={faChild} id="beginner-icon" />}
				text="트레이딩뷰 사용이 처음이세요? 저희가 도와드릴게요!"
				handleClick={() => setIsBeginnerClicked(true)}
			/>
			{!isValid && tradingviewId.length !== 0 ? (
				<WarningText
					className="input-items"
					message="ID 형식이 올바르지 않습니다. ID 양식(영문 및 숫자, -, _만 가능)을
							확인해 주세요."
				/>
			) : null}
			<Input
				id="tradingview-id-input"
				className="input-items"
				type="text"
				name="tradingviewId"
				placeholder="트레이딩뷰 ID를 입력해 주세요."
				hierarchy="secondary"
				value={tradingviewId}
				handleChange={handleInputChange}
				isValid={tradingviewId.length === 0 || isValid}
			/>
			<TextLink
				id="guide-link"
				description="트레이딩뷰 ID 확인 방법"
				text="가이드 보기"
				appearance="neutral"
				hierarchy="secondary"
				size="sm"
				underlined
				handleClick={() => setIsGuideClicked(true)}
			/>
			<Button
				id="submit-button"
				className="input-items"
				type="submit"
				accessibleName="tradingview-input-form"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				text={'다음 단계로 →'}
				disabled={!isValid}
			/>
		</TradingviewIdInputContainer>
	)
}
