module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000"],
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        canonical: "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
    server: {},
  },
};
