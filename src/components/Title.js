// const Title =({title,title2})=>{
//     return(
//         <>
//         <div className="mukta-medium mt-3">{title}</div>
//         <div className="mukta-medium mt-3">{title2}</div>
//         </>
//     )
// }

// export default Title;



const Title = ({ title, title1 }) => {
    return (
        <>
            <div>
                <div className="title mt-4">
                <p > {title}</p>
                </div>


                <div className="title mt-4">{title1}</div>




            </div>

        </>
    );

}
export default Title;