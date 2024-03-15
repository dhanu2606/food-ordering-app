import Restaurantcard from "./Restaurantcard";
import masterData from "../utils/dummyData";
import Carousel from "./Carousel";
//import {IMG_URL} from "../utils/config";
// import data from "../utils/config";
//import masterData from "../utils/dummyData";
//import Title from "./Title.js";
import { useState, useEffect } from 'react';
import {RES_URL} from "../utils/config";
import Shimmer from "./Shimmer";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//import Category from "./Category";

const Cardcontainer = () => {
      const restaurantdata = masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const collection = masterData[0]?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      const [restaurant, setReataurant] = useState([]);
      const [masterDataState, setMasterDataState] = useState([]);
      const [searchText, setSearchText] = useState([]);
      const [category, setActiveCategory] = useState("");
      //const [carouselpart, setCarouselpart] = useState([]);
      const [erroeMessage, setErrorMessage] = useState("");
      //const [categoryTitle, setCategoryTitle] = useState("");

      const getData = async () => {
            try{
                  const data = await fetch(RES_URL);
                  const json = await data.json();
                  console.log("responseData", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
                  //setCategoryTitle(json?.data?.cards[1]?.card?.card?.header?.title);
                  setReataurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                  setMasterDataState(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                  setCarouselpart(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
            }
            catch(err){
                  console.log("error", err);
                  setErrorMessage("Their is some error while fetching the data , please try again");
            }
      }

      const handleSearchText = (e) => {
            setErrorMessage(e.target.value);
      }

      const searchRestaurant = () => {
            console.log("searchText" , searchText);
            const filteredData = masterData.filter(resItem => resItem?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
            setReataurant(filteredData);
      }

      const handleRating = () => {
            const filteredData = masterDataState.filter(resItem => resItem?.info?.avgRating>4.5);
            if(restaurant!== masterDataState && category === "rating"){
                  handleReset();
            }
      
            else{setReataurant(filteredData);
                  setActiveCategory("rating")
            console.log("filteredData" , filteredData);
            }
      }

      const handleDeliveryTime = () => {
            const filteredData = masterDataState.filter(resItem => resItem?.info?.sla?.deliveryTime<30);
            if(restaurant!== masterDataState && category === "delivery"){
                  handleReset();
            }
      
            else{setReataurant(filteredData);
                  setActiveCategory("delivery");
            console.log("filteredData" , filteredData);
            }
      }
      
      const handleCategory = () => {
            const filteredData = masterDataState.filter(resItem => resItem?.info?.veg);
            setRestaurant(filteredData);
            console.log("filteredData", filteredData);
        
            // if(restaurant!== masterData && category ==="veg"){
            //       handleReset();
            // }
      
            // else{setReataurant(filteredData);
            //       setActiveCategory("veg")
            // console.log("filteredData" , filteredData);
            // }
      }
 
      const handleReset = () => {
            //setActiveCategory("");
            setReataurant(masterDataState);
      }
      
      useEffect (() => {
            console.log("useEffect called")
            getData();
      }, []);

      console.log("component rendered");

      return (
            <>
            <div className="container d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex gap-2">
            <input type="text" value={searchText} onChange={handleSearchText} />
          <button className="btn btn-sm btn-success" onClick={searchRestaurant}>
            Search</button>
            </div>
            {/* <input type="text"  placeholder="search for restaurant and food 🔎" value={searchText} onChange={handleSearchText}/>
            <button className="btn btn-sm btn-success"onClick={searchRestaurant} id="search">🔎Search</button>
            </div> */}

            {/* <div className="container pt-4">
                        <Title title={title}/>
            <div className="d-flex carousel-part">
                  {
                        carouselpart.map((imgData) => {
                              return(
                                    <Carousel img={ imgData?.imageId}
                                    //<Carousel img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imgData?.imageId}
                                    />
                                    )
                              })
                        }
                        </div>
                  </div> */}



<div className="btn-container">
          <button className="btn btn-sm btn-dark mx-1" style={{backgroundColor: category==="rating" ? "green" : "" }} onClick={handleRating}>Rating 4.5+</button>
          <button className="btn btn-sm btn-dark mx-1" style={{backgroundColor: category==="delivery" ? "green" : "" }} onClick={handleDeliveryTime}>Fast delivery</button>
          <button className="btn btn-sm btn-dark mx-1" onClick={handleCategory}>Pure veg</button>
          {category && <button className="btn btn-sm btn-dark mx-1" onClick={handleReset}>Reset</button>}
        </div>
      </div>




                  {/* <div className="btn-container">
                        <button className="btn btn-sm btn-dark mx-1"  style={{backgroundColor: category==="rating" ? "green" : ""}} onClick={handleRating}>Rating 8.5+</button>
                        <button className="btn btn-sm btn-dark mx-1"  style={{backgroundColor:category==="delivery" ? "green" : ""}} onClick={handleDeliveryTime}>Fast delivery</button>
                        <button className="btn btn-sm btn-dark mx-1" onClick={handleCategory}>Pure Veg</button>
                        {category && <button className="btn btn-sm btn-dark mx-1" onClick={handleReset}>Reset</button>}
                  </div>
                  </div> */}


<div className="container pt-4 carousel">
        <div className="d-flex imgscroll">
          {collection.map((imgData) => (
            <Carousel 
              key={imgData?.imageId}
              img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360" + imgData?.imageId}
            />
          ))}
        </div>
      </div>

      <div className="container justify-content-between d-flex mt-4 flex-wrap gap-4">

                 {
                              errorMessage ?
                              <div class="alert alert-danger">
                              <strong>Warning!</strong>{errorMessage}
                              </div>:

                              restaurant.length !==0 ?
                              // <>
                              // <Category title={categoryTitle}/>
                              // <div className="container d-flex flex-wrap mt-4 gap-4">
                              // {
                              restaurant.map((card, index) => (
                                          <Restaurantcard
                                                key={card?.info?.id}
                                                {...card?.info}
                                          />

                                    ))
                  ) : <Shimmer/>
                        }
                  </div>
            </>
            )
            }
      

export default Cardcontainer;