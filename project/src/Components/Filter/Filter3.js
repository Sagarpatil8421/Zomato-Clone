// import { useState ,useEffect} from "react";
// import React from 'react';
// import Header from "../Common/Header";


// export default function Filter() {
// //     const[restaurants,setRestarants]=useState([])
// //    const [filter, setFilter] = useState({
// //        city_id:'',
// //        cuisine:[],
// //        lcost:'',
// //        hcost:'',
// //        sort:1
// //    })

// //     useEffect(()=>{
// //         fetch('http://localhost:9090/restaurant/filter/1',{
// //             method:'POST',
// //             headers:{'Content-Type':'application/json'},
// //             body:JSON.stringify(filter)
// //         }).then(response=>response.json())
// //           .then(data=>{console.log(data);setRestarants(data.data)})

// //     },[filter])

// //     const handleSort=(sort)=>{
// //       filter.sort=sort;
// //       setFilter({...filter})
// //     }

// //     const handleCost=(lcost,hcost)=>{
// //         filter.lcost=lcost;
// //         filter.hcost=hcost;
// //         setFilter({...filter})
// //       }

// //       const handleCuisine=(e)=>{
// //         if(e.target.checked)
// //            filter.cuisine.push(e.target.name)
       
// //         //setFilter({...filter})
// //       }


//   return (
//     <div>
//         <Header/>
//         <span className="heading">Breakfast Places in Mumbai</span>
    
//         <div style={{ paddingLeft: "15px"}}>
        
//         <div className="small">
//             <div className="filter-options">
//                 <div className="filter-heading">Filters</div>
//                 <div className="Select-Location">Select Location</div>
                
//                 <select className="Rectangle-2236">
//                     <option>Select</option>
//                     <option>Delhi</option>
//                 </select>
               
//                 <div className="Cuisine">Cuisine</div>
//                 <div>
//                     <input type="checkbox" name="North Indian" onChange={(e)=>handleCuisine(e)} />
//                     <span className="checkbox-items">North Indian</span>
//                 </div>
//                 <div>
//                     <input type="checkbox" />
//                     <span className="checkbox-items" name="South Indian">South Indian</span>
//                 </div>
//                 <div>
//                     <input type="checkbox" />
//                     <span className="checkbox-items" name="Chineese">Chineese</span>
//                 </div>
//                 <div>
//                     <input type="checkbox" />
//                     <span className="checkbox-items" name="Fast Food">Fast Food</span>
//                 </div>
//                 <div>
//                     <input type="checkbox" />
//                     <span className="checkbox-items" name="Street Food">Street Food</span>
//                 </div>
               
//                 <div className="Cuisine">Cost For Two</div>
//                 <div>
//                     <input type="radio"  name="cost" onChange={()=>handleCost(0,500)}/>
//                     <span className="checkbox-items">Less than &#8377; 500</span>
//                 </div>
//                 <div>
//                     <input type="radio" name="cost" onChange={()=>handleCost(500,1000)}/>
//                     <span className="checkbox-items">&#8377; 500 to &#8377; 1000</span>
//                 </div>
//                 <div>
//                     <input type="radio" name="cost" onChange={()=>handleCost(1000,1500)}/>
//                     <span className="checkbox-items">&#8377; 1000 to &#8377; 1500</span>
//                 </div>
//                 <div>
//                     <input type="radio" name="cost" onChange={()=>handleCost(1500,2000)}/>
//                     <span className="checkbox-items">&#8377; 1500 to &#8377; 2000</span>
//                 </div>
//                 <div>
//                     <input type="radio" name="cost" onChange={()=>handleCost(2000,3000)}/>
//                     <span className="checkbox-items">&#8377; 2000 +</span>
//                 </div>
               
//                 <div className="Cuisine">Sort</div>
//                 <div>
//                     <input type="radio" name="sort" checked={filter.sort==1} onChange={()=>handleSort(1)}/>
//                     <span className="checkbox-items">Price low to high</span>
//                 </div>
//                 <div>
//                     <input type="radio" name="sort" checked={filter.sort==-1} onChange={()=>handleSort(-1)}/>
//                     <span className="checkbox-items">Price high to low</span>
//                 </div>
//             </div>
//         </div>
    
//         <div className="big vertical">
//             { 
              
                    
//                     restaurants.length > 0 ? restaurants.map((item,index)=>
//                         <div className="Item" key={index}>
//                         <div>
//                             <div className="small-item vertical">
//                                 <img className="img" src={item.thumb} />
//                             </div>
//                             <div className="big-item">
//                                 <div className="rest-name">{item.name}</div>
//                                 <div className="rest-location">{item.locality}</div>
//                                 <div className="rest-address">{item.address}</div>
//                             </div>
//                         </div>
//                         <hr />
//                         <div>
//                             <div className="margin-left">
//                                 <div className="Bakery">CUISINES :{ item.Cuisine.length && item.Cuisine.map((item)=>item.name+" ")} </div>
//                                 <div className="Bakery">COST FOR TWO : &#8377; {item.cost} </div>
//                             </div>
//                         </div>
//                     </div>
//                     ):<div className='noData'>No Data found</div>


//             }
           
           
           
            
//             {/* <div className="pagination">
//                 <a href="#">&laquo;</a>
//                 <a href="#">1</a>
//                 <a href="#">2</a>
//                 <a href="#">3</a>
//                 <a href="#">4</a>
//                 <a href="#">5</a>
//                 <a href="#">6</a>
//                 <a href="#">&raquo;</a>
//             </div> */}
//         </div>
//         </div>
//     </div>
//   )
// }

   