// Récupérer le formulaire
const form = document.getElementById('registration-form');

// Ajouter un écouteur d'événement sur le formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const dateNaissance = document.getElementById('date-naissance').value;
    const telephone = document.getElementById('telephone').value;
    const motivation = document.getElementById('motivation').value;

    // Valider le numéro de téléphone
    const telephoneRegex = /^01\d{8}$/;
    if (!telephoneRegex.test(telephone)) {
        alert('Le numéro de téléphone doit commencer par 01 et contenir 10 chiffres.');
        return;
    }
    //Calcule d'age
    const dateNaissanceIndividu = new Date(dateNaissance);
    const ageEnAnnee = (new Date().getFullYear() - dateNaissanceIndividu.getFullYear());
    if (ageEnAnnee < 18) {
    alert("Vous n'avez pas l'age requis");
    return;
    }
    //Verification du nombre de caractere
    if (motivation.length<100 || motivation.length>2500){
        alert("Le champs doit contenir entre 1000 et 2500 caracteres");
        return;
    }

    // Afficher les valeurs dans la console
    console.log('Nom :', nom);
    console.log('Prénom :', prenom);
    console.log('Date de naissance :', dateNaissance);
    console.log('Téléphone :', telephone);
    console.log('Motivation :', motivation);
    //afficher les information
    const information =document.getElementById("inscription")
    information.innerHTML=`
    <h2>Inscription reussie</h2>
    <p>Nom: ${nom}</p>
    <p>Prénom: ${prenom}</p>
    <p>Date de naissance: ${dateNaissance}</p>
    <p>Numéro de téléphone: ${telephone}</p>
    <p>Motivation: ${motivation}</p>
    `

    // Réinitialiser le formulaire
    form.reset();
});