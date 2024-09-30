import { Avatar, Tooltip, Typography, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";

export default function UserAvatar() {
  const user = useSelector(selectUser);
  const { name, email } = user;

  const AvatarTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
    ({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        color: "rgba(240, 244, 249, 0.75)",
        fontSize: theme.typography.pxToRem(12),
      },
    })
  );

  return (
    <AvatarTooltip
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 0],
              },
            },
          ],
        },
      }}
      placement="right"
      title={
        <Fragment>
          <Typography color="#f0f4f9" fontSize={"12px"} fontWeight={"700"}>
            LearnLingo account
          </Typography>
          <b>{name}</b>
          <p>{email}</p>
        </Fragment>
      }>
      <Avatar
        aria-label="user"
        sx={{
          bgcolor: "#121417",
          width: 40,
          height: 40,
          cursor: "pointer",
        }}>
        {name[0].toUpperCase()}
      </Avatar>
    </AvatarTooltip>
  );
}
