import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "TaskFlow — Ship Faster With Your Entire Team",
  description: "The project management tool that gets out of your way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}