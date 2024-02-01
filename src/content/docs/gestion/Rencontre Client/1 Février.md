---
title: 1 Février
description: Equine Duty
---

## Ordre du jour
- Mise au point
  - État du projet
- Présentation des maquettes
  - Maquette client
  - Maquette admin
- Rétroaction
- Authentification
- Questions sur le projet
  - Api
  - Client
  - Admin

## Questions

## Commentaires maquette

### Client
#### Desktop :
-	Accueil : Il préfère sans le logo mais plutot le titre.
-	Affichage competitions: tableau
-	Cavaliers/Chevaux : doute, peut être séparé sur une autre page
-	Couleurs semblent correct mais à vérifier par le client pour être sur : (il aime bien le beige et le vert)
-	En moyenne, les utilisateurs ont deux chevaux
-	Pour la recherche de compétition, il préfère la liste de shadcn (data table)
 
#### Mobile : 
-	En général, La cohérence est bonne
-	Gestion chevaux/cavaliers : À séparer dans 2 pages
-	Preuve coggins avec le cheval -> Un entraîneur peut par exemple enregistrer plusieurs chevaux à une compétition sans être le propriétaire
-	Preuve coggins doit être associé directement au cheval
-	Le cheval n’est pas obligé d’appartenir à quelqu’un.
-	Pas besoin de l’adresse du propriétaire, infos de la maquette correcte pour le proprio.
-	Enregistrer le cheval n’est pas une des pages visitées régulièrement.

### API
- Avez-vous un serveur SMTP de disponible avec votre hébergeur?
- Doit-on calculer le score manuellement ou est-il calculer à partir des marques?
- Clarification dans le cas ou un cheval est loué/prêter. Doit-on ajouter les informations du propriétaire?
Est-ce qu'on peux modifier et supprimer une class si les date d'isncription son commencer?

### Front Client

**Avez-vous des réseau sociaux lié à la marque?**

-	Va en créer (Facebook, Instagram, etc.)

**Quel devrait être le format des facture? (Imprimable vs mobile)**

-	Juste quelque chose de visuel qui se voit bien, pas besoin de pdf.

**Font pour le logo.**

-	Designer revient la semaine prochaine, les infos vont venir après

**Est-ce un inscription par cavalier/chevaux?**

-	Oui, une inscription par cavalier, la personne peut payer plusieurs fois (s’il inscrit plusieurs personnes). Mais une inscription un cheval.

### Front Admin

**Doit-on mettre un lien direct dans la reprise pour pouvoir télécharger le document ?**

-	Oui on peut faire ca. Plus rapide et convénient, mais pas obligatoire

**Comment afficher les documents crée, doit-on les télécharger, les ouvrir dans une page à part, les afficher sur la page ?**

-	Pas embbed, ouvrir sur une autre page.

**Comment ça se passe côté admin pour la création d’une facture ?**

-	Quand Éric va rajouter le paiement (pas à nous de gérer).

**Est-ce utile de garder la suppression d’un résultat pour une secrétaire ?**

-	Pas de suppression de résultat, une fois que c’est envoyé, il peut être modifié mais pas supprimer.

**Si l’organisateur a des concours en cours, comment ça se passe pour la suppression d’un compte ?**

-	Pas de suppression possible, trop de problèmes. Cas extrêmement rares.

**Pour l’envoie des scores aux organisations, comment ça se passe?**

-	C’est l’admin qui va les ajouter. Ils précisent quel format ils veulent. Tu clickes juste à qui est ce que tu veux envoyer et on envoie le fichier.

**Pourquoi y-a-t-il une date pour une classe ?**

-	Concours sur plusieurs jours, savoir quel jour passe cette classe. L’heure aussi va être important.

**Lorsque nous sommes sur la page avec les différents concours, lorsqu’on clique sur un concours, doit-on directement être envoyé vers la modification de la compétition ?**

-	Au cas ou. 

**Détails modification**
-	Peux rajouter des détails mais pas en supprimer une fois que c’est publié. Ne devrait ps avoir à changer.

**Format de fichier pour images (Vaccination/Coggins)**
-	Mettre les 2 options: PDF + image

**Impression**
-	Page html qu’on peut faire clic droit et impression

**Authentification**
-	Clerk, Supabase, Firebase, ou SuperTokens (Le client va nous revenir avec sa décision)
-	Le faire à bras peut-être
-	Passport (npm) pourrait être bien pour le faire maison.


**Autres**

-	Envoyer liste d’infos nécessaires au client si on en a besoin.
-	Hasher certains informations, c’est très important. (Loi 25)
-	Blacklist refresh token après un certain temps
-	Empêcher la création excessive, pour éviter les bots.
-	Affichage des dates : dépendament de la localisation
