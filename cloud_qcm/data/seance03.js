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
    { term: "OVF vs OVA", def: "OVF (Open Virtualization Format) : format standard multi-fichiers (descripteur XML + images disque VHD/VMDK + manifeste). OVA : archive unique (.tar) regroupant tous les fichiers OVF. OVA = distribution clé-en-main d'une appliance virtuelle." }
  ]
};
