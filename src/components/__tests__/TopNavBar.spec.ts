import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TopNavBar from '@/components/TopNavBar.vue'
import { routes } from '@/router'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { mockViewport } from '@/components/__tests__/helpers/viewport.ts'

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

  it('bolds the active link', async () => {
    const wrapper = mount(TopNavBar, {
      global: {
        plugins: [router],
      },
    })

    const homeLink = wrapper.find('[id="home-link"]')
    expect(homeLink.classes()).contains('font-bold')

    await router.push('/about')
    await router.isReady()

    const aboutLink = wrapper.find('[id="about-link"]')
    expect(aboutLink.classes()).contains('font-bold')
  })

  it('renders all the navigation links at higher resolutions', async () => {
    mockViewport(769)

    const wrapper = mount(TopNavBar, {
      global: {
        plugins: [router],
      },
    })

    await router.isReady()

    const navigationMenu = wrapper.find('[id="navigation-menu"]')
    expect(navigationMenu.exists()).toBeFalsy()

    const navigationLinks = wrapper.find('[id="navigation-links"]')
    expect(navigationLinks.exists()).toBeTruthy()
  })

  it('collapses the navigation links into a hamburger menu at lower resolutions', async () => {
    mockViewport(320)

    const wrapper = mount(TopNavBar, {
      global: {
        plugins: [router],
      },
    })

    await router.isReady()

    const navigationMenu = wrapper.find('[id="navigation-menu"]')
    expect(navigationMenu.exists()).toBeTruthy()

    const navigationLinks = wrapper.find('[id="navigation-links"]')
    expect(navigationLinks.exists()).toBeFalsy()
  })
})
