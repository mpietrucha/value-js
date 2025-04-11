import { isFunction, useConstant as constant } from '@mpietrucha/function'

export const useConstant = source => {
    if (isFunction(source)) {
        return source
    }

    return constant(source)
}
