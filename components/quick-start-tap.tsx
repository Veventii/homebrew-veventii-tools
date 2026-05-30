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

  const renderCommand = (cmd: string) => {
    const parts = cmd.split(" ");
    return parts.map((part, index) => {
      let className = "text-zinc-300"; // default off-white

      if (part.startsWith("-")) {
        className = "text-[#4ade80]"; // neon green for flags
      } else if (part === "&&" || part === "||" || part === "|") {
        className = "text-pink-400 font-semibold"; // pink for shell operators
      } else if (part.includes("/") || part.includes("\\") || part.includes(".") || part.startsWith("\"") || part.endsWith("\"")) {
        className = "text-amber-400/90"; // amber for paths, files, or quoted strings
      } else if (/^\d+$/.test(part)) {
        className = "text-purple-400"; // purple for digits
      } else if (index === 0 || (index > 0 && parts[index - 1] === "&&")) {
        className = "text-zinc-100 font-medium"; // brighter white for binary commands
      }

      return (
        <span key={index} className={`${className} whitespace-nowrap`}>
          {part}
          {index < parts.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-zinc-800 bg-[#0d0d11] font-mono text-sm shadow-inner w-full max-w-full overflow-hidden select-all">
      <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none max-w-full">
        <Terminal className="h-4 w-4 text-purple-400 shrink-0" />
        <code className="font-medium whitespace-nowrap">
          {renderCommand(command)}
        </code>
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

