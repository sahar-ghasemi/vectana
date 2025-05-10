"use client";
import { useSession } from "next-auth/react";

export default function TestSession() {
  const { data: session, status } = useSession();
  return (
    <pre
      style={{
        background: "#f3f4f6",
        padding: 16,
        borderRadius: 8,
        color: "#222",
      }}
    >
      <strong>Session status:</strong> {status}
      {"\n"}
      <strong>Session data:</strong>
      {"\n"}
      {JSON.stringify(session, null, 2)}
    </pre>
  );
}
