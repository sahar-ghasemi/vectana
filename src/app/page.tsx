"use client";
import { LearningSection } from "@/components";
import PublicLayout from "./public-layout";
export default function Home() {
  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LearningSection />
      </div>
    </PublicLayout>
  );
}
