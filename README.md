install node.js
https://nodejs.org/en/download/

create a new folder for the project
open that folder in vs code
open a terminal from the view menu

run `npm init -y`
this creates the file package.json if it does not already exist, and modifies it if it does.

run the command `npm install hardhat`

note: npm means node package manager, and it is used to install libraries and application
e.g `npm install @openzeppelin/contracts`

to start a ahrdhat project, run `npx hardhat`
create an empty `hardhat.config.js`

add `require("@nomicfoundation/hardhat-toolbox");` to the top of `hardhat.config.js`

install this library using `npm install @nomicfoundation/hardhat-toolbox`

note: npx means node package execute, and is used to execute programs or scripts within the project

### Create a Smart Contract for Testing

create a folder called `contracts`
inside this folder, create a contract file.  we're going to create `project1.sol`

within a contract, functions have a visibility indicator
 - public, private, external, internal

react/next/javascript/typescript can only call functions that are public or external

functions can be labeled as pure, view, or blank (missing).
 - if it is pure or view, that means it doens't gas to call

### Create some Tests

create a folder called `test`
create a file in the folder called `project1.js`




### Recommended Extensions

solidity by Juan Blanco
or
Solidity by Nomic Foundation

Prettier - Code formatter by Prettier

GitHub Copilot

GitHub Copilot Labs

