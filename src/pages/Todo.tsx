import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  ArchiveOutlined,
  Spacer,
  ChevronDownOutlined,
} from "@aircall/tractor";

export const TodoPage = () => (
  <Box padding="14px 8px 13px 16px">
    <Spacer
      space="xs"
      justifyContent="space-between"
      fluid
      alignItems="baseline"
    >
      <Typography variant="displayM" weight="bold">
        Todo
      </Typography>
      <Spacer>
        <Link to="/account">
          <Button mode="link" size="xSmall">
            Archive all <ArchiveOutlined />
          </Button>
        </Link>
        <Button mode="link" size="xSmall">
          All numbers <ChevronDownOutlined />
        </Button>
      </Spacer>
    </Spacer>
  </Box>
);
