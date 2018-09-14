(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['bootbox'],
      __esModule: true,
    };
  }

  define('bootbox', [], vendorModule);
})();
