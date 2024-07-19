import { Box, Typography, Link } from "@mui/material"
import React from "react"
import { TgChannelsPicker } from "@/lib/components/TgChannelsPicker/TgChannelsPicker"
import PhoneNumberList from "@/lib/components/PhoneNumberList/PhoneNumberList"
import { useTgChannelsPickerLogic } from "@/lib/components/TgChannelsPicker/useTgChannelsPickerLogic";
import { usePhoneNumberListLogic } from "@/lib/components/PhoneNumberList/usePhoneNumberListLogic";

export interface TgChannelsAndPhoneNumbersPickerProps {
  tgChannelsPickerLogic: ReturnType<typeof useTgChannelsPickerLogic>;
  phoneNumberListLogic: ReturnType<typeof usePhoneNumberListLogic>;
};

export function TgChannelsAndPhoneNumbersPicker(props: TgChannelsAndPhoneNumbersPickerProps) {
  return (
    <Box>

      {props.phoneNumberListLogic.phoneNumbers.length < 1 ? (
        <>
          <Typography paragraph>Авторизуйтесь под своим номером телефона.</Typography>
          <Typography paragraph>Вам также понадобятся Api ID и Api Hash, которые можно создать на сайте <Link href="https://my.telegram.org/" target="_blank">https://my.telegram.org/</Link> в разделе API development tools.</Typography>

          <PhoneNumberList {...props.phoneNumberListLogic} isInitiallyExpanded />
        </>
      ) : (
        <>
          <TgChannelsPicker {...props.tgChannelsPickerLogic} />
          <PhoneNumberList {...props.phoneNumberListLogic} />
        </>
      )}
    </Box>
  )
}
