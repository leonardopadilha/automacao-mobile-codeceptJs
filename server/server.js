module.exports = {
    bootstrap: function() { // Executa antes de tudo
        console.log('bootstrap')
    },
    
    teardown: function() { // Executa depois de tudo
        console.log('teardown')
    } 
}