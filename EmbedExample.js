const Discord = require('discord.js');
var jimp = require('jimp');
const bufferUrl = require('buffer-url');

var channelID = '';


var client = new Discord.Client();
client.login(token);
client.on('message', function(message){
    if(!message.author.bot)
        loadMessage();
});
function loadMessage(){
new jimp(256, 256, '#36393E', function(err, image){
    for(let i = 0; i<15; i++){
        for(let j=0; j< 15; j++){
            colorRectangle(image, 10+i*15, 10+j*15, 10, 10, '0xFFFFFF00');
        }
    }

    image.getBuffer( "image/jpeg",(err,buffer) => {
            const attachment = new Discord.Attachment(buffer, '0,0.gif');
            const embed = new Discord.RichEmbed()
            .setTitle('Area for 0x0')
            .setDescription('Some random Description')
            .attachFile(attachment)
            
            client.channels.get('539503339642290206').send({embed});
    })
    

})
}
function colorRectangle(image, x, y, width, height, color){
    image.scan(x, y, width, height, function (x, y, offset) {
        this.bitmap.data.writeUInt32BE(color, offset, true);
    });
    return image;
}


// fill
// canvas.scan(32, 32, 256, 128, function (x, y, offset) {
//     this.bitmap.data.writeUInt32BE(0x00000088, offset, true);
// });

// var image = gm(40, 40, "#ddff99f3")
// .toBuffer('jpg', function(err, buffer){
//     console.log(err);
// })

// client.login(token);
// setTimeout(() => {

//     .setFormat('png')
//     .fill('#FFFFFF')
//     .drawPolygon([20,20], [59,50])
//     .toBuffer('png', function(err, buffer){
//         console.log(err);
//     })
//     const embed = new Discord.RichEmbed()
//     .setTitle('Area for 0x0')
//     .setDescription('Some random Description')
//     .attachFile(buffer)
//     //.setImage(image);
//     client.channels.get('539503339642290206').send({embed});
//     .drawPolygon([10, 10] [[40,40]])


// }, 3000);
