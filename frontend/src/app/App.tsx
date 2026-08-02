import { Typography } from "@/components/ui/Typography";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 text-white">
      <Typography variant="h1">InfinityMoney</Typography>

      <Typography variant="h2">AI Stock Platform</Typography>

      <Typography variant="body">Production-grade Open Source Project</Typography>

      <Typography variant="small">Built with React + FastAPI + AI</Typography>

      <Typography variant="muted">Version 0.1.0</Typography>
    </div>
  );
}
