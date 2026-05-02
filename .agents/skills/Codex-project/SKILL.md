```markdown
# Codex-project Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development conventions and workflows for the Codex-project, a TypeScript codebase built with the Next.js framework. You will learn about file naming, import/export styles, commit patterns, and how to write and organize tests in this repository.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `userProfile.ts`, `apiHandler.ts`

### Import Style
- Use **alias imports** to reference modules.
  - Example:
    ```typescript
    import userService from '@/services/userService';
    ```

### Export Style
- Use **default exports** for modules.
  - Example:
    ```typescript
    const userProfile = () => { /* ... */ };
    export default userProfile;
    ```

### Commit Patterns
- Commit messages are **freeform** (no strict type prefixes).
- Some commits may use prefixes, but it's not enforced.
- Average commit message length: ~45 characters.
  - Example:  
    ```
    Add user authentication middleware
    ```

## Workflows

_No automated or CI workflows detected in this repository._

## Testing Patterns

- **Test Framework:** Unknown (not specified in the repository).
- **Test File Pattern:** Files named with `*.test.*`.
  - Example: `userProfile.test.ts`
- Tests are placed alongside the code or in dedicated test directories.

## Commands

| Command | Purpose |
|---------|---------|
| /test   | Run all test files matching `*.test.*` pattern |
| /lint   | Lint the codebase according to project standards |
| /build  | Build the Next.js project for production        |

```