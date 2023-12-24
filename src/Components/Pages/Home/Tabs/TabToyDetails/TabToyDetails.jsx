import { Link, useLoaderData } from "react-router-dom";
import useSetTitle from "../../../../Hook/useSetTitle/useSetTitle";
import { useState } from "react";

const TabToyDetails = () => {
  // Sample product data
  const product = {
    title: 'Sample Product',

    colors: ['Red', 'Blue', 'Green'],
    sizes: ['Small', 'Medium', 'Large'],
  };

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  console.log(selectedColor)

  const sizeStyles = {
    Small: { width: '150px', height: '100px' },
    Medium: { width: '300px', height: '200px' },
    Large: { width: '400px', height: '260px' },
  };

  // Define styles for different background colors
  const backgroundColors = ['red', 'green ', 'blue'];

  useSetTitle('Tab Toy Details')
  const toyDetail = useLoaderData();
  const { name, price, photo, details } = toyDetail;
  // console.log(toyDetail)

  return (
    <div className="container mx-auto mt-8">
      <div className="md:flex">
        <div className="md:w-[45%]  items-center place-items-center grid"
          style={{ backgroundColor: `${selectedColor}` }}>
          <img
            src={photo}
            alt={product.title}
            className={`h-[200px] w-[300px]  ${backgroundColors[selectedColor]}`}
            style={sizeStyles[selectedSize]}


          />
        </div>
        <div className="md:w-1/2 pl-8">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>{details}</p>
          <p>Price :{price}$</p>

          {/* Color variation */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">Color:</p>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={` bg-[#5dc1d3] text-black px-4 py-2 rounded-md  border ${selectedColor === color ? 'border-gray-800' : 'border-gray-300'
                    } ${color.toLowerCase()}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size variation */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">Size:</p>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`bg-[#5dc1d3] text-black px-4 py-2 rounded-md border ${selectedSize === size ? 'border-gray-800' : 'border-gray-300'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
            <Link to='/'>
              <button className="bg-[#3b86b1] ml-10 text-white px-4 py-2 rounded-md">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TabToyDetails;