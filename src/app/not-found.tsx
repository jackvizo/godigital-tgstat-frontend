import { CommonLayout } from "@/lib/components/CommonLayout/CommonLayout";
import Typography from "@mui/material/Typography/index";
import React from "react";

export interface NotFoundProps extends React.PropsWithChildren {}

export default function NotFound(props: NotFoundProps) {
  return (
    <CommonLayout>
      <Typography component="h1" variant="h2" gutterBottom align="center">
        404
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Страница, которую вы ищете, не найдена.
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" paragraph>
        Возможно вы ввели неправильный адрес или страница была перемещена.
      </Typography>
      {props.children}
    </CommonLayout>
  );
}
