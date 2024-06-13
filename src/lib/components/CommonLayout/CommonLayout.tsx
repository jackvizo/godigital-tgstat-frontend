import { AppBar } from "@/lib/components/AppBar/AppBar";
import { Footer } from "@/lib/components/Footer/Footer";
import styles from "@/lib/styles/global.module.scss";
import React from "react";

export interface CommonLayoutProps extends React.PropsWithChildren { }

export function CommonLayout(props: CommonLayoutProps) {
  return (
    <main className={styles.main}>
      <AppBar />
      {/* <Box pt={4} /> */}

      {props.children}

      <Footer />
    </main>
  );
}