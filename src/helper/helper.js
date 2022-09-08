import img1 from '../assets/mdz.jpg';
import img2 from '../assets/mdz2.jpg';
import img3 from '../assets/mdz3.jpg';
import img4 from '../assets/mdz4.jpg';
import img5 from '../assets/bird.JPG';
import img6 from '../assets/rain.JPG';
import img7 from '../assets/polaroid.JPG';
import img8 from '../assets/albums1.JPG';
import img9 from '../assets/albums2.JPG';
import img10 from '../assets/albums3.JPG';
import img11 from '../assets/bokeh1.JPG';
import img12 from '../assets/bokeh2.JPG';
import img13 from '../assets/bokeh3.JPG';
import img14 from '../assets/skate1.JPG';
import img15 from '../assets/skate2.JPG';
import img16 from '../assets/skate3.JPG';
import img17 from '../assets/cortaderas.JPG';
import img18 from '../assets/villavicencio.JPG';

const productos = [
    {
        id:'1',
        name: 'ruins',
        img: [img1],
        year: '2022',
        price: 550,
        stock: "10"
    },
    {
        id:'2',
        name: 'mountains',
        img: [img2],
        year: '2022',
        price: 550,
        stock: "12"
    },
    {
        id:'3',
        name: 'potrerillos',
        img: [img3],
        year: '2022',
        price: 550,
        stock: "11"
    },
    {
        id:'4',
        name: 'paramillos',
        img: [img4],
        year: '2022',
        price: 550,
        stock: "8"
    },
    {
        id:'5',
        name: 'bird',
        img: [img5],
        year: '2020',
        price: 550,
        stock: "12"
    },
    {
        id:'6',
        name: 'rain',
        img: [img6],
        year: '2020',
        price: 550,
        stock: "8"
    },
    {
        id:'7',
        name: 'albums uno',
        img: [img8],
        year: '2015',
        price: 550,
        stock: "10"
    },
    {
        id:'8',
        name: 'albums dos',
        img: [img9],
        year: '2015',
        price: 550,
        stock: "10"
    },
    {
        id:'9',
        name: 'albums tres',
        img: [img10],
        year: '2015',
        price: 550,
        stock: "10"
    },
    {
        id:'10',
        name: 'bokeh uno',
        img: [img11],
        year: '2017',
        price: 550,
        stock: "8"
    },
    {
        id:'11',
        name: 'bokeh dos',
        img: [img12],
        year: '2017',
        price: 550,
        stock: "8"
    },
    {
        id:'12',
        name: 'bokeh tres',
        img: [img13],
        year: '2017',
        price: 550,
        stock: "8"
    },
    {
        id:'13',
        name: 'skate uno',
        img: [img14],
        year: '2019',
        price: 550,
        stock: "6"
    },
    {
        id:'14',
        name: 'skate dos',
        img: [img15],
        year: '2019',
        price: 550,
        stock: "6"
    },
    {
        id:'15',
        name: 'skate tres',
        img: [img16],
        year: '2019',
        price: 550,
        stock: "6"
    }, 
    {
        id:'16',
        name: 'polaroid',
        img: [img7],
        year: '2020',
        price: 550,
        stock: "14"
    },
    {
        id:'17',
        name: 'cortaderas',
        img: [img17],
        year: '2022',
        price: 550,
        stock: "20"
    },
    {
        id:'18',
        name: 'villavicencio',
        img: [img18],
        year: '2022',
        price: 550,
        stock: "20"
    }

]




const  getFetch = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(productos)
        reject(err=>console.log(err))
    })
})

export default getFetch