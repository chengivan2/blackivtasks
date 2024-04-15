import { Poppins } from '@next/font/google';
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: "Tasksly",
  description: "Manage your organization's tasks with lightning speed.",
  openGraph: {
    title: 'Tasksly',
    description: "Manage your organization\'s tasks with lightning speed.",
    url: 'https://blackivtasks.vercel.app',
    siteName: 'Tasksly',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}