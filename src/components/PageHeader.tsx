import React from "react";
import Avatar from "./Avatar";
import { USERS } from "../data/users";
import Logo from "./Logo";

export default function PageHeader({ title }: { title?: string; }) {
  return (
    <>
      <div id="content-header">
        <h2>{title}</h2>
      </div>
      <div id="content-header-mobile">
        {
          title === "Home" ? 
          (<div id="content-header-home">
            <Avatar user={USERS[0]} />
            <Logo size={38} />
          </div>) 
          : 
          (<h2>{title}</h2>)
        }
      </div>
    </>
    
  );
}