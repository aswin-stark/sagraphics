import Header from "./Header";
export default function GlossyBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05060b]">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#05060b] to-black" />

      {/* Primary Glossy Glow */}
      <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full
        bg-orange-500/25 blur-[180px]" />

      {/* Secondary Glow */}
      <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full
        bg-purple-600/20 blur-[180px]" />

      {/* Bottom Ambient Glow */}
      <div className="absolute bottom-[-200px] left-1/4 w-[500px] h-[500px] rounded-full
        bg-blue-500/10 blur-[160px]" />

      {/* Glossy Light Reflection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[60%]
          bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
      </div>

      {/* Soft Vignette (Luxury Depth) */}
      <div className="absolute inset-0 pointer-events-none
        bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}