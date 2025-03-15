type AdminAuthLayoutProps = {
  children: React.ReactNode;
};

export default function AdminAuthLayout({ children }: AdminAuthLayoutProps) {
  return <div className="min-h-screen bg-zinc-900">{children}</div>;
}
