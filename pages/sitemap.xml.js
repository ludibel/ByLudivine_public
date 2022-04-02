// import de fs afin de travailler sur les répertoires
import fs from 'fs'

const Sitemap = () => {}
// on retourne un composant vide car nous ne voulons pas rendre un composant à cette URL
// getServerSideProps permet de manipuler la response du serveur
export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: process.env.SITEMAP_BASEURL_DEV,
    production: process.env.SITEMAP_BASEURL_PROD,
  }[process.env.NODE_ENV]

  const staticPagesBase = fs
    // fs.readdirSync est la méthode de répertoire de lecture synchone intégrée à Node.js. Permet d'obtenir la liste des fichiers du répertoire "pages"
    .readdirSync(
      {
        development: 'pages',
        production: './.next/server/pages',
      }[process.env.NODE_ENV]
    )
    // la liste obtenue est filtrée pour enlever les pages qu'on ne veut pas voir sur le sitemap
    .filter((staticPage) => {
      return (
        !staticPage.endsWith('.json') &&
        ![
          '_app.js',
          '_document.js',
          'sitemap.xml.js',
          'api',
          '_error.js',
          '404.html',
          '500.html',
        ].includes(staticPage)
      )
    })

    // on mappe la liste pour retourner une url à chaque element de la liste
    .map((staticPagePath) => {
      if (staticPagePath === 'index.html' || staticPagePath === 'index.js') {
        return `${baseUrl}/`
      }
      return `${baseUrl}/${staticPagePath}`
    })
    .map((path) => {
      return path.replace('.html', '')
    })
  // récupération des urls du dossier MesProjets
  const staticPagesProjets = fs
    // fs.readdirSync est la méthode de répertoire de lecture synchore intégré à Node.js. Permet d'obtenir la liste des fichiers du répertoire "MesProjets"
    .readdirSync(
      {
        development: 'pages/MesProjets',
        production: './.next/server/pages/MesProjets',
      }[process.env.NODE_ENV]
    )
    // la liste obtenue est filtrée pour enlever les pages qu'on ne veut pas voir sur le sitemap
    .filter((staticPage) => {
      return (
        ![
          'index.html',
          'ModalImage.html',
          'ModalImage.js',
          'index.js',
        ].includes(staticPage) && !staticPage.endsWith('.json')
      )
    })
    // on mappe la liste pour retourner une url à chaque element de la liste
    .map((staticPagePath) => {
      return `${baseUrl}/MesProjets/${staticPagePath}`
    })
    .map((path) => {
      return path.replace('.html', '')
    })

  // on fusionne les 2 tableaux d'urls obtenu
  const staticPages = staticPagesBase.concat(staticPagesProjets)
  // permet de supprimer des doublons
  let uniquePath = []
  staticPages.forEach((element) => {
    if (!uniquePath.includes(element)) {
      uniquePath.push(element)
    }
  })
  // pour chaque url de notre site de notre sitemap nous ajoutons une balise url contenant:
  //    - <loc> qui définit l'emplacement de notre URl
  //   - <lastmod> definit la dernière mise à jour du contenur url
  //   - <changefreq> fréquence de mise à jour de l'url
  //   - <priority> niveau d'importance de l'url
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${uniquePath
            .sort()
            .map((url) => {
              return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `
            })
            .join('')}
        </urlset>
      `
  // signale au navigateur que nous renvoyons un fichier en xml
  res.setHeader('Content-Type', 'text/xml')
  // on envoit la réponse sitemap au navigateur
  res.write(sitemap)
  // fin de la requête
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
