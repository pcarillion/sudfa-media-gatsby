const path = require("path")

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions ;
    const { data } = await graphql(`
    query{
        articles:allContentfulArticle{
            edges{
                node{
                    slug
                    categorie
        }}}
        auteurs: allContentfulAuteur{
            edges{
              node{
                slug
              }
            }
          }
      }
    `)



    data.articles.edges.forEach(({node}) =>{
        createPage({
            path: `article/${node.slug}`,
            component: path.resolve("./src/templates/SingleArticle.js"),
            context:{
                slug: node.slug,
                categorie: node.categorie
            },
            
        })
    })

    data.auteurs.edges.forEach(({node}) =>{
        createPage({
            path: `auteur/${node.slug}`,
            component: path.resolve("./src/templates/Auteur.js"),
            context:{
                slug: node.slug,
            },
            
        })
    })



}