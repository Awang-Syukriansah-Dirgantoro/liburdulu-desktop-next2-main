import { Inter } from "next/font/google";
import "src/globals.css";
import { primaryFont } from "src/theme/typography";
import ThemeProvider from "src/theme";
import { SettingsDrawer, SettingsProvider } from "src/components/settings";
import { LocalizationProvider } from "src/locales";
import SnackbarProvider from "src/components/snackbar/snackbar-provider";
import { MotionLazy } from "src/components/animate/motion-lazy";
import ProgressBar from "src/components/progress-bar";
import { AuthProvider } from "src/auth/context/jwt";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Minimal UI Kit",
  description:
    "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style",
  keywords: "react,material,kit,application,dashboard,admin,template",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body className={inter.className}>
        <AuthProvider>
          <LocalizationProvider>
            <SettingsProvider
              defaultSettings={{
                themeMode: "light", // 'light' | 'dark'
                themeDirection: "ltr", //  'rtl' | 'ltr'
                themeContrast: "default", // 'default' | 'bold'
                themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
                themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                themeStretch: false,
              }}
            >
              <ThemeProvider>
                <SnackbarProvider>
                  <MotionLazy>
                    <SettingsDrawer />
                    <ProgressBar />
                    {children}
                  </MotionLazy>
                </SnackbarProvider>
              </ThemeProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
