import React from 'react'
import './styles.css'

// export default function Shop() {
//   return (
//     <div>Shop</div>
//   )
// }
// export function Shop() {
//     return <div className='shop'>
//         <form>
//             <br></br>
//             Name:
//             <input type='text' placeholder='Enter your name'/>
//                 <br></br>

//                 Course:
//                 <input type='text' placeholder='Enter your Password'/>
//                     <br></br>
                
//                 <button className='btn'>Display</button>
            
//         </form>
//     </div>
// }
// ----------------------------------------------------------------------------------------------------------
// export function Shop() {
//     const user = {
//         name: 'Preeti',
//         course: 'MCA',
//         image: 'https://i.pinimg.com/564x/3d/74/63/3d74639d40ae75295fd25719ce35b886.jpg',
//         size: 90
//       }
//     return 
//     <div style={{fontSize:32, color:"red", fontWeight:'bold'}}>
      
//          <img src='./images/photo.webp' style={{width:60, height:60}}/>

//             <br></br>
//             Name:
//             <input type='text' placeholder='Enter your name' style={{padding:10, color:'green'}}/>
//                 <br></br>
//                 {/* <img  src={user.image} alt='Preeti' style={{}}/> */}
               
//       <br></br>
//                 Course:
//                 <input type='text' placeholder='Enter your Password'  style={{padding:10, color:'green'} }/>
//                     <br></br>
                
//                 <button className='btn'>Display</button>
//             <p>{user.name}</p>
//             <p>{user.course}</p>
//             <p>{user.image}</p> 
//             {/* prints the url not the img */}

           
//     </div>
// }

export function Shop() {
    const user = {
        name: 'Preeti',
        course: 'MCA',
        size: 90
      }
    return  <div className='form card'> 
      
         <img src='./images/photo.webp' style={{width:200, height:200}}/>

            <br></br>
            Name:
            <input type='text' placeholder='Enter your name' style={{padding:10, color:'green'}}/>
                <br></br>
                {/* <img  src={user.image} alt='Preeti' style={{}}/> */}
               
      <br></br>
                Course:
                <input type='text' placeholder='Enter your Password'  style={{padding:10, color:'green'} }/>
                    <br></br>
                
                <button className='btn'>Display</button>
            {/* <p>{user.name}</p>
            <p>{user.course}</p>
            <p>{user.image}</p>  */}
            {/* prints the url not the img */}

           
    </div>
}




