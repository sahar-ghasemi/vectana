export default function DashboardLayout({
  main,
  sidebar,
}: {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4">{sidebar}</div>
      <div className="col-span-8">{main}</div>
    </div>
  );
}
