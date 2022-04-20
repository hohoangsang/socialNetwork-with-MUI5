import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  p: "16px 24px",
  borderRadius: "10px",
};

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

function AddPost() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Tooltip
        title="Add post"
        sx={{
          position: "fixed",
          bottom: "16px",
          left: { sm: "16px", xs: "calc(50% - 25px)" },
        }}
        onClick={() => setIsOpen(true)}
      >
        <Fab color="primary" aria-label="Add post">
          <Add />
        </Fab>
      </Tooltip>

      {isOpen && (
        <Modal
          open={isOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClose={() => setIsOpen(false)}
        >
          <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
            <Typography variant="h6" color="gray" textAlign={"center"}>
              Creat post
            </Typography>
            <UserBox>
              <Avatar
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
                sx={{ width: 30, height: 30 }}
              ></Avatar>
              <Typography variant="p" fontWeight={600}>
                Sang
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="success" />
              <VideoCameraBack color="secondary" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </Modal>
      )}
    </Box>
  );
}

export default AddPost;
