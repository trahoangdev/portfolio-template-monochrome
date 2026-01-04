---
title: Why I Switched to TypeScript
date: "2025-12-12"
description: From loose typing chaos to strict typing nirvana. A journey of finding bugs before they happen.
---

# Why I Switched to TypeScript

JavaScript is flexible, and that's its superpower. But flexibility often leads to chaos, especially in large codebases. This is why I made the switch to **TypeScript**, and I haven't looked back since.

## 1. The "Undefined" Nightmare

We've all seen it: `Uncaught TypeError: Cannot read property 'x' of undefined`. 

In JavaScript:
```javascript
function getUserName(user) {
  return user.name; // user might be undefined!
}
```

In TypeScript:
```typescript
interface User {
  name: string;
}

function getUserName(user: User) {
  return user.name; // Guaranteed to exist (mostly)
}
```

## 2. Developer Experience (DX)

TypeScript isn't just about catching errors; it's about the **coding experience**. The autocompletion and intelligence it provides in VS Code is unmatched.

- **Refactoring**: Rename a symbol, and it updates everywhere.
- **Intellisense**: Know exactly what properties an object has without `console.log` debugging.

## 3. Interfaces vs Types

One common question is when to use `interface` vs `type`.

```typescript
// Interface (Extendable)
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Type (Union/Intersection)
type Status = "success" | "error" | "loading";
```

## Conclusion

The initial learning curve of TypeScript is quickly offset by the time saved in debugging. If you're building anything larger than a script, TypeScript is a must-have.
