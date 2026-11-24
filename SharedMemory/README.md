# Shared Memory

Shared state for every agent working on this project, across any workspace, machine, or model. Git is the transport: an agent writes here and pushes; every other agent pulls the same state.

| Path | Purpose |
|---|---|
| [`whiteboard/`](./whiteboard/README.md) | Proposals, opinions, debates, and decisions. The approval gate lives here. |

## Rules

- `whiteboard/` is the only folder an agent may write to without approval.
- Decisions belong to the user and are recorded, never inferred.
- Keep entries short. Link to files instead of duplicating them.
- No secrets, tokens, or personal data.

## Outside this folder

The project itself — [`GOModels.md`](../GOModels.md), [`Models Benchmark/`](../Models%20Benchmark/README.md), [`README.md`](../README.md) — is read-only to agents until a whiteboard proposal is approved.
