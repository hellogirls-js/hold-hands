import React, { ReactNode } from "react";

export default function Timeline({ children }: { children: ReactNode }) {
  return (
    <div id="timeline">
      {children}
    </div>
  )
}