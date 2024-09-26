import { House, Tent, TentTree, TreePalm } from 'lucide-react';

const categories = [
  {
    name: 'Beach',
    icon: <TreePalm />,
  },
  {
    name: 'Villas',
    icon: <House />,
  },
  {
    name: 'Cabins',
    icon: <TentTree />,
  },
  {
    name: 'Tiny Homes',
    icon: <Tent />,
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-semibold text-app/60">Categories</h1>
      <div className="flex gap-4 items-center justify-center">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center justify-center min-h-20 min-w-20 p-2 hover:cursor-pointer hover:bg-app/5 hover:text-app/60 rounded-md"
          >
            {category.icon}
            <h1 className="text-xs">{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
