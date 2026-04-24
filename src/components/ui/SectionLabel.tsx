export function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.3em] text-signal mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-signal" /> / {num} — {title}
    </div>
  );
}
