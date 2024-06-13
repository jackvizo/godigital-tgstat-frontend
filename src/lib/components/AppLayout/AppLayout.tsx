import { getIsAuthenticatedSsr } from "@/lib/auth/get-is-authorized-ssr";
import { Devtools } from "@/lib/components/Devtools";
import { Providers } from "@/lib/components/Providers/Providers";
import { inter } from "@/lib/font";
import styles from "@/lib/styles/global.module.scss";
import { getInitialThemeSsr } from "@/lib/theme/get-initial-theme-ssr";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProgressBar } from "../AppProgressBar/AppProgressBar";

export default function AppLayout(props: React.PropsWithChildren) {
  return (
    <html lang="ru" className={styles.h100}>
      <body className={`${inter.className} ${styles.h100}`}>
        <AppProgressBar />
        <Providers
          ProvidersClientsideProps={{
            ThemeProviderProps: { initialTheme: getInitialThemeSsr() },
            isAuthenticated: getIsAuthenticatedSsr(),
          }}
        >
          <CssBaseline />

          {props.children}

          <ToastContainer hideProgressBar position="top-right" autoClose={5000} />
          <Devtools />
        </Providers>
      </body>
    </html>
  );
}
