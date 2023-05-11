import React, { ComponentProps } from 'react'

import { Text } from '../text/Text'

type Props = Omit<ComponentProps<typeof Text>, 'variant'> & { variant: 'h1' | 'h2' | 'h3' | 'h4' }

export const Heading = ({ variant, ...rest }: Props) => <Text as={variant} variant={variant} {...rest} />
