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
        hint: function(step, text, styles, id) {
            const style = styles && styles.map(style => style).join("");
            return '<div id='+ id +' style="' + style + '" class="pers-8670-hint-block"> <div class="pers-8670-hint-tail"/> <div class="pers-8670-hint-styles-container"> <div class="pers-8670-hint-info-container"> <span><b>' + step + '</b></span> <p> '+ text + '</p> </div> <div class="pers-8670-close-container"> <svg class="pers-8670-svg-close" width="16" height="16" viewBox="0 0 18 18" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" panelwrapperprops="[object Object]" aria-controls="" aria-label="Close popup" api="[object Object]" class="icon--close-icon" data-di-res-id="dbb88b83-bacf2b73" data-di-rand="1651861470514"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-3.000000, -3.000000)" fill="rgb(0,117,190)" fill-rule="nonzero"><g transform="translate(3.000000, 3.000000)"><polygon points="0.292893219 1.70710678 1.70710678 0.292893219 17.7071068 16.2928932 16.2928932 17.7071068"></polygon><polygon points="16.2928932 0.292893219 17.7071068 1.70710678 1.70710678 17.7071068 0.292893219 16.2928932"></polygon></g></g></g> </svg> </div> </div> </div>';
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
