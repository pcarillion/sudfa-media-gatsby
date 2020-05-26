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

}