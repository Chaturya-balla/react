import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
//import Course from "./components/Course";
//import courses from "./data/courses";
import Products from "./components/Products";
import products from "./data/products";

function App() {

  return (
  <div className="border border-2 border-danger p-2">
    <Navbar></Navbar>
    <Banner></Banner>
    <Feedback></Feedback>
    <Footer></Footer>
    
   <div className="d-flex flex-wrap">
      {
       /* ---- Course Details----
         courses.map((course) => {
          return(
            <Course price={course.price}
             //trainer={course.trainer} 
             duration={course.duration}
             description={course.shortDescription}>
              {course.courseName}
            </Course>
          )
        })*/

      //---Product Details----
      products.map((products) => {
        return(
          
          <Products image={products.images}
          price={products.price}
          description={products.description}>
            {products.title}
          </Products>
        )
      })

      }
    </div> 
    
  </div>
  );
}

export default App;
