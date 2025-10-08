import React, { useEffect } from "react";
import { IS_LIVE } from "../lib/config.js";

export default function HeadTags() {
  useEffect(() => {
    const name = "robots";
    let tag = document.head.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", IS_LIVE ? "index,follow" : "noindex,nofollow");
    return () => {
      // leave tag in place; value will be updated on next mount
    };
  }, []);

  return null;
}
