
import React, { useState, useEffect } from 'react';
import './App.css';
import RoutesApp from './routesapp';


// function Linha(props){
//  return (<tr><td>{props.nome}</td></tr>);
// }

// function Linha({nome}){
//   return (<tr><td>{nome ? nome : "Default"}</td></tr>);
//  }
 
// function App() {
//   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  
//   return (
      
//       <div>
//           {names.map((name)=>(
//             <><span id={name} key={name}>{name}</span><br></br></>
//           ))}

//         <div>
//           <button onClick={clickPrincipal}>Enviar</button>
//         </div>
//       </div>

      


//     // <table>
//     //   <th>
//     //     Tabela
//     //   </th>
//     //   <tbody>
//     //     <Linha nome=""/>
//     //     <Linha nome="Eva"/>
//     //     <Linha nome="Clarrisa"/>
//     //   </tbody>
//     // </table>
//   );
// }

// function App(){
//   const [likes, setLikes] = React.useState(0);

//   function handleClick() {
//     setLikes(likes + 1);
//   }

//   return(
//     <div>
//       <button onClick={handleClick}>Likes ({likes})</button>
//     </div>
//   );
// }

// function App(){

//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//      fetch('https://retoolapi.dev/eibPgA/data')
//         .then((response) => response.json())
//         .then((data) => {
//            console.log(data);
//            setPosts(data);
//         })
//         .catch((err) => {
//            console.log(err.message);
//         });
//   }, [])
        
//   return(
//     <div className="posts-container">
//       {posts.map((post) => {
//          return (
//             <div className="post-card" key={post.id}>
//                <h2 className="post-title">{post.nome}</h2>
//                <p className="post-body">{post.Idade}</p>
//                <div className="button">
//                <div className="delete-btn">Delete</div>
//                </div>
//             </div>
//          );
//       })}
//    </div>
//   );

function App(){
  return (
    <div className='app'>
        <RoutesApp />
    </div>
  );
}


export default App;
