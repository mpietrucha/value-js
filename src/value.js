import { isFunction, useNegate, useConfirm } from '@mpietrucha/function'

export const value = (source, ...parameters) => {
    if (isFunction(source)) {
        return source(...parameters)
    }

    return source
}

export const negate = useNegate(value)

export const confirm = useConfirm(value)
