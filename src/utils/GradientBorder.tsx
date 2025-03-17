export default function GradientBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl p-0.5 bg-gradient-to-br from-theme-purple-default via-fuchsia-400 to-blue-500">
      <div className="rounded-[calc(1.5rem-0.25rem)]">{children}</div>
    </div>
  );
}
