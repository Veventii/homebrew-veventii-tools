import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Server, Cpu, AlertCircle, Copy, Terminal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InstallCommand } from "@/components/install-command";

export const metadata: Metadata = {
  title: "LocalCloud - Lightweight Dev Proxy & Process Orchestrator",
  description: "Lightweight development proxy and process manager with lazy-loading and cold starts for zero-memory local multi-service development setups.",
  openGraph: {
    title: "LocalCloud - Lightweight Dev Proxy & Process Orchestrator",
    description: "A lightweight development proxy and process manager that sleeps idle services and spins them up dynamically on request for zero-memory local setups.",
    url: "https://veventii.github.io/homebrew-veventii-tools/localcloud/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LocalCloud - Zero-Memory Orchestration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LocalCloud - Lightweight Dev Proxy & Process Orchestrator",
    description: "A lightweight development proxy and process manager that sleeps idle services and spins them up dynamically on request for zero-memory local setups.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://veventii.github.io/homebrew-veventii-tools/localcloud/",
  },
};

export default function LocalCloudDocs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl relative">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10" />

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
          <Badge variant="secondary" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold border-teal-500/30 text-teal-400 bg-teal-500/5">
            Orchestration & Proxy
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
          LocalCloud <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Documentation</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A lightweight development proxy and process manager that sleeps idle services and spins them up dynamically on request for zero-memory local setups.
        </p>
      </div>

      {/* Main content grid/list */}
      <div className="space-y-8">
        
        {/* Section 1 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-teal-400 font-mono text-sm">01.</span> Introduction & Installation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              LocalCloud is an elegant local development orchestrator for managing multi-service web apps with cold-start support. It comprises two core components:
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-2 leading-relaxed">
              <li><strong><code>localcloudd</code></strong>: A lightweight, lazy-loading reverse proxy daemon and process manager that sleeps idle services and starts them dynamically upon receiving an HTTP request.</li>
              <li><strong><code>localcloudctl</code></strong>: A responsive control CLI to reload configs, start/kill apps, print logs, and run health audits.</li>
            </ul>

            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-sm font-semibold mb-2">Install via Homebrew (Recommended)</h4>
                <InstallCommand command="brew install localcloud" />
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Or Compile from Source (Cargo)</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  If you prefer to compile manually from your clone directory, install both binaries into your Cargo path:
                </p>
                <InstallCommand command="cargo install --path ./localcloudd && cargo install --path ./localcloudctl" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-teal-400 font-mono text-sm">02.</span> Configurations & Default Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              LocalCloud loads configurations from a single centralized OS-specific TOML file:
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1.5 leading-relaxed font-mono">
              <li><strong>macOS</strong>: ~/Library/Application Support/localcloud/localcloud.toml</li>
              <li><strong>Linux</strong>: ~/.config/localcloud/localcloud.toml</li>
              <li><strong>Windows</strong>: %APPDATA%\localcloud\localcloud.toml</li>
            </ul>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold">Sample <code>localcloud.toml</code></h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Define your web projects, domain mappings, idle timeout limits (in seconds), and development commands below:
              </p>
              
              <div className="rounded-lg border bg-zinc-950 font-mono text-xs p-4 text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
                <pre>{`[apps.project-alpha]
alias = "alpha"
domain = "alpha.local"
path = "/absolute/path/to/project-alpha"
port = 3001
idle_timeout = 600
command = "npm run dev"`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-teal-400 font-mono text-sm">03.</span> Quick Start Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 text-xs text-muted-foreground space-y-3.5 leading-relaxed">
              <li>Create the TOML configuration file in the default location specified in Section 2.</li>
              <li>Map your local <code>.local</code> domains to your loopback address in your host file (<code>/etc/hosts</code> on macOS/Linux, or <code>C:\Windows\System32\drivers\etc\hosts</code> on Windows):
                <div className="mt-1.5"><InstallCommand command="127.0.0.1 alpha.local" /></div>
              </li>
              <li>Launch the orchestrator daemon:
                <div className="mt-1.5"><InstallCommand command="localcloudd" /></div>
              </li>
              <li>Visit the configured domain through the lazy-proxy port: <code>http://alpha.local:8080</code>. The daemon interceptor automatically warms up your app on the first request!</li>
            </ol>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <span className="text-teal-400 font-mono text-sm">04.</span> CLI Commands Reference (<code>localcloudctl</code>)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Control your active services, reload routes, or debug environment setups using the control client CLI:
            </p>
            <div className="rounded-lg border bg-zinc-950 font-mono text-xs p-4 text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
              <pre>{`# List all configured applications and their statuses
localcloudctl ls

# Inspect active process threads managed by the proxy
localcloudctl ps

# Forcefully start/warm up a specific application alias
localcloudctl start alpha

# Kill a running process managed by the daemon
localcloudctl kill alpha

# Tail logs of a specific application
localcloudctl logs alpha

# Hot-reload configurations after updating TOML
localcloudctl reload

# Verify host-level loopback mappings
localcloudctl hosts check

# Run environment sanity audits
localcloudctl doctor`}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card className="relative overflow-hidden border-teal-500/30 bg-teal-500/5 hover:border-teal-500/40 transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs tracking-wider uppercase mb-1">
              <Cpu className="h-4 w-4" /> System Service
            </div>
            <CardTitle className="text-xl">
              05. Running `localcloudd` as a Background Daemon
            </CardTitle>
            <CardDescription className="text-xs">
              Configure the proxy daemon to boot automatically on system startup without open terminal requirements.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* macOS launchd */}
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <h4 className="text-sm font-semibold mb-2 text-teal-300">macOS (launchd agent)</h4>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                LocalCloud provides standard service wrappers. You can install user-level background daemons without needing <code>sudo</code> permissions:
              </p>
              <div className="space-y-2 mb-4">
                <InstallCommand command="localcloudctl service install" />
                <InstallCommand command="localcloudctl service start" />
                <InstallCommand command="localcloudctl service status" />
              </div>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                If creating plist files manually, save this agent definition into <code>~/Library/LaunchAgents/com.veventii.localcloudd.plist</code>:
              </p>
              <div className="rounded-lg border bg-zinc-950 font-mono text-[10px] p-4 text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
                <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.veventii.localcloudd</string>
    <key>ProgramArguments</key>
    <array>
      <string>/Users/YOUR_USER/.cargo/bin/localcloudd</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/tmp/localcloudd.log</string>
    <key>StandardErrorPath</key>
    <string>/tmp/localcloudd.err.log</string>
  </dict>
</plist>`}</pre>
              </div>
            </div>

            {/* Linux systemd */}
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <h4 className="text-sm font-semibold mb-2 text-teal-300">Linux (systemd --user)</h4>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                Create a local systemd description under <code>~/.config/systemd/user/localcloudd.service</code>:
              </p>
              <div className="rounded-lg border bg-zinc-950 font-mono text-[10px] p-4 text-emerald-400 leading-relaxed overflow-x-auto shadow-inner mb-3">
                <pre>{`[Unit]
Description=LocalCloud daemon
After=network.target

[Service]
ExecStart=%h/.cargo/bin/localcloudd
Restart=always
RestartSec=2

[Install]
WantedBy=default.target`}</pre>
              </div>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                Reload systemd and start the unit:
              </p>
              <div className="space-y-2">
                <InstallCommand command="systemctl --user daemon-reload" />
                <InstallCommand command="systemctl --user enable --now localcloudd" />
              </div>
            </div>

            {/* Windows NSSM */}
            <div className="p-4 rounded-xl border border-border bg-card/60">
              <h4 className="text-sm font-semibold mb-2 text-teal-300">Windows (NSSM Wrapper)</h4>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Wrap the Windows binary file (<code>localcloudd.exe</code>) inside an NSSM background service wrapper:
              </p>
              <div className="space-y-2">
                <InstallCommand command="nssm install localcloudd &quot;$env:USERPROFILE\\.cargo\\bin\\localcloudd.exe&quot;" />
                <InstallCommand command="nssm start localcloudd" />
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
