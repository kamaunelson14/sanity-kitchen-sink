export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fef96a542d8984e8979edaf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fao8gvzx',
                  apiId: '466e7168-ee00-456a-933c-a36f9eabac05'
                },
                {
                  buildHookId: '5fef96a549113d7d0b4b7536',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hybzby76',
                  apiId: '388e4195-ef4d-4ea2-b0bc-853ea7e80198'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kamaunelson14/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hybzby76.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
