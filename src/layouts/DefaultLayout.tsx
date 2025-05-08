import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
      <div>
        layout
      </div>
      <Outlet />
    </div>
  )
}
