import { queryClient } from '@app/_queryClient'
import { router } from '@app/_router/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement, {
    onCaughtError: (error, errorInfo) => {
      console.error(errorInfo, error)
    },
    onUncaughtError: (error, errorInfo) => {
      console.error(errorInfo, error)
    },
  })

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/*{import.meta.env.DEV && <TanStackRouterDevtools />}*/}

        {import.meta.env.DEV && <ReactQueryDevtools />}
      </QueryClientProvider>
    </StrictMode>
  )
}
