import { Box, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

function Feed() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, [1000]);

  return (
    <Box flex={4} p={2}>
      {isLoading ? (
        <>
          <Box mb={2}>
            <Stack direction={"row"} gap={2} mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={"100%"} />
            </Stack>
            <Skeleton variant="rectangular" height={118} />
          </Box>
          <Box mb={2}>
            <Stack direction={"row"} gap={2} mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={"100%"} />
            </Stack>
            <Skeleton variant="rectangular" height={118} />
          </Box>
          <>
            <Stack direction={"row"} gap={2} mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={"100%"} />
            </Stack>
            <Skeleton variant="rectangular" height={118} />
          </>
          <Box mb={2}>
            <Stack direction={"row"} gap={2} mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={"100%"} />
            </Stack>
            <Skeleton variant="rectangular" height={118} />
          </Box>
          <Box mb={2}>
            <Stack direction={"row"} gap={2} mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={"100%"} />
            </Stack>
            <Skeleton variant="rectangular" height={118} />
          </Box>
          <Box mb={2}>
            <Stack direction={"row"} gap={2} mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={"100%"} />
            </Stack>
            <Skeleton variant="rectangular" height={118} />
          </Box>
        </>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
}

export default Feed;
