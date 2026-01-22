// ============================================
// 1. NETTOYAGE MÉMOIRE
// ============================================
localStorage.clear(); 


// ============================================
// 2. BASE DE DONNÉES
// ============================================

const initialData = [
  
  // -------------------------------------------------------
  // GROS POST 1 : AIRBNB PARIS
  // -------------------------------------------------------
  {
    id: 101,
    title: "Airbnb Paris 18eme (Montmartre) - A EVITER",
    author: "Léa_B",
    date: "2013-11-04",
    content: "Je balance pas l'adresse précise mais c'est rue des Abbesses, au dernier étage sans ascenseur. J'ai loué ce studio pour 6 mois d'études. Dès la première semaine, l'enfer.\n\nToutes les nuits à 3h33 (toujours la meme heure), la poignée de la porte d'entrée s'abaisse doucement. J'ai cru que c'était un cambrioleur, j'ai hurlé, y'avait personne dans le couloir.\nEnsuite c'est les bruits de billes au plafond (classique) mais le pire c'est les ombres. Quand je prends ma douche, je vois une silhouette à travers le rideau opaque. J'ouvre : personne. J'ai fini par dormir chez une copine, je refuse d'y retourner. Le proprio me dit que je suis folle.",
    comments: [
      { user: "Jojo_Paname", text: "Les vieux immeubles haussmanniens sont chargés d'histoire... y'a eu des morts partout a Paris." },
      { user: "Thomas_Doute", text: "Courants d'air pour la porte + fatigue pour les ombres. T'es étudiante, tu dors pas assez." },
      { user: "Léa_B", text: "La poignée est super dure à baisser, c'est pas un courant d'air !!" }
    ]
  },

  // -------------------------------------------------------
  // LE POST PIÈGE (BIARRITZ)
  // -------------------------------------------------------
  {
    id: 42,
    title: "URGENT : Résidence vacances Biarritz (balcons verts)",
    author: "Gui_75",
    date: "2016-07-22",
    content: "Bonjour. Je cherche des témoignages sur une résidence a Biarritz, je donne pas le nom pour pas avoir de proces mais c'est le grand batiment avec les garde-corps des balcons verts (vert foncé).\n\nÇa fait 3 nuits qu'on est là et c'est l'enfer. Il y a des bruits de grattements DANS les murs, mais genre super fort, comme si y'avait des centaines de betes qui courraient dans le placo.\nLe pire c'est pas ça. Cette nuit vers 4h, mon frère a entendu des chuchotements dans le salon. Une voix d'homme, très rauque, qui parlait tout seul. On s'est levé : PERSONNE.\n\nOn a l'impression d'être observés h24. Ma copine veut partir. Est-ce que c'est déjà arrivé a quelqu'un ici ???",
    comments: [
      { user: "Basque_Deter", text: "Les balcons verts ? Ah ouais je vois très bien. Cherche pas pour les grattements..." },
      { user: "Troll_5000", text: "C'est juste des rats dans l'isolation mec, classique en bord de mer. Achète de la mort au rat." },
      { user: "Dark_Surfer64", text: "ECOUTEZ PAS L'AUTRE AVEC SES RATS. C'est la légende du 'Père Mangeot'. Un vieux qui vivait là avant la construction de la résidence. Il est mort seul chez lui et on l'a retrouvé 3 semaines plus tard... à moitié dévoré par les rats." },
      { user: "Dark_Surfer64", text: "On dit qu'il revient la nuit pour prévenir les locataires. Si tu l'entends chuchoter, c'est qu'il essaye de te dire de partir avant que les rats arrivent pour toi. BARREZ VOUS." },
      { user: "Gui_75", text: "Putain vous me faites flipper on rend les clés demain matin." }
    ]
  },

  // -------------------------------------------------------
  // GROS POST 2 : CAMPING ALPES
  // -------------------------------------------------------
  {
    id: 102,
    title: "Bivouac Parc de la Vanoise : UNE CHOSE RODAIT",
    author: "Tom_Rando",
    date: "2015-08-15",
    content: "Je suis pas du genre à croire aux fantomes, je suis un rationnel. Mais ce qui s'est passé au lac des vaches m'a calmé.\nOn a planté la tente loin des sentiers. Nuit noire, pas de lune. Vers 2h du mat, plus aucun bruit. Silence total (pas de grillons, rien). Et là on entend des pas lourds autour de la tente. Bipède.\n\nÇa s'est arrêté juste devant l'entrée. On voyait la forme appuyer sur la toile. Ça respirait fort, une respiration sifflante, humide. Mon pote a sorti son couteau, il a crié. Le truc a poussé un hurlement qui ressemblait pas à un animal (ni loup ni sanglier) et c'est parti en courant dans les cailloux.\nOn a pas dormi, au lever du soleil y'avait AUCUNE trace au sol.",
    comments: [
      { user: "Sasquatch_Lover", text: "Ça ressemble à une rencontre avec un 'Homme Sauvage' (Almas). Très rare dans les Alpes mais y'a des témoignages." },
      { user: "Yeti_Savoie", text: "Un ours ? Y'en a pas en Vanoise normalement..." },
      { user: "Tom_Rando", text: "C'etait pas un ours, ça marchait sur deux pattes tout le long." }
    ]
  },

  // -------------------------------------------------------
  // GROS POST 3 : MAISON CREUSE
  // -------------------------------------------------------
  {
    id: 103,
    title: "Rénovation ferme (23) : Les ouvriers refusent de venir",
    author: "Dédé_Creuse",
    date: "2014-03-10",
    content: "J'ai acheté une ruine en Creuse pour retaper. Gros oeuvre à faire. J'ai engagé deux maçons du coin. Au bout de 3 jours, ils ont plié bagage en laissant les outils.\nIls m'ont dit que les murs 'parlaient'. Je suis resté dormir sur place pour surveiller le chantier.\n\nC'est invivable. Les outils changent de pièce (je retrouve mon marteau dans le frigo, ma perceuse dans le puits...). Et la nuit, ça tape dans les cloisons comme si quelqu'un donnait des coups de masse. J'ai fait venir un prêtre pour bénir, le bénitier s'est fendu en deux quand il est rentré. Je revends à perte, je m'en fous.",
    comments: [
      { user: "Vieux_Hibou", text: "Tu as acheté la ferme des [CENSURÉ] ? Fallait se renseigner avant..." },
      { user: "Dédé_Creuse", text: "Pourquoi ? C'est quoi l'histoire ?" },
      { user: "Vieux_Hibou", text: "Je dirai rien ici. Mais pars." }
    ]
  },

  // -------------------------------------------------------
  // GROS POST 4 : ROUTE D834
  // -------------------------------------------------------
  {
    id: 104,
    title: "Faille temporelle D834 ???",
    author: "Routier1001",
    date: "2018-01-22",
    content: "Je fais ce trajet tous les jours depuis 10 ans. C'est une ligne droite au milieu des pins. Mardi soir, il y avait un brouillard épais.\nJe roule, je roule... normalement ça me prend 20 minutes pour arriver à Mont-de-Marsan. Là, j'ai roulé pendant 1h30 !!\n\nLe compteur tournait, l'essence descendait, mais le paysage changeait pas. Pins, brouillard, pins. La radio ne captait plus que des grésillements statiques. Et d'un coup, POUF, le panneau 'entrée de ville'.\nJ'ai regardé ma montre : il s'était passé 12 minutes. Mais mon compteur kilométrique marquait 140km de plus. Où j'étais pendant ces 140 bornes ???",
    comments: [
      { user: "Fox_Mulder_FR", text: "Missing Time classique. Tu as vérifié si tu as des cicatrices ou des marques sur le corps ?" },
      { user: "Routier1001", text: "J'ai un saignement de nez qui s'arrête pas depuis 2 jours..." }
    ]
  },

  // -------------------------------------------------------
  // LES PETITS POSTS (Pour le remplissage)
  // -------------------------------------------------------
  { id: 1, title: "Lumiere orange ciel", author: "invité", date: "2008-11-02", content: "j'ai vu une boule orange hier soir au dessus de rennes. ca bougait pas comme un avion. qqun a vu ??", comments: [{ user: "Zeta_Reticuli", text: "Lanterne thaïlandaise." }, { user: "invité", text: "nimp c'etait immense !!" }] },
  { id: 2, title: "RETOUR DE L'ETRE AIME RAPIDE", author: "Maitre_GUEZO", date: "2014-01-20", content: "Grand voyant medium resout tous vos problemes. Retour de l'etre aimé en 48h. Paiement apres resultat. Contactez moi sur whatsapp : 06 55 ....", comments: [{ user: "Seb_The_Boss", text: "<span style='color:red'>STOP PUB !! PROCHAIN C'EST LE BAN IP</span>" }] },
  { id: 3, title: "bruits grenier", author: "lolo", date: "2012-04-05", content: "ca gratte toute la nuit. j'ai mis de la mort aux rats ca fait rien. je crois que c'est pas un animal... ca marche avec deux pattes", comments: [{ user: "Kevin", text: "Des loirs ou des fouines, ca fait un bruit d'enfer." }] },
  { id: 4, title: "PHOTO DAME BLANCHE PREUVE", author: "Ghost_92", date: "2015-09-18", content: "Regardez bien a droite de l'arbre sur la photo. On voit clairement une forme.\n\n[Image: DCIM0043.jpg - ERREUR CHARGEMENT]", comments: [{ user: "guest", text: "L'image marche pas..." }, { user: "Ghost_92", text: "Attendez je reupload... ca marche pas :(" }] },
  { id: 5, title: "Mon chien refuse de descendre", author: "Vero13", date: "2016-02-14", content: "A chaque fois que je vais a la cave mon labrador pleure et reste en haut des escaliers. Il fixe le noir en grognant.", comments: [{ user: "Lumiere_Divine", text: "Les animaux sentent les entités." }] },
  { id: 6, title: "SÉANCE OUIJA QUI A MAL TOURNÉ", author: "Kylian_2002", date: "2017-10-31", content: "on a fait une seance pour rigoler et mnt les portes claquent toutes seules chez moi mes parents vont me tuer qu'est ce que je fais ??? aidez moi svp", comments: [{ user: "Wicca_Witch", text: "Fallait fermer la séance ! Casse une assiette avec du gros sel." }] },
  { id: 7, title: "Replica Watches Best Price", author: "Bot_5435", date: "2014-12-12", content: "Best quality rolex here : http://www.fake-site... discount 50%", comments: [] },
  { id: 8, title: "Paralysie du sommeil ?", author: "Sophie_G", date: "2013-11-11", content: "Je me suis reveillée je pouvais plus bouger et y'avait une ombre noire sur moi qui m'ecrasait la poitrine. J'ai cru mourir.", comments: [{ user: "Hypnos", text: "C'est le cerveau qui se reveille avant les muscles. Rien de grave mais c'est flippant." }] },
  { id: 9, title: "Maison invendable 59", author: "Stephane_P", date: "2011-02-17", content: "Je suis pro de l'immo. J'ai un bien que j'arrive pas a vendre. Les clients se sentent mal dedans, une dame a meme fait un malaise. Le prix est divisé par 2.", comments: [{ user: "Picsou_59", text: "MP envoyez moi l'adresse" }] },
  { id: 10, title: "Tableau qui bouge", author: "Michel_Gonzalez", date: "2009-01-02", content: "J'ai un portrait dans mon atelier. Ce matin il etait tourné vers le mur. Je vis seul et je ferme a clé.", comments: [{ user: "Thomas_Doube", text: "Vibrations ?" }, { user: "Michel_Gonzalez", text: "Je suis à la campagne, il n'y a pas de route." }] },
  { id: 12, title: "Appel numero 0000", author: "Tel_Maison", date: "2009-11-23", content: "Mon fixe a sonné a 3h du mat. Numero : 0000. J'ai décroché y'avait juste des grésillements.", comments: [{ user: "Neo_Matrix", text: "Spoofing, arnaque auto." }] },
  { id: 13, title: "clés disparues", author: "Dory", date: "2019-07-08", content: "J'ai posé mes clés sur la table. Je me retourne : plus de clés. Je les ai retrouvé 2 jours plus tard... DANS le frigo. Je deviens fou ou quoi ?", comments: [{ user: "Troll_Face", text: "Arrete l'apero gégé" }] },
  { id: 14, title: "URBEX LYON", author: "Gone69", date: "2010-03-03", content: "Je cherche des spots pour faire de l'urbex ce week end. Des idées ? Pas de trucs gardés svp", comments: [{ user: "Seb_The_Boss", text: "Pas d'adresse en public. MP." }] },
  { id: 15, title: "mon bébé parle seul", author: "Sophie_M", date: "2015-05-05", content: "Ma fille de 2 ans rigole toute seule dans sa chambre et fait coucou au coin du mur. Elle dit 'Le monsieur'. Y'a personne.", comments: [{ user: "Flippette", text: "Déménage." }] },
  { id: 16, title: "Odeur de fleurs", author: "Mamie87", date: "2008-08-12", content: "Depuis le decès de mon mari, ca sent la rose dans son bureau. Il détestait les fleurs. C'est un signe ?", comments: [{ user: "Fleur_Bleue", text: "C'est souvent signe de la vierge marie." }] },
  { id: 18, title: "PREDICTION FIN DU MONDE 2012", author: "Maya_2006", date: "2011-06-20", content: "Les mayas l'ont dit. Preparez vous. Stockez de l'eau.", comments: [{ user: "Prepper_Du_Dimanche", text: "On y est presque..." }, { user: "Troll_Face", text: "On est en 2013 et tjr rien mdr" }] },
  { id: 19, title: "télé qui s'allume", author: "Léa", date: "2009-03-12", content: "ma télé s'allume a fond au milieu de la nuit sur la neige (chaine cryptée). j'ai peur.", comments: [{ user: "Volt_Man", text: "Faux contact dans la telecommande." }] },
  { id: 21, title: "Le miroir de ma grand mere", author: "Miroir_Mon_Beau_Miroir", date: "2016-11-01", content: "J'ai récupéré un vieux miroir. Depuis qu'il est dans ma chambre je fais des cauchemars horribles ou je me noie.", comments: [{ user: "Wicca_Witch", text: "Couvre le avec un drap blanc." }] },
  { id: 22, title: "voyance gratuite", author: "luna", date: "2010-02-02", content: "je tire les cartes gratuitement pour les 5 premiers. donnez moi votre date de naissance.", comments: [{ user: "moi", text: "12/05/1988 merci !!" }, { user: "luna", text: "Je vois un grand changement pro." }] },
  { id: 23, title: "bruit dans les murs", author: "reno", date: "2011-12-25", content: "ca tape 3 coups secs. toc toc toc. toujours a 3h du mat.", comments: [{ user: "Mario_Bros", text: "coup de bélier dans la tuyauterie." }, { user: "reno", text: "y'a pas de tuyaux dans ce mur c'est de la pierre." }] },
  { id: 25, title: "Dame blanche Palavas", author: "34_Herault", date: "2011-07-20", content: "J'ai pris une auto stoppeuse au rond point. Elle a crié 'ATTENTION AU VIRAGE' et elle a disparu de la voiture.", comments: [{ user: "Rageux", text: "C'est une legende urbaine connue..." }, { user: "34_Herault", text: "Non c'est vrai je te jure !" }] },
  { id: 26, title: "crédit rapide sans justif", author: "banquier_net", date: "2011-10-10", content: "besoin d'argent ? contactez moi @ gmail com", comments: [] },
  { id: 27, title: "ombre sur mes photos", author: "Photo_Passion", date: "2011-08-08", content: "sur toutes mes photos de vacances y'a une tache noire floue a coté de moi. J'ai nettoyé l'objectif mais c'est toujours la.", comments: [{ user: "Zoom_Optic", text: "Capteur encrassé ou poussière interne." }] },
  { id: 30, title: "Sensation d'être observé", author: "Anonyme", date: "2017-03-20", content: "Pendant le confinement je suis seul chez moi. J'ai tout le temps l'impression qu'il y a qqun derriere moi.", comments: [{ user: "Sigmund", text: "C'est l'isolement, ca rend parano tkt." }] },
  { id: 31, title: "EVP enregistrement", author: "EVP_Master", date: "2012-09-09", content: "J'ai laissé tourner un micro dans une église vide. On entend un chuchotement qui dit 'je suis la'.", comments: [{ user: "Why_So_Serious", text: "Envoie le fichier stp" }] },
  { id: 32, title: "lumiere qui clignote", author: "MacGyver", date: "2017-01-05", content: "l'ampoule du couloir clignote quand je parle de mon grand pere décédé. j'ai changé l'ampoule 2 fois.", comments: [{ user: "Volt_Man", text: "Probleme de douille." }] },
  { id: 33, title: "Main froide sur mon bras", author: "Somnambule", date: "2017-06-30", content: "Je dormais et j'ai senti une main glacée me saisir le poignet. Je me suis reveillé y'avait la marque rouge de 3 doigts.", comments: [{ user: "OuinOuin", text: "C'est chaud..." }] },
  { id: 34, title: "Rituel amour retour", author: "Marabout_Serieux", date: "2017-05-05", content: "Ne restez pas seul. Travail serieux et discret.", comments: [{ user: "Seb_The_Boss", text: "<span style='color:red'>SUPPRIMÉ</span>" }] },
  { id: 35, title: "FORÊT DE BROCELIANDE", author: "Breizh", date: "2010-10-10", content: "C'est vraiment hanté ou c'est pour les touristes ? Je veux y aller cet été.", comments: [{ user: "Druide_Panoramix", text: "C'est une terre vibratoire puissante. Respecte les lieux." }] },
  { id: 36, title: "Objet volant non identifié", author: "E.T._Telephone", date: "2014-07-14", content: "Pendant le feu d'artifice j'ai vu un truc triangulaire passer super vite sans bruit.", comments: [] },
  { id: 37, title: "cauchemars a repetition", author: "Dodo_La_Saumure", date: "2009-11-20", content: "je reve toutes les nuits que je suis enfermé dans une boite. je me reveille en etouffant.", comments: [{ user: "Hypnos", text: "Apnée du sommeil, va consulter." }] },
  { id: 39, title: "Apparition Vierge", author: "Marie_Joseph", date: "2008-12-25", content: "J'ai vu la sainte vierge au pied de mon lit. Elle souriait.", comments: [{ user: "Darwin_Awards", text: "Hallucination." }, { user: "Marie_Joseph", text: "Non c'était un miracle !" }] },
  { id: 40, title: "froid soudain", author: "Frozen", date: "2019-02-14", content: "il fait 22 degres chez moi mais dans le salon on se caille d'un coup. comme si on ouvrait un frigo.", comments: [{ user: "Casper", text: "Chute de temperature = presence d'esprit." }] },
  { id: 41, title: "Bijoux disparus", author: "Bijou_Volé", date: "2015-06-06", content: "Ma bague en or a disparu de ma boite a bijoux. Y'a pas eu d'effraction.", comments: [{ user: "Watson", text: "Femme de menage ?" }, { user: "Bijou_Volé", text: "J'en ai pas !" }] },
  { id: 43, title: "Avis manoir de paris, rue Georges Michel", author: "Visiteur_75", date: "2016-10-20", content: "C'est flippant ou c'est pour les gosses ? Ca vaut le coup ?", comments: [{ user: "Gothique_Girl", text: "C'est genial vas y !" }] },
  { id: 44, title: "j'entends ma mere m'appeler", author: "Triste_Lune", date: "2015-01-01", content: "ma mere est morte en 2010. Parfois j'entends sa voix qui crie mon prénom depuis la cuisine.", comments: [] },
  { id: 45, title: "question ouija", author: "Newbie", date: "2012-08-08", content: "on peut faire ca seul ou c'est dangereux ?", comments: [{ user: "Gourou_Secte", text: "JAMAIS SEUL malheureux !!!" }] },
  { id: 48, title: "trace de pas mouillées", author: "Mr_Propre", date: "2018-02-28", content: "Je rentre du boulot, y'a des traces de pieds nus mouillés dans le couloir. Je vis seul et la douche est seche.", comments: [{ user: "Starsky", text: "Change les serrures mec, c'est un squatteur." }] },
  { id: 50, title: "au secours", author: "Anonyme", date: "2014-01-22", content: "y'a quelqu'un dans mon placard je l'entends respirer j'appelle la police ou pas", comments: [{ user: "Troll_Face", text: "Fake." }, { user: "Pas_De_Bol", text: "Appelle le 17 direct idiot !" }] }

];

// ============================================
// 3. LOGIQUE DU SITE
// ============================================

// Récupération des données du cache ou utilisation des données initiales
let posts = JSON.parse(localStorage.getItem('spirit_posts'));
if (!posts || posts.length === 0) {
    posts = initialData;
    localStorage.setItem('spirit_posts', JSON.stringify(posts));
}

// Fonction d'affichage (accepte un tableau optionnel pour la recherche)
function render(postsToRender = null) {
    const container = document.getElementById('posts-container');
    if(!container) return;
    container.innerHTML = '';
    
    // Si on n'a pas passé de posts spécifiques (recherche), on prend tout
    let data = postsToRender || posts;
    
    // Tri par date décroissante
    const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));

    if(sortedPosts.length === 0) {
        container.innerHTML = '<div style="color:red; text-align:center; padding:20px;">Aucun résultat trouvé dans les archives.</div>';
        return;
    }

    sortedPosts.forEach((post, index) => {
        let commentsHTML = post.comments.map(c => 
            `<div class="comment"><strong>${c.user} :</strong> ${c.text}</div>`
        ).join('');

        const article = document.createElement('article');
        
        // Titres en rouge si urgent ou majuscules
        let titleStyle = "";
        if(post.title === post.title.toUpperCase() || post.title.includes("URGENT")) {
            titleStyle = "color:red; font-weight:bold;"; 
        }

        article.innerHTML = `
            <h2 style="${titleStyle}">${post.title}</h2>
            <div class="meta">Posté par <b>${post.author}</b> le ${post.date}</div>
            <div class="content">${post.content.replace(/\n/g, '<br>')}</div>
            
            <div class="comments-section">
                <h4 style="margin:0 0 10px 0; font-size:0.8em; color:#666;">Réponses (${post.comments.length})</h4>
                <div id="comments-list-${index}">
                    ${commentsHTML}
                </div>
                
                <div style="margin-top:10px; border-top:1px dotted #555; padding-top:10px;">
                    <button onclick="alert('Erreur : Vous devez être connecté pour répondre.')">Répondre</button>
                </div>
            </div>
        `;
        container.appendChild(article);
    });
}

// Fonction de recherche
function doSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    
    // Si la recherche est vide, on réaffiche tout
    if(!query) {
        render(posts);
        return;
    }

    // Filtrer les posts (titre ou contenu)
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query)
    );
    
    render(filteredPosts);
}

// Fonction fake pour ajouter un post
function addNewPost() {
    alert("Erreur serveur 503 : Base de données en maintenance. Réessayez plus tard.");
}

// Lancement au chargement de la page
window.onload = function() {
    render();
};