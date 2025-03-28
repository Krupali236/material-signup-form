import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomOutlineButton from "../Button/CustomOutlineBtn";
import CustomContainedButton from "../Button/CustomContainedBtn";
import { useNavigate } from "react-router-dom";
export default function SignupAlert({ open, handleClose }) {
  const navigate = useNavigate();
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="success-dialog"
      >
        <Box
          sx={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#0faf82",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <CheckCircleIcon
            sx={{ color: "white", fontSize: 40, fill: "white" }}
          />
        </Box>

        {/* Dialog Title */}
        <DialogTitle id="success-dialog" sx={{ fontWeight: "bold" }}>
          Sign Up Successful!
        </DialogTitle>

        <DialogContent>
          <Typography variant="body1" sx={{ mt: 1, textAlign: "left" }}>
            Welcome aboard! Your account has been created successfully. You can
            now log in and start exploring.
          </Typography>
        </DialogContent>

        {/* Divider */}
        <Divider />

        {/* Dialog Actions */}
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <CustomOutlineButton onClick={handleClose} color="#0faf82">
            Cancel
          </CustomOutlineButton>

          <CustomContainedButton onClick={() => navigate("/signin")}>
            Go to Login
          </CustomContainedButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
