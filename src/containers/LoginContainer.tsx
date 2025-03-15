import LoginForm from "@/components/ui/LoginForm";

export default function LoginContainer() {
  return (
    <div className="flex min-h-screen bg-zinc-900 text-white">
      <div className="w-full max-w-md mx-auto my-auto p-6">
        <div className="bg-zinc-800 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">Yönetici Paneli</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
