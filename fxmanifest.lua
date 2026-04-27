fx_version("cerulean")
game("gta5")
description("NPWD Example App")

server_script("dist/server.js")
client_script("dist/client.js")

files({ "dist/web/app.js" })

dependency({ "npwd" })
