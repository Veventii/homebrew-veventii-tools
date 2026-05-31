'use client'

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Logo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const basePath = '/homebrew-veventii-tools';
  const isDark = !mounted || resolvedTheme === 'dark';
  const logo = isDark ? `${basePath}/veventii-logo-dark.svg` : `${basePath}/veventii-logo.svg`

  return (
    <Image
      src={logo}
      width={592}
      height={243}
      className="w-[150px]"
      alt="Veventii logo"
      priority
    />
  );
}