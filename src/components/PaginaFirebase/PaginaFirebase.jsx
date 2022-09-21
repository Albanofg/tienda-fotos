import {React, useEffect } from 'react';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { dataBase } from '../../Utils/firebase';
import { useState } from 'react';



export const PaginaFirebase = () => {
  const [arregloProductos, setArregloProductos] = useState ([]);


  useEffect(()=>{
    const getData = async () =>{
      const query = collection(dataBase, "tienda-fotos");
      const response = await getDocs(query);
      const docs = response.docs;
      const data = docs.map(doc=>{return{...doc.data(), id:doc.id}})
      setArregloProductos(data);


      // console.log(response);
      // console.log("doc info", docs[0].data());
      // console.log("doc info", docs[0].id);
      // console.log(data, "data")
    }
    getData();
  },[])

  return (
    <div>PaginaFirebase</div>
  )
}


