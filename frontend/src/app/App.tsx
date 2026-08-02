import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 bg-zinc-950">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
