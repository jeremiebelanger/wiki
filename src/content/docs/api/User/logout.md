---
title: Logout ✅
---

Route pour déconnecter un user

* **URL**

  /api/auth/logout

* **Méthode:**
  
  `GET`

* **Paramètres:**

  Content-Type: application/x-www-form-urlencoded

  **Requis:**
 
    `email=[string]`<br>
    `password=[string]`<br>

* **Réponse de succès:**
  
  * **Code:** 200 OK<br />
    **Contenu:** <br>
    `string => Logged out`

* **Réponse d'erreur:**

  * **Code:** 500 Internal Server Error
