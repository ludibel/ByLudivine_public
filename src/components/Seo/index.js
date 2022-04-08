// import next/react
import Head from 'next/head';
import PropTypes from 'prop-types';

const dataMetaTwitter = ({
  url, description, titleSeo, image,
}) => {
  const metaTags = [
    {
      key: 'twittercard',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    { key: 'twittertitle', name: 'twitter:title', content: titleSeo },
    {
      key: 'twitterdescription',
      name: 'twitter:description',
      content: description,
    },
    { key: 'twitterimage', name: 'twitter:image', content: image },
    { key: 'twittersite', name: 'twitter:site', content: '@LudivineTwit' },
  ];
  return metaTags;
};
const dataMetaOg = ({
  url, description, titleSeo, image,
}) => {
  const metaTags = [
    { key: 'ogtitle', property: 'og:title', content: titleSeo },
    { key: 'ogtype', property: 'og:type', content: 'siteweb' },
    { key: 'ogurl', property: 'og:url', content: url },
    { key: 'ogimage', property: 'og:image', content: image },
    { key: 'ogdescription', property: 'og:description', content: description },
    { key: 'ogsitename', property: 'og:site_name', content: 'ByLudivine' },
  ];
  return metaTags;
};

function Seo({
  url, titleSeo, title, description, image, author,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="icon" href="/logo-ByLudivine.png" />
      {dataMetaTwitter({
        url, description, titleSeo, image,
      }).map(
        ({ name, content }) => <meta key={name} name={name} content={content} />,
      )}

      {dataMetaOg({
        url, description, titleSeo, image,
      }).map(
        ({ content, property }) => <meta key={property} property={property} content={content} />,
      )}
    </Head>
  );
}

Seo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleSeo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Seo;
