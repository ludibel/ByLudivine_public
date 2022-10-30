# COMMENT CONTRIBUER ?

😀🎉 Tout d'abord, merci de prendre le temps de contribuer à [Byludivine](https://www.byludivine.com) ! 🎉😀

Vous trouverez dans ce document l'ensemble des directives à suivre pour contribuer à ByLudivine.

De plus, dans le fichier [README](README.md) vous trouverez les détails du projet (objectif, installation ...)

#### Table des matières

[Code de conduite](#code-de-conduite)

[Signaler un Bug](#comment-déclarer-un-bug)

[Proposer de nouvelles fonctionnalités](#comment-proposer-un-nouvelle-fonctionnalité)

[Soumettre des modifications ](#comment-soumettre-des-modifications)

[Message de commit](#message-de-commit)

[Configurer votre environnement et tests ](#comment-configurer-votre-environnement-et-executer-des-tests)

## Code de conduite

Un [Code de conduite](CODE_OF_CONDUCT.md) a été établi. Il définit les régles de conduite à respecter pour chaque contributeur du projet.

Pour évoluer dans un environnement sain, je vous en remercie de respecter celui-ci 👍

## Comment déclarer un bug 🐛

Pour rapporter un bug vous devez utiliser le template Issue suivant : [BUG_REPORT](.github/ISSUE_TEMPLATE/BUG_REPORT.yml)

Avant de créer votre Issue, vérifiez que le bug n'a pas déjà été déclaré en utilsant la barre de recherche.

## Comment proposer une nouvelle fonctionnalité ✨

Pour proposer une nouvelle fonctionnalité utilisez le template Issue suivant : [FEATURE_REQUEST](.github/ISSUE_TEMPLATE/FEATURE_REQUEST.yml)

## Comment soumettre des modifications

Pour soumettre une modification, la démarche à suivre est la suivante :

1. Forkez le projet si ce n'est pas déjà fait (copie du référentiel sur votre environnement local)
2. Créez une branche avec un nom descriptif
3. Faites les modifications et pushez les
4. Effectuez la Pull Request en utilisant le template : [PULL_REQUEST](pull_request_template.md)

Si besoin vous trouverez les informations sur [GitHub créer une Pull Request à partir d'un fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

Si vous avez réalisé le fork depuis un moment, pensez à mettre à jour le projet dans votre environnement local:

1. Spécifiez un nouveau dépot distant upstream qui sera synchronisé avec le fork :

```
git remote add upstream https://github.com/ludibel/ByLudivine_public.git
```

2. Récupérez les infos du dépot

```
git fetch uspstream
```

3. Fusionnez les dépots

```
git merge uspstream/main
```

## Style des messages de commit

- Utiliser des phrases impératives, subjectives et claires (exemple: Modifier le README et non README modifié)
- Commencer les messages de commit avec un joli emoji 😀 :

  - 🎨 :art: lors de l'amélioration de la structure/ format du code
  - 🐎 :racehorse: lors de l'amélioration de performance
  - 🐛 :bug: lors de la correction de bug
  - 🔥 :fire: lors de la suppression de code ou de fichier
  - 💚 :green_heart: lors d'une correction de CI
  - ✅ :white_check_mark: lors de l'ajout, la mise à jour de tests
  - ⬆️ :arrow_up: lors de la mise à jour de dépendances
  - ✨ :sparkles: lors de l'introduction de nouvelles fonctionnalités
  - 💄 :lipstick: lors de l'ajout ou la mise à jours de UI et les fichiers de styles
  - ♻️ :recycle: lors de la refactorisation du code
  - ♿ :wheelchair: lors de l'amélioration de l'accessibilité
  - 🚸 :children_crossing: lors de l'amélioration de l'expérience utilisateur
  - 🔍 :mag: pour les modifications liées au référencement naturel
  - ✏️ :pencil2: lors de la correction de fautes de frappe

## Comment configurer votre environnement et executer des tests

Le [README](README.md) explique comment installer l'application dans votre environnement.

#### Vérification syntaxique:

Lancement du linter eslint

```
yarn lint
```

#### Intégration Continu :

Un test [CI](.github/workflows/CI.yml) a été mis en place dans le projet.
