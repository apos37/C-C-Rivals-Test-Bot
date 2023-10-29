> COPYRIGHT DISCLAIMER
> 
> All written content, code, and arrangement thereof are Copyrighted © 2023 by Aristocles (apos37), all rights reserved.
> You may not copy or transmit the contents of this code either electronically or in hard copies. Use of this bot or any bot using the same content is strictly prohibited.
> 

# Forking This Replit

If you are forking this replit, there are a few things to consider:

1. You must update your node version to at least version 20.
- Open the Shell and check your version with: 
```
node -v
```
- Update to version 20 if not, copy and paste this into the Shell: 
```
npm init -y && npm i --save-dev node@20 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

2. Please use the following package versions:
```
"dependencies": {
  "@discordjs/builders": "^1.6.5",
  "@discordjs/rest": "^2.0.1",
  "discord-api-types": "^0.37.56",
  "discord.js": "^14.13.0",
  "express": "^4.18.2"
}
```
- Check your package.json file to see what versions you are running
- Update the version manually in the package.json file and re-run your bot


# Re-registering Slash Commands

From the Shell, type: 
```
node deploy-commands.js
```


# Updating Files

1. Format the file by saving it or clicking on the format button on the active tab at the top of the screen
2. Stop and restart the bot


# References

[Discord.js Guide](https://discordjs.guide/)

[Discord.js Guide - Embeds](https://discordjs.guide/popular-topics/embeds.html#using-an-embed-object)

[Discord.js Documentation](https://old.discordjs.dev/#/docs/discord.js/14.13.0/general/welcome)

[Discord Developer Portal - List of Intents](https://discord.com/developers/docs/topics/gateway#list-of-intents)

[Discord Developer Portal - Applications](https://discord.com/developers/applications)

[GatewayIntentBits](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits)

