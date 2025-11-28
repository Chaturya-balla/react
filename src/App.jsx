import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Course from "./components/Course";
import courses from "./data/courses";

function App() {

  return (
  <div className="border border-2 border-danger p-2">
    <Navbar></Navbar>
    <Banner></Banner>
    <Feedback></Feedback>
    <Footer></Footer>
    <div className="d-flex flex-wrap">
      {
        courses.map((course) => {
          return(
            <Course price={course.price}
             trainer={course.trainer} 
             duration={course.duration}
             description={course.shortDescription}>
              {course.courseName}
            </Course>
          )
        })
      }
    </div>
    
  </div>
  );
}

export default App;
