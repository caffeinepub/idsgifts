import { ChevronLeft, Lock, Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type Screen = "landing" | "verification";

interface Toast {
  id: number;
  message: string;
}

// ── Constants ──────────────────────────────────────────────────────────────
const SOCIAL_PROOFS = [
  { name: "Rahul S.", city: "Mumbai" },
  { name: "Priya K.", city: "Delhi" },
  { name: "Amit V.", city: "Bengaluru" },
  { name: "Sneha R.", city: "Hyderabad" },
  { name: "Vikram M.", city: "Chennai" },
  { name: "Pooja D.", city: "Kolkata" },
  { name: "Arjun T.", city: "Pune" },
  { name: "Deepa N.", city: "Ahmedabad" },
];

const HOW_STEPS = [
  "Claim your iPhone 17 Pro Max",
  "Complete a quick verification (30s)",
  "Enter your delivery address",
  "Receive your free iPhone!",
];

const VERIFY_URL = "https://singingfiles.com/show.php?l=0&u=2503564&id=74349";

// ── Helpers ────────────────────────────────────────────────────────────────
function vibrate() {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(100);
  }
}

// ── LandingPage ────────────────────────────────────────────────────────────
function LandingPage({ onClaim }: { onClaim: () => void }) {
  const [pressing, setPressing] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [proofIndex, setProofIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const proof = SOCIAL_PROOFS[proofIndex % SOCIAL_PROOFS.length];
      const id = Date.now();
      setToasts((prev) => [
        ...prev,
        {
          id,
          message: `👤 ${proof.name} from ${proof.city}, India just claimed an iPhone!`,
        },
      ]);
      setProofIndex((i) => i + 1);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 2500);
    }, 5000);
    return () => clearInterval(interval);
  }, [proofIndex]);

  const handleClaim = useCallback(() => {
    vibrate();
    setPressing(true);
    setTimeout(() => {
      setPressing(false);
      onClaim();
    }, 200);
  }, [onClaim]);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <span
          className="text-2xl font-extrabold tracking-tight"
          style={{ color: "#7ED957" }}
        >
          IDSGIFTS
        </span>
        <button
          type="button"
          data-ocid="nav.toggle"
          className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16 pt-4">
        {/* Urgency Banner */}
        <div
          className="rounded-full px-4 py-2 text-center text-sm font-bold mb-5 tracking-wide"
          style={{
            backgroundColor: "rgba(126,217,87,0.15)",
            color: "#3a7a1a",
            border: "1px solid rgba(126,217,87,0.4)",
          }}
        >
          🔥 Limited Stock — Only Today!
        </div>

        {/* Section Title */}
        <h2 className="text-xl font-bold text-center text-gray-900 mb-5">
          Our Latest Products
        </h2>

        {/* Product Card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid #D8C7A3",
            boxShadow:
              "0 8px 32px 0 rgba(0,0,0,0.10), 0 1px 4px 0 rgba(216,199,163,0.3)",
          }}
        >
          {/* Image area */}
          <div className="bg-gray-50 flex items-center justify-center pt-6 pb-2 px-8">
            <img
              src="/assets/generated/iphone17-front.dim_600x900.png"
              alt="iPhone 17 Pro Max Cosmic Orange"
              className="w-48 object-contain drop-shadow-xl"
              style={{ maxHeight: "260px" }}
            />
          </div>

          {/* Card Body */}
          <div className="px-5 py-5">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: "rgba(126,217,87,0.15)",
                  color: "#3a7a1a",
                }}
              >
                ✅ In Stock
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600">
                🔴 3 left
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-1">
              iPhone 17 Pro Max
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              512GB · Cosmic Orange · Unlocked · Dual eSIM
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl font-extrabold text-gray-900">
                $0.00
              </span>
              <span
                className="text-sm font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#7ED957", color: "#1a4a0a" }}
              >
                FREE
              </span>
              <span className="text-sm line-through text-gray-400">$1,299</span>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              data-ocid="landing.primary_button"
              onClick={handleClaim}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-150 ${
                pressing ? "scale-95" : "scale-100 hover:scale-[1.02]"
              }`}
              style={{
                backgroundColor: "#7ED957",
                color: "#1a4a0a",
                boxShadow: pressing
                  ? "none"
                  : "0 4px 16px rgba(126,217,87,0.5)",
              }}
            >
              <Lock className="w-4 h-4" />
              Claim Now
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="text-xs text-gray-400">🔒 Secure</span>
              <span className="text-xs text-gray-400">📦 Free Delivery</span>
              <span className="text-xs text-gray-400">⚡ Instant</span>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-8 rounded-2xl bg-gray-50 p-4">
          <h4 className="text-sm font-bold text-gray-700 mb-2">How it works</h4>
          <ol className="space-y-2">
            {HOW_STEPS.map((step) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm text-gray-600"
              >
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: "#7ED957", color: "#1a4a0a" }}
                >
                  {HOW_STEPS.indexOf(step) + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </main>

      {/* Social proof toasts */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 max-w-[240px]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="animate-slide-up bg-white rounded-xl px-3 py-2 text-xs font-medium text-gray-700 shadow-lg"
            style={{ border: "1px solid #D8C7A3" }}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="px-4 py-6 text-center text-xs text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          className="underline hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

// ── VerificationPage ───────────────────────────────────────────────────────
function VerificationPage({ onBack }: { onBack: () => void }) {
  const [wavesLoading, setWavesLoading] = useState(false);
  const [storyLoading, setStoryLoading] = useState(false);

  const handleInstall = useCallback((setLoading: (v: boolean) => void) => {
    vibrate();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.open(VERIFY_URL, "_blank", "noopener,noreferrer");
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins animate-fade-in">
      {/* Dark Banner */}
      <div
        className="relative w-full flex flex-col items-center pt-10 pb-6"
        style={{
          background: "linear-gradient(to bottom, #101724, #0b0f16)",
          minHeight: "280px",
        }}
      >
        <button
          type="button"
          data-ocid="verification.cancel_button"
          onClick={onBack}
          className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-4">
          iPhone 17 PRO
        </h1>
        <img
          src="/assets/generated/iphone17-orange.dim_800x800.jpg"
          alt="iPhone 17 Pro Max Camera"
          className="w-48 h-48 object-cover rounded-2xl"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }}
        />
      </div>

      {/* Content */}
      <div className="px-4 py-5 space-y-4">
        {/* Message Card */}
        <div
          className="rounded-2xl p-5 text-center"
          style={{
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            border: "1px solid #f0ebe0",
          }}
        >
          <p className="text-base font-bold text-gray-800 leading-snug">
            Final step: Install &amp; open the app once and get your{" "}
            <span style={{ color: "#7ED957" }}>iPhone 17 PRO MAX</span> then
            enter your delivery address 🎁👇
          </p>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Verification Progress</span>
            <span>65%</span>
          </div>
          <div
            className="w-full h-2.5 rounded-full"
            style={{ backgroundColor: "#e5e7eb" }}
          >
            <div
              className="h-2.5 rounded-full animate-progress"
              style={{ backgroundColor: "#7ED957" }}
            />
          </div>
        </div>

        {/* Primary Button — Waves App */}
        <button
          type="button"
          data-ocid="verification.primary_button"
          onClick={() => handleInstall(setWavesLoading)}
          disabled={wavesLoading || storyLoading}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-base font-bold text-white transition-all duration-150 active:scale-95 disabled:opacity-70"
          style={{ backgroundColor: "#0b1f3a" }}
        >
          {wavesLoading ? (
            <>
              <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin-icon" />
              Opening…
            </>
          ) : (
            "Install the Waves App and Register"
          )}
        </button>

        {/* Secondary Button — Story TV */}
        <button
          type="button"
          data-ocid="verification.secondary_button"
          onClick={() => handleInstall(setStoryLoading)}
          disabled={wavesLoading || storyLoading}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-base font-bold text-white transition-all duration-150 active:scale-95 disabled:opacity-70"
          style={{ backgroundColor: "#0b1f3a" }}
        >
          {storyLoading ? (
            <>
              <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin-icon" />
              Opening…
            </>
          ) : (
            "स्टोरी टीवी इंस्टॉल करें और खोलें"
          )}
        </button>

        {/* Status */}
        <p className="text-center text-sm text-gray-400 font-medium">
          ⏳ Waiting for verification...
        </p>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-400">
          ⚡ Takes less than 30 seconds! Complete one offer ⬆️
        </p>
      </div>

      {/* Footer */}
      <footer className="px-4 py-6 text-center text-xs text-gray-400 border-t border-gray-100 mt-4">
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          className="underline hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("landing");

  return (
    <div className="mx-auto" style={{ maxWidth: "430px" }}>
      {screen === "landing" ? (
        <LandingPage onClaim={() => setScreen("verification")} />
      ) : (
        <VerificationPage onBack={() => setScreen("landing")} />
      )}
    </div>
  );
}
