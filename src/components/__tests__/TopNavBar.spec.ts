import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TopNavBar from '@/components/TopNavBar.vue'
import { routes } from '@/router'
import { createRouter, createWebHistory, type Router } from 'vue-router'

let router: Router

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })

  router.push('/')
  await router.isReady()
})

describe('TopNavBar', () => {
  it('renders', () => {
    const wrapper = mount(TopNavBar, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  it.each([
    ['About', 'about', '/about', '[id="about-link"]'],
    ['Home', 'home', '/', '[id="home-link"]'],
    ['Projects', 'projects', '/projects', '[id="projects-link"]'],
  ])(
    'allows users to navigate to the %s section of the website',
    async (label, routeName, routePath, componentIdentifier) => {
      const wrapper = mount(TopNavBar, {
        global: {
          plugins: [router],
        },
      })
      const mockPush = vi.spyOn(router, 'push')

      const routerLink = wrapper.find(componentIdentifier)
      expect(routerLink.text()).toContain(label)
      expect(routerLink.attributes('href')).toBe(routePath)

      await routerLink.trigger('click')
      expect(mockPush).toHaveBeenCalledTimes(1)
      expect(mockPush).toHaveBeenCalledWith(routePath)
    },
  )

  it('underlines the active link', async () => {
    const wrapper = mount(TopNavBar, {
      global: {
        plugins: [router],
      },
    })

    const homeLink = wrapper.find('[id="home-link"]')
    expect(homeLink.classes()).contains('underline')

    await router.push('/about')
    await router.isReady()

    const aboutLink = wrapper.find('[id="about-link"]')
    expect(aboutLink.classes()).contains('underline')
  })
})
