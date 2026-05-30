import Link from "next/link";
import { ArrowLeft, BrainCircuit, Sparkles, AlertCircle, Copy, Terminal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InstallCommand } from "@/components/install-command";

export default function GitRepoMindDocs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl relative">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none -z-10" />

      {/* Back button */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" /> Back to Suite
          </Link>
        </Button>
      </div>

      {/* Hero Head */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold border-purple-500/30 text-purple-400 bg-purple-500/5">
            Technical Guide
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
          GitRepoMind <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Documentation</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Complete technical reference, user manual, and integration instructions for GitRepoMind—the local-first Git history logical coupling engine.
        </p>
      </div>

      {/* Main content grid/list */}
      <div className="space-y-8">
        
        {/* Section 1 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-purple-400 font-mono text-sm">01.</span> Getting Started & Initialization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Once you install <code>gitrepomind</code> via Homebrew, navigate to the root directory of any Git repository in your terminal and initialize the logical coupling database:
            </p>
            <InstallCommand command="gitrepomind init" />
            <Alert className="bg-purple-500/5 border-purple-500/20 text-purple-200">
              <AlertCircle className="h-4 w-4 text-purple-400" />
              <AlertTitle className="text-purple-400">Under the Hood</AlertTitle>
              <AlertDescription className="text-xs leading-relaxed text-muted-foreground mt-1">
                This command walks your Git commit history from oldest to newest, diffs commits in parallel using a thread pool, creates logical coupling relationships, and persists a compact graph in <code>.git/gitrepomind/graph.redb</code>.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-purple-400 font-mono text-sm">02.</span> Querying Suggestions (`remind`)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Query logical coupling recommendations based on your current workspace files. GitRepoMind computes a directed confidence probability by default:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">A. Suggest from Uncommitted Changes (Staged + Unstaged)</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  Use this as a pre-flight checklist before finishing any coding task to catch missing updates:
                </p>
                <InstallCommand command="gitrepomind remind --uncommitted" />
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">B. Suggest from Staged (Indexed) Changes Only</h4>
                <InstallCommand command="gitrepomind remind --staged" />
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">C. Suggest for a Specific File</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  Find which files are historically tied to a specific file (returns the top 5 candidates):
                </p>
                <InstallCommand command="gitrepomind remind -f src/main.rs -k 5" />
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">D. Optional Symmetric Normalization</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  If you want to suppress &quot;hub&quot; files (global constants or central routers that change in almost every commit) and only focus on tightly symmetric co-changes, use the <code>--symmetric</code> flag:
                </p>
                <InstallCommand command="gitrepomind remind -f src/main.rs -k 5 --symmetric" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-purple-400 font-mono text-sm">03.</span> Reviewing Historical Evidence (`explain`)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              If a reminder seems surprising, inspect the exact historical evidence behind why GitRepoMind considers those files to be coupled:
            </p>
            <InstallCommand command="gitrepomind explain -f src/main.rs -t src/cli.rs" />
            
            <div className="rounded-lg border bg-zinc-950 font-mono text-xs p-4 text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
              <pre>{`Relationship Score: 100%
Observed Together:  3 commits
Last Seen:          yesterday (commit efb1d1f)

Recent commits where both files changed together:
  efb1d1f Update explain command header to clarify ambiguous commit heading
  2c00433 Configure git2 with vendored-openssl for cross-compilation
  3adadbc Initial commit with GitRepoMind source files`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-purple-400 font-mono text-sm">04.</span> Automate Background Syncing (`install-hooks`)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Keep your coupling graph completely up-to-date in the background without lag. Run this inside your repository to register Git hooks:
            </p>
            <InstallCommand command="gitrepomind install-hooks" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              This command appends a background-running <code>gitrepomind sync</code> trigger to your local repository&apos;s <code>post-commit</code>, <code>post-merge</code>, and <code>post-checkout</code> hooks. It operates in parallel and yields immediately, adding <strong>zero delay</strong> to your standard git commands.
            </p>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card className="relative overflow-hidden border-purple-500/30 bg-purple-500/5 hover:border-purple-500/40 transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Sparkles className="h-4 w-4" /> AI Superpower
            </div>
            <CardTitle className="text-xl">
              05. AI Coding Assistant Skill Integration
            </CardTitle>
            <CardDescription className="text-xs">
              Configure Cursor, Windsurf, Roo Code, or Cline to leverage local-first coupling context dynamically.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Since your source codebase is kept private, you can feed GitRepoMind instructions directly into AI coding tools as an <strong>Agent Skill</strong>. When an agent works on your code, it runs the CLI commands locally in your CWD to perform pre-commit audits.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-border bg-card/60">
                <h4 className="text-sm font-semibold mb-2 text-purple-300">Cursor / Windsurf Setup</h4>
                <ol className="list-decimal pl-4 text-xs text-muted-foreground space-y-2 leading-relaxed">
                  <li>Navigate to <strong>Settings</strong> &gt; <strong>Features</strong> &gt; <strong>MCP</strong>.</li>
                  <li>Click <strong>+ Add New MCP Tool</strong>.</li>
                  <li>Configure:
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li><strong>Name</strong>: <code>gitrepomind</code></li>
                      <li><strong>Type</strong>: <code>command</code></li>
                      <li><strong>Command</strong>: <code>gitrepomind serve</code></li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/60">
                <h4 className="text-sm font-semibold mb-2 text-purple-300">Roo Code / Cline Directive</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  Instruct your AI agent to act on your workspace by copying this directive into your system instructions or custom rules:
                </p>
                <InstallCommand command="When writing code, proactively use `gitrepomind remind -f <file>` to gather surrounding file coupling context. Before presenting changes, run `gitrepomind remind --uncommitted` to verify no related files (like tests or specs) were overlooked." />
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
