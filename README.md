Ceci est un projet [Next.js](https://nextjs.org/) créé avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[![Continuous Integration](https://github.com/ludibel/ByLudivine_public/actions/workflows/CI.yml/badge.svg)](https://github.com/ludibel/ByLudivine_public/actions/workflows/CI.yml)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# Site Internet de [ByLudivine.com](https://www.byludivine.com)

Vous trouverez, dans ce dépot, le code source de mon site Internet.

> **il s'agit d'un environnement de développement, n'utilisez pas ce code et la configuration Docker associée en production**

Il est à votre disposition pour vous aider à :

- Voir comment implémenter une fonctionnalité particulière :
  - Docker (pour un environnement de dev nodejs)
  - NodeMailer pour le formulaire de contact
  - Google reCAPTCHA pour l'anti spam
  - Sitemap pour le SEO
  - Ajout des meta property og pour les réseaux sociaux
  - Les animations
  - ....
- Vous inspirer de la structure
- Apprendre à développer
- ...

## Installation de Docker

Docker est utilisé pour faciliter l'installation de l'environnement de développement.
Si vous ne possédez pas cet outil, vous pouvez l'installer gratuitement :

- [pour windows](https://docs.docker.com/desktop/windows/install/)
- [pour mac](https://docs.docker.com/desktop/mac/install/)
- [pour linux](https://docs.docker.com/engine/install/ubuntu/)

Sur Windows, il faudra installer l'émulateur WSL2 qui permet d'executer un environnement Linux

Sur Linux il faudra également installer [Docker Compose](https://docs.docker.com/compose/install/)

## Création d'un compte Google reCAPTCHA pour tester l'anti spam

Pour tester pleinement la fonctionnalité antispam de Google reCAPTCHA vous devez créer des clés de site

suivez ce lien pour voir comment faire : [création de clé](https://cloud.google.com/recaptcha-enterprise/docs/create-key?hl=fr)

Lorsque vous créez vos clés, il est nécessaire d'indiquer un domaine. Dans le cadre de l'environnement de développement, le domaine sera "localhost"

## Installation de l'application

1. Copiez le contenu du dépot GITHUB dans un répertoire de votre ordinateur
2. Placez-vous dans ce répertoire et modifiez le fichier .env en indiquant votre clé privée et votre clé publique Google reCaptcha

```php
# reCAPTCHA public key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="INDIQUEZ VOTRE CLE PUBLIQUE"
# reCAPTCHA secret key
RECAPTCHA_SECRET_KEY="INDIQUEZ VOTRE CLE PRIVE"
```

3. Executer les commandes ci-dessous

Ces commandes vont créer le conteneur Docker dans lequel sera installée l'application avec toutes les librairies nécessaires. Un serveur SMTP sera également créé pour tester l'envoi des emails du formulaire de contact.

```
docker-compose build
```

```
docker-compose up -d
```

Cette commande permet de rentrer en shell dans notre conteneur Node qui héberge l'application

```
docker exec -it docker_node sh
```

Vous devriez voir apparaitre l'invité de commande ci-dessous

```
/app #
```

4. A l'intérieur du conteneur, éxecutez les commandes suivantes pour installer et lancer l'application

installation de l'application

```
/app # yarn install
```

lancement de l'application

```
/app # yarn dev
```

> Docker a mappé le répertoire /app du conteneur avec le répertoire de votre ordinateur dans lequel se trouve le code source. Ainsi, toutes les modifications que vous ferez sur le code source, seront synchronisées avec le répertoire /app du conteneur Docker.

## Utilisation de l'application

Pour ouvrir le site Internet :

1. Ouvrez votre navigateur et connectez-vous sur http://localhost:3000

Pour ouvrir le serveur SMTP :

2. Ouvrez votre navigateur et connectez-vous sur http://localhost:1080

Lorsque vous envoyez un email au travers du formulaire de contact du site, vous pouvez voir, au sein de Mailcatcher, votre email arriver.

Pour tester le sitemap

3. Ouvrez votre navigateur et connectez-vous sur http://localhost:3000/sitemap.xml

## Quitter et arrêter le conteneur

si vous souhaitez quitter le conteneur :

```
/app # exit
```

Si vous souhaitez arrêter le conteneur :

```
docker-compose down
```

## librairies utilisées

Bibliothèque de style CSS
https://emotion.sh/docs/introduction

### Validateur de formulaire Yupjs

Validateur de données de formulaire à partir d'un schéma que l'on définit
https://github.com/jquense/yup

### Axios

Permet de faire les requêtes API
https://github.com/axios/axios

### Nodemailer

Permet d'envoyer des emails en configurant le corps de l'email avec les données saisies dans le formulaire de contact
https://nodemailer.com/about/

### Google reCAPTCHA

Ajout de google reCAPTCHA V2 (case à cocher) au formulaire de contact contre les spams
https://www.google.com/recaptcha/about/

## Contribuer au projet

### Licence

Le projet est sous la licence open source [MIT](LICENSE.md)

### Code de conduite

Afin de contribuer dans un environnement sain et convivial merci de respecter le [code de conduite](CODE_OF_CONDUCT.md)

### Comment contribuer

Vous trouverez l'ensemble des directives à suivre pour contribuer au projet dans le fichier [Contributing](CONTRIBUTING.md)
