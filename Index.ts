#! /usr/bin/env node
import readlineSync from "readline-sync";
import chalk from "chalk";

class AdventureGame {
  private location: string;
  private inventory: string[];

  constructor() {
    this.location = "start";
    this.inventory = [];
  }

  start() {
    console.log(chalk.yellow(`-----------------------------------------`));
    console.log(chalk.red(`  Welcome to Adventure Game CLI Project`));
    console.log(chalk.yellow(`-----------------------------------------`));
    console.log(chalk.greenBright("Type 'help' to see the list of commands."));
    this.gameLoop();
  }

  private gameLoop() {
    while (true) {
      const command = readlineSync.question("> ").trim();
      this.processCommand(command);
    }
  }

  private processCommand(command: string) {
    switch (command.toLowerCase()) {
      case "help":
        this.showHelp();
        break;
      case "look":
        this.lookAround();
        break;
      case "inventory":
        this.showInventory();
        break;
      case "north":
      case "south":
      case "east":
      case "west":
        this.move(command.toLowerCase());
        break;
      case "quit":
        console.log(chalk.bgMagentaBright.whiteBright("Thanks for playing!"));
        process.exit();
      default:
        console.log(chalk.magentaBright("I don't understand that command."));
        break;
    }
  }

  private showHelp() {
    console.log("Available commands:");
    console.log("  help        - Show this help message");
    console.log("  look        - Look around");
    console.log("  inventory   - Show your inventory");
    console.log("  north, south, east, west - Move in a direction");
    console.log("  quit        - Quit the game");
  }

  private lookAround() {
    switch (this.location) {
      case "start":
        console.log("You are at the starting point of your adventure.");
        console.log("You see paths leading north and east.");
        break;
      // Add more locations as needed
      default:
        console.log("You are in an unknown location.");
        break;
    }
  }

  private showInventory() {
    if (this.inventory.length === 0) {
      console.log("Your inventory is empty.");
    } else {
      console.log("You are carrying:");
      this.inventory.forEach((item) => console.log(`  - ${item}`));
    }
  }

  private move(direction: string) {
    switch (this.location) {
      case "start":
        if (direction === "north") {
          this.location = "forest";
          console.log("You move north into the forest.");
        } else if (direction === "east") {
          this.location = "lake";
          console.log("You move east towards a lake.");
        } else {
          console.log("You can't go that way.");
        }
        break;
      case "forest":
        // Define movement logic for the forest
        break;
      case "lake":
        // Define movement logic for the lake
        break;
      // Add more locations as needed
      default:
        console.log("You can't go that way.");
        break;
    }
  }
}

const game = new AdventureGame();
game.start();
