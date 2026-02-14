import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-9xl">404</h1>
      <h2 className="text-4xl">Page Not Found</h2>
      <p className="mt-2 text-lg">
        The page you are looking for does not exist.
      </p>

      <Link href="/app" className="my-10 text-blue-500 hover:underline">
        <Button>Go back to Home</Button>
      </Link>

      <p className="text-gray-500">
        <b>Need help?</b> Reach out us at <Link href="#">support@app.com</Link>
      </p>
    </div>
  );
}
