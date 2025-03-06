import { isNonBlankString } from '@shared/features/data-types/string/isNonBlankString'
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Meta } from './_types/Meta'
import { showErrorNotification } from './_utils/showErrorNotification'

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: Meta
    queryMeta: Meta
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  mutationCache: new MutationCache({
    onError: (error, _, __, { meta }) => {
      if (meta && meta.errorMessage === false) {
        return
      }
      showErrorNotification(error, meta?.errorMessage)
    },
    onSuccess: (_, __, ___, { meta }) => {
      if (isNonBlankString(meta?.successMessage)) {
        toast.success(meta.successMessage)
      }
    },
  }),
  queryCache: new QueryCache({
    onError: (error, { meta }) => {
      if (meta && meta.errorMessage === false) {
        return
      }
      showErrorNotification(error, meta?.errorMessage)
    },
    onSuccess: (_, { meta }) => {
      if (isNonBlankString(meta?.successMessage)) {
        toast.success(meta.successMessage)
      }
    },
  }),
})
