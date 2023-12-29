/*
 * @Author: Joe.Chen
 * @Date: 2023-12-29 09:59:36
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-12-29 09:59:36
 * @Description: 
 */
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import './style.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
