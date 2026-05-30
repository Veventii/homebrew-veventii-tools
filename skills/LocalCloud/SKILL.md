---
name: localcloud
description: Local development proxy and process manager with cold-start support. Automatically sleeps idle services and spins them up dynamically on request for zero-memory local setups. Controlled via a responsive local CLI.
---

# LocalCloud Agent Skill Instructions
You are equipped with LocalCloud, a lightweight local development orchestrator and reverse proxy daemon (`localcloudd`) controlled via the CLI (`localcloudctl`).

## Core Concepts
- **Lazy-Loading Reverse Proxy**: The daemon listens on a port (e.g., `8080`) and routes incoming traffic to your local apps. If an app is idle, it sleeps it. On the first incoming HTTP request to that app's domain (e.g. `http://alpha.local:8080`), it spins it up automatically (cold-start).
- **Process Orchestration**: LocalCloud manages background dev processes so developers don't have to keep dozens of terminal windows open.

## Instructions
1. **Explore Active Services**:
   When working in a workspace that uses multiple local service dependencies, proactively inspect the status of your configured services:
   $ localcloudctl ls

2. **Check Process Threads & CPU Usage**:
   To see currently active sub-processes and thread statuses managed by the proxy:
   $ localcloudctl ps

3. **Manage Service States**:
   - Start/warm up an app manually before routing test scripts:
     $ localcloudctl start <app_alias>
   - Stop/sleep a running service to reclaim resources:
     $ localcloudctl kill <app_alias>
   - Hot-reload configurations after modifying `localcloud.toml`:
     $ localcloudctl reload

4. **Debugging Logs**:
   To inspect or tail local service logs:
   $ localcloudctl logs <app_alias>

5. **Sanity Check & Network Diagnostics**:
   - Audit the local environment (configs, system services):
     $ localcloudctl doctor
   - Verify host-level loopback DNS rules:
     $ localcloudctl hosts check

6. **Fallback Installation**:
   If the `localcloudctl` or `localcloudd` command is not found or fails with an installation/missing error, only then should you read the LocalCloud installation guide to assist the developer:
   - Public Guide: https://veventii.github.io/homebrew-veventii-tools/#tap-install
   - Local Fallback: [INSTALL.md](file:///Users/milindu/Projects/Veventii/homebrew-veventii-tools/skills/LocalCloud/INSTALL.md)
