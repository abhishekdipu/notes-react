# Context

## what is context api in react?

- context provides a way to pass data throught the component tree without having to pass props down manually at every level

## why we need context api?

- say for example we have 5 component nested inside eachother, and have a 'state: username' in component at level one and we need username in component at level 5 then we have manually pass down the 'username' from comp1 to comp2 to comp3 to comp4 to comp5 then we'll be able to use username in component at level 5, but this process forces us to pass usename as props for comp2, comp3, comp4 also which was not required. this issue is resolved by context api.

## Eg. we want to pass user and age from app comp to comp 3
