import { Outlet } from '@tanstack/react-router'
import './_config'
import './_styles/styles.css'

export function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
