import { IconHome2, IconSearch, IconBell, IconMail, IconBookmark, IconUser } from "@tabler/icons-react";
import React from "react";
import MenuLink from "./MenuLink";
import { USERS } from "../data/users";
import Avatar from "./Avatar";
import Logo from "./Logo";

function UserArea({ user }: { user: User }) {
  return (
    <div id="user-area">
      <div id="user-area-icon">
        <Avatar user={user} size={38} />
      </div>
      <div id="user-area-info">
        <div id="user-area-name">
          {user.display_name}
        </div>
        <div id="user-area-username">
          @{user.username}
        </div>
      </div>
    </div>
  )
}

export default function LeftMenu() {
  return (
    <div id="left-menu">
      <div id="top-area">
        <div id="menu-logo-full">
          <Logo />
          <div id="menu-logo-text">
            Hold-Hands
          </div>
        </div>
        <nav id="left-menu-nav">
          <MenuLink icon={<IconHome2 size={32} />} name="Home" navigateTo="/" />
          <MenuLink icon={<IconSearch size={32} />} name="Explore" />
          <MenuLink icon={<IconBell size={32} />} name="Notifications" />
          <MenuLink icon={<IconMail size={32} />} name="Messages" />
          <MenuLink icon={<IconBookmark size={32} />} name="Bookmarks" />
          <MenuLink icon={<IconUser size={32} />} name="Profile" />
        </nav>
      </div>
        <div id="bottom-area">
          <UserArea user={USERS[0]} />
        </div>
    </div>
  )
}