---
title: Auth provider
description: Equine Duty
---

## Pros et Cons
### Pros
- Aucun stockage d'informations utilisateurs (Souvent avec les forfait enterprise)
- Utilisations de compte Microsoft et Google simplifié
- Généralement une sécurité accru

### Cons
- Un coût sera éventuellement ajouté
- Peu ou pas de migrations. La décision de prendre un fournisseur pourrait empêcher l'option de changer par la suite.
- Peu ou pas d'activité pendant la saison hivernale.

## Fournisseurs
### [Clerk](https://clerk.com/pricing)


### [Supabase](https://supabase.com/pricing)
Gestion d'utilisateurs tout en un à coût raisonnable qui permettrait de faire le stockage de tout les informations utilisateurs qui nous serait nécessaire. Alternative Open Source à Firebase qui permet aussi la migration a partir de celui-ci.

[Doc](https://supabase.com/docs/guides/auth)

### [Firebase](https://firebase.google.com/pricing)
Probablement une des alternative qui me semble les moins cher à première vue avec un plan gratuit très généreux. Par contre comme la majorité des services, les coûts augmentent rapidement selon le nombre d'utilisateurs actif par moins. Il est aussi possible de stocker les informations utilisateur, par contre la base de donnée est limité a 1GB avec le plan de base.

[Doc](https://firebase.google.com/docs?hl=fr)

### [SuperTokens](https://supertokens.com/pricing)
Projet Open Source qui nous permet de SelfHost. Une bonne option gratuite qui nécessite tout de même de mettre en production un second service. Petit bémol, il ne semble pas être possible de faire la gestion des infos utilisateurs directement via le compte comme certain autres services. Cela signifie qu'il sera tout de même nécessaire d'enregistrer certaines informations personnel en BD. 

## Autres options
- [Auth0](https://auth0.com/)
- [NHOST](https://nhost.io/pricing)
- [KeyCloak](https://www.keycloak.org/)
- [AWS Cognito](https://aws.amazon.com/fr/cognito/)
-

## Resources
https://hasura.io/blog/top-authentication-providers-building-apps-jwt/