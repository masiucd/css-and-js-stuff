"use client";

import {useFormStatus} from "react-dom";

export function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      className="rounded-md bg-gray-900 px-4 py-2 text-gray-50  transition-colors hover:opacity-55"
      type="submit"
      aria-disabled={status.pending}
    >
      Create trip
    </button>
  );
}
