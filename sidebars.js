/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  main: [{type: 'autogenerated', dirName: 'main'}],
  painfull: [{
    'Getting Started': [
      "painfull/intro",
      "painfull/setup"
    ],
    'Modules': [
      "painfull/modules/intro",
      "painfull/modules/technical",
      {
        "placeholder name": [
          "painfull/modules/apis",
          "painfull/modules/commands",
          "painfull/modules/eventhandlers"
        ]
      }
    ]
  }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
