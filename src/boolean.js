import { useValue } from '@/value'
import {
    useConfirm as confirm,
    useNegate as negate,
} from '@mpietrucha/function'

export const useNegate = negate(useValue)

export const useConfirm = confirm(useValue)
