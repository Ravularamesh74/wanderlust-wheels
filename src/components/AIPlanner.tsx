import { useState, useEffect, useRef } from "react";
import { Send, Sparkles, MapPin, Car, Calendar, Info, History } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROMPTS = [
    "5-day Goa beach trip for 4, mid budget",
    "Weekend hill station escape near Bangalore",
    "Corporate team outing for 25, luxury",
    "Backwater honeymoon in Kerala",
];

type Message = {
    role: "ai" | "user";
    text: string;
    data?: any;
};

export function AIPlanner() {
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "ai",
            text: "Welcome to MALLIKARJUNA AI. I am your personal travel architect. Share your vision, and I will craft the perfect itinerary, select your ideal vehicle, and calculate costs in real-time.",
        },
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, typing]);

    const send = async (text?: string) => {
        const t = (text ?? input).trim();
        if (!t) return;

        setMessages((m) => [...m, { role: "user", text: t }]);
        setInput("");
        setTyping(true);

        setTimeout(async () => {
            const isGoa = t.toLowerCase().includes("goa");
            const isKerala = t.toLowerCase().includes("kerala");
            const isSouth = t.toLowerCase().includes("south") || t.toLowerCase().includes("bangalore") || t.toLowerCase().includes("coorg");

            let destination = "Custom Route";
            let itineraryText = "I've optimized a unique route based on your request. We'll start with a premium pickup from your preferred location.";

            if (isGoa) {
                destination = "Goa Coastal Loop";
                itineraryText = "Your premium Goa escape is ready. We'll explore the vibrant beaches of North Goa, the historic streets of Panjim, and the tranquil shores of the South.";
            } else if (isKerala) {
                destination = "Kerala Backwaters";
                itineraryText = "A lush green journey awaits. We will explore the tea estates of Munnar, the tranquil backwaters of Alleppey, and the historic charm of Kochi.";
            } else if (isSouth) {
                destination = "Western Ghats Escape";
                itineraryText = "A cool mountain retreat. We'll drive through the coffee plantations of Coorg and finish in the misty hills of Wayanad.";
            }

            const aiResponse: Message = {
                role: "ai",
                text: itineraryText,
                data: {
                    destination,
                    days: t.includes("day") ? parseInt(t.match(/\d+/)?.[0] || "5") : 5,
                    vehicle: t.includes("luxury") ? "BMW 5 Series / Audi A6" : "Innova Crysta / Toyota Fortuner",
                    price: t.includes("budget") ? "₹35,000 - ₹50,000" : "₹65,000 - ₹95,000",
                    itinerary: [
                        { day: 1, title: "Arrival & City Tour", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
                        { day: 2, title: "Nature Exploration", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
                        { day: 3, title: "Signature Experience", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
                    ]
                }
            };

            setMessages((m) => [...m, aiResponse]);
            setTyping(false);
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl h-[750px] relative">
                
                {/* ARCHITECT HEADER */}
                <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02] backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 flex items-center justify-center border border-purple-500/30">
                                <Sparkles size={24} className="text-purple-400" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-[#0a0a0a] rounded-full" />
                        </div>
                        <div>
                            <h3 className="text-lg font-display uppercase tracking-wider">AI Architect</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                <span className="text-[10px] text-purple-400 uppercase tracking-widest font-mono">Neural Engine Online</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-500 hover:text-white">
                        <History size={20} />
                    </button>
                </div>

                {/* JOURNEY LOG */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-10 scroll-smooth custom-scrollbar">
                    <AnimatePresence initial={false}>
                        {messages.map((m, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`relative max-w-[90%] ${
                                    m.role === "user" 
                                        ? "bg-purple-600 text-white rounded-3xl rounded-tr-none shadow-lg shadow-purple-900/20" 
                                        : "bg-white/[0.03] border border-white/10 text-gray-200 rounded-3xl rounded-tl-none"
                                } p-6`}>
                                    <p className="text-[15px] leading-relaxed font-medium">{m.text}</p>

                                    {m.data && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="mt-8 pt-8 border-t border-white/5 space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">Mission Scope</div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-purple-500/10 rounded-xl">
                                                            <MapPin size={16} className="text-purple-400" />
                                                        </div>
                                                        <div className="text-sm font-bold tracking-tight">
                                                            {m.data.destination} <span className="text-gray-500 mx-2">/</span> {m.data.days} Days
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">Assigned Craft</div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-purple-500/10 rounded-xl">
                                                            <Car size={16} className="text-purple-400" />
                                                        </div>
                                                        <div className="text-sm font-bold tracking-tight">{m.data.vehicle}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20 rounded-2xl p-5 flex items-center justify-between">
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-[0.2em] text-purple-400/70 font-mono">Est. Investment</div>
                                                    <div className="text-2xl font-display text-purple-400 mt-1">{m.data.price}</div>
                                                </div>
                                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                                    <Info size={16} className="text-purple-400" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-3">
                                                {m.data.itinerary.map((d: any, idx: number) => (
                                                    <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                                                        <img src={d.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                                                            <div className="text-[9px] font-mono uppercase text-purple-400 mb-1">Day 0{d.day}</div>
                                                            <div className="text-[10px] font-bold leading-tight line-clamp-2">{d.title}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    
                    {typing && (
                        <div className="flex items-center gap-4 text-purple-400/80 italic text-sm py-4">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" />
                            </div>
                            <span className="font-mono text-[11px] uppercase tracking-widest">Synthesizing travel patterns...</span>
                        </div>
                    )}
                </div>

                {/* ACTION BAR */}
                <div className="p-8 bg-black/80 backdrop-blur-xl border-t border-white/5">
                    {messages.length === 1 && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                            <div className="flex flex-wrap gap-2">
                                {PROMPTS.map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => send(p)}
                                        className="text-[11px] font-medium px-4 py-2.5 border border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/5 hover:text-purple-400 transition-all bg-white/[0.02]"
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            send();
                        }}
                        className="flex gap-3"
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Describe your trip..."
                            className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500 transition-all"
                        />
                        <button 
                            disabled={typing || !input.trim()}
                            className="bg-purple-600 hover:bg-purple-500 disabled:opacity-30 text-white w-14 h-14 flex items-center justify-center rounded-2xl transition-all active:scale-95 shadow-xl shadow-purple-600/20"
                        >
                            <Send size={22} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}