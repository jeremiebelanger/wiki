---
title: Recevoir une competiton par id
description: Route pour recevoir une competition par son id
---

* **URL**

  /api/competition/{competitionId}

* **Méthode:**
  
  `GET`

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "data": {
        "id": 1,
        "name": "Compétition de Bromont",
        "emplacement":{
          "id": 2 ,
          "address": {
            "number": 1 ,
            "street" : "blv laurent",
            "appartement_number" : null,
            "postal_code": "3lp 2p0"
          },
          "nb_temp_stalls": 12 ,
          "nb_inside_stalls": 15 ,
          "nb_equipement_stalls": 12 
        },
        "organizer":  {
          "id": 1,
          "name": "James Cameron",
          "email": "james04@gmail.com",
          "phone": "450-869-9045",
          "birthdate": "1992-07-03" 
        },
        "is_late_registration": true,
        "pathLogo": null,
        "nb_places_dispo": 145,
        "nb_places_total": 275,
        "competition_fees": 
        {
            "id": 1,
            "hay": 12.99,
            "chippings": 23.49,
            "inside_stalls_per_day": 32.49,
            "temp_stalls_per_day": 25,
            "drug_test": 18
        },
        "is_quebec_recognized": true,
        "rules": "Règles ..."
      }       
    }
    ```

* **Réponse d'erreur:**

  * **Code:** 404 NOT FOUND <br />
    **Contenu:** 
    ```json
    { "message": "La ressource n’existe pas." }
    ```
