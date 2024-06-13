import { ProfileLayout } from "@/lib/components/ProfileLayout/ProfileLayout";

export default function Layout(props: React.PropsWithChildren) {
  return <ProfileLayout>{props.children}</ProfileLayout>;
}
