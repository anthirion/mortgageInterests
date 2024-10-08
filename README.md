# Mortgage interests

## Motivation du projet

A chaque fois que j'entends parler d'un projet d'achat immobilier de tel montant, je m'interroge toujours sur le montant des intérêts. Il existe certainement de nombreux sites qui font ce calcul mais je ne connait pas la manière dont il traite les données que je rentre sur le site et je crains de me retrouver avec un nombre important de publicités me proposant un achat immobilier.

## Présentation du projet

Pour palier à ces deux problèmes, j'ai décidé de coder cette web app qui calcule le montant des intérêts d'un prêt immobilier à partir du montant du prêt (le capital) et du taux d'intérêts. Cette web app n'a pas besoin de serveur pour faire le calcul des intérêts : tous les calculs sont effectués directement dans le navigateur, sans aucun stockage des données entrées (même pas de stockage local). La confidentialité des données est donc maximale car aucune donnée n'est transmise à un système distant. La contrepartie est que si vous fermez l'onglet, vous perdez toutes les informations que vous avez précédemment entrées.

## Conditions d'utilisation

En contrepartie de la gratuité de l'app et de la mise à disposition de son code source, l'auteur ne garantit pas d'évolutions futures. Il s'efforcera de corriger les bugs et d'ajouter des fonctionnalités jugées pertinentes, sans contrainte ni de résultats ni de délais.

## Points à retenir

<ol>
    <li>Les boucles for en JS manipule des copies</li>
</ol>
