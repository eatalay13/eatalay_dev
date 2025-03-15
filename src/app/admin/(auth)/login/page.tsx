import LoginContainer from "@/containers/LoginContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giriş Yap | Yönetici Paneli",
  description: "Yönetici paneline güvenli giriş yapın ve sitenizi yönetin",
};

export default function LoginPage() {
  return <LoginContainer />;
}
