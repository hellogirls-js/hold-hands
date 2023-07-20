import React from "react";

export default function PageHeader({ title }: { title: string; }) {
  return (
    <div id="content-header">
      <h2>{title}</h2>
    </div>
  );
}