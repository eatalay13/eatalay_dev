import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

function ErrorContent({ error, reset }: Props) {
  const t = useTranslations("Error");

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl px-6 text-center"
      >
        {/* Error icon */}
        <div className="mb-6 flex justify-center">
          <svg
            className="w-16 h-16 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            <path
              d="M12 7V13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="16.5" r="1" fill="currentColor" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-light text-center mb-4">{t("title")}</h1>

        {/* Error message */}
        <p className="text-gray-400 text-center mb-8 text-lg">
          {error.message || t("default")}
        </p>

        {/* Error code */}
        {error.digest && (
          <div className="overflow-hidden text-center mb-10">
            <div className="inline-block px-3 py-1 bg-[#1a1f29] rounded-full text-xs text-gray-400">
              <code>
                {t("errorCode")}: {error.digest}
              </code>
            </div>
          </div>
        )}

        {/* Button */}
        {reset && (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={reset}
              className="px-6 py-2.5 rounded-full bg-[#1a1f29] hover:bg-[#252b38] text-blue-400 border border-blue-400/20 font-medium transition-colors"
            >
              {t("tryAgain")}
            </motion.button>
          </div>
        )}

        {/* Decorative lines */}
        <div className="mt-20 flex justify-between items-center">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent to-blue-500/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mx-4"></div>
          <div className="flex-grow h-px bg-gradient-to-l from-transparent to-blue-500/30"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default ErrorContent;
