import ContactsContainer from "@/containers/admin/contacts/ContactsContainer";
import { ContactStatus } from "@prisma/client";

export const metadata = {
  title: "İletişim Mesajları - Admin Paneli",
  description: "İletişim formundan gönderilen mesajları görüntüle ve yönet",
};

type ContactsPageProps = {
  searchParams: Promise<{ page?: string; status?: string }>;
};

async function ContactsPage({ searchParams }: ContactsPageProps) {
  const _searchParams = await searchParams;

  const page = _searchParams.page ? parseInt(_searchParams.page) : 1;
  const status = _searchParams.status as ContactStatus | undefined;

  return <ContactsContainer initialPage={page} initialStatus={status} />;
}

export default ContactsPage;
