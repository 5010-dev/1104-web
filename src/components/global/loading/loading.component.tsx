import spinnerAnim from '../../../assets/lottie/spinner-anim.json'

import AnimationPanel from '../animation-panel/animation-panel.component'

export default function Loading() {
	return <AnimationPanel animationData={spinnerAnim} preventEvent />
}
