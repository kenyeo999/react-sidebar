// import logo from './logo.svg';

import Sidebar from "./components/Sidebar";



export default function App() {
  return (
  
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1 className="title">My React App with sidebar</h1>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique vero itaque id. Voluptatibus vero deserunt iure tempore assumenda? Repellat voluptatem quas commodi suscipit vitae eaque ipsam, similique nihil quae dolorem qui numquam placeat delectus! Laboriosam?</p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  )
}

// export default App;
