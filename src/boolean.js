import { value } from '@/value'
import { useNegate, useConfirm } from '@mpietrucha/function'

export const negate = useNegate(value)

export const confirm = useConfirm(value)
