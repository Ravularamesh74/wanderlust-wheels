import { useState, useMemo } from "react";
import { ArrowRight, Check } from "lucide-react";

const VEHICLES = [
  {
    name: "Executive Sedan",
    pricePerKm: 12,
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    name: "Premium SUV",
    pricePerKm: 18,
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
  },
  {
    name: "Luxury Coupe",
    pricePerKm: 30,
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    vehicle: VEHICLES[0],
    distance: 120,
    phoneVerified: false,
  });

  const [otp, setOtp] = useState("");

  const fare = useMemo(() => {
    return form.distance * form.vehicle.pricePerKm;
  }, [form]);

  const update = (k: string, v: any) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-6xl font-bold">
            Book your <span className="text-purple-500">Ride</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Real-time pricing. Premium vehicles. Instant confirmation.
          </p>

          {/* VEHICLES */}
          <div className="mt-8 space-y-4">
            {VEHICLES.map((v) => (
              <div
                key={v.name}
                onClick={() => update("vehicle", v)}
                className={`cursor-pointer border p-4 flex gap-4 ${
                  form.vehicle.name === v.name ? "border-purple-500" : ""
                }`}
              >
                <img src={v.img} className="w-24 h-16 object-cover" />

                <div>
                  <div className="font-semibold">{v.name}</div>
                  <div className="text-sm text-gray-400">
                    ₹{v.pricePerKm}/km
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="border p-6 bg-[#0a0a0a]">

          {submitted ? (
            <div className="text-center py-20">
              <div className="bg-purple-600 w-14 h-14 mx-auto flex items-center justify-center">
                <Check />
              </div>
              <h3 className="text-3xl mt-6">Booking Confirmed</h3>
              <p className="text-gray-400 mt-2">
                Driver will contact you shortly
              </p>
            </div>
          ) : (
            <>
              {/* FORM */}
              <div className="grid grid-cols-2 gap-4">

                <input
                  placeholder="Full Name"
                  className="input"
                  onChange={(e) => update("name", e.target.value)}
                />

                {/* PHONE + OTP */}
                <div className="col-span-1 space-y-2">
                  <input
                    placeholder="Phone"
                    className="input w-full"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />

                  {!form.phoneVerified ? (
                    <div className="flex gap-2">
                      <button
                        className="bg-purple-600 px-3 py-2 text-xs"
                        onClick={() => alert("OTP sent (mock: 1234)")}
                      >
                        Send OTP
                      </button>

                      <input
                        placeholder="OTP"
                        className="input w-20 text-center"
                        value={otp}
                        onChange={(e) => {
                          setOtp(e.target.value);
                          if (e.target.value === "1234") {
                            update("phoneVerified", true);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="text-green-400 text-xs">
                      ✅ Verified
                    </div>
                  )}
                </div>

                <input
                  placeholder="Pickup"
                  className="input col-span-2"
                  onChange={(e) => update("pickup", e.target.value)}
                />

                <input
                  placeholder="Drop"
                  className="input col-span-2"
                  onChange={(e) => update("drop", e.target.value)}
                />

                {/* DISTANCE */}
                <div className="col-span-2 space-y-4">

                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Distance</span>
                    <span className="text-purple-400">
                      {form.distance} km
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={form.distance}
                    onChange={(e) =>
                      update("distance", Number(e.target.value))
                    }
                    className="w-full"
                  />

                </div>
              </div>

              {/* SUMMARY */}
              <div className="mt-6 border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Vehicle</span>
                  <span>{form.vehicle.name}</span>
                </div>

                <div className="flex justify-between">
                  <span>Distance</span>
                  <span>{form.distance} km</span>
                </div>

                <div className="flex justify-between text-green-400 font-bold">
                  <span>Total Fare</span>
                  <span>₹{fare}</span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  if (!form.phoneVerified) {
                    alert("Verify phone first");
                    return;
                  }

                  if (!form.name || !form.pickup || !form.drop) {
                    alert("Fill all fields");
                    return;
                  }

                  setSubmitted(true);
                }}
                className="mt-6 w-full bg-purple-600 py-4 flex justify-center items-center gap-2"
              >
                Confirm Booking <ArrowRight size={16} />
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        .input {
          background: black;
          border: 1px solid #333;
          padding: 10px;
          font-size: 14px;
          color: white;
          width: 100%;
        }
        .input:focus {
          border-color: #a855f7;
          outline: none;
        }
      `}</style>
    </section>
  );
}