import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../header/Header";
import ProdDetailFooter from "../footer/ProdDetailFooter";

import products from "../../data/products.json";
import { parseSlug } from "../../utils/slugify";

const ProductDetailPage = () => {
  // const { id } = useParams();
  // const product = id ? products.find((p) => p.id === parseInt(id)) : null;

  const { productDetails } = useParams();
  const prod = parseSlug(productDetails!);
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = () => {
    const productDetailsPoint = document
      .querySelector(".product-details")
      ?.getBoundingClientRect().top;

    if (productDetailsPoint === 0) {
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

  useEffect(() => {}, []);

  const handleAddToBag = (product: Product) => {
    navigate(`#`);
  };

  const findProduct = ({
    size,
    color,
    chip,
    cpu,
    gpu,
    memory,
    storage,
  }: ProductDetails) => {
    // Find the product
    return products.find((product) => {
      // Match specs with case insensitivity
      const cpuSpec = product.specs.find((spec) =>
        spec.toLowerCase().includes(cpu)
      );
      const gpuSpec = product.specs.find((spec) =>
        spec.toLowerCase().includes(gpu)
      );
      const memorySpec = product.specs.find((spec) =>
        spec.toLowerCase().includes(memory)
      );
      const storageSpec = product.specs.find((spec) =>
        spec.toLowerCase().includes(storage.toLowerCase())
      );

      // Return the match
      return (
        product.size.toLowerCase() === size.toLowerCase() &&
        product.colorOptions
          .map((colorOption) => colorOption.toLowerCase())
          .includes(color.replace("-", " ")) &&
        product.chip.toLowerCase() === chip.toLowerCase() &&
        cpuSpec !== undefined &&
        gpuSpec !== undefined &&
        memorySpec !== undefined &&
        storageSpec !== undefined
      );
    });
  };

  const product = findProduct(prod);
  if (!product) {
    return <div>Product not found</div>;
  }

  const keyword = product.description.find((line) =>
    line.toLowerCase().includes("power adapter")
  );

  const getMacbookImage = (product: Product, prod: ProductDetails) => {
    return require(`../../assets/images/mbp-${product.size
      .toLowerCase()
      .replace("-inch", "")}-${prod.color
      .toLowerCase()
      .replace(" ", "")}-cto-hero.jpg`);
  };

  return (
    <>
      <div className={`fixed desktop:block ${isScrolled ? "z-30" : ""}`}>
        <div className="bg-gray-50 border-2 desktop:fixed desktop:bottom-0 w-full py-5">
          <div className="desktop:px-6 px-4 desktop:mx-32 wide_desktop:mx-96">
            <div className="container grid desktop:grid-cols-2">
              <div className="hidden desktop:block">
                <div className="flex items-start flex-row justify-between">
                  <div className="flex items-start flex-row gap-2">
                    <div className="flex-initial">
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

                  <div className="flex items-start flex-row gap-2">
                    <div className="flex-initial">
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
              </div>

              <div className="flex justify-end">
                <div className="flex items-start flex-row">
                  <div className="flex-initial">
                    <p className="desktop:text-2xl font-medium desktop:text-end tracking-tight">
                      RM{" "}
                      {product.price.toLocaleString("en-MY", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      or
                    </p>
                    <p className="desktop:text-2xl font-medium desktop:text-end tracking-tight">
                      RM {(product.price / 24).toFixed(2)}/mo. for 24 mo.*
                    </p>
                    <Link
                      to={"#"}
                      className="desktop:text-sm text-blue-700 hover:underline tracking-tight flex justify-end"
                    >
                      Explore monthly instalment options{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 512 512"
                        className="ms-2 self-center fill-blue-500 hidden desktop:block"
                      >
                        <path d="M491.841 156.427c-19.471-45.946-51.936-85.013-92.786-112.637C358.217 16.166 308.893-.007 256 0c-35.254-.002-68.946 7.18-99.571 20.158-45.945 19.472-85.013 51.935-112.638 92.785C16.167 153.779-.007 203.104 0 256c-.002 35.255 7.181 68.948 20.159 99.573 19.471 45.946 51.937 85.013 92.786 112.637C153.783 495.834 203.107 512.007 256 512c35.253.002 68.946-7.18 99.571-20.158 45.945-19.471 85.013-51.935 112.638-92.785C495.834 358.22 512.007 308.894 512 256c.002-35.256-7.181-68.948-20.159-99.573zm-31.428 185.83c-16.851 39.781-45.045 73.723-80.476 97.676-35.443 23.953-78.02 37.926-123.936 37.933-30.619-.002-59.729-6.218-86.255-17.454-39.781-16.851-73.724-45.044-97.677-80.475C48.114 344.495 34.14 301.917 34.133 256c.002-30.62 6.219-59.731 17.454-86.257 16.851-39.781 45.045-73.724 80.476-97.676C167.506 48.113 210.084 34.14 256 34.133c30.619.002 59.729 6.218 86.255 17.454 39.781 16.85 73.724 45.044 97.677 80.475 23.953 35.443 37.927 78.02 37.934 123.939-.002 30.619-6.218 59.73-17.453 86.256z" />
                        <path d="M389.594 239.301H272.699V122.406c0-9.222-7.477-16.699-16.699-16.699-9.222 0-16.699 7.477-16.699 16.699v116.895H122.406c-9.222 0-16.699 7.477-16.699 16.699s7.477 16.699 16.699 16.699h116.895v116.895c0 9.222 7.477 16.699 16.699 16.699 9.222 0 16.699-7.477 16.699-16.699V272.699h116.895c9.222 0 16.699-7.477 16.699-16.699s-7.476-16.699-16.699-16.699z" />
                      </svg>
                    </Link>
                  </div>

                  <div className="flex self-start">
                    <button
                      onClick={() => handleAddToBag(product)}
                      className="bg-blue-600 text-white text-sm px-2 desktop:px-4 py-2 mx-5 w-full rounded-lg"
                    >
                      Add to Bag
                    </button>
                  </div>

                  <div className="flex self-start">
                    <svg
                      fill="#000000"
                      height="30"
                      width="30"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48.065 48.065"
                      className="self-center fill-blue-500"
                    >
                      <path
                        d="M40.908,0H7.158c-0.553,0-1,0.448-1,1v46.065c0,0.401,0.239,0.763,0.608,0.92c0.369,0.157,0.797,0.078,1.085-0.2
	l16.182-15.582l16.182,15.582c0.189,0.183,0.439,0.28,0.693,0.28c0.132,0,0.266-0.026,0.392-0.08c0.369-0.157,0.608-0.52,0.608-0.92
	V1C41.908,0.448,41.46,0,40.908,0z M39.908,44.714L24.726,30.095c-0.193-0.187-0.443-0.28-0.693-0.28s-0.5,0.093-0.693,0.28
	L8.158,44.714V2h31.75V44.714z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      <div className="relative">
        <div className="mb-12 py-4 flex flex-col items-center bg-gray-100 tracking-normal">
          <p className="text-sm mx-14 text-center desktop:text-start">
            Pay 0% interest for up to 24 months. Terms apply.{" "}
            <span className="text-xs">◊◊</span>{" "}
            <Link to={"#"} className="text-blue-700">
              <span className="hover:underline">Learn more</span> &gt;
            </Link>
          </p>
        </div>
      </div>

      <div className="desktop:px-6 px-4 desktop:mx-[122px] wide_desktop:mx-[445px] product-details">
        <h1 className="desktop:hidden text-3xl font-semibold tracking-tight">
          Customise your {product.size} MacBook Pro -{" "}
          <span className="capitalize">{prod.color}</span>
        </h1>

        <div className="grid desktop:grid-cols-5">
          <div className="desktop:col-span-2 mt-8">
            <div className="desktop:sticky desktop:top-0">
              <div className="mx-24 desktop:mx-0">
                <img
                  src={getMacbookImage(product, prod)}
                  alt={`${product.size} MacBook Pro`}
                />
              </div>

              <div className="flex justify-center my-8">
                <Link to={"#"} className="text-blue-700 hover:underline flex">
                  View gallery{" "}
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
              </div>

              <div className="flex flex-row">
                <div className="w-full hidden desktop:block">
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-1">
                      <svg
                        width="35"
                        height="35"
                        aria-hidden="true"
                        className="as-svgicon as-svgicon-shipping as-svgicon-base as-svgicon-shippingbase"
                      >
                        <path fill="none" d="M0 0h35v35H0z" />
                        <path d="m27.687 10.547-9-4.852a2.5 2.5 0 0 0-2.373 0l-9 4.852A2.5 2.5 0 0 0 6 12.748v9.471a2.494 2.494 0 0 0 1.313 2.2l9 4.852a2.5 2.5 0 0 0 2.373 0l9-4.852a2.5 2.5 0 0 0 1.314-2.2v-9.471a2.5 2.5 0 0 0-1.313-2.201zm-10.9-3.971a1.5 1.5 0 0 1 1.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446 9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 0 1 7 22.219v-9.471a1.494 1.494 0 0 1 .069-.436L17 17.957v10.516a1.494 1.494 0 0 1-.212-.082zM28 22.219a1.5 1.5 0 0 1-.788 1.32l-9 4.851a1.481 1.481 0 0 1-.212.082V17.957l9.931-5.646a1.5 1.5 0 0 1 .069.436z" />
                      </svg>
                    </div>

                    <p className="text-sm text-center mb-2">Free delivery</p>
                  </div>
                </div>

                <div className="w-full hidden desktop:block">
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-1">
                      <svg
                        width="35"
                        height="35"
                        aria-hidden="true"
                        className="as-svgicon as-svgicon-return as-svgicon-base as-svgicon-returnbase"
                      >
                        <path fill="none" d="M0 0h35v35H0z" />
                        <path
                          fill="none"
                          d="m12.249 9.022-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zm15.073 2.485c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 0 0-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 0 1-.5.5H7v3.219a1.5 1.5 0 0 0 .788 1.32l9 4.852a1.494 1.494 0 0 0 .212.082V17.957l-9.931-5.645a1.494 1.494 0 0 0-.069.436V18h3.3a.5.5 0 0 1 .5.5zm7.2-.543v10.515a1.481 1.481 0 0 0 .212-.082l9-4.851a1.5 1.5 0 0 0 .788-1.32v-9.471a1.5 1.5 0 0 0-.069-.436z"
                        />
                        <path d="m27.687 10.547-9-4.852a2.5 2.5 0 0 0-2.373 0l-9 4.852A2.5 2.5 0 0 0 6 12.748V17h1v-4.252a1.494 1.494 0 0 1 .069-.436L17 17.957v10.516a1.494 1.494 0 0 1-.212-.082l-9-4.852A1.5 1.5 0 0 1 7 22.219V20H6v2.219a2.494 2.494 0 0 0 1.313 2.2l9 4.852a2.5 2.5 0 0 0 2.373 0l9-4.852a2.5 2.5 0 0 0 1.314-2.2v-9.471a2.5 2.5 0 0 0-1.313-2.201zm-10.9-3.971a1.5 1.5 0 0 1 1.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 0 1-.788 1.32l-9 4.851a1.481 1.481 0 0 1-.212.082V17.957l9.931-5.646a1.5 1.5 0 0 1 .069.436z" />
                        <path d="m2.507 18 1.646-1.646a.5.5 0 0 0-.707-.707l-2.5 2.5a.5.5 0 0 0 0 .707l2.5 2.5a.5.5 0 1 0 .707-.707L2.507 19H6v-1zm7.793 1a.5.5 0 0 0 0-1H7v1zM6 18h1v1H6z" />
                      </svg>
                    </div>

                    <p className="text-sm text-center">Free and easy returns</p>
                  </div>
                </div>
              </div>

              <div className="w-full hidden desktop:block mt-5">
                <div>
                  <p className="tracking-tight text-center">
                    Have questions about buying a Mac?
                  </p>

                  <Link
                    to={"#"}
                    className="text-blue-700 hover:underline flex justify-center"
                  >
                    Chat with a Mac Specialist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="desktop:col-span-3 desktop:ms-24">
            <h1 className="hidden desktop:block text-4xl font-semibold mb-3">
              Customise your {product.size} MacBook Pro -{" "}
              <span className="capitalize">{prod.color}</span>
            </h1>

            <p className="mb-3 tracking-tight">
              Apple <span className="capitalize">{prod.chip}</span> chip with{" "}
              {prod.cpu} CPU, {prod.gpu} GPU and 16‑core Neural Engine
            </p>
            <p className="mb-3 tracking-tight">{prod.memory} unified memory</p>
            <p className="mb-3 tracking-tight">
              <span className="uppercase">{prod.storage}</span> SSD storage
            </p>
            <p className="mb-3 tracking-tight">
              {product.size} Liquid Retina XDR display²
            </p>
            {keyword ? <p className="mb-3 tracking-tight">{keyword}</p> : <></>}

            <p className="mb-3 tracking-tight">
              {prod.chip === "m3"
                ? "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port"
                : "Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port"}
            </p>

            <p className="mb-3 tracking-tight">
              Backlit Magic Keyboard with Touch ID - US English
            </p>

            <div className="w-full border-solid border-b border-gray-300 my-5" />

            <p className="mb-3 tracking-tight font-medium">Add a trade-in</p>

            <p className="mb-3 tracking-tight">
              Get credit towards a new Mac when you trade in your eligible
              computer. Or recycle it for free.**
            </p>

            <Link to={"#"} className="text-blue-700 hover:underline flex">
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

            <div className="w-full border-solid border-b border-gray-300 my-5" />

            <p className="text-lg font-medium mb-1 tracking-tight">
              Chip (Processor)
            </p>

            <Link to={"#"} className="text-blue-700 hover:underline flex">
              Which chip is right for you?{" "}
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

            <>
              <button className="border border-gray-500 rounded-xl w-full mt-3 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 p-4 font-medium text-lg text-start">
                    Apple M3 Max chip with 14-core CPU, 30-core GPU and 16-core
                    Neural Engine
                  </p>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 p-4 font-medium text-lg text-start">
                    Apple M3 Max chip with 16-core CPU, 40-core GPU and 16-core
                    Neural Engine
                  </p>
                  <div className="flex items-center font-medium text-lg p-4">
                    <p>+ RM 1,200.00</p>
                  </div>
                </div>
              </button>
            </>

            <div className="p-3">
              <p className="text-lg text-gray-500">
                Select M3 Max with 30-core GPU to add 96GB of memory. Select M3
                Max with 40-core GPU to add 48GB, 64GB, or 128GB.
              </p>
            </div>

            <p className="text-lg font-medium mb-1 tracking-tight">Memory</p>

            <Link to={"#"} className="text-blue-700 hover:underline flex">
              How much memory is right for you?{" "}
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

            <>
              <button className="border border-gray-500 rounded-xl w-full mt-3 cursor-auto opacity-50">
                <div className="flex justify-between">
                  <p className="p-4 font-medium text-lg text-start">
                    Based on your configuration, we've selected 36GB unified
                    memory. Please review this selection.
                  </p>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    36GB unified memory
                  </p>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 cursor-auto opacity-50">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    48GB unified memory
                  </p>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 cursor-auto opacity-50">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    64GB unified memory
                  </p>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    96GB unified memory
                  </p>
                  <div className="flex items-center font-medium text-lg p-4">
                    <p>+ RM 3,200.00</p>
                  </div>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 cursor-auto opacity-50">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    128GB unified memory
                  </p>
                </div>
              </button>
            </>

            <div className="p-3">
              <p className="text-lg text-gray-500">
                96GB available with M3 Max with 30-core GPU. 48GB, 64GB, or
                128GB available with M3 Max with 40-core GPU.
              </p>
            </div>

            <p className="text-lg font-medium mb-1 tracking-tight">Storage</p>

            <Link to={"#"} className="text-blue-700 hover:underline flex">
              How much storage is right for you?{" "}
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

            <>
              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    1TB SSD Storage
                  </p>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    2TB SSD Storage
                  </p>
                  <div className="flex items-center font-medium text-lg p-4">
                    <p>+ RM 1,600.00</p>
                  </div>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    4TB SSD Storage
                  </p>
                  <div className="flex items-center font-medium text-lg p-4">
                    <p>+ RM 4,000.00</p>
                  </div>
                </div>
              </button>

              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="w-1/2 px-4 py-6 font-medium text-lg text-start">
                    8TB SSD Storage
                  </p>
                  <div className="flex items-center font-medium text-lg p-4">
                    <p>+ RM 8,800.00</p>
                  </div>
                </div>
              </button>

              <p className="text-lg font-medium mb-1 tracking-tight mt-5">
                Keyboard Language
              </p>

              <Link to={"#"} className="text-blue-700 hover:underline flex">
                Learn more{" "}
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

              <button className="border border-gray-500 rounded-xl w-full mt-5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <div className="flex justify-between">
                  <p className="px-4 py-4 font-medium text-lg text-gray-500 text-start">
                    Backlit Magic Keyboard with Touch ID - US English
                  </p>
                </div>
              </button>

              <div className="rounded-xl w-full bg-gray-50 p-6 mt-10 mb-2">
                <div>
                  <p className="text-sm tracking-tight font-medium">
                    Need a moment?
                  </p>

                  <p className="text-sm mb-3 tracking-tight">
                    Keep all your selections by saving this device to Your
                    Saves, then come back anytime and pick up right where you
                    left off.
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
                </div>
              </div>

              <div className="w-full mt-10 mb-2 desktop:hidden">
                <div>
                  <p className="text-sm tracking-tight text-center">
                    Have questions about buying a Mac?
                  </p>

                  <Link
                    to={"#"}
                    className="text-sm text-blue-700 hover:underline flex justify-center"
                  >
                    Chat with a Mac Specialist
                  </Link>
                </div>
              </div>

              <div className="w-full desktop:hidden">
                <div className="flex flex-col">
                  <div className="flex justify-center mb-1">
                    <svg
                      width="35"
                      height="35"
                      aria-hidden="true"
                      className="as-svgicon as-svgicon-shipping as-svgicon-base as-svgicon-shippingbase"
                    >
                      <path fill="none" d="M0 0h35v35H0z" />
                      <path d="m27.687 10.547-9-4.852a2.5 2.5 0 0 0-2.373 0l-9 4.852A2.5 2.5 0 0 0 6 12.748v9.471a2.494 2.494 0 0 0 1.313 2.2l9 4.852a2.5 2.5 0 0 0 2.373 0l9-4.852a2.5 2.5 0 0 0 1.314-2.2v-9.471a2.5 2.5 0 0 0-1.313-2.201zm-10.9-3.971a1.5 1.5 0 0 1 1.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-4.538 2.446 9.651 5.566-4.4 2.5-9.823-5.58c.038-.026.07-.059.111-.081zM7.788 23.539A1.5 1.5 0 0 1 7 22.219v-9.471a1.494 1.494 0 0 1 .069-.436L17 17.957v10.516a1.494 1.494 0 0 1-.212-.082zM28 22.219a1.5 1.5 0 0 1-.788 1.32l-9 4.851a1.481 1.481 0 0 1-.212.082V17.957l9.931-5.646a1.5 1.5 0 0 1 .069.436z" />
                    </svg>
                  </div>

                  <p className="text-sm text-center mb-2">Free delivery</p>
                </div>
              </div>

              <div className="w-full desktop:hidden">
                <div className="flex flex-col">
                  <div className="flex justify-center mb-1">
                    <svg
                      width="35"
                      height="35"
                      aria-hidden="true"
                      className="as-svgicon as-svgicon-return as-svgicon-base as-svgicon-returnbase"
                    >
                      <path fill="none" d="M0 0h35v35H0z" />
                      <path
                        fill="none"
                        d="m12.249 9.022-4.461 2.4c-.041.022-.073.055-.111.081l9.823 5.588 4.4-2.5zm15.073 2.485c-.038-.025-.069-.058-.11-.081l-9-4.852a1.5 1.5 0 0 0-1.424 0l-3.5 1.889 9.628 5.55zM10.8 18.5a.5.5 0 0 1-.5.5H7v3.219a1.5 1.5 0 0 0 .788 1.32l9 4.852a1.494 1.494 0 0 0 .212.082V17.957l-9.931-5.645a1.494 1.494 0 0 0-.069.436V18h3.3a.5.5 0 0 1 .5.5zm7.2-.543v10.515a1.481 1.481 0 0 0 .212-.082l9-4.851a1.5 1.5 0 0 0 .788-1.32v-9.471a1.5 1.5 0 0 0-.069-.436z"
                      />
                      <path d="m27.687 10.547-9-4.852a2.5 2.5 0 0 0-2.373 0l-9 4.852A2.5 2.5 0 0 0 6 12.748V17h1v-4.252a1.494 1.494 0 0 1 .069-.436L17 17.957v10.516a1.494 1.494 0 0 1-.212-.082l-9-4.852A1.5 1.5 0 0 1 7 22.219V20H6v2.219a2.494 2.494 0 0 0 1.313 2.2l9 4.852a2.5 2.5 0 0 0 2.373 0l9-4.852a2.5 2.5 0 0 0 1.314-2.2v-9.471a2.5 2.5 0 0 0-1.313-2.201zm-10.9-3.971a1.5 1.5 0 0 1 1.424 0l9 4.852c.041.022.072.055.11.081l-4.41 2.507-9.628-5.55zm-9.11 4.932c.038-.026.07-.059.111-.081l4.461-2.4 9.651 5.561-4.4 2.5zM28 22.219a1.5 1.5 0 0 1-.788 1.32l-9 4.851a1.481 1.481 0 0 1-.212.082V17.957l9.931-5.646a1.5 1.5 0 0 1 .069.436z" />
                      <path d="m2.507 18 1.646-1.646a.5.5 0 0 0-.707-.707l-2.5 2.5a.5.5 0 0 0 0 .707l2.5 2.5a.5.5 0 1 0 .707-.707L2.507 19H6v-1zm7.793 1a.5.5 0 0 0 0-1H7v1zM6 18h1v1H6z" />
                    </svg>
                  </div>

                  <p className="text-sm text-center mb-10">
                    Free and easy returns
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      <div className="relative hidden desktop:block">
        <div className="desktop:px-24 wide_desktop:px-[420px]">
          <img
            src={require("../../assets/images/apple-tv-plus-mac-argylle.jpg")}
            alt="Argylle Promo"
          />
          <div className="w-full desktop:w-[350px] desktop:ms-16 absolute top-0 bottom-0">
            <div className="absolute inset-0 flex flex-col justify-center text-center desktop:text-start">
              <div className="flex justify-center desktop:justify-start">
                <img
                  src={require("../../assets/images/apple-tv-plus-logo-standard.png")}
                  alt="Apple TV Plus Logo"
                  className="w-14"
                />
              </div>

              <p className="text-2xl desktop:text-4xl text-white text-center desktop:text-start font-medium tracking-tight mt-5">
                Get 3 months of Apple TV+ free when you buy a Mac. ***
              </p>
              <div className="mt-5">
                <Link
                  to={"#"}
                  className="text-lg text-sky-500 hover:underline me-8"
                >
                  Try it free^&gt;
                </Link>
                <Link to={"#"} className="text-lg text-sky-500 hover:underline">
                  Learn more&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative desktop:hidden">
        <div className="desktop:px-24 wide_desktop:px-[420px]">
          <img
            src={require("../../assets/images/apple-tv-plus-mac-argylle-2.jpg")}
            alt="Argylle Promo"
          />
          <div className="w-full desktop:w-[350px] desktop:ms-16 absolute top-0 bottom-0">
            <div className="absolute inset-0 flex flex-col justify-start text-center desktop:text-start">
              <div className="flex justify-center desktop:justify-start">
                <img
                  src={require("../../assets/images/apple-tv-plus-logo-standard.png")}
                  alt="Apple TV Plus Logo"
                  className="w-14"
                />
              </div>

              <p className="text-2xl desktop:text-4xl text-white text-center desktop:text-start font-medium tracking-tight mt-5">
                Get 3 months of Apple TV+ free when you buy a Mac. ***
              </p>
              <div className="mt-5">
                <Link
                  to={"#"}
                  className="text-lg text-sky-500 hover:underline me-8"
                >
                  Try it free^&gt;
                </Link>
                <Link to={"#"} className="text-lg text-sky-500 hover:underline">
                  Learn more&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProdDetailFooter />
    </>
  );
};

export default ProductDetailPage;
