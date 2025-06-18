import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import TopNavBar from '@/components/TopNavBar.vue'

describe('TopNavBar', () => {
  it('renders', () => {
    const wrapper = shallowMount(TopNavBar)
    expect(wrapper.exists()).toBeTruthy()
  })
})
