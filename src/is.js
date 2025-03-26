import { isFunction } from 'lodash-es'
import { useNegate } from '@/negate'

export { isFunction }

export const notFunction = useNegate(isFunction)
