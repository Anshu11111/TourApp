import Tours from "./Components/Tours";
import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      name: "Mandar Hill",
      info: "Mandar Hill, a panoramic landscape of 800 ft high granite hill situated 50 KM from Bhagalpur city, is associated with legendry amritmanthana or churning of nectar from the sea. Legend has it that the hill was used by Gods to churn the   ",
      image:
        "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_b/banka/mandar_hill/nature_banka_category_b_mandar_hill_pic_01.jpg/jcr:content/renditions/cq5dam.web.1280.765.jpeg",
      price: "100000",
    },
    {
      id: 2,
      name: "Bodh Gaya",
      info: "The village of Bodh Gaya is located in north-eastern India. The historic brick Mahabodhi Temple Complex was constructed to commemorate the location where the Buddha received enlightenment beneath a revered Bodhi Tree. The complex still contains six other holy locations, including a lotus pond, as well as a direct descendant of the tree. ",
      image:
        "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/bodh-gaya.jpg",
      price: "50000",
    },
    {
      id: 3,
      name: "Odhni Dam",
      info: "Odhni Dam is located in Banka district, where you can go and enjoy water sports. At this place you can see the beauty of the river and the dam together. Arrangements like motorboat, speed boat and jet skiing to adventure water sports have been started in Odhni Dam.  ",
      image:
        "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_b/banka/odhani-dam/odhani-dam.png/jcr:content/renditions/cq5dam.web.1280.765.jpeg",
      price: "200000",
    },
    {
      id: 4,
      name: "Taj Mahal",
      info: "Majestically located on the banks of Yamuna River, this wonder of the world was built by the Mughal Emperor Shah Jahan as a memorial for his beloved wife Mumtaz Mahal.",
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities-agra-taj-mahal_l_400_640.jpg",
      price: "2000",
    },
    {
      id: 5,
      name: "Red Fort (Lal Quila)",
      info: "Located in Chandni Chowk Old Delhi, this red sandstone structure was constructed under the reign of Mughal emperor Shah Jahan for protection against invaders. It is known for its intricate Mughal architecture and floral designs.",
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg",
      price: "100000",
    },
    {
      id: 6,
      name: "Golden Temple",
      info: "Also known as Sri Harmandir Sahib, Golden Temple is considered to be the most important pilgrimage site amongst Sikhs and will leave you in awe with its jaw-dropping gold and marble edifice. ",
      image:
        "https://hblimg.mmtcdn.com/content/hubble/img/amritsar/mmt/activities/m_activities_amritsar_golden_temple_l_427_639.jpg",
      price: "5200",
    },
  ];
  const [tours, setTour] = useState(data);

  function removetour(id) {
    console.log("button");
    const newtours = tours.filter((tour) => tour.id !== id);

    setTour(newtours);
  }

  if (tours.length == 0) {
    return (
      <div className="refresh">
        <h3>No tour left</h3>
        <button
          onClick={() => {
            setTour(data);
          }}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} remove={removetour} />
    </div>
  );
}

export default App;
