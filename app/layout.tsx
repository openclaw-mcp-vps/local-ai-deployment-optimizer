import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Local AI Deployment Optimizer",
  description: "Optimize local AI model deployment and resource usage. Analyze hardware specs and get optimal configurations."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="451d827a-529c-4d65-bef7-fbbb742838ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
