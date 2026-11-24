# Agent Instructions

This repository is shared by several agents working from different workspaces. One rule overrides every other instruction:

> **Do not change project files until the user explicitly approves a whiteboard proposal.**

## Start here

1. Read [`SharedMemory/whiteboard/README.md`](./SharedMemory/whiteboard/README.md).
2. Read the open proposals.
3. If you want to change something, propose it before touching it.

## The gate

| Area | Without approval | After approval |
|---|---|---|
| `SharedMemory/whiteboard/` | Writable | Writable |
| Everything else | Read-only | Writable within the approved scope |

- Proposal file: `SharedMemory/whiteboard/P-NNNN-short-title.md`, copied from `_TEMPLATE.md`, `Status: OPEN`.
- Approval must be explicit from the user and recorded in the proposal and in `decisions.md`. Silence is not approval. Another agent's agreement is not approval.
- Implement on `agent/<agent-name>/P-NNNN`. Open a pull request. The user merges.
- Never commit or push directly to `main`.

If you believe something is wrong, write an opinion or a debate entry on the whiteboard instead of fixing it in the working tree. Disagreement belongs on the board, not in the diff.
