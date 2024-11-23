const tags = [
  "technology",
  "politics",
  "health",
  "environment",
  "education",
  "entertainment",
  "travel",
  "food",
  "sports",
];

const BASE_URL = "http://localhost:5000";

interface News {
  id?: number;
  type: "news";
  title: string;
  text: string;
  content: string;
  tags: string[];
  date: string;
}

const news: News[] = [
  {
    id: 1,
    type: "news",
    title: "IBM Achieves 1000-Qubit Breakthrough in Quantum Computing",
    text: "A significant milestone in quantum computing as IBM's latest quantum processor demonstrates unprecedented coherence times and error correction capabilities.",
    content:
      "In a groundbreaking development at IBM's Thomas J. Watson Research Center, scientists have successfully demonstrated a 1000-qubit quantum processor with remarkable stability and error correction capabilities. This achievement marks a significant step toward practical quantum computing applications.\n\nDr. Sarah Chen, IBM's Head of Quantum Architecture, explains: 'What makes this breakthrough particularly significant is not just the number of qubits, but the dramatic improvement in coherence times and error rates. We're seeing coherence times of up to 300 microseconds, which is revolutionary for a processor of this scale.'\n\nThe implications of this advancement extend far beyond the laboratory. Goldman Sachs and Moderna have already announced partnerships to leverage this technology for financial modeling and drug discovery, respectively. The new processor demonstrates particular promise in molecular simulation, potentially accelerating drug development processes by orders of magnitude.\n\nHowever, challenges remain. Dr. James Martinez from MIT's Quantum Engineering Group notes, 'While this is undoubtedly a significant achievement, we're still years away from widespread practical applications. The next hurdle is scaling up while maintaining these impressive coherence times.'\n\nThe development has already attracted significant attention from both private and public sectors, with the U.S. Department of Energy announcing a $500 million investment in quantum computing research and development programs.",
    tags: ["technology", "quantum-computing", "research", "innovation"],
    date: "2024-10-01T10:00:00Z",
  },
  {
    id: 2,
    type: "news",
    title:
      "UN Climate Report Reveals Critical Tipping Points Approaching Faster Than Predicted",
    text: "Latest IPCC report indicates several climate tipping points could be reached within the next decade, prompting urgent calls for accelerated action.",
    content:
      "The latest Intergovernmental Panel on Climate Change (IPCC) special report has revealed that critical climate tipping points are approaching more rapidly than previously estimated. The comprehensive study, involving over 200 scientists from 65 countries, highlights several immediate risks that could trigger cascading environmental effects.\n\nAccording to Dr. Elena Rodriguez, lead author of the report, 'We're observing unprecedented rates of change in several key systems. The Thwaites Glacier in Antarctica, often called the 'doomsday glacier,' is showing alarming signs of accelerated melting. If current trends continue, we could see significant sea level rise within our lifetimes.'\n\nThe report identifies three critical tipping points approaching faster than previously projected:\n- Arctic sea ice collapse could occur by 2035\n- Widespread permafrost thaw releasing massive amounts of methane\n- Accelerated deterioration of the Amazon rainforest's ability to act as a carbon sink\n\nIn response, the European Union has announced plans to accelerate its emissions reduction targets, aiming for a 65% reduction by 2030 compared to 1990 levels. China has also pledged to advance its peak emissions timeline to 2025.\n\nThe World Bank estimates that climate adaptation costs could reach $300 billion annually by 2030, particularly affecting vulnerable coastal regions and developing nations.",
    tags: ["climate-change", "environment", "global-policy", "research"],
    date: "2024-10-02T12:30:00Z",
  },
  {
    id: 3,
    type: "news",
    title:
      "Stanford Study Reveals Novel Links Between Gut Microbiome and Mental Health",
    text: "Groundbreaking research establishes direct pathways between specific gut bacteria and mood regulation, opening new avenues for mental health treatment.",
    content:
      "A landmark study from Stanford University's Department of Neurobiology has uncovered compelling evidence of direct communication pathways between gut bacteria and brain function, potentially revolutionizing our approach to mental health treatment.\n\nThe research, published in Nature Neuroscience, identified specific bacterial strains that produce compounds directly influencing serotonin and dopamine production. Lead researcher Dr. Michael Chang explains, 'We've not only identified these bacterial species but also mapped out the exact metabolic pathways through which they influence neurotransmitter production.'\n\nThe study tracked 1,200 participants over three years, combining microbiome analysis with advanced neuroimaging and psychological assessments. Results showed that certain bacterial compositions were associated with a 40% reduction in depression symptoms and a 60% improvement in anxiety markers.\n\nPharmaceutical companies are already taking notice. Pfizer has announced a new research division dedicated to developing microbiome-based mental health treatments, with clinical trials expected to begin in early 2024.\n\nDr. Rachel Foster from Harvard Medical School notes, 'This research could fundamentally change how we treat mental health conditions. We're looking at the potential for highly personalized treatments based on individual microbiome profiles.'",
    tags: ["health", "mental-health", "research", "medicine"],
    date: "2024-10-03T14:45:00Z",
  },
  {
    id: 4,
    type: "news",
    title:
      "The Rise of Dark Tourism: Historical Sites See Record Visitor Numbers",
    text: "A growing trend in tourism sees historically significant but somber sites experiencing unprecedented visitor numbers, raising questions about preservation and respect.",
    content:
      "Dark tourism – the phenomenon of visiting sites associated with death, tragedy, or the macabre – has seen a dramatic surge in popularity, with major sites reporting record visitor numbers in 2024. This trend raises important questions about balancing historical preservation with tourism demands.\n\nThe Auschwitz-Birkenau Memorial reported a 300% increase in visitors compared to previous years, while Chernobyl's Exclusion Zone has implemented a new booking system to manage overwhelming demand. Dr. Jessica Thompson, Professor of Tourism Studies at UCL, attributes this surge to several factors: 'We're seeing a convergence of increased historical awareness, social media influence, and a desire for more meaningful travel experiences.'\n\nSite managers are implementing innovative solutions to manage the influx while maintaining the dignity of these locations. The Hiroshima Peace Memorial has introduced advanced virtual reality experiences to reduce physical impact on the site while enhancing educational value.\n\nHowever, concerns about 'disaster tourism' persist. UNESCO has announced new guidelines for managing sensitive historical sites, emphasizing the balance between accessibility and preservation. The guidelines include recommendations for visitor capacity limits and mandatory educational components.",
    tags: ["travel", "history", "tourism", "culture"],
    date: "2024-10-04T16:00:00Z",
  },
  {
    id: 5,
    type: "news",
    title:
      "AI-Powered Personalized Learning Shows Dramatic Results in Global Study",
    text: "The largest study of AI in education reveals significant improvements in student performance across diverse learning environments and socioeconomic backgrounds.",
    content:
      "A comprehensive global study involving 50,000 students across 27 countries has demonstrated unprecedented success in personalized learning through AI-powered educational platforms. The research, conducted by the Global Education Consortium, shows average improvement in learning outcomes of 40% compared to traditional methods.\n\nThe study implemented adaptive learning algorithms that continuously adjusted to individual student progress, creating truly personalized learning pathways. 'What's particularly exciting is that we saw the most dramatic improvements among traditionally underperforming students,' notes Dr. Robert Chen, the study's principal investigator at Oxford University.\n\nKey findings include:\n- 47% improvement in mathematics performance\n- 38% increase in reading comprehension\n- 65% reduction in achievement gaps between different socioeconomic groups\n\nThe Bill & Melinda Gates Foundation has announced a $2 billion initiative to implement these systems in underserved communities worldwide. However, challenges remain regarding digital infrastructure and teacher training.\n\nEducation ministers from 15 countries have already committed to integrating AI-powered learning tools into their national curricula by 2025.",
    tags: ["education", "artificial-intelligence", "technology", "research"],
    date: "2024-10-05T18:15:00Z",
  },
  {
    id: 6,
    type: "news",
    title: "SpaceX Announces First All-Female Mars Mission Crew",
    text: "Historic announcement reveals the selection of an all-female crew for the first crewed Mars landing mission, scheduled for 2029.",
    content:
      "SpaceX, in collaboration with NASA, has announced the selection of the first crew for their planned Mars landing mission, making history with an all-female team of astronauts and scientists. The crew selection emphasizes both technical expertise and psychological compatibility for the three-year mission.\n\nThe four-person crew includes:\n- Mission Commander Dr. Sarah Martinez, veteran of three ISS missions\n- Flight Engineer Dr. Yuki Tanaka, spacecraft systems specialist\n- Dr. Aisha Patel, astrobiologist and geological expert\n- Dr. Elena Popov, medical officer and radiation specialist\n\nThe selection process involved over 2,000 candidates and two years of intensive testing. 'This team represents the absolute peak of human capability and cooperation,' stated NASA Administrator Bill Nelson. 'Their selection was based purely on merit, and they happened to be the most qualified candidates.'\n\nThe crew will undergo three years of specialized training, including extended isolation periods in Mars-analog environments. The mission aims to establish the first permanent human presence on Mars, with a planned landing in Jezero Crater.",
    tags: ["space", "women-in-stem", "science", "technology"],
    date: "2024-10-06T20:30:00Z",
  },
  {
    id: 7,
    type: "news",
    title: "Netflix's AI-Generated Content Sparks Industry Debate",
    text: "The streaming giant's experimental AI-assisted series raises questions about creativity, authorship, and the future of entertainment.",
    content:
      "Netflix has unveiled its first AI-collaborative series, where artificial intelligence played a significant role in script development, visual design, and music composition. The series, 'Quantum Dreams,' has received critical acclaim while igniting fierce debate about AI's role in creative industries.\n\nThe show utilized advanced language models for initial script generation, with human writers refining and developing the AI's suggestions. Visual effects and music were similarly created through a hybrid AI-human collaboration process.\n\nIndustry response has been divided. The Writers Guild of America has expressed concerns about potential job displacement, while others see opportunity. 'This isn't about replacing human creativity,' explains Netflix's Chief Innovation Officer Dr. Lisa Park. 'It's about augmenting it. The AI provides novel connections and ideas that our creative teams then develop.'\n\nThe series has achieved record viewing figures and unprecedented engagement metrics. However, questions about creative rights and compensation in AI-assisted content remain unresolved. The Screen Actors Guild has called for new framework agreements addressing AI collaboration in entertainment production.",
    tags: [
      "entertainment",
      "artificial-intelligence",
      "streaming",
      "technology",
    ],
    date: "2024-10-07T11:00:00Z",
  },
  {
    id: 8,
    type: "news",
    title: "Revolutionary Carbon Capture Technology Achieves 90% Efficiency",
    text: "Breakthrough in direct air capture technology promises cost-effective climate change mitigation, attracting major investment from tech giants.",
    content:
      "A startup backed by MIT's Climate Initiative has demonstrated a revolutionary carbon capture system achieving 90% efficiency at one-third the cost of existing technologies. The system, developed by Carbon Revolution Inc., uses novel metal-organic frameworks (MOFs) to capture CO2 directly from the atmosphere.\n\nThe technology has attracted $2 billion in investment from a consortium including Microsoft, Google, and Shell. 'This isn't just incrementally better – it's a game-changer,' states Dr. James Chen, lead developer. 'We're looking at carbon capture costs below $50 per ton, making large-scale deployment economically viable for the first time.'\n\nThe system has been successfully tested at pilot facilities in Texas and Norway, with plans for commercial-scale deployment in 2024. The technology can be retrofitted to existing industrial facilities or deployed as standalone carbon capture plants.\n\nThe International Energy Agency has revised its climate mitigation projections based on this development, suggesting that widespread adoption could reduce atmospheric CO2 by up to 2 gigatons annually by 2030.",
    tags: ["environment", "technology", "climate-action", "innovation"],
    date: "2024-10-08T13:30:00Z",
  },
  {
    id: 9,
    type: "news",
    title: "Lab-Grown Meat Receives FDA Approval for Wide-Scale Distribution",
    text: "Landmark decision allows cellular agriculture products to enter mainstream market, potentially revolutionizing food industry.",
    content:
      "The FDA has granted approval for wide-scale distribution of lab-grown meat products from three leading companies, marking a historic shift in food production and regulation. This decision follows extensive safety testing and nutritional analysis of cellular agriculture products.\n\nThe approved products, which include chicken, beef, and fish alternatives, have demonstrated nutritional profiles identical or superior to traditional meat. 'This isn't an alternative to meat – it is meat, just produced more efficiently,' explains Dr. Sarah Anderson, CEO of CellAg Technologies.\n\nEnvironmental impact assessments indicate that lab-grown meat production reduces water usage by 96% and land use by 99% compared to traditional livestock farming. Energy requirements remain a concern, though technological improvements have reduced costs by 70% since 2020.\n\nMajor retailers including Whole Foods and Kroger have announced plans to stock these products by early 2024. The USDA projects that cellular agriculture could represent 30% of meat consumption by 2030.",
    tags: ["food-technology", "sustainability", "innovation", "science"],
    date: "2024-10-09T15:45:00Z",
  },
  {
    id: 10,
    type: "news",
    title:
      "Digital Athletes Compete Alongside Physical Players in 2024 Olympics",
    text: "The International Olympic Committee introduces groundbreaking 'hybrid athletics' category, combining physical and digital sports performance.",
    content:
      "The International Olympic Committee (IOC) has announced the inclusion of 'hybrid athletics' in the 2024 Paris Olympics, where digital athletes will compete alongside physical athletes in select events. This groundbreaking decision follows years of development in motion capture and virtual reality technologies.\n\nThe new category will feature events where physical performances are digitally captured and can be competed against in real-time or asynchronously. 'This isn't about replacing traditional athletics,' explains IOC President Thomas Bach. 'It's about expanding the definition of human athletic achievement.'\n\nQualification standards combine traditional metrics with digital performance parameters. Athletes can compete either physically or digitally, with sophisticated systems ensuring competitive fairness. The technology has been developed in partnership with leading sports technology firms and has undergone rigorous testing at international events.\n\nThe decision has received support from major sports federations, though some traditional athletes express concerns about maintaining the integrity of Olympic competition. The IOC has established a dedicated committee for hybrid athletics governance.",
    tags: ["sports", "technology", "olympics", "innovation"],
    date: "2024-10-10T18:00:00Z",
  },
];

const productivities = [
  {
    id: 11,
    type: "productivity",
    title: "Q4 Marketing Strategy Review",
    text: "Review and analyze Q4 marketing campaign results, prepare presentation for stakeholders",
    priority: "high",
    status: "in_progress",
    assignee: "Sarah K.",
    tags: ["marketing", "quarterly-review", "presentation"],
    date: "2024-12-15T16:00:00Z",
  },
  {
    id: 12,
    type: "productivity",
    title: "Update Customer Support Documentation",
    text: "Revise knowledge base articles and update screenshots for new UI changes",
    priority: "medium",
    status: "todo",
    assignee: "Mike R.",
    tags: ["documentation", "support", "maintenance"],
    date: "2024-12-10T14:00:00Z",
  },
  {
    id: 13,
    type: "productivity",
    title: "Employee Onboarding Process Optimization",
    text: "Streamline the onboarding checklist and automate manual processes",
    priority: "high",
    status: "todo",
    assignee: "Alex M.",
    tags: ["HR", "automation", "process"],
    date: "2024-12-20T09:00:00Z",
  },
  {
    id: 14,
    type: "productivity",
    title: "Mobile App Security Audit",
    text: "Conduct comprehensive security review of mobile application",
    priority: "high",
    status: "in_progress",
    assignee: "David L.",
    tags: ["security", "mobile", "audit"],
    date: "2024-12-08T11:00:00Z",
  },
  {
    id: 15,
    type: "productivity",
    title: "Client Feedback Survey Analysis",
    text: "Analyze Q3 client satisfaction survey results and prepare improvement recommendations",
    priority: "medium",
    status: "completed",
    assignee: "Emma S.",
    tags: ["analysis", "client-feedback", "improvement"],
    date: "2024-12-05T15:30:00Z",
  },
];

const userPreference =
  "Technology News. The user prefers news related to advancements in artificial intelligence, blockchain technology, and consumer electronics. They are interested in industry analysis, expert opinions, and case studies showcasing real-world applications. Reliable sources include Wired, TechCrunch, and MIT Technology Review, with an emphasis on emerging trends and ethical implications.";

getRecommendations(
  userPreference,
  news.map(({ title }) => title)
);

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

import React, { useState, useCallback, useMemo, useEffect } from "react";
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
  Dimensions,
} from "react-native";

// Atomic Components
const IconButton = ({ emoji, onPress, size = 24 }: any) => (
  <TouchableOpacity
    style={{
      padding: 8,
      borderRadius: 20,
    }}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={{ fontSize: size }}>{emoji}</Text>
  </TouchableOpacity>
);

const Badge = ({ children, variant = "default", onPress }: any) => {
  const badgeStyles = {
    default: {
      backgroundColor: "#e3f2fd",
      color: "#2196f3",
    },
    active: {
      backgroundColor: "#2196f3",
      color: "#fff",
    },
    muted: {
      backgroundColor: "#f5f5f5",
      color: "#666",
    },
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
        backgroundColor: style.backgroundColor,
      }}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: style.color,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// Molecule Components
const Header = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#e1e1e1",
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#000",
        }}
      >
        Magic App
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#666",
        }}
      >
        The app you always needed
      </Text>
    </View>
  </View>
);

interface NewsCardProps {
  title: string;
  text: string;
  tags: string[];
  date: string;
  onPress?: () => void;
}

const NewsCard = ({ title, text, tags, date, onPress }: NewsCardProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          android: {
            elevation: 3,
          },
        }),
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Type indicator bar */}
      <View
        style={{
          backgroundColor: "#2196f3",
          paddingHorizontal: 16,
          paddingVertical: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>📰</Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 12,
            fontWeight: "500",
            marginLeft: 8,
          }}
        >
          NEWS
        </Text>
      </View>

      {/* Content container */}
      <View style={{ padding: 16 }}>
        {/* Title row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontWeight: "600",
              color: "#000",
              marginRight: 8,
            }}
          >
            {title}
          </Text>
        </View>

        {/* Description */}
        <Text
          style={{
            fontSize: 14,
            color: "#666",
            marginBottom: 12,
            lineHeight: 20,
          }}
          numberOfLines={2}
        >
          {text}
        </Text>

        {/* Tags */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          {tags.map((tag: string, index: number) => (
            <Badge key={index}>#{tag}</Badge>
          ))}
        </View>

        {/* Date and time indicator */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#666",
            }}
          >
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Text>
          <View
            style={{
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor: "#666",
              marginHorizontal: 8,
            }}
          />
          <Text
            style={{
              fontSize: 12,
              color: "#666",
            }}
          >
            {new Date(date).toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface TaskCardProps {
  title: string;
  text: string;
  tags: string[];
  date: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "in_progress" | "completed";
  assignee?: string;
  onPress?: () => void;
}

const TaskCard = ({
  title,
  text,
  tags,
  date,
  priority,
  status,
  assignee,
  onPress,
}: TaskCardProps) => {
  const getPriorityColor = () => {
    switch (priority) {
      case "high":
        return "#ef4444";
      case "medium":
        return "#f59e0b";
      case "low":
        return "#10b981";
    }
  };

  const getStatusEmoji = () => {
    switch (status) {
      case "todo":
        return "📋";
      case "in_progress":
        return "⏳";
      case "completed":
        return "✅";
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          android: {
            elevation: 3,
          },
        }),
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Status bar */}
      <View
        style={{
          backgroundColor: getPriorityColor(),
          paddingHorizontal: 16,
          paddingVertical: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>{getStatusEmoji()}</Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              fontWeight: "500",
              marginLeft: 8,
              textTransform: "uppercase",
            }}
          >
            {status.replace("_", " ")}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {assignee && (
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 12,
                marginLeft: 8,
              }}
            >
              <Text
                style={{
                  color: getPriorityColor(),
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                {assignee}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Content container */}
      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              fontWeight: "600",
              color: "#000",
              marginRight: 8,
            }}
          >
            {title}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            color: "#666",
            marginBottom: 12,
            lineHeight: 20,
          }}
          numberOfLines={2}
        >
          {text}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14 }}>📅</Text>
          <Text
            style={{
              fontSize: 12,
              color: "#666",
              marginLeft: 4,
            }}
          >
            Due{" "}
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FilterSheet = ({
  visible,
  onClose,
  selectedTags,
  onTagToggle,
  tags,
}: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTags = useMemo(
    () =>
      tags.filter((tag: any) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ),
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 16,
            width: "90%",
            maxWidth: 400,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Filters
            </Text>
            <IconButton emoji="❌" onPress={onClose} />
          </View>

          <View
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: 8,
              padding: 8,
              marginBottom: 16,
            }}
          >
            <TextInput
              style={{
                fontSize: 16,
                color: "#000",
              }}
              placeholder="Search tags..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#666"
            />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              marginBottom: 8,
              color: "#666",
            }}
          >
            Selected Tags
          </Text>
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
              <Text
                style={{
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                No tags selected
              </Text>
            )}
          </ScrollView>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              marginBottom: 8,
              color: "#666",
            }}
          >
            Available Tags
          </Text>
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={
            {
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 16,
              width: "90%",
              maxWidth: 400,
              maxHeight: "90vh",
            } as any
          }
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                flex: 1,
              }}
            >
              {bookmark.title}
            </Text>
            <IconButton emoji="❌" onPress={onClose} />
          </View>

          <ScrollView style={{ maxHeight: "60vh" } as any}>
            <Text
              style={{
                fontSize: 16,
                color: "#666",
                marginBottom: 16,
              }}
            >
              {bookmark.content}
            </Text>
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

          <Text
            style={{
              fontSize: 12,
              color: "#666",
            }}
          >
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
  const [goodNews, setGoodNews] = useState<News[]>([]);

  const allTags: any[] = [];
  const data: any[] = shuffleArray([...goodNews, ...productivities]);

  const handleTagToggle = useCallback((tag: any) => {
    setSelectedTags((prev: any) =>
      prev.includes(tag) ? prev.filter((t: any) => t !== tag) : [...prev, tag]
    );
  }, []);

  useEffect(() => {
    getRecommendations(
      userPreference,
      news.map(({ title }) => title)
    ).then((res) => {
      console.log("res", res);
      const goodTitles = res.slice(0, 5).map(({ article }: any) => article);
      setGoodNews(news.filter(({ title }) => goodTitles.includes(title)));
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <StatusBar barStyle="dark-content" />
      <Header />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        renderItem={({ item }: any) => {
          if (item?.type === "news") {
            return (
              <NewsCard {...item} onPress={() => setSelectedBookmark(item)} />
            );
          }
          if (item?.type === "productivity") {
            return <TaskCard {...item} />;
          }
          return <></>;
        }}
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

async function getRecommendations(userPreference: string, articles: string[]) {
  return [
    {
      article: "Netflix's AI-Generated Content Sparks Industry Debate",
      score: 0.6734210252761841,
    },
    {
      article:
        "AI-Powered Personalized Learning Shows Dramatic Results in Global Study",
      score: 0.6619539260864258,
    },
    {
      article:
        "Lab-Grown Meat Receives FDA Approval for Wide-Scale Distribution",
      score: 0.5815669298171997,
    },
    {
      article: "IBM Achieves 1000-Qubit Breakthrough in Quantum Computing",
      score: 0.577540934085846,
    },
    {
      article:
        "Digital Athletes Compete Alongside Physical Players in 2024 Olympics",
      score: 0.5638554096221924,
    },
    {
      article:
        "Revolutionary Carbon Capture Technology Achieves 90% Efficiency",
      score: 0.5593730807304382,
    },
    {
      article:
        "UN Climate Report Reveals Critical Tipping Points Approaching Faster Than Predicted",
      score: 0.5560550093650818,
    },
    {
      article:
        "The Rise of Dark Tourism: Historical Sites See Record Visitor Numbers",
      score: 0.5514367818832397,
    },
    {
      article:
        "Stanford Study Reveals Novel Links Between Gut Microbiome and Mental Health",
      score: 0.5087637901306152,
    },
    {
      article: "SpaceX Announces First All-Female Mars Mission Crew",
      score: 0.47758662700653076,
    },
  ];
  // try {
  //   const response = await fetch(`${BASE_URL}/recommend`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user_preference: userPreference,
  //       articles: articles
  //     })
  //   });

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   return data.recommendations;
  // } catch (error) {
  //   console.error('Error fetching recommendations:', error);
  //   throw error;
  // }
}
