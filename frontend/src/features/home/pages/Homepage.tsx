import { Box } from "@/components/ui/layout/Box";

export default function HomePage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[var(--im-color-background)]">
      <Box className="w-full max-w-2xl rounded-2xl border border-[var(--im-color-border)] bg-[var(--im-color-surface)] p-10 shadow-[var(--im-shadow-lg)]">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-[var(--im-color-text-primary)]">
            ∞ InfinityMoney
          </h1>

          <p className="mt-4 text-[var(--im-color-text-secondary)]">
            AI Stock Price Prediction & Portfolio Optimization
          </p>
        </div>
      </Box>
    </section>
  );
}
