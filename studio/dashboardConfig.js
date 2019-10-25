export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5db33319f81506dc1e4d4eaa',
                  title: 'Sanity Studio',
                  name: 'sanity-and-gatsby-powered-portfolio-studio',
                  apiId: 'e6fab100-10d7-405d-b4b9-64f290e077de'
                },
                {
                  buildHookId: '5db333191cf1efcf31b3c6ac',
                  title: 'Portfolio Website',
                  name: 'sanity-and-gatsby-powered-portfolio',
                  apiId: 'b71042d9-3aca-4016-9ceb-3a5ea2dd8317'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matt-d-brown/sanity-and-gatsby-powered-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-and-gatsby-powered-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
