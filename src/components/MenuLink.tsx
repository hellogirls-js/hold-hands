import React from "react";

export default function MenuLink({ icon, name }: {icon: JSX.Element; name: string}) {
  return (
    <div className="menu-link">
      <div className="menu-link-icon">{icon}</div>
      <div className="menu-link-name">{name}</div>
    </div>
  )
}