import Hero from '../../../global/hero/hero.component'

import { usePartnershipContentsStore } from '../../../../store/contents/partnership-contents/partnership-contents.store'

export default function PartnershipHero() {
	const { image, text } = usePartnershipContentsStore((state) => state.hero)
	const { category, heading, subheading } = text

	return (
		<Hero
			image={image}
			category={category}
			heading={heading}
			subheading={subheading}
			shadeOpacity={[0.5, 0.75, 1]}
			fullScreen={false}
		/>
	)
}
