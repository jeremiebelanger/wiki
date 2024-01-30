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
      "data": [
      {
        "id": 1,
        "name": "Competition 1",
        "emplacement": {
          "address": {
            "number": 123,
            "street": "Main Street",
            "appartment_number": 456,
            "zip_code": "12345"
          },
          "nb_temp_stalls": 10,
          "nb_inside_stalls": 12,
          "nb_equipment_stalls": 25
        },
        "organizer": {
          "id": 2,
          "name": "Mark Admio",
          "email": "mark.admio@example.com",
          "phone": "123-456-1234",
          "birthdate": "1990-01-01T00:00:00.000Z"
        },
        "is_late_registration": false,
        "path_logo": null,
        "nb_free_place": 100,
        "nb_total_place": 100,
        "competition_fees": {
          "id": 1,
          "hay": 50,
          "chippings": 30,
          "inside_stall_per_day": 15,
          "temp_stall_per_day": 10,
          "drug_test": 20
        },
        "is_quebec_recognized": false,
        "rules": "Hello I am the rules !"
      },
      ...
      ],
    }
    ```

* **Réponse d'erreur:**

  * **Code:** 404 NOT FOUND <br />
    **Contenu:** 
    ```json
    { "message": "La ressource n’existe pas." }
    ```
