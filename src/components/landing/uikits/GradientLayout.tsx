export default function GradientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-b from-[#D5E6DD] to-[#3b7c58] text-black">
      {children}
    </div>
  );
}
