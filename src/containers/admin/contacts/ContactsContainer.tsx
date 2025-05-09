"use client";

import PageHeader from "@/components/layout/admin/PageHeader";
import {
  deleteContactMessage,
  getContactMessages,
  updateContactStatus,
} from "@/lib/actions/contact";
import { ContactStatus } from "@prisma/client";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  FiCheck,
  FiClock,
  FiEye,
  FiRefreshCw,
  FiTrash,
  FiX,
} from "react-icons/fi";

type Contact = {
  id: string;
  name: string;
  email: string;
  title: string;
  message: string;
  isRead: boolean;
  status: ContactStatus;
  createdAt: Date;
  updatedAt: Date;
};

type ContactsContainerProps = {
  initialPage?: number;
  initialStatus?: ContactStatus;
};

export default function ContactsContainer({
  initialPage = 1,
  initialStatus,
}: ContactsContainerProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(initialPage);
  const [status, setStatus] = useState<ContactStatus | undefined>(
    initialStatus
  );
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    limit: 10,
    hasNextPage: false,
    hasPrevPage: false,
  });

  // İletişim mesajlarını yükle (useCallback ile sonsuz döngü oluşmasını önlüyoruz)
  const loadContacts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getContactMessages(page, 10, status);
      setContacts(data.messages);
      setPagination(data.pagination);
    } catch (error) {
      console.error("İletişim mesajları yüklenirken hata:", error);
    } finally {
      setLoading(false);
    }
  }, [page, status]);

  // Durum değiştiğinde ya da sayfa değiştiğinde listeyi güncelle
  useEffect(() => {
    loadContacts();

    // URL'i güncelle
    const searchParams = new URLSearchParams();
    if (page > 1) searchParams.set("page", page.toString());
    if (status) searchParams.set("status", status);

    const query = searchParams.toString();
    const url = query ? `/admin/contacts?${query}` : "/admin/contacts";
    router.push(url, { scroll: false });
  }, [page, status, router, loadContacts]);

  // Mesaj durumunu güncelle
  const handleStatusChange = async (id: string, newStatus: ContactStatus) => {
    try {
      await updateContactStatus(id, newStatus);
      // Mesaj durumu güncellendi, listeyi yenile
      loadContacts();
    } catch (error) {
      console.error("Mesaj durumu güncellenirken hata:", error);
    }
  };

  // Mesajı sil
  const handleDelete = async (id: string) => {
    if (window.confirm("Bu mesajı silmek istediğinizden emin misiniz?")) {
      try {
        await deleteContactMessage(id);
        // Mesaj silindi, listeyi yenile
        loadContacts();
      } catch (error) {
        console.error("Mesaj silinirken hata:", error);
      }
    }
  };

  // Sayfa değiştirme
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Durum filtreleme
  const handleStatusFilter = (newStatus?: ContactStatus) => {
    setStatus(newStatus);
    setPage(1); // Filtre değiştiğinde ilk sayfaya dön
  };

  // Mesaj durumuna göre renk ve metin belirle
  const getStatusBadge = (status: ContactStatus) => {
    switch (status) {
      case ContactStatus.PENDING:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            <FiClock className="mr-1" /> Beklemede
          </span>
        );
      case ContactStatus.PROCESSING:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <FiRefreshCw className="mr-1" /> İşleniyor
          </span>
        );
      case ContactStatus.COMPLETED:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <FiCheck className="mr-1" /> Tamamlandı
          </span>
        );
      case ContactStatus.REJECTED:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
            <FiX className="mr-1" /> Reddedildi
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="İletişim Mesajları"
        description="İletişim formundan gönderilen mesajları görüntüle ve yönet"
      />

      {/* Filtreler */}
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleStatusFilter(undefined)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              status === undefined
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
            }`}
          >
            Tümü
          </button>
          <button
            onClick={() => handleStatusFilter(ContactStatus.PENDING)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              status === ContactStatus.PENDING
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
            }`}
          >
            Beklemede
          </button>
          <button
            onClick={() => handleStatusFilter(ContactStatus.PROCESSING)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              status === ContactStatus.PROCESSING
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
            }`}
          >
            İşleniyor
          </button>
          <button
            onClick={() => handleStatusFilter(ContactStatus.COMPLETED)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              status === ContactStatus.COMPLETED
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
            }`}
          >
            Tamamlandı
          </button>
          <button
            onClick={() => handleStatusFilter(ContactStatus.REJECTED)}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              status === ContactStatus.REJECTED
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
            }`}
          >
            Reddedildi
          </button>
        </div>
      </div>

      {/* Mesaj Tablosu */}
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 text-center">
            <div
              className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-blue-600 rounded-full"
              role="status"
            >
              <span className="sr-only">Yükleniyor...</span>
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              İletişim mesajları yükleniyor...
            </p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              Hiç iletişim mesajı bulunamadı.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
              <thead className="bg-zinc-50 dark:bg-zinc-900/50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
                  >
                    Gönderen
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
                  >
                    Konu
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
                  >
                    Tarih
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
                  >
                    Durum
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
                  >
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-700">
                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className={
                      !contact.isRead ? "bg-blue-50 dark:bg-blue-900/10" : ""
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">
                          {contact.name}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {contact.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-zinc-900 dark:text-white line-clamp-1">
                        {contact.title}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {format(
                          new Date(contact.createdAt),
                          "dd MMM yyyy HH:mm",
                          { locale: tr }
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(contact.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleStatusChange(contact.id, "PROCESSING")
                          }
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          title="İşleme Al"
                        >
                          <FiRefreshCw className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(contact.id, "COMPLETED")
                          }
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          title="Tamamlandı"
                        >
                          <FiCheck className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(contact.id, "REJECTED")
                          }
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          title="Reddet"
                        >
                          <FiX className="h-4 w-4" />
                        </button>
                        <Link
                          href={`/admin/contacts/${contact.id}`}
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                          title="Görüntüle"
                        >
                          <FiEye className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          title="Sil"
                        >
                          <FiTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={!pagination.hasPrevPage}
              className="px-3 py-1 rounded-md text-sm font-medium bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Önceki
            </button>

            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    pageNum === page
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={!pagination.hasNextPage}
              className="px-3 py-1 rounded-md text-sm font-medium bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sonraki
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
