# Intro node

* NPM = Node Package Manager. Permet d'installer des "packages" ou "modules" tiers

## Initialiser un projet Node

* `npm init` va poser une suite de questions pour configurer le projet.
* `npm init -y` va passer cette étape, en prenant des choix par défaut.

Dans les deux cas, il en résultera un fichier `package.json`. Ce fichier contient la configuration d'un projet, et permet, entre autres, de lister ses _dépendances_ (c'est-à-dire, les modules tiers dont il a besoin pour fonctionner).

## Installer des modules

* Pour installer un module tiers : `npm install nomdumodule`.
* Après cette commande, `nomdumodule` est ajouté à la section "dependencies" du `package.json`.
* Un fichier `package-lock.json` est également créé s'il n'existait pas, ainsi qu'un répertoire `node_modules` qui contient les dépendances et leurs propres dépendances.
* `package-lock.json` contient le descriptif des dépendances et de leurs dépendances, ainsi que leurs numéros de version.
* `package.json` et `package-lock.json` doivent être suivis par Git.
* En revanche, `node_modules` doit être référencé dans `.gitignore`.
* La personne qui récupère le repo Git n'aura qu'à lancer `npm install` pour installer les dépendances du projet, ce qui recréera le dossier `node_modules` localement.
