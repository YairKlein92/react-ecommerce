import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.compnent';
const categories = [
  {
    id: 1,
    title: 'concerts',
    imageUrl:
      'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1734029488/concerts_dfdzrg.avif',
    route: 'shop/concerts'
  },
  {
    id: 2,
    title: 'sport',
    imageUrl:
      'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1678869038/cld-sample-3.jpg',
    route: 'shop/sport'

  },
  {
    id: 3,
    title: 'art & comedy',
    imageUrl:
      'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1734030150/art_bz6rkb.jpg',
    route: 'shop/art & comedy'

  },
  {
    id: 4,
    title: 'workshops',
    imageUrl:
      'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1678869038/cld-sample-4.jpg',
      route: 'shop/workshops'

  },
  {
    id: 5,
    title: 'festivals',
    imageUrl:
      'https://res.cloudinary.com/dvbgjm0xm/image/upload/v1734030219/festivals_kvwvwt.jpg',
      route: 'shop/festivals'

  },
];
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
