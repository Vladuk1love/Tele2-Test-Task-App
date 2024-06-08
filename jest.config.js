module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(jsx|js)",
    "**/?(*.)+(spec|test).+(jsx|js)"
  ],
  "transform": {
    "^.+\\.(js|jsx)$": "js-jest"
  },
}

