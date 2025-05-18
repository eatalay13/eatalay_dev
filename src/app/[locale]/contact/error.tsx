"use client";

import ErrorContent from "@/components/Error";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ error, reset }: Props) {
  return <ErrorContent error={error} reset={reset} />;
}

export default Error;
