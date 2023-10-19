import CasinoIcon from "@mui/icons-material/Casino";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import NextLink from "next/link";

export const metadata = {
  title: {
    template: "%s | Drill Dice",
    default: "Drill Dice"
  },
  description: "Drill Dice - Pick a random drill for your climbing workout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000, color: "text.primary" }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                color="text.primary"
                style={{}}
              >
                <NextLink
                  href="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CasinoIcon sx={{ color: "text.secondary", mr: 1 }} />
                  Drill Dice
                </NextLink>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              mt: ["48px", "56px", "64px"],
              mb: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
