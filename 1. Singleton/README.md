# Singleton

## What

*Global State*: A single class instance (object) shared across whole application

## Why

Avoid conflicting instances and ensure all parts of program refer to same resource (single source of truth)

## Use case examples

- Global configuration/settings
- Single logging instance
- Single database client/pool

## Pitfalls

- *Global state*: tight coupling (class A can change singleton state which class B relies on)
- *Testing difficulties*: unit tests are harder -> use DI
- *Hidden dependencies*: refactoring is riskier
- *Concurrent environments*: singleton is not shared across processes

*Do not use* singleton just to avoid passing reference around. If two parts of code should not truly share the same instance (they just happen to create one each), a singleton could introduce unintended coupling.

## Implementation

Private constructor -> public getInstance method returns cached instance
