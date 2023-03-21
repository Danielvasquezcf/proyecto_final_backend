import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Daniel Vasquez',
      email: 'daniel@example.com',
      password: bcrypt.hashSync('asd123'),
      isAdmin: true,
    },
    {
      name: 'Sergio Vasquez',
      email: 'sergio@example.com',
      password: bcrypt.hashSync('123asd'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1', el id lo crea mongodb
      name:"test",
      slug:"test",
      image: "test",
      images: "test",
      category: "test",
      description: "test",
      price: 2,
      countInStock: 2,
    },
    {
      //_id: '2',
      name: 'Remera Negra',
      slug: 'Remera-negra',
      category: 'Remeras',
      image: '../frontend/public/images/Remera Negra.jpg',
      countInStock: 100,
      price: 14.99,
      description: 'Remera 100% algodón, de color negra.',
    },
    {
      //_id: '3',
      name: 'Remera Marrón',
      slug: 'Remera-marron',
      category: 'Remeras',
      image: '../frontend/public/images/Remera Marron.jpg',
      countInStock: 100,
      price: 14.99,
      description: 'Remera 100% algodón, de color marrón.',
    },
    {
      //_id: '4',
      name: 'Short Beige',
      slug: 'short-beige',
      category: 'Shorts',
      image: '../frontend/public/images/Short Beige.jpg',
      countInStock: 0,
      price: 9.99,
      description: 'Short de corte bajo color beige para hombres.',
    },
    {
      //_id: '5',
      name: 'Suéter Rojo',
      slug: 'sueter-rojo',
      category: 'Suéteres',
      image: '../frontend/public/images/Sueter Rojo.jpg',
      countInStock: 100,
      price: 24.99,
      description: 'Suéter color rojo oversize para hombres..',
    },
  ],
};

export default data;
