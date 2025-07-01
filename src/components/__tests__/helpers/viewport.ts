import {vi} from 'vitest'

export function mockViewport(width: number) {
  const impl = (query: string) => {
    const max = /\(max-width:\s*(\d+)px\)/.exec(query)
    const min = /\(min-width:\s*(\d+)px\)/.exec(query)
    const matches =
      (max && width <= +max[1]) ||
      (min && width >= +min[1]) ||
      false

    return {
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }
  }

  vi.stubGlobal('matchMedia', vi.fn(impl))
}
