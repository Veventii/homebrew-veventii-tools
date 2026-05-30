"use client";

import { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickStartTap({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-black font-mono text-sm border-border text-zinc-200 shadow-inner">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
        <Terminal className="h-4 w-4 text-purple-400 shrink-0" />
        <span className="text-zinc-500 select-none shrink-0">$</span>
        <code className="text-purple-300 font-medium whitespace-nowrap">{command}</code>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 shrink-0"
        onClick={handleCopy}
      >
        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}
