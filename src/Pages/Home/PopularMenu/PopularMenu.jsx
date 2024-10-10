
import SectionTiltle from "../../../Components/SectionTitle/SectionTiltle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  
 

  return (
    <section className="mb-12">
      <SectionTiltle
       heading="from Our Menu"
       subHeading="Popular Items"
      
      >   
      </SectionTiltle>
      <div className="grid md:grid-cols-2 gap-10" >
        {
          popular.map(item => <MenuItem
          key={item._id}
          item={item}
          ></MenuItem>)
        }
      </div>
      <button className="btn btn-outline mt-4 
                 border-b-4 border-0">View Full Menu</button>
    </section>
  );
};

export default PopularMenu;