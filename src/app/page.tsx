import PublicLayout from "./public-layout";

export default function Home() {
  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">صفحه اول سایت</h1>
      </div>
    </PublicLayout>
  );
}
