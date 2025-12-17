// components/ui/cards.tsx
import type { ReactNode, ButtonHTMLAttributes } from "react";


/* =========================
   CTA BUTTON
   ========================= */

export type CTAButtonVariant = "primary" | "secondary" | "dark";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: CTAButtonVariant;
}

export function CTAButton({
  children,
  variant = "primary",
  ...props
}: CTAButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-200";

  const variants: Record<CTAButtonVariant, string> = {
    primary: `${base} bg-white text-[var(--color-primary)] hover:opacity-90`,
    secondary: `${base} border border-white/40 text-white hover:bg-white/10`,
    dark: `${base} bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-soft)]`,
  };

  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
}

/* =========================
   LOCATION CARD
   ========================= */

interface LocationCardProps {
  title: string;
  description?: string;
}

export function LocationCard({ title, description }: LocationCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md transition">
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">
        {description ?? "Fully furnished • Max 4 students • All bills included"}
      </p>
    </div>
  );
}

/* =========================
   AMENITY CARD
   ========================= */

interface AmenityCardProps {
  label: string;
}

export function AmenityCard({ label }: AmenityCardProps) {
  return (
    <div className="rounded-2xl p-6 text-center bg-[var(--color-bg-muted)] hover:bg-white border border-transparent hover:border-[var(--color-border)] transition">
      <p className="font-medium">{label}</p>
    </div>
  );
}



