"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-muted/30 font-mono text-xs border-border text-zinc-300">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-zinc-500 select-none shrink-0">$</span>
        <code className="text-emerald-400 font-medium whitespace-nowrap">{command}</code>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 shrink-0"
        onClick={handleCopy}
      >
        {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
      </Button>
    </div>
  );
}
