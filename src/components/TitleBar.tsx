import { Icon } from '@iconify/react'
import { getCurrentWindow } from '@tauri-apps/api/window'

export function TitleBar() {
  const currentWindow = getCurrentWindow()

  function handleMinimize() {
    currentWindow.minimize()
  }

  function handleMaximize() {
    currentWindow.toggleMaximize()
  }

  function handleClose() {
    currentWindow.close()
  }

  return (
    <div className="w-full p-2">
      <div className="flex flex-row justify-between">
        <div></div>
        <div className="flex flex-row gap-2 select-none">
          <Icon className="cursor-pointer" icon="gg:math-minus" width="18" height="18" onClick={handleMinimize} />
          <Icon className="cursor-pointer" icon="gg:maximize" width="18" height="18" onClick={handleMaximize} />
          <Icon className="cursor-pointer" icon="gg:close" width="18" height="18" onClick={handleClose} />
        </div>
      </div>
    </div>
  )
}
