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
            "INDEXID14XXX":`Votre partenaire de confiance pour des solutions complètes et de qualité en importation, logistique, transit, consignation et location. `,
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
            "INDEXID21":`Arcomaritimo, votre Partenaire de Proximité Engagé dans la concrétisation de vos 
            projets et la fourniture de services de standing, Arcomaritimo couvre 199 pays à l'international. 
            Nous sommes présents dans tous les pays. Nos navires desservent tous les ports du monde. Nous effectuons 
            cinq affrètements par mois et dessert plus de 329 ports à travers le globe, avec une flotte de 450 
            porte-conteneurs d'une capacité totale de 2,1 millions d'EVP. 
            Nous offrons également des services de cabotage maritime et de transport par voie fluviale.
            `,
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
            "INDEXID38":`Nous proposons une large gamme de conteneurs, neufs et usagés, à la vente ou à la location, adaptés à vos besoins spécifiques.`,
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
                  "INDEXID14XXX":`您值得信赖的合作伙伴，提供全面优质的进口、物流、转运、寄售和租赁解决方案。`,
                  "INDEXID15":`关于 <i class="bi bi-arrow-right"></i>`,
                  "INDEXID16":`关于公司`,
                  "INDEXID17":`卓越的物流、进口、转运、寄售和租赁解决方案`,
                  "INDEXID18":`Arcomaritimo成立于2024年，总部位于...（待补充）。我们于...（待补充）开始运营。我们对工作充满热情，在物流、转运和进出口各方面都表现出色。我们承诺务实、透明和可信，致力于提供卓越的服务，确保客户满意。我们的组织基于绩效、可靠性、承诺、尊重和倾听等价值观。我们准备好帮助您将项目转化为具体成果。`,
                  "INDEXID19":`我们的服务`,
                  "INDEXID21":`Arcomaritimo，您身边的合作伙伴，致力于实现您的项目并提供高标准服务，Arcomaritimo覆盖199个国际国家。我们在所有国家都有业务。我们的船只通航全球各个港口。我们每月进行五次包船运输，覆盖全球超过329个港口，拥有450艘集装箱船，总运力为210万个标准箱。我们还提供沿海航运和内河运输服务。`,
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
                  "INDEXID38":`我们提供各种类型的集装箱，既有新的也有二手的，供租赁或销售，满足您的特定需求。`,
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
                "INDEXID14XXX": "Your trusted partner for comprehensive and quality solutions in importation, logistics, transit, consignment, and leasing.",
                "INDEXID15": "About <i class=\"bi bi-arrow-right\"></i>",
                "INDEXID16": "About the company",
                "INDEXID17": "Logistics, importation, transit, consignment, and leasing solutions for excellence",
                "INDEXID18": "Founded in 2024, Arcomaritimo is headquartered in ... (to be completed). We started our operations in ... (to be completed). Passionate about our work, we excel in all aspects of logistics, from transit to import-export. Committed to pragmatism, transparency, and credibility, we aim to provide excellent service and ensure customer satisfaction. Our organization is based on values such as performance, reliability, commitment, respect, and listening. We are ready to support you in transforming your projects into concrete successes.",
                "INDEXID19": "Our Services",
                "INDEXID21": "Arcomaritimo, your Proximity Partner Committed to realizing your projects and providing high-standard services, Arcomaritimo covers 199 countries internationally. We are present in all countries. Our ships serve all ports worldwide. We carry out five charters per month and serve more than 329 ports globally, with a fleet of 450 container ships with a total capacity of 2.1 million TEU. We also offer coastal shipping and inland waterway transport services.",
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
                "INDEXID38": "We offer a wide range of containers, new and used, for sale or lease, tailored to your specific needs.",
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
            "INDEXID14XXX": "Ihr vertrauenswürdiger Partner für umfassende und qualitativ hochwertige Lösungen in den Bereichen Import, Logistik, Transit, Konsignation und Leasing.",
            "INDEXID15": "Über uns <i class=\"bi bi-arrow-right\"></i>",
            "INDEXID16": "Über das Unternehmen",
            "INDEXID17": "Logistik-, Import-, Transit-, Konsignations- und Leasinglösungen für Exzellenz",
            "INDEXID18": "Gegründet im Jahr 2024 hat Arcomaritimo seinen Hauptsitz in ... (noch zu vervollständigen). Wir haben unsere Tätigkeiten in ... (noch zu vervollständigen) aufgenommen. Leidenschaftlich bei unserer Arbeit, sind wir in allen Aspekten der Logistik, vom Transit bis zum Import-Export, führend. Engagiert für Pragmatismus, Transparenz und Glaubwürdigkeit, streben wir danach, exzellenten Service zu bieten und die Zufriedenheit unserer Kunden zu gewährleisten. Unsere Organisation basiert auf Werten wie Leistung, Zuverlässigkeit, Engagement, Respekt und Zuhören. Wir sind bereit, Sie bei der Umsetzung Ihrer Projekte in konkrete Erfolge zu unterstützen.",
            "INDEXID19": "Unsere Dienstleistungen",
            "INDEXID21": "Arcomaritimo, Ihr Partner vor Ort Engagiert für die Umsetzung Ihrer Projekte und die Bereitstellung von Dienstleistungen auf hohem Niveau, deckt Arcomaritimo international 199 Länder ab. Wir sind in allen Ländern vertreten. Unsere Schiffe bedienen alle Häfen weltweit. Wir führen fünf Charterflüge pro Monat durch und bedienen über 329 Häfen weltweit, mit einer Flotte von 450 Containerschiffen mit einer Gesamtkapazität von 2,1 Millionen TEU. Wir bieten auch Küstenschifffahrt und Binnenwasserstraßentransporte an.",
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
            "INDEXID38": "Wir bieten eine breite Palette von Containern, neu und gebraucht, zum Verkauf oder zur Miete an, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.",
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