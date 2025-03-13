"use client";
import { HighlightTextSection, LearningSection } from "@/components";
import PublicLayout from "./public-layout";
export default function Home() {
  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center grid grid-col-1 justify-center bg-gray-100">
        <HighlightTextSection />
        <LearningSection />
      </div>
    </PublicLayout>
  );
}
