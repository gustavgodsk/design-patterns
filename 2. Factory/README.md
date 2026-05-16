# Factory

Instead of calling a constructor directly, you call the factory, which spits out the created object

## Why

Encapsulates object creation: promotes loose coupling by abstracting away the concrete types from the code that uses the objects

## Use case examples

- **When object creation is complex**
- **You need to decide among various classes at runtime**
- **You want to hide creation details from the caller**
- **Prevent tight coupling** (the code using the object shouldn't have to know about the specific classes or logic to create them)

## Pitfalls

- **Overuse**: factory can be overkill if object creation is simple
- **Indirection**: you have to step into the factory to see how the object is created
- **Maintenance**: can become complex (use subclassing `Factory Method` pattern)

## Implementation

expose a single `create` method -> the concrete object creation is hidden inside this function

## Example

Instead of `if (type == "goblin") new Goblin()`, use `EnemyFactory.create(type)` -> specific class is decided inside factory

## Variations

`Factory Method`: a subclass decides which object to create
`Abstract Factory`: a factory that creates families of related objects
