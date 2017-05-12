module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
    
    var grab_packt = require('@markwhitfeld/grab_packt');
    grab_packt.whenCompleted(function(){
        context.done();
        context.log('Finished Running!!!!!!', timeStamp);
    });
};