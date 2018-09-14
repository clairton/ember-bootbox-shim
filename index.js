/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-bootbox-shim',

  included() {
    this._super.included.apply(this, arguments);

    // this.import({
    //   development: 'node_modules/bootbox/bootbox.js',
    //   production: 'node_modules/bootbox/bootbox.min.js'
    // });
    this.import('vendor/bootbox.js');
    this.import('vendor/shims/bootbox.js', {
      exports: {
        'bootbox': [
          'default'
        ]
      }
    });
  },

  treeForVendor(vendorTree) {
    var bootboxTree = new Funnel(path.join(this.project.root, 'node_modules', 'bootbox'), {
      files: ['bootbox.js'],
    });

    return new MergeTrees([vendorTree, bootboxTree]);
  },
};
