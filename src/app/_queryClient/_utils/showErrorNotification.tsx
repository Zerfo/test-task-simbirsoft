import { toast } from 'sonner'

export const showErrorNotification = (error: { message: string } | Error) => {
  toast.error(`Не удалось выполнить сетевой запрос\n Ошибка: ${error.message}`)
}
