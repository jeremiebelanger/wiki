---
title: Login ⛔
---

Route pour recevoir la liste des shows d'un user

* **URL**

  /api/auth/login

* **Méthode:**
  
  `POST`

* **Paramètres:**

  Content-Type: application/x-www-form-urlencoded

  **Requis:**
 
    `email=[string]`<br>
    `password=[string]`<br>

* **Réponse de succès:**
  
  * **Code:** 200 <br />
    **Contenu:** 
    ```json
    {
      "id": 1,
      "name": "<nom du rider supprimé>"
    }
    ```

* **Réponse d'erreur:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Contenu:** <br>
    `string => Email or passsword is invalid`
