import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function First() {

    const Data = [
        {img : "assets/img/gallery/protfolio-img01.png", title : "Solar Energy 01", category : "Solar Energy" },
    
        {img : "assets/img/gallery/protfolio-img02.png", title : "Solar Energy 01", category : "Solar Energy"},
    
        {img : "assets/img/gallery/protfolio-img02.png", title : "Solar Energy 01", category : "Wind Energy"},
    
        {img : "assets/img/gallery/protfolio-img03.png", title : "Solar Energy 01", category : "Hydropower Plants"},
    
        {img : "assets/img/gallery/protfolio-img04.png", title : "Solar Energy 01", category : "Solar Energy 02"},
    
        {img : "assets/img/gallery/protfolio-img05.png", title : "Solar Energy 02", category : "Wind Energy"},
      ]

      const [current, setcurrent] = useState(Data);

      const Filter = (category) =>{
          const arr = [];
          if(category === "All Projects"){
          setcurrent(Data)
          }
          else{
          Data.map((item)=> {
              if(item.category === category){
              arr.push(item);
              }
          })
          setcurrent(arr);
          }
      };

  return (
    <>
        <section id="work" className="pt-120 pb-90" style={{ background: "url(assets/img/bg/aliment-right2.png) no-repeat", backgroundPosition: "right center" }} >
            <div className="container">
                <div className="portfolio ">
                <div className="row align-items-center mb-50 text-center">
                    <div className="col-lg-12">
                    <div className="my-masonry">
                        <div className="button-group filter-button-group ">
                        <button className="active" data-filter="*" onClick={()=> Filter("All Projects")} > All Projects </button>
                        <button data-filter=".seo" onClick={()=> Filter("Solar Energy")} >Solar Energy</button>
                        <button data-filter=".marketing" onClick={()=> Filter("Wind Energy")}  >Wind Energy</button>
                        <button data-filter=".website" onClick={()=> Filter("Hydropower Plants")}  >Hydropower Plants</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid grid row col3">
                    {current.map( (item)=> (
                    <div className="grid-item website col-4">
                        <Link to="/projectsdetail">
                            <figure className="gallery-image">
                            <img src={item.img} alt="img" key={item} />
                            <figcaption>
                                <h4> {item.title} </h4>
                            </figcaption>
                            </figure>
                        </Link>
                    </div>
                  ))}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First