import { ROOT_ROUTE } from '@app/_constants/ROOT_ROUTE'
import { HOME_PAGE_ROUTE } from '@pages/HomePage/_constants/HOME_PAGE_ROUTE'
import { createRouter } from '@tanstack/react-router'

export const router = createRouter({
  routeTree: ROOT_ROUTE.addChildren([HOME_PAGE_ROUTE]),
})
