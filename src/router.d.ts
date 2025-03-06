import { router } from '@app/_router/router'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
