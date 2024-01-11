import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Button: FC<IProps> = () => {
  return <div>Button</div>
}

export default memo(Button)
