// Séance 3 — Virtualisation de Stockage & Réseaux
const SEANCE_3 = {
  id: 3,
  title: "Virtualisation de Stockage",
  questions: [
    {
      type: "single",
      text: "Que fait la virtualisation de stockage ?",
      options: ["Elle remplace les disques physiques par des disques SSD uniquement", "Elle regroupe et abstrait les ressources de stockage physique pour créer un espace de stockage virtuel unique", "Elle supprime la nécessité d'interfaces de stockage", "Elle chiffre automatiquement toutes les données stockées"],
      correct: [1],
      explanation: "La virtualisation de stockage consiste à regrouper et abstraire les ressources de stockage physique provenant de plusieurs dispositifs pour créer un espace de stockage virtuel unique."
    },
    {
      type: "single",
      text: "Qu'est-ce que le Logical Volume Manager (LVM) ?",
      options: ["Un protocole réseau pour les volumes distants", "Une couche logicielle d'abstraction qui masque la complexité du matériel de stockage sous-jacent", "Un outil de sauvegarde incrémentielle", "Un système de fichiers distribués"],
      correct: [1],
      explanation: "Le LVM est une couche logicielle d'abstraction et d'administration qui masque la complexité du matériel sous-jacent et permet de créer, redimensionner et allouer dynamiquement des volumes logiques."
    },
    {
      type: "single",
      text: "La virtualisation de stockage sépare :",
      options: ["Le réseau local du réseau étendu", "La représentation logique (volume logique) de l'espace physique (volumes physiques)", "L'interface utilisateur de l'interface administrateur", "Les données des métadonnées"],
      correct: [1],
      explanation: "La virtualisation de stockage sépare la représentation logique du stockage (volume logique) de l'espace de stockage physique (volumes physiques)."
    },
    {
      type: "multi",
      text: "Quels sont les avantages de la virtualisation de stockage ? (plusieurs réponses)",
      options: ["Ajouter un périphérique de stockage sans interruption des services", "Réallouer dynamiquement l'espace de stockage", "Regrouper des unités de disques de différentes tailles et constructeurs", "Réduire systématiquement la latence d'accès aux données"],
      correct: [0, 1, 2],
      explanation: "Les avantages incluent : ajouter du stockage sans interruption, réallocation dynamique de l'espace, et regroupement de disques hétérogènes. La réduction systématique de la latence n'est pas garantie."
    },
    {
      type: "multi",
      text: "Quelles sont les interfaces de stockage qui se distinguent par ? (plusieurs réponses)",
      options: ["Le débit", "La latence", "Le protocole utilisé (ATA, SATA, SCSI)", "La couleur du connecteur", "Le type de connexion"],
      correct: [0, 1, 2, 4],
      explanation: "Les interfaces de stockage se distinguent par : le débit, la latence, le protocole utilisé (ATA/SATA/SCSI/SAS) et le type de connexion. La couleur du connecteur n'est pas un critère technique."
    },
    {
      type: "single",
      text: "Quel avantage apporte la migration des machines virtuelles (comme vMotion) en termes de performances ?",
      options: ["Elle supprime la nécessité d'un hyperviseur", "Elle permet de déplacer des VMs d'un hôte physique à un autre à chaud, améliorant les performances et la continuité de service", "Elle convertit des VMs en serveurs physiques", "Elle réduit la capacité de stockage nécessaire"],
      correct: [1],
      explanation: "La migration des VMs (ex: vMotion de VMware) permet de déplacer des machines virtuelles d'un hyperviseur de type 1 à un autre à chaud (sans interruption de service), offrant de meilleures performances et une haute disponibilité."
    },
    {
      type: "single",
      text: "Qu'est-ce que l'OVF (Open Virtualization Format) ?",
      options: ["Un système d'exploitation pour machines virtuelles", "Un format ouvert pour l'emballage et la distribution des systèmes virtuels, reconnu par l'ISO/IEC comme standard de portabilité entre plateformes IaaS", "Un protocole réseau pour la communication entre hyperviseurs", "Un outil de surveillance de l'infrastructure Cloud"],
      correct: [1],
      explanation: "L'OVF est un format ouvert pour l'emballage et la distribution des systèmes virtuels, proposé par le DMTF et reconnu par l'ISO/IEC comme premier standard international sur la portabilité des VMs entre infrastructures IaaS cloud."
    },
    {
      type: "multi",
      text: "Quelles sont les deux approches pour construire des réseaux virtuels ? (plusieurs réponses)",
      options: ["Approches classiques ne se basant pas sur la virtualisation : VLAN, VPN", "Approches basées sur la virtualisation : SDN, NFV", "Approche matérielle : achat de nouveaux switches physiques", "Approche hybride : mélange de réseaux filaires et sans fil"],
      correct: [0, 1],
      explanation: "Il existe deux approches : les approches classiques (VLAN, VPN) et les approches basées sur la virtualisation (Software-Defined Networking SDN, Network Function Virtualization NFV)."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un VLAN (Virtual Local Area Network) ?",
      options: ["Un réseau privé virtuel sécurisé entre deux sites distants", "Un réseau local regroupant un ensemble de machines de façon logique et non physique", "Un protocole de communication entre hyperviseurs", "Un type de connexion sans fil haute performance"],
      correct: [1],
      explanation: "Un VLAN est un réseau local regroupant un ensemble de machines de façon logique et non physique. La virtualisation des réseaux consiste à partager une même infrastructure physique au profit de plusieurs réseaux virtuels isolés."
    },
    {
      type: "single",
      text: "À quoi servent les VPN (Virtual Private Networks) ?",
      options: ["À regrouper des machines par département dans un même bâtiment", "À fournir un canal de communication sécurisé entre plusieurs sites géographiquement distants", "À augmenter la bande passante du réseau local", "À remplacer les commutateurs physiques dans un datacenter"],
      correct: [1],
      explanation: "Les VPN sont généralement utilisés pour fournir un canal de communication sécurisé entre plusieurs sites géographiquement distants, en créant un réseau privé virtuel au-dessus d'Internet."
    },
    {
      type: "single",
      text: "Comment fonctionne un VLAN de niveau 1 (port-based VLAN) ?",
      options: ["Il définit le réseau virtuel en fonction des adresses MAC des stations", "Il définit le réseau virtuel en fonction des ports de raccordement sur le commutateur (switch)", "Il définit le réseau virtuel en fonction des adresses IP des machines", "Il utilise des protocoles de routage avancés"],
      correct: [1],
      explanation: "Les VLANs de niveau 1 (port-based) définissent un réseau virtuel en fonction des ports de raccordement sur le commutateur. Inconvénient : rigidité — si une station change de port, il faut reconfigurer le switch."
    },
    {
      type: "single",
      text: "Pourquoi le VLAN de niveau 2 (MAC address-based) est-il plus souple que le VLAN de niveau 1 ?",
      options: ["Car il est basé sur les adresses IP qui ne changent pas", "Car il est basé sur les adresses MAC des stations, qui sont uniques et indépendantes de la localisation physique de la machine", "Car il ne nécessite pas de commutateur", "Car il offre un débit réseau plus élevé"],
      correct: [1],
      explanation: "Le VLAN de niveau 2 (MAC address-based) est défini sur la base des adresses MAC des stations. Comme l'adresse MAC est unique et implémentée dans l'adaptateur réseau, ce VLAN est indépendant de la localisation physique de la machine."
    },
    {
      type: "multi",
      text: "Quels sont les deux types de VLANs de niveau 3 ? (plusieurs réponses)",
      options: ["Les réseaux virtuels par adresse de sous-réseau (Network address-based VLAN)", "Les réseaux virtuels par protocole (Protocol-based VLAN)", "Les réseaux virtuels par adresse MAC", "Les réseaux virtuels par port physique"],
      correct: [0, 1],
      explanation: "Les VLANs de niveau 3 se divisent en : réseaux virtuels par adresse de sous-réseau (Network address-based VLAN) et réseaux virtuels par protocole (Protocol-based VLAN). Les VLANs par MAC sont de niveau 2, et par port de niveau 1."
    },
    {
      type: "single",
      text: "Quelle est la différence principale entre NAS et SAN ?",
      options: ["NAS stocke en mode bloc, SAN stocke en mode fichier", "NAS fournit un accès partagé aux fichiers via le réseau IP (NFS/SMB), SAN fournit un accès en mode bloc via un réseau dédié haut débit (Fibre Channel, iSCSI)", "NAS est plus performant que SAN", "NAS et SAN sont identiques, seul le nom diffère"],
      correct: [1],
      explanation: "NAS (Network Attached Storage) fournit un accès au niveau fichier via le réseau IP (NFS pour Linux, SMB/CIFS pour Windows). SAN (Storage Area Network) fournit un accès en mode bloc via un réseau dédié haut débit (Fibre Channel, iSCSI) — le stockage apparaît comme un disque local."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une appliance virtuelle (OVA) ?",
      options: ["Un serveur physique dédié à une seule application", "Une machine virtuelle préconfigurée incluant un OS et des applications préinstallées, distribuée sous forme d'archive unique prête à l'emploi", "Un hyperviseur de type 2 portable", "Un format de fichier pour sauvegarder les disques physiques"],
      correct: [1],
      explanation: "Une appliance virtuelle (OVA - Open Virtual Appliance) est une machine virtuelle préconfigurée avec OS et applications préinstallées. C'est une solution prête à l'emploi distribuée sous forme d'un seul fichier archive."
    },
    {
      type: "single",
      text: "Qu'est-ce que le SDN (Software-Defined Networking) ?",
      options: ["Un protocole réseau pour les connexions Wi-Fi industrielles", "Une approche où le plan de contrôle (décisions de routage) est séparé du plan de données (transmission des paquets) et géré de façon centralisée par logiciel", "Un type de switch physique haute performance", "Un standard de câblage pour les datacenters"],
      correct: [1],
      explanation: "Le SDN sépare le plan de contrôle (qui décide du routage) du plan de données (qui transmet les paquets). Le réseau devient programmable et géré centralement par un contrôleur logiciel. Cela permet une gestion flexible et automatisée du réseau."
    },
    {
      type: "single",
      text: "Qu'est-ce que la NFV (Network Function Virtualization) ?",
      options: ["Un protocole de chiffrement des données en transit", "La virtualisation des fonctions réseau physiques (pare-feu, routeurs, load balancers) sous forme de logiciels s'exécutant sur du matériel standard", "Un système de fichiers distribué pour les réseaux", "Un nouveau standard Wi-Fi 6E"],
      correct: [1],
      explanation: "La NFV consiste à virtualiser des équipements réseau traditionnellement matériels (pare-feu, routeurs, load balancers) en les exécutant comme des logiciels sur du matériel x86 standard. Réduit les coûts, augmente la flexibilité."
    },
    {
      type: "single",
      text: "Quelle est la différence principale entre SAN et NAS ?",
      options: ["SAN est moins performant mais moins coûteux que NAS", "SAN fournit un accès en mode bloc via un réseau dédié haute performance, NAS fournit un accès en mode fichier via un réseau IP standard", "NAS utilise le protocole Fibre Channel, SAN utilise SMB/NFS", "SAN et NAS sont identiques, seule la marque diffère"],
      correct: [1],
      explanation: "SAN (Storage Area Network) : réseau dédié haute performance, accès en mode bloc (comme un disque local), protocoles Fibre Channel ou iSCSI. NAS (Network Attached Storage) : serveur de fichiers sur réseau IP standard, accès en mode fichier via NFS (Linux) ou SMB/CIFS (Windows)."
    },
    {
      type: "multi",
      text: "Quels protocoles sont utilisés par un SAN (Storage Area Network) ? (plusieurs réponses)",
      options: ["Fibre Channel (FC)", "iSCSI (SCSI sur TCP/IP)", "NFS (Network File System)", "SMB/CIFS (Windows File Sharing)"],
      correct: [0, 1],
      explanation: "Un SAN utilise des protocoles d'accès en mode bloc : Fibre Channel (FC) pour les réseaux dédiés très performants, et iSCSI (SCSI encapsulé dans TCP/IP) pour les SAN sur réseaux Ethernet. NFS et SMB/CIFS sont des protocoles de mode fichier utilisés par NAS."
    },
    {
      type: "single",
      text: "Qu'est-ce que le 'thin provisioning' (provisionnement fin) dans la virtualisation de stockage ?",
      options: ["Allouer immédiatement tout l'espace disque demandé à une VM", "Allouer dynamiquement l'espace disque réellement consommé, au lieu de réserver tout l'espace dès le départ", "Compresser toutes les données stockées dans les volumes logiques", "Répartir les données sur plusieurs disques pour la redondance"],
      correct: [1],
      explanation: "Le thin provisioning alloue l'espace disque de façon dynamique : la VM déclare avoir besoin de 100 Go mais n'utilise que l'espace réellement consommé. Opposite : thick provisioning, qui réserve tout l'espace dès la création. Le thin optimise l'utilisation du stockage."
    },
    {
      type: "multi",
      text: "Quels sont les avantages du SDN par rapport aux réseaux traditionnels ? (plusieurs réponses)",
      options: ["Réseau programmable et configurable par logiciel", "Gestion centralisée de l'ensemble du réseau", "Automatisation des configurations réseau", "Élimination complète du matériel réseau physique"],
      correct: [0, 1, 2],
      explanation: "Le SDN permet : la programmabilité du réseau, une gestion centralisée (vue globale du réseau), et l'automatisation des configurations. Il ne supprime pas le matériel physique : le plan de données reste matériel, seul le plan de contrôle est logiciel."
    },
    {
      type: "single",
      text: "Comment fonctionne OpenFlow dans un réseau SDN quand un paquet n'a pas de correspondance dans la table de flux ?",
      options: ["Le switch rejette le paquet automatiquement", "Le switch interroge le contrôleur SDN via OpenFlow pour obtenir les règles relatives à la gestion de ce paquet", "Le switch envoie le paquet en broadcast sur tous ses ports", "Le switch demande à l'administrateur réseau une confirmation manuelle"],
      correct: [1],
      explanation: "Fonctionnement OpenFlow : un paquet entre dans le switch → cherche une correspondance dans sa table de flux → si trouvée : applique l'action spécifiée → si non trouvée : interroge le contrôleur SDN via OpenFlow qui décide de la manière dont le paquet doit être acheminé."
    },
    {
      type: "multi",
      text: "Qu'est-ce que contient une règle de table de flux OpenFlow ? (plusieurs réponses)",
      options: ["Des critères de correspondance (adresse source/destination, protocole, ports)", "Une action à exécuter (transférer, bloquer, rediriger)", "Des statistiques (nombre de paquets et d'octets traités)", "Le code source de l'application à traiter"],
      correct: [0, 1, 2],
      explanation: "Une règle de table de flux OpenFlow contient : (1) des critères de correspondance (adresse source/destination, protocole, ports) pour identifier les paquets, (2) une action à exécuter (transférer, bloquer, rediriger), (3) des statistiques (paquets et octets traités)."
    },
    {
      type: "multi",
      text: "Quelles sont les deux limitations principales du SDN ? (plusieurs réponses)",
      options: ["Point de panne central (Single Point of Failure) : si le contrôleur tombe, le réseau devient instable", "Point d'attaque unique (Single Point of Attack) : si le contrôleur est compromis, tout le réseau est affecté", "Incompatibilité avec les équipements Cisco et Juniper", "Impossibilité de gérer le trafic réseau à grande échelle"],
      correct: [0, 1],
      explanation: "Le SDN a deux limitations majeures : (1) Single Point of Failure — la défaillance du contrôleur SDN peut rendre le réseau instable ou indisponible ; (2) Single Point of Attack — si le contrôleur est compromis, l'ensemble du réseau peut être affecté. Des configurations de contrôleurs redondants sont souvent mises en place."
    },
    {
      type: "single",
      text: "Dans l'architecture ETSI NFV, que désigne le bloc MANO ?",
      options: ["Un protocole de communication entre VNFs", "Management and Orchestration : l'ensemble des composants de gestion NFV incluant NFVO, VNFM et VIM", "Un type de serveur COTS pour les fonctions réseau virtualisées", "Le plan de données de l'infrastructure NFV"],
      correct: [1],
      explanation: "MANO (Management and Orchestration) est le bloc central de gestion de l'architecture ETSI NFV. Il comprend trois composants : NFVO (NFV Orchestrator — garantit les ressources pour les VNFs), VNFM (VNF Manager — gère le cycle de vie des VNFs), et VIM (Virtualized Infrastructure Manager — contrôle les ressources de la NFVI)."
    },
    {
      type: "single",
      text: "Qu'est-ce que la NFVI (NFV Infrastructure) dans l'architecture ETSI NFV ?",
      options: ["L'ensemble des VNFs déployées sur le réseau", "L'infrastructure qui fournit les ressources virtuelles nécessaires (calcul, réseau, stockage) pour supporter l'exécution des VNFs", "Le contrôleur SDN qui gère les flux NFV", "Le registre centralisé des fonctions réseau disponibles"],
      correct: [1],
      explanation: "La NFVI (NFV Infrastructure) fournit les ressources virtuelles nécessaires (capacité réseau, puissance de calcul, espace mémoire) pour supporter l'exécution des VNFs. Elle comprend la couche de virtualisation (hyperviseur) et le matériel physique sous-jacent (serveurs, stockage, réseau)."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'une VNF (Virtual Network Function) ?",
      options: ["Un switch physique haute performance pour les datacenters", "Une fonction réseau traditionnellement assurée par un équipement physique dédié (pare-feu, NAT, load balancer), maintenant virtualisée et exécutée sur du matériel standard", "Un protocole de routage pour les réseaux SDN", "Un type de VLAN pour l'isolation des datacenters"],
      correct: [1],
      explanation: "Une VNF (Virtual Network Function) est une fonction réseau traditionnellement assurée par un équipement physique dédié (pare-feu, routeur, NAT, load balancer, DPI), maintenant virtualisée et exécutée sous forme de machine virtuelle sur des serveurs standards (COTS). Les VNFs remplacent les nœuds réseau physiques."
    },
    {
      type: "single",
      text: "Qu'est-ce qu'un LUN (Logical Unit Number) dans un SAN ?",
      options: ["Un numéro de port unique d'un switch Fibre Channel", "Un volume logique avec un identifiant unique résidant dans un ou plusieurs périphériques SAN, accessible par le serveur comme un disque local", "Un protocole de communication entre baies de stockage SAN", "Un type de cache pour les requêtes d'accès au stockage SAN"],
      correct: [1],
      explanation: "Un LUN (Logical Unit Number) est un volume logique avec un identifiant unique, qui peut résider dans un ou plusieurs périphériques de stockage SAN. Les blocs logiques LUN sont directement accessibles par le système d'exploitation du serveur comme s'ils étaient des disques locaux — c'est la clé de l'accès en mode bloc du SAN."
    },
    {
      type: "single",
      text: "Qu'est-ce que le protocole FCoE (Fibre Channel over Ethernet) ?",
      options: ["Un remplacement du protocole Ethernet par Fibre Channel dans les datacenters", "Une technologie permettant de transporter le trafic Fibre Channel sur des réseaux Ethernet, véhiculant à la fois le trafic applicatif et le trafic SAN", "Un protocole de stockage objet pour les clouds publics", "Un type de VLAN dédié au stockage SAN"],
      correct: [1],
      explanation: "FCoE (Fibre Channel over Ethernet) est une technologie permettant de transporter le trafic Fibre Channel sur des réseaux Ethernet, tout en conservant les mécanismes FC. L'infrastructure Ethernet véhicule à la fois le trafic applicatif et le trafic SAN, offrant des débits élevés (dizaines de Gbit/s)."
    },
    {
      type: "single",
      text: "Qu'est-ce que Mininet dans le contexte des réseaux SDN ?",
      options: ["Un hyperviseur de type 1 léger pour les réseaux virtuels", "Un logiciel open source permettant de créer des réseaux virtuels complets (hôtes, commutateurs, contrôleurs SDN) sur un seul ordinateur en utilisant les namespaces réseau de Linux", "Un protocole de monitoring pour les contrôleurs SDN", "Un format de configuration pour les tables de flux OpenFlow"],
      correct: [1],
      explanation: "Mininet est un logiciel open source qui crée des réseaux virtuels complets sur un seul ordinateur en émulant des hôtes, des commutateurs OpenFlow, des contrôleurs SDN et des liens réseau. Il utilise les namespaces réseau de Linux pour l'isolation. Compatible avec OpenDaylight, Ryu, ONOS et POX."
    },
    {
      type: "single",
      text: "Que sont les serveurs COTS (Commercial Off-The-Shelf) dans le contexte de la NFV ?",
      options: ["Des serveurs propriétaires avec des extensions matérielles dédiées aux fonctions réseau", "Des serveurs standard prêts à l'emploi, moins chers que les équipements réseau propriétaires, pouvant réunir plusieurs fonctions réseau virtualisées sur une seule machine", "Des commutateurs OpenFlow haute performance pour les environnements NFV", "Des serveurs NAS dédiés aux infrastructures NFV"],
      correct: [1],
      explanation: "Les serveurs COTS sont des serveurs standard prêts à l'emploi, beaucoup moins chers que les équipements réseaux propriétaires. Ils peuvent exécuter diverses tâches et réunir plusieurs fonctions réseau virtualisées (VNFs) sur un seul serveur physique, réduisant les coûts et les interventions sur le terrain."
    },
    {
      type: "single",
      text: "Quelle est la configuration typique d'un SAN pour assurer la haute disponibilité ?",
      options: ["Un seul FABRIC redondant avec deux baies de stockage", "Un double FABRIC (deux réseaux de switches Fibre Channel interconnectés) pour assurer la tolérance aux pannes et la maintenance matérielle transparente", "Une connexion directe entre les serveurs et les baies de stockage sans switch", "Un protocole iSCSI sur un réseau Wi-Fi haute performance"],
      correct: [1],
      explanation: "Les réseaux SAN sont configurés en double FABRIC (deux réseaux redondants de switches Fibre Channel) pour assurer une haute disponibilité par duplication du chemin d'accès. Cela garantit la tolérance aux pannes et permet une maintenance matérielle transparente pour les applications."
    }
  ],
  flashcards: [
    { term: "LVM (Logical Volume Manager)", def: "Gestionnaire de volumes logiques Linux. Abstrait les disques physiques pour créer des volumes flexibles et redimensionnables à chaud. Structure à 3 niveaux : PV (Physical Volume) → VG (Volume Group) → LV (Logical Volume)." },
    { term: "Volume Physique (PV)", def: "1er niveau LVM. Disque dur ou partition physique formaté pour LVM. Correspond au matériel réel. Plusieurs PV peuvent être regroupés en un Groupe de Volumes (VG)." },
    { term: "Groupe de Volumes (VG)", def: "2e niveau LVM. Pool de stockage unifié formé par un ou plusieurs Volumes Physiques (PV). Les Volumes Logiques (LV) sont découpés dans ce pool. Permet de regrouper des disques hétérogènes." },
    { term: "Volume Logique (LV)", def: "3e niveau LVM. Partition virtuelle flexible créée depuis un VG. Peut être redimensionnée à chaud (extend, resize) contrairement aux partitions classiques. C'est ce niveau qui est formaté et monté." },
    { term: "DAS (Direct Attached Storage)", def: "Stockage directement connecté à un seul serveur (câble SATA, SAS, USB). Simple et rapide mais pas partageable entre serveurs. Exemples : disque dur interne, disque externe USB." },
    { term: "SAN (Storage Area Network)", def: "Réseau dédié haute performance reliant des serveurs à des systèmes de stockage (baies SAN). Le stockage apparaît comme un disque local pour le serveur (accès en mode bloc). Protocoles : Fibre Channel, iSCSI. Haute performance, coût élevé." },
    { term: "NAS (Network Attached Storage)", def: "Serveur de fichiers accessible en réseau TCP/IP. Partage des fichiers via NFS (Linux) ou SMB/CIFS (Windows). Accès en mode fichier. Plus simple et moins coûteux qu'un SAN, mais moins performant. Risque de Single Point of Failure." },
    { term: "VLAN (Virtual Local Area Network)", def: "Réseau local virtuel regroupant des machines de façon logique (pas physique) sur un même commutateur ou entre commutateurs. 3 niveaux : Niveau 1 (par port), Niveau 2 (par adresse MAC), Niveau 3 (par sous-réseau IP ou protocole)." },
    { term: "VPN (Virtual Private Network)", def: "Canal de communication sécurisé et chiffré entre sites géographiquement distants via Internet. Crée un réseau privé virtuel au-dessus d'un réseau public. Utilisé pour connecter des filiales, du télétravail, ou des clouds hybrides." },
    { term: "SDN (Software-Defined Networking)", def: "Approche de réseau virtualisé où le plan de contrôle (décisions de routage) est séparé du plan de données (transmission des paquets). Le réseau est programmable et géré de manière centralisée via un contrôleur logiciel." },
    { term: "NFV (Network Function Virtualization)", def: "Virtualisation des équipements réseau (pare-feu, routeurs, load balancers) sous forme de fonctions logicielles exécutées sur du matériel standard (serveurs x86). Remplace les appliances physiques dédiées." },
    { term: "OVF vs OVA", def: "OVF (Open Virtualization Format) : format standard multi-fichiers (descripteur XML + images disque VHD/VMDK + manifeste). OVA : archive unique (.tar) regroupant tous les fichiers OVF. OVA = distribution clé-en-main d'une appliance virtuelle." },
    { term: "Thin Provisioning vs Thick Provisioning", def: "Thin : l'espace disque est alloué dynamiquement selon la consommation réelle → optimise l'utilisation du stockage. Thick : tout l'espace est réservé immédiatement à la création → plus simple mais gaspille de l'espace. Choix selon politique de performance/densité." },
    { term: "SDN vs NFV", def: "SDN (Software-Defined Networking) : sépare plan de contrôle et plan de données → réseau programmable. NFV (Network Function Virtualization) : virtualise les équipements réseau physiques (firewall, routeur) en logiciels. Complémentaires : SDN gère le flux, NFV virtualise les fonctions." },
    { term: "VLAN par niveaux (1, 2, 3)", def: "Niveau 1 (port-based) : basé sur le port du switch, rigide. Niveau 2 (MAC address-based) : basé sur l'adresse MAC, souple mais requiert configuration. Niveau 3 (IP/protocole) : basé sur l'adresse IP ou le protocole applicatif, le plus flexible." },
    { term: "iSCSI", def: "Protocole SAN qui encapsule les commandes SCSI (accès disque en mode bloc) dans des paquets TCP/IP. Permet de créer un SAN à moindre coût sur un réseau Ethernet standard. Alternative moins coûteuse au Fibre Channel." },
    { term: "OpenFlow", def: "Protocole clé du SDN standardisé par l'Open Network Foundation (ONF). Permet au contrôleur SDN de gérer directement les équipements réseau via des tables de flux. Fonctionnement : paquet entrant → recherche dans flow table → correspondance → action (transférer/bloquer) ; pas de correspondance → interroge le contrôleur." },
    { term: "Table de flux (Flow Table) OpenFlow", def: "Structure de données dans un switch OpenFlow contenant des règles de traitement des paquets. Chaque règle comprend : critères de correspondance (adresse src/dst, protocole, port), action à exécuter (transférer, bloquer, rediriger), et statistiques (paquets/octets traités)." },
    { term: "ETSI NFV MANO", def: "Management and Orchestration (MANO) de l'architecture ETSI NFV. Comprend : NFVO (NFV Orchestrator — allocation des ressources aux VNFs), VNFM (VNF Manager — cycle de vie des VNFs : création, mise à l'échelle, fin), VIM (Virtualized Infrastructure Manager — contrôle des ressources physiques NFVI)." },
    { term: "VNF (Virtual Network Function)", def: "Fonction réseau (pare-feu, NAT, load balancer, DPI, DNS, routeur, VPN) virtualisée et exécutée sur du matériel standard (serveur COTS) au lieu d'équipements dédiés. Les VNFs remplacent les nœuds réseau physiques propriétaires. Gérées par le VNFM dans l'architecture ETSI NFV." },
    { term: "NFVI (NFV Infrastructure)", def: "Couche d'infrastructure de l'architecture ETSI NFV. Fournit les ressources virtuelles (calcul, réseau, stockage) pour exécuter les VNFs. Composée de : matériel physique (serveurs COTS, switches, stockage) + couche de virtualisation (hyperviseur). Le VIM gère les ressources NFVI." },
    { term: "LUN (Logical Unit Number)", def: "Volume logique avec identifiant unique dans un SAN. Peut résider sur un ou plusieurs périphériques de stockage physiques. Accessible par le serveur comme un disque local (accès en mode bloc). Le système de fichiers du serveur est installé directement sur le LUN, contrairement au NAS (accès fichier)." },
    { term: "FCoE (Fibre Channel over Ethernet)", def: "Protocole SAN permettant de transporter le trafic Fibre Channel sur des réseaux Ethernet. Unifie le trafic applicatif et le trafic SAN sur la même infrastructure Ethernet. Débits élevés (dizaines de Gbit/s). Intermédiaire entre FC (dédié, coûteux) et iSCSI (IP, économique)." },
    { term: "Mininet (SDN)", def: "Logiciel open source d'émulation de réseaux SDN sur un seul ordinateur. Crée des hôtes, commutateurs OpenFlow, contrôleurs et liens réseau virtuels en utilisant les namespaces réseau Linux. Compatible avec OpenDaylight, Ryu, ONOS, POX. Idéal pour tester et prototyper des architectures SDN." }
  ]
};
