import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      {loading ? <Spinner /> : <h1>Loading Complete ✅</h1>}
    </div>
  );
}
