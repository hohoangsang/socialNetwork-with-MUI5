import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"space-between"}
          sx={{ margin: "0 16px" }}
        >
          <Sidebar mode={themeMode} setMode={setThemeMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
