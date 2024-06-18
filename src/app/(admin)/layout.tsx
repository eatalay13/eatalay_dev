interface AdminRootProps extends Readonly<{
    children: React.ReactNode;
}> { };

function AdminRootLayout({ children }: AdminRootProps) {
    return (
        <>
            {children}
        </>
    );
}

export default AdminRootLayout;