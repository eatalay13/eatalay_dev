import DashboardContainer from "@/containers/admin/DashboardContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
};

export default function AdminHome() {
  return <DashboardContainer />;
}
