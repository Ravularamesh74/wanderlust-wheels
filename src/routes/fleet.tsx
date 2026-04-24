import { createFileRoute } from "@tanstack/react-router";
import { FleetMarketplace } from "@/components/fleet";

export const Route = createFileRoute("/fleet")({
  component: FleetPage,
  head: () => ({
    meta: [
      { title: "Our Fleet | Mallikarjuna Travels" },
      { name: "description", content: "Premium sedans, SUVs, and luxury coaches for your journey." },
    ],
  }),
});

function FleetPage() {
  return (
    <div className="pt-24">
      <FleetMarketplace />
    </div>
  );
}
