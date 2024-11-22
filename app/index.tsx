const tags = ['technology', 'politics', 'health', 'environment', 'education', 'entertainment', 'travel', 'food', 'sports'];


const bookmarks = [
  {
    id: 1,
    title: "L’informatique quantique : le prochain grand saut",
    text: "Plongez dans le monde de l’informatique quantique et explorez son potentiel révolutionnaire pour de nombreux secteurs.",
    content: "L’informatique quantique utilise les principes de la mécanique quantique pour effectuer des calculs complexes à des vitesses inégalées. Contrairement aux ordinateurs classiques qui s’appuient sur des bits (0 ou 1), les ordinateurs quantiques utilisent des qubits, qui peuvent exister dans un état de superposition, leur permettant de traiter d’énormes quantités d’informations simultanément. Cette technologie révolutionnaire offre d’immenses possibilités pour des domaines comme la médecine, la science des matériaux et l’intelligence artificielle.\n\nImaginez concevoir des médicaments révolutionnaires avec une précision inégalée, développer de nouveaux matériaux aux propriétés révolutionnaires ou créer une intelligence artificielle capable de résoudre des problèmes actuellement hors de notre portée. Ce ne sont là que quelques-unes des transformations possibles offertes par l’informatique quantique.\n\nCependant, le développement d’ordinateurs quantiques est encore en phase initiale. Surmonter les défis techniques et construire des systèmes quantiques à grande échelle nécessite des recherches et des investissements considérables. Néanmoins, les avantages potentiels sont si importants que les gouvernements, les institutions de recherche et les entreprises privées du monde entier investissent massivement dans ce domaine passionnant. \n\nSuivez-nous dans notre exploration approfondie du fascinant monde de l’informatique quantique, en examinant ses applications, ses défis et les implications futures de cette technologie transformative.",
    tags: ["technologie", "avenir", "quantique"],
    date: "2023-10-01T10:00:00Z",
  },
  {
    id: 2,
    title: "La lutte mondiale pour la justice climatique",
    text: "Examinez le mouvement croissant qui exige des mesures concrètes contre le changement climatique et explorez les défis et les solutions pour un avenir durable.",
    content: "Du militantisme local aux accords internationaux, la lutte pour la justice climatique s’intensifie à travers le monde. L’urgence de la crise climatique est indéniable, avec la montée du niveau de la mer, les événements météorologiques extrêmes et les menaces pour la biodiversité devenant de plus en plus prévalentes.\n\nCette lutte ne s’agit pas seulement de protection de l’environnement ; c’est une question de justice sociale. Le changement climatique affecte disproportionnellement les communautés marginalisées, aggravant les inégalités existantes.\n\nLe mouvement mondial pour la justice climatique exige que ceux qui ont le plus contribué au problème assument la responsabilité de le résoudre. Il appelle à une transition juste vers un avenir durable, garantissant à tous l’accès à une énergie propre, à des environnements sains et sûrs et à une planète habitable.",
    tags: ["environnement", "changementclimatique", "activisme"],
    date: "2023-10-02T12:30:00Z",
  },
  {
    id: 3,
    title: "Bien-être mental : Privilégier son bien-être",
    text: "Découvrez des stratégies pratiques et des ressources pour améliorer votre santé mentale et cultiver un sentiment de bien-être.",
    content: "La santé mentale fait partie intégrante du bien-être général. Elle englobe notre bien-être émotionnel, psychologique et social, influençant la façon dont nous pensons, ressentons et agissons.\n\nDans notre monde effréné, il est plus important que jamais de donner la priorité à notre santé mentale. Le stress, l’anxiété et la dépression sont de plus en plus courants, impactant les individus, les familles et les communautés.\n\nCet article explore l’importance de donner la priorité à la santé mentale, en fournissant des stratégies fondées sur des preuves pour gérer le stress, l’anxiété et la dépression, et en mettant en évidence les ressources disponibles pour le soutien et l’orientation.",
    tags: ["santé", "bienêtremental", "bien-être"],
    date: "2023-10-03T14:45:00Z",
  },
  {
    id: 4,
    title: "Aventures du week-end : Explorer les joyaux locaux",
    text: "Dévoilez les trésors cachés et les expériences passionnantes de votre propre ville ou village.",
    content: "Échappez à l’ordinaire et explorez les offres uniques de votre région. Vous n’avez pas besoin de voyager loin pour vivre une expérience inoubliable. Votre ville ou village cache probablement des joyaux cachés qui attendent d’être découverts.\n\nCet article vous propose des idées d’aventures pour le week-end, des cafés cachés et des galeries d’art aux randonnées pittoresques et aux sites historiques fascinants.\n\nSoutenez les entreprises locales, immergez-vous dans la culture de votre communauté et créez des souvenirs durables. Vous pourriez être surpris de ce que vous trouverez à votre porte.",
    tags: ["divertissement", "week-end", "voyage"],
    date: "2023-10-04T16:00:00Z",
  },
  {
    id: 5,
    title: "Le pouvoir de l’éducation : façonner les futures générations",
    text: "Explorez l’impact transformateur de l’éducation sur les individus, les communautés et la société dans son ensemble.",
    content: "L’éducation est un droit fondamental et un moteur puissant de progrès social. Elle permet d’empower les individus, de favoriser l’innovation et de promouvoir le développement durable.\n\nDe l’éducation de la petite enfance à l’enseignement supérieur, l’éducation joue un rôle crucial dans la formation des individus et la construction de l’avenir de la société.\n\nCet article examine les multiples avantages de l’éducation, mettant en évidence son impact sur la croissance économique, la mobilité sociale, les résultats en matière de santé et l’engagement civique. Il explore également les défis liés à garantir un accès équitable à une éducation de qualité pour tous, plaidant pour des politiques et des pratiques qui promeuvent l’équité et l’excellence éducative.",
    tags: ["éducation", "impact", "société"],
    date: "2023-10-05T18:15:00Z",
  },
  {
    id: 6,
    title: "Briser les barrières : les femmes en STEM",
    text: "Célébrez les réalisations des femmes en science, technologie, ingénierie et mathématiques (STEM) et explorez les défis auxquels elles sont confrontées.",
    content: "Les femmes ont fait des contributions significatives aux domaines STEM, repoussant les frontières de la connaissance et de l’innovation.\n\nMalgré ces réalisations, les femmes continuent de faire face à des obstacles pour une pleine participation dans les domaines STEM. Les stéréotypes, les biais et le manque de représentation peuvent décourager les filles de poursuivre des carrières en STEM et créer des environnements de travail hostiles pour les femmes dans ces secteurs.\n\nCet article met en lumière les réalisations inspirantes des femmes en STEM, examine les défis auxquels elles sont confrontées et plaide pour une plus grande équité et une inclusion accrue dans ces domaines essentiels.",
    tags: ["technologie", "femmes", "STEM"],
    date: "2023-10-06T20:30:00Z",
  },
  {
    id: 7,
    title: "L’essor du streaming : révolutionner le paysage du divertissement",
    text: "Analysez l’impact des services de streaming sur l’industrie du divertissement et explorez les tendances émergentes dans la consommation de contenu.",
    content: "Les plateformes de streaming ont révolutionné la façon dont nous consommons du divertissement, offrant une vaste bibliothèque de contenu à portée de main.\n\nDes films et des émissions de télévision aux musiques et aux podcasts, les services de streaming ont bouleversé les modèles médiatiques traditionnels, donnant aux téléspectateurs un choix et un contrôle inédits sur leur expérience de divertissement.\n\nCet article explore l’essor du streaming, son impact sur les médias traditionnels et l’avenir du divertissement dans un monde numérique. Il examine les modèles économiques des géants du streaming, l’impact sur la création de contenu et les tendances évolutives du comportement des consommateurs.",
    tags: ["divertissement", "streaming", "technologie"],
    date: "2023-10-07T11:00:00Z",
  },
  {
    id: 8,
    title: "Voyager de manière durable : explorer de manière responsable",
    text: "Découvrez des conseils et des pratiques pour minimiser votre impact environnemental tout en explorant le monde.",
    content: "Le tourisme durable consiste à minimiser notre empreinte écologique tout en maximisant nos expériences.\n\nIl s’agit de voyager de manière à respecter l’environnement, les cultures locales et les communautés.\n\nCet article fournit des conseils pratiques pour voyager de manière responsable, des choix d’hébergements écologiques et de transports durables au soutien des entreprises locales et à la réduction des déchets. Il explore également le concept de tourisme responsable, encourageant les voyageurs à interagir avec les communautés locales de manière significative et à contribuer au bien-être des lieux qu’ils visitent.",
    tags: ["voyage", "durabilité", "environnement"],
    date: "2023-10-08T13:30:00Z",
  },
  {
    id: 9,
    title: "Fusion culinaire : explorer les saveurs mondiales",
    text: "Embarquez dans un voyage culinaire et découvrez le monde fascinant de la cuisine fusion.",
    content: "La cuisine fusion combine les traditions culinaires de différentes cultures, créant des plats innovants et savoureux.\n\nC’est une célébration de la diversité, de la créativité et du plaisir de découvrir de nouvelles saveurs.\n\nCet article explore l’histoire et l’évolution de la cuisine fusion, mettant en lumière les chefs et les restaurants renommés qui ont repoussé les limites de l’innovation culinaire. Il vous inspirera également à explorer vos propres aventures culinaires, à expérimenter avec différentes combinaisons de saveurs et à créer vos propres plats uniques.",
    tags: ["nourriture", "fusion", "culture"],
    date: "2023-10-09T15:45:00Z",
  },
  {
    id: 10,
    title: "La Coupe du monde : une célébration du fair-play",
    text: "Revivez l’excitation de la Coupe du monde et explorez le pouvoir fédérateur du sport.",
    content: "La Coupe du Monde de la FIFA est un événement mondial qui unit les gens à travers leur passion commune pour le football.\n\nC’est un tournoi qui transcende les frontières, les langues et les cultures, rassemblant les fans dans une célébration de l’athlétisme, de la passion et du fair-play.\n\nCet article célèbre l’histoire, les traditions et l’impact culturel de la Coupe du Monde, mettant en lumière l’esprit sportif et le pouvoir fédérateur du sport.",
    tags: ["sports", "football", "coupe du monde"],
    date: "2023-10-10T18:00:00Z",
  },
];



import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  StatusBar,
  Platform,
  Animated,
  Keyboard,
  Dimensions
} from 'react-native';
import { Camera, X, Filter, Calendar, ChevronDown } from 'lucide-react';

// Atomic Components
const IconButton = ({ icon: Icon, onPress, color = "#000", size = 24 }:any) => (
  <TouchableOpacity 
    style={{
      padding: 8,
      borderRadius: 20
    }}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Icon size={size} color={color} />
  </TouchableOpacity>
);

const Badge = ({ children, variant = "default", onPress }:any) => {
  const badgeStyles = {
    default: {
      backgroundColor: '#e3f2fd',
      color: '#2196f3'
    },
    active: {
      backgroundColor: '#2196f3',
      color: '#fff'
    },
    muted: {
      backgroundColor: '#f5f5f5',
      color: '#666'
    }
  };

  const style: any = (badgeStyles as any)[variant];

  return (
    <TouchableOpacity 
      style={{
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
        backgroundColor: style.backgroundColor
      }}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <Text style={{
        fontSize: 12,
        fontWeight: '500',
        color: style.color
      }}>{children}</Text>
    </TouchableOpacity>
  );
};

// Molecule Components
const Header = ({ onFilterPress }: any) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1'
  }}>
    <View>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
      }}>Screenshot Bookmarks</Text>
      <Text style={{
        fontSize: 14,
        color: '#666'
      }}>Your captured moments</Text>
    </View>
    <IconButton icon={Filter} onPress={onFilterPress} />
  </View>
);

const BookmarkCard = ({ title, text, tags, date, onPress }: any) => (
  <TouchableOpacity 
    style={{
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
      })
    }}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={{
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
      color: '#000'
    }}>{title}</Text>
    <Text style={{
      fontSize: 14,
      color: '#666',
      marginBottom: 12
    }} numberOfLines={2}>{text}</Text>
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 8
    }}>
      {tags.map((tag: any, index: any) => (
        <Badge key={index}>#{tag}</Badge>
      ))}
    </View>
    <Text style={{
      fontSize: 12,
      color: '#666'
    }}>
      {new Date(date).toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })}
    </Text>
  </TouchableOpacity>
);

const FilterSheet = ({ visible, onClose, selectedTags, onTagToggle, tags }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTags = useMemo(() => 
    tags.filter((tag: any) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    [tags, searchQuery]
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 16,
          width: '90%',
          maxWidth: 400
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: '600'
            }}>Filters</Text>
            <IconButton icon={X} onPress={onClose} />
          </View>
          
          <View style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 8,
            padding: 8,
            marginBottom: 16
          }}>
            <TextInput
              style={{
                fontSize: 16,
                color: '#000'
              }}
              placeholder="Search tags..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#666"
            />
          </View>

          <Text style={{
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 8,
            color: '#666'
          }}>Selected Tags</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 16 }}
          >
            {selectedTags.length > 0 ? (
              selectedTags.map((tag: any, index: any) => (
                <Badge 
                  key={index} 
                  variant="active" 
                  onPress={() => onTagToggle(tag)}
                >
                  #{tag}
                </Badge>
              ))
            ) : (
              <Text style={{
                color: '#666',
                fontStyle: 'italic'
              }}>No tags selected</Text>
            )}
          </ScrollView>

          <Text style={{
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 8,
            color: '#666'
          }}>Available Tags</Text>
          <FlatList
            data={filteredTags}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Badge
                variant={selectedTags.includes(item) ? "active" : "default"}
                onPress={() => onTagToggle(item)}
              >
                #{item}
              </Badge>
            )}
            numColumns={3}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const DetailModal = ({ bookmark, visible, onClose }: any) => {
  if (!bookmark) return null;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 16,
          width: '90%',
          maxWidth: 400,
          maxHeight: "90vh"
        } as any}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: '600',
              flex: 1
            }}>{bookmark.title}</Text>
            <IconButton icon={X} onPress={onClose} />
          </View>
          
          <ScrollView 
            style={{ maxHeight: '60vh' } as any}
          >
            <Text style={{
              fontSize: 16,
              color: '#666',
              marginBottom: 16
            }}>{bookmark.content}</Text>
          </ScrollView>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 16 }}
          >
            {bookmark.tags.map((tag: any, index: any) => (
              <Badge key={index}>#{tag}</Badge>
            ))}
          </ScrollView>
          
          <Text style={{
            fontSize: 12,
            color: '#666'
          }}>
            {new Date(bookmark.date).toLocaleString()}
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

// Main Component
const ScreenshotBookmarks = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  
  const allTags = useMemo(() => 
    [...new Set(bookmarks.flatMap(bookmark => bookmark.tags))],
    [bookmarks]
  );

  const filteredBookmarks = useMemo(() => 
    bookmarks.filter(bookmark => 
      selectedTags.length === 0 || 
      selectedTags.some(tag => bookmark.tags.includes(tag))
    ),
    [bookmarks, selectedTags]
  );

  const handleTagToggle = useCallback((tag: any) => {
    setSelectedTags((prev: any) => 
      prev.includes(tag) 
        ? prev.filter((t: any) => t !== tag)
        : [...prev, tag]
    );
  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f5f5f5'
    }} >
      <StatusBar barStyle="dark-content" />
      <Header onFilterPress={() => setIsFilterVisible(true)} />
      
      <FlatList
        data={filteredBookmarks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }: any) => (
          <BookmarkCard
            {...item}
            onPress={() => setSelectedBookmark(item)}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />

      <FilterSheet
        visible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        tags={allTags}
      />

      <DetailModal
        visible={!!selectedBookmark}
        bookmark={selectedBookmark}
        onClose={() => setSelectedBookmark(null)}
      />
    </View>
  );
};

export default ScreenshotBookmarks;