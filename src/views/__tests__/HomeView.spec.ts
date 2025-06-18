import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.exists()).toBeTruthy()
  })
})
