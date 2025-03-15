"use client";

import { login } from "@/lib/actions/auth";
import { LoginRequest, loginSchema } from "@/lib/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full hover:cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800"
    >
      {pending ? (
        <div className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Giriş yapılıyor...
        </div>
      ) : (
        "Giriş Yap"
      )}
    </button>
  );
}

export default function LoginForm() {
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  async function handleSubmit(formData: FormData) {
    const result = await login({ errors: {}, message: "" }, formData);
    if (result?.message) {
      setError(result.message);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Kullanıcı Adı
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            {...register("username")}
            type="text"
            name="username"
            className="block w-full pl-10 px-4 py-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
            placeholder="Kullanıcı adınız"
          />
        </div>
        {errors.username && (
          <p className="mt-1.5 text-sm text-red-400">
            {errors.username.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Şifre
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            {...register("password")}
            type="password"
            name="password"
            className="block w-full pl-10 px-4 py-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
            placeholder="••••••••"
          />
        </div>
        {errors.password && (
          <p className="mt-1.5 text-sm text-red-400">
            {errors.password.message}
          </p>
        )}
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-900/30">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-300"
          >
            Beni hatırla
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Şifremi unuttum
          </a>
        </div>
      </div>

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
