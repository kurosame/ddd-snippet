'use client'

import { RecoilRoot } from 'recoil'

type Props = {
  children: React.ReactNode
}

export const Provider: React.FC<Props> = ({ children }) => <RecoilRoot>{children}</RecoilRoot>
