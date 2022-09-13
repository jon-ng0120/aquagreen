const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'Alternanthera Reineckii',
    description: `The pink underside of the leaves of Alternanthera reineckii 'Pink' provides an effective contrast to the many green plants in an aquarium - particularly when planted in groups. Stems becomes 25-50 cm tall. Good light encourages the leaves to turn red. Easy to propagate by nipping off the terminal bud and planting it in the substrate. This also makes the mother plant more bushy, because more side shoots are formed.
    Alternanthera reineckii 'Pink' originated in South America.`,
    price: 6.99,
    difficulty: 'intermediate',
    lighting: 'medium',
    position: 'background',
    images: ['alternanthera-reineckii.png'],
  },
  {
    id: 2,
    name: 'Amazon Sword',
    description: `The Echinodorus bleheri, or the Amazon Sword Plant as it's commonly called, comes from South America and is an undemanding and beautiful, and becomes 20-50 cm tall.

    A nutritious bottom promotes growth, but the plant needs pruning to prevent it depriving plants underneath of light. Echinodorus bleheri does well even in poorly illuminated aquariums, as it grows towards the light.
    It is a hardy and easy solitary plant for both beginners and the more experienced with quite large aquariums.`,
    price: 4.99,
    difficulty: 'beginner',
    lighting: 'low',
    position: 'background',
    images: ['amazon-sword.png'],
  },
  {
    id: 3,
    name: 'Anubias Barteri',
    description: `Anubias barteri var. barteri from West Africa is an undemanding plant. It grows somewhat larger than Anubias barteri var. nana but is grown in the same conditions. From 25-45 cm tall and the creeping rhizome from 10-15 cm or more. Anubias barteri varies considerably in terms of size and leaf shape.

    Like other Anubias-species, it is best planted in a shady spot to minimize algae growth on the leaves. If planted on the bottom, the rhizome must not be covered because it tends to rot. It is also suitable for terrariums and paludariums. Herbivorous fish do not eat the very tough and robust leaves.`,
    price: 7.99,
    difficulty: 'beginner',
    lighting: 'low',
    position: 'foreground',
    images: ['anubias-barteri.png'],
  },
  {
    id: 4,
    name: 'Cryptocoryne Wendtii',
    description: `Cryptocoryne wendtii ‘Green' presents beautiful, green leaves. Depending on your aquarium setup wendtii ‘Green' can reach a height of 10-30 cm with rosets ranging from 8-15 cm wide.

    When grown in an open space the leaves will virtually lie on the bottom. Like most other Sri Lanka Cryptocorynes, it also grows well in hard water. 
    Easy to grow, it thrives in almost all conditions, even in the shadow of larger plants.`,
    price: 3.99,
    difficulty: 'beginner',
    lighting: 'low',
    position: 'foreground',
    images: ['cryptocoryne-wendtii.png'],
  },
  {
    id: 5,
    name: 'Dwarf Sagittaria',
    description: `Sagittaria subulata from South America is an ideal, undemanding foreground plant whose short runners form a compact group.

    Place individual plants 2-4 cm apart. This plant may cause problems because in certain conditions it suddenly grows to a height of 50 cm when it grows older. But if it is then moved into the background it may become low again. In the aquarium, it sometimes sends a long flower stem to the surface, and small white flowers unfold just above the water surface.`,
    price: 3.99,
    difficulty: 'beginner',
    lighting: 'low',
    position: 'foreground',
    images: ['dwarf-sagittaria.png'],
  },
  {
    id: 6,
    name: 'Java Fern',
    description: `Java Fern is a water fern from Asia, 15-30 cm tall. To be grown on a root or stone, attached with fishing line until it has gained a hold. If planted in the bottom, do not cover the rhizome because it will rot. Easy to propagate by splitting the horizontal rhizome. A hardy plant that grows in all conditions. The black spots under the leaves are sporangia (reproductive organs), not signs of disease, as many believe.`,
    price: 4.99,
    difficulty: 'beginner',
    lighting: 'low',
    position: 'midground',
    images: ['java-fern.png'],
  },
  {
    id: 7,
    name: 'Red Tiger Lotus',
    description: `Java Fern is a water fern from Asia, 15-30 cm tall. To be grown on a root or stone, attached with fishing line until it has gained a hold. If planted in the bottom, do not cover the rhizome because it will rot. Easy to propagate by splitting the horizontal rhizome. A hardy plant that grows in all conditions. The black spots under the leaves are sporangia (reproductive organs), not signs of disease, as many believe.`,
    price: 4.99,
    difficulty: 'intermediate',
    lighting: 'medium',
    position: 'background',
    images: ['red-tiger-lotus.png'],
  },
  {
    id: 8,
    name: 'Staurogyne repens',
    description: `Staurogyne repens is a fresh green, compact and hardy plant for the foreground of the aquarium and it was found in River Rio Cristalino in the southern Amazonas. Its nearest relative in the aquaristic is Hygrophila but Staurogyne is different with its marked compact, low and bushy stature (5-10 cm) and small green leaves (each stem is 3.4 cm wide).
    When planting in the aquarium, the longest upright shoots should be cut off and new, horizontally creeping shoots will soon form from the plant basis and gradually colonize the gravel.
    At low light, the growth will be more upright and much less side shoots will be formed.`,
    price: 5.99,
    difficulty: 'beginner',
    lighting: 'medium',
    position: 'foreground',
    images: ['staurogyne-repens.png'],
  },
  {
    id: 9,
    name: 'Vallisneria Americana',
    description: `Vallisneria americana is a hardy plant for beginners. It has fine, narrow leaves (50-100 cm long, 1 cm wide) so it does not overshadow other plants much. Easy to propagate using its many runners. 

    A bundle of stems or young plants gathered in an anchor. Remove the anchor and split into separate plants. Regarding stem plants, remove the leaves from the lowest 5 cm (2“). Remove any damaged leaves. Plant the individual plants with some distance into the bottom substrate. Roots will develop soon and the plant start growing.`,
    price: 4.99,
    difficulty: 'beginner',
    lighting: 'low',
    position: 'background',
    images: ['vallisneria-americana.png'],
  },
  {
    id: 10,
    name: 'Glossostigma elatinoides',
    description: `Glossostigma elatinoides from New Zealand is much in demand in Japanese-inspired aquariums. It is one of the smallest aquarium plants (2-3 cm tall), and thus a good foreground plant. 
    A difficult plant demanding a lot of light. Grows upwards if light is poor. Make sure larger plants do not overshadow it. When planting in the aquarium small clumps (approx. 1/8 pot) should be placed at intervals of a few centimetres to help the plants grow together more quickly. CO2 addition and soft water promote growth significantly. `,
    price: 8.99,
    difficulty: 'advanced',
    lighting: 'high',
    position: 'foreground',
    images: ['glossostigma-elatinoides.png'],
  },
  {
    id: 11,
    name: 'Hemianthus micranthemoides',
    description: `Hemianthus micranthemoides from North America is a graceful plant whose small, arched leaves make it look like a miniature version of Egeria. It has a characteristic trailing growth in intensive light, so it can be used as a foreground plant (stems from 10-20 cm tall, 2-3 cm wide). A compact group of Hemianthus micranthemoides is very beautiful with its small, light-green leaves.
    In terrariums the plant forms a compact cushion.
    Used to be called Micranthemum micranthemoides. `,
    price: 7.99,
    difficulty: 'advanced',
    lighting: 'medium',
    position: 'foreground',
    images: ['hemianthus-micranthemoides.png'],
  },
  {
    id: 11,
    name: 'Pogostemon stellatus',
    description: `Pogostemon stellata from Asia and Australia is distinguished by its beautiful shape and colour. Stems from 20-60 cm and up to 10 cm wide. It is difficult to grow in aquariums. It requires intensive light and the addition of CO2 to grow well.

    The shortage of micronutrients leads to pale leaves, which may be an indication that the aquarium needs fertiliser. Even in good conditions growth sometimes stops suddenly. Plants in aquarium shops are generally low, compact plants grown in marshy conditions, and do not reveal their full glory until planted in the aquarium.`,
    price: 10.99,
    difficulty: 'advanced',
    lighting: 'high',
    position: 'background',
    images: ['pogostemon-stellatus.png'],
  },
  {
    id: 12,
    name: 'Aponogeton boivinianus',
    description: `Aponogeton boivinianus is a large, strong plant which is only suitable for large aquariums.

    A bulb plant from Madagascar, whose bulb may be covered with the bottom layer, as long as the sprout tip is at the soil surface. In favourable conditions it can form very large leaves (up to 80 cm long and 8 cm wide, and from 30-50 cm wide). The oldest leaves are deep dark-green, while younger leaves are light-green and sometimes brownish until they are fully developed. Nutrition capsules enhances the growth considerably.
    
    In the wild, Aponogeton boivinianus is found in fast-flowing water, and it prefers some flow in the aquarium water. It needs a dormant period when the bulb loses all its leaves, after which the growth will start again. `,
    price: 12.99,
    difficulty: 'medium',
    lighting: 'medium',
    position: 'background',
    images: ['aponogeton-boivinianus.png'],
  },
];

export default DUMMY_PRODUCTS;
