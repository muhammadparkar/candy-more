/**
 * Resolve a product `photo` / `additionalPhotos` entry to a real src.
 * Local files start with "/" and are returned as-is; everything else is
 * treated as an Unsplash photo id.
 */
export function imgSrc(photo: string, w = 640, h = 480): string {
  if (photo.startsWith("/")) return photo;
  return `https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: "chocolates" | "flowers" | "plants" | "gift-boxes" | "hampers";
  price: number;
  originalPrice?: number;
  badge?: "Bestseller" | "New" | "Staff Pick" | "Limited Edition" | "Award Winner" | null;
  rating: number;
  reviewsCount: number;
  photo: string;
  /** How the card image should fit its box. Default "contain" (show whole image). */
  imageFit?: "cover" | "contain";
  additionalPhotos?: string[];
  description: string;
  details: string[];
  notes: string;
  dietaryOrType: string[];
  delivery: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "bubblegum-rose-box",
    name: "Bubblegum Rose Box",
    category: "Chocolates + Roses",
    categorySlug: "gift-boxes",
    price: 58,
    originalPrice: 68,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 142,
    photo: "1566565286951-f81c7ba5619d",
    additionalPhotos: [
      "1582794543139-8ac9cb0f7b11",
      "1756318084626-de5cf8bab8c6"
    ],
    description: "Our iconic pink keepsake box filled with 12 garden roses in sweet pastel blush, paired with 6 handcrafted strawberry rose ruby truffles.",
    details: [
      "12 freshly picked Ecuadorian garden roses",
      "6 ruby chocolate & wild raspberry truffles",
      "Signature magnetic gift box with silk pull ribbon",
      "Handwritten wax-sealed greeting card included"
    ],
    notes: "Truffle notes: Crushed framboise, Bulgarian rosewater, 34% Swiss ruby cacao.",
    dietaryOrType: ["Gluten-Free", "Vegetarian", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "tulip-field-bouquet",
    name: "Tulip Field Bouquet",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 42,
    badge: "New",
    rating: 4.8,
    reviewsCount: 89,
    photo: "1741803099750-e4102ab379b1",
    additionalPhotos: [
      "1582794543139-8ac9cb0f7b11"
    ],
    description: "A breezy arrangement of 20 French fringe and parrot tulips in gradient peach, lemon, and soft lilac tones.",
    details: [
      "20 stem premium Dutch double & parrot tulips",
      "Hand-tied with recycled biodegradable linen twine",
      "Includes organic floral hydration nutrient sachet",
      "Vase life: 7 to 10 days"
    ],
    notes: "Scent profile: Crisp dewy spring greens and faint honey blossom.",
    dietaryOrType: ["Fragrant", "Sustainable", "Farm-Direct"],
    delivery: "Same-day delivery available"
  },
  {
    id: "surrealist-truffle-set",
    name: "Surrealist Truffle Set",
    category: "Artisan Chocolates",
    categorySlug: "chocolates",
    price: 34,
    badge: "Award Winner",
    rating: 5.0,
    reviewsCount: 210,
    photo: "1756318084626-de5cf8bab8c6",
    additionalPhotos: [
      "1654493404885-5254978e9705"
    ],
    description: "Twelve hand-painted jewel truffles made with single-origin Madagascan and Ecuadorian cacao, filled with avant-garde ganaches.",
    details: [
      "12 individual hand-painted bonbons",
      "Flavors: Yuzu Jasmine, Salted Pistachio Crisp, Hibiscus Caramel, Earl Grey Smoked Vanilla",
      "Fair-trade 70% dark & 38% alpine milk chocolate",
      "Keepsake pastel sliding jewel box"
    ],
    notes: "Cacao origin: Sambirano Valley, Madagascar & Los Ríos, Ecuador.",
    dietaryOrType: ["Gluten-Free", "Fair-Trade", "Vegetarian"],
    delivery: "Temperature-controlled courier"
  },
  {
    id: "golden-hour-hamper",
    name: "Golden Hour Hamper",
    category: "Grand Hampers",
    categorySlug: "hampers",
    price: 76,
    originalPrice: 88,
    badge: "Staff Pick",
    rating: 4.9,
    reviewsCount: 77,
    photo: "1559648285-851dd3a04a02",
    additionalPhotos: [
      "1566565286951-f81c7ba5619d"
    ],
    description: "The ultimate indulgence: a woven canvas basket with dried botanical bouquet, artisanal honeycomb toffee, champagne gummies, and praline bars.",
    details: [
      "Everlasting dried pastel botanical posy",
      "Golden blossom honeycomb toffee bar (150g)",
      "Sparkling brut gummy drops (200g)",
      "Double dark single-origin chocolate bar",
      "Custom hot-foil embossed greeting envelope"
    ],
    notes: "Everything you need to turn an ordinary afternoon into an unforgettable celebration.",
    dietaryOrType: ["Gift-Ready", "Long-Lasting", "Vegetarian"],
    delivery: "Same-day delivery available"
  },
  {
    id: "deconstructed-blossom",
    name: "Deconstructed Blossom Centerpiece",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 64,
    badge: null,
    rating: 4.7,
    reviewsCount: 54,
    photo: "1573256815039-69d5f81f894f",
    additionalPhotos: [
      "1741803099750-e4102ab379b1"
    ],
    description: "An architectural floral sculpture featuring ranunculus, sweet peas, fluttering cosmos, and flowering eucalyptus in a ceramic vessel.",
    details: [
      "24 mixed artisanal floral stems and whimsical greenery",
      "Arrives nestled in a handmade matte-glazed ceramic vase",
      "Designed to look gorgeous from every 360° angle"
    ],
    notes: "Care: Top up with cool water daily. Keep out of direct sunlight.",
    dietaryOrType: ["Includes Ceramic Vase", "Fragrant", "Artisanal"],
    delivery: "Hand-delivered in protective crate"
  },
  {
    id: "midnight-praline-bar",
    name: "Midnight Praline Cacao Bar",
    category: "Artisan Chocolates",
    categorySlug: "chocolates",
    price: 18,
    badge: "New",
    rating: 4.9,
    reviewsCount: 63,
    photo: "1654493404885-5254978e9705",
    additionalPhotos: [
      "1756318084626-de5cf8bab8c6"
    ],
    description: "Stone-ground 72% dark chocolate loaded with caramelized Piedmont hazelnuts, roasted cacao nibs, and sea salt flakes.",
    details: [
      "Single-origin 72% dark chocolate bar (100g)",
      "IGP certified Piedmont hazelnuts",
      "Wrapped in custom illustrated foil and embossed paper wrap"
    ],
    notes: "Flavor profile: Deep toasted brioche, espresso bean, and velvety buttery hazelnut crunch.",
    dietaryOrType: ["Vegan", "Gluten-Free", "Dairy-Free"],
    delivery: "Same-day delivery available"
  },
  {
    id: "pistachio-matcha-cloud-box",
    name: "Pistachio Matcha Cloud Box",
    category: "Chocolates + Flowers",
    categorySlug: "gift-boxes",
    price: 62,
    badge: "Limited Edition",
    rating: 4.9,
    reviewsCount: 95,
    photo: "1582794543139-8ac9cb0f7b11",
    additionalPhotos: [
      "1709294728779-6be509d45255"
    ],
    description: "A harmonious pairing of creamy ceremonial Uji matcha white chocolate truffles alongside a delicate cloud bouquet of white hydrangeas and eucalyptus.",
    details: [
      "8 ceremonial grade matcha & bronte pistachio truffles",
      "Lush white hydrangea and scented silver dollar eucalyptus",
      "Pastel mint keepsake box with metallic foil accents"
    ],
    notes: "Scent & taste: Earthy umami matcha paired with fresh minty eucalyptus breeze.",
    dietaryOrType: ["Vegetarian", "Limited Edition", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "botanical-confectionery-hamper",
    name: "Botanical Atelier Grand Hamper",
    category: "Grand Hampers",
    categorySlug: "hampers",
    price: 110,
    originalPrice: 125,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 118,
    photo: "1559648285-851dd3a04a02",
    additionalPhotos: [
      "1566565286951-f81c7ba5619d"
    ],
    description: "The crown jewel gift experience: full champagne rose bouquet, 16pc master truffle collection, wild berry pâte de fruits, and custom candle.",
    details: [
      "18 garden roses hand-tied bouquet",
      "16-piece Master Collection Chocolate Box",
      "Hand-poured Damask Rose & Fig soy wax candle",
      "Artisan French berry fruit jellies (Pâte de fruits)",
      "Luxury woven gift basket with satin ribbon"
    ],
    notes: "The ultimate luxury statement for birthdays, weddings, anniversaries, or corporate appreciation.",
    dietaryOrType: ["Full Experience", "Gift-Ready", "Signature"],
    delivery: "White-glove same-day delivery"
  },
  {
    id: "citrus-sunshine-blooms",
    name: "Citrus Sunshine Blossom Bunch",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 46,
    badge: null,
    rating: 4.8,
    reviewsCount: 41,
    photo: "1741803099750-e4102ab379b1",
    additionalPhotos: [
      "1573256815039-69d5f81f894f"
    ],
    description: "Bright yellow sunflowers, coral snapdragons, chamomile daisies, and fragrant mint sprigs designed to bring pure joy.",
    details: [
      "16 vibrant sunlit stems",
      "Infused with fresh aromatic botanical herbs",
      "Recycled kraft paper and bubblegum bow wrapper"
    ],
    notes: "Mood: Instant mood booster with vibrant uplifting citrus hues.",
    dietaryOrType: ["Fragrant", "Farm-Fresh", "Same-Day"],
    delivery: "Same-day delivery available"
  },
  {
    id: "ruby-raspberry-bark",
    name: "Ruby Raspberry & Rose Petal Bark",
    category: "Artisan Chocolates",
    categorySlug: "chocolates",
    price: 20,
    badge: "Staff Pick",
    rating: 4.9,
    reviewsCount: 88,
    photo: "1756318084626-de5cf8bab8c6",
    additionalPhotos: [
      "1654493404885-5254978e9705"
    ],
    description: "Thick artisan slabs of ruby chocolate studded with freeze-dried whole raspberries, candied edible rose petals, and popping sugar crystals.",
    details: [
      "150g broken artisan chocolate slabs",
      "Naturally pink ruby cacao beans (no artificial dyes)",
      "Edible organic pesticide-free rose petals"
    ],
    notes: "Tangy, sweet, and playfully effervescent.",
    dietaryOrType: ["Gluten-Free", "Natural Ingredients", "Vegetarian"],
    delivery: "Same-day delivery available"
  },
  {
    id: "lavender-honeycomb-crunch-box",
    name: "Lavender Honeycomb Confection Box",
    category: "Artisan Chocolates",
    categorySlug: "chocolates",
    price: 28,
    badge: "New",
    rating: 4.8,
    reviewsCount: 39,
    photo: "1654493404885-5254978e9705",
    additionalPhotos: [
      "1756318084626-de5cf8bab8c6"
    ],
    description: "Golden airy honeycomb dipped in French lavender-infused milk chocolate and sprinkled with Maldon crystal salt.",
    details: [
      "8 thick golden honeycomb squares",
      "Organic wildflower honey & Provence culinary lavender",
      "Pastel violet presentation tin"
    ],
    notes: "Sweet honey crunch dissolving into creamy lavender milk chocolate.",
    dietaryOrType: ["Gluten-Free", "Vegetarian"],
    delivery: "Same-day delivery available"
  },
  {
    id: "sweetheart-duo-tote",
    name: "Sweetheart Keepsake Canvas Tote Set",
    category: "Grand Hampers",
    categorySlug: "hampers",
    price: 84,
    badge: "Limited Edition",
    rating: 4.9,
    reviewsCount: 52,
    photo: "1559648285-851dd3a04a02",
    additionalPhotos: [
      "1566565286951-f81c7ba5619d"
    ],
    description: "An embroidered heavy canvas tote bag filled with fresh baby pink carnations, eucalyptus, artisan raspberry cookies, and two chocolate bars.",
    details: [
      "Heavyweight organic cotton embroidered tote bag",
      "Water-resistant flower vase insert",
      "Two artisan chocolate bars + box of butter sablés",
      "Ribbon tag with personalized gift calligraphy"
    ],
    notes: "A gift where the bag becomes a favorite everyday carry long after the flowers bloom.",
    dietaryOrType: ["Reusable Tote", "Gift-Ready", "Limited Edition"],
    delivery: "Same-day delivery available"
  },
  {
    id: "red-rose-heart-stand-bouquet",
    name: "Red Rose Heart Shaped Stand Bouquet",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/IMG_2108.JPG",
    description: "A statement declaration of love: dozens of long-stemmed red roses hand-built into a full heart form on a self-standing stem base, collared with fresh foliage and finished with a signature Candy More Flowers ribbon.",
    details: [
      "Heart-form arrangement of premium long-stem red roses",
      "Self-supporting bound-stem base — no vase needed",
      "Fresh salal collar and signature branded satin ribbon",
      "Ideal for anniversaries, proposals and Valentine's Day"
    ],
    notes: "Rose count and stand height scaled to your budget — request a quote for options.",
    dietaryOrType: ["Fresh", "Gift-Ready", "Statement Piece"],
    delivery: "Same-day delivery available"
  },
  {
    id: "elegant-indoor-plant-gift",
    name: "Elegant Indoor Plant Gift",
    category: "Plants",
    categorySlug: "plants",
    price: 0,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/IMG_2109.JPG",
    description: "A lush peace lily in full bloom, gift-wrapped in blush tissue and satin ribbon with a black foil gift tag. A living gift that keeps giving long after cut flowers fade.",
    details: [
      "Healthy potted peace lily (Spathiphyllum) in bloom",
      "Air-purifying, low-light tolerant, easy to care for",
      "Blush gift wrap, satin bow and foil-stamped tag",
      "Care card included"
    ],
    notes: "Plant size and decorative pot options available on request.",
    dietaryOrType: ["Live Plant", "Air-Purifying", "Long-Lasting"],
    delivery: "Same-day delivery available"
  },
  {
    id: "luxury-mixed-bouquet",
    name: "Luxury Mixed Bouquet",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 0,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/IMG_2110.JPG",
    description: "An abundant hand-tied bouquet of red and pink roses, pink lilies, carnations, gypsophila and eucalyptus, wrapped in dusty-rose paper with a satin ribbon and gift tag.",
    details: [
      "Red & pink roses, Oriental lilies, carnations",
      "Gypsophila, limonium and fresh eucalyptus",
      "Premium dusty-rose wrap with satin ribbon and tag",
      "Presented in a water-filled gift bag"
    ],
    notes: "Available in three sizes — request a quote to compare.",
    dietaryOrType: ["Fresh", "Fragrant", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "floral-indulgence",
    name: "Floral Indulgence — Flowers plus Chocolates",
    category: "Chocolates + Flowers",
    categorySlug: "gift-boxes",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/IMG_2125.JPG",
    imageFit: "cover",
    description: "A pastel spring arrangement of ranunculus, roses, hydrangea and lilies paired with a keepsake box of assorted hand-decorated truffles and pralines.",
    details: [
      "Seasonal pastel arrangement — ranunculus, roses, hydrangea, lilies",
      "Keepsake box of ~25 assorted truffles and pralines",
      "Gold foil-embossed 'Floral Indulgence' lid",
      "Presented on a wooden serving tray"
    ],
    notes: "Chocolate box size and flower palette customizable on request.",
    dietaryOrType: ["Fresh", "Contains Dairy", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "scented-surprises",
    name: "Scented Surprises",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 0,
    badge: "Bestseller",
    rating: 4.8,
    reviewsCount: 0,
    photo: "/images/IMG_2126.JPG",
    imageFit: "cover",
    description: "An all-white fragrant bouquet of gardenia, jasmine, freesia and Oriental lilies in a glass vase tied with an ivory ribbon — built to perfume a whole room.",
    details: [
      "Gardenia, jasmine, freesia and white Oriental lilies",
      "Arranged in a clear glass gift vase",
      "Ivory satin ribbon finish",
      "Highly fragrant — a scent-led arrangement"
    ],
    notes: "Seasonal fragrant stems vary; request a quote for current selection.",
    dietaryOrType: ["Fresh", "Highly Fragrant", "Vase Included"],
    delivery: "Same-day delivery available"
  },
  {
    id: "high-end-modern-tablescape",
    name: "High End Modern Tablescape Arrangement",
    category: "Home Decors & Special Events",
    categorySlug: "hampers",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/IMG_2127.JPG",
    description: "A low, elongated luxury centerpiece of hydrangea, Oriental lilies, roses, stock and trailing eucalyptus, styled to run the length of a coffee or dining table for events and premium home styling.",
    details: [
      "Elongated low centerpiece — hydrangea, lilies, roses, stock",
      "Trailing eucalyptus and seasonal greenery",
      "Styled for dining / coffee tables and event settings",
      "On-site styling and multiples available for events"
    ],
    notes: "Priced per running length and stem grade — request an event quote.",
    dietaryOrType: ["Fresh", "Event Styling", "Made to Order"],
    delivery: "Delivery & setup by arrangement"
  }
];
