$(document).ready(function() {
    //window.location.href = "https://illicolove.com/under.html"
    // Configuration de i18next pour les différentes langues
    // Sélectionnez tous les éléments de la page
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLanguagex = urlParams.get("lg");
     if(selectedLanguagex){
      localStorage.setItem('selectedLanguage', selectedLanguagex);
     }
    i18next.init({
      lng: localStorage.getItem('selectedLanguage') || 'fr',
      debug: true, 
      resources: { 
        fr: {        
          translation : { 
            "INDEXID1":`Abonnez-vous et suivez`, 
            "INDEXID2":`Accueil`,
            "INDEXID3":`À propos <i class="bi bi-chevron-down"></i>`,
            "INDEXID4":`Contact`, 
            "INDEXID5":`Services`,
            "INDEXID6":`Nos produits`,
            "INDEXID7":`Termes <i class="bi bi-chevron-down"></i>`,
            "INDEXID8":`Termes et conditions`,
            "INDEXID9":`Politique`,
            "INDEXID10":`F.A.Q `,
            "INDEXID11":`Langues <i class="bi bi-chevron-down"></i>`,
            "INDEXID12":`Urgence`,
            "INDEXID13":``,
            "INDEXID14XXX":`Votre partenaire de confiance pour des solutions complètes et de qualité en importation, logistique, transit international, import-export, consignation et location. `,
            "INDEXID15":`À propos <i class="bi bi-arrow-right"></i>`,
            "INDEXID16":` À propos de l'entreprise`,
            "INDEXID17":`Des solutions logistiques, d'importations, de transit, de consignation et de location pour l'excellence`,
            "INDEXID18":`Créée en 2024, Arcomaritimo a son siège social à ... (à compléter). 
            Nous avons démarré nos opérations en ... (à compléter). Passionnés par notre métier, 
            nous excellons dans tous les aspects de la logistique, du transit à l'import-export. 
            Engagés dans le pragmatisme, la transparence, et la crédibilité, nous visons à offrir un 
            service d'excellence et à garantir la satisfaction de nos clients. 
            Notre organisation repose sur des valeurs telles que la performance, la fiabilité, l'engagement, 
            le respect et l'écoute. 
            Nous sommes prêts à vous accompagner pour transformer vos projets en réussites concrètes.`,
            "INDEXID19":`Nos Services `,
            "INDEXID21X":`Arcomaritimo, votre Partenaire de Proximité Engagé dans la concrétisation de vos 
            projets et la fourniture de services de standing, Arcomaritimo couvre 199 pays à l'international. 
            Nous sommes présents dans tous les pays. Nos navires desservent tous les ports du monde. Nous effectuons 
            cinq affrètements par mois et dessert plus de 329 ports à travers le globe, avec une flotte de 450 
            porte-conteneurs d'une capacité totale de 2,1 millions d'EVP. 
            Nous offrons également des services de cabotage maritime et de transport par voie fluviale.
            `,
            "INDEXID21":`Nous desservons plus de 320 ports à travers le monde avec une flotte de 385 porte-conteneurs 
            de grande capacité. En plus du transport maritime, nous offrons divers services de gestion maritime et d'équipements connexes. L'armateur latino dessert tous les ports du monde via ses navires. Arcomaritimo réalise en moyenne cinq affrètements par mois. Notre flotte de transport routier comprend plus de 2000 camions de diverses catégories, 
            capables d'acheminer vos cargaisons en toute sécurité et efficacité.`,
            "INDEXID22":` <strong style="color: white; font-weight: bold;">Département Logistique, Transit, et Consignation</strong> <br>
            `,
            "INDEXID22X":`Pour toute demande, veuillez vous adresser au service logistique via l'adresse email
            <a href="mailto:Arcomaritimos5190@gmail.com ">Arcomaritimos5190@gmail.com </a>`,
            "INDEXID23":`Pays à l'internationale`,
            "INDEXID24":`Projets réalisés`,
            "INDEXID25":`Clients satisfaits`,
            "INDEXID26":`Trophées`,
            "INDEXID27":`Les Services`,
            "INDEXID28":`Voici nos Services`,
            "INDEXID29":`Suivi des conteneurs`,
            "INDEXID30":`Nous assurons un suivi en temps réel de vos conteneurs, garantissant une traçabilité optimale de vos marchandises du départ à l'arrivée.`,
            "INDEXID31":`Expédition et réception de marchandises`,
            "INDEXID32":`Nous prenons en charge l'ensemble du processus d'expédition et de réception, assurant une gestion efficace et sécurisée de vos envois.`,
            "INDEXID33":` Logistique totale`,
            "INDEXID34":`Notre service de logistique totale intègre toutes les étapes de la chaîne d'approvisionnement, offrant des solutions personnalisées et flexibles.`,
            "INDEXID35":`Négoce international`,
            "INDEXID36":` Nous facilitons le commerce international avec des services de négoce, incluant l'achat, la vente, et la distribution de biens à travers le monde.`,
            "INDEXID37":`Location et vente de conteneurs`,
            "INDEXID38":`Nous fournissons les conteneurs pour transporter vos cargaisons ,tout type de conteneur ,location et vente. Vente ( catégorie neuve et d'occasion ). Négoce internationale des conteneurs etc.`,
            "INDEXID39":`Fret en vrac et cargaisons de projet`,
            "INDEXID40":`Nous gérons le transport de fret en vrac et les cargaisons de projet, en assurant la livraison sécurisée de marchandises volumineuses et spécialisées.`,
            "INDEXID41":`nous fournissons une logistique flexible et de qualité`,
            "INDEXID42":`Foire aux Questions (FAQ)`,
            "INDEXID43":`1. Quels services proposez-vous ?`,
            "INDEXID44":`Nous proposons une gamme complète de services logistiques, incluant le suivi des conteneurs, 
            `,
            "INDEXID45":`2. Où se trouve votre siège social ?`,
            "INDEXID46":`Notre siège social est situé à ... (à compléter).`,
            "INDEXID47":`3. Quand avez-vous démarré vos opérations ?`,
            "INDEXID48":`Nous avons démarré nos opérations en ... (à compléter).`,
            "INDEXID49":`4. Quelles sont les tailles de conteneurs disponibles ?`,
            "INDEXID50":`Nous proposons des conteneurs de 20 pieds et de 40 pieds, conformes aux normes du transport maritime.`,
            "INDEXID51":`5. Quels types de conteneurs proposez-vous à la vente et à la location ?`,
            "INDEXID52":`Nous proposons des conteneurs neufs et usagés adaptés à divers besoins logistiques.`,
            "INDEXID53":`6. Comment puis-je suivre mes conteneurs ?`,
            "INDEXID54":`Nous offrons un suivi en temps réel de vos conteneurs via notre plateforme en ligne,`,
            "INDEXID55":`7. Quels types de marchandises pouvez-vous transporter ?`,
            "INDEXID56":`	Nous pouvons transporter une large gamme de marchandises, y compris le fret en vrac, les cargaisons de projet, 
            `,
            "INDEXID57":`8. Proposez-vous des solutions pour les projets internationaux ?`,
            "INDEXID58":`Oui, nous fournissons des solutions logistiques complètes pour des projets internationaux, en utilisant nos 
							ressources et notre expertise pour garantir le succès de vos projets.`,
            "INDEXID59":`9. Quelles sont les valeurs de votre entreprise ?`,
            "INDEXID60":`Nos valeurs incluent la performance, la fiabilité, l'engagement, le respect et l'écoute. Nous nous engageons à offrir un 
							service de qualité exceptionnelle, basé sur la transparence et la sincérité.`,
            "INDEXID61":`10. Comment puis-je contacter votre service client ?`,
            "INDEXID62":`Vous pouvez nous contacter via notre site web, par téléphone ou par email. Nos coordonnées 
							complètes sont disponibles sur notre page de contact.`,
            "INDEXID63":`11. Offrez-vous des services de logistique pour les matières premières ?`,
            "INDEXID64":`Oui, nous offrons des services de qualité pour l'exportation des matières premières, de la production 
							jusqu'à l'expédition du produit brut ou transformé.`,
            "INDEXID65":`12. Pouvez-vous gérer des cargaisons spécialisées et volumineuses ? `,
            "INDEXID66":`Absolument. Nous avons l'expertise et les ressources nécessaires pour gérer des cargaisons spécialisées et volumineuses,
							 assurant leur livraison sécurisée et efficace.`,
            "INDEXID67":`Informations de contact`,
            "INDEXID68":`Addresse`,
            "INDEXID69":`Numéro de contact`,
            "INDEXID70":`Notre organisation repose sur des valeurs telles que la performance, la fiabilité, 
						l'engagement, le respect et l'écoute. Nous sommes prêts à vous accompagner pour 
						transformer vos projets en réussites concrètes.`,
            "INDEXID71":`les liens`,
            "INDEXID77":`Prendre contact`, 
            "INDEXID78":`Informations sociales`,
            "TERMES1":`1. Introduction`,
            "TERMES2":`Bienvenue chez Arco Maritimo. En accédant à notre plateforme, vous acceptez les termes et conditions décrits ci-dessous.`,
            "TERMES3":`2. Utilisation de la Plateforme`,
            "TERMES4":` Notre plateforme est destinée à fournir des services de logistique maritime. Vous acceptez de ne pas utiliser notre plateforme à des fins illégales ou non autorisées.`,
            "TERMES5":`3. Propriété Intellectuelle`,
            "TERMES6":`Tout le contenu de notre plateforme, y compris les textes, graphiques, logos et images, est la propriété d'Arco Maritimo et est protégé par les lois sur la propriété intellectuelle.`,
            "TERMES7":`4. Limitation de Responsabilité`,
            "TERMES8":`Arcomaritimo ne sera pas responsable des dommages directs, indirects, accidentels, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser notre plateforme.`,
            "TERMES9":`5. Modifications des Termes`,
            "TERMES10":`Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les modifications prendront effet immédiatement après leur publication sur cette page.`,
            "TERMES11":`6. Contact`,
            "TERMES12":`Si vous avez des questions sur ces termes et conditions, veuillez nous contacter à l'adresse suivante : Arcomaritimos5190@gmail.com`,
            "DEPARTMENTS1":`Départements d'ARCO International`,
            "DEPARTMENTS2":`ARCO International répond aux besoins variés de nos clients dans les secteurs minier, agricole, logistique, touristique, automobile, et bien plus encore.`,
            "DEPARTMENTS3":`ARCO Minerals`,
            "DEPARTMENTS4":`Exportation de produits miniers tels que la bauxite, le manganèse, le lithium, le minerai de fer, le cobalt, la cathode de cuivre, les ferrailles, et la latérite.
            Transport logistique minier par camion, navire, train, et voie aérienne.`,
            "DEPARTMENTS5":`ARCO Agri`,
            "DEPARTMENTS6":`Spécialisé dans la production de matières premières agricoles destinées à la transformation et à l'exportation.`,
            "DEPARTMENTS7":`ARCO Travel Tour `,
            "DEPARTMENTS8":`Propose des opérations de voyages, du tourisme, et des circuits de découverte à travers le monde. `,
            "DEPARTMENTS9":`ARCO Matériaux de Construction `,
            "DEPARTMENTS10":`Production et vente internationale de divers matériaux de construction. `,
            "DEPARTMENTS11":`ARCO Import `,
            "DEPARTMENTS12":`Département dédié à l'importation de produits et matériels étrangers de toutes gammes et catégories. `,
            "DEPARTMENTS13":`ARCO Export (Produits Tropicaux et Agro-Alimentaires) `,
            "DEPARTMENTS14":`Exportation de matières premières et de produits transformés, y compris des produits NON-OGM, OGM, et BIO. `,
            "DEPARTMENTS15":`ARCO Automobile & Industrie `,
            "DEPARTMENTS16":`Vente et achat de véhicules neufs et d'occasion.
						Production industrielle de véhicules de toutes options.
						Location et vente de véhicules. `,
            "DEPARTMENTS17":`ARCO Max Private Jet & Yacht `,
            "DEPARTMENTS18":`Location de jets privés, d'avions commerciaux, d'avions cargo et de yachts.
						Vente et achat de jets et de yachts `,
            "DEPARTMENTS19":`ARCO Cement `,
            "DEPARTMENTS20":`Exportation et importation de ciment, ainsi que production. `,
            "DEPARTMENTS21":`ARCO Petroleum `,
            "DEPARTMENTS22":`Vente, achat et production industrielle de produits pétroliers, incluant le gazole et l'essence. `,
            "DEPARTMENTS23":`ARCO Maritimo Transit Logistics Consignation Shipping `,
            "DEPARTMENTS24":`Services couvrant plus de 320 ports dans le monde.
						Flotte de 385 porte-conteneurs avec une grande capacité.
						Services d'équipement et de gestion maritime.
						Déclaration douanière. `,
            "DEPARTMENTS25":`ARCO Fleet `,
            "DEPARTMENTS26":`Plus de 2000 camions de diverses catégories pour le transport de différents types de cargaisons. `,
            "DEPARTMENTS27":`ARCO Représentation `,
            "DEPARTMENTS28":`Représentation de marques, d'organismes, d'institutions et de projets. `,
            "DEPARTMENTS29":`ARCO Container Services `,
            "DEPARTMENTS30":`Fourniture de conteneurs pour le transport de cargaisons.
						Vente et location de conteneurs neufs et d'occasion.
						Négoce international de conteneurs. `,
            "DEPARTMENTS31":`ARCO Produits Alimentaires `,
            "DEPARTMENTS32":`Département des produits alimentaires incluant :
						Sucre ICUMSA 45 et IC150 du Brésil.
						Huile de palme en bidons de 25L et 20L.
						Riz local et riz étranger.
						Boissons. `,
            "DEPARTMENTS33":`ARCO Produits Agricoles `,
            "DEPARTMENTS34":`Fourniture d'intrants agricoles tels que l'urée, le DAP, et le NPK.
						Matières premières incluant le soja, la noix de cajou, l'arachide, le manioc, le maïs blanc et jaune, 
						le cacao, le caoutchouc brut, le caoutchouc industriel (TSR 10, 20), les haricots (blancs et rouges), 
						le sorgho, la noix de cajou décortiquée, le sésame (blanc et bigarré), la fibre de coton, les graines 
						de coton, la cardamome, 
						le piment rouge, et les noix de karité. `,
            "DEPARTMENTS35":`Nos départements`,
        }
  
        },
        
          cn: {        
              translation : { 
                  "INDEXID1":`订阅并关注`, 
                  "INDEXID2":`主页`,
                  "INDEXID3":`关于 <i class="bi bi-chevron-down"></i>`,
                  "INDEXID4":`联系我们`, 
                  "INDEXID5":`服务`,
                  "INDEXID6":`我们的产品`,
                  "INDEXID7":`条款 <i class="bi bi-chevron-down"></i>`,
                  "INDEXID8":`条款和条件`,
                  "INDEXID9":`政策`,
                  "INDEXID10":`常见问题 `,
                  "INDEXID11":`语言 <i class="bi bi-chevron-down"></i>`,
                  "INDEXID12":`紧急情况`,
                  "INDEXID13":``,
                  "INDEXID14XXX":`您值得信赖的合作伙伴，提供全面和高质量的进口、物流、国际运输、进出口、寄售和租赁解决方案。`,
                  "INDEXID15":`关于 <i class="bi bi-arrow-right"></i>`,
                  "INDEXID16":`关于公司`,
                  "INDEXID17":`卓越的物流、进口、转运、寄售和租赁解决方案`,
                  "INDEXID18":`Arcomaritimo成立于2024年，总部位于...（待补充）。我们于...（待补充）开始运营。我们对工作充满热情，在物流、转运和进出口各方面都表现出色。我们承诺务实、透明和可信，致力于提供卓越的服务，确保客户满意。我们的组织基于绩效、可靠性、承诺、尊重和倾听等价值观。我们准备好帮助您将项目转化为具体成果。`,
                  "INDEXID19":`我们的服务`,
                  "INDEXID21":`我们通过拥有385艘大容量集装箱船的船队，服务于全球超过320个港口。除了海上运输，我们还提供各种海事管理服务及相关设备。拉丁美洲船东通过其船只为世界所有港口提供服务。Arcomaritimo平均每月进行五次租船业务。我们的陆运车队拥有2000多辆各类卡车，能够安全、高效地运输您的货物。 `,
                  "INDEXID21x":`Arcomaritimo，您身边的合作伙伴，致力于实现您的项目并提供高标准服务，Arcomaritimo覆盖199个国际国家。我们在所有国家都有业务。我们的船只通航全球各个港口。我们每月进行五次包船运输，覆盖全球超过329个港口，拥有450艘集装箱船，总运力为210万个标准箱。我们还提供沿海航运和内河运输服务。`,
                  "INDEXID22":`<strong style="color: white; font-weight: bold;">物流、转运和寄售部门</strong> <br>`,
                  "INDEXID22X":`如有任何需求，请通过电子邮件地址联系物流服务
                  <a href="mailto:Arcomaritimos5190@gmail.com ">Arcomaritimos5190@gmail.com </a>`,
                  "INDEXID23":`国际国家`,
                  "INDEXID24":`完成的项目`,
                  "INDEXID25":`满意的客户`,
                  "INDEXID26":`奖杯`,
                  "INDEXID27":`服务`,
                  "INDEXID28":`这是我们的服务`,
                  "INDEXID29":`集装箱跟踪`,
                  "INDEXID30":`我们提供集装箱的实时跟踪，确保货物从出发到抵达的最佳可追溯性。`,
                  "INDEXID31":`货物的发运和接收`,
                  "INDEXID32":`我们处理整个发运和接收过程，确保高效安全的货物管理。`,
                  "INDEXID33":`全面物流`,
                  "INDEXID34":`我们的全面物流服务整合了供应链的所有环节，提供个性化和灵活的解决方案。`,
                  "INDEXID35":`国际贸易`,
                  "INDEXID36":`我们通过提供贸易服务，包括全球范围内的采购、销售和分销，促进国际贸易。`,
                  "INDEXID37":`集装箱租赁和销售`,
                  "INDEXID38":`我们提供用于运输货物的集装箱，各种类型的集装箱，租赁和销售。销售新旧集装箱。国际集装箱贸易等。`,
                  "INDEXID39":`散货运输和项目货物`,
                  "INDEXID40":`我们管理散货运输和项目货物，确保大宗和专业货物的安全运输。`,
                  "INDEXID41":`我们提供灵活优质的物流服务`,
                  "INDEXID42":`常见问题（FAQ）`,
                  "INDEXID43":`1. 你们提供哪些服务？`,
                  "INDEXID44":`我们提供全面的物流服务，包括集装箱跟踪，`,
                  "INDEXID45":`2. 你们的总部在哪里？`,
                  "INDEXID46":`我们的总部位于...（待补充）。`,
                  "INDEXID47":`3. 你们什么时候开始运营的？`,
                  "INDEXID48":`我们于...（待补充）开始运营。`,
                  "INDEXID49":`4. 你们有哪些尺寸的集装箱？`,
                  "INDEXID50":`我们提供20英尺和40英尺的集装箱，符合海运标准。`,
                  "INDEXID51":`5. 你们提供哪些类型的集装箱租赁和销售？`,
                  "INDEXID52":`我们提供新的和二手的集装箱，适合各种物流需求。`,
                  "INDEXID53":`6. 我如何跟踪我的集装箱？`,
                  "INDEXID54":`我们通过在线平台提供您的集装箱的实时跟踪，`,
                  "INDEXID55":`7. 你们可以运输哪些类型的货物？`,
                  "INDEXID56":`我们可以运输各种货物，包括散货、项目货物，`,
                  "INDEXID57":`8. 你们是否提供国际项目的解决方案？`,
                  "INDEXID58":`是的，我们提供全面的国际项目物流解决方案，利用我们的资源和专业知识确保您的项目成功。`,
                  "INDEXID59":`9. 你们公司的价值观是什么？`,
                  "INDEXID60":`我们的价值观包括绩效、可靠性、承诺、尊重和倾听。我们致力于提供基于透明和真诚的卓越服务。`,
                  "INDEXID61":`10. 我如何联系你们的客户服务？`,
                  "INDEXID62":`您可以通过我们的网站、电话或电子邮件联系我们。我们的完整联系方式在我们的联系页面上提供。`,
                  "INDEXID63":`11. 你们是否提供原材料的物流服务？`,
                  "INDEXID64":`是的，我们提供优质的原材料出口服务，从生产到原料或加工品的发运。`,
                  "INDEXID65":`12. 你们可以管理专业和大宗货物吗？`,
                  "INDEXID66":`绝对可以。我们有管理专业和大宗货物的专业知识和资源，确保其安全高效的运输。`,
                  "INDEXID67":`联系信息`,
                  "INDEXID68":`地址`,
                  "INDEXID69":`联系电话`,
                  "INDEXID70":`我们的组织基于绩效、可靠性、承诺、尊重和倾听等价值观。我们准备好帮助您将项目转化为具体成果。`,
                  "INDEXID71":`链接`,
                  "INDEXID77":`联系`,
                  "INDEXID78":`社交信息`,
                  "TERMES1":`1. 简介`,
                  "TERMES2":`欢迎来到Arco Maritimo。访问我们的平台即表示您接受以下所述的条款和条件。`,
                  "TERMES3":`2. 平台使用`,
                  "TERMES4":`我们的平台旨在提供海运物流服务。您同意不将我们的平台用于非法或未经授权的目的。`,
                  "TERMES5":`3. 知识产权`,
                  "TERMES6":`我们平台上的所有内容，包括文字、图形、徽标和图像，均为Arco Maritimo的财产，并受知识产权法保护。`,
                  "TERMES7":`4. 责任限制`,
                  "TERMES8":`由于使用或无法使用我们的平台而导致的直接、间接、偶然、特殊或后续损害，Arcomaritimo不承担责任。`,
                  "TERMES9":`5. 条款修改`,
                  "TERMES10":`我们保留随时修改这些条款和条件的权利。修改将立即在本页面发布后生效。`,
                  "TERMES11":`6. 联系`,
                  "TERMES12":`如果您对这些条款和条件有任何疑问，请联系：Arcomaritimos5190@gmail.com`,
                  "DEPARTMENTS1":`ARCO国际部门`,
                  "DEPARTMENTS2":`ARCO国际满足客户在采矿、农业、物流、旅游、汽车等领域的各种需求。`,
                  "DEPARTMENTS3":`ARCO矿业`,
                  "DEPARTMENTS4":`出口铝土矿、锰矿、锂矿、铁矿、钴矿、铜阴极、废钢和红土矿等矿产品。通过卡车、船只、火车和航空运输进行矿产物流。`,
                  "DEPARTMENTS5":`ARCO农业`,
                  "DEPARTMENTS6":`专注于生产用于加工和出口的农产品原材料。`,
                  "DEPARTMENTS7":`ARCO旅行旅游`,
                  "DEPARTMENTS8":`提供旅游、旅行和全球探索之旅。`,
                  "DEPARTMENTS9":`ARCO建筑材料`,
                  "DEPARTMENTS10":`生产和国际销售各种建筑材料。`,
                  "DEPARTMENTS11":`ARCO进口`,
                  "DEPARTMENTS12":`专门进口各种类别和系列的外国产品和设备。`,
                  "DEPARTMENTS13":`ARCO出口（热带和农产品）`,
                  "DEPARTMENTS14":`出口原材料和加工产品，包括非转基因、转基因和有机产品。`,
                  "DEPARTMENTS15":`ARCO汽车与工业`,
                  "DEPARTMENTS16":`新旧车辆的销售和购买。工业生产各种选项的车辆。车辆的租赁和销售。`,
                  "DEPARTMENTS17":`ARCO Max私人飞机与游艇`,
                  "DEPARTMENTS18":`私人飞机、商业飞机、货运飞机和游艇的租赁。私人飞机和游艇的买卖。`,
                  "DEPARTMENTS19":`ARCO水泥`,
                  "DEPARTMENTS20":`水泥的出口、进口和生产。`,
                  "DEPARTMENTS21":`ARCO石油`,
                  "DEPARTMENTS22":`石油产品的销售、购买和工业生产，包括柴油和汽油。`,
                  "DEPARTMENTS23":`ARCO海运物流转运寄售`,
                  "DEPARTMENTS24":`服务覆盖全球320多个港口。拥有385艘高运力集装箱船。提供设备和海运管理服务。报关服务。`,
                  "DEPARTMENTS25":`ARCO车队`,
                  "DEPARTMENTS26":`拥有2000多辆不同类别的卡车，用于运输各种货物。`,
                  "DEPARTMENTS27":`ARCO代表`,
                  "DEPARTMENTS28":`品牌、机构、项目的代表。`,
                  "DEPARTMENTS29":`ARCO集装箱服务`,
                  "DEPARTMENTS30":`提供用于货物运输的集装箱。新旧集装箱的销售和租赁。集装箱的国际贸易。`,
                  "DEPARTMENTS31":`ARCO食品`,
                  "DEPARTMENTS32":`食品部门包括：巴西ICUMSA 45和IC150糖。25L和20L装的棕榈油。国产和外国大米。饮料。`,
                  "DEPARTMENTS33":`ARCO农产品`,
                  "DEPARTMENTS34":`提供农业投入品如尿素、DAP和NPK。原材料包括大豆、腰果、花生、木薯、白玉米和黄玉米、可可、生橡胶、工业橡胶（TSR 10, 20）、白豆和红豆、高粱、去壳腰果、芝麻（白芝麻和花色芝麻）、棉花纤维、棉籽、豆蔻、红辣椒和乳木果仁。`,
                  "DEPARTMENTS35": "我们的部门"
              }
          }, 
          en: {
            translation: {
                "INDEXID1": "Subscribe and follow",
                "INDEXID2": "Home",
                "INDEXID3": "About <i class=\"bi bi-chevron-down\"></i>",
                "INDEXID4": "Contact",
                "INDEXID5": "Services",
                "INDEXID6": "Our products",
                "INDEXID7": "Terms <i class=\"bi bi-chevron-down\"></i>",
                "INDEXID8": "Terms and conditions",
                "INDEXID9": "Policy",
                "INDEXID10": "F.A.Q",
                "INDEXID11": "Languages <i class=\"bi bi-chevron-down\"></i>",
                "INDEXID12": "Emergency",
                "INDEXID13": "",
                "INDEXID14XXX": "Your trusted partner for comprehensive and high-quality solutions in importation, logistics, international transit, import-export, consignment, and leasing.",
                "INDEXID15": "About <i class=\"bi bi-arrow-right\"></i>",
                "INDEXID16": "About the company",
                "INDEXID17": "Logistics, importation, transit, consignment, and leasing solutions for excellence",
                "INDEXID18": "Founded in 2024, Arcomaritimo is headquartered in ... (to be completed). We started our operations in ... (to be completed). Passionate about our work, we excel in all aspects of logistics, from transit to import-export. Committed to pragmatism, transparency, and credibility, we aim to provide excellent service and ensure customer satisfaction. Our organization is based on values such as performance, reliability, commitment, respect, and listening. We are ready to support you in transforming your projects into concrete successes.",
                "INDEXID19": "Our Services",
                "INDEXID21":`We serve over 320 ports worldwide with a fleet of 385 large capacity container ships. In addition to maritime transport, we offer various maritime management services and related equipment. The Latin shipowner serves all the ports of the world via its ships. Arcomaritimo conducts an average of five charters per month. Our road transport fleet includes over 
                2000 trucks of various categories, capable of delivering your cargo safely and efficiently.`,
                "INDEXID21X": "Arcomaritimo, your Proximity Partner Committed to realizing your projects and providing high-standard services, Arcomaritimo covers 199 countries internationally. We are present in all countries. Our ships serve all ports worldwide. We carry out five charters per month and serve more than 329 ports globally, with a fleet of 450 container ships with a total capacity of 2.1 million TEU. We also offer coastal shipping and inland waterway transport services.",
                "INDEXID22": "<strong style=\"color: white; font-weight: bold;\">Logistics, Transit, and Consignment Department</strong> <br>",
                "INDEXID22X": "For any request, please contact the logistics department via the email address <a href=\"mailto:Arcomaritimos5190@gmail.com\">Arcomaritimos5190@gmail.com</a>",
                "INDEXID23": "Countries internationally",
                "INDEXID24": "Projects completed",
                "INDEXID25": "Satisfied customers",
                "INDEXID26": "Awards",
                "INDEXID27": "Services",
                "INDEXID28": "Here are our Services",
                "INDEXID29": "Container tracking",
                "INDEXID30": "We provide real-time tracking of your containers, ensuring optimal traceability of your goods from departure to arrival.",
                "INDEXID31": "Shipping and receiving goods",
                "INDEXID32": "We handle the entire process of shipping and receiving, ensuring efficient and secure management of your shipments.",
                "INDEXID33": "Total logistics",
                "INDEXID34": "Our total logistics service integrates all stages of the supply chain, offering customized and flexible solutions.",
                "INDEXID35": "International trade",
                "INDEXID36": "We facilitate international trade with brokerage services, including the purchase, sale, and distribution of goods worldwide.",
                "INDEXID37": "Container rental and sales",
                "INDEXID38": "We provide containers for transporting your cargo, of all types of containers, for rental and sale. Sale of new and used containers. International container trading, etc.",
                "INDEXID39": "Bulk freight and project cargo",
                "INDEXID40": "We manage bulk freight and project cargo transportation, ensuring the safe delivery of large and specialized goods.",
                "INDEXID41": "we provide flexible and quality logistics",
                "INDEXID42": "Frequently Asked Questions (FAQ)",
                "INDEXID43": "1. What services do you offer?",
                "INDEXID44": "We offer a full range of logistics services, including container tracking,",
                "INDEXID45": "2. Where is your headquarters located?",
                "INDEXID46": "Our headquarters are located in ... (to be completed).",
                "INDEXID47": "3. When did you start your operations?",
                "INDEXID48": "We started our operations in ... (to be completed).",
                "INDEXID49": "4. What container sizes are available?",
                "INDEXID50": "We offer 20-foot and 40-foot containers that comply with maritime transport standards.",
                "INDEXID51": "5. What types of containers do you offer for sale and lease?",
                "INDEXID52": "We offer new and used containers suitable for various logistical needs.",
                "INDEXID53": "6. How can I track my containers?",
                "INDEXID54": "We offer real-time tracking of your containers through our online platform,",
                "INDEXID55": "7. What types of goods can you transport?",
                "INDEXID56": "We can transport a wide range of goods, including bulk freight, project cargo,",
                "INDEXID57": "8. Do you offer solutions for international projects?",
                "INDEXID58": "Yes, we provide comprehensive logistics solutions for international projects, using our resources and expertise to ensure the success of your projects.",
                "INDEXID59": "9. What are the values of your company?",
                "INDEXID60": "Our values include performance, reliability, commitment, respect, and listening. We are committed to providing exceptional quality service based on transparency and sincerity.",
                "INDEXID61": "10. How can I contact your customer service?",
                "INDEXID62": "You can contact us through our website, by phone, or by email. Our complete contact information is available on our contact page.",
                "INDEXID63": "11. Do you offer logistics services for raw materials?",
                "INDEXID64": "Yes, we provide quality services for exporting raw materials, from production to the shipment of raw or processed products.",
                "INDEXID65": "12. Can you handle specialized and large cargo?",
                "INDEXID66": "Absolutely. We have the expertise and resources necessary to handle specialized and large cargo, ensuring their safe and efficient delivery.",
                "INDEXID67": "Contact Information",
                "INDEXID68": "Address",
                "INDEXID69": "Contact number",
                "INDEXID70": "Our organization is based on values such as performance, reliability, commitment, respect, and listening. We are ready to support you in transforming your projects into concrete successes.",
                "INDEXID71": "Links",
                "INDEXID77": "Get in touch",
                "INDEXID78": "Social information",
                "TERMES1": "1. Introduction",
                "TERMES2": "Welcome to Arco Maritimo. By accessing our platform, you agree to the terms and conditions described below.",
                "TERMES3": "2. Use of the Platform",
                "TERMES4": "Our platform is intended to provide maritime logistics services. You agree not to use our platform for illegal or unauthorized purposes.",
                "TERMES5": "3. Intellectual Property",
                "TERMES6": "All content on our platform, including text, graphics, logos, and images, is the property of Arco Maritimo and is protected by intellectual property laws.",
                "TERMES7": "4. Limitation of Liability",
                "TERMES8": "Arcomaritimo will not be liable for direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our platform.",
                "TERMES9": "5. Changes to Terms",
                "TERMES10": "We reserve the right to modify these terms and conditions at any time. Changes will take effect immediately upon their posting on this page.",
                "TERMES11": "6. Contact",
                "TERMES12": "If you have any questions about these terms and conditions, please contact us at: Arcomaritimos5190@gmail.com",
                "DEPARTMENTS1": "ARCO International Departments",
                "DEPARTMENTS2": "ARCO International meets the varied needs of our clients in the mining, agricultural, logistics, tourism, automotive, and many other sectors.",
                "DEPARTMENTS3": "ARCO Minerals",
                "DEPARTMENTS4": "Exporting mining products such as bauxite, manganese, lithium, iron ore, cobalt, copper cathode, scrap metal, and laterite. Mining logistics transport by truck, ship, train, and air.",
                "DEPARTMENTS5": "ARCO Agri",
                "DEPARTMENTS6": "Specializing in the production of agricultural raw materials for processing and export.",
                "DEPARTMENTS7": "ARCO Travel Tour",
                "DEPARTMENTS8": "Offering travel operations, tourism, and discovery tours worldwide.",
                "DEPARTMENTS9": "ARCO Building Materials",
                "DEPARTMENTS10": "Production and international sale of various construction materials.",
                "DEPARTMENTS11": "ARCO Import",
                "DEPARTMENTS12": "Department dedicated to the importation of foreign products and equipment of all ranges and categories.",
                "DEPARTMENTS13": "ARCO Export (Tropical and Agro-Food Products)",
                "DEPARTMENTS14": "Exporting raw materials and processed products, including NON-GMO, GMO, and organic products.",
                "DEPARTMENTS15": "ARCO Automobile & Industry",
                "DEPARTMENTS16": "Sale and purchase of new and used vehicles. Industrial production of vehicles with all options. Leasing and sale of vehicles.",
                "DEPARTMENTS17": "ARCO Max Private Jet & Yacht",
                "DEPARTMENTS18": "Leasing private jets, commercial planes, cargo planes, and yachts. Sale and purchase of jets and yachts.",
                "DEPARTMENTS19": "ARCO Cement",
                "DEPARTMENTS20": "Exporting and importing cement, as well as production.",
                "DEPARTMENTS21": "ARCO Petroleum",
                "DEPARTMENTS22": "Sale, purchase, and industrial production of petroleum products, including diesel and gasoline.",
                "DEPARTMENTS23": "ARCO Maritimo Transit Logistics Consignment Shipping",
                "DEPARTMENTS24": "Services covering more than 320 ports worldwide. Fleet of 385 container ships with high capacity. Equipment and maritime management services. Customs declaration.",
                "DEPARTMENTS25": "ARCO Fleet",
                "DEPARTMENTS26": "Over 2000 trucks of various categories for transporting different types of cargo.",
                "DEPARTMENTS27": "ARCO Representation",
                "DEPARTMENTS28": "Representation of brands, organizations, institutions, and projects.",
                "DEPARTMENTS29": "ARCO Container Services",
                "DEPARTMENTS30": "Providing containers for cargo transport. Sale and lease of new and used containers. International container trade.",
                "DEPARTMENTS31": "ARCO Food Products",
                "DEPARTMENTS32": "Food products department including: ICUMSA 45 and IC150 sugar from Brazil. Palm oil in 25L and 20L cans. Local and foreign rice. Beverages.",
                "DEPARTMENTS33": "ARCO Agricultural Products",
                "DEPARTMENTS34": "Supply of agricultural inputs such as urea, DAP, and NPK. Raw materials including soybeans, cashew nuts, peanuts, cassava, white and yellow corn, cocoa, raw rubber, industrial rubber (TSR 10, 20), beans (white and red), sorghum, shelled cashew nuts, sesame (white and speckled), cotton fiber, cotton seeds, cardamom, red pepper, and shea nuts.",
                "DEPARTMENTS35": "Our departments"
            }
        },
      de: {
        translation: {
            "INDEXID1": "Abonnieren und folgen",
            "INDEXID2": "Startseite",
            "INDEXID3": "Über uns <i class=\"bi bi-chevron-down\"></i>",
            "INDEXID4": "Kontakt",
            "INDEXID5": "Dienstleistungen",
            "INDEXID6": "Unsere Produkte",
            "INDEXID7": "Bedingungen <i class=\"bi bi-chevron-down\"></i>",
            "INDEXID8": "Allgemeine Geschäftsbedingungen",
            "INDEXID9": "Richtlinie",
            "INDEXID10": "FAQ",
            "INDEXID11": "Sprachen <i class=\"bi bi-chevron-down\"></i>",
            "INDEXID12": "Notfall",
            "INDEXID13": "",
            "INDEXID14XXX": "Ihr vertrauenswürdiger Partner für umfassende und qualitativ hochwertige Lösungen in den Bereichen Import, Logistik, internationaler Transit, Import-Export, Konsignation und Vermietung.",
            "INDEXID15": "Über uns <i class=\"bi bi-arrow-right\"></i>",
            "INDEXID16": "Über das Unternehmen",
            "INDEXID17": "Logistik-, Import-, Transit-, Konsignations- und Leasinglösungen für Exzellenz",
            "INDEXID18": "Gegründet im Jahr 2024 hat Arcomaritimo seinen Hauptsitz in ... (noch zu vervollständigen). Wir haben unsere Tätigkeiten in ... (noch zu vervollständigen) aufgenommen. Leidenschaftlich bei unserer Arbeit, sind wir in allen Aspekten der Logistik, vom Transit bis zum Import-Export, führend. Engagiert für Pragmatismus, Transparenz und Glaubwürdigkeit, streben wir danach, exzellenten Service zu bieten und die Zufriedenheit unserer Kunden zu gewährleisten. Unsere Organisation basiert auf Werten wie Leistung, Zuverlässigkeit, Engagement, Respekt und Zuhören. Wir sind bereit, Sie bei der Umsetzung Ihrer Projekte in konkrete Erfolge zu unterstützen.",
            "INDEXID19": "Unsere Dienstleistungen",
            "INDEXID21":` Wir bedienen über 320 Häfen weltweit mit einer Flotte von 385 großen Containerschiffen. Neben dem Seetransport bieten wir verschiedene Dienstleistungen im maritimen Management und damit verbundene Ausrüstungen an. Der lateinamerikanische Reeder bedient alle Häfen der Welt mit seinen Schiffen. Arcomaritimo führt durchschnittlich fünf Charter pro Monat durch. Unsere Lkw-Flotte umfasst über 2000 Lastwagen verschiedener Kategorien, die Ihre Fracht sicher und effizient transportieren können.`,
            "INDEXID21X": "Arcomaritimo, Ihr Partner vor Ort Engagiert für die Umsetzung Ihrer Projekte und die Bereitstellung von Dienstleistungen auf hohem Niveau, deckt Arcomaritimo international 199 Länder ab. Wir sind in allen Ländern vertreten. Unsere Schiffe bedienen alle Häfen weltweit. Wir führen fünf Charterflüge pro Monat durch und bedienen über 329 Häfen weltweit, mit einer Flotte von 450 Containerschiffen mit einer Gesamtkapazität von 2,1 Millionen TEU. Wir bieten auch Küstenschifffahrt und Binnenwasserstraßentransporte an.",
            "INDEXID22": "<strong style=\"color: white; font-weight: bold;\">Logistik-, Transit- und Konsignationsabteilung</strong> <br>",
            "INDEXID22X": "Für Anfragen wenden Sie sich bitte an die Logistikabteilung unter der E-Mail-Adresse <a href=\"mailto:Arcomaritimos5190@gmail.com\">Arcomaritimos5190@gmail.com</a>",
            "INDEXID23": "Länder international",
            "INDEXID24": "Abgeschlossene Projekte",
            "INDEXID25": "Zufriedene Kunden",
            "INDEXID26": "Auszeichnungen",
            "INDEXID27": "Dienstleistungen",
            "INDEXID28": "Hier sind unsere Dienstleistungen",
            "INDEXID29": "Containerverfolgung",
            "INDEXID30": "Wir bieten eine Echtzeitverfolgung Ihrer Container, um eine optimale Nachverfolgbarkeit Ihrer Waren vom Abgang bis zur Ankunft zu gewährleisten.",
            "INDEXID31": "Versand und Empfang von Waren",
            "INDEXID32": "Wir übernehmen den gesamten Versand- und Empfangsprozess und sorgen für eine effiziente und sichere Verwaltung Ihrer Sendungen.",
            "INDEXID33": "Gesamte Logistik",
            "INDEXID34": "Unser Gesamtdienstleistungsservice integriert alle Phasen der Lieferkette und bietet maßgeschneiderte und flexible Lösungen.",
            "INDEXID35": "Internationaler Handel",
            "INDEXID36": "Wir erleichtern den internationalen Handel mit Maklerdiensten, einschließlich Kauf, Verkauf und Vertrieb von Waren weltweit.",
            "INDEXID37": "Containervermietung und -verkauf",
            "INDEXID38": "Wir stellen Container zum Transport Ihrer Ladung zur Verfügung, alle Arten von Containern, zur Miete und zum Verkauf. Verkauf von neuen und gebrauchten Containern. Internationaler Containerhandel usw.",
            "INDEXID39": "Massengutfracht und Projektladung",
            "INDEXID40": "Wir verwalten den Transport von Massengutfracht und Projektladungen und sorgen für die sichere Lieferung großer und spezialisierter Güter.",
            "INDEXID41": "wir bieten flexible und qualitativ hochwertige Logistik",
            "INDEXID42": "Häufig gestellte Fragen (FAQ)",
            "INDEXID43": "1. Welche Dienstleistungen bieten Sie an?",
            "INDEXID44": "Wir bieten eine vollständige Palette von Logistikdienstleistungen, einschließlich Containerverfolgung,",
            "INDEXID45": "2. Wo befindet sich Ihr Hauptsitz?",
            "INDEXID46": "Unser Hauptsitz befindet sich in ... (noch zu vervollständigen).",
            "INDEXID47": "3. Wann haben Sie Ihre Tätigkeiten aufgenommen?",
            "INDEXID48": "Wir haben unsere Tätigkeiten in ... (noch zu vervollständigen) aufgenommen.",
            "INDEXID49": "4. Welche Containergrößen sind verfügbar?",
            "INDEXID50": "Wir bieten 20-Fuß- und 40-Fuß-Container, die den Standards für den Seeverkehr entsprechen.",
            "INDEXID51": "5. Welche Arten von Containern bieten Sie zum Verkauf und zur Miete an?",
            "INDEXID52": "Wir bieten neue und gebrauchte Container, die für verschiedene logistische Bedürfnisse geeignet sind.",
            "INDEXID53": "6. Wie kann ich meine Container verfolgen?",
            "INDEXID54": "Wir bieten eine Echtzeitverfolgung Ihrer Container über unsere Online-Plattform an,",
            "INDEXID55": "7. Welche Arten von Gütern können Sie transportieren?",
            "INDEXID56": "Wir können eine breite Palette von Gütern transportieren, einschließlich Massengutfracht, Projektladung,",
            "INDEXID57": "8. Bieten Sie Lösungen für internationale Projekte an?",
            "INDEXID58": "Ja, wir bieten umfassende Logistiklösungen für internationale Projekte und nutzen unsere Ressourcen und Fachkenntnisse, um den Erfolg Ihrer Projekte zu gewährleisten.",
            "INDEXID59": "9. Welche Werte hat Ihr Unternehmen?",
            "INDEXID60": "Unsere Werte umfassen Leistung, Zuverlässigkeit, Engagement, Respekt und Zuhören. Wir sind bestrebt, außergewöhnliche Servicequalität auf der Grundlage von Transparenz und Ehrlichkeit zu bieten.",
            "INDEXID61": "10. Wie kann ich Ihren Kundenservice kontaktieren?",
            "INDEXID62": "Sie können uns über unsere Website, telefonisch oder per E-Mail kontaktieren. Unsere vollständigen Kontaktdaten finden Sie auf unserer Kontaktseite.",
            "INDEXID63": "11. Bieten Sie Logistikdienstleistungen für Rohstoffe an?",
            "INDEXID64": "Ja, wir bieten qualitativ hochwertige Dienstleistungen für den Export von Rohstoffen an, von der Produktion bis zum Versand von Roh- oder Fertigprodukten.",
            "INDEXID65": "12. Können Sie spezialisierte und große Fracht handhaben?",
            "INDEXID66": "Absolut. Wir verfügen über die Fachkenntnisse und Ressourcen, um spezialisierte und große Fracht zu handhaben und deren sichere und effiziente Lieferung zu gewährleisten.",
            "INDEXID67": "Kontaktinformationen",
            "INDEXID68": "Adresse",
            "INDEXID69": "Kontakttelefonnummer",
            "INDEXID70": "Unsere Organisation basiert auf Werten wie Leistung, Zuverlässigkeit, Engagement, Respekt und Zuhören. Wir sind bereit, Sie bei der Umsetzung Ihrer Projekte in konkrete Erfolge zu unterstützen.",
            "INDEXID71": "Links",
            "INDEXID77": "In Kontakt treten",
            "INDEXID78": "Soziale Informationen",
            "TERMES1": "1. Einführung",
            "TERMES2": "Willkommen bei Arco Maritimo. Durch den Zugriff auf unsere Plattform stimmen Sie den nachfolgend beschriebenen Allgemeinen Geschäftsbedingungen zu.",
            "TERMES3": "2. Nutzung der Plattform",
            "TERMES4": "Unsere Plattform dient der Bereitstellung von maritimen Logistikdienstleistungen. Sie stimmen zu, unsere Plattform nicht für illegale oder unbefugte Zwecke zu nutzen.",
            "TERMES5": "3. Geistiges Eigentum",
            "TERMES6": "Alle Inhalte auf unserer Plattform, einschließlich Texten, Grafiken, Logos und Bildern, sind Eigentum von Arco Maritimo und durch geistige Eigentumsrechte geschützt.",
            "TERMES7": "4. Haftungsbeschränkung",
            "TERMES8": "Arcomaritimo haftet nicht für direkte, indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder der Unfähigkeit zur Nutzung unserer Plattform resultieren.",
            "TERMES9": "5. Änderungen der Bedingungen",
            "TERMES10": "Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern. Änderungen treten sofort nach ihrer Veröffentlichung auf dieser Seite in Kraft.",
            "TERMES11": "6. Kontakt",
            "TERMES12": "Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte über die angegebenen Kontaktinformationen.",
            "TERMES13": "Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie unsere Plattform nutzen.",
            "TERMES14": "Durch die Nutzung unserer Plattform stimmen Sie diesen Allgemeinen Geschäftsbedingungen zu.",
            "FAQ1": "Häufig gestellte Fragen",
            "FAQ2": "Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen und Verfahren.",
            "DEPARTMENTS1": "Unsere Abteilungen",
            "DEPARTMENTS2": "ARCO Maritime Transit Logistics Consignment",
            "DEPARTMENTS3": "Logistik, Transit und Konsignation für eine globale Abdeckung und optimale Frachtverwaltung.",
            "DEPARTMENTS4": "ARCO Finance & Investment",
            "DEPARTMENTS5": "Finanz- und Investitionslösungen für nachhaltige und profitable Projekte.",
            "DEPARTMENTS6": "ARCO Leasing",
            "DEPARTMENTS7": "Flexible Leasinglösungen für Fahrzeuge, Maschinen und Ausrüstung.",
            "DEPARTMENTS8": "ARCO Fleet",
            "DEPARTMENTS9": "Umfangreiche Flotte von Fahrzeugen und Geräten für eine effiziente Logistik.",
            "DEPARTMENTS10": "ARCO Real Estate",
            "DEPARTMENTS11": "Immobilienlösungen, einschließlich Verkauf, Kauf und Vermietung.",
            "DEPARTMENTS12": "ARCO Technologies",
            "DEPARTMENTS13": "Technologische Lösungen zur Optimierung von Prozessen und Dienstleistungen.",
            "DEPARTMENTS14": "ARCO Raw Materials",
            "DEPARTMENTS15": "Export von Rohstoffen und verarbeiteten Produkten, einschließlich NON-GMO, GMO und Bio-Produkten.",
            "DEPARTMENTS16": "ARCO Automobile & Industry",
            "DEPARTMENTS17": "Verkauf und Kauf von neuen und gebrauchten Fahrzeugen. Industrielle Produktion von Fahrzeugen mit allen Optionen. Leasing und Verkauf von Fahrzeugen.",
            "DEPARTMENTS18": "ARCO Max Private Jet & Yacht",
            "DEPARTMENTS19": "Leasing von Privatjets, Verkehrsflugzeugen, Frachtflugzeugen und Yachten. Verkauf und Kauf von Jets und Yachten.",
            "DEPARTMENTS20": "ARCO Cement",
            "DEPARTMENTS21": "Export und Import von Zement sowie Produktion.",
            "DEPARTMENTS22": "ARCO Petroleum",
            "DEPARTMENTS23": "Verkauf, Kauf und industrielle Produktion von Erdölprodukten, einschließlich Diesel und Benzin.",
            "DEPARTMENTS24": "ARCO Maritimo Transit Logistics Consignment Shipping",
            "DEPARTMENTS25": "Dienstleistungen in mehr als 320 Häfen weltweit. Flotte von 385 Containerschiffen mit hoher Kapazität. Ausrüstung und maritime Verwaltungsdienstleistungen. Zollabfertigung.",
            "DEPARTMENTS26": "ARCO Fleet",
            "DEPARTMENTS27": "Über 2000 Lastwagen verschiedener Kategorien für den Transport unterschiedlicher Ladungen.",
            "DEPARTMENTS28": "ARCO Representation",
            "DEPARTMENTS29": "Vertretung von Marken, Organisationen, Institutionen und Projekten.",
            "DEPARTMENTS30": "ARCO Container Services",
            "DEPARTMENTS31": "Bereitstellung von Containern für den Gütertransport. Verkauf und Vermietung von neuen und gebrauchten Containern. Internationaler Containerhandel.",
            "DEPARTMENTS32": "ARCO Food Products",
            "DEPARTMENTS33": "Lebensmittelabteilung, einschließlich: ICUMSA 45 und IC150 Zucker aus Brasilien. Palmöl in 25L- und 20L-Dosen. Lokaler und ausländischer Reis. Getränke.",
            "DEPARTMENTS34": "ARCO Agricultural Products",
            "DEPARTMENTS35": "Lieferung von landwirtschaftlichen Betriebsmitteln wie Harnstoff, DAP und NPK. Rohstoffe einschließlich Sojabohnen, Cashewnüssen, Erdnüssen, Maniok, weißem und gelbem Mais, Kakao, Rohkautschuk, Industriekautschuk (TSR 10, 20), Bohnen (weiß und rot), Sorghum, geschälten Cashewnüssen, Sesam (weiß und gesprenkelt), Baumwollfasern, Baumwollsamen, Kardamom, rotem Pfeffer und Sheanüssen.",
            "DEPARTMENTS35": "Unsere Abteilungen"
        }
    },
    it: {
      translation: {
      "INDEXID1": "Iscriviti e seguici",
      "INDEXID2": "Home",
      "INDEXID3": "Chi siamo <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID4": "Contatti",
      "INDEXID5": "Servizi",
      "INDEXID6": "I nostri prodotti",
      "INDEXID7": "Termini <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID8": "Termini e condizioni",
      "INDEXID9": "Politica",
      "INDEXID10": "F.A.Q.",
      "INDEXID11": "Lingue <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID12": "Emergenza",
      "INDEXID13": "",
      "INDEXID14XXX": "Il tuo partner di fiducia per soluzioni complete e di qualità in importazione, logistica, transito internazionale, import-export, spedizione e noleggio.",
      "INDEXID15": "Chi siamo <i class=\"bi bi-arrow-right\"></i>",
      "INDEXID16": "Informazioni sull'azienda",
      "INDEXID17": "Soluzioni logistiche, di importazione, di transito, di spedizione e di noleggio per l'eccellenza",
      "INDEXID18": "Fondata nel 2024, Arcomaritimo ha sede a ... (da completare). Abbiamo avviato le nostre operazioni nel ... (da completare). Appassionati del nostro lavoro, eccelliamo in tutti gli aspetti della logistica, dal transito all'import-export. Impegnati nel pragmatismo, nella trasparenza e nella credibilità, miriamo a offrire un servizio di eccellenza e garantire la soddisfazione dei nostri clienti. La nostra organizzazione si basa su valori come la performance, l'affidabilità, l'impegno, il rispetto e l'ascolto. Siamo pronti ad accompagnarvi per trasformare i vostri progetti in successi concreti.",
      "INDEXID19": "I nostri Servizi",
      "INDEXID21":`Serviamo più di 320 porti in tutto il mondo con una flotta di 385 portacontainer di grande capacità. Oltre al trasporto marittimo, offriamo vari servizi di gestione marittima e attrezzature correlate. L'armatore latino serve tutti i porti del mondo attraverso le sue navi. Arcomaritimo effettua in media cinque noleggi al mese. La nostra flotta di trasporto su strada comprende oltre 2000 camion di varie categorie, in grado di trasportare i tuoi carichi in modo sicuro ed efficiente. `,
      "INDEXID21X": "Arcomaritimo, il tuo partner di fiducia per la realizzazione dei tuoi progetti e la fornitura di servizi di alto livello, Arcomaritimo opera in 199 paesi in tutto il mondo. Siamo presenti in ogni paese. Le nostre navi servono tutti i porti del mondo. Effettuiamo cinque affitti al mese e serviamo oltre 329 porti in tutto il globo, con una flotta di 450 portacontainer per una capacità totale di 2,1 milioni di EVP. Offriamo anche servizi di cabotaggio marittimo e trasporto fluviale.",
      "INDEXID22": "<strong style=\"color: white; font-weight: bold;\">Dipartimento Logistica, Transito e Consignazione</strong> <br>",
      "INDEXID22X": "Per qualsiasi richiesta, contattare il servizio logistica all'indirizzo email <a href=\"mailto:Arcomaritimos5190@gmail.com \">Arcomaritimos5190@gmail.com </a>",
      "INDEXID23": "Paesi internazionali",
      "INDEXID24": "Progetti completati",
      "INDEXID25": "Clienti soddisfatti",
      "INDEXID26": "Premi",
      "INDEXID27": "I Servizi",
      "INDEXID28": "Ecco i nostri Servizi",
      "INDEXID29": "Tracciamento dei container",
      "INDEXID30": "Forniamo un monitoraggio in tempo reale dei vostri container, garantendo una tracciabilità ottimale delle vostre merci dalla partenza all'arrivo.",
      "INDEXID31": "Spedizione e ricezione merci",
      "INDEXID32": "Ci occupiamo di tutto il processo di spedizione e ricezione, garantendo una gestione efficiente e sicura delle vostre spedizioni.",
      "INDEXID33": "Logistica totale",
      "INDEXID34": "Il nostro servizio di logistica totale integra tutte le fasi della supply chain, offrendo soluzioni personalizzate e flessibili.",
      "INDEXID35": "Commercio internazionale",
      "INDEXID36": "Facilitiamo il commercio internazionale con servizi di trading, inclusi acquisto, vendita e distribuzione di beni in tutto il mondo.",
      "INDEXID37": "Noleggio e vendita di container",
      "INDEXID38": "Forniamo container per trasportare le vostre merci, di tutti i tipi di container, in affitto e in vendita. Vendita di container nuovi e usati. Commercio internazionale di container, ecc.",
      "INDEXID39": "Cargo sfuso e carichi progettuali",
      "INDEXID40": "Gestiamo il trasporto di merci sfuse e carichi progettuali, garantendo la consegna sicura di merci voluminose e specializzate.",
      "INDEXID41": "forniamo una logistica flessibile e di qualità",
      "INDEXID42": "Domande frequenti (FAQ)",
      "INDEXID43": "1. Quali servizi offrite?",
      "INDEXID44": "Offriamo una gamma completa di servizi logistici, inclusa la tracciatura dei container,",
      "INDEXID45": "2. Dove si trova la vostra sede sociale?",
      "INDEXID46": "La nostra sede sociale è situata a ... (da completare).",
      "INDEXID47": "3. Quando avete iniziato le vostre operazioni?",
      "INDEXID48": "Abbiamo iniziato le nostre operazioni nel ... (da completare).",
      "INDEXID49": "4. Quali dimensioni di container sono disponibili?",
      "INDEXID50": "Offriamo container da 20 piedi e da 40 piedi, conformi agli standard del trasporto marittimo.",
      "INDEXID51": "5. Che tipo di container offrite in vendita e in affitto?",
      "INDEXID52": "Offriamo container nuovi e usati adatti a diversi bisogni logistici.",
      "INDEXID53": "6. Come posso tracciare i miei container?",
      "INDEXID54": "Offriamo il tracciamento in tempo reale dei vostri container tramite la nostra piattaforma online,",
      "INDEXID55": "7. Che tipo di merci potete trasportare?",
      "INDEXID56": "Possiamo trasportare una vasta gamma di merci, inclusi carichi sfusi, carichi progettuali,",
      "INDEXID57": "8. Offrite soluzioni per progetti internazionali?",
      "INDEXID58": "Sì, forniamo soluzioni logistiche complete per progetti internazionali, utilizzando le nostre risorse",
      "INDEXID59": "9. Quali sono i valori della vostra azienda?",
      "INDEXID60": "I nostri valori includono performance, affidabilità, impegno, rispetto e ascolto. Ci impegniamo a offrire un",
      "INDEXID61": "10. Come posso contattare il vostro servizio clienti?",
      "INDEXID62": "Puoi contattarci tramite il nostro sito web, per telefono o via email. Le nostre coordinate",
      "INDEXID63": "11. Offrite servizi di logistica per materie prime?",
      "INDEXID64": "Sì, offriamo servizi di qualità per l'esportazione di materie prime, dalla produzione",
      "INDEXID65": "12. Potete gestire carichi specializzati e voluminosi?",
      "INDEXID66": "Assolutamente. Abbiamo l'esperienza e le risorse necessarie per gestire carichi specializzati e voluminosi,",
      "INDEXID67": "Informazioni di contatto",
      "INDEXID68": "Indirizzo",
      "INDEXID69": "Numero di contatto",
      "INDEXID70": "La nostra organizzazione si basa su valori come performance, affidabilità,",
      "INDEXID71": "i link",
      "INDEXID77": "Contattare",
      "INDEXID78": "Informazioni sociali",
      "TERMES1": "1. Introduzione",
      "TERMES2": "Benvenuti in Arco Maritimo. Accedendo alla nostra piattaforma, accettate i seguenti termini e condizioni.",
      "TERMES3": "2. Utilizzo della Piattaforma",
      "TERMES4": "La nostra piattaforma è destinata a fornire servizi di logistica marittima. Accettate di non utilizzare la nostra piattaforma per scopi",
      "TERMES5": "illegali o non autorizzati.",
      "TERMES6": "3. Proprietà Intellettuale",
      "TERMES7": "Tutti i contenuti della nostra piattaforma, inclusi testi, grafica, loghi e immagini, sono di proprietà di Arco Maritimo e sono protetti dalle leggi sulla proprietà intellettuale.",
      "TERMES8": "Arcomaritimo non sarà responsabile per danni diretti, indiretti, accidentali, speciali o consequenziali derivanti dall'uso o dall'incapacità di utilizzare la nostra piattaforma.",
      "TERMES9": "5. Modifiche ai Termini",
      "TERMES10": "Ci riserviamo il diritto di modificare questi termini e condizioni in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la loro pubblicazione su questa pagina.",
      "TERMES11": "6. Contatti",
      "TERMES12": "Se avete domande su questi termini e condizioni, vi preghiamo di contattarci all'indirizzo seguente: Arcomaritimos5190@gmail.com",
      "DEPARTMENTS1": "Dipartimenti di ARCO International",
      "DEPARTMENTS2": "ARCO International soddisfa le diverse esigenze dei nostri clienti nei settori minerario, agricolo, logistico, turistico, automobilistico e molto altro ancora.",
      "DEPARTMENTS3": "ARCO Minerals",
      "DEPARTMENTS4": "Esportazione di minerali come bauxite, manganese, litio, minerale di ferro, cobalto, catodi di rame, rottami ferrosi e latérite. Trasporto logistico minerario via camion, nave, treno e via aerea.",
      "DEPARTMENTS5": "ARCO Agri",
      "DEPARTMENTS6": "Specializzato nella produzione di materie prime agricole destinate alla trasformazione e all'esportazione.",
      "DEPARTMENTS7": "ARCO Travel Tour",
      "DEPARTMENTS8": "Offre operazioni di viaggio, turismo e tour di scoperta in tutto il mondo.",
      "DEPARTMENTS9": "ARCO Materiali da Costruzione",
      "DEPARTMENTS10": "Produzione e vendita internazionale di vari materiali da costruzione.",
      "DEPARTMENTS11": "ARCO Import",
      "DEPARTMENTS12": "Dipartimento dedicato all'importazione di prodotti e attrezzature straniere di ogni tipo e categoria.",
      "DEPARTMENTS13": "ARCO Export (Prodotti Tropicali e Agroalimentari)",
      "DEPARTMENTS14": "Esportazione di materie prime e prodotti trasformati, inclusi prodotti NON-OGM, OGM e biologici.",
      "DEPARTMENTS15": "ARCO Automobile & Industria",
      "DEPARTMENTS16": "Vendita e acquisto di veicoli nuovi e usati. Produzione industriale di veicoli di ogni tipo. Noleggio e vendita di veicoli.",
      "DEPARTMENTS17": "ARCO Max Private Jet & Yacht",
      "DEPARTMENTS18": "Noleggio di jet privati, aerei commerciali, aerei cargo e yacht. Vendita e acquisto di jet e yacht.",
      "DEPARTMENTS19": "ARCO Cemento",
      "DEPARTMENTS20": "Esportazione, importazione e produzione di cemento.",
      "DEPARTMENTS21": "ARCO Petroleum",
      "DEPARTMENTS22": "Vendita, acquisto e produzione industriale di prodotti petroliferi, inclusi gasolio e benzina.",
      "DEPARTMENTS23": "ARCO Maritimo Transit Logistics Consignation Shipping",
      "DEPARTMENTS24": "Servizi che coprono oltre 320 porti in tutto il mondo. Flotta di 385 portacontainer con ampia capacità. Servizi di attrezzature e gestione marittima. Dichiarazione doganale.",
      "DEPARTMENTS25": "ARCO Fleet",
      "DEPARTMENTS26": "Oltre 2000 camion di varie categorie per il trasporto di diversi tipi di carichi.",
      "DEPARTMENTS27": "ARCO Rappresentanza",
      "DEPARTMENTS28": "Rappresentanza di marchi, organizzazioni, istituzioni e progetti.",
      "DEPARTMENTS29": "ARCO Container Services",
      "DEPARTMENTS30": "Fornitura di container per il trasporto di merci. Vendita e noleggio di container nuovi e usati. Commercio internazionale di container.",
      "DEPARTMENTS31": "ARCO Prodotti Alimentari",
      "DEPARTMENTS32": "Dipartimento alimentare che include: zucchero ICUMSA 45 e IC150 dal Brasile. Olio di palma in contenitori da 25L e 20L. Riso locale e straniero. Bevande.",
      "DEPARTMENTS33": "ARCO Prodotti Agricoli",
      "DEPARTMENTS34": "Fornitura di input agricoli come urea, DAP e NPK. Materie prime tra cui soia, anacardio, arachide, manioca, mais bianco e giallo, cacao, gomma grezza, gomma industriale (TSR 10, 20), fagioli (bianchi e rossi), sorgo, anacardio sgusciato, sesamo (bianco e colorato), cotone, semi di cotone, cardamomo, peperoncino rosso e burro di karité.",
      "DEPARTMENTS35": "I nostri dipartimenti"
    }
  },
  es: {
    translation: {
      "INDEXID1": "Suscríbete y sigue",
      "INDEXID2": "Inicio",
      "INDEXID3": "Sobre <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID4": "Contacto",
      "INDEXID5": "Servicios",
      "INDEXID6": "Nuestros productos",
      "INDEXID7": "Términos <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID8": "Términos y condiciones",
      "INDEXID9": "Política",
      "INDEXID10": "Preguntas frecuentes",
      "INDEXID11": "Idiomas <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID12": "Emergencia",
      "INDEXID13": "",
      "INDEXID14XXX": "Su socio de confianza para soluciones integrales y de calidad en importación, logística, tránsito internacional, importación-exportación, consignación y alquiler.",
      "INDEXID15": "Sobre <i class=\"bi bi-arrow-right\"></i>",
      "INDEXID16": "Acerca de la empresa",
      "INDEXID17": "Soluciones logísticas, de importación, tránsito, consignación y alquiler para la excelencia.",
      "INDEXID18": "Fundada en 2024, Arcomaritimo tiene su sede en ... (por completar). Iniciamos nuestras operaciones en ... (por completar). Apasionados por nuestro trabajo, sobresalimos en todos los aspectos de la logística, desde el tránsito hasta la importación-exportación. Comprometidos con el pragmatismo, la transparencia y la credibilidad, buscamos ofrecer un servicio de excelencia y garantizar la satisfacción de nuestros clientes. Nuestra organización se basa en valores como el rendimiento, la confiabilidad, el compromiso, el respeto y la escucha. Estamos listos para acompañarte y convertir tus proyectos en éxitos concretos.",
      "INDEXID19": "Nuestros Servicios",
      "INDEXID21":`Servimos a más de 320 puertos en todo el mundo con una flota de 385 portacontenedores de gran capacidad. Además del transporte marítimo, ofrecemos varios servicios de gestión marítima y equipos relacionados. El armador latino atiende todos los puertos del mundo a través de sus barcos. Arcomaritimo realiza un promedio de cinco fletamentos por mes. Nuestra flota de transporte terrestre cuenta con más de 2000 camiones de diversas categorías, capaces de transportar sus cargas de manera segura y eficiente. `,
      "INDEXID21X": "Arcomaritimo, tu Socio Cercano Comprometido en la realización de tus proyectos y la provisión de servicios de calidad. Arcomaritimo cubre 199 países a nivel internacional. Estamos presentes en todos los países. Nuestros barcos sirven todos los puertos del mundo. Realizamos cinco fletamentos al mes y servimos más de 329 puertos en todo el mundo, con una flota de 450 portacontenedores con una capacidad total de 2.1 millones de EVP. También ofrecemos servicios de cabotaje marítimo y transporte fluvial.",
      "INDEXID22": "<strong style=\"color: white; font-weight: bold;\">Departamento de Logística, Tránsito y Consignación</strong> <br>",
      "INDEXID22X": "Para cualquier consulta, diríjase al servicio de logística a través del correo electrónico <a href=\"mailto:Arcomaritimos5190@gmail.com\">Arcomaritimos5190@gmail.com</a>",
      "INDEXID23": "Países a nivel internacional",
      "INDEXID24": "Proyectos realizados",
      "INDEXID25": "Clientes satisfechos",
      "INDEXID26": "Trofeos",
      "INDEXID27": "Los Servicios",
      "INDEXID28": "Aquí están nuestros servicios",
      "INDEXID29": "Seguimiento de contenedores",
      "INDEXID30": "Aseguramos un seguimiento en tiempo real de sus contenedores, garantizando una trazabilidad óptima de sus mercancías desde la salida hasta la llegada.",
      "INDEXID31": "Envío y recepción de mercancías",
      "INDEXID32": "Nos encargamos de todo el proceso de envío y recepción, asegurando una gestión eficiente y segura de sus envíos.",
      "INDEXID33": "Logística total",
      "INDEXID34": "Nuestro servicio de logística total integra todas las etapas de la cadena de suministro, ofreciendo soluciones personalizadas y flexibles.",
      "INDEXID35": "Comercio internacional",
      "INDEXID36": "Facilitamos el comercio internacional con servicios de comercio que incluyen compra, venta y distribución de bienes en todo el mundo.",
      "INDEXID37": "Alquiler y venta de contenedores",
      "INDEXID38": "Proporcionamos contenedores para transportar sus cargas, de todo tipo de contenedores, en alquiler y venta. Venta de contenedores nuevos y usados. Comercio internacional de contenedores, etc.",
      "INDEXID39": "Flete a granel y cargas de proyectos",
      "INDEXID40": "Gestionamos el transporte de carga a granel y cargas de proyectos, asegurando la entrega segura de mercancías voluminosas y especializadas.",
      "INDEXID41": "proporcionamos logística flexible y de calidad",
      "INDEXID42": "Preguntas frecuentes (FAQ)",
      "INDEXID43": "1. ¿Qué servicios ofrecen?",
      "INDEXID44": "Ofrecemos una gama completa de servicios logísticos, incluyendo seguimiento de contenedores,",
      "INDEXID45": "2. ¿Dónde está ubicada su sede?",
      "INDEXID46": "Nuestra sede está ubicada en ... (por completar).",
      "INDEXID47": "3. ¿Cuándo comenzaron sus operaciones?",
      "INDEXID48": "Comenzamos nuestras operaciones en ... (por completar).",
      "INDEXID49": "4. ¿Qué tamaños de contenedores están disponibles?",
      "INDEXID50": "Ofrecemos contenedores de 20 pies y 40 pies, conforme a las normativas del transporte marítimo.",
      "INDEXID51": "5. ¿Qué tipos de contenedores ofrecen para la venta y alquiler?",
      "INDEXID52": "Ofrecemos contenedores nuevos y usados adaptados a diversas necesidades logísticas.",
      "INDEXID53": "6. ¿Cómo puedo hacer seguimiento de mis contenedores?",
      "INDEXID54": "Ofrecemos seguimiento en tiempo real de sus contenedores a través de nuestra plataforma en línea,",
      "INDEXID55": "7. ¿Qué tipos de mercancías pueden transportar?",
      "INDEXID56": "Podemos transportar una amplia gama de mercancías, incluyendo carga a granel, cargas de proyectos,",
      "INDEXID57": "8. ¿Ofrecen soluciones para proyectos internacionales?",
      "INDEXID58": "Sí, ofrecemos soluciones logísticas completas para proyectos internacionales, utilizando nuestros",
      "INDEXID59": "9. ¿Cuáles son los valores de su empresa?",
      "INDEXID60": "Nuestros valores incluyen rendimiento, confiabilidad, compromiso, respeto y escucha. Nos comprometemos a ofrecer un",
      "INDEXID61": "10. ¿Cómo puedo contactar a su servicio al cliente?",
      "INDEXID62": "Puede contactarnos a través de nuestro sitio web, por teléfono o por correo electrónico. Nuestras coordenadas",
      "INDEXID63": "11. ¿Ofrecen servicios logísticos para materias primas?",
      "INDEXID64": "Sí, ofrecemos servicios de calidad para la exportación de materias primas, desde la producción",
      "INDEXID65": "12. ¿Pueden manejar cargas especializadas y voluminosas?",
      "INDEXID66": "Absolutamente. Contamos con la experiencia y los recursos necesarios para manejar cargas especializadas y voluminosas,",
      "INDEXID67": "Información de contacto",
      "INDEXID68": "Dirección",
      "INDEXID69": "Número de contacto",
      "INDEXID70": "Nuestra organización se basa en valores como el rendimiento, la confiabilidad,",
      "INDEXID71": "los enlaces",
      "INDEXID77": "Ponerse en contacto",
      "INDEXID78": "Información social",
      "TERMES1": "1. Introducción",
      "TERMES2": "Bienvenido a Arco Maritimo. Al acceder a nuestra plataforma, acepta los términos y condiciones descritos a continuación.",
      "TERMES3": "2. Uso de la plataforma",
      "TERMES4": "Nuestra plataforma está destinada a proporcionar servicios de logística marítima. Usted acepta no utilizar nuestra plataforma con fines ilegales o no autorizados.",
      "TERMES5": "3. Propiedad Intelectual",
      "TERMES6": "Todo el contenido de nuestra plataforma, incluidos textos, gráficos, logotipos e imágenes, es propiedad de Arco Maritimo y está protegido por las leyes de propiedad intelectual.",
      "TERMES7": "4. Limitación de Responsabilidad",
      "TERMES8": "Arco Maritimo no será responsable de daños directos, indirectos, incidentales, especiales o consecuentes que surjan del uso o la incapacidad de usar nuestra plataforma.",
      "TERMES9": "5. Modificación de los términos",
      "TERMES10": "Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Dichas modificaciones entrarán en vigor inmediatamente después de su publicación en esta página.",
      "TERMES11": "6. Contacto",
      "TERMES12": "Si tiene alguna pregunta sobre estos términos y condiciones, no dude en ponerse en contacto con nosotros en la siguiente dirección: Arco Maritimo, Número 5190, 1100 East, Chicago, Illinios, 60601",
      "DEPARTMENTS1": "Departamentos de ARCO International",
      "DEPARTMENTS2": "ARCO International satisface las diversas necesidades de nuestros clientes en los sectores minero, agrícola, logístico, turístico, automotriz y más.",
      "DEPARTMENTS3": "ARCO Minerales",
      "DEPARTMENTS4": "Exportación de minerales como bauxita, manganeso, litio, mineral de hierro, cobalto, cátodos de cobre, chatarra de hierro y laterita. Transporte logístico de minería por camión, barco, tren y aire.",
      "DEPARTMENTS5": "ARCO Agri",
      "DEPARTMENTS6": "Especializado en la producción de materias primas agrícolas destinadas a la transformación y exportación.",
      "DEPARTMENTS7": "ARCO Travel Tour",
      "DEPARTMENTS8": "Ofrece operaciones de viaje, turismo y recorridos de descubrimiento en todo el mundo.",
      "DEPARTMENTS9": "ARCO Materiales de Construcción",
      "DEPARTMENTS10": "Producción y venta internacional de varios materiales de construcción.",
      "DEPARTMENTS11": "ARCO Import",
      "DEPARTMENTS12": "Departamento dedicado a la importación de productos y equipos extranjeros de todo tipo y categoría.",
      "DEPARTMENTS13": "ARCO Export (Productos tropicales y agroalimentarios)",
      "DEPARTMENTS14": "Exportación de materias primas y productos transformados, incluidos productos no modificados genéticamente (NO OGM), OGM y orgánicos.",
      "DEPARTMENTS15": "ARCO Automóvil e Industria",
      "DEPARTMENTS16": "Venta y compra de vehículos nuevos y usados. Producción industrial de vehículos de todo tipo. Alquiler y venta de vehículos.",
      "DEPARTMENTS17": "ARCO Max Jet Privado y Yate",
      "DEPARTMENTS18": "Alquiler de jets privados, aviones comerciales, aviones de carga y yates. Venta y compra de jets y yates.",
      "DEPARTMENTS19": "ARCO Cemento",
      "DEPARTMENTS20": "Exportación, importación y producción de cemento.",
      "DEPARTMENTS21": "ARCO Petróleo",
      "DEPARTMENTS22": "Venta, compra y producción industrial de productos petroleros, incluidos diésel y gasolina.",
      "DEPARTMENTS23": "ARCO Marítimo Transit Logistics Consignation Shipping",
      "DEPARTMENTS24": "Servicios que cubren más de 320 puertos en todo el mundo. Flota de 385 portacontenedores con gran capacidad. Servicios de equipos y gestión marítima. Declaración aduanera.",
      "DEPARTMENTS25": "ARCO Fleet",
      "DEPARTMENTS26": "Más de 2000 camiones de diversas categorías para el transporte de diferentes tipos de cargas.",
      "DEPARTMENTS27": "ARCO Representación",
      "DEPARTMENTS28": "Representación de marcas, organizaciones, instituciones y proyectos.",
      "DEPARTMENTS29": "ARCO Servicios de Contenedores",
      "DEPARTMENTS30": "Suministro de contenedores para el transporte de mercancías. Venta y alquiler de contenedores nuevos y usados. Comercio internacional de contenedores.",
      "DEPARTMENTS31": "ARCO Productos Alimentarios",
      "DEPARTMENTS32": "Departamento de alimentos que incluye: azúcar ICUMSA 45 e IC150 de Brasil. Aceite de palma en contenedores de 25L y 20L. Arroz local y extranjero. Bebidas.",
      "DEPARTMENTS33": "ARCO Productos Agrícolas",
      "DEPARTMENTS34": "Suministro de insumos agrícolas como urea, DAP y NPK. Materias primas que incluyen soja, anacardio, maní, mandioca, maíz blanco y amarillo, cacao, caucho crudo, caucho industrial (TSR 10, 20), frijoles (blancos y rojos), sorgo, anacardio pelado, sésamo (blanco y colorido), algodón, semillas de algodón, cardamomo, pimienta roja y manteca de karité.",
      "DEPARTMENTS35": "Nuestros departamentos"
    }
  },
  pt: {
    translation: {
      "INDEXID1": "Inscreva-se e siga",
      "INDEXID2": "Início",
      "INDEXID3": "Sobre <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID4": "Contato",
      "INDEXID5": "Serviços",
      "INDEXID6": "Nossos produtos",
      "INDEXID7": "Termos <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID8": "Termos e condições",
      "INDEXID9": "Política",
      "INDEXID10": "Perguntas frequentes",
      "INDEXID11": "Idiomas <i class=\"bi bi-chevron-down\"></i>",
      "INDEXID12": "Emergência",
      "INDEXID13": "",
      "INDEXID14XXX": "Seu parceiro de confiança para soluções completas e de qualidade em importação, logística, trânsito internacional, importação-exportação, consignação e locação.",
      "INDEXID15": "Sobre <i class=\"bi bi-arrow-right\"></i>",
      "INDEXID16": "Sobre a empresa",
      "INDEXID17": "Soluções logísticas, de importação, trânsito, consignação e aluguel para a excelência.",
      "INDEXID18": "Fundada em 2024, Arcomaritimo tem sua sede em ... (a ser completado). Iniciamos nossas operações em ... (a ser completado). Apaixonados pelo nosso trabalho, nos destacamos em todos os aspectos da logística, desde o trânsito até a importação-exportação. Comprometidos com o pragmatismo, a transparência e a credibilidade, buscamos oferecer um serviço de excelência e garantir a satisfação de nossos clientes. Nossa organização é baseada em valores como desempenho, confiabilidade, comprometimento, respeito e escuta. Estamos prontos para acompanhar você e transformar seus projetos em sucessos concretos.",
      "INDEXID19": "Nossos Serviços",
      "INDEXID21":`Atendemos a mais de 320 portos em todo o mundo com uma frota de 385 porta-contêineres de grande capacidade. Além do transporte marítimo, oferecemos diversos serviços de gestão marítima e equipamentos conexos. O armador latino atende a todos os portos do mundo através de seus navios. Arcomaritimo realiza em média cinco fretamentos por mês. Nossa frota de transporte rodoviário inclui mais de 2000 caminhões de diversas categorias, capazes de transportar suas cargas com segurança e eficiência. `,
      "INDEXID21X": "Arcomaritimo, seu Parceiro Próximo Comprometido na realização de seus projetos e na prestação de serviços de qualidade. Arcomaritimo cobre 199 países internacionalmente. Estamos presentes em todos os países. Nossos navios atendem a todos os portos do mundo. Realizamos cinco fretamentos por mês e servimos mais de 329 portos em todo o mundo, com uma frota de 450 porta-contêineres com capacidade total de 2,1 milhões de EVP. Também oferecemos serviços de cabotagem marítima e transporte fluvial.",
      "INDEXID22": "<strong style=\"color: white; font-weight: bold;\">Departamento de Logística, Trânsito e Consignação</strong> <br>",
      "INDEXID22X": "Para qualquer consulta, entre em contato com o serviço de logística pelo email <a href=\"mailto:Arcomaritimos5190@gmail.com\">Arcomaritimos5190@gmail.com</a>",
      "INDEXID23": "Países internacionalmente",
      "INDEXID24": "Projetos realizados",
      "INDEXID25": "Clientes satisfeitos",
      "INDEXID26": "Troféus",
      "INDEXID27": "Os Serviços",
      "INDEXID28": "Aqui estão nossos serviços",
      "INDEXID29": "Rastreamento de contêineres",
      "INDEXID30": "Asseguramos um rastreamento em tempo real de seus contêineres, garantindo uma rastreabilidade ótima de suas mercadorias desde a saída até a chegada.",
      "INDEXID31": "Envio e recebimento de mercadorias",
      "INDEXID32": "Cuidamos de todo o processo de envio e recebimento, garantindo uma gestão eficiente e segura de seus envios.",
      "INDEXID33": "Logística total",
      "INDEXID34": "Nosso serviço de logística total integra todas as etapas da cadeia de suprimentos, oferecendo soluções personalizadas e flexíveis.",
      "INDEXID35": "Comércio internacional",
      "INDEXID36": "Facilitamos o comércio internacional com serviços de comércio que incluem compra, venda e distribuição de bens em todo o mundo.",
      "INDEXID37": "Aluguel e venda de contêineres",
      "INDEXID38": "Fornecemos contêineres para transportar suas cargas, de todos os tipos de contêineres, para aluguel e venda. Venda de contêineres novos e usados. Comércio internacional de contêineres, etc.",
      "INDEXID39": "Afretamento a granel e cargas de projetos",
      "INDEXID40": "Gerenciamos o transporte de carga a granel e cargas de projetos, garantindo a entrega segura de mercadorias volumosas e especializadas.",
      "INDEXID41": "fornecemos logística flexível e de qualidade",
      "INDEXID42": "Perguntas frequentes (FAQ)",
      "INDEXID43": "1. Quais serviços vocês oferecem?",
      "INDEXID44": "Oferecemos uma gama completa de serviços logísticos, incluindo rastreamento de contêineres,",
      "INDEXID45": "2. Onde está localizada a sede de vocês?",
      "INDEXID46": "Nossa sede está localizada em ... (a ser completado).",
      "INDEXID47": "3. Quando vocês começaram suas operações?",
      "INDEXID48": "Começamos nossas operações em ... (a ser completado).",
      "INDEXID49": "4. Que tamanhos de contêineres estão disponíveis?",
      "INDEXID50": "Oferecemos contêineres de 20 pés e 40 pés, de acordo com as normas de transporte marítimo.",
      "INDEXID51": "5. Que tipos de contêineres vocês oferecem para venda e aluguel?",
      "INDEXID52": "Oferecemos contêineres novos e usados adaptados a diversas necessidades logísticas.",
      "INDEXID53": "6. Como posso rastrear meus contêineres?",
      "INDEXID54": "Oferecemos rastreamento em tempo real de seus contêineres por meio de nossa plataforma online,",
      "INDEXID55": "7. Que tipos de mercadorias vocês podem transportar?",
      "INDEXID56": "Podemos transportar uma ampla gama de mercadorias, incluindo carga a granel, cargas de projetos,",
      "INDEXID57": "8. Vocês oferecem soluções para projetos internacionais?",
      "INDEXID58": "Sim, oferecemos soluções logísticas completas para projetos internacionais, usando nossos",
      "INDEXID59": "9. Quais são os valores da sua empresa?",
      "INDEXID60": "Nossos valores incluem desempenho, confiabilidade, comprometimento, respeito e escuta. Comprometemo-nos a oferecer um",
      "INDEXID61": "10. Como posso contatar seu serviço ao cliente?",
      "INDEXID62": "Você pode entrar em contato conosco através de nosso site, telefone ou e-mail. Nossas coordenadas",
      "INDEXID63": "11. Vocês oferecem serviços logísticos para matérias-primas?",
      "INDEXID64": "Sim, oferecemos serviços de qualidade para a exportação de matérias-primas, desde a produção",
      "INDEXID65": "12. Vocês podem lidar com cargas especializadas e volumosas?",
      "INDEXID66": "Absolutamente. Temos a experiência e os recursos necessários para lidar com cargas especializadas e volumosas,",
      "INDEXID67": "Informações de contato",
      "INDEXID68": "Endereço",
      "INDEXID69": "Número de contato",
      "INDEXID70": "Nossa organização é baseada em valores como desempenho, confiabilidade,",
      "INDEXID71": "os links",
      "INDEXID77": "Entre em contato",
      "INDEXID78": "Informações sociais",
      "TERMES1": "1. Introdução",
      "TERMES2": "Bem-vindo ao Arco Maritimo. Ao acessar nossa plataforma, você concorda com os termos e condições descritos abaixo.",
      "TERMES3": "2. Uso da plataforma",
      "TERMES4": "Nossa plataforma destina-se a fornecer serviços de logística marítima. Você concorda em não usar nossa plataforma para fins ilegais ou não autorizados.",
      "TERMES5": "3. Propriedade Intelectual",
      "TERMES6": "Todo o conteúdo de nossa plataforma, incluindo textos, gráficos, logotipos, ícones de botões, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade exclusiva de Arco Maritimo e está protegido pelas leis de direitos autorais internacionais.",
      "TERMES7": "4. Limitação de Responsabilidade",
      "TERMES8": "Arco Maritimo não será responsável por danos diretos, indiretos, incidentais, especiais ou consequentes que surjam do uso ou incapacidade de usar nossa plataforma.",
      "TERMES9": "5. Modificação dos Termos",
      "TERMES10": "Reservamo-nos o direito de modificar estes termos e condições a qualquer momento. Tais modificações entrarão em vigor imediatamente após sua publicação nesta página.",
      "TERMES11": "6. Contato",
      "TERMES12": "Se você tiver alguma dúvida sobre estes termos e condições, não hesite em nos contatar no seguinte endereço: Arco Maritimo, Número 5190, 1100 East, Chicago, Illinois, 60601",
      "DEPARTMENTS1": "Departamentos da ARCO Internacional",
      "DEPARTMENTS2": "ARCO Internacional atende às diversas necessidades de nossos clientes nos setores de mineração, agrícola, logístico, turístico, automotivo e mais.",
      "DEPARTMENTS3": "ARCO Minerais",
      "DEPARTMENTS4": "Exportação de minerais como bauxita, manganês, lítio, minério de ferro, cobalto, catodos de cobre, sucata de ferro e laterita. Transporte logístico de mineração por caminhão, navio, trem e ar.",
      "DEPARTMENTS5": "ARCO Agro",
      "DEPARTMENTS6": "Especializado na produção de matérias-primas agrícolas destinadas à transformação e exportação.",
      "DEPARTMENTS7": "ARCO Travel Tour",
      "DEPARTMENTS8": "Oferece operações de viagem, turismo e descoberta em todo o mundo.",
      "DEPARTMENTS9": "ARCO Materiais de Construção",
      "DEPARTMENTS10": "Produção e venda internacional de vários materiais de construção.",
      "DEPARTMENTS11": "ARCO Import",
      "DEPARTMENTS12": "Departamento dedicado à importação de produtos e equipamentos estrangeiros de todos os tipos e categorias.",
      "DEPARTMENTS13": "ARCO Export (Produtos tropicais e agroalimentares)",
      "DEPARTMENTS14": "Exportação de matérias-primas e produtos transformados, incluindo produtos não geneticamente modificados (NO OGM), OGM e orgânicos.",
      "DEPARTMENTS15": "ARCO Automóvel e Indústria",
      "DEPARTMENTS16": "Venda e compra de veículos novos e usados. Produção industrial de veículos de todos os tipos. Aluguel e venda de veículos.",
      "DEPARTMENTS17": "ARCO Max Jet Privado e Yate",
      "DEPARTMENTS18": "Aluguel de jatos privados, aviões comerciais, aviões de carga e iates. Venda e compra de jatos e iates.",
      "DEPARTMENTS19": "ARCO Cimento",
      "DEPARTMENTS20": "Exportação, importação e produção de cimento.",
      "DEPARTMENTS21": "ARCO Petróleo",
      "DEPARTMENTS22": "Venda, compra e produção industrial de produtos petrolíferos, incluindo diesel e gasolina.",
      "DEPARTMENTS23": "ARCO Marítimo Trânsito Logística Consignação Envio",
      "DEPARTMENTS24": "Serviços que cobrem mais de 320 portos em todo o mundo. Frota de 385 porta-contêineres com grande capacidade. Serviços de equipamentos e gestão marítima. Declaração aduaneira.",
      "DEPARTMENTS25": "ARCO Fleet",
      "DEPARTMENTS26": "Mais de 2000 caminhões de diversas categorias para o transporte de diferentes tipos de cargas.",
      "DEPARTMENTS27": "ARCO Representação",
      "DEPARTMENTS28": "Representação de marcas, organizações, instituições e projetos.",
      "DEPARTMENTS29": "ARCO Serviços de Contêineres",
      "DEPARTMENTS30": "Fornecimento de contêineres para transporte de mercadorias. Venda e aluguel de contêineres novos e usados. Comércio internacional de contêineres.",
      "DEPARTMENTS31": "ARCO Produtos Alimentares",
      "DEPARTMENTS32": "Departamento de alimentos que inclui: açúcar ICUMSA 45 e IC150 do Brasil. Óleo de palma em recipientes de 25L e 20L. Arroz local e estrangeiro. Bebidas.",
      "DEPARTMENTS33": "ARCO Produtos Agrícolas",
      "DEPARTMENTS34": "Fornecimento de insumos agrícolas como ureia, DAP e NPK. Matérias-primas incluindo soja, caju, amendoim, mandioca, milho branco e amarelo, cacau, borracha crua, borracha industrial (TSR 10, 20), feijão (branco e vermelho), sorgo, castanha de caju descascada, gergelim (branco e colorido), algodão, sementes de algodão, cardamomo, pimenta vermelha e manteiga de karité.",
      "DEPARTMENTS35": "Nossos departamentos"
    }
  },
  ar: {
  translation: {
    "INDEXID1": "اشترك واتبع",
    "INDEXID2": "الصفحة الرئيسية",
    "INDEXID3": "نبذة <i class=\"bi bi-chevron-down\"></i>",
    "INDEXID4": "اتصل بنا",
    "INDEXID5": "الخدمات",
    "INDEXID6": "منتجاتنا",
    "INDEXID7": "الشروط <i class=\"bi bi-chevron-down\"></i>",
    "INDEXID8": "الشروط والأحكام",
    "INDEXID9": "سياسة",
    "INDEXID10": "الأسئلة الشائعة",
    "INDEXID11": "اللغات <i class=\"bi bi-chevron-down\"></i>",
    "INDEXID12": "طوارئ",
    "INDEXID13": "",
    "INDEXID14XXX": "شريكك الموثوق للحلول الشاملة والجودة في الاستيراد، اللوجستيات، العبور الدولي، الاستيراد والتصدير، الشحن والإيجار.",
    "INDEXID15": "عن الشركة <i class=\"bi bi-arrow-right\"></i>",
    "INDEXID16": "عن الشركة",
    "INDEXID17": "حلول لوجستية، استيراد، عبور، قنصلية، وإيجار للتفوق.",
    "INDEXID18": "تأسست في عام 2024، تتخذ Arcomaritimo مقرها الرئيسي في ... (ليتم التعبئة). بدأنا عملياتنا في ... (ليتم التعبئة). متحمسون لمهنتنا، نتفوق في جميع جوانب اللوجستيات، من العبور إلى الاستيراد والتصدير. ملتزمون بالواقعية، الشفافية، والمصداقية، ونهدف إلى تقديم خدمة متميزة وضمان رضا عملائنا. تقوم منظمتنا على قيم مثل الأداء، الاعتمادية، التزام، الاحترام، والاستماع. نحن جاهزون لمساعدتكم في تحقيق نجاحاتكم الحقيقية.",
    "INDEXID19": "خدماتنا",
    "INDEXID21":`نحن نخدم أكثر من 320 ميناء حول العالم بأسطول من 385 سفينة حاويات كبيرة السعة. بالإضافة إلى النقل البحري، نقدم خدمات متنوعة في إدارة الشحنات والمعدات ذات الصلة. يخدم المالك اللاتيني جميع موانئ العالم عبر سفنه. تقوم شركة Arcomaritimo بتنفيذ حوالي خمس عمليات استئجار شهرياً في المتوسط. يتألف أسطولنا للنقل البري من أكثر من 2000 شاحنة من فئات مختلفة، قادرة على نقل شحناتكم بأمان وكفاءة.
     `,
    "INDEXID21X": "Arcomaritimo، شريككم المحلي الملتزم بتحقيق مشاريعكم وتوفير خدمات راقية، تغطي Arcomaritimo 199 دولة عالمياً. نحن حاضرون في جميع البلدان. تخدم سفننا جميع موانئ العالم. نقوم بخمس رحلات بحرية شهرياً ونخدم أكثر من 329 ميناء حول العالم، مع أسطول من 450 حاوية بقدرة إجمالية تبلغ 2.1 مليون حاوية EVP. نقدم أيضاً خدمات الرحلات البحرية الداخلية والنقل النهري.",
    "INDEXID22": "<strong style=\"color: white; font-weight: bold;\">قسم اللوجستيات، العبور، والقنصلية</strong> <br>",
    "INDEXID22X": "لأي طلب، يرجى الاتصال بقسم اللوجستيات عبر البريد الإلكتروني <a href=\"mailto:Arcomaritimos5190@gmail.com \">Arcomaritimos5190@gmail.com </a>",
    "INDEXID23": "دول عالمية",
    "INDEXID24": "المشاريع المنجزة",
    "INDEXID25": "عملاء راضون",
    "INDEXID26": "الجوائز",
    "INDEXID27": "الخدمات",
    "INDEXID28": "هنا خدماتنا",
    "INDEXID29": "تتبع الحاويات",
    "INDEXID30": "نقوم بتتبع حاوياتكم في الوقت الحقيقي، مما يضمن تتبعاً مثالياً لبضائعكم من الشحنة إلى الوصول.",
    "INDEXID31": "شحن واستلام البضائع",
    "INDEXID32": "نحن نتولى كامل عملية شحن واستلام البضائع، مما يضمن إدارة فعالة وآمنة لشحناتكم.",
    "INDEXID33": "لوجستيات شاملة",
    "INDEXID34": "يتضمن خدمتنا لوجستيات شاملة جميع مراحل سلسلة التوريد، مما يوفر حلولاً مخصصة ومرنة.",
    "INDEXID35": "تجارة دولية",
    "INDEXID36": "نسهل التجارة الدولية مع خدمات التجارة، بما في ذلك شراء وبيع وتوزيع السلع حول العالم.",
    "INDEXID37": "تأجير وبيع الحاويات",
    "INDEXID38": "نوفر الحاويات لنقل شحناتكم، من جميع أنواع الحاويات، للإيجار والبيع. بيع الحاويات الجديدة والمستعملة. تجارة الحاويات الدولية، إلخ.",
    "INDEXID39": "شحن بالجملة وشحنات المشاريع",
    "INDEXID40": "ندير نقل البضائع بالجملة وشحنات المشاريع، مضمنين تسليم آمن للبضائع الضخمة والمتخصصة.",
    "INDEXID41": "نحن نقدم لوجستيات مرنة وعالية الجودة",
    "INDEXID42": "الأسئلة الشائعة (FAQ)",
    "INDEXID43": "1. ما الخدمات التي تقدمونها؟",
    "INDEXID44": "نحن نقدم مجموعة شاملة من خدمات اللوجستيات، بما في ذلك تتبع الحاويات،",
    "INDEXID45": "2. أين يقع مقركم الرئيسي؟",
    "INDEXID46": "يقع مقرنا الرئيسي في ... (ليتم التعبئة).",
    "INDEXID47": "3. متى بدأتم عملياتكم؟",
    "INDEXID48": "بدأنا عملياتنا في ... (ليتم التعبئة).",
    "INDEXID49": "4. ما هي أحجام الحاويات المتاحة؟",
    "INDEXID50": "نحن نقدم حاويات بسعات 20 و40 قدماً، وفقاً لمعايير النقل البحري.",
    "INDEXID51": "5. ما هي أنواع الحاويات التي تقدمونها للبيع والإيجار؟",
    "INDEXID52": "نحن نقدم حاويات جديدة ومستعملة تتناسب مع احتياجات لوجستية متنوعة.",
    "INDEXID53": "6. كيف يمكنني تتبع حاوياتي؟",
    "INDEXID54": "نحن نقدم تتبعاً في الوقت الحقيقي لحاوياتكم عبر منصتنا على الإنترنت،",
    "INDEXID55": "7. ما هي أنواع البضائع التي يمكنكم نقلها؟",
    "INDEXID56": "يمكننا نقل مجموعة واسعة من البضائع، بما في ذلك الشحن بالجملة وشحنات المشاريع،",
    "INDEXID57": "8. هل تقدمون حلولاً للمشاريع الدولية؟",
    "INDEXID58": "نعم، نقدم حلول لوجستية شاملة للمشاريع الدولية، باستخدام مواردنا وخبرتنا لضمان نجاح مشاريعكم،",
    "INDEXID59": "9. ما هي قيم شركتكم؟",
    "INDEXID60": "تشمل قيمنا الأداء، الاعتمادية، التزام، الاحترام، والاستماع. نحن ملتزمون بتقديم خدمة استثنائية الجودة، استناداً إلى الشفافية والصدق،",
    "INDEXID61": "10. كيف يمكنني الاتصال بخدمة العملاء؟",
    "INDEXID62": "يمكنكم الاتصال بنا عبر موقعنا على الإنترنت، أو الهاتف، أو البريد الإلكتروني. تتوفر تفاصيل اتصالنا الكاملة على صفحتنا للاتصال،",
    "INDEXID63": "11. هل تقدمون خدمات لوجستية للمواد الخام؟",
    "INDEXID64": "نعم، نقدم خدمات عالية الجودة لتصدير المواد الخام، من الإنتاج إلى شحن المنتج الخام أو المعالج،",
    "INDEXID65": "12. هل يمكنكم إدارة شحنات متخصصة وضخمة؟",
    "INDEXID66": "بالتأكيد. لدينا الخبرة والموارد اللازمة لإدارة شحنات متخصصة وضخمة، مما يضمن تسليمها بأمان وفعالية،",
    "INDEXID67": "معلومات الاتصال",
    "INDEXID68": "العنوان",
    "INDEXID69": "رقم الاتصال",
    "INDEXID70": "تقوم منظمتنا على قيم مثل الأداء، الاعتمادية، التزام، الاحترام، والاستماع. نحن جاهزون لمساعدتكم في تحقيق نجاحاتكم الحقيقية.",
    "INDEXID71": "الروابط",
    "INDEXID77": "الاتصال",
    "INDEXID78": "الروابط الاجتماعية",
    "TERMES1": "1. مقدمة",
    "TERMES2": "مرحبًا بكم في Arco Maritimo. بالوصول إلى منصتنا، فإنكم توافقون على الشروط والأحكام الموضحة أدناه.",
    "TERMES3": "2. استخدام المنصة",
    "TERMES4": "تهدف منصتنا إلى تقديم خدمات لوجستية بحرية. توافقون على عدم استخدام منصتنا لأغراض غير قانونية أو غير مصرح بها.",
    "TERMES5": "3. الملكية الفكرية",
    "TERMES6": "جميع محتويات منصتنا، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملكية Arco Maritimo ومحمية بموجب قوانين الملكية الفكرية.",
    "TERMES7": "4. تحمل الضرر",
    "TERMES8": "لا تتحمل Arcomaritimo مسؤولية مباشرة أو غير مباشرة أو عرضية أو خاصة أو ناتجة عن استخدام أو عدم القدرة على استخدام منصتنا.",
    "TERMES9": "5. تعديلات على الشروط",
    "TERMES10": "نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. ستكون التعديلات سارية فور نشرها على هذه الصفحة.",
    "TERMES11": "6. الاتصال",
    "TERMES12": "إذا كانت لديكم أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا على العنوان التالي: Arcomaritimos5190@gmail.com",
    "DEPARTMENTS1": "أقسام Arco International",
    "DEPARTMENTS2": "يستجيب ARCO International لاحتياجات عملائنا المتنوعة في قطاعات التعدين، والزراعة، واللوجستيات، والسياحة، والسيارات، وغيرها الكثير.",
    "DEPARTMENTS3": "ARCO Minerals",
    "DEPARTMENTS4": "تصدير المنتجات المعدنية مثل البوكسيت، والمنغنيز، والليثيوم، وخام الحديد، والكوبالت، وقطب النحاس، والخردة، واللاتيرايت. نقل وتوزيع لوجستي للمعادن عبر الطريق، البحر، السكة الحديد، والجو.",
    "DEPARTMENTS5": "ARCO Agri",
    "DEPARTMENTS6": "متخصصون في إنتاج المواد الزراعية الخام للتحويل والتصدير.",
    "DEPARTMENTS7": "ARCO Travel Tour",
    "DEPARTMENTS8": "يقدم عمليات سفر، وسياحة، وجولات اكتشافية حول العالم.",
    "DEPARTMENTS9": "ARCO Materials Construction",
    "DEPARTMENTS10": "إنتاج وبيع دولي لمواد البناء المتنوعة.",
    "DEPARTMENTS11": "ARCO Import",
    "DEPARTMENTS12": "قسم متخصص في استيراد المنتجات والمعدات الأجنبية من جميع الفئات والأنواع.",
    "DEPARTMENTS13": "ARCO Export (Tropical Products Agro-Alimentary)",
    "DEPARTMENTS14": "تصدير المواد الخام والمنتجات المصنعة، بما في ذلك المنتجات غير المعدلة والمعدلة وفقاً لأساليب الزراعة العضوية.",
    "DEPARTMENTS15": "ARCO Automobile Industry",
    "DEPARTMENTS16": "بيع وشراء سيارات جديدة ومستعملة. إنتاج صناعي لمركبات بكل الخيارات. تأجير وبيع مركبات.",
    "DEPARTMENTS17": "ARCO Max Private Jet Yacht",
    "DEPARTMENTS18": "تأجير طائرات خاصة، وطائرات تجارية، وطائرات شحن، ويخوت. بيع وشراء طائرات ويخوت.",
    "DEPARTMENTS19": "ARCO Cement",
    "DEPARTMENTS20": "تصدير واستيراد الإسمنت، بالإضافة إلى الإنتاج.",
    "DEPARTMENTS21": "ARCO Petroleum",
    "DEPARTMENTS22": "بيع وشراء وإنتاج صناعي للمنتجات البترولية، بما في ذلك الديزل والبنزين.",
    "DEPARTMENTS23": "ARCO Maritimo Transit Logistics Consignation Shipping",
    "DEPARTMENTS24": "خدمات تغطي أكثر من 320 ميناءً في جميع أنحاء العالم. أسطول يضم 385 حاملة حاويات بسعة كبيرة. خدمات المعدات وإدارة الشحن البحري. إقرار جمركي.",
    "DEPARTMENTS25": "ARCO Fleet",
    "DEPARTMENTS26": "أكثر من 2000 شاحنة من مختلف الفئات لنقل أنواع مختلفة من الشحنات.",
    "DEPARTMENTS27": "ARCO Representation",
    "DEPARTMENTS28": "تمثيل العلامات التجارية والمؤسسات والمشاريع.",
    "DEPARTMENTS29": "ARCO Container Services",
    "DEPARTMENTS30": "توفير حاويات لنقل الشحنات. بيع وتأجير حاويات جديدة ومستعملة. التجارة الدولية في الحاويات.",
    "DEPARTMENTS31": "ARCO Food Products",
    "DEPARTMENTS32": "قسم المنتجات الغذائية بما في ذلك: السكر ICUMSA 45 وIC150 من البرازيل. زيت النخيل في براميل 25 لتر و20 لتر. الأرز المحلي والأرز الأجنبي. المشروبات.",
    "DEPARTMENTS33": "ARCO Agricultural Products",
    "DEPARTMENTS34": "توفير مواد الزراعة مثل اليوريا، وDAP، وNPK. المواد الخام بما في ذلك الصويا، وجوز الكاجو، وفول السودان، واليوكا، والذرة البيضاء والصفراء، والكاكاو، والمطاط الخام، والمطاط الصناعي (TSR 10، 20)، والفاصوليا (بيضاء وحمراء)، والسورغم، وجوز الكاجو مقشر، والسمسم (أبيض ومتعدد الألوان)، وألياف القطن، وبذور القطن، والهيل، الفلفل الأحمر، وجوز الشيا.",
    "DEPARTMENTS35": "أقسامنا",
  }
},
tr:{
  translation:{
    "INDEXID1": "Abonelik işlemleri ve takip",
    "INDEXID2": "Ana Sayfa",
    "INDEXID3": "Hakkımızda <i class=\"bi bi-chevron-down\"></i>",
    "INDEXID4": "İletişim",
    "INDEXID5": "Hizmetler",
    "INDEXID6": "Ürünlerimiz",
    "INDEXID7": "Şartlar <i class=\"bi bi-chevron-down\"></i>",
    "INDEXID8": "Kullanım Şartları",
    "INDEXID9": "Politika",
    "INDEXID10": "S.S.S.",
    "INDEXID11": "Diller <i class=\"bi bi-chevron-down\"></i>",
    "INDEXID12": "Acil Durum",
    "INDEXID13": "",
    "INDEXID14XXX": "İthalat, lojistik, uluslararası transit, ithalat-ihracat, konsinye ve kiralama konularında kapsamlı ve kaliteli çözümler için güvenilir ortağınız.",
    "INDEXID15": "Hakkımızda <i class=\"bi bi-arrow-right\"></i>",
    "INDEXID16": "Şirket Hakkında",
    "INDEXID17": "2024 yılında kurulan Arcomaritimo, merkezi ... (tamamlanacak) olan bir firma. Faaliyetlerimize ... (tamamlanacak) tarihinde başladık. Lojistik, transit, ithalat-ihracat gibi alanlarda uzmanlıkla hizmet sunuyoruz. İşimizde pragmatizm, şeffaflık ve güvenilirlik ilkesine bağlıyız. Müşteri memnuniyetini garanti altına almak ve mükemmel hizmet sunmak amacıyla çalışıyoruz. Performans, güvenilirlik, taahhüt, saygı ve dinlemeye dayalı değerler üzerine kurulu organizasyonumuz, projelerinizi başarıya dönüştürmek için hazır.",
    "INDEXID18": "Hizmetlerimiz",
    "INDEXID19": "Hizmetlerimiz",
    "INDEXID21":`Dünya çapında 320'den fazla limana, büyük kapasiteli 385 konteyner gemisinden oluşan bir filo ile hizmet veriyoruz. Deniz taşımacılığının yanı sıra, çeşitli deniz yönetimi hizmetleri ve ilgili ekipmanlar sunuyoruz. Latin armatörü, gemileri aracılığıyla dünya çapındaki tüm limanlara hizmet vermektedir. Arcomaritimo, aylık ortalama beş kiralama yapmaktadır. Karayolu taşımacılığı filomuz, çeşitli kategorilerde 2000'den fazla kamyondan oluşmakta olup, yüklerinizi güvenli ve verimli bir şekilde taşıma kapasitesine sahiptir. `,
    "INDEXID21X": "Arcomaritimo, projelerinizi gerçekleştirmede ve yüksek standartlı hizmetler sunmada sizin yanınızda olan bir iş ortağı. Uluslararası alanda 199 ülkeye hizmet veriyoruz. Dünya genelinde tüm limanlara hizmet sağlıyoruz. Aylık beş kiralama gerçekleştiriyoruz ve dünya çapında 329'dan fazla limana hizmet sunuyoruz. 2,1 milyon TEU kapasiteli 450 konteyner gemisi filomuz bulunuyor. Ayrıca kıyı ötesi ve nehir taşımacılığı hizmetleri de sunuyoruz.",
    "INDEXID22": "<strong style=\"color: white; font-weight: bold;\">Lojistik, Transit ve Konşimento Departmanı</strong> <br>",
    "INDEXID22X": "Tüm sorularınız için lütfen lojistik departmanına <a href=\"mailto:Arcomaritimos5190@gmail.com \">Arcomaritimos5190@gmail.com </a> adresinden ulaşınız.",
    "INDEXID23": "Uluslararası Ülkeler",
    "INDEXID24": "Tamamlanmış Projeler",
    "INDEXID25": "Memnun Müşteriler",
    "INDEXID26": "Ödüller",
    "INDEXID27": "Hizmetler",
    "INDEXID28": "Hizmetlerimiz",
    "INDEXID29": "Konteyner Takibi",
    "INDEXID30": "Konteynerlerinizin gerçek zamanlı takibini sağlıyoruz, ürünlerinizin gönderiden varışa kadar izlenmesini güvence altına alıyoruz.",
    "INDEXID31": "Malların Gönderimi ve Alımı",
    "INDEXID32": "Gönderim ve alım süreçlerinin tamamını yönetiyoruz, gönderilerinizin etkin ve güvenli bir şekilde yönetilmesini sağlıyoruz.",
    "INDEXID33": "Toplam Lojistik",
    "INDEXID34": "Toplam lojistik hizmetimiz, tedarik zincirinin tüm aşamalarını içerir, özelleştirilmiş ve esnek çözümler sunar.",
    "INDEXID35": "Uluslararası Ticaret",
    "INDEXID36": "Uluslararası ticareti kolaylaştırıyoruz, dünya genelinde mal alımı, satışı ve dağıtımını içeren ticaret hizmetleri sunuyoruz.",
    "INDEXID37": "Konteyner Kiralama ve Satışı",
    "INDEXID38": "Yüklerinizi taşımak için her türlü konteyneri kiralık ve satılık olarak sağlıyoruz. Yeni ve ikinci el konteyner satışları. Uluslararası konteyner ticareti, vb.",
    "INDEXID39": "Kitle ve Proje Yükleri",
    "INDEXID40": "Toplu yük taşımacılığı ve proje yüklerini yönetiyoruz, büyük ve özel yüklerin güvenli teslimatını sağlıyoruz.",
    "INDEXID41": "Esnek ve kaliteli lojistik sağlıyoruz",
    "INDEXID42": "Sıkça Sorulan Sorular (SSS)",
    "INDEXID43": "1. Hangi hizmetleri sunuyorsunuz?",
    "INDEXID44": "Konteyner takibi de dahil olmak üzere geniş bir lojistik hizmet yelpazesi sunuyoruz.",
    "INDEXID45": "2. Merkez ofisiniz nerede?",
    "INDEXID46": "Merkez ofisimiz ... (tamamlanacak) konumundadır.",
    "INDEXID47": "3. Operasyonlarınıza ne zaman başladınız?",
    "INDEXID48": "Operasyonlarımıza ... (tamamlanacak) tarihinde başladık.",
    "INDEXID49": "4. Kullanılabilir konteyner boyutları nelerdir?",
    "INDEXID50": "Deniz taşımacılığı standartlarına uygun 20 ve 40 feet konteynerler sunuyoruz.",
    "INDEXID51": "5. Satış ve kiralama için hangi türde konteynerler sunuyorsunuz?",
    "INDEXID52": "Çeşitli lojistik ihtiyaçlarına uygun yeni ve kullanılmış konteynerler sunuyoruz.",
    "INDEXID53": "6. Konteynerlerimi nasıl takip edebilirim?",
    "INDEXID54": "Ürünlerinizin gerçek zamanlı takibini çevrimiçi platformumuz aracılığıyla sağlıyoruz.",
    "INDEXID55": "7. Hangi türde yükleri taşıyabilirsiniz?",
    "INDEXID56": "Toplu yüklerden proje yüklerine kadar geniş bir yük yelpazesini taşıyabiliriz.",
    "INDEXID57": "8. Uluslararası projeler için çözümler sunuyor musunuz?",
    "INDEXID58": "Evet, uluslararası projeler için kapsamlı lojistik çözümleri sunuyoruz, projelerinizin başarısını garanti altına almak için kaynaklarımızı ve uzmanlığımızı kullanıyoruz.",
    "INDEXID59": "9. Şirketinizin değerleri nelerdir?",
    "INDEXID60": "Performans, güvenilirlik, taahhüt, saygı ve dinlemeye dayalı değerlerimizle müşterilere üstün kaliteli hizmet sunmaya kararlıyız.",
    "INDEXID61": "10. Müşteri hizmetlerinize nasıl ulaşabilirim?",
    "INDEXID62": "Web sitemiz, telefon veya e-posta aracılığıyla bizimle iletişime geçebilirsiniz. Tüm iletişim bilgilerimiz iletişim sayfamızda mevcuttur.",
    "INDEXID63": "11. Ham madde lojistiği için hizmet sağlıyor musunuz?",
    "INDEXID64": "Evet, ham madde ihracatı konusunda kaliteli hizmetler sunuyoruz, üretimden işlenmiş veya ham ürünün nakliyesine kadar.",
    "INDEXID65": "12. Özel ve hacimli yükleri yönetebilir misiniz?",
    "INDEXID66": "Kesinlikle. Özel ve hacimli yüklerin güvenli ve etkin bir şekilde teslimatını sağlamak için gerekli uzmanlığa ve kaynaklara sahibiz.",
    "INDEXID67": "İletişim Bilgileri",
    "INDEXID68": "Adres",
    "INDEXID69": "İletişim Numarası",
    "INDEXID70": "Performans, güvenilirlik, taahhüt, saygı ve dinlemeye dayalı değerler üzerine kurulu organizasyonumuz, projelerinizi başarıya dönüştürmek için hazır.",
    "INDEXID71": "Bağlantılar",
    "INDEXID77": "İletişime Geçin",
    "INDEXID78": "Sosyal Bilgiler",
    "TERMES1": "1. Giriş",
    "TERMES2": "Arco Maritimo'ya hoş geldiniz. Platformumuza erişerek aşağıda açıklanan şartları ve koşulları kabul etmiş olursunuz.",
    "TERMES3": "2. Platformun Kullanımı",
    "TERMES4": "Platformumuz, denizcilik lojistiği hizmetleri sunmak amacıyla tasarlanmıştır. Platformumuzu yasal olmayan veya izinsiz amaçlarla kullanmayacağınızı kabul edersiniz.",
    "TERMES5": "3. Fikri Mülkiyet",
    "TERMES6": "Metinler, grafikler, logolar ve resimler dahil olmak üzere platformumuzun tüm içeriği Arco Maritimo'nun mülkiyetindedir ve fikri mülkiyet yasalarıyla korunmaktadır.",
    "TERMES7": "4. Sorumluluğun Sınırlanması",
    "TERMES8": "Arcomaritimo, platformumuzu kullanımınız veya kullanamamanız sonucunda doğrudan, dolaylı, kazara, özel veya ardışık olarak meydana gelen zararlardan sorumlu tutulamaz.",
    "TERMES9": "5. Şartların Değiştirilmesi",
    "TERMES10": "Bu şartları ve koşulları istediğimiz zaman değiştirme hakkını saklı tutarız. Değişiklikler, bu sayfada yayımlandıktan hemen sonra geçerli olacaktır.",
    "TERMES11": "6. İletişim",
    "TERMES12": "Bu şartlar ve koşullar hakkında sorularınız varsa, lütfen bize aşağıdaki e-posta adresinden ulaşın: Arcomaritimos5190@gmail.com",
    "DEPARTMENTS1": "ARCO International Departmanları",
    "DEPARTMENTS2": "ARCO International, madencilik, tarım, lojistik, turizm, otomotiv ve daha pek çok sektördeki müşterilerimizin çeşitli ihtiyaçlarına cevap vermektedir.",
    "DEPARTMENTS3": "ARCO Minerals",
    "DEPARTMENTS4": "Boksit, manganez, lityum, demir cevheri, kobalt, bakır katot, hurda ve laterit gibi maden ürünlerinin ihracatı. Kamyon, gemi, tren ve hava yolu ile madencilik lojistik taşımacılığı.",
    "DEPARTMENTS5": "ARCO Agri",
    "DEPARTMENTS6": "Tarım hammadde üretimi ve ihracatı konusunda uzmanlaşmıştır.",
    "DEPARTMENTS7": "ARCO Travel Tour",
    "DEPARTMENTS8": "Dünya genelinde seyahat operasyonları, turizm ve keşif turları sunar.",
    "DEPARTMENTS9": "ARCO Matériaux de Construction",
    "DEPARTMENTS10": "Çeşitli inşaat malzemelerinin uluslararası üretimi ve satışı.",
    "DEPARTMENTS11": "ARCO Import",
    "DEPARTMENTS12": "Her türlü yabancı ürün ve malzemelerin ithalatına yönelik bir departman.",
    "DEPARTMENTS13": "ARCO Export (Tropical and Agro-Food Products)",
    "DEPARTMENTS14": "Genetiği değiştirilmemiş organizmalar (GDO), GDO'lu ve organik ürünler dahil olmak üzere ham ve işlenmiş ürünlerin ihracatı.",
    "DEPARTMENTS15": "ARCO Automobile & Industrie",
    "DEPARTMENTS16": "Yeni ve ikinci el araç satışı. Tüm seçeneklerde endüstriyel araç üretimi. Araç kiralama ve satışı.",
    "DEPARTMENTS17": "ARCO Max Private Jet & Yacht",
    "DEPARTMENTS18": "Özel jet, ticari uçak, kargo uçağı ve yat kiralama. Jet ve yat satışı ve alımı.",
    "DEPARTMENTS19": "ARCO Cement",
    "DEPARTMENTS20": "Çimento ihracatı, ithalatı ve üretimi.",
    "DEPARTMENTS21": "ARCO Petroleum",
    "DEPARTMENTS22": "Motorin ve benzin gibi petrol ürünlerinin üretimi, satışı ve alımı.",
    "DEPARTMENTS23": "ARCO Maritimo Transit Logistics Consignment Shipping",
    "DEPARTMENTS24": "Dünya genelinde 320'den fazla limana hizmet sunan bir hizmet. 385 konteyner gemisi filosu ile büyük kapasiteli hizmetler. Denizcilik ekipmanları ve yönetimi. Gümrük beyannamesi.",
    "DEPARTMENTS25": "ARCO Fleet",
    "DEPARTMENTS26": "Farklı yük türlerini taşıyan 2000'den fazla kamyon filosu.",
    "DEPARTMENTS27": "ARCO Représentation",
    "DEPARTMENTS28": "Markaların, kurumların, kuruluşların ve projelerin temsilciliği.",
    "DEPARTMENTS29": "ARCO Container Services",
    "DEPARTMENTS30": "Yük taşımacılığı için konteyner tedariki. Yeni ve ikinci el konteynerlerin satışı ve kiralama. Uluslararası konteyner ticareti.",
    "DEPARTMENTS31": "ARCO Produits Alimentaires",
    "DEPARTMENTS32": "Şeker, palm yağı, yerel ve yabancı pirinç ve içecekler gibi gıda ürünleri.",
    "DEPARTMENTS33": "ARCO Produits Agricoles",
    "DEPARTMENTS34": "Gübre, DAP ve NPK gibi tarımsal girdi tedariki. Soya, kaju, yer fıstığı, maniyok, beyaz ve sarı mısır, kakao, kauçuk ve pamuk tohumları gibi tarım ürünleri.",
    "DEPARTMENTS35": "Departmanlarımız"
}

}
      
    }
    }, function(err, t) {
      // Traduire le contenu de la page après initialisation de i18next
      translatePage();
    });
  
    // Fonction pour traduire le contenu de la page
    function translatePage() {
      // Récupérez la description correspondant à la langue actuelle
      var description = i18next.t('IDTRANSLATE11');
  
      // Sélectionnez la balise <meta> de description
      var metaDescription = $("meta[name='description']");
  
      // Mettez à jour le contenu de la balise <meta> avec la description
      metaDescription.attr('content', description);
  
      // Récupérez le keywords correspondant à la langue actuelle
      var keywords = i18next.t('keywords');
  
      // Sélectionnez la balise <meta> de description
      var metaKeywords = $("meta[name='keywords']");
  
      // Mettez à jour le contenu de la balise <meta> avec la description  
      metaKeywords.attr('content', keywords);  
      //$("#INDEXID1").attr("placeholder", i18next.t("INDEXID1")); INDEXID3
      $("#INDEXID1").text(i18next.t("INDEXID1")); 
      $("#INDEXID2").text(i18next.t("INDEXID2"));
      $("#INDEXID3").html(i18next.t("INDEXID3"));
      $("#INDEXID4").text(i18next.t("INDEXID4")); 
      $("#INDEXID4WWW").text(i18next.t("INDEXID4")); 
      $("#INDEXID5").text(i18next.t("INDEXID5"));
      $("#INDEXID6").text(i18next.t("INDEXID6"));
      $("#INDEXID7").html(i18next.t("INDEXID7"));
      $("#INDEXID8").html(i18next.t("INDEXID8"));
      $("#INDEXID9").text(i18next.t("INDEXID9"));
      $("#INDEXID10").text(i18next.t("INDEXID10"));
      $("#INDEXID11").html(i18next.t("INDEXID11"));
      $("#INDEXID12").text(i18next.t("INDEXID12"));
      $("#INDEXID13").html(i18next.t("INDEXID13"));
      $("#INDEXID14XXX").text(i18next.t("INDEXID14XXX"));
      $("#INDEXID15").html(i18next.t("INDEXID15"));
      $("#INDEXID16").text(i18next.t("INDEXID16"));
      $("#INDEXID17").text(i18next.t("INDEXID17"));
      $("#INDEXID18").text(i18next.t("INDEXID18"));
      $("#INDEXID19").text(i18next.t("INDEXID19"));
      $("#INDEXID20").text(i18next.t("INDEXID12"));
      $("#INDEXID21").text(i18next.t("INDEXID21"));
      $("#INDEXID22").html(i18next.t("INDEXID22"));
      $("#INDEXID22X").html(i18next.t("INDEXID22X"));
      $("#INDEXID23").html(i18next.t("INDEXID23"));
      $("#INDEXID24").html(i18next.t("INDEXID24"));
      $("#INDEXID25").html(i18next.t("INDEXID25"));
      $("#INDEXID26").html(i18next.t("INDEXID26"));
      $("#INDEXID27").html(i18next.t("INDEXID27"));
      $("#INDEXID29").html(i18next.t("INDEXID29"));
      $("#INDEXID30").html(i18next.t("INDEXID30"));
      $("#INDEXID31").html(i18next.t("INDEXID31"));
      $("#INDEXID32").html(i18next.t("INDEXID32"));
      $("#INDEXID33").html(i18next.t("INDEXID33"));
      $("#INDEXID34").html(i18next.t("INDEXID34"));
      $("#INDEXID35").html(i18next.t("INDEXID35"));
      $("#INDEXID36").html(i18next.t("INDEXID36"));
      $("#INDEXID37").html(i18next.t("INDEXID37"));
      $("#INDEXID38").html(i18next.t("INDEXID38"));
      $("#INDEXID39").html(i18next.t("INDEXID39"));
      $("#INDEXID40").html(i18next.t("INDEXID40"));
      $("#INDEXID41").html(i18next.t("INDEXID41"));
      $("#INDEXID42").html(i18next.t("INDEXID42"));
      $("#INDEXID43").html(i18next.t("INDEXID43"));
      $("#INDEXID44").html(i18next.t("INDEXID44"));
      $("#INDEXID45").html(i18next.t("INDEXID45"));
      $("#INDEXID46").html(i18next.t("INDEXID46"));
      $("#INDEXID47").html(i18next.t("INDEXID47"));
      $("#INDEXID48").html(i18next.t("INDEXID48"));
      $("#INDEXID49").html(i18next.t("INDEXID49"));
      $("#INDEXID50").html(i18next.t("INDEXID50"));
      $("#INDEXID51").html(i18next.t("INDEXID51"));
      $("#INDEXID52").html(i18next.t("INDEXID52"));
      $("#INDEXID53").html(i18next.t("INDEXID53"));
      $("#INDEXID54").html(i18next.t("INDEXID54"));
      $("#INDEXID55").html(i18next.t("INDEXID55"));
      $("#INDEXID56").html(i18next.t("INDEXID56"));
      $("#INDEXID57").html(i18next.t("INDEXID57"));
      $("#INDEXID58").html(i18next.t("INDEXID58"));
      $("#INDEXID59").html(i18next.t("INDEXID59"));
      $("#INDEXID60").html(i18next.t("INDEXID60"));
      $("#INDEXID61").html(i18next.t("INDEXID61"));
      $("#INDEXID62").html(i18next.t("INDEXID62"));
      $("#INDEXID63").html(i18next.t("INDEXID63"));
      $("#INDEXID64").html(i18next.t("INDEXID64"));
      $("#INDEXID65").html(i18next.t("INDEXID65"));
      $("#INDEXID66").html(i18next.t("INDEXID66"));
      $("#INDEXID67").html(i18next.t("INDEXID67"));
      $("#INDEXID68").html(i18next.t("INDEXID68"));
      $("#INDEXID69").html(i18next.t("INDEXID69"));
      $("#INDEXID70").html(i18next.t("INDEXID70"));
      $("#INDEXID71").html(i18next.t("INDEXID71"));
      $("#INDEXID72").html(i18next.t("INDEXID2"));
      $("#INDEXID73").html(i18next.t("INDEXID3"));
      $("#INDEXID74").html(i18next.t("INDEXID4"));
      $("#INDEXID75").html(i18next.t("INDEXID5"));
      $("#INDEXID76").html(i18next.t("INDEXID8"));
      $("#INDEXID77").html(i18next.t("INDEXID77")); 
      $("#INDEXID78").html(i18next.t("INDEXID78"));
      $("#TERMES1").html(i18next.t("TERMES1"));
      $("#TERMES2").html(i18next.t("TERMES2"));
      $("#TERMES3").html(i18next.t("TERMES3"));
      $("#TERMES4").html(i18next.t("TERMES4"));
      $("#TERMES5").html(i18next.t("TERMES5"));
      $("#TERMES6").html(i18next.t("TERMES6"));
      $("#TERMES7").html(i18next.t("TERMES7"));
      $("#TERMES8").html(i18next.t("TERMES8"));
      $("#TERMES9").html(i18next.t("TERMES9"));
      $("#TERMES10").html(i18next.t("TERMES10"));
      $("#TERMES11").html(i18next.t("TERMES11"));
      $("#TERMES12").html(i18next.t("TERMES12"));
      $("#DEPARTMENTS1").html(i18next.t("DEPARTMENTS1"));
      $("#DEPARTMENTS2").html(i18next.t("DEPARTMENTS2"));
      $("#DEPARTMENTS3").html(i18next.t("DEPARTMENTS3"));
      $("#DEPARTMENTS4").html(i18next.t("DEPARTMENTS4"));
      $("#DEPARTMENTS5").html(i18next.t("DEPARTMENTS5"));
      $("#DEPARTMENTS6").html(i18next.t("DEPARTMENTS6"));
      $("#DEPARTMENTS7").html(i18next.t("DEPARTMENTS7"));
      $("#DEPARTMENTS8").html(i18next.t("DEPARTMENTS8"));
      $("#DEPARTMENTS9").html(i18next.t("DEPARTMENTS9"));
      $("#DEPARTMENTS10").html(i18next.t("DEPARTMENTS10"));
      $("#DEPARTMENTS11").html(i18next.t("DEPARTMENTS11"));
      $("#DEPARTMENTS12").html(i18next.t("DEPARTMENTS12"));
      $("#DEPARTMENTS13").html(i18next.t("DEPARTMENTS13"));
      $("#DEPARTMENTS14").html(i18next.t("DEPARTMENTS14"));
      $("#DEPARTMENTS15").html(i18next.t("DEPARTMENTS15"));
      $("#DEPARTMENTS16").html(i18next.t("DEPARTMENTS16"));
      $("#DEPARTMENTS17").html(i18next.t("DEPARTMENTS17"));
      $("#DEPARTMENTS18").html(i18next.t("DEPARTMENTS18"));
      $("#DEPARTMENTS19").html(i18next.t("DEPARTMENTS19"));
      $("#DEPARTMENTS20").html(i18next.t("DEPARTMENTS20"));
      $("#DEPARTMENTS21").html(i18next.t("DEPARTMENTS21"));
      $("#DEPARTMENTS22").html(i18next.t("DEPARTMENTS22"));
      $("#DEPARTMENTS23").html(i18next.t("DEPARTMENTS23"));
      $("#DEPARTMENTS24").html(i18next.t("DEPARTMENTS24"));
      $("#DEPARTMENTS25").html(i18next.t("DEPARTMENTS25"));
      $("#DEPARTMENTS26").html(i18next.t("DEPARTMENTS26"));
      $("#DEPARTMENTS27").html(i18next.t("DEPARTMENTS27"));
      $("#DEPARTMENTS28").html(i18next.t("DEPARTMENTS28"));
      $("#DEPARTMENTS29").html(i18next.t("DEPARTMENTS29"));
      $("#DEPARTMENTS30").html(i18next.t("DEPARTMENTS30"));
      $("#DEPARTMENTS31").html(i18next.t("DEPARTMENTS31"));
      $("#DEPARTMENTS32").html(i18next.t("DEPARTMENTS32"));
      $("#DEPARTMENTS33").html(i18next.t("DEPARTMENTS33"));
      $("#DEPARTMENTS34").html(i18next.t("DEPARTMENTS34"));
      $("#DEPARTMENTS35").html(i18next.t("DEPARTMENTS35"));
    }   
    // Récupérer la langue sélectionnée à partir du stockage local
    var selectedLanguage = localStorage.getItem('selectedLanguage');
   //document.getElementById('lgId').innerHTML = `${selectedLanguage}`
    if (selectedLanguage) {
      // Changer la langue selon la valeur récupérée
      $("#language-select").val(selectedLanguage);
      i18next.changeLanguage(selectedLanguage);
    }
  // Écoutez l'événement personnalisé "translateClicked"
  document.addEventListener('translateClicked', () => {
    // Appelez la fonction de traduction lorsque l'événement est déclenché
    translateFunction();
    Swal.update({
      confirmButtonText: i18next.t('IDTRANSLATE6WXQSDF', { lng: selectedLanguage })
  });
  });
  
  // Définissez votre fonction de traduction
  function translateFunction() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
     
      i18next.changeLanguage(selectedLanguage);
    }
    i18next.changeLanguage(selectedLanguage, function(err, t) {
      if (err) return console.error(err);
      translatePage();
    });
    console.log('Fonction de traduction appelée !');
  {/*setTimeout(()=>{
    Swal.update({
      confirmButtonText: i18next.t('IDTRANSLATE6WXQSDF', { lng: selectedLanguage })
  });
  }, 100)*/}
  }
    // Écouteur d'événement pour changer la langue
    $("#language-select li").on("click", function() {
      var selectedLanguage = $(this).find("img").attr("alt");
      const urlParams = new URLSearchParams(window.location.search);
      const selectedLanguagex = urlParams.get("lg");
       if(selectedLanguagex){
        const urlParamsx = new URLSearchParams(window.location.search);
        urlParamsx.set('lg', selectedLanguage);
        window.location.search = urlParamsx.toString();
        // Enregistrer la langue sélectionnée dans le stockage local
        localStorage.setItem('selectedLanguage', selectedLanguage);
        $('#language-select').hide();
        //location.reload();
        // Changer la langue avec i18next
        i18next.changeLanguage(selectedLanguage, function(err, t) {
        if (err) return console.error(err);
        translatePage();
      });
       }else{
        var selectedLanguage = $(this).find("img").attr("alt");
        // Enregistrer la langue sélectionnée dans le stockage local
        localStorage.setItem('selectedLanguage', selectedLanguage);
        $('#language-select').hide();
        location.reload();
        // Changer la langue avec i18next
        i18next.changeLanguage(selectedLanguage, function(err, t) {
        if (err) return console.error(err);
        translatePage();
      });
      }
  });
  
  });