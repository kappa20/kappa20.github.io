// Séance 2 — La Virtualisation
const SEANCE_2 = {
  id: 2,
  title: "La Virtualisation",
  questions: [
    {
      type: "single",
      text: "Qu'est-ce que la virtualisation ?",
      options: ["Un processus de sauvegarde automatique des données", "Un processus qui masque les caractéristiques physiques d'une ressource pour simplifier les interactions", "Un protocole réseau de communication sécurisée", "Une méthode de compression de fichiers"],
      correct: [1],
      explanation: "La virtualisation est un processus permettant de masquer les caractéristiques physiques d'une ressource informatique pour simplifier les interactions entre cette ressource et d'autres systèmes."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une Machine Virtuelle (VM) ?",
      options: ["Un ordinateur physique dédié à une seule application", "Un environnement virtuel fonctionnant comme un ordinateur à partir de ressources virtuelles", "Un protocole de communication entre serveurs", "Un système de stockage distribué"],
      correct: [1],
      explanation: "Une Machine Virtuelle (VM) est un environnement virtuel fonctionnant comme un ordinateur à partir de ressources virtuelles, avec son propre système d'exploitation (invité), indépendant de la machine physique hôte."
    },
    {
      type: "multi",
      text: "Quels sont les domaines de virtualisation ? (plusieurs réponses)",
      options: ["Serveurs", "Réseaux", "Stockage", "Processeurs graphiques (GPU uniquement)", "Postes de travail"],
      correct: [0, 1, 2, 4],
      explanation: "Les domaines de virtualisation incluent : Serveurs, Réseaux, Stockage, Postes de travail, Applications, etc. La virtualisation GPU seule n'est pas un domaine distinct listé dans le cours."
    },
    {
      type: "multi",
      text: "Quels sont les avantages de la virtualisation de serveurs ? (plusieurs réponses)",
      options: ["Meilleure disponibilité grâce à la facilité de déploiement", "Augmentation de la consommation électrique", "Réduction de la surface au sol et de la consommation énergétique", "Meilleure sécurité par cloisonnement des serveurs"],
      correct: [0, 2, 3],
      explanation: "La virtualisation de serveurs permet : une meilleure disponibilité, une réduction de la surface au sol et de la consommation électrique, et une meilleure sécurité par cloisonnement. Elle réduit la consommation (pas l'augmente)."
    },
    {
      type: "single",
      text: "Quel est le rôle de l'hyperviseur de type 1 ?",
      options: ["Il s'installe sur un système d'exploitation hôte existant", "Il s'exécute directement sur le matériel physique sans OS hôte", "Il gère uniquement les connexions réseau", "Il remplace le stockage physique par du stockage en nuage"],
      correct: [1],
      explanation: "Un hyperviseur de type 1 (bare-metal) s'exécute directement sur le matériel physique, sans nécessiter de système d'exploitation hôte. Il gère directement les ressources matérielles."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un outil P2V ?",
      options: ["Un outil de communication Peer-to-Peer", "Un outil de conversion physique vers virtuel permettant de transformer des serveurs physiques en VMs", "Un protocole de virtualisation de réseau", "Un système de protection contre les virus"],
      correct: [1],
      explanation: "P2V (Physical to Virtual) désigne les outils permettant de transformer des serveurs physiques en machines virtuelles, comme VMware vCenter Converter."
    },
    {
      type: "single",
      text: "Dans une machine virtuelle, comment est désigné le système d'exploitation de la VM par rapport à la machine physique ?",
      options: ["Système maître / système esclave", "Système invité (Guest) / Système hôte (Host)", "Système primaire / système secondaire", "Système actif / système passif"],
      correct: [1],
      explanation: "La VM possède son propre système d'exploitation appelé 'système invité' (Guest). La machine physique qui l'héberge est appelée 'système hôte' (Host). Le système invité est vu par l'hôte comme un simple programme."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'hyperviseur (VMM — Virtual Machine Monitor) ?",
      options: ["Un système d'exploitation de remplacement pour serveurs", "Une couche d'abstraction placée entre les systèmes invités et les ressources physiques, qui transforme les instructions du système invité en instructions exécutables par le système hôte", "Un protocole réseau pour la gestion des VMs", "Un outil de sauvegarde automatique des machines virtuelles"],
      correct: [1],
      explanation: "L'hyperviseur (ou VMM) est une couche d'abstraction ajoutée entre les systèmes invités et les ressources physiques. Son rôle est de transformer les instructions envoyées au système invité en instructions exécutables par le système hôte."
    },
    {
      type: "multi",
      text: "Selon la théorie de Popek et Goldberg, quels sont les trois critères pour qu'une architecture soit virtualisable ? (plusieurs réponses)",
      options: ["Transparence : l'hyperviseur identifie et intercepte toutes les instructions sensibles", "Isolation des VMs : l'accès d'une VM à la mémoire est restreint à ses propres données", "Équivalence des privilèges : chaque instruction d'une VM s'exécute avec les mêmes résultats que sur machine physique", "Compatibilité des systèmes de fichiers"],
      correct: [0, 1, 2],
      explanation: "Popek et Goldberg définissent 3 critères : (1) Transparence — l'hyperviseur intercepte les instructions sensibles, (2) Isolation — chaque VM est cloisonnée en mémoire, (3) Équivalence des privilèges — les instructions s'exécutent de manière identique à une machine physique."
    },
    {
      type: "multi",
      text: "Quels sont les rôles de l'hyperviseur ? (plusieurs réponses)",
      options: ["Fournir un environnement d'exécution virtuel aux systèmes invités", "Allouer les ressources nécessaires au fonctionnement des VMs", "Rediriger les requêtes d'entrées/sorties vers les ressources physiques", "Veiller au confinement des invités dans leur propre espace", "Compiler le code source des applications"],
      correct: [0, 1, 2, 3],
      explanation: "L'hyperviseur a 4 rôles : fournir un environnement d'exécution virtuel, allouer les ressources, rediriger les requêtes E/S vers les ressources physiques, et veiller au confinement des invités. Il ne compile pas de code."
    },
    {
      type: "multi",
      text: "Parmi ces logiciels, lesquels sont des hyperviseurs de Type 1 (bare metal) ? (plusieurs réponses)",
      options: ["VMware ESXi", "Microsoft Hyper-V", "Oracle VirtualBox", "Xen (Citrix XenServer)", "KVM (Kernel-based Virtual Machine)"],
      correct: [0, 1, 3, 4],
      explanation: "Les hyperviseurs de Type 1 s'exécutent directement sur le matériel : VMware ESXi, Microsoft Hyper-V, Xen/Citrix XenServer, KVM pour Linux. Oracle VirtualBox est un hyperviseur de Type 2 (hébergé)."
    },
    {
      type: "single",
      text: "Quelle est la caractéristique principale de l'hyperviseur de Type 1 par rapport au Type 2 ?",
      options: ["Il est plus facile à installer pour les particuliers", "Il est sous forme d'un noyau système très léger qui s'exécute directement sur le matériel, sans OS hôte", "Il consomme plus de ressources car il dépend d'un OS hôte", "Il ne peut gérer qu'une seule machine virtuelle à la fois"],
      correct: [1],
      explanation: "L'hyperviseur de Type 1 est un noyau système très léger qui fonctionne directement sur le matériel physique, sans OS hôte. C'est une solution dédiée aux entreprises qui optimise les ressources et fournit la haute disponibilité."
    },
    {
      type: "multi",
      text: "Parmi ces logiciels, lesquels sont des hyperviseurs de Type 2 (hébergé) ? (plusieurs réponses)",
      options: ["Oracle VirtualBox", "VMware Workstation", "VMware ESXi", "Microsoft Virtual PC", "QEMU"],
      correct: [0, 1, 3, 4],
      explanation: "Les hyperviseurs de Type 2 fonctionnent au-dessus d'un OS hôte : VirtualBox, VMware Workstation, VMware Player, Microsoft Virtual PC, QEMU. VMware ESXi est un hyperviseur de Type 1 (bare metal)."
    },
    {
      type: "single",
      text: "Dans l'architecture x86 64-bit, quels sont les deux anneaux de privilège utilisés en pratique ?",
      options: ["Ring 0 et Ring 1", "Ring 1 et Ring 2", "Ring 0 (mode noyau) et Ring 3 (mode utilisateur)", "Ring 2 et Ring 3"],
      correct: [2],
      explanation: "Avec le passage au 64-bit, les anneaux 1 et 2 ont été supprimés. Il ne reste que Ring 0 (mode noyau, privilégié) et Ring 3 (mode utilisateur, applications)."
    },
    {
      type: "multi",
      text: "Quels sont les deux types d'instructions problématiques pour la virtualisation ? (plusieurs réponses)",
      options: ["Instructions privilégiées : ne peuvent être exécutées qu'en mode noyau et ont accès direct aux ressources matérielles", "Instructions non virtualisables : exécutées hors du mode privilégié, elles ne génèrent pas les exceptions nécessaires à l'hyperviseur", "Instructions compressées : trop longues pour être traitées par l'hyperviseur", "Instructions parallèles : s'exécutent simultanément sur plusieurs cœurs"],
      correct: [0, 1],
      explanation: "Les deux types d'instructions problématiques : (1) Instructions privilégiées — exécutées uniquement en mode noyau (accès mémoire, E/S, interruptions), et (2) Instructions non virtualisables — qui, exécutées hors mode privilégié, ne génèrent pas les exceptions nécessaires à l'hyperviseur."
    },
    {
      type: "single",
      text: "Qu'est-ce que la paravirtualisation ?",
      options: ["Une virtualisation où le noyau du système invité est non modifié", "Une virtualisation où le noyau du système invité a été modifié pour simplifier la communication avec l'hyperviseur via des hypercalls", "Une virtualisation uniquement matérielle sans logiciel", "Une émulation complète du matériel physique"],
      correct: [1],
      explanation: "La paravirtualisation est la virtualisation de systèmes d'exploitation dont le noyau du système invité a été modifié pour simplifier la communication avec l'hyperviseur via des hypercalls."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un hypercall dans le contexte de la paravirtualisation ?",
      options: ["Un appel réseau à haute disponibilité entre VMs", "Un appel spécifique utilisé pour permettre au système invité d'accéder aux ressources virtuelles (CPU, mémoire, E/S) en remplaçant les instructions privilégiées", "Une instruction de démarrage rapide de la machine virtuelle", "Un mécanisme de surveillance des performances de l'hyperviseur"],
      correct: [1],
      explanation: "Les hypercalls sont des appels spécifiques permettant au système d'exploitation invité d'accéder aux ressources virtuelles. Les instructions privilégiées sont interceptées et remplacées par des hypercalls, traités directement sur le matériel par l'hyperviseur."
    },
    {
      type: "single",
      text: "Pourquoi la paravirtualisation est-elle généralement limitée aux systèmes libres comme GNU/Linux ?",
      options: ["Car GNU/Linux est plus rapide que Windows", "Car la modification du noyau n'est possible que sur les systèmes libres ; les systèmes propriétaires comme Windows ne permettent pas cette modification", "Car GNU/Linux est plus répandu dans les entreprises", "Car Windows ne supporte pas les machines virtuelles"],
      correct: [1],
      explanation: "La modification du noyau requise par la paravirtualisation est possible pour les systèmes libres (GNU/Linux, code source accessible), mais impossible pour les systèmes propriétaires comme Windows. L'usage est donc limité aux systèmes libres."
    },
    {
      type: "single",
      text: "Qu'est-ce que la virtualisation totale (full virtualization) ?",
      options: ["Une virtualisation qui modifie le noyau du système invité", "Une virtualisation qui émule l'intégralité d'une machine physique pour le système invité, sans modification du noyau de l'OS", "Une virtualisation uniquement des applications sans OS", "Une virtualisation qui fonctionne sans hyperviseur"],
      correct: [1],
      explanation: "La virtualisation totale consiste à émuler l'intégralité d'une machine physique pour le système invité. L'hyperviseur se charge de la traduction complète des instructions. Le noyau de l'OS ne subit aucune modification."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'OVF (Open Virtualization Format) ?",
      options: ["Un système d'exploitation pour machines virtuelles", "Un format ouvert pour l'emballage et la distribution des systèmes virtuels, proposé par le DMTF et reconnu par l'ISO/IEC comme standard de portabilité entre plateformes IaaS", "Un protocole réseau pour la communication entre hyperviseurs", "Un outil de surveillance de l'infrastructure Cloud"],
      correct: [1],
      explanation: "L'OVF est un format ouvert pour l'emballage et la distribution des systèmes virtuels, proposé par le DMTF et reconnu par l'ISO/IEC comme premier standard international sur la portabilité des VMs entre infrastructures IaaS cloud."
    },
    {
      type: "single",
      text: "Quelle est la différence principale entre OVF et OVA ?",
      options: ["OVF est pour Linux, OVA est pour Windows", "OVF utilise plusieurs fichiers (descripteur XML + disques), OVA est une archive unique regroupant tous ces fichiers", "OVF est plus récent que OVA", "OVA ne supporte que VMware, OVF est multiplateforme"],
      correct: [1],
      explanation: "OVF utilise plusieurs fichiers (descripteur XML + images disque VHD/VMDK + manifeste), tandis qu'OVA est un format d'archive unique regroupant tous ces fichiers. OVA est utilisé pour distribuer des appliances virtualisées complètes."
    },
    {
      type: "single",
      text: "Quel avantage apporte la migration des machines virtuelles (comme vMotion) ?",
      options: ["Elle supprime la nécessité d'un hyperviseur", "Elle permet de déplacer des VMs d'un hôte physique à un autre à chaud, améliorant les performances et la continuité de service", "Elle convertit des VMs en serveurs physiques", "Elle réduit la capacité de stockage nécessaire"],
      correct: [1],
      explanation: "La migration des VMs (ex: vMotion de VMware) permet de déplacer des machines virtuelles d'un hyperviseur à un autre à chaud (sans interruption de service), offrant de meilleures performances et une haute disponibilité."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un snapshot (instantané) de machine virtuelle ?",
      options: ["Une capture d'écran de l'interface de la VM", "Une sauvegarde complète de l'état d'une VM à un instant précis (mémoire, disque, configuration), permettant un retour arrière rapide", "Une copie du réseau virtuel associé à la VM", "Un fichier journal des actions effectuées sur la VM"],
      correct: [1],
      explanation: "Un snapshot est une sauvegarde de l'état complet d'une VM à un instant T (mémoire vive, état du disque, configuration). Il permet de revenir rapidement à un état précédent en cas de problème (par exemple avant une mise à jour risquée)."
    },
    {
      type: "single",
      text: "Quelle est la différence entre la migration à chaud (live migration) et la migration à froid d'une VM ?",
      options: ["La migration à chaud est plus lente que la migration à froid", "La migration à chaud déplace la VM sans l'éteindre (sans interruption de service), la migration à froid nécessite d'arrêter la VM", "La migration à froid préserve les données mieux que la migration à chaud", "Il n'y a aucune différence fonctionnelle"],
      correct: [1],
      explanation: "La migration à chaud (vMotion) déplace une VM d'un hôte à un autre sans l'éteindre — aucune interruption de service. La migration à froid nécessite d'arrêter la VM avant de la déplacer. La première est préférable pour la haute disponibilité."
    },
    {
      type: "single",
      text: "Qu'est-ce que la consolidation de serveurs par la virtualisation ?",
      options: ["Regrouper plusieurs applications sur un seul serveur physique sans virtualisation", "Regrouper plusieurs serveurs physiques sous-employés en VMs sur un seul serveur physique plus puissant pour optimiser les ressources", "Fusionner des datacenters géographiquement distants", "Copier le contenu d'un serveur vers un autre"],
      correct: [1],
      explanation: "La consolidation de serveurs consiste à remplacer plusieurs serveurs physiques sous-employés par des VMs regroupées sur un ou quelques hôtes physiques puissants. Résultat : réduction des coûts (matériel, énergie, espace), meilleure utilisation des ressources."
    },
    {
      type: "multi",
      text: "Quels sont les avantages de la consolidation de serveurs grâce à la virtualisation ? (plusieurs réponses)",
      options: ["Réduction du nombre de serveurs physiques", "Diminution de la consommation électrique", "Meilleure utilisation des ressources (CPU, RAM)", "Augmentation du nombre de licences logicielles nécessaires"],
      correct: [0, 1, 2],
      explanation: "La consolidation réduit le nombre de serveurs physiques, diminue la consommation électrique et de refroidissement, et améliore l'utilisation des ressources. Elle réduit (pas augmente) le nombre de licences nécessaires."
    },
    {
      type: "single",
      text: "Dans la virtualisation x86, pourquoi les anneaux 1 et 2 ont-ils été supprimés avec le passage au 64-bit ?",
      options: ["Pour accélérer l'exécution des instructions", "Parce qu'ils n'étaient pas utilisés par les OS modernes qui n'utilisaient que Ring 0 (noyau) et Ring 3 (utilisateur)", "Pour réduire la taille des processeurs", "Pour améliorer la compatibilité réseau"],
      correct: [1],
      explanation: "En pratique, les OS modernes n'utilisaient que Ring 0 (mode noyau) et Ring 3 (mode utilisateur). Les anneaux 1 et 2, conçus pour les pilotes, n'étaient pas exploités. Le passage au 64-bit a simplifié l'architecture en ne conservant que ces deux niveaux."
    },
    {
      type: "single",
      text: "Quelle est la principale différence entre la virtualisation complète et la virtualisation assistée par le matériel (Intel VT-x/AMD-V) ?",
      options: ["La virtualisation matérielle est plus ancienne que la virtualisation complète logicielle", "La virtualisation assistée par le matériel utilise des extensions CPU dédiées pour gérer les instructions privilégiées directement, éliminant le besoin de traduction logicielle complexe", "La virtualisation complète ne peut pas exécuter Windows, la matérielle le peut", "Elles sont identiques en termes de performance"],
      correct: [1],
      explanation: "La virtualisation assistée par le matériel (Intel VT-x, AMD-V) ajoute des extensions CPU qui permettent à l'hyperviseur de gérer directement les instructions privilégiées sans traduction logicielle. Cela améliore les performances et simplifie l'hyperviseur."
    },
    {
      type: "single",
      text: "Qu'est-ce que la translation binaire (binary translation) dans la virtualisation totale ?",
      options: ["Un protocole de chiffrement des images disque", "Un traducteur qui remplace les instructions sensibles par des instructions non sensibles (opcode) équivalentes compatibles avec le processeur cible", "Un format de compression des machines virtuelles", "Un mécanisme de snapshot automatique"],
      correct: [1],
      explanation: "La translation binaire remplace les instructions sensibles émises par la VM par des instructions non sensibles (opcode) équivalentes compatibles avec le processeur de l'environnement cible. Lorsqu'une instruction problématique est émise par la VM, elle est interceptée par l'hyperviseur et traduite en une série d'instructions équivalentes."
    },
    {
      type: "single",
      text: "Qu'est-ce que la translation dynamique (JIT — Just-In-Time) dans le contexte de la virtualisation ?",
      options: ["La migration d'une VM d'un hôte à un autre en temps réel", "Une technique inspirée de la compilation à la volée où les instructions sont traduites au moment même de leur exécution, en traduisant uniquement les parties de code réellement utilisées", "La mise à jour automatique des hyperviseurs en temps réel", "La compression dynamique des images disque virtuelles"],
      correct: [1],
      explanation: "La translation dynamique (JIT - Just-In-Time) s'inspire de la compilation à la volée : les instructions de la machine source sont traduites en instructions de la machine cible au moment même de leur exécution. Seules les parties de code réellement utilisées sont traduites, ce qui optimise l'exécution."
    },
    {
      type: "single",
      text: "Comment les caches de traduction (translation caches) améliorent-ils la virtualisation totale ?",
      options: ["En stockant les données des VMs sur des SSD pour un accès plus rapide", "En mémorisant les instructions déjà traduites pour les réutiliser sans re-traduction, le traducteur n'étant appelé que pour les instructions non encore analysées", "En compressant les instructions binaires avant leur exécution", "En parallélisant la traduction sur plusieurs cœurs CPU simultanément"],
      correct: [1],
      explanation: "Les caches de traduction permettent de ne traduire le code qu'une seule fois. Le traducteur n'est appelé que lorsque le processeur virtuel arrive à une instruction qui n'a pas encore été analysée. Les traductions précédentes sont réutilisées, réduisant considérablement le coût de la translation binaire."
    },
    {
      type: "single",
      text: "Qu'est-ce que le mode VMX introduit par la virtualisation matérielle Intel VT-x ?",
      options: ["Un système de fichiers virtuel pour les images de VMs", "Un nouveau mode d'exécution CPU avec un niveau racine 'VMX root' (Ring -1) réservé à l'hyperviseur et un niveau 'VMX non-root' pour les VMs invitées", "Un protocole réseau dédié aux communications entre hyperviseurs", "Un format de compression pour les instantanés de machines virtuelles"],
      correct: [1],
      explanation: "La technologie VT-x introduit le mode VMX : VMX root operation (parfois appelé Ring -1) réservé à l'hyperviseur, et VMX non-root operation pour les VMs invitées. Chaque niveau comporte les 4 niveaux de privilèges Ring 0-3. Ainsi le noyau invité s'exécute en Ring 0 et les applications en Ring 3, sans conflit avec l'hyperviseur."
    },
    {
      type: "multi",
      text: "Quels sont les avantages de la virtualisation matérielle assistée (Intel VT-x / AMD-V) par rapport à la virtualisation totale logicielle ? (plusieurs réponses)",
      options: ["Amélioration des performances en éliminant une partie de la traduction logicielle", "Réduction de la charge de travail de l'hyperviseur", "Le noyau invité peut s'exécuter en Ring 0 de manière sécurisée", "Élimination complète de toute traduction d'instructions"],
      correct: [0, 1, 2],
      explanation: "La virtualisation matérielle assistée améliore les performances, réduit la charge de l'hyperviseur, et permet au noyau invité de s'exécuter en Ring 0 (niveau VMX non-root). Cependant, elle ne supprime pas toute traduction : certaines instructions doivent encore être émulées."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'émulation dans le contexte de la virtualisation totale ?",
      options: ["Une technique qui modifie le noyau de l'OS invité", "Le principe qui consiste à remplacer un composant matériel par une application dont le comportement est similaire ou identique à ce composant", "Un mécanisme de compression des images disque virtuelles", "Un protocole de communication entre hyperviseurs de type 1"],
      correct: [1],
      explanation: "L'émulation est le principe qui consiste à remplacer un composant matériel par une application dont le comportement est similaire voire identique. Dans la virtualisation totale, l'hyperviseur émule l'intégralité d'une machine physique pour le système invité — le noyau de l'OS ne subit aucune modification."
    }
  ],
  flashcards: [
    { term: "Virtualisation", def: "Processus qui masque les caractéristiques physiques d'une ressource informatique pour simplifier les interactions. Permet de créer des versions virtuelles de serveurs, stockage, réseaux, postes de travail. Une ressource physique → plusieurs ressources logiques, ou plusieurs physiques → une logique." },
    { term: "Hyperviseur (VMM — Virtual Machine Monitor)", def: "Couche logicielle d'abstraction entre les systèmes invités et les ressources physiques. Transforme les instructions du système invité en instructions exécutables par le système hôte. Rôles : environnement d'exécution, allocation de ressources, redirection E/S, confinement des VMs." },
    { term: "Hyperviseur Type 1 (Bare Metal)", def: "Noyau système très léger s'exécutant directement sur le matériel physique, sans OS hôte. Plus performant et sécurisé. Pour les entreprises. Exemples : VMware ESXi, Microsoft Hyper-V, Xen, KVM." },
    { term: "Hyperviseur Type 2 (Hosted)", def: "S'exécute au-dessus d'un OS hôte existant. Plus facile à installer mais moins performant (couche supplémentaire). Pour les particuliers et développeurs. Exemples : VirtualBox, VMware Workstation, QEMU." },
    { term: "Machine Virtuelle (VM)", def: "Environnement virtuel complet fonctionnant comme un ordinateur. Possède son propre OS invité (Guest), CPU/RAM/disque/réseau virtuels. Tournant de manière isolée sur un hyperviseur. L'hôte (Host) est la machine physique." },
    { term: "Guest OS vs Host OS", def: "Guest (invité) : système d'exploitation installé dans la VM, ne voit pas le matériel réel. Host (hôte) : système d'exploitation de la machine physique qui héberge la VM. Le Guest est vu par l'Host comme un simple programme." },
    { term: "Virtualisation complète (Full Virtualization)", def: "L'OS invité fonctionne sans aucune modification : il croit utiliser du vrai matériel. L'hyperviseur émule intégralement la machine physique et traduit toutes les instructions. Avantage : compatibilité totale. Exemples : VMware, VirtualBox." },
    { term: "Paravirtualisation", def: "L'OS invité est modifié pour être conscient qu'il tourne dans une VM. Il communique directement avec l'hyperviseur via des hypercalls en remplaçant les instructions privilégiées. Meilleures performances mais nécessite OS libre (GNU/Linux). Exemple : Xen." },
    { term: "Hypercall", def: "Appel spécifique utilisé en paravirtualisation : remplace les instructions privilégiées de l'OS invité pour accéder aux ressources virtuelles (CPU, mémoire, E/S). Traité directement par l'hyperviseur sans émulation complète." },
    { term: "Virtualisation assistée par matériel (Intel VT-x / AMD-V)", def: "Extensions matérielles du CPU qui accélèrent la virtualisation en ajoutant un mode d'exécution spécial pour les hyperviseurs. Permettent de gérer les instructions privilégiées directement au niveau matériel, sans émulation logicielle." },
    { term: "Instructions privilégiées vs non-virtualisables", def: "Privilégiées : exécutables uniquement en mode noyau (Ring 0) — accès mémoire, E/S, interruptions. Non-virtualisables : exécutées hors mode privilégié, ne génèrent pas d'exception → l'hyperviseur ne peut pas les intercepter. Problème central de la virtualisation x86." },
    { term: "OVF (Open Virtualization Format)", def: "Format ouvert standard (DMTF / ISO-IEC) pour l'emballage et la distribution des systèmes virtuels entre plateformes IaaS. Contient : données disque (VHD/VMDK), métadonnées XML (CPU, RAM, réseau), signature d'intégrité." },
    { term: "OVA (Open Virtual Appliance)", def: "Archive unique regroupant tous les fichiers OVF (descripteur XML + images disque + manifeste). Machine virtuelle préconfigurée avec OS et applications préinstallées, prête à l'emploi. Différence OVF/OVA : plusieurs fichiers vs archive unique." },
    { term: "vMotion / Migration à chaud", def: "Technologie VMware permettant de déplacer une VM d'un hyperviseur ESXi à un autre sans interruption de service. Utilisée pour la haute disponibilité, la maintenance, l'équilibrage de charge entre hôtes physiques." },
    { term: "Consolidation de serveurs", def: "Regroupement de plusieurs serveurs physiques sous-employés sur un seul hôte exécutant des VMs. Objectif : éliminer le 'Wasted Resource' (ressources gaspillées). Résultat : réduction du nombre de serveurs, de la surface au sol, de la consommation électrique." },
    { term: "Snapshot (Instantané de VM)", def: "Sauvegarde de l'état complet d'une VM à un instant T : mémoire vive, état du disque, configuration matérielle. Permet un retour arrière rapide (rollback) en cas de problème. Utile avant les mises à jour, migrations ou modifications risquées." },
    { term: "Migration à chaud (Live Migration)", def: "Déplacement d'une VM d'un hôte physique à un autre SANS interruption de service. Exemple : VMware vMotion. La VM continue de fonctionner pendant le transfert. Essentiel pour la haute disponibilité et la maintenance matérielle sans downtime." },
    { term: "Intel VT-x / AMD-V (Virtualisation matérielle)", def: "Extensions du processeur (Intel Virtualization Technology, AMD Virtualization) qui ajoutent un mode d'exécution spécial pour les hyperviseurs. Permettent de gérer les instructions privilégiées directement au niveau CPU, améliorant performances et sécurité." },
    { term: "P2V (Physical to Virtual)", def: "Processus de conversion d'un serveur physique en machine virtuelle. Outils : VMware vCenter Converter, Disk2VHD (Microsoft). Permet de migrer des serveurs physiques existants vers une infrastructure virtualisée sans réinstallation." },
    { term: "Translation binaire (Binary Translation)", def: "Technique de virtualisation totale : un traducteur remplace les instructions sensibles de la VM par des instructions non sensibles (opcode) équivalentes compatibles avec le processeur hôte. Utilisée quand le noyau de l'OS invité ne peut pas être modifié (ex: Windows). Optimisée par les caches de traduction et le JIT." },
    { term: "Translation dynamique (JIT — Just-In-Time)", def: "Technique d'optimisation de la translation binaire : les instructions sont traduites au moment de leur exécution (à la volée), inspirée de la compilation JIT. Seules les parties de code réellement utilisées sont traduites. Le code traduit peut être adapté selon les statistiques d'exécution collectées." },
    { term: "Mode VMX / Ring -1", def: "Mode d'exécution CPU introduit par Intel VT-x. Deux niveaux : VMX root (Ring -1, pour l'hyperviseur) et VMX non-root (pour les VMs, avec Ring 0-3). Permet au noyau invité de s'exécuter en Ring 0 VMX non-root sans conflits avec l'hyperviseur en Ring -1. Chaque VM a ainsi ses propres niveaux de privilèges." },
    { term: "Cache de traduction", def: "Optimisation de la translation binaire : les instructions déjà traduites sont mémorisées dans un cache. Le traducteur n'est appelé que pour les instructions non encore analysées. Réduit considérablement le coût de la translation binaire en évitant la re-traduction des instructions fréquentes." },
    { term: "Émulation (Full Virtualization)", def: "Principe de la virtualisation totale : remplacer un composant matériel par une application dont le comportement est identique. L'hyperviseur émule l'intégralité d'une machine physique. Le noyau invité ne subit aucune modification. Avantage : compatibilité totale. Inconvénient : dégradation des performances par la traduction binaire." }
  ]
};
