import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from "@mui/material";

const iconContainer = {
  padding: ".7rem",
  display: "flex",
  fontSize: "22px",
  cursor: "pointer",
  background: "#696969",
  color: "white",
};

export default function CopyToClipboardInput({ link }) {
  const [copiedText, setCopiedText] = React.useState("");

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        boxShadow: "none",
        border: "1px solid #696969",
        borderRadius: "6px",
      }}
    >
      <InputBase
        disabled={true}
        value={link}
        readOnly={true}
        sx={{ ml: 1, flex: 1, border: 0 }}
        placeholder="Referral Link"
        inputProps={{ "aria-label": "referral link" }}
      />
      <Divider orientation="vertical" color="inherit" flexItem />
      <CopyToClipboard text={link} onCopy={() => setCopiedText(link)}>
        <Tooltip
          title={copiedText === link ? "Copied!" : "Copy To Clipboard"}
          placement="top"
        >
          <div style={iconContainer}>
            <ContentCopyIcon />
          </div>
        </Tooltip>
      </CopyToClipboard>
    </Paper>
  );
}
