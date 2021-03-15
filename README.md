# app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Roadmap

- Fonctions dictionnaire et tirage :

  - Formatter mon dictionnaire en un objet JS /DONE
  - Générer un générateur aléatoire de 10 lettres (consonnes et voyelles) /DONE
  - Vérifier la validité de la réponse et s'assurer de la concordance avec les 10 lettres du tirage /DONE

- Construire le squelette HTML :

  - HOME : entrer son pseudonyme, si entrée correcte alors redirection vers une partie de jeu /DONE
  - GAME : page de la partie de jeu, si correct alors affichage - tirage des lettres - deck joueur A - deck joueur B /DONE

* Charger le module pour les requetes HTTP et Sockets :

  - Axios /DONE
  - Socket.io /DONE

* Créer le serveur :

  - Serveur http /DONE
  - Socket.io /DONE

* Créer le tirage :

  - TIRAGE : lancer un tirage et une durée de jeu de 1 minutes /DONE

* Evenement composition mot :

  - MOTJOUEUR : declencher un evenement lorsque une lettre est entrée ou supprimée et avertir le joueur adverse /DONE

* Fin du chronometre :

  - GAME : interroger le serveur sur la validité des mots et déclaré le vainqueur ! /DONE

* Mettre en place la BDD

  - Mise en place des BDD : sockets et resultats /DONE
  - Gestion des cas ou nb_connecté < 2 < nb_connecté /DONE

* Divers

- Empecher de prendre un pseudo deja pris /DONE
- Les joueurs doivent joindre une room afin que les messages collectifs ne leur soient envoyé qu'a eux /DONE
- Si un joueur connecté a une room se deconnecte alors : /DONE
  - la partie est annulée et aucun score n'es enregistrée
  - les joueurs sont deconnectés ou redirigés vers la page d'acceuil

* Afficher le score de tous les joueurs sur une page dédiée /DONE

* Empecher la navigation vers Game et Resultat si pas autorisé /DONE

* Ajouter un bouton quitter lorsque le joueur est en attente /DONE

# TODO

* Factoriser le code serveur
  - Lors de la demande de partie : faire un switch => si cursor = 0, si cursor = 1 , si cursor > 2
  - Factoriser certaines fonctions de traitement
  - Chercher hebergement gratuit mongo + node ou deployer sur VPS starter OVH
