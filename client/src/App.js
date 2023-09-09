import './App.css';
import Header from './components/header';
// import About from './About';
// import Contact from './Contact';
// import Portfolio from './Portfolio';
 import {useState} from 'react';


function App() {
  // const [page, setPage] = useState('')

  // function showPage() {
  //   if (page === 'Students') {
  //     return <Students />
  //   } else if (page === 'Parents') {
  //     return <Parents />
  //   } else if (page === 'Teachers') {
  //     return <Teachers />
  //   } else {
  //     return <About />
  //   }
  // }
  return (
   
//    <div className="App">
//    <Header page={page} setPage={setPage}/>
//    <main>
//      {showPage()}
//    </main> 
// </div>

<Header />
 
  );
}

export default App;
