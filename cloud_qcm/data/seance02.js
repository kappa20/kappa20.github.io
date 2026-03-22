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
    { term: "Consolidation de serveurs", def: "Regroupement de plusieurs serveurs physiques sous-employés sur un seul hôte exécutant des VMs. Objectif : éliminer le 'Wasted Resource' (ressources gaspillées). Résultat : réduction du nombre de serveurs, de la surface au sol, de la consommation électrique." }
  ]
};
