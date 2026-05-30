'use client'

import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Logo() {
  const { resolvedTheme } = useTheme()
  const logo = resolvedTheme === 'dark' ? '/veventii-logo-dark.svg' : '/veventii-logo.svg'
return <Image
                  src={logo}
                  width={592}
                  height={243}
                  className="w-[150px]"
                  alt="Veventii logo"
              />
}