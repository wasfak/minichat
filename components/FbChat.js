"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function FbChat() {
  return (
    <FacebookProvider appId="356433460644885" chatSupport>
      <CustomChat pageId="255756390946541" />
    </FacebookProvider>
  );
}
