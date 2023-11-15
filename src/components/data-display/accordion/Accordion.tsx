import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ElementRef, PropsWithChildren, forwardRef } from 'react'

import { ChevronDownIcon } from '@/components/icons/chevron-down-icon'

import * as styles from './Accordion.css'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = forwardRef<
	ElementRef<typeof AccordionPrimitive.Item>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={styles.item} {...props} />)

export const AccordionTrigger = forwardRef<HTMLButtonElement, PropsWithChildren<NonNullable<unknown>>>(
	({ children }, forwardedRef) => (
		<AccordionPrimitive.Header className={styles.header}>
			<AccordionPrimitive.Trigger className={styles.trigger} ref={forwardedRef}>
				{children}
				<ChevronDownIcon />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
)

export const AccordionContent = forwardRef<HTMLDivElement, PropsWithChildren<NonNullable<unknown>>>(
	({ children }, forwardedRef) => (
		<AccordionPrimitive.Content className={styles.content} ref={forwardedRef}>
			{children}
		</AccordionPrimitive.Content>
	)
)
