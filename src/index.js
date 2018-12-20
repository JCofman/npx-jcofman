#! /usr/bin/env node

const boxen = require("boxen");
const { bold, blue } = require("chalk").default;

const lines = [
  bold("Jacob Cofman "),
  "Coffee lover, Volleyball player, JavaScript developer      ",
  "         ",
  bold("       Web: ") + blue("https://jcofman.de"),
  bold("      Blog: ") + blue("https://jcofman.de/blog"),
  bold("      Work: ") + blue("https://www.inovex.de"),
  bold("   Behance: ") + blue("https://www.behance.net/cofmanjacob2a8"),
  bold("    GitHub: ") + blue("https://github.com/JCofman"),
  bold("   Twitter: ") + blue("https://twitter.com/Jcofman"),
  bold("  LinkedIn: ") +
    blue("https://www.linkedin.com/in/jacob-cofman-758b46b1/"),
  bold("      Xing: ") + blue("https://www.xing.com/profile/Jacob_Cofman ")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "#50E3C2",
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n\n");
