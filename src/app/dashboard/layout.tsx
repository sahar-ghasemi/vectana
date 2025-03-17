export default function DashboardLayout({
  main,
  sidebar,
}: {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-3">{sidebar}</div>
      <div className="col-span-9">{main}</div>
    </div>
  );
}
