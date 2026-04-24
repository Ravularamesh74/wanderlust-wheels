import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/Booking";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book Now | Mallikarjuna Travels" },
      { name: "description", content: "Reserve your premium car or tour package today. Professional service guaranteed." },
    ],
  }),
});

function BookingPage() {
  return (
    <div className="pt-24">
      <Booking />
    </div>
  );
}
