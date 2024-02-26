import React from 'react'
import { ToastProps, DefaultToast } from 'react-toast-notifications'
import { ToastDesign } from './style'

const ToastConfg = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ children, ...props }: any, ref) => {
    const { title, description } = children
    const { appearance } = props

    return (
      <DefaultToast {...props}>
        <ToastDesign ref={ref}>
          <div className={'title ' + appearance}>{title}</div>
          <div className="description">{description}</div>
        </ToastDesign>
      </DefaultToast>
    )
  },
)

ToastConfg.displayName = 'ToastConfg'

export default ToastConfg
