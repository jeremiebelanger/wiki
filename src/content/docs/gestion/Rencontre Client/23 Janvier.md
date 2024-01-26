
## Ordre du jour
- Présentations
- Parlez-nous de votre projet
- Compréhension du projet
- Questions
	- Général
	- Front client
	- Front admin
	- Backend
- Croquis
- Récapitulatif

**Prochaine rencontre le 1 février à 15h30**
Maquettes clients et partie des maquettes pour le évènements et pre-show.

---
## Compréhension du projet
### Users
- Admin
- Super Admin?
- Organisateurs
- Secrétaire
- User?
### Event
- Pré-Show 80% (Définition de l'event, horaire)
- Show 12% (Note, score)
- Post 8% (Classement)

---
## Questions

**Visuelles:**
- Avez-vous une préférence pour les couleurs?
- Voulez-vous Dark/Light mode?
- Est-ce que vous avez un logo?

**Pratiques:**
- Qu’est-ce qu’un utilisateur?
- Est-ce qu’un concours est un évènement?
- Comment est-ce que chaque utilisateur se crée?
- Doit-on s’inscrire avec un seul cheval ou pouvons-nous nous inscrire avec plusieurs chevaux?
- Est-ce que la reprise est pareille pour chaque classe?

**Cahier des charges:**
- Comment se fait la création de profils? (Admin, utilisateurs)
- C’est quoi l’identifiant unique des clients (client et api)? (Id, UUID)

### Front admin

**Visuelles:**
- Doit-on mettre autant d’accent sur le UI que sur le UX?
- Faut-il un changement de langue possible sur l’interface ou dans les paramètres de l’utilisateur. (Anglais par défaut ou système)?
- Comment accéder au panneau admin depuis le site?
- Quelles sont les informations organisateurs et secrétaire?

**Pratiques:**
- Devrait-on utiliser Firebase?

**Cahier des charges:**
- Pouvez-vous nous définir les différents rôles.
- Pour les préférences concours, pour les parties (obligatoires), faut-il demander si, pour le concours, il est obligatoire de fournir une preuve, ou faut-il demander le document?
- Quand on supprime une partie de l’évènement (par exemple pré-show), est-ce que ça supprime tout l’évènement?
- Est-ce qu’il peut y avoir plusieurs organisateurs?

### Front client

**Visuelles:**
- Avez-vous une préférence sur la page d’accueil?

**Pratiques:**
- Est-ce qu’il serait pertinent d’avoir les compétitions récentes et à venir sur la page d’accueil? (Ou autres filtres)
- Y a-t-il plusieurs types de compétitions?
- Quelle est la portée du projet? (Qc, Canada, US)
- Est-ce que le document “Imprimé et publier - Horaire.pdf” doit être public?
- Est-ce que ce serait possible de s’inscrire à une compétition sans avoir un cheval associé à son profil?
- Est-ce qu’il y a une procédure de check-ins?
- Est-ce qu’il y a une validation des fichiers uploadés? (Manuel)

**Cahier des charges:**
- Lorsqu’on consulte le détail d’une compétition, comment affiche-t-on le classement des cavaliers, et quel niveau de détails devront nous montrer pour chacun des cavaliers dans le classement?
- À qui doit appartenir le compte. Propriétaire ou cavalier?
- Qui doit faire l’inscription aux compétitions?
- Laissons-nous la possibilité à l’utilisateur d’inscrire un autre cavalier (Pour permettre aux associations d’inscrire tous les cavaliers)
- Que veut dire cavalier concours ici?

### API 

**Pratiques**
- Kubrnetes loadbalancer est-ce que tu veux que sa sois un app au complet ou plusieurs services? 
- Pour protéger l’app est-ce que vous voulez qu’on utilise un outil comme Cloudflare? 

**Cahier des charges **
- Écurie? 
- Dans info du concours qu’est-ce qu'info organisateur et info secrétaire? 
- Comment voyez-vous le processus de paiement? 
- Pour ce qui est des dates d’événement, concours, écurie, tardive, pouvons-nous avoir plus de précision?  
- Est-ce qu’il veut pouvoir afficher et désafficher un concours, si oui quel rôle peux avoir accès à cette option? 
- Peut-on avoir plus d’explications au niveau des règlement et règlement lors du concours? 
- C’est quoi un forfait? 
- Qu’est-ce qu'autre dans les frais de concours? 
- Est-ce qu’il plusieurs types de frais de premiers soins? 
- L'autre dans le forfait admin qu’est-ce que c’est?
