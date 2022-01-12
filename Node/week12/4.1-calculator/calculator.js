const yargs = require("yargs");
// node calculator.js add --num1=1 --num2=2
yargs.command({
  command: "add",
  describe: "add two",
  builder: {
    num1: {
      describe: "First number",
      demandOptions: true,
      type: "integer",
    },
    num2: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv);
    console.log(argv.num1 + argv.num2);
  },
});

yargs.command({
  command: "sub",
  describe: "subtract two numbers",
  builder: {
    num1: {
      describe: "First number",
      demandOptions: true,
      type: "integer",
    },
    num2: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv.num1 - argv.num2);
  },
});

yargs.command({
  command: "mult",
  describe: "multiply two numbers",
  builder: {
    num1: {
      describe: "First number",
      demandOptions: true,
      type: "integer",
    },
    num2: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv.num1 * argv.num2);
  },
});

yargs.command({
  command: "pow",
  describe: "number ^ 2",
  builder: {
    num: {
      describe: "number",
      demandOptions: true,
      type: "integer",
    },
    pow: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(Math.pow(argv.num, argv.pow));
  },
});

//yargs.parse parses all the arguments and commands
yargs.parse();
