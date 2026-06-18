```markdown
# Codex-project Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the Codex-project, a TypeScript-based Next.js application. You'll learn about file naming, import/export styles, commit message tendencies, and how to write and locate tests. While no automated workflows were detected, this guide provides recommended commands and best practices to streamline your development process.

## Coding Conventions

### File Naming
- **Pattern:** camelCase
- **Example:**  
  - `userProfile.tsx`
  - `apiHandler.ts`

### Import Style
- **Pattern:** Alias-based imports (using path aliases instead of relative paths)
- **Example:**
  ```typescript
  import userService from '@/services/userService';
  import { Button } from '@/components/ui';
  ```

### Export Style
- **Pattern:** Default exports preferred
- **Example:**
  ```typescript
  // userProfile.tsx
  const UserProfile = () => { /* ... */ };
  export default UserProfile;
  ```

### Commit Patterns
- **Type:** Freeform (no enforced structure)
- **Prefixes:** None required
- **Average Length:** 33 characters
- **Example:**  
  ```
  Add user authentication logic
  Fix bug in profile update
  ```

## Workflows

_No automated workflows detected in this repository. Below are suggested manual workflows for common tasks._

### Start Development Server
**Trigger:** When beginning local development
**Command:** `/dev-start`

1. Open your terminal.
2. Run `npm run dev` to start the Next.js development server.
3. Visit `http://localhost:3000` in your browser.

### Add a New Component
**Trigger:** When creating a new UI component
**Command:** `/add-component`

1. Create a new file in `components/` using camelCase (e.g., `userCard.tsx`).
2. Write your component and export it as default.
   ```typescript
   const UserCard = () => { /* ... */ };
   export default UserCard;
   ```
3. Import the component using an alias in your page or parent component.
   ```typescript
   import UserCard from '@/components/userCard';
   ```

### Run Tests
**Trigger:** Before pushing changes or verifying functionality
**Command:** `/test`

1. Ensure your test files follow the `*.test.*` pattern (e.g., `userService.test.ts`).
2. Run the test command (commonly `npm test` or `yarn test`).
3. Review test output for failures.

## Testing Patterns

- **Framework:** Not explicitly detected; likely Jest or similar for TypeScript.
- **Test File Pattern:** Files named with `*.test.*` (e.g., `feature.test.ts`).
- **Example:**
  ```typescript
  // userService.test.ts
  import userService from '@/services/userService';

  describe('userService', () => {
    it('should fetch user data', async () => {
      const user = await userService.getUser(1);
      expect(user).toHaveProperty('id', 1);
    });
  });
  ```

## Commands
| Command         | Purpose                                 |
|-----------------|-----------------------------------------|
| /dev-start      | Start the Next.js development server    |
| /add-component  | Create and register a new UI component  |
| /test           | Run all test suites                     |
```
