import Box from "@mui/material/Box/index";
import { ProfileMenu } from "@/lib/components/Navigation/ProfileMenu/ProfileMenu";
import { cookies } from "next/headers";
import { COOKIE_KEY_PROFILE_MENU_COLLAPSED } from "@/lib/consts";

export interface ProfileLayoutProps extends React.PropsWithChildren { }

export function ProfileLayout(props: ProfileLayoutProps) {
  const cookieStore = cookies();
  const isProfileMenuCollapsed = JSON.parse(
    cookieStore.get(COOKIE_KEY_PROFILE_MENU_COLLAPSED)?.value ?? "false"
  ) as boolean;

  return (
    <Box display="flex" alignItems="row">
      <ProfileMenu isInitialProfileMenuCollapsed={isProfileMenuCollapsed} />
      <Box flex={1} sx={{ py: 2, px: { xs: 1.5, md: 4 }, overflow: 'auto' }}>
        {props.children}
      </Box>
    </Box>
  );
}
