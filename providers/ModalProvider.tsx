'use client'
import { useState, useEffect } from 'react'

import AuthModal from '@/components/AuthModal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<Boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <AuthModal />
    </>
  )
}
export default ModalProvider