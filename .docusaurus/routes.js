import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '0c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '254'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '091'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '540'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '3ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '044'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', '3fa'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', 'd0d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '657'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '49c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '34b'),
            routes: [
              {
                path: '/ai-models/',
                component: ComponentCreator('/ai-models/', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/at-home/',
                component: ComponentCreator('/at-home/', 'c59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/llms/',
                component: ComponentCreator('/llms/', 'a1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-1-labs/Basic-Prompting/',
                component: ComponentCreator('/Part-1-labs/Basic-Prompting/', '4ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-1-labs/Conversation-history/',
                component: ComponentCreator('/Part-1-labs/Conversation-history/', '270'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-1-labs/Image Generation/',
                component: ComponentCreator('/Part-1-labs/Image Generation/', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-1-labs/Multimodal/',
                component: ComponentCreator('/Part-1-labs/Multimodal/', 'd4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-1-labs/Prompt-engineering-techniques/',
                component: ComponentCreator('/Part-1-labs/Prompt-engineering-techniques/', 'b9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-2-labs/Add-Knowledge/',
                component: ComponentCreator('/Part-2-labs/Add-Knowledge/', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-2-labs/Function-Calling/',
                component: ComponentCreator('/Part-2-labs/Function-Calling/', '57b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Part-2-labs/System-Message/',
                component: ComponentCreator('/Part-2-labs/System-Message/', '129'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/setup/',
                component: ComponentCreator('/setup/', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/summary/',
                component: ComponentCreator('/summary/', '0c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tokenization/',
                component: ComponentCreator('/tokenization/', '1ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
