import { negate as useNegate } from 'lodash-es'

export { useNegate }

export const useConfirm = useNegate(useNegate)
