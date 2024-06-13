import AppLayout from "@/lib/components/AppLayout/AppLayout";
import "react-toastify/dist/ReactToastify.css";
import "./global.scss";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <AppLayout >
      {props.children}
    </AppLayout>
  );
}
