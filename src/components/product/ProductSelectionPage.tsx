import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import Header from "../header/Header";
import ProdSelectorFooter from "../footer/ProdSelectFooter";

import products from "../../data/products.json";
import {
  chipsFor14Inch,
  chipsFor16Inch,
  macBookSizes,
} from "./productConstants";
import { generateSlug } from "../../utils/slugify";

const ProductSelectionPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isScrolled, setIsScrolled] = useState(false);
  const initialSize = searchParams.get("size") || "14-inch";
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [selectedChip, setSelectedChip] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();

  // To manage selected colors for products
  const [selectedColor, setSelectedColor] = useState<{
    [key: number]: string;
  }>({});

  // Handles product selection and navigates to the product details page
  const handleSelect = (product: Product) => {
    const slug = generateSlug(
      product,
      selectedColor[product.id] || product.colorOptions[0]
    );
    navigate(`/${slug}`);
  };

  // Handles color selection for a specific product
  const handleColorSelect = (productId: number, color: string) => {
    setSelectedColor((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  // Gets the currently selected color name for the product
  const getColorName = (product: Product) => {
    const color = selectedColor[product.id] || product.colorOptions[0];
    return color;
  };

  // Gets the MacBook image based on the product size and color
  const getMacbookImage = (product: Product) => {
    const color = getColorName(product);
    return require(`../../assets/images/mbp${product.size
      .toLowerCase()
      .replace("-inch", "")}-${color.toLowerCase().replace(" ", "")}.jpg`);
  };

  // Gets the chip image based on the product chip
  const getChipImage = (product: Product) => {
    return require(`../../assets/images/mbp-${product.chip
      .toLowerCase()
      .replace(" ", "-")}-icon.png`);
  };

  // Filter the products based on selected size and chip
  useEffect(() => {
    const filtered = products.filter((product) => {
      if (product.size !== selectedSize) return false;
      if (selectedChip !== "All" && product.chip !== selectedChip) return false;
      return true;
    });
    setFilteredProducts(filtered);
  }, [selectedSize, selectedChip]);

  // Adjust selected chip when screen size is 16-inch and chip is M3
  useEffect(() => {
    if (selectedSize === "16-inch" && selectedChip === "M3") {
      setSelectedChip(chipOptions[1]);
    }
  }, [selectedSize, selectedChip]);

  // Update URL parameters when selected size changes
  useEffect(() => {
    searchParams.set("size", selectedSize);
    navigate({ search: searchParams.toString() }, { replace: true });
  }, [selectedSize]);

  // Handle scroll event to change sticky section background color
  const handleScroll = () => {
    const sizeFilterPoint = document
      .querySelector(".size-filter")
      ?.getBoundingClientRect().top;

    if (sizeFilterPoint === 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Display the chip filter options for either screen size
  const chipOptions =
    selectedSize === "14-inch" ? chipsFor14Inch : chipsFor16Inch;

  return (
    <>
      <Header />

      <div className="mb-10 desktop:mb-12 py-4 flex flex-col items-center bg-gray-100">
        <p className="text-sm mx-14 text-center desktop:text-start">
          Buy MacBook Pro with education savings. Plus get AirPods.{" "}
          <span className="text-xs">◊◊◊</span>{" "}
          <Link to={"#"} className="text-blue-700">
            <span className="hover:underline">Learn more</span> &gt;
          </Link>
        </p>
      </div>

      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-3xl desktop:text-5xl mx-14 font-medium text-center">
          Choose your new MacBook Pro.
        </h1>
        <div className="mt-6 mx-14">
          <svg
            className="as-svgicon as-svgicon-chat as-svgicon-base as-svgicon-chatbase"
            aria-hidden="true"
            width="35"
            height="35"
          >
            <path fill="none" d="M0 0h35v35H0z"></path>
            <path d="M31.9 17.285a6.576 6.576 0 0 0-1.668-1.997 7.855 7.855 0 0 0-2.467-1.348 8.867 8.867 0 0 0-2.756-.48 2.432 2.432 0 0 0-.27-.01c-.28 0-1.05.01-1.319.03a8.782 8.782 0 0 0-2.187.46 7.854 7.854 0 0 0-2.467 1.348 6.578 6.578 0 0 0-1.667 1.997 5.3 5.3 0 0 0 .11 5.134 5.957 5.957 0 0 0 .948 1.218 6.034 6.034 0 0 0 .859.729.644.644 0 0 0 .13.1 8.883 8.883 0 0 0 2.776 1.248 13.791 13.791 0 0 0 2.877.3c.26 0 .52-.01.789-.03h.07a12.301 12.301 0 0 0 1.448.81 9.498 9.498 0 0 0 1.348.558 3.297 3.297 0 0 0 .999.21.705.705 0 0 0 .49-.16.6.6 0 0 0 .2-.419.728.728 0 0 0-.18-.49c-.14-.16-.3-.38-.5-.648a5.749 5.749 0 0 1-.51-.74.092.092 0 0 1 .03-.12 6.31 6.31 0 0 0 2.557-2.187 5.314 5.314 0 0 0 .959-3.046 5.206 5.206 0 0 0-.599-2.467zm-1.188 4.954a5.288 5.288 0 0 1-2.158 1.837 1.115 1.115 0 0 0-.569.67 1.104 1.104 0 0 0 .11.868c.17.28.34.52.49.73q-.48-.18-1.049-.45a13.684 13.684 0 0 1-1.338-.75 1.076 1.076 0 0 0-.6-.16h-.08c-.25.02-.479.03-.718.03a12.886 12.886 0 0 1-2.628-.27 7.93 7.93 0 0 1-2.087-.868c-.13-.07-.25-.15-.37-.23a5.79 5.79 0 0 1-.549-.43 5.283 5.283 0 0 1-1.099-1.308 4.084 4.084 0 0 1-.579-2.157 4.136 4.136 0 0 1 .49-1.997 5.663 5.663 0 0 1 1.418-1.688 7.324 7.324 0 0 1 2.167-1.188 7.927 7.927 0 0 1 2.257-.41c.14-.02.78-.02.92-.02q.314 0 .628.03a7.746 7.746 0 0 1 2.068.4 7.081 7.081 0 0 1 2.167 1.188 5.484 5.484 0 0 1 1.408 1.688 4.136 4.136 0 0 1 .489 1.998 4.319 4.319 0 0 1-.789 2.487zm-8.84-12.084a11.447 11.447 0 0 0-3.525-1.927 16.318 16.318 0 0 0-4.794-.69 13.182 13.182 0 0 0-4.304.69 11.562 11.562 0 0 0-3.526 1.927 9.308 9.308 0 0 0-2.367 2.856 7.325 7.325 0 0 0-.758 3.505 7.18 7.18 0 0 0 1.268 4.245A9.23 9.23 0 0 0 7.5 23.896c.02.01.06.11.04.14a9.109 9.109 0 0 1-.709 1.079c-.28.38-.52.69-.72.919a1.082 1.082 0 0 0-.25.709.889.889 0 0 0 .28.589 1.011 1.011 0 0 0 .71.23 4.66 4.66 0 0 0 1.418-.29 16.808 16.808 0 0 0 1.927-.809 17.37 17.37 0 0 0 2.008-1.108c.01 0 .15-.08.16-.08.42.03.839.05 1.238.05a16.995 16.995 0 0 0 3.766-.41 4.485 4.485 0 0 0 .52-.16 5.955 5.955 0 0 1-.79-.8 16.027 16.027 0 0 1-3.496.37c-.37 0-.759-.02-1.158-.05h-.08a1.228 1.228 0 0 0-.7.24 16.696 16.696 0 0 1-1.907 1.05 17.063 17.063 0 0 1-1.807.758 4.068 4.068 0 0 1-.97.23c.18-.22.4-.5.65-.839a10.54 10.54 0 0 0 .78-1.188 1.043 1.043 0 0 0 .09-.849 1.123 1.123 0 0 0-.55-.67 8.36 8.36 0 0 1-3.256-2.805 6.2 6.2 0 0 1-1.198-3.685 6.408 6.408 0 0 1 .739-3.036 8.272 8.272 0 0 1 2.117-2.547 10.47 10.47 0 0 1 3.225-1.758 11.976 11.976 0 0 1 3.975-.639 15.197 15.197 0 0 1 4.475.64 10.417 10.417 0 0 1 3.215 1.757 8.41 8.41 0 0 1 1.608 1.718 7.324 7.324 0 0 1 1.149-.09 9.487 9.487 0 0 0-2.128-2.407z"></path>
          </svg>
        </div>
        <p className="text-lg font-medium mx-14">
          Have questions about buying a Mac?
        </p>
        <Link to={"#"} className="text-lg text-blue-700 hover:underline mx-14">
          Chat with a Mac Specialist
        </Link>
      </div>

      {/* Filter by size */}
      <div
        className={`${
          isScrolled ? "bg-gray-50/[0.95]" : "bg-white/[0.95]"
        } sticky top-0 z-10 size-filter`}
      >
        <div className="flex justify-center my-4 py-6">
          <button
            onClick={() => setSelectedSize("14-inch")}
            className={`w-full desktop:w-auto desktop:px-10 ms-7 py-7 rounded-l-xl text-lg font-medium ${
              selectedSize === "14-inch"
                ? "border-2 border-blue-600"
                : "border border-gray-300"
            }`}
          >
            14-inch
          </button>

          <button
            onClick={() => setSelectedSize("16-inch")}
            className={`w-full desktop:w-auto desktop:px-10 me-7 py-7 rounded-r-xl text-lg font-medium ${
              selectedSize === "16-inch"
                ? "border-2 border-blue-600"
                : "border border-gray-300"
            }`}
          >
            16-inch
          </button>
        </div>
      </div>

      {/* Filter by chip */}
      <div className="mx-auto flex flex-col items-center">
        <p className="text-sm mb-10">Filter by chip:</p>

        <div className="flex space-x-5">
          {chipOptions.map((chip) => (
            <button
              key={chip}
              onClick={() => setSelectedChip(chip)}
              className={`px-5 py-2 text-sm font-medium border rounded-full bg-gray-200 focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-blue-600 ${
                selectedChip === chip
                  ? "bg-gray-950 text-white"
                  : "border-gray-300"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* MacBook Model Cards */}
      <div className="desktop:px-6 px-4 desktop:mx-[122px] wide_desktop:mx-[445px] mt-8 desktop:mt-24">
        <div className="container grid gap-5 desktop:grid-cols-3">
          {filteredProducts?.map((product, index) => (
            <div key={index} className="bg-gray-100 px-6 rounded-2xl pb-9">
              <div className="flex justify-center">
                <img
                  width={280}
                  src={getMacbookImage(product)}
                  alt={`${product.size} MacBook Pro`}
                />
              </div>

              <div className="mb-4">
                <span className="text-xs">{getColorName(product)}</span>
                <div className="flex space-x-4 mt-2 ms-1">
                  {product.colorOptions.map((color, index) => (
                    <img
                      key={index}
                      width={26}
                      height={26}
                      onClick={() => handleColorSelect(product.id, color)}
                      className={`rounded-full ${
                        selectedColor[product.id] === color ||
                        (!selectedColor[product.id] && index === 0)
                          ? "border-blue-500 outline outline-offset-2 outline-2 outline-blue-600"
                          : "border-gray-300"
                      }`}
                      src={require(`../../assets/images/${color
                        .toLowerCase()
                        .replace(" ", "")}-cto-hero.jpg`)}
                      alt={color}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <img
                  height={51}
                  width={51}
                  src={getChipImage(product)}
                  alt={product.chip}
                />
              </div>

              <ul className="mb-4">
                {product.specs.map((spec, index) => (
                  <p
                    className="text-2xl font-medium leading-tight tracking-tight"
                    key={index}
                  >
                    {spec}
                  </p>
                ))}
              </ul>

              <ul className="mb-4">
                {product.description.map((desc, index) => (
                  <p className="text-sm mb-1" key={index}>
                    {desc}
                  </p>
                ))}
              </ul>

              <p className="text-xl desktop:text-2xl font-medium mb-2 tracking-tight">
                RM{" "}
                {product.price.toLocaleString("en-MY", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="mb-2">or</p>
              <p className="text-xl desktop:text-2xl font-medium tracking-tight">
                RM {(product.price / 24).toFixed(2)}/mo. for{" "}
                <br className="hidden desktop:block" /> 24 mo.*
              </p>
              <Link
                to={"#"}
                className="text-sm text-blue-700 hover:underline flex"
              >
                Explore monthly instalment options{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 512 512"
                  className="ms-2 self-center fill-blue-700"
                >
                  <path d="M491.841 156.427c-19.471-45.946-51.936-85.013-92.786-112.637C358.217 16.166 308.893-.007 256 0c-35.254-.002-68.946 7.18-99.571 20.158-45.945 19.472-85.013 51.935-112.638 92.785C16.167 153.779-.007 203.104 0 256c-.002 35.255 7.181 68.948 20.159 99.573 19.471 45.946 51.937 85.013 92.786 112.637C153.783 495.834 203.107 512.007 256 512c35.253.002 68.946-7.18 99.571-20.158 45.945-19.471 85.013-51.935 112.638-92.785C495.834 358.22 512.007 308.894 512 256c.002-35.256-7.181-68.948-20.159-99.573zm-31.428 185.83c-16.851 39.781-45.045 73.723-80.476 97.676-35.443 23.953-78.02 37.926-123.936 37.933-30.619-.002-59.729-6.218-86.255-17.454-39.781-16.851-73.724-45.044-97.677-80.475C48.114 344.495 34.14 301.917 34.133 256c.002-30.62 6.219-59.731 17.454-86.257 16.851-39.781 45.045-73.724 80.476-97.676C167.506 48.113 210.084 34.14 256 34.133c30.619.002 59.729 6.218 86.255 17.454 39.781 16.85 73.724 45.044 97.677 80.475 23.953 35.443 37.927 78.02 37.934 123.939-.002 30.619-6.218 59.73-17.453 86.256z" />
                  <path d="M389.594 239.301H272.699V122.406c0-9.222-7.477-16.699-16.699-16.699-9.222 0-16.699 7.477-16.699 16.699v116.895H122.406c-9.222 0-16.699 7.477-16.699 16.699s7.477 16.699 16.699 16.699h116.895v116.895c0 9.222 7.477 16.699 16.699 16.699 9.222 0 16.699-7.477 16.699-16.699V272.699h116.895c9.222 0 16.699-7.477 16.699-16.699s-7.476-16.699-16.699-16.699z" />
                </svg>
              </Link>
              <p className="text-sm font-medium mt-14 desktop:mt-6">
                Add a trade-in
              </p>
              <p className="text-sm mb-1">
                Get credit towards a new Mac when you trade in your eligible
                computer. Or recycle it for free.**
              </p>
              <Link
                to={"#"}
                className="text-sm text-blue-700 hover:underline flex"
              >
                Get started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 512 512"
                  className="ms-2 self-center fill-blue-700"
                >
                  <path d="M491.841 156.427c-19.471-45.946-51.936-85.013-92.786-112.637C358.217 16.166 308.893-.007 256 0c-35.254-.002-68.946 7.18-99.571 20.158-45.945 19.472-85.013 51.935-112.638 92.785C16.167 153.779-.007 203.104 0 256c-.002 35.255 7.181 68.948 20.159 99.573 19.471 45.946 51.937 85.013 92.786 112.637C153.783 495.834 203.107 512.007 256 512c35.253.002 68.946-7.18 99.571-20.158 45.945-19.471 85.013-51.935 112.638-92.785C495.834 358.22 512.007 308.894 512 256c.002-35.256-7.181-68.948-20.159-99.573zm-31.428 185.83c-16.851 39.781-45.045 73.723-80.476 97.676-35.443 23.953-78.02 37.926-123.936 37.933-30.619-.002-59.729-6.218-86.255-17.454-39.781-16.851-73.724-45.044-97.677-80.475C48.114 344.495 34.14 301.917 34.133 256c.002-30.62 6.219-59.731 17.454-86.257 16.851-39.781 45.045-73.724 80.476-97.676C167.506 48.113 210.084 34.14 256 34.133c30.619.002 59.729 6.218 86.255 17.454 39.781 16.85 73.724 45.044 97.677 80.475 23.953 35.443 37.927 78.02 37.934 123.939-.002 30.619-6.218 59.73-17.453 86.256z" />
                  <path d="M389.594 239.301H272.699V122.406c0-9.222-7.477-16.699-16.699-16.699-9.222 0-16.699 7.477-16.699 16.699v116.895H122.406c-9.222 0-16.699 7.477-16.699 16.699s7.477 16.699 16.699 16.699h116.895v116.895c0 9.222 7.477 16.699 16.699 16.699 9.222 0 16.699-7.477 16.699-16.699V272.699h116.895c9.222 0 16.699-7.477 16.699-16.699s-7.476-16.699-16.699-16.699z" />
                </svg>
              </Link>

              <button
                onClick={() => handleSelect(product)}
                className="bg-blue-600 text-white text-sm px-4 py-2 my-6 w-full rounded-lg"
              >
                Select
              </button>

              <p className="text-sm font-medium">Need a moment?</p>
              <p className="text-sm mb-3">
                Keep all your selections by saving this device to Your Saves,
                then come back anytime and pick up right where you left off.
              </p>
              <Link
                to={"#"}
                className="text-sm text-blue-700 hover:underline flex"
              >
                <svg
                  fill="#000000"
                  height="14"
                  width="14"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48.065 48.065"
                  className="me-2 self-center fill-blue-700"
                >
                  <path
                    d="M40.908,0H7.158c-0.553,0-1,0.448-1,1v46.065c0,0.401,0.239,0.763,0.608,0.92c0.369,0.157,0.797,0.078,1.085-0.2
	l16.182-15.582l16.182,15.582c0.189,0.183,0.439,0.28,0.693,0.28c0.132,0,0.266-0.026,0.392-0.08c0.369-0.157,0.608-0.52,0.608-0.92
	V1C41.908,0.448,41.46,0,40.908,0z M39.908,44.714L24.726,30.095c-0.193-0.187-0.443-0.28-0.693-0.28s-0.5,0.093-0.693,0.28
	L8.158,44.714V2h31.75V44.714z"
                  />
                </svg>{" "}
                Save for later
              </Link>

              <div className="mt-10 flex">
                <div className="flex-initial me-2">
                  <svg
                    className="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced"
                    aria-hidden="true"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path fill="none" d="M0 0h25v25H0z" />
                    <path
                      fill="#1d1d1f"
                      d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"
                    />
                  </svg>
                </div>

                <div className="flex-initial text-sm">
                  <p>
                    Order today. Delivers to{" "}
                    <Link to={"#"} className="text-blue-700 underline">
                      55188
                    </Link>
                  </p>
                  <p className="font-medium">Wed 26/06/2024 — Free</p>
                </div>
              </div>

              <div className="mt-4 flex">
                <div className="flex-initial me-2">
                  <svg
                    className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced"
                    aria-hidden="true"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path fill="none" d="M0 0h25v25H0z" />
                    <path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z" />
                    <path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403Zm-1.817-2.091a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z" />
                  </svg>
                </div>

                <div className="flex-initial text-sm">
                  <p>Order now. Pick up, in store:</p>
                  <p>
                    <span className="font-medium">Today</span> at{" "}
                    <Link to={"#"} className="text-blue-700 underline">
                      Apple The Exchange TRX
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center mt-16 desktop:mt-20">
        <h1 className="text-3xl desktop:text-[40px] mx-14 font-medium text-center tracking-tight">
          What's in the Box
        </h1>
      </div>

      <div className="desktop:px-6 px-4 desktop:mx-[122px] wide_desktop:mx-[445px] mt-4 desktop:mt-12">
        <div className="container grid gap-y-5 desktop:grid-cols-3">
          <div className="flex justify-center order-1">
            <img
              src={
                selectedSize === "14-inch"
                  ? require("../../assets/images/mbp14-witb-silver.jpg")
                  : require("../../assets/images/mbp16-witb-spaceblack.jpg")
              }
              alt={`${selectedSize} MacBook Pro`}
            />
          </div>

          <div className="flex justify-center order-3 desktop:order-2">
            <img
              src={
                selectedSize === "14-inch"
                  ? require("../../assets/images/mbp-witb-usb-c-magsafe-cable-silver.jpg")
                  : require("../../assets/images/mbp-witb-usb-c-magsafe-cable-spaceblack.jpg")
              }
              alt={
                selectedSize === "14-inch"
                  ? "USB-C to MagSafe 3 Cable (2m)"
                  : "USB-C to MagSafe 3 Cable (2m)"
              }
            />
          </div>

          <div className="flex justify-center order-5 desktop:order-3">
            <img
              src={
                selectedSize === "14-inch"
                  ? require("../../assets/images/mbp-witb-70w-adapter.jpg")
                  : require("../../assets/images/mbp-witb-140w-adapter.jpg")
              }
              alt={
                selectedSize === "14-inch"
                  ? "USB-C Power Adapter"
                  : "140W USB-C Power Adapter"
              }
            />
          </div>

          <div className="flex justify-center order-2 desktop:order-4 mb-6 desktop:mb-0">
            <p className="text-sm">{`${selectedSize} MacBook Pro`}</p>
          </div>

          <div className="flex justify-center order-4 desktop:order-5 mb-6 desktop:mb-0">
            <p className="text-sm">
              {selectedSize === "14-inch"
                ? "USB-C to MagSafe 3 Cable (2m)"
                : "USB-C to MagSafe 3 Cable (2m)"}
            </p>
          </div>

          <div className="flex justify-center order-6 mb-20 desktop:mb-0">
            <p className="text-sm">
              {selectedSize === "14-inch"
                ? "USB-C Power Adapter"
                : "140W USB-C Power Adapter"}
            </p>
          </div>
        </div>
      </div>

      <div className="desktop:px-6 px-4 desktop:mx-[122px] wide_desktop:mx-[445px] desktop:mt-24">
        <div className="bg-gray-50 px-6 rounded-2xl pt-14">
          <p className="text-2xl desktop:text-3xl font-medium text-center tracking-tight">
            What to consider when choosing your MacBook Pro.
          </p>
          <p className="text-center mt-3 mb-6 desktop:mb-12">
            Configure your laptop on the next step.
          </p>
          <div
            className={`container grid gap-y-10 desktop:gap-10 desktop:px-8 ${
              selectedSize === "14-inch"
                ? "desktop:grid-cols-4"
                : "desktop:grid-cols-3"
            }`}
          >
            {selectedSize === "14-inch" ? (
              <>
                <div>
                  <img
                    width={36}
                    src={require("../../assets/images/mbp-m3-icon.png")}
                    alt="M3 chip"
                  />
                  <p className="text-sm font-medium mt-3 desktop:mt-5">
                    Apple M3 chip
                  </p>
                  <p className="text-sm mt-4 mb-2">
                    M3 brings serious speed and capability to blaze through
                    everyday activities, multitask across apps and video calls,
                    and handle elaborate content in pro apps and games
                  </p>
                  <ul className="list-disc list-outside ms-5">
                    <li className="text-sm mb-2">
                      Run multiple apps, speed through thousands of photos
                    </li>
                    <li className="text-sm mb-2">Effortlessly edit 4K video</li>
                    <li className="text-sm mb-2">
                      Configure with up to 24GB unified memory
                    </li>
                    <li className="text-sm">Supports one external display</li>
                  </ul>
                </div>

                <div>
                  <img
                    width={36}
                    src={require("../../assets/images/mbp-m3-pro-icon.png")}
                    alt="M3 Pro chip"
                  />
                  <p className="text-sm font-medium mt-3 desktop:mt-5">
                    Apple M3 Pro chip
                  </p>
                  <p className="text-sm mt-4 mb-2">
                    Building on the M3 chip, M3 Pro provides even greater
                    performance and additional unified memory for more demanding
                    apps and workflows
                  </p>
                  <ul className="list-disc list-outside ms-5">
                    <li className="text-sm mb-2">
                      Manipulate gigapixel panoramas, compile millions of lines
                      of code
                    </li>
                    <li className="text-sm mb-2">
                      Edit multiple streams of 8K video
                    </li>
                    <li className="text-sm mb-2">
                      Configure with up to 36GB unified memory
                    </li>
                    <li className="text-sm">
                      Supports up to two external displays
                    </li>
                  </ul>
                </div>

                <div>
                  <img
                    width={36}
                    src={require("../../assets/images/mbp-m3-max-icon.png")}
                    alt="M3 Max chip"
                  />
                  <p className="text-sm font-medium mt-3 desktop:mt-5">
                    Apple M3 Max chip
                  </p>
                  <p className="text-sm mt-4 mb-2">
                    M3 Max powers the most extreme workflows with even more CPU
                    and GPU cores, enormous unified memory and an advanced Media
                    Engine
                  </p>
                  <ul className="list-disc list-outside ms-5">
                    <li className="text-sm mb-2">
                      Render intricate 3D content, develop transformer models
                      with billions of parameters
                    </li>
                    <li className="text-sm mb-2">
                      Tackle post-production of 8K video and beyond
                    </li>
                    <li className="text-sm mb-2">
                      Configure with up to 128GB unified memory
                    </li>
                    <li className="text-sm">
                      Supports up to four external displays
                    </li>
                  </ul>
                </div>

                <div>
                  <img
                    width={36}
                    src={require("../../assets/images/memory-icon-mac.png")}
                    alt="Unified Memory"
                  />
                  <p className="text-sm font-medium mt-3 desktop:mt-5">
                    Unified Memory
                  </p>
                  <p className="text-sm mt-4 mb-2">
                    Faster and more efficient than traditional RAM, unified
                    memory is integrated within the M3 family of chips so apps
                    can quickly share data between the CPU, GPU and Neural
                    Engine
                  </p>
                  <ul className="list-disc list-outside ms-5">
                    <li className="text-sm mb-2">
                      Run multiple apps at once while performance remains fast
                      and responsive
                    </li>
                    <li className="text-sm mb-2">
                      Add memory to run more apps simultaneously for faster,
                      more fluid multitasking
                    </li>
                    <li className="text-sm">
                      With M3 Max, MacBook Pro can be configured with up to
                      128GB of memory
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div>
                  <img
                    width={36}
                    src={require("../../assets/images/mbp-m3-pro-icon.png")}
                    alt="M3 Pro chip"
                  />
                  <p className="text-sm font-medium mt-3 desktop:mt-5">
                    Apple M3 Pro chip
                  </p>
                  <p className="text-sm mt-4 mb-2">
                    Building on the M3 chip, M3 Pro provides even greater
                    performance and additional unified memory for more demanding
                    apps and workflows
                  </p>
                  <ul className="list-disc list-outside ms-5">
                    <li className="text-sm mb-2">
                      Manipulate gigapixel panoramas, compile millions of lines
                      of code
                    </li>
                    <li className="text-sm mb-2">
                      Edit multiple streams of 8K video
                    </li>
                    <li className="text-sm mb-2">
                      Configure with up to 36GB unified memory
                    </li>
                    <li className="text-sm">
                      Supports up to two external displays
                    </li>
                  </ul>
                </div>

                <div>
                  <img
                    width={36}
                    src={require("../../assets/images/mbp-m3-max-icon.png")}
                    alt="M3 Max chip"
                  />
                  <p className="text-sm font-medium mt-3 desktop:mt-5">
                    Apple M3 Max chip
                  </p>
                  <p className="text-sm mt-4 mb-2">
                    M3 Max powers the most extreme workflows with even more CPU
                    and GPU cores, enormous unified memory and an advanced Media
                    Engine
                  </p>
                  <ul className="list-disc list-outside ms-5">
                    <li className="text-sm mb-2">
                      Render intricate 3D content, develop transformer models
                      with billions of parameters
                    </li>
                    <li className="text-sm mb-2">
                      Tackle post-production of 8K video and beyond
                    </li>
                    <li className="text-sm mb-2">
                      Configure with up to 128GB unified memory
                    </li>
                    <li className="text-sm">
                      Supports up to four external displays
                    </li>
                  </ul>
                </div>

                <div>
                  <img
                    width={36}
                    src={require("../../assets/images/memory-icon-mac.png")}
                    alt="Unified Memory"
                  />
                  <p className="text-sm font-medium mt-3 desktop:mt-5">
                    Unified Memory
                  </p>
                  <p className="text-sm mt-4 mb-2">
                    Faster and more efficient than traditional RAM, unified
                    memory is integrated within the M3 family of chips so apps
                    can quickly share data between the CPU, GPU and Neural
                    Engine
                  </p>
                  <ul className="list-disc list-outside ms-5">
                    <li className="text-sm mb-2">
                      Run multiple apps at once while performance remains fast
                      and responsive
                    </li>
                    <li className="text-sm mb-2">
                      Add memory to run more apps simultaneously for faster,
                      more fluid multitasking
                    </li>
                    <li className="text-sm">
                      With M3 Max, MacBook Pro can be configured with up to
                      128GB of memory
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>

          <div className="mt-14 desktop:mt-12 pb-8 desktop:pb-12 mb-5">
            <p className="text-xs desktop:text-center">
              Have questions about buying a Mac?{" "}
              <br className="desktop:hidden" />
              <Link to={"#"} className="text-xs text-blue-700 hover:underline">
                Chat with a Mac Specialist.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 w-full py-10 desktop:py-20">
        <h1 className="text-3xl desktop:text-4xl font-medium text-center tracking-tight leading-none">
          Compare Mac models
        </h1>
        <div className="flex justify-center">
          <Link
            to={"#"}
            className="text-lg text-blue-700 hover:underline mt-4 mb-6 desktop:mb-8"
          >
            Choose the best Mac for you
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            width={320}
            src={require(`../../assets/images/mac-compare.png`)}
            alt="Mac compare"
          />
        </div>
      </div>

      <div className="w-full mt-20">
        <div className="flex justify-center mb-8 desktop:mb-12">
          <img
            width={92}
            src={require(`../../assets/images/applecare-hero-bb.jpg`)}
            alt="Apple Care logo"
          />
        </div>
        <h1 className="text-2xl desktop:text-3xl font-medium text-center mb-1 desktop:mb-4">
          AppleCare+ for Mac
        </h1>
        <div className="px-4 desktop:px-56 wide_desktop:px-[550px]">
          <p className="desktop:text-lg">
            Every Mac comes with a{" "}
            <Link to={"#"} className="text-blue-700 underline">
              one-year limited warranty
            </Link>{" "}
            and up to 90 days of{" "}
            <Link to={"#"} className="text-blue-700 underline">
              complimentary technical support
            </Link>
            . AppleCare+ for Mac extends your coverage to three years from your
            AppleCare+ purchase date and adds unlimited incidents of accidental
            damage protection, each subject to a service fee of RM 469 for
            screen damage or external enclosure damage, or RM 1,429 for other
            accidental damage. In addition, you'll get 24/7 priority access to
            Apple experts by chat or phone through{" "}
            <Link to={"#"} className="text-blue-700 underline">
              getsupport.apple.com
            </Link>
            . For complete details, see the{" "}
            <Link to={"#"} className="text-blue-700 underline">
              terms
            </Link>
            .
          </p>
          <div className="flex desktop:justify-center">
            <Link
              to={"#"}
              className="desktop:text-lg text-blue-700 hover:underline mt-1 desktop:mt-2 mb-[70px] desktop:mb-20"
            >
              Learn more about AppleCare+ &gt;
            </Link>
          </div>
        </div>
      </div>

      <ProdSelectorFooter />
    </>
  );
};

export default ProductSelectionPage;
