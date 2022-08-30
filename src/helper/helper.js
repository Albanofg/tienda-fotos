import img1 from '../assets/mdz.jpg';
import img2 from '../assets/mdz2.jpg';
import img3 from '../assets/mdz3.jpg';
import img4 from '../assets/mdz4.jpg';
import img5 from '../assets/mdz5.jpg';
import img6 from '../assets/mdz6.jpg';
import img7 from '../assets/mdz7.jpg';


const productos = [
    {
        id:1,
        name: 'mendoza uno',
        img: [img1],
        year: '2022',
        price: 550,
        stock: "10"
    },
    {
        id:2,
        name: 'mendoza dos',
        img: [img2],
        year: '2022',
        price: 550,
        stock: "12"
    },
    {
        id:3,
        name: 'mendoza tres',
        img: [img3],
        year: '2022',
        price: 550,
        stock: "11"
    },
    {
        id:4,
        name: 'mendoza cuatro',
        img: [img4],
        year: '2022',
        price: 550,
        stock: "8"
    },
    {
        id:5,
        name: 'mendoza cinco',
        img: [img5],
        year: '2022',
        price: 550,
        stock: "9"
    },
    {
        id:6,
        name: 'mendoza seis',
        img: [img6],
        year: '2022',
        price: 550,
        stock: "11"
    },
    {
        id:7,
        name: 'mendoza siete',
        img: [img7],
        year: '2022',
        price: 550,
        stock: "10"
    }
]




const  getFetch = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(productos)
        reject(err=>console.log(err))
    }, 3000)
})

export default getFetch