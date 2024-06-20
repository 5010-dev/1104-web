import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * UseFadeInOptions 인터페이스
 * @property {number} [duration=1.5] - 페이드 인 애니메이션의 지속 시간 (초 단위)
 * @property {number} [delay=0] - 페이드 인 애니메이션의 지연 시간 (초 단위)
 * @property {number} [threshold=0] - 컴포넌트가 화면에 보이는 정도의 임계값 (0부터 1 사이의 값)
 */
interface UseFadeInOptions {
	duration?: number
	delay?: number
	threshold?: number
}

/**
 * useFadeIn 커스텀 훅
 * @param {UseFadeInOptions} [options] - 페이드 인 애니메이션 옵션
 * @returns {{ ref: React.RefObject<Element>, controls: AnimationControls, fadeInVariants: Variants }}
 */
const useFadeIn = (options?: UseFadeInOptions) => {
	// 옵션에서 지속 시간, 지연 시간, 임계값을 추출하고 기본값 설정
	const { duration = 1.5, delay = 0, threshold = 0 } = options || {}

	const controls = useAnimation()
	const [ref, inView] = useInView({ threshold })

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration, delay } },
	}

	return { ref, controls, fadeInVariants }
}

export default useFadeIn
