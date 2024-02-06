---
title: Recevoir la liste des shows d'un user ⛔
description: Route pour recevoir la liste des shows d'un user
---

* **URL**

  /api/users/{userId}/shows

* **Méthode:**
  
  `GET`

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "competitions": [
        {
          "id": 1,
          "name": "Jumping de Montréal 1",
          "emplacement":{
            "address": {
              "number": 1 ,
              "province": "Québec",
              "country": "Canada",
              "city": "Montréal",
              "street" : "blv laurent",
              "zip_code": "3lp2p0"
            }
          },
          "is_late_registration": false,
          "path_logo": "images/jumping_montreal_logo.png",
          "nb_places_dispo": 120,
          "nb_places_total": 200,
          "is_quebec_recognized": true,
          "end_date": "2020-07-03",
          "start_date": "2020-07-02",
          "rules": "Règles générales pour la compétition équestre :\n\n1. **Attire et Équipement :**\n   - Les cavaliers doivent porter un équipement approprié, y compris des casques conformes aux normes de sécurité en vigueur."
        },
        
        {
          "id": 2,
          "name": "Jumping de Montréal 2",
          "emplacement":{
            "address": {
              "number": 1 ,
              "province": "Québec",
              "country": "Canada",
              "city": "Montréal",
              "street" : "blv laurent",
              "zip_code": "3lp2p0"
            }
          },
          "is_late_registration": false,
          "path_logo": "images/jumping_montreal_logo.png",
          "nb_places_dispo": 120,
          "nb_places_total": 200,
          "is_quebec_recognized": true,
          "end_date": "2020-07-03",
          "start_date": "2020-07-02",
          "rules": "Règles générales pour la compétition équestre :\n\n1. ..."
        }
      ]
    }
    ```

* **Réponse d'erreur:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Contenu:** 
    ```json
    { "message": "Non authentifié." }
    ```

  * **Code:** 403 FORBIDDEN <br />
    **Contenu:** 
    ```json
    { "message": "Cette action n’est pas autorisée." }
    ```

  * **Code:** 404 NOT FOUND <br />
    **Contenu:** 
    ```json
    { "message": "La ressource n’existe pas." }
    ```
