# Mortgage interests

Ce projet est une web app qui permet de calculer facilement les mensualités d'un prêt immobilier à partir du montant, du taux et de la durée du prêt. L'app est disponible <a href="https://anthirion.github.io/mortgage_interests/"></a>

## Motivation du projet

A chaque fois que j'entends parler d'un projet d'achat immobilier de tel montant, je m'interroge toujours sur le montant des mensualités. Il existe certainement de nombreux sites qui font ce calcul mais je ne connait pas la manière dont il traite les données que je rentre sur le site et je crains que ces données soient utilisées pour du ciblage publicitaire.

## Présentation du projet

Pour palier à ces deux problèmes, j'ai décidé de coder cette web app qui calcule le montant des mensualités d'un prêt immobilier à partir du montant du prêt (le capital) et du taux d'intérêt. Cette web app n'a pas besoin de serveur pour faire le calcul des mensualités : tous les calculs sont effectués directement en local sur le navigateur, sans aucun stockage des données entrées. La confidentialité des données est donc maximale puisqu'aucune donnée n'est transmise à un système distant. La contrepartie est que si vous fermez l'onglet, vous perdez toutes les informations que vous avez précédemment entrées.

## Présentation technique du projet

En plus du code en HTML, CSS et JS, j'ai implémenté une chaine CI/CD avec les éléments suivants :

<ul>
    <li>Mocha et Chai pour les tests</li>
    <li>Selenium pour les tests end-to-end</li>
    <li>Sonarqube pour l'analyse statique</li>
</ul>

## Conditions d'utilisation

En contrepartie de la gratuité de l'app et de la mise à disposition de son code source, l'auteur ne garantit pas d'évolutions futures. Il s'efforcera de corriger les bugs et d'ajouter des fonctionnalités jugées pertinentes, sans contrainte ni de résultats ni de délais.

## Points à retenir

Remarques générales :

<ol>
    <li>Les boucles for en JS manipule des copies</li>
    <li>Pour un effet de survol sur les boutons, une opacity fait très bien l'affaire</li>
    <li>Il est possible de valider les données d'un formulaire avec des attributs HTML directement, sans passer par un script JS</li>
</ol>

Remarques en CSS :

<ol>
    <li>La pseudo-classe :last-child ne fonctionne que si l'élément est le dernier élément enfant. Si c'est le dernier élément d'un type donné (par ex la dernière div), utiliser plutôt <strong>:nth-last-of-type(1)</strong></li>
    <li>Pour centrer horizontalement un élément contenant du texte, utiliser simplement <strong>text-align: center</strong> sur le contenant</li>
    <li>Il est possible de modifier l'apparence du curseur avec la propriété <strong>cursor</strong></li>
    <li>La propriété <strong>height: 100vh</strong> permet de donner à l'élément toute la largeur de la fenêtre (viewport)</li>
    <li>La manière la plus simple de centrer un élément <strong>en display block</strong> en CSS est d'attribuer la valeur auto aux marges à gauche et à droite (margin: 0 auto;)</li>
    <li>Pour aligner des éléments à l'horizontale, utiliser un display flex sur le conteneur</li>
    <li></li>
</ol>
