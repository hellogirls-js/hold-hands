import React from "react";
import { USERS } from "../data/users";

export default function Mention({ userId }: { userId: number }) {
  const user = USERS.filter(u => u.user_id === userId)[0];

  return (
    <div className="body-link">
      @{user.username}
    </div>
  )
}