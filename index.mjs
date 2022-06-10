#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Inspired / copied from https://whitep4nth3r.com/blog/build-a-business-card-cli-tool

import boxen from "boxen";
import chalk from "chalk";
import ora from "ora";

const emojiList = '🔥,🖖,💻,🪐,🌍,📱,🚀,🧪,⭐️,🙌,🔮,💡,🌱,🥑,👀,🤖,👌,🙌,🧠,🦄,🎉,💗';

const throbber = ora({
  text: chalk.hex("#BD93F9").bold("Let's go make magic stuff happen!"),
  spinner: {
    frames: emojiList.split(','),
    interval: 300,
  },
});

const boxenOptions = {
    padding: 2,
    width: 68,
    title: chalk.hex("#50FA7B").bgHex('#282A36')("🚀 Joran Quinten 🦄"),
    titleAlignment: "left",
    borderStyle: "round",
    borderColor: "#FF79C6",
    backgroundColor: "#282A36",
};

const intro = chalk.hex("#8BE9FE").bold(
    "👋 Hey there! Nice to meetcha!",
  );

  const description = chalk.hex("#F8F8F2")(
    "I'm Joran. I'm a software developer from the Eindhoven area in the Netherlands (Silicon Veghel). I do a bit of writing, speaking, freelancing and contribute to OSS.",
  );

  const connect = chalk.hex("#FF79C6").bold("Come find me on the interwebs!");
  
  const links = [
    { name: chalk.hex("#F8F8F2")("Website"), url: "   https://joranquinten.nl" },
    { name: chalk.hex("#F8F8F2")("Email"), url: "     hello@joranquinten.nl" },
    { name: chalk.hex("#F8F8F2").bgHex("#1DA1F2")("Twitter"), url: "   https://twitter.com/joranquinten" },
    { name: chalk.hex("#F8F8F2").bgHex("#6e5494")("GitHub"),  url: "    https://github.com/joranquinten" },
    { name: chalk.hex("#F8F8F2").bgHex("#000")("DEV.to"),     url: "    https://dev.to/jquinten" },
    // { name: chalk.hex("#fff").bgHex("#582be8")("Polywork"), url: "  https://polywork.com/joranquinten" },
    { name: chalk.hex("#F8F8F2").bgHex("#0a66c2")("LinkedIn"), url: "  https://linkedin.com/in/joranquinten/" },
  ];
  
  const linkList = links.map((link) => `${link.name} ${chalk.hex("#F1FA8C")(link.url)}`).join("\n");
  
  console.log('\n'+boxen([intro, description, connect, linkList].join('\n\n'), boxenOptions)+'\n');
  throbber.start();