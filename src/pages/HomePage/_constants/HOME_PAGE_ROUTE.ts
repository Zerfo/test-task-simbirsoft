import { ROOT_ROUTE } from '@app/_constants/ROOT_ROUTE'
import { createRoute } from '@tanstack/react-router'
import { HomePage } from '..'
import { HOME_PAGE_ROUTE_PATH } from './HOME_PAGE_ROUTE_PATH'

export const HOME_PAGE_ROUTE = createRoute({
  component: HomePage,
  getParentRoute: () => ROOT_ROUTE,
  path: HOME_PAGE_ROUTE_PATH,
})
