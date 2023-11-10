import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";

/* Images */
import LondonBlogImage1 from "./Assets/LondonImage1.jpg";
import LondonBlogImage2 from "./Assets/LondonImage2.jpg";
import LondonBlogImage3 from "./Assets/LondonImage3.jpg";
import SanFranBlogImage1 from "./Assets/SFImage1.jpg";
import SanFranBlogImage2 from "./Assets/SFImage2.jpg";
import SanFranBlogImage3 from "./Assets/SFImage3.jpg";
import TokyoBlogImage1 from "./Assets/TokyoImage1.jpg";
import TokyoBlogImage2 from "./Assets/TokyoImage2.jpg";
import TokyoBlogImage3 from "./Assets/TokyoImage3.jpg";

const pageTitles = {
  london: "London",
  sanFran: "San Francisco",
  tokyo: "Tokyo",
};

const locationDescriptions = {
  london: "London is a beautiful and old city. It rains a lot in London.",
  sanFran:
    "San Francisco is a beautiful and large city. It also has a lot of history.",
  tokyo:
    "Tokyo is a very beautiful and advanced city. There's tons of skyscrapers there.",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
      </header>

      <div>
        <TravelBlog
          pageTitle={pageTitles.london}
          locationDescription={locationDescriptions.london}
          image1={LondonBlogImage1}
          image2={LondonBlogImage2}
          image3={LondonBlogImage3}
        />
        <TravelBlog
          pageTitle={pageTitles.sanFran}
          locationDescription={locationDescriptions.sanFran}
          image1={SanFranBlogImage1}
          image2={SanFranBlogImage2}
          image3={SanFranBlogImage3}
        />
        <TravelBlog
          pageTitle={pageTitles.tokyo}
          locationDescription={locationDescriptions.tokyo}
          image1={TokyoBlogImage1}
          image2={TokyoBlogImage2}
          image3={TokyoBlogImage3}
        />
      </div>
    </div>
  );
}

export default App;
