let fs = require('fs');
let http = require('http');
let path = require('path');

let typeMap = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.txt': 'text/plain'
};

var srv = http.createServer( (req, res) => {

  let fileToRead = `./${req.url}`;
  
  if(fileToRead != './/'){
    if(!fs.existsSync(fileToRead)){
      fileToRead = `./404.html`;
    }
    let content = fs.readFileSync(fileToRead,{encoding: 'utf8'});

    let ext = path.extname(fileToRead);
    let contentType = typeMap[ext];

    res.setHeader('Content-Type', contentType);
    res.write(content);
  }

  res.end('okay');
});

srv.listen(7777, 'localhost', () => {
  console.log('listening...');
});


filesIterate('./');

function filesIterate(dir, depth = ''){
  fs.readdirSync(dir).forEach( item => {
      let stats = fs.statSync(`${dir}${item}`);
      if(!stats.isFile()){
        console.log(depth,`${item}/`);
        filesIterate(`${dir}${item}/`, depth + '--');
      }else{
        console.log(depth,item,`(${stats.size} b)`);
      }
  });
}
