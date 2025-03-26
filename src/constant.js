import { isFunction, useConstant } from '@mpietrucha/function'

export const constant = source => {
    if (isFunction(source)) {
        return source
    }

    return useConstant(source)
}
