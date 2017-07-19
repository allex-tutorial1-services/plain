function createPlainService(execlib, ParentService) {
  'use strict';
  

  function factoryCreator(parentFactory) {
    return {
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')),
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')) 
    };
  }

  function PlainService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(PlainService, factoryCreator);
  
  PlainService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  
  return PlainService;
}

module.exports = createPlainService;
