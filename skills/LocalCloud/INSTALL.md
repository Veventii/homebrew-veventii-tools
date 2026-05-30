# LocalCloud Installation & Setup Manual

If LocalCloud is not currently installed or running on your system, follow these standard steps to install it and spin up the background orchestration proxy.

---

## 1. Installation via Homebrew (Recommended)

To install LocalCloud globally on macOS or Linux, run these commands in your terminal:

```bash
# Add the Veventii developer tools tap repository
brew tap Veventii/veventii-tools

# Install LocalCloud (installs both localcloudd and localcloudctl)
brew install localcloud
```

---

## 2. Configuration Setup

LocalCloud loads configurations from a single centralized OS-specific TOML file:
- **macOS**: `~/Library/Application Support/localcloud/localcloud.toml`
- **Linux**: `~/.config/localcloud/localcloud.toml`
- **Windows**: `%APPDATA%\localcloud\localcloud.toml`

Create this file and configure your local apps:

```toml
[apps.project-alpha]
alias = "alpha"
domain = "alpha.local"
path = "/absolute/path/to/project-alpha"
port = 3001
idle_timeout = 600
command = "npm run dev"
```

---

## 3. Host Mapping

Map your configured domain (e.g. `alpha.local`) to your loopback address in your host file (`/etc/hosts` on macOS/Linux, or `C:\Windows\System32\drivers\etc\hosts` on Windows):

```text
127.0.0.1 alpha.local
```

---

## 4. Run the Daemon

### Running in the Foreground
To test that the proxy server works normally, start the daemon:

```bash
localcloudd
```

### Running in the Background (Recommended)
You can configure the proxy daemon to boot automatically on system startup. LocalCloud provides built-in service helpers:

```bash
# Register the user-level launch agent / systemd service
localcloudctl service install

# Start the background daemon
localcloudctl service start

# Confirm the status of the service
localcloudctl service status
```

---

## 5. Verify the Orchestrator

Open a new terminal session and run the following client commands to verify setup:

```bash
# List all apps and their active status
localcloudctl ls

# Check local host configuration settings
localcloudctl hosts check

# Run environment sanity audits
localcloudctl doctor
```
