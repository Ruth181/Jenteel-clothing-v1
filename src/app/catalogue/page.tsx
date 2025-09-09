import Catalogue from "@/components/sections/catalogue";
import { Suspense } from "react";

export default function CataloguePage() {
  return (
      <Suspense>
        <Catalogue/>
      </Suspense>
  );
}
