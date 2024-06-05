# Running an Existing Expo Project

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).



## Prerequisites
Make sure you have the following installed:

Homebrew: The macOS package manager.
Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
Watchman: A tool for watching changes in the filesystem.
Expo CLI: Command-line interface for Expo.


Installation Steps
1. Install Homebrew
If you don't have Homebrew installed, open your Terminal and run

 ```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Verify the installation by running:

 ```bash
   brew --version
```
2. Install Node.js
Install Node.js using Homebrew:

```bash
 brew install node
```

3. Install Watchman
Install Watchman using Homebrew:
```bash 
brew install watchman
```
4. Install Expo CLI
Install Expo CLI globally using npm:

```bash
npm install -g expo-cli
```

5. Install dependencies

```bash
npm install
```

6. Start the expo app

```bash
npm run start
```