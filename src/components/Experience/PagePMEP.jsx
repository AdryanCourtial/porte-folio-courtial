

export function PagePMEP() {
    return (
        <div className={"text-my-white gap-32 flex flex-col pt-32 px-8 [&_h1]:text-5xl [&_h1]:font-bold [&_p]:mt-12 [&>div]:w-full [&>div]:flex [&>div]:text-start"  }>
            <div>
                <div className={'w-[40%]'}>
                    <h1> Présentation de l’entreprise </h1>
                    <p> <strong>PME-Partner est un cabinet spécialisé dans l'acquisition et la cession d’entreprises </strong>, en particulier dans les TPE, PME et fonds de commerce. L'objectif est d'offrir à ces petites et moyennes entreprises une <strong>solution efficace et compétente pour le suivi avec le client</strong>, car ces organisations constituent une grande partie du marché.
                        Le stage proposé est de 3 mois et à l'issue je serais pris en charge pour une alternance de 3 ans
                    </p>
                </div>
                <div className={'flex-1 items-center flex justify-center'}>
                    <img src={require('./../../image/PmePartner2.png')} alt="Pme-Partner"  className='m-autor h-[15vh]'/>
                </div>
            </div>
            <div>
            <div className={'flex-1 flex flex-col justify-center items-center gap-8'}>
                    <img src={require('./../../image/integration.webp')} alt="Pme-Partner"  className=' h-[40vh]'/>
                </div>
                <div className={'w-[40%]'}> 
                    <h1 className="text-start"> Intégration </h1>
                    <p> Lors de mes débuts, j’ai intégré une petite partie de l’équipe, car la plupart des membres étaient en vacances à ce 
                        moment-là. Sans entrer dans les détails, l'équipe informatique était composée, au moment de mon arrivée, de deux 
                        personnes : <strong>Florian et Lucas</strong> (pour des raisons d’anonymat, je ne mentionnerai pas leurs noms de famille 😀). 
                        L’un étant en congé, c'est Florian qui s'est chargé de ma formation sur les technologies utilisées chez PME-Partner. 
                        Lorsque Lucas est revenu, il m’a aidé plus particulièrement à comprendre <strong>l’architecture de ROSE ainsi que 
                        d'autres aspects qu’un développeur Full Stack doit maîtriser</strong>, tels que : <br /> <br />
                        <ul>
                            <li>- <strong>Le déploiement</strong></li>
                            <li>- <strong>La compréhension de l’environnement de travail</strong> (car être développeur ne se résume pas seulement à écrire des lignes de code haha)</li>
                            <li>- <strong>Le système de récupération des sauvegardes</strong></li>
                        </ul>
                    </p>
                </div>
            </div>
            <div>
                <div className={'w-[40%]'}> 
                    <h1 className="text-start"> Mes Missions et Projets </h1>
                    <p> Je suis resté plutôt vague tout à l’heure, mais parlons maintenant plus précisément de ce que je devais faire concrètement.
                    Comme mentionné précédemment, le cabinet est spécialisé dans l'acquisition et la cession de TPE/PME. L’équipe de consultants avec laquelle je travaille utilise un logiciel nommé “ROSE”, qui est un BPM (Business Process Management) 
                    leur permettant de mieux s’organiser et communiquer lors de la gestion des dossiers. 
                    Ce logiciel intègre deux frameworks : <br /> <br />
                        <ul>
                            <li>- Vue.js pour un front-end réactif</li>
                            <li>- Laravel pour la création de l’API liée à la base de données</li>
                        </ul>
                        <br />

                    Ainsi, mes responsabilités au sein de l’application sont les suivantes : <br /> <br />

                        <ul>
                            <li>- Résoudre les bugs</li>
                            <li>- Ajouter de nouvelles fonctionnalités en fonction des retours des consultants</li>
                            <li>- Gérer la documentation autour de ROSE pour permettre aux futurs </li>
                            <li>- Gérer l'hébergement de l’application, notamment sur Hostinger, avec OVH en cas de secours</li>
                        </ul>
                        <br />

                        De plus, j’ai été impliqué dans un travail de collecte de données appelé "scraping". 
                        L’objectif est de parcourir des sites internet contenant des informations intéressantes 
                        (emails d’entreprises, codes postaux, etc.) pour en extraire des données. Mais pourquoi collecter ces informations ? 
                        L’enjeu est simple : lors des phases de prospection, des emails sont envoyés aux chefs d’entreprises, 
                        et les informations récupérées nous permettent de cibler spécifiquement des personnes dans leur secteur d’activité.
                    </p>
                </div>
                <div className={'flex-1 flex justify-center items-center'}>
                    <img src={require('./../../image/rose.png')} alt="Pme-Partner"  className=' h-[15vh]'/>
                </div>
            </div>
            <div>
                <div className={'flex-1 flex flex-col justify-center items-center gap-8'}>
                    <img src={require('./../../image/git2.jpg')} alt="Pme-Partner"  className=' h-[40vh]'/>
                    <img src={require('./../../image/rose2.png')} alt="Pme-Partner"  className=' h-[40vh]'/>
                    <img src={require('./../../image/scraping.webp')} alt="Pme-Partner"  className=' h-[40vh]'/>
                </div>
                <div className={'w-[40%]'}> 
                    <h1 className="text-start"> Compétence Acquises </h1>
                    <p> <strong>Lors de ces trois mois de stage, j’ai appris beaucoup de choses, tant sur le plan technique que non technique, et j’aimerais vous les exposer. </strong> <br /> 
                    <br /> <br />
                        <strong>Premièrement, le déploiement avec GitHub. </strong> GitHub facilite la collaboration et le versionnement du code. Lié à un hébergeur, il simplifie grandement la mise en place des mises à jour du logiciel en cours de développement. Chez PME-Partner, nous avons deux branches, chacune liée à un serveur d'hébergement différent : <br />
                        <ul>
                            <li> - La branche “développement” nous permet d’avoir une version où tous les développeurs peuvent effectuer leurs tests, corriger des bugs ou encore créer de nouvelles fonctionnalités.</li>
                            <li> - La branche “production” contient notre version stable de l'application, destinée à être utilisée par les utilisateurs finaux.</li>
                        </ul>
                        En tant que développeur, j’ai aussi mon environnement local. Une fois qu'une fonctionnalité est développée ou qu'un bug est corrigé, je pousse/merge les modifications sur la branche de développement. Ensuite, je vérifie si ma fonctionnalité ou mon correctif n’a pas causé d'effets de bord directement sur le serveur. <br />
                        En revanche, pour la branche de production, des protections sont mises en place pour éviter de mettre à jour le logiciel directement depuis notre environnement local. Ainsi, la mise à jour de la version stable se fait directement depuis GitHub, où une demande doit être faite pour fusionner la branche de développement avec la 
                        branche de production. Avant cela, une étape de validation est effectuée sur le serveur de développement, où une série de tests est exécutée pour vérifier la stabilité des principales fonctionnalités du logiciel.
                        <br /> <strong>PS : La plupart de nos commits commencent par un Gitmoji, ce qui aide pas mal les geeks à rendre les dépôts plus lisibles 🙂.</strong> <br /> <br />
                        <strong> VueJS est un framework front-end </strong> qui permet de créer des interfaces ou des applications web réactives. J'avais déjà acquis les bases, mais ce stage m’a permis d'approfondir mon expérience. La petite subtilité réside dans le langage utilisé, qui n’était pas du JavaScript, 
                        mais du TypeScript. Pour faire simple, TypeScript est une surcouche de JavaScript qui permet de typer les variables de manière statique.
                        La différence peut sembler minime, mais en réalité, cela permet de mieux comprendre le code lors de sa relecture et, SURTOUT, d'éviter des 
                        erreurs du type “variable declared is undefined” (On en rigole, mais en JS, c’est un enfer 😔). J’utilise aussi un nouveau framework CSS nommé 
                        Tailwind. Pour être honnête, j’avais déjà utilisé Bootstrap, qui ne m'avait absolument pas convaincu quant à son utilité pour remplacer le CSS 
                        vanilla. Mais cette fois, j’ai clairement apprécié l'utilisation de Tailwind : il est super pratique et la prise en main est rapide.
                        <br /> <br />
                        <strong>Parlons maintenant de Laravel</strong>, ce framework PHP est la technologie utilisée pour notre backend. Il nous permet de créer une API, servant de ressource pour nos applications. L’idée est que, lorsque le front-end a besoin d’une information spécifique, il envoie une requête HTTP à l’API, qui va alors traiter la demande et effectuer la logique nécessaire. Une fois cette étape terminée, l’API répond (principe du HTTP) et envoie les données au format JSON, prêtes à être exploitées.
                        Ayant déjà travaillé avec Symfony, qui est une alternative à Laravel, j’ai trouvé Laravel un peu plus complexe à utiliser, 
                        mais bien mieux documenté. De plus, la manière dont Laravel est organisé est plus agréable. Eloquent, 
                        l’ORM qui communique avec notre base de données MySQL, est pratique et, lui aussi, ne nécessite pas un Bac+5 
                        pour être compris. <br /> <br />

                        Je vous ai expliqué précédemment à quoi sert <strong>Le scraping</strong>, mais entrons maintenant dans les détails techniques. En général, le scraping se fait en Python. Pourquoi ? Car ce langage est particulièrement adapté à la création de petits outils, notamment dans le domaine de la data.
                        Pour ce projet, j'utilise les librairies BeautifulSoup et Selenium. Bien qu’elles aient un but commun, elles n’ont pas la même utilité, et j’y reviendrai plus en détail par la suite.
                        Le scraping consiste à se connecter à une page via une requête et à lire son code HTML. Les bibliothèques mentionnées ci-dessus permettent 
                        de parcourir l’arborescence et de récupérer les éléments du DOM de manière précise et efficace. Mais pourquoi utiliser deux outils ? 
                        En résumé, le contenu HTML de certaines pages web est statique, c’est-à-dire qu’aucun rafraîchissement côté serveur n’est effectué, et 
                        aucune interaction humaine n’est requise pour récupérer une partie du DOM. Ce n’est pas le cas des applications monopage (SPA), qui comportent 
                        des composants réactifs parfois cachés dans le code HTML. Dans ce cas, je remplace BeautifulSoup par Selenium, 
                        qui permet d'émuler un navigateur et ses interactions.
                    </p>
                </div>
            </div>
            <div>
                <div className={'w-[40%]'}> 
                    <h1 className="text-start"> Conclusion </h1>
                    <p>                Ces trois mois de stage chez PME-Partner ont été une expérience riche tant sur le plan technique que personnel. J’ai pu m’immerger dans le quotidien d’un développeur full stack, en m’attaquant à des missions concrètes et variées, allant de la résolution de bugs à l’ajout de nouvelles fonctionnalités, en passant par la gestion de l’hébergement et la mise en place du scraping de données. Cette immersion m'a permis de prendre la mesure des exigences du métier, tout en renforçant mes compétences sur des technologies comme Vue.js, Laravel ou encore Tailwind, que j'avais seulement abordées en surface avant mon arrivée. <br />

J’ai aussi découvert l’importance de la collaboration au sein d’une équipe, même lorsqu’elle est réduite et en partie absente à mon arrivée. Florian et Lucas m’ont rapidement intégré et guidé à travers les différentes étapes de mes missions, me permettant ainsi de progresser rapidement. Travailler en autonomie tout en bénéficiant de leur support a été très formateur et m'a aidé à mieux comprendre les enjeux de la gestion d’un projet de bout en bout. <br /> <br />

En résumé, ce stage a solidifié mes bases en développement web et m’a surtout montré l’importance de rester adaptable et curieux, des qualités essentielles pour évoluer dans ce domaine en perpétuelle évolution. Je ressors de cette expérience avec une plus grande confiance en mes capacités et une vision plus claire de la direction que je souhaite prendre pour la suite de mon parcours, notamment dans le cadre de l’alternance à venir chez PME-Partner.</p>
                </div>
                <div className={'flex-1'}>
                </div>
            </div>
        </div>
    )
}