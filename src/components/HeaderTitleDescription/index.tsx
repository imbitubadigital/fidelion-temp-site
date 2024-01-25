import { Heading } from '../Heading'
import { Typography } from '../Typography'
type HeaderTitleDescriptionProps = {
  title: string
  description: string
}
export function HeaderTitleDescription({
  title,
  description,
}: HeaderTitleDescriptionProps) {
  return (
    <div className="mb-11">
      <Heading
        type="h2"
        size="6xl"
        color="black"
        className=" leading-[4.375rem] mb-5 max-sm:text-fd-gray-800 max-lg:text-4xl"
      >
        {title}
      </Heading>
      <Typography size="lg" color="black">
        {description}
      </Typography>
    </div>
  )
}
