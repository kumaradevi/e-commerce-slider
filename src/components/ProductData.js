import one from "../assets/images/shoe-1.jpg"
import formal from "../assets/images/formal.jpg"
import blue from "../assets/images/blue.jpg"
import hike from "../assets/images/hike.jpg"
import black from "../assets/images/black.jpg"
import leather from "../assets/images/leather.jpg"
import party from "../assets/images/party wear.jpg"


export const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 1204 },
      items: 5,
      slidesToSlide: 3 
    },
    desktop: {
      breakpoint: { max: 1204, min: 898 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 898, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
const productdata=[
{
   image:one,
   name:"white shoe",
   price:"Rs.499",
   description:"comfortable to use"
},
{
    image:formal,
    name:"white shoe",
    price:"Rs.699",
    description:"comfortable to use"
 },
 {
    image:blue,
    name:"blue shoe",
    price:"Rs.399",
    description:"comfortable to use"
 },
 {
    image:hike,
    name:"hike shoe",
    price:"Rs.1499",
    description:"comfortable to use"
 },
 {
    image:leather,
    name:"leather shoe",
    price:"Rs.1799",
    description:"comfortable to use"
 },
 {
    image:party,
    name:"party shoe",
    price:"Rs.599",
    description:"comfortable to use"
 },
 {
    image:black,
    name:"black shoe",
    price:"Rs.299",
    description:"comfortable to use"
 },
 {
    image:leather,
    name:"leather shoe",
    price:"Rs.1499",
    description:"comfortable to use"
 },
 {
    image:hike,
    name:"hike shoe",
    price:"Rs.2399",
    description:"comfortable to use"
 },
 {
    image:one,
    name:"trendy shoe",
    price:"Rs.799",
    description:"comfortable to use"
 },
 {
    image:party,
    name:"party shoe",
    price:"Rs.999",
    description:"comfortable to use"
 }

]

export default productdata