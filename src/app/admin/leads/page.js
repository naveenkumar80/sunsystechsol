import { Suspense } from "react";
import LeadsPageClient from "./LeadsPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LeadsPageClient />
    </Suspense>
  );
}
