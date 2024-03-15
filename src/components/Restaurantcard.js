

import { IMG_URL } from "../utils/config";

const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName}) => {
    // console.log("props", props);
 return (
        <div className="custom-card " >
            <div>
                <img src={IMG_URL+cloudinaryImageId}
                alt="resimage"
                width="100%"
                style={{height:"150px",
                objectFit:"cover"}}/>
            </div>
             <div className="part-description mt-4 ">
                <p><b>{name}</b></p>
                <div className="d-flex justify-content-between ">
                    <p >⭐{avgRating}/10</p>
                    <p className="cui" >{deliveryTime} min</p>

                </div>
                <div>
                <p className="cuisines text-secondary">{cuisines.join(", ")}</p>
                </div>

                <p><b>📍{areaName}</b></p>
            </div>
        </div>




    )
};

export default Restaurantcard;














