'use client'

import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Logo() {
  const { resolvedTheme } = useTheme()
  const basePath = '/homebrew-veventii-tools';
  const logo = resolvedTheme === 'dark' ? `${basePath}/veventii-logo-dark.svg` : `${basePath}/veventii-logo.svg`
return <Image
                  src={logo}
                  width={592}
                  height={243}
                  className="w-[150px]"
                  alt="Veventii logo"
              />
}