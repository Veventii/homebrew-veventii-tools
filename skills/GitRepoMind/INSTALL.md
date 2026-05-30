# GitRepoMind Installation & Setup Manual

If GitRepoMind is not currently installed or initialized in your workspace, follow these standard steps to install it and activate local code coupling intelligence.

---

## 1. Installation via Homebrew (Recommended)

To install GitRepoMind globally on macOS or Linux, run these commands in your terminal:

```bash
# Add the Veventii developer tools tap repository
brew tap Veventii/veventii-tools

# Install the GitRepoMind binary
brew install gitrepomind
```

---

## 2. Repository Initialization

Before running queries, build your repository's logical coupling relationship database. Go to the root directory of your active Git repository and execute:

```bash
gitrepomind init
```
*This command scans your Git history, diffs commit logs in parallel, and establishes a secure local relationship graph in `.git/gitrepomind/graph.redb`.*

---

## 3. Automate Synchronization

To keep the coupling database synchronized with new commits automatically in the background without introducing terminal lag:

```bash
gitrepomind install-hooks
```
*This registers lightweight trigger background hooks to your local `post-commit`, `post-merge`, and `post-checkout` hooks.*
