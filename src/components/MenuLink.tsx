import React from "react";
import { useNavigate } from "react-router";

export default function MenuLink({ icon, name, navigateTo }: {icon: JSX.Element; name: string; navigateTo?: string}) {

  const navigate = useNavigate();

  return (
      <div className="menu-link" id={`menu-link-${name.toLocaleLowerCase()}`} onClick={() => navigateTo && navigate(navigateTo) }>
        <div className="menu-link-icon">{icon}</div>
        <div className="menu-link-name">{name}</div>
      </div>
    )
}