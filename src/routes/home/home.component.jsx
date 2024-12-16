import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     title: 'concerts',
  //     imageUrl:
  //       'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1734029488/concerts_dfdzrg.avif',
  //   },
  //   {
  //     id: 2,
  //     title: 'sport',
  //     imageUrl:
  //       'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1678869038/cld-sample-3.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'art & comedy',
  //     imageUrl:
  //       'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1734030150/art_bz6rkb.jpg',
  //   },
  //   {
  //     id: 4,
  //     title: 'workshops',
  //     imageUrl:
  //       'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1678869038/cld-sample-4.jpg',
  //   },
  //   {
  //     id: 5,
  //     title: 'festivals',
  //     imageUrl:
  //       'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1734030219/festivals_kvwvwt.jpg',
  //   },
  // ];

  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
