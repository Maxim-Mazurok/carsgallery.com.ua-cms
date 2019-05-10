(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-fr-FR"],{f18a:function(e,t,n){"use strict";n.r(t),n.d(t,"dateTimeFormats",function(){return i});var i={short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!1}};t["default"]={about_directus:"À propos de Directus",activity:"Activité",my_activity:"Mon activité",activity_log:"Journal d’activité",activity_outside_directus:"Cet objet a été créé en dehors de Directus.",admin_email:"E-mail administrateur",admin_password:"Mot de passe administrateur",additional_info:"Informations complémentaires",add_new:"Nouveau",add_field_filter:"Ajouter un champ de filtre",add_note:"Ajouter une note utile aux utilisateurs…",admin_settings:"Administration",advanced_options:"Options avancées",almost_done_options:"Presque fini ! Vérifiez les options d’interface ci-dessous.",almost_done_copy:"Chaque interface peut être adaptée à vos besoins. Vous trouverez ci-dessous les options disponibles pour ce champ, mais seules certaines sont requises.",all:"Tout",api_url:"URL API",api_installed:"API installée avec succés",auto_generate:"Génération automatique",auto_generated:"Généré automatiquement…",batch:"Lot",batch_edit:"Édition d’éléments par lot : {collection}",batch_delete:"Suppression par lot",batch_delete_confirm:"Aucun élément n’a été sélectionné | Êtes-vous sûr de bien vouloir supprimer cet élément ? Vous ne pourrez pas revenir en arrière ! | Êtes-vous sûr de bien vouloir supprimer ces {count} éléments ?  Vous ne pourrez pas revenir en arrière !",between:"Entre",both:"Tous",bookmarks:"Favoris",cancel:"Annuler",change_project:"Changer de projet",choose_one:"En choisir un",choose_project:"Choisir un projet",choose_interface:"Choisir une interface pour la gestion de ces données.",clear:"Nettoyer",click_to_toggle_all_none:"Cliquer pour activer / désactiver la colonne entière",connection:"Connexion",collection:"Collection",collections_and_fields:"Collection & Champs",collection_invalid_name:"Nom de la collection invalide",collection_updated:"{collection} Collection mise à jour",collection_removed:"{collection} Collection supprimée",collection_names_cannot_be_changed:"Les noms des collection ne peuvent pas être modifiés pour le moment",collections:"Collections",collection_count:"Pas de collections | Une collection | {count} collections","collections-directus_files":"Fichiers","collections-directus_users":"Utilisateurs","collections-directus_activity":"Activité",comment:"Commentaire",comments:"Commentaires",coming_soon:"Bientôt",compact:"Compact",cozy:"Intermédiaire",comfortable:"Confortable",confirm:"Confirmation",contains:"Contient",config_error:"Configuration manquante",config_error_copy:"Assurez-vous d’avoir créé le fichier de configuration de l’application.",collection_contains_items:"{collection} contient {count} élément(s)",currently_selected:"Actuellement sélectionné : {thing}",create:"Créer",creating_item:"Création d’élément",creating_item_page_title:"Création d’élément : {collection}",creating_role:"Création de rôle",create_role:"Créer un rôle",create_field:"Créer un champ",update_field:"Mettre à jour un champ ",create_collection:"Créer une collection",created_by:"Créé par",created_on:"Créé le",database_connection:"Connexion à la base de données",database_connection_copy:"Ensuite, nous devons savoir comment se connecter à la base de données où ce projet sera géré.",datatype:"Type de donnée",db_datatype:"Type de donnée {db}",editing_my_profile:"Editer mon profil",embed:"Encapsulation",embed_placeholder:"YouTube, Vimeo, ou autre lien",fieldtypes:{alias:"Champs qui n’enregistrent pas de données ou pour lesquels il n’y a pas de colonnes associées",array:"Format de tableau standard dans la réponse de l’API",boolean:"Vrai ou faux",datetime:"Une date et une heure au format ISO, ex : 2018-09-19T14:00:43.381Z",date:"Date, ex : 2018-09-19",time:"heure, ex : 14:09:22",file:"Clé étrangère pour directus_files.id",group:"Regroupement visuel de champs, les champs enfants enregistrent le groupe dans directus_fields.group",integer:"Nombre entier",decimal:"Nombre décimal",json:"Format JSON standard dans la réponse de l’API",lang:"Spécifique aux interfaces de traduction, cela stocke la clé de la langue",m2o:"Relation Many-to-One",o2m:"Relation One-to-Many",sort:"Champ système utilisé dans la réorganisation d’éléments par glisser-déposer",status:"Champ système utilisé pour la gestion de la publication",string:"Tout texte, chiffres, espaces ou symboles ; défini et limité par sa longueur (nombre de caractères)",translation:"Spécifique aux interfaces de traduction, cette relation One-to-Many stocke du contenu multilingue",uuid:"Identifiant universel unique",datetime_created:"Champ système permettant de suivre la date et l’heure à laquelle un élément a été créé, utilisé par les révisions",datetime_updated:"Champ système permettant de suivre la date et l’heure à laquelle un élément a été mis à jour, utilisé par les révisions",user_created:"Champ système permettant de suivre l’utilisateur qui a créé un élément, utilisé par les révisions",user_updated:"Champ système permettant de suivre l’utilisateur qui a mis à jour un élément, utilisé par les révisions"},datatypes:{mysql:{CHAR:"Une chaîne non binaire de longueur fixe, complétée à droite avec des espaces. La longueur peut être comprise entre 0 et 255 caractères.",VARCHAR:"Une chaîne non binaire de longueur variable. La longueur peut être comprise entre 0 et 65 535 caractères (MySQL 5.0.3+).",TINYTEXT:"Une chaîne d’une longueur maximale de 255 caractères.",TEXT:"Une chaîne d’une longueur maximale de 65 535 caractères.",MEDIUMTEXT:"Une chaîne d’une longueur maximale de 16 777 215 caractères.",LONGTEXT:"Une chaîne d’une longueur maximale de 4 294 967 295 caractères.",BOOLEAN:"Vrai ou faux. Sera enregistré en tant que 1 ou 0 respectivement.",TINYINT:"Un nombre entier compris dans l’intervalle [-128,127] s’il est signé. Sinon, compris dans l’intervalle [0,255].",SMALLINT:"Un nombre entier compris dans l’intervalle [-32 768,32 767] s’il est signé. Sinon, compris dans l’intervalle [0,65 535].",MEDIUMINT:"Un nombre entier compris dans l’intervalle [-8 388 608,8 388 607] s’il est signé. Sinon, compris dans l’intervalle [0,16 777 215].",INT:"Un nombre entier compris dans l’intervalle [-2 147 483 648,2 147 483 647] s’il est signé. Sinon, compris dans l’intervalle [0,4 294 967 295].",BIGINT:"Un nombre entier compris dans l’intervalle [-9 223 372 036 854 775 708,9 223 372 036 854 775 807] s’il est signé. Sinon, compris dans l’intervalle [0,18 446 744 073 709 551 615].",DECIMAL:"Un nombre précis (ex: une devise), d’une longueur maximale de 65 chiffres (L) avec une partie décimale de maximum 30 chiffres (D). Format de longueur: `L, D`",FLOAT:"Un nombre décimal binaire approximatif de 4 octets.",DOUBLE:"Un nombre décimal binaire approximatif de 8 octets.",DATE:"Une date entre `1000-01-01` et `9999-12-31`.",DATETIME:"Une date et une heure entre `1000-01-01 00:00:00` et `9999-12-31 23:59:59`.",TIMESTAMP:"Une date et une heure entre `1970-01-01 00:00:01` UTC et `2038-01-19 03:14:07` UTC.",TIME:"Une heure entre `-838:59:59` et `838:59:59`.",YEAR:"Une année entre `1901` et `2155` ou `0000`"}},date_and_time:"Date & Heure",db_user:"Utilisateur de la base de données",db_password:"Mot de passe utilisateur de la base de données",db_name:"Nom de la base de données",db_type:"Type de la base de données",db_column_name:"Nom de colonne de la base de données…",db_updated:"La base de données à été mise à jour avec succès",db_update_failed:"La base de données n’a pas pu être mise à jour.",default:"Défaut",default_value:"Valeur par défaut",delete:"Supprimer",delete_are_you_sure:"Êtes-vous sûr de vouloir supprimer cet élément ? Cette action ne peut pas être annulée !",delete_collection_are_you_sure:"Êtes-vous sûr de vouloir supprimer cette collection ? Cette action ne peut pas être annulée !",delete_field_are_you_sure:"Êtes-vous sûr de vouloir supprimer le champ « {field} » ? Cette action ne peut pas être annulée !",delete_role_are_you_sure:"Êtes-vous sûr de vouloir supprimer le rôle « {name} » ? Cette action ne peut pas être annulée !",delete_bookmark:"Retirer des favoris",delete_bookmark_body:"Êtes vous sûr de vouloir supprimer ce favori ? Cette action ne peut pas être annulée !",description:"Description",delete_confirmation:"Confirmation de suppression",dialog_beginning:"Début de la fenêtre de dialogue.",discard_changes:"Annuler les modifications",display_name:"Afficher le nom",drop_files:"Impossible de déposer des fichiers | Déposer un fichier ici… | Déposer des fichiers ici…",done:"Fait",dont_show:"Ne pas afficher",editing:"Édition d’élément : {collection}",editing_item:"Édition d’élément",editing_items:"Édition par lot de {count} élément(s)",editing_single:"Édition {collection}",email_address:"Adresse courriel",email:"Courriel",empty_collection:"Collection vide",empty_collection_body:"Il n’y a pas encore d’élément dans cette collection",enable_manual_sorting:"Activer le tri manuel",enter_value:"Entrer une valeur",enter_collection_name:"Entrer le nom de la collection…",enter_role_name:"Entrer le nom du role…",environment:"Environnement",project_key:"Clé du projet",errors:{"-1":"Impossible d’atteindre l’API",11:"Impossible de se connecter à la base de données",100:"Mauvais nom d’utilisateur et / ou mot de passe",101:"Déconnecté pour inactivité",102:"Déconnecté pour inactivité",103:"Utilisateur inactif",106:"Mauvais nom d’utilisateur et / ou mot de passe",107:"Utilisateur non trouvé"},error_unknown:"Erreur inconnue. Réessayez plus tard.",esc_cancel:"Échap va annuler et fermer la fenêtre.",equal_to:"Égal à",existing:"Existant",fetching_data:"Récupération des données",field:"Champ",field_type:"Type de champ",field_created:"Champ {field} créé",field_updated:"Champ {field} mis à jour",field_removed:"Champ {field} supprimé",field_already_exists:"{field} Existe déjà",fields:"Champs",fields_are_saved_instantly:"Enregistrement automatique des modifications",file:"Fichier",file_library:"Fichiers",file_upload:"Téléverser un(des) fichier(s)",forgot_password:"Mot de passe oublié",greater_than_equal:"Plus grand ou égal à",greater_than:"Plus grand que",help_and_docs:"Documentation",keep_editing:"Continuer l’édition",hidden:"Caché",hidden_detail:"Caché dans les détails",hidden_browse:"Caché dans « Parcourir »",host:"Hôte",icon:"Icone",in_list:"Un de ceux-là",initial_schema:"Choisir un schéma initial",initial_schema_copy:"Choisissez parmi les architectures de base de données existantes ou démarrez à zéro. Vous pourrez toujours étendre et modifier cela plus tard.",interface:"Interface",interface_count:"Pas d’interfaces | Une interface | {count} interfaces",interfaces:"Interfaces",info:"Information",intelligent_defaults:"Les options avancées vous permettent de configurer le mode de stockage des données dans la base de données et d’ajuster des paramètres d’application supplémentaires.",interface_settings:"Chaque interface peut être adaptée à vos besoins. Vous trouverez ci-dessous les options disponibles pour cette interface, mais seules certaines sont requises. ",install:"Installer",install_copy:"Cette API n’a pas encore été configurée. Voulez-vous l’installer et la configurer maintenant ?",is_empty:"Est vide",is_not_null:"Est non NULL",is_null:"Est NULL",item_count:"Aucun élément | Un élément | {count} éléments",event_count:"Aucun événement | Un événement | {count} événements",role_count:"Aucun rôle | Un rôle | {comte} rôles",item_count_filter:"Aucun élément filtré | Un élément filtré | {count} éléments filtrés",item_deleted:"Élément supprimé",item_saved:"Élément sauvegardé | {count} éléments sauvegardés",junction_collection:"Collection de jonction",cant_disable_primary:"Vous ne pouvez pas désactiver la clef primaire d’un champ existant. A la place, supprimez ce champ.",extension_error:"Un problème est survenu lors du chargement de l’extension {ext}.",extensions_missing:"Aucune extension trouvée",extensions_missing_copy:"Assurez-vous que les extensions systèmes sont installées.",latency:"Latence",learn_more:"En savoir plus",leave_comment:"Laisser un commentaire…",length:"Taille",length_disabled_placeholder:"La taille est déterminée par le type de donnée",less_than_equal:"Inférieur ou égal à",less_than:"Moins que",limited:"Limité",loading:"Chargement…",loading_more:"Chargement de plus d’éléments…",login:"S’identifier",m2m:"Many-to-Many (M2M)",m2o:"Many-to-One (M2O)",managed:"Géré",modified_by:"Modifié par",modified_on:"Modifié le",o2m:"One-to-Many (O2M)",name:"Nom",name_field:"Donnez un nom à ce champ {field} et ajoutez lui une note utile aux utilisateurs.",navigate_changes:"Êtes-vous sûr de vouloir quitter cette page ? Les modifications que vous avez apportées seront perdues si vous quittez cette page.",new:"Nouveau",new_field:"Nouveau champ",new_file:"Nouveau fichier",no_related_entries:"N’a pas d’entrées liées",not_between:"N’est pas entre",not_contains:"Ne contient pas",note:"Note",note_note:"Une description interne…",note_hidden:"[En apprendre plus](https://docs.directus.io/guides/collections.html#hidden)",note_icon:"L’icone affichée dans la barre latérale gauche de navigation de l’application",note_managed:"[En apprendre plus](https://docs.directus.io/guides/collections.html#managing-collections)",note_single:"[En apprendre plus](https://docs.directus.io/guides/collections.html#single)",no_results:"Aucun résultat",no_results_body:"Les filtres actuels ne correspondent à aucun élément de collection",no_collections:"Aucune configuration de collections",no_collections_body:"Il semblerait qu’il n’y ait pas encore de configuration de collections",no_fields:"Aucune configuration de champs",no_fields_body:"Il semblerait qu’il n’y ait pas encore de configuration de champs",no_files:"Aucun fichiers",no_files_body:"Il semblerait qu’il n’y ait pas encore eu de fichiers téléversés",numeric:"Numérique",page_not_found:"Page non trouvée",page_not_found_body:"La page que vous recherchez ne semble pas exister.",permissions:"Autorisations",name_bookmark:"Comment voudriez-vous nommer ce favori ?",next:"Suivant",none:"Aucun",not_empty:"N’est pas vide",not_equal_to:"N’est pas égal à",not_in_list:"N’est pas contenu dans",no_interface_error:"Le champ « {champ} » n’a pas de configuration d’interface",optional:"Facultatif",manage:"Gérer",manage_started:"Gestion de {collection} démarrée",manage_stopped:"Gestion de {collection} arrêtée",max_size:"Taille max : {size}",max_one_primary_key:"Yous ne pouvez avoir qu’une seule clef primaire par collection",dont_manage:"Ne pas gérer",dont_manage_copy:"Les privilèges, préférences et paramètres de la collection « {collection} » seront définitivement supprimés du système ! Êtes-vous sûr ?",more_options:"Plus d’options",mixed:"Mixte",my_profile:"Mon profil",other:"Autre",ok:"OK",operator:"Opérateur",open_on_gh:"Ouvrir sur GitHub",options:"Options",password:"Mot de passe",password_reset_sent:"Email de réinitialisation du mot de passe envoyé à « {email} ».",permissions_no_collections:"Ce projet n’a pas encore de collections.",permissions_admin:"Les administrateurs ont accès à toutes les données gérées au sein du système par défaut.",permission_states:{none:"Aucun",mine:"Mien uniquement",role:"Role uniquement",full:"Tout",read:"Lecture seule",create:"Créer",on_create:"À la création",update:"Mettre à jour",on_update:"À la mise à jour",always:"Toujours"},popular:"Populaire",powered_by_directus:"Propulsé par Directus",preview_and_revert:"Prévisualiser et revenir",primary_key:"Clef primaire",port:"Port",project:"Projet",project_name:"Nom du projet",project_info:"Informations sur le projet",project_info_copy:"Vous trouverez ci-dessous quelques questions sur votre projet, notamment les informations d’identification de votre premier administrateur.",read:"Lecture",readable_fields:"Champs lisibles",readable_fields_copy:"Sélectionnez les champs que l’utilisateur peut voir",readonly:"Lecture-seule",relational:"Relationnel",report_issue:"Signaler un problème",request_feature:"Demander une fonctionnalité",regex:"Expression régulière (RegEx)",relation_setup:"Puisqu’il s’agit d’un champ relationnel, nous devons cartographier les champs connexes.",relation_setup_copy:"Il existe différents types de données relationnelles, cette interface en utilise une appelée « {relation} ».",related_entries:"A des entrées liées",related_collection:"Collection associée",remove:"Retirer",remove_related:"Supprimer l’élément associé",relationship:"Relation",required:"Requis",reset_preferences:"Réinitialiser toutes les préférences",reset_password:"Réinitialiser le mot de passe",revert:"Revenir en arriére",revert_copy:"Souhaitez-vous rétablir cet élément comme il était le {date} ?",roles:"Rôles de l’utilisateur",role_settings:"Paramètres du rôle",save:"Enregistrer",save_and_add:"Enregistrer et ajouter un nouveau",save_and_stay:"Enregistrer et rester",save_as_copy:"Enregistrer une copie",save_as_bookmark:"Enregistrer en tant que favori",schema:"Schéma",search:"Recherche",select_from_device:"Sélectionner depuis l’appareil",select_existing:"Sélectionner un existant",select_field:"Sélectionner un champ",select_fields:"Sélectionner des champs",search_interface:"Rechercher une interface…",select_interface_below:"Sélectionner une interface ci-dessous",select_statuses:"Sélectionner les statuts",select_statuses_copy:"Sélectionner les statuts que l’utilisateur peut utiliser",settings:"Réglages",settings_project:"Paramètres du projet",settings_global:"Paramètres globaux",settings_update_database:"Mise à jour de base de données",settings_update_database_subtext:"Lancer le script",settings_update_database_confirm:"Votre schéma de base de données va être mis à jour afin de travailler avec la dernière version en cours de Directus. Créez toujours une sauvegarde de votre base de données avant de réaliser cette opération.",settings_collections_fields:"Collections et champs",settings_permissions:"Rôles et autorisations",settings_extensions:"Extensions",settings_saved:"Paramètres enregistrés",server_details:"Détails du serveur",server_error:"Erreur du serveur",server_error_copy:"Quelque chose ne va pas avec le serveur ou la base de données de cette instance.",server_trouble:"Problème de serveur",server_trouble_copy:"Réessayez plus tard ou demandez l’aide de votre administrateur système.",show_directus_collections:"Afficher les collections systèmes de Directus",something_went_wrong:"Quelque chose s’est mal passé.",something_went_wrong_body:"Problème lors du traitement. Réessayez après avoir actualisé la page.",sort:"Triage",sort_by:"Trier par",sign_in:"Se connecter",signing_in:"Connectez-vous",sign_out:"Déconnexion",sign_out_confirm:"Êtes-vous certain de vouloir vous déconnecter ?",sign_out_confirm_edits:"Êtes-vous certain de vouloir vous déconnecter ? Toutes les modifications non enregistrées seront perdues.",single:"Seul",spacing:"Espacement",status:"Etat",statuses:"Etats",text:"Texte",this_collection:"Cette collection",to:"À",unsaved_changes_copy:"Vous avez des changements non enregistrés. Êtes-vous sûr de vouloir quitter cette page ?",user_directory:"Utilisateurs",update:"Mettre à jour",update_confirm:"Êtes-vous sûr de vouloir mettre à jour {count} éléments ?",unique:"Unique",user_edit_warning:"{first_name} {last_name} modifie également cet élément. Veuillez vous coordonner afin de ne pas perdre vos modifications.",value:"Valeur",values:"Valeurs",validation:"Validation",version:"Version",version_and_updates:"Version et mises à jour",view_type:"Voir comme…",welcome:"Bienvenue",writable_fields:"Champs modifiables",writable_fields_copy:"Sélectionnez les champs que l’utilisateur peut modifier",yes:"Oui",duplicating_field:"Champ en double",duplicate:"Dupliquer",upload_exceeds_max_size:"{filename} ne peut être téléversé. Votre serveur n’est pas configuré afin de gérer des téléversements de cette taille.",file_type_not_accepted:"{filename} ne peut être téléversé. Le type du fichier n’est pas supporté pour ce champ.",ASC:"Ordre croissant",DESC:"Ordre décroissant"}}}]);
//# sourceMappingURL=lang-fr-FR.dca98a1a.js.map