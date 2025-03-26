import { isFunction } from '@mpietrucha/function'

export const value = (source, ...parameters) => {
    if (isFunction(source)) {
        return source(...parameters)
    }

    return source
}
