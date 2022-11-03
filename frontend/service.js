var Service = require('node-windows').Service;
var svc = new Service({
 name:'Student app',
 description: 'Node.js service description goes here.',
 script: 'C:\\Users\\moffat\\Desktop\\StudentInstructorManagementSystem-MERN\\frontend\\server.js'
});

svc.on('install',function(){
 svc.start();
});

svc.install();
