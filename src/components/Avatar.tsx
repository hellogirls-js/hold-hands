import "./styles/Avatar.css";
import React from "react";

export default function Avatar({ user, size = 48}: { user: User, size?: number }) {
  return (
    <div className="user-icon">
      <img width={size} height={size} src={user.icon_url} alt="user icon" />
    </div>
  )
}