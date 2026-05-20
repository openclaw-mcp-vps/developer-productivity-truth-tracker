import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevTruth — Anonymous Developer Productivity Tracker",
  description: "Track your actual vs reported work hours anonymously. Get industry benchmarks and insights. Built for developers who value honesty."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a328ed1a-3dbb-4a18-b6d3-1623bf7b5f31"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
