"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 drop-shadow-lg">
          Internacionalização no React/Next
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-200 dark:text-gray-400 mt-2">
          Usando React com Next.js
        </h2>
      </div>

      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105">
        <p className="text-lg mb-6 text-center">{t("welcome_message")}</p>
        <p className="text-2xl font-semibold text-center text-blue-600 dark:text-blue-400 mb-8">
          {t("greeting", { name: "Usuário" })}
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => changeLanguage("pt-br")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Português
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-bold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-bold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300"
          >
            Español
          </button>
        </div>
      </div>
    </main>
  );
}
