import SectionTiltle from "../../../Components/SectionTitle/SectionTiltle";
import featuerimg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
       <SectionTiltle
        subHeading="check it out"
        heading="Featured Item"
       ></SectionTiltle>
       <div className="md:flex justify-center 
       items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuerimg} alt="" />
        </div>
        <div className="md:ml-10 placeholder:">
          <p>Aug 20, 2023</p>
          <p className="uppercase">where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Nisi assumenda esse 
             distinctio asperiores. Numquam iure
              excepturi tempore culpa id sed sequi,
               debitis ipsam illo nesciunt reiciendis 
               provident necessitatibus voluptates 
               soluta adipisci, nihil ut, exercitationem 
               ullam eum? Eius odio amet placeat 
               necessitatibus facere incidunt libero
                accusamus laborum ab labore, itaque
                 quis.</p>
                 <button className="btn btn-outline mt-4 
                 border-b-4 border-0">Order Now</button>
        </div>
       </div>
    </div>
  );
};

export default Featured;