function method(proto: Record<string, any>, target: Record<string, any>, property: string) {
  proto[property] = target[property]
}

function getter(proto: Record<string, any>, target: Record<string, any>, property: string) {
  Object.defineProperty(proto, property, {
    get () {
      return target[property]
    }
  })
}

function setter(proto: Record<string, any>, target: Record<string, any>, property: string) {
  Object.defineProperty(proto, property, {
    set (value) {
      target[property] = value
    }
  })
}

module.exports = {
  method,
  setter,
  getter
}