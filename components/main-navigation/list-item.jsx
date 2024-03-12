"use client";
import React, { useEffect, useState } from "react";

export default function ListItem() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const savedUserName = localStorage.getItem("name");
    setUserName(
      savedUserName
        ? savedUserName.charAt(0).toUpperCase() + savedUserName.slice(1)
        : ""
    );
  }, []);

  return <li>Welcome {userName}</li>;
}
