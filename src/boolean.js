import { useValue } from '@/value'
import { useNegate as negate, useConfirm as confirm } from '@mpietrucha/function'

export const useNegate = negate(useValue)

export const useConfirm = confirm(useValue)
