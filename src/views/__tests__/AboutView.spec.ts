import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import ProjectsView from '@/views/ProjectsView.vue'

describe('ProjectsView', () => {
  it('renders', () => {
    const wrapper = shallowMount(ProjectsView)
    expect(wrapper.exists()).toBeTruthy()
  })
})
