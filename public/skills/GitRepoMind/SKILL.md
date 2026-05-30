---
name: gitrepomind
description: Predictive local code intelligence engine. Uses Git history and logical coupling graph to suggest related files that should change together when editing a file. Excellent for catching overlooked test updates, API specs, translation files, and cross-module couplings.
---

# GitRepoMind Agent Skill Instructions
You are equipped with GitRepoMind, a local-first Git logical coupling CLI engine that scans commit history to predict related file co-changes.

## Core Concepts
- **Logical Coupling Graph**: GitRepoMind analyzes human workflow history to map how often files are changed together in the same commits. This catches implicit dependencies (e.g. updating a controller requires updating an API spec, translation file, or test suite) that static compiler analysis misses.

## Instructions
1. Before proposing or writing any multi-file code changes, proactively query GitRepoMind's logical coupling context by executing this CLI command in your active workspace CWD:
   $ gitrepomind remind -f <current_file_path> -k 5

2. Once you are done making changes and before completing your task, perform a pre-flight sanity audit to make sure you didn't overlook any related files (such as OpenAPI schemas, tests, documentation, or spec changes):
   $ gitrepomind remind --uncommitted

3. Fallback Installation:
   If the `gitrepomind` command is not found or fails with an installation/missing error, only then should you read the GitRepoMind installation guide to assist the developer:
   - Public Guide: https://veventii.github.io/homebrew-veventii-tools/#tap-install
   - Local Fallback: [INSTALL.md](file:///Users/milindu/Projects/Veventii/homebrew-veventii-tools/skills/GitRepoMind/INSTALL.md)
