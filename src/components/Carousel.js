
const Carousel=({img})=>{
  return(
      
   
      <div className=" container">
          <img src={img}
          width="150px"
          style={{height:"auto",
          objectFit:"contain" }}
          />
      </div>

  )

}
export default Carousel;

