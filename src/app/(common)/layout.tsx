import { CommonLayout } from "@/lib/components/CommonLayout/CommonLayout";


export default function Layout(props: React.PropsWithChildren) {
  return <CommonLayout>{props.children}</CommonLayout>;
}
