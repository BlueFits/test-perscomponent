;((function(global) {
    
    // 'new' an object
    const PersComponent = function() {
        return new PersComponent.init();   
    }

    // prototype holds methods (to save memory space)
    PersComponent.prototype = {
        // 'this' refers to the calling object at execution time
        HintBox: function(h1) {
            return '<div><h1 class="Pers_Component_hintbox_red">' + h1 + '</h1></div>'; 
        },
    
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    PersComponent.init = function() {
        const self = this;
        // self.firstName = firstName || '';
        // self.lastName = lastName || '';
        // self.language = language || 'en';
                
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    PersComponent.init.prototype = PersComponent.prototype;
    
    global.PersComponent = global.$P =  PersComponent;
    
})(window));