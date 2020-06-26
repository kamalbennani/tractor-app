import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Spacer,
  Avatar,
  Typography,
  Button,
  MailOutlined,
  Icon,
  LockedOutlined,
} from "@aircall/tractor";

export const AccountPage = () => (
  <Box padding="14px 16px 13px">
    <Spacer alignItems="center" fluid direction="vertical" space="xs">
      <Avatar size="large">RI</Avatar>
      <Spacer direction="vertical" space="xxxs" alignItems="center">
        <Typography variant="heading" weight="bold">
          Reviewer IOS
        </Typography>
        <Typography variant="body" weight="light">
          IOS review - DONT DELETE
        </Typography>
        <Link to="/">
          <Button mode="link" size="xSmall">
            Edit
          </Button>
        </Link>
      </Spacer>
    </Spacer>
    <Spacer direction="vertical" space="s" fluid>
      <Typography variant="subheading" weight="bold">
        Credentials
      </Typography>
      <Spacer space="xs" alignItems="center" fluid>
        <Icon component={MailOutlined} size="24px" />
        <Spacer direction="vertical" space="xxxs" fluid>
          <Typography variant="body" weight="medium">
            reviewer+mas@aircall.io
          </Typography>
          <Typography variant="caption">Email</Typography>
        </Spacer>
      </Spacer>
      <Spacer
        space="xs"
        alignItems="center"
        fluid
        justifyContent="space-between"
      >
        <Spacer alignItems="center" fluid space="xs">
          <Icon component={LockedOutlined} size="24px" />
          <Spacer direction="vertical" space="xxxs" fluid>
            <Typography variant="body" weight="medium">
              ••••••••••••••••••
            </Typography>
            <Typography variant="caption">Password</Typography>
          </Spacer>
        </Spacer>
        <Button mode="link" size="xSmall">
          Change
        </Button>
      </Spacer>
    </Spacer>
  </Box>
);
