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
          An offline, Rust-powered code intelligence engine that learns your repository's human workflow history to predict logical co-changes and warn you about overlooked files before you commit.
        </p>
      </div>

      {/* What is GitRepoMind & Key Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-border bg-card/60 backdrop-blur-md relative overflow-hidden flex flex-col hover:border-purple-500/20 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-purple-400" />
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
              What is GitRepoMind?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>GitRepoMind</strong> is a fast, local-first code intelligence engine that learns file co-change relationships directly from your Git commit history.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have you ever updated a backend service file and forgot to update its corresponding test suite, translation file, or API documentation? GitRepoMind solves this.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By analyzing how files have historically changed together in your commits, GitRepoMind instantly predicts and suggests overlooked updates in your workspace with zero cloud dependencies.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60 backdrop-blur-md relative overflow-hidden flex flex-col hover:border-teal-500/20 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500 to-teal-400" />
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex-1">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 h-9 w-9 flex items-center justify-center font-bold text-sm">1</div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Catch Forgotten File Updates</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Compilers only catch syntax errors. GitRepoMind tells you: <em>&quot;Hey, developers usually update the OpenAPI spec whenever they edit this controller!&quot;</em>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0 h-9 w-9 flex items-center justify-center font-bold text-sm">2</div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Supercharge AI Coding Assistants</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Feed local-first logical coupling context directly to AI tools (Cursor, Roo Code, Cline) to ensure complete, robust multi-file code generations.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 h-9 w-9 flex items-center justify-center font-bold text-sm">3</div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Non-Intrusive & Blazing Fast</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Written in Rust, it analyzes over 100,000 commits in seconds, runs silently via Git hooks, and queries results in under 50 milliseconds with zero lag.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content grid/list */}
      <div className="space-y-8">
        
        {/* Section 1 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-purple-400 font-mono text-sm">01.</span> Introduction & Installation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              GitRepoMind is packaged as a single standalone Rust binary CLI. You can install it on your system using one of the methods below.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-sm font-semibold mb-2">Install via Homebrew (Recommended)</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  First tap the official Veventii tap repository, then install the pre-compiled binary:
                </p>
                <div className="space-y-2">
                  <InstallCommand command="brew tap Veventii/veventii-tools" />
                  <InstallCommand command="brew install gitrepomind" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Install from Crates.io</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  If you have Rust and Cargo installed, compile and install the stable release directly from Crates.io:
                </p>
                <InstallCommand command="cargo install gitrepomind" />
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Or Compile from Local Source</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  To build the latest master branch directly from the cloned repository source:
                </p>
                <InstallCommand command="cargo install --path ." />
              </div>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <h4 className="text-sm font-semibold">Repository Initialization</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Once installed, navigate to the root directory of any Git repository in your terminal and initialize the logical coupling database:
              </p>
              <InstallCommand command="gitrepomind init" />
              <Alert className="bg-purple-500/5 border-purple-500/20 text-purple-200 mt-4">
                <AlertCircle className="h-4 w-4 text-purple-400" />
                <AlertTitle className="text-purple-400">Under the Hood</AlertTitle>
                <AlertDescription className="text-xs leading-relaxed text-muted-foreground mt-1">
                  This command walks your Git commit history from oldest to newest, diffs commits in parallel using a thread pool, creates logical coupling relationships, and persists a compact graph in <code>.git/gitrepomind/graph.redb</code>.
                </AlertDescription>
              </Alert>
            </div>
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
                <div className="mt-3 rounded-lg border bg-zinc-950 font-mono text-xs p-4 text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
                  <pre>{`Detected:
  src/controllers/user_controller.rs

Suggested:
   90% docs/openapi.yaml
   80% tests/e2e/user_e2e_test.rs
   70% tests/unit/user_controller_test.rs`}</pre>
                </div>
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
              <Sparkles className="h-4 w-4" /> Agentic AI Superpower
            </div>
            <CardTitle className="text-xl">
              05. AI Coding Agent Skill Integration
            </CardTitle>
            <CardDescription className="text-xs">
              Equip advanced AI Coding Agents with the logical coupling intelligence of GitRepoMind.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Because your source code is private, the most secure and robust way to feed coupling context to AI coding models is through local execution. Proactive AI agents (such as <strong>Antigravity, Kiro, Codex, OpenCode, Cloud Code, and Claude Desktop</strong>) possess terminal tools and can execute the <code>gitrepomind</code> CLI directly inside your active local workspace.
            </p>

            <div className="space-y-4">
              
              {/* Setup Skill Command */}
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-3">
                <h4 className="text-sm font-semibold text-purple-300">Automatic Rule Prompt Setup</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Instead of copying and pasting rules manually, GitRepoMind includes a dedicated command to automatically register the Agent Skill rules in your repository workspace:
                </p>
                <InstallCommand command="gitrepomind setup-skill" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This command immediately creates pre-configured <code>.cursorrules</code>, <code>.clinerules</code>, <code>.windsurfrules</code>, <code>.roomodes</code>, and <code>.github/prompts/gitrepomind.prompt</code> workspace prompt files.
                </p>
              </div>

              {/* Sub-Resource Downloads */}
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-3">
                <h4 className="text-sm font-semibold text-purple-300">Agent Skill Sub-Resources</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The Agent Skill and its fallback setup guide are available as standalone sub-resources. You can point your AI agents directly to these files, or let the agent read the local fallback if the CLI is not yet installed:
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold" asChild>
                    <a href="/homebrew-veventii-tools/skills/GitRepoMind/SKILL.md" target="_blank" rel="noopener noreferrer">
                      View Deployed SKILL.md
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-border hover:bg-muted text-xs text-zinc-300" asChild>
                    <a href="/homebrew-veventii-tools/skills/GitRepoMind/INSTALL.md" target="_blank" rel="noopener noreferrer">
                      View Deployed INSTALL.md
                    </a>
                  </Button>
                </div>
              </div>

              {/* Skill Instructions Card */}
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-3">
                <h4 className="text-sm font-semibold text-purple-300">Manual Workspace Prompt & Rules</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If you prefer to configure your agent's system instructions manually, copy and paste the official Agent Skill directive below:
                </p>
                
                <div className="rounded-lg border bg-zinc-950 font-mono text-xs p-4 text-emerald-400 leading-relaxed overflow-x-auto shadow-inner space-y-2">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block select-none">Skill Prompts for Agents</span>
                  <pre className="text-zinc-300 whitespace-pre-wrap select-all">{`# GitRepoMind Agent Skill Instructions
You are equipped with GitRepoMind, a local-first Git logical coupling CLI engine that scans commit history to predict related file co-changes.

## Instructions
1. Before proposing or writing any multi-file code changes, proactively query GitRepoMind's logical coupling context by executing this CLI command in your active workspace CWD:
   $ gitrepomind remind -f <current_file_path> -k 5

2. Once you are done making changes and before completing your task, perform a pre-flight sanity audit to make sure you didn't overlook any related files (such as OpenAPI schemas, tests, documentation, or spec changes):
   $ gitrepomind remind --uncommitted

3. Fallback Installation:
   If the \`gitrepomind\` command is not found or fails with an installation/missing error, only then should you read the GitRepoMind installation guide to assist the developer:
   - Link: https://veventii.github.io/homebrew-veventii-tools/#tap-install
   - Local Guide: [INSTALL.md](file:///Users/milindu/Projects/Veventii/homebrew-veventii-tools/skills/GitRepoMind/INSTALL.md)`}</pre>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/60">
                <h4 className="text-sm font-semibold mb-2 text-purple-300">How Agents Leverage the Skill</h4>
                <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-2 leading-relaxed">
                  <li><strong>Proactive Retrieval</strong>: The agent runs a quick query in under 50ms and reads the co-change history candidates.</li>
                  <li><strong>Zero-Configuration</strong>: No global daemons or registry setups to configure or troubleshoot. The agent relies directly on the standard compiled CLI executable.</li>
                  <li><strong>Conditional Fallback</strong>: If the agent detects that the CLI is missing from the environment, it gracefully catches the error and reads the provided public URL to guide the user on how to run <code>brew install gitrepomind</code>.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
