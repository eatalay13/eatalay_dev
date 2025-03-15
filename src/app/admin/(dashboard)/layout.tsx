type AdminDashboardLayoutProps = {
  children: React.ReactNode;
};

export default function AdminDashboardLayout({
  children,
}: AdminDashboardLayoutProps) {
  return (
    <div>
      <h1>Admin Dashboard Layout</h1>
      {children}
    </div>
  );
}
