import React from "react";
import {
  Button,
  ThemeProvider,
  Typography,
  Box,
  Spacer,
  ArchiveOutlined,
  ChevronDownOutlined,
} from "@aircall/tractor";

import { AppLayout } from "./components/AppLayout";

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Box padding="14px 16px 13px">
          <Spacer justifyContent="space-between" alignItems="center" fluid>
            <Typography variant="displayM" weight="bold">
              To-do
            </Typography>
            <Spacer>
              <Button mode="link" size="small">
                Archive All <ArchiveOutlined />
              </Button>
              <Button mode="link" size="small">
                All numbers <ChevronDownOutlined />
              </Button>
            </Spacer>
          </Spacer>
        </Box>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
