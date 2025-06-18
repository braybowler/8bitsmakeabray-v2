import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import TopNavBar from '@/components/TopNavBar.vue'
import { routes } from '@/router'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

describe('TopNavBar', () => {
  it('renders', () => {
    const wrapper = shallowMount(TopNavBar)
    expect(wrapper.exists()).toBeTruthy()
  })

  it.each(
    [
      ['Home', '/', '[id="home-link"]'],
      ['Projects', '/projects', '[id="projects-link"]']
    ]
  )('allows users to navigate to the %s section of the website', async (label, path, componentIdentifier) => {
    const wrapper = mount(TopNavBar, {
      global: {
        plugins: [router]
      }
    })

    await router.isReady()

    const routerLink = wrapper.findComponent(componentIdentifier)
    expect(routerLink.html()).contains(label)
    expect(routerLink.attributes()).contains({href: path})
  })
})
