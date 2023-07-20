import { IconDiamonds } from "@tabler/icons-react";
import React from "react";

export default function Logo({ size = 24 }: { size?: number}) {
  return (
    <div id="menu-logo">
      <div className="dia-icon left"><IconDiamonds size={size} /></div>
      <div className="dia-icon right"><IconDiamonds size={size} /></div>
    </div>
  );
}