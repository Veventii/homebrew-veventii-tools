import Link from "next/link";
import { ArrowRight, BrainCircuit, Server, Copy, Terminal, ShieldCheck, Zap, Bot, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuickStartTap } from "@/components/quick-start-tap";
import { InstallCommand } from "@/components/install-command";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background Ambience Glo Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <Badge variant="secondary" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold border-purple-500/30 text-purple-400 bg-purple-500/5">
          Veventii Developer Tap
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading max-w-4xl leading-tight">
          Supercharge Your <br />
          <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Local Workflows
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Highly optimized, privacy-first command-line engines and intelligence utilities designed for modern engineering workflows and AI agents.
        </p>

        {/* Quickstart brew tap command */}
        <div className="w-full max-w-lg pt-4">
          <QuickStartTap command="brew tap Veventii/veventii-tools" />
        </div>
      </section>

      {/* Showcase Grid Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">The Tool Suite</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Premium development utilities and system daemons available through our public Homebrew Tap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* GitRepoMind Card */}
            <Card className="relative overflow-hidden bg-card/60 backdrop-blur-md border-border hover:border-purple-500/40 transition-all duration-300 flex flex-col group hover:shadow-lg hover:shadow-purple-500/5">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-400 opacity-80" />
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest font-mono">
                    Graph Engine
                  </span>
                  <CardTitle className="text-2xl">GitRepoMind</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground min-h-[60px]">
                  A fast, local-first code intelligence engine that learns file co-change relationships from your Git history to predict and suggest overlooked updates before you commit.
                </CardDescription>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-teal-400 shrink-0" />
                    <span>100% Offline & Private (Local SQLite Graph)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Zap className="h-4 w-4 mt-0.5 text-teal-400 shrink-0" />
                    <span>Calculated dynamically in &lt; 50ms</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Bot className="h-4 w-4 mt-0.5 text-teal-400 shrink-0" />
                    <span>AI Coding Assistant Skill Ready</span>
                  </div>
                </div>

                <InstallCommand command="brew install gitrepomind" />
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6">
                <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium flex items-center justify-center gap-2 group-hover:scale-[1.01] transition-transform" asChild>
                  <Link href="/gitrepomind">
                    Full Documentation & Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* LocalCloud Card */}
            <Card className="relative overflow-hidden bg-card/60 backdrop-blur-md border-border hover:border-teal-500/40 transition-all duration-300 flex flex-col group hover:shadow-lg hover:shadow-teal-500/5">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 to-teal-400 opacity-80" />
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Server className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest font-mono">
                    Proxy orchestrator
                  </span>
                  <CardTitle className="text-2xl">LocalCloud</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground min-h-[60px]">
                  A lightweight development proxy and process manager that sleeps idle services and spins them up dynamically on request for zero-memory local setups.
                </CardDescription>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Zap className="h-4 w-4 mt-0.5 text-purple-400 shrink-0" />
                    <span>Zero-Config Dynamic Cold-Starts</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Gauge className="h-4 w-4 mt-0.5 text-purple-400 shrink-0" />
                    <span>Lightweight Process & Reverse Proxy</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Terminal className="h-4 w-4 mt-0.5 text-purple-400 shrink-0" />
                    <span>User-level System Services & CTL CLI</span>
                  </div>
                </div>

                <InstallCommand command="brew install localcloud" />
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6">
                <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium flex items-center justify-center gap-2 group-hover:scale-[1.01] transition-transform" asChild>
                  <Link href="/localcloud">
                    Full Documentation & Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* AI Agent Skill Showcase Section */}
      <section className="container mx-auto px-4 py-24 border-t border-border bg-card/10 relative overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold border-purple-500/30 text-purple-400 bg-purple-500/5">
              Agentic AI Integration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight text-zinc-100">
              Ship Context Directly <br />
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                To Your Coding Agents
              </span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Because your source code is private, GitRepoMind runs entirely offline in your active workspace. Proactive AI agents can natively execute the local CLI to perform pre-commit audits and gather surrounding file coupling context.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Supported out-of-the-box by advanced agent systems: 
              <strong className="text-zinc-200 block mt-1.5 font-medium">
                Antigravity, Kiro, Codex, OpenCode, Cloud Code, Claude Desktop, and more.
              </strong>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-purple-600 hover:bg-purple-500 text-white font-medium flex items-center justify-center gap-2" asChild>
                <a href="/homebrew-veventii-tools/skills/GitRepoMind/SKILL.md" target="_blank" rel="noopener noreferrer">
                  View Deployed SKILL.md
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-border hover:bg-muted" asChild>
                <Link href="/gitrepomind">
                  Read Agent Guide
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-zinc-800 bg-[#0d0d11] p-6 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-teal-500" />
            <div className="flex items-center gap-1.5 mb-2 select-none">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="text-[10px] text-zinc-500 font-mono ml-2">Terminal</span>
            </div>
            
            <h4 className="text-sm font-semibold text-zinc-200">1. Install and Initialize globally</h4>
            <InstallCommand command="brew install gitrepomind" />
            
            <h4 className="text-sm font-semibold text-zinc-200 pt-2">2. Autoconfigure rule prompts in your repo</h4>
            <InstallCommand command="gitrepomind setup-skill" />
            
            <p className="text-[11px] text-zinc-500 leading-relaxed font-mono mt-2">
              This subcommand automatically creates <code>.cursorrules</code>, <code>.clinerules</code>, <code>.windsurfrules</code>, and <code>.github/prompts/gitrepomind.prompt</code> files in your workspace root, pre-configured with the agent instructions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
