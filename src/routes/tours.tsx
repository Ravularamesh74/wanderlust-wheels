import { createFileRoute } from "@tanstack/react-router";
import { Tours } from "@/components/tour";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Signature Tours | Mallikarjuna Travels" },
      { name: "description", content: "Explore our curated tours across India. From coastal drives to hill station escapes." },
    ],
  }),
});

export function ToursPage() {
  return (
    <div className="pt-24">
      <Tours />
    </div>
  );
}

// @ts-ignore
Route.options.component = ToursPage;
