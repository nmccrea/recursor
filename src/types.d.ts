// "Flavor" nominal type modifier.
// See: https://spin.atomicobject.com/2018/01/15/typescript-flexible-nominal-typing/
type Nominal<T, NominalT> = T & { __nominalType?: NominalT }
