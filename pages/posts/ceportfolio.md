---
title: Ce portfolio
date: 2023/3/11
description: Comment j'ai réaliser ce portfolio
tag: projet
author: You
type: post
---

# Ce portfolio 

## Structure du sîte

### theme.config.js

Ce code est un module JavaScript qui exporte un objet avec une propriété "footer". Le pied de page (footer) est défini comme un élément JSX (JavaScript XML) avec une balise <small>. À l'intérieur de cet élément, il y a un élément <time> qui affiche l'année actuelle obtenue à l'aide de la fonction new Date().getFullYear(). Mon nom est affiché avec l'année, suivi d'un lien "RSS". Le style du pied de page est défini en utilisant les propriétés CSS en ligne dans la balise <small>. De plus, le style spécifique au module est déclaré à l'aide de la syntaxe styled-jsx, avec une règle de style pour un lien (a) qui flotte à droite, et une règle de style conditionnelle basée sur la largeur de l'écran.

### next.config.js

Le fichier de configuration représente les paramètres essentiels pour un projet Node.js basé sur Next.js. Il définit des propriétés telles que la nature privée du projet, la licence MIT, des scripts npm pour les tâches de développement, de construction, et de démarrage du serveur, ainsi que les dépendances nécessaires, notamment Next.js, React, et des modules associés. De plus, le fichier configure les règles de formatage Prettier pour assurer une cohérence dans le code du projet. Ces éléments suggèrent un projet de site web utilisant Next.js, avec une attention particulière portée à la génération d'un fichier RSS, la gestion des métadonnées avec gray-matter, et un thème de blog via nextra-theme-blog.

### main.css

fichier css classique. utiliser pour l'apparence du sîte

### gen-rss.js

Ce code Node.js est un java script qui facilite la création d'un fichier RSS pour un blog. Il utilise différents outils, tels que `fs` pour gérer les fichiers, `path` pour manipuler les chemins, et `gray-matter` pour extraire des informations d'articles. Le script lit les fichier mdx, organise les données, crée un flux RSS, puis enregistre le résultat dans le dossier public du projet. En résumé, ce script simplifie la création d'un flux RSS pour un blog en automatisant le processus.

### app.js

Ce code importe les styles d'un thème de blog spécifique (nextra-theme-blog) ainsi que des feuilles de style CSS globales. Il configure également des éléments dans l'en-tête du document à l'aide

de la bibliothèque Next.js (next/head). Ces éléments comprennent des liens pour le flux RSS et le préchargement d'une police de caractères (Inter-roman.latin.var.woff2). En résumé, ce code intègre des styles de thème de blog, des feuilles de style globales, et configure des éléments d'en-tête pour la gestion des flux RSS et le préchargement d'une police de caractères avant de rendre le composant principal de l'application Next.js.