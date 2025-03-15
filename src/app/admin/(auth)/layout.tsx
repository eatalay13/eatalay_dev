type AdminAuthLayoutProps = {
  children: React.ReactNode;
};

export default function AdminAuthLayout({ children }: AdminAuthLayoutProps) {
  return (
    <div>
      <h1>Admin Auth Layout</h1>
      {children}
    </div>
  );
}
