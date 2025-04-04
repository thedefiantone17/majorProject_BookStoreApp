import React from "react";
import news1 from "../../assets/news/news-1.png";
import news2 from "../../assets/news/news-2.png";
import news3 from "../../assets/news/news-3.png";
import news4 from "../../assets/news/news-4.png";
import { Link } from "react-router";

const news = [
    {
        "id": 1,
        "title": "Global Climate Summit Calls for Urgent Action",
        "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Breakthrough in AI Technology Announced",
        "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
        "image": news2
    },
    {
        "id": 3,
        "title": "New Space Mission Aims to Explore Distant Galaxies",
        "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
        "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Innovative New Smartphone Released by Leading Tech Company",
        "description": "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
        "image": news2
    }
];

const News = () => {
  return (
    <>
      <div className="py-6">
        <h2 className="text-3xl font-semibold mb-6">News</h2>

        <div className=" flex h-[400px] gap-6 items-center justify-between overflow-x-auto carousel-center rounded-box p-1 ">
{/*           
            <div className="card carousel-item card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

            <div className="card carousel-item card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>

            <div className="card carousel-item card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
          
            <div className="card carousel-item card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
          
          {
            news.map((item, idx) => (
                <div key={item.id} className="card carousel-item card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src={item.image}
                    alt="Movie"
                    />
                </figure>
                <div className="card-body w-100">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="">{item.description}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/news/${item.id}`} className="btn btn-primary">Read More</Link>
                    </div>
                </div>
                </div>
            ))
                    
          }
        </div>
      </div>
    </>
  );
};

export default News;
