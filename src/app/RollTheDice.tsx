"use client";

import CasinoIcon from "@mui/icons-material/Casino";
import Fab from "@mui/material/Fab";
import { usePathname, useRouter } from "next/navigation";
import { drills } from "./(drills)/drills";

interface RollTheDiceProps {
  again?: boolean;
}

export default function RollTheDice({ again }: RollTheDiceProps) {
  const router = useRouter();
  const pathname = usePathname();

  const go = () => {
    let targetPathname = pathname;
    while (targetPathname === pathname) {
      // Prevent repeating the same drill
      const drill = drills[Math.floor(Math.random() * drills.length)];
      targetPathname = `/${drill.slug}`;
    }
    router.push(targetPathname);
  };

  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: (theme) => theme.spacing(2),
				m: '0 auto',
				left: 0,
				right: 0
      }}
      color="primary"
      variant="extended"
      onClick={go}
    >
      <CasinoIcon sx={{ mr: 1 }} />
      {again ? "Roll the dice again..." : "Roll the dice"}
    </Fab>
  );
}
