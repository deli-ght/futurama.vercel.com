module.exports = {
  ci: {
    collect: {
      startServerCommand: "next start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000"],
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
