const MenuApi = [
    {
        Name: "Japanese Sushi Rolls",
        Category: "Appetizers",
        Price: "$2",
        Description: "Assortment of fresh sushi rolls with tuna, salmon, and avocado. Served with soy sauce and pickled ginger.",
        Image: "Images/dish-1.png"
    },
    {
        Name: "Mexican Guacamole",
        Category: "Appetizers",
        Price:"$2",
        Description: "Creamy avocado dip made with fresh tomatoes, onions, cilantro, and lime. Served with tortilla chips.",
        Image: "https://media.istockphoto.com/id/474048190/photo/nachos-supreme.webp?b=1&s=170667a&w=0&k=20&c=io89tJgQtkiES6-7gt-OZP6nTeFSLqrSZ4faYjUiJCI="
    },
    {
        Name: "Italian Bruschetta",
        Category: "Appetizers",
        Price:"$1",
        Description: "Toasted bread topped with diced tomatoes, garlic, basil, and olive oil.",
        Image: "https://media.istockphoto.com/id/1430613649/photo/tomato-and-ricotta-bruschetta.webp?b=1&s=170667a&w=0&k=20&c=HKQhgFthWtCwaH6Sp-b1Wrw4mTjKaHxuog32rcHd8uc="
    },
    {
        Name: "Indian Samosa",
        Category: "Appetizers",
        Price:"$1",
        Description: "Crispy pastries filled with spiced potatoes and peas. Served with mint chutney.",
        Image: "https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.webp?b=1&s=170667a&w=0&k=20&c=0LwG420wWJhBXBNHqQ5XBTN-lD_BslhT6xo1cfbPOkY="
    },
    {
        Name: "French Onion Soup",
        Category: "Soups",
        Price: "$2",
        Description: "Traditional French soup made with caramelized onions, beef broth, and topped with melted cheese.",
        Image: "https://media.istockphoto.com/id/171101792/photo/french-onion-soup.webp?b=1&s=170667a&w=0&k=20&c=mydp9ccRkkZY5DeiPB8Pj6muP81i29i8-2mKCxbWung="
    },
    {
        Name: "Thai Tom Yum",
        Category: "Soups",
        Price: "$2",
        Description: "Spicy and sour Thai soup with lemongrass, mushrooms, lime, and your choice of chicken or shrimp.",
        Image: "https://media.istockphoto.com/id/1271033786/photo/famous-internationally-renowned-spicy-coconut-thai-soup-dish-of-tom-yam-kung-in-a-bowl.webp?b=1&s=170667a&w=0&k=20&c=4UXXfmujLcmFx9fPeT3aQuXEwNaSeYK1AhrrjwnCsVI="
    },
    {
        Name: "Greek Avgolemono ",
        Category: "Soups",
        Price: "$3",
        Description: " Creamy Greek soup made with chicken, rice, lemon, and eggs.",
        Image: "https://media.istockphoto.com/id/1446005462/photo/hearty-greek-meatball-soup-giouvarlakia.webp?b=1&s=170667a&w=0&k=20&c=gQLrxHEdPqeiThfSYZ_P8fVMJaB6U7Jm4rAM76DlBzk="
    },
    {
        Name: "Mediterranean Greek Salad ",
        Category: "Salads",
        Price:"$2",
        Description: "Fresh lettuce, tomatoes, cucumbers, olives, feta cheese, and red onions. Drizzled with olive oil and balsamic vinegar.",
        Image: "https://media.istockphoto.com/id/93466976/photo/greek-salad-served-by-the-water-in-santorini-greece.webp?b=1&s=170667a&w=0&k=20&c=8Eur3XL_Z1oHlfeR17Wv6k_RWhiARLxiB-ptb-ZxpOQ="
    },
    {
        Name: "Japanese Seaweed Salad",
        Category: "Salads",
        Price:"$2",
        Description: " Healthy and refreshing salad made with assorted seaweeds, sesame seeds, and a soy-based dressing.",
        Image: "https://media.istockphoto.com/id/1134306865/photo/raw-organic-ahi-salmon-poke-bowl-closeup.webp?b=1&s=170667a&w=0&k=20&c=Jbi1yslZpqIYNXWfAE6zrgNUr6-YFY-yu2kHzSSaEuM="
    },
    {
        Name: "Mexican Taco Salad",
        Category: "Salads",
        Price:"$2",
        Description: "Crisp tortilla bowl filled with lettuce, seasoned ground beef or chicken, salsa, cheese, and sour cream.",
        Image: "https://media.istockphoto.com/id/508341204/photo/taco-salad-in-a-tortilla-bowl.webp?b=1&s=170667a&w=0&k=20&c=ACGGrRDFJyovO1jBMMRPJRrScX9s4KXD9rUpsYiOM7E="
    },
    {
        Name: "Indian Butter Chicken",
        Category: "Main Courses",
        Price:"$5",
        Description: "Tender pieces of chicken cooked in a creamy tomato sauce with a blend of Indian spices. Served with naan bread.",
        Image: "https://media.istockphoto.com/id/1373284422/photo/indian-creamy-butter-chicken-curry-with-paratha-bread-served-in-copper-bowl.webp?b=1&s=170667a&w=0&k=20&c=-a2xzpgIy2fTbVYpcGHJK9hvvRBHEJ4gbzaoicKJxrY="
    },
    {
        Name: "Italian Spaghetti Carbonara",
        Category: "Main Courses",
        Price:"52",
        Description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        Image: "https://media.istockphoto.com/id/1181456803/photo/creamy-spaghetti-with-mushroom-creamy-pasta-with-mushroom-spaghetti-pasta-and-mushroom.webp?b=1&s=170667a&w=0&k=20&c=z-T3-UgL0337aXGyjkt_p2i5A8idf5jqGsooZl0sbK4="
    },
    {
        Name: "Thai Green Curry ",
        Category: "Main Courses",
        Price:"$7",
        Description: "Thai curry with coconut milk, green chilies, vegetables, and your choice of chicken, beef, or tofu.",
        Image: "https://media.istockphoto.com/id/1157386057/photo/thai-green-chicken-curry-with-lemon-and-thai-basil-leaves.webp?b=1&s=170667a&w=0&k=20&c=j9tPm4KVi7CFj0u3qrJLYv_4h8D4VDGqzUe1dt0KZPQ="
    },
    {
        Name: "American BBQ Ribs",
        Category: "Main Courses",
        Price:"$6",
        Description: "Slow-cooked ribs glazed with tangy barbecue sauce. Served with coleslaw and cornbread.",
        Image: "https://media.istockphoto.com/id/1221822964/photo/slow-roasted-st-louis-style-baby-back-pork-ribs.webp?b=1&s=170667a&w=0&k=20&c=AH4QVZBw_fpoOUnKDbDKlWaRYURBXGHLwGzIc7cdiq8="
    },
    {
        Name: "French Crème Brûlée",
        Category: "Desserts",
        Price:"$3",
        Description: "Rich custard topped with a caramelized sugar crust.",
        Image: "https://media.istockphoto.com/id/494087606/photo/creme-brulee-with-fresh-fruit.webp?b=1&s=170667a&w=0&k=20&c=UBPrVaSuk1z20JZPxfn-5lakfb-JkgHUqMRfbvEKM9k="
    },
    {
        Name: "Japanese Mochi Ice Cream",
        Category: "Desserts",
        Price:"$2",
        Description: " Soft and chewy rice cake filled with various ice cream flavors.",
        Image: "https://media.istockphoto.com/id/182059289/photo/tempura-mochi-ice-cream.webp?b=1&s=170667a&w=0&k=20&c=BAHNDmuN0ZisBnCvYJXrw9tNgUp0Ut40XJ80ZsNL1r4="
    },
    {
        Name: "Mexican Churros",
        Category: "Desserts",
        Price:"$4",
        Description: "Fried dough pastry rolled in cinnamon sugar. Served with chocolate dipping sauce.",
        Image: "https://media.istockphoto.com/id/939303754/photo/traditional-spanish-dessert-churros.webp?b=1&s=170667a&w=0&k=20&c=0xAbxI493lbq7W4uJGnXHsWM1bZImaa5LuZAulT_4vQ="
    },
    {
        Name: "Greek Baklava",
        Category: "Desserts",
        Price:"$3",
        Description: "Sweet pastry made with layers of phyllo dough, honey, and chopped nuts.",
        Image: "https://media.istockphoto.com/id/161654499/photo/baklava.webp?b=1&s=170667a&w=0&k=20&c=PI5_KhsGtkLTJWlu49qp_C3Cx4NJqn52oQJJyrhFGZE="
    },
    {
        Name: "Brazilian Caipirinha",
        Category: "Beverages",
        Price:"$3",
        Description: "Traditional Brazilian cocktail made with cachaca, lime, sugar, and ice.",
        Image: "https://media.istockphoto.com/id/1227433714/photo/caipirinha-cocktail-close-up-traditional-brazilian-cocktail-made-with-cacha%C3%A7a-sugar-and-lemon.webp?b=1&s=170667a&w=0&k=20&c=cPZOgybH6pOMFGjLnkPw6LQkLdRhB605dux5u5AxVxU="
    },
    {
        Name: "English Breakfast Tea",
        Category: "Beverages",
        Price:"$5",
        Description: "Classic black tea served with milk and sugar.",
        Image: "https://media.istockphoto.com/id/1225857808/photo/a-cup-of-fragrant-flower-tea-lemon-mint-cinnamon-and-a-scattering-of-leaf-tea.webp?b=1&s=170667a&w=0&k=20&c=WkjT1kXP_p54n962wHW12701b0mb4XWtBGpyb0L9y68="
    },
    {
        Name: "Moroccan Mint Tea",
        Category: "Beverages",
        Price:"$2",
        Description: "Green tea infused with fresh mint leaves and sweetened with sugar.",
        Image: "https://media.istockphoto.com/id/1299747291/photo/moroccan-mint-tea-northern-africa-maghrebi-mint-tea-with-green-tea.webp?b=1&s=170667a&w=0&k=20&c=XMV-ViO1WKo55riyEYUPrlUB916HPyBLAB-oaKn7Co8="
    },

]

export default MenuApi;


// Event Data
import { FaCheckCircle } from "react-icons/fa"

export const EventsData = [
    {
        Image: "https://media.istockphoto.com/id/1330424071/photo/large-group-of-people-at-a-concert-party.webp?b=1&s=170667a&w=0&k=20&c=0aC5UPizPBIWckkHM_dT_RjEjBtTptQn4rym1vL9FSo=",
        Title: "Live Music or Entertainment Nights",
        Description: "Restaurants may host live music performances, DJ nights, or other entertainment events to create a vibrant atmosphere and entertain guests while they dine."
    },
    {
        Image: "https://media.istockphoto.com/id/1419160379/photo/makeup-themed-halloween-banner-with-a-pumpkin-and-ample-copy-space.webp?b=1&s=170667a&w=0&k=20&c=9nq_K2acHk8Y6_nWsQwBe-iYcfcskIBIZDQdIh5PI-o=",
        Title: "Special Themed Nights",
        Description: "Themed nights, such as Mexican Night, Italian Night, or Seafood Night, offer a unique dining experience with specific cuisines or featured dishes."
    },
    {
        Image: "https://media.istockphoto.com/id/1192104619/photo/sommelier-serving-glasses-of-winetasting-event.webp?b=1&s=170667a&w=0&k=20&c=obgcOQTT_h4lcM2JYpPw9C_rtaE6ye85XX9hzdx_awE=",
        Title: "Wine or Beverage Tasting",
        Description: " Restaurants with a focus on wine or craft beverages may organize tasting events, allowing guests to sample various wines, beers, or cocktails paired with complementary dishes."
    },
    {
        Image: "https://media.istockphoto.com/id/1055287418/photo/priceless-family-moments.webp?b=1&s=170667a&w=0&k=20&c=dfKrfAUrCj2Z_AawpfYp6VCts1HvCnsZyzC4tZNzeM0=",
        Title: "Holiday Celebrations",
        Description: "Restaurants may host special events for holidays like Christmas, New Year's Eve, Valentine's Day, or Thanksgiving, offering festive menus and decorations."
    },

]


// Chef Data
export const chefNames = [
    {
        name: "Sanjeev Kapoor",
        icon: <FaCheckCircle />
    },
    {
        name: "Vikas Khanna",
        icon: <FaCheckCircle />
    },
    {
        name: "Manish Mehrotra",
        icon: <FaCheckCircle />
    },
    {
        name: "Gaggan Anand",
        icon: <FaCheckCircle />
    },
    {
        name: "Thomas Zacharias",
        icon: <FaCheckCircle />
    },
    {
        name: "Garima Arora",
        icon: <FaCheckCircle />
    },
    {
        name: "Floyd Cardoz",
        icon: <FaCheckCircle />
    },
    {
        name: "Atul Kochhar",
        icon: <FaCheckCircle />
    },
    {
        name: "Ritu Dalmia",
        icon: <FaCheckCircle />
    },
    {
        name: "Zorawar Kalra",
        icon: <FaCheckCircle />
    },
]

// Connect Data
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md"

export const connect = [
    {
        title: "Connect With Us",
        description: "Feel Free To Contact"
    },
    {
        title: "Call",
        description: "+91 7559428838",
        icon: <MdPhone />
    },
    {
        title: "Mail",
        description: "tejasdhodi77@gmail.com",
        icon: <MdMail />
    },
    {
        title: "Address",
        description: "Maharashtra, Dahanu 401602",
        icon: <MdLocationOn />
    },
]


export const footerDetails = [
    {
        day: "Monday-Friday",
        time: "9:00 AM to 9:00 PM"
    },
    {
        day: "Saturday",
        time: "9:00 AM to 9:00 PM"
    },
    {
        day: "Sunday",
        time: "Close"
    },
]



export const footerLinks = [
    {
        title: "Navigation",
        links: {
            l1: "Menu",
            l2: "About Us",
            l3: "Main Dishes",
            l4: "Contact Us"
        }
    },
    {
        title: "Dishes",
        links: {
            l1: "Appetizers",
            l2: "Soups",
            l3: "Main Courses",
            l4: "Desserts"
        }
    }
]