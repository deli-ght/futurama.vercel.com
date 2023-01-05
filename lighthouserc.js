module.exports = {
  ci: {
    collect: {
      startServerCommand: "next start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
    server: {},
  },
};
