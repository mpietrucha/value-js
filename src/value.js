import { isFunction } from '@mpietrucha/function'

export const useValue = (source, ...parameters) => {
    if (isFunction(source)) {
        return source(...parameters)
    }

    return source
}
