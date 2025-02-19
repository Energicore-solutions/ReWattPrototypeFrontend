import React, {useState} from 'react'
import { Link } from 'react-router-dom';


function Portfolio() {

    const Data = [

        {img : "assets/img/gallery/protfolio-img01.png", title : "Hydropower 01", category : "Hydropower Plants" },

        {img : "assets/img/gallery/protfolio-img02.png", title : "Solar Energy 01", category : "Solar Energy"},

        {img : "assets/img/gallery/protfolio-img03.png", title : "Wind Energy01", category : "Wind Energy"},

        {img : "assets/img/gallery/protfolio-img05.png", title : "Solar Energy 02", category : "Solar Energy"},

        {img : "assets/img/gallery/protfolio-img04.png", title : "Hydropower 02", category : "Hydropower Plants"},

        {img : "assets/img/gallery/protfolio-img06.png", title : "Wind Energy02", category : "Wind Energy"},
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
        <section id="work" className="pt-40 pb-70" style={{ background: "url(assets/img/bg/aliment-right2.png) no-repeat", backgroundPosition: "right center" }}>
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                    <h5>PROJECTS DONE</h5>
                    <h2>Our Portfolio</h2>
                    </div>
                </div>
                </div>
                <div className="portfolio ">
                <div className="row align-items-center mb-50 text-center">
                    <div className="col-lg-12">
                    <div className="my-masonry">
                        <div className="button-group filter-button-group ">
                        <button className="active" data-filter="*" onClick={()=> Filter("All Projects")} > All Projects </button>
                        <button data-filter=".seo" onClick={()=> Filter("Solar Energy")} >Solar Energy</button>
                        <button data-filter=".marketing" onClick={()=> Filter("Wind Energy")} >Wind Energy</button>
                        <button data-filter=".website" onClick={()=> Filter("Hydropower Plants")} >Hydropower Plants</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid grid row">
                    {current.map( (item)=> (
                        <div className="grid-item website col-4">
                        <Link to="/projectsdetail">
                            <figure className="gallery-image new" style={{marginTop:"20px"}}>
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

export default Portfolio