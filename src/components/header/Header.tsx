import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks, othersLinks } from "./headerConstant";

const Header = () => {
  return (
    <header className="bg-white relative border-b-2">
      <div className="desktop:px-6 px-4 desktop:mx-[9px] wide_desktop:mx-96">
        <div className="block desktop:hidden">
          <div className="flex items-center justify-between">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 5 30 32"
              >
                <path d="M13.073 17.683a3.61 3.61 0 0 0-1.725 3.036 3.513 3.513 0 0 0 2.138 3.222 8.394 8.394 0 0 1-1.095 2.262c-.681.981-1.394 1.962-2.478 1.962s-1.364-.63-2.613-.63c-1.22 0-1.653.651-2.644.651s-1.684-.909-2.48-2.024a9.784 9.784 0 0 1-1.662-5.278c0-3.098 2.014-4.74 3.997-4.74 1.053 0 1.931.692 2.592.692.63 0 1.612-.734 2.81-.734a3.758 3.758 0 0 1 3.16 1.58zM9.345 14.79a3.562 3.562 0 0 0 .846-2.22 1.535 1.535 0 0 0-.03-.32 3.569 3.569 0 0 0-2.345 1.208 3.463 3.463 0 0 0-.878 2.159 1.419 1.419 0 0 0 .031.289 1.19 1.19 0 0 0 .217.02 3.094 3.094 0 0 0 2.158-1.136z" />
              </svg>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 5 30 32"
                  >
                    <path d="m14.298 27.202-3.87-3.87A5.514 5.514 0 0 0 11.55 20c0-3.06-2.489-5.55-5.55-5.55C2.94 14.45.45 16.94.45 20c0 3.061 2.49 5.55 5.55 5.55a5.514 5.514 0 0 0 3.332-1.122l3.87 3.87a.775.775 0 1 0 1.096-1.096zM1.55 20A4.455 4.455 0 0 1 6 15.55c2.454 0 4.45 1.997 4.45 4.45S8.454 24.45 6 24.45A4.455 4.455 0 0 1 1.55 20z" />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 5 30 32"
                  >
                    <path d="M11.354 16.028h-1.021A3.423 3.423 0 0 0 7 13.064a3.423 3.423 0 0 0-3.333 2.964h-1.02A2.118 2.118 0 0 0 .53 18.145v7.715a2.119 2.119 0 0 0 2.116 2.117h8.707a2.119 2.119 0 0 0 2.117-2.117v-7.715a2.118 2.118 0 0 0-2.116-2.117zM7 14.163a2.317 2.317 0 0 1 2.222 1.865H4.778A2.317 2.317 0 0 1 7 14.163zm5.37 11.697a1.018 1.018 0 0 1-1.017 1.017H2.647A1.018 1.018 0 0 1 1.63 25.86v-7.715a1.018 1.018 0 0 1 1.017-1.017h8.707a1.018 1.018 0 0 1 1.016 1.017z" />
                  </svg>
                </button>
                <button>
                  <svg width="18" height="18">
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                      d="M2 12h14"
                      className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                    >
                      <animate
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        calcMode="spline"
                        dur="0.24s"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        keyTimes="0;0.5;1"
                        values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                      />
                      <animate
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        calcMode="spline"
                        dur="0.24s"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        keyTimes="0;0.5;1"
                        values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                      />
                    </path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                      d="M2 5h14"
                      className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
                    >
                      <animate
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        calcMode="spline"
                        dur="0.24s"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        keyTimes="0;0.5;1"
                        values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                      />
                      <animate
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        calcMode="spline"
                        dur="0.24s"
                        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                        keyTimes="0;0.5;1"
                        values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                      />
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden desktop:block">
          <div className="flex items-center justify-evenly">
            <nav className="grid grid-flow-col auto-cols-auto gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="44"
                className="mx-[9px]"
              >
                <path d="M13.073 17.683a3.61 3.61 0 0 0-1.725 3.036 3.513 3.513 0 0 0 2.138 3.222 8.394 8.394 0 0 1-1.095 2.262c-.681.981-1.394 1.962-2.478 1.962s-1.364-.63-2.613-.63c-1.22 0-1.653.651-2.644.651s-1.684-.909-2.48-2.024a9.784 9.784 0 0 1-1.662-5.278c0-3.098 2.014-4.74 3.997-4.74 1.053 0 1.931.692 2.592.692.63 0 1.612-.734 2.81-.734a3.758 3.758 0 0 1 3.16 1.58zM9.345 14.79a3.562 3.562 0 0 0 .846-2.22 1.535 1.535 0 0 0-.03-.32 3.569 3.569 0 0 0-2.345 1.208 3.463 3.463 0 0 0-.878 2.159 1.419 1.419 0 0 0 .031.289 1.19 1.19 0 0 0 .217.02 3.094 3.094 0 0 0 2.158-1.136z" />
              </svg>
              {navLinks.map((link) => (
                <Link
                  to={"#"}
                  className="text-gray-600 font-medium text-xs flex items-center mx-[9px]"
                >
                  {link}
                </Link>
              ))}

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="44"
                  className="mx-[9px]"
                >
                  <path d="m14.298 27.202-3.87-3.87A5.514 5.514 0 0 0 11.55 20c0-3.06-2.489-5.55-5.55-5.55C2.94 14.45.45 16.94.45 20c0 3.061 2.49 5.55 5.55 5.55a5.514 5.514 0 0 0 3.332-1.122l3.87 3.87a.775.775 0 1 0 1.096-1.096zM1.55 20A4.455 4.455 0 0 1 6 15.55c2.454 0 4.45 1.997 4.45 4.45S8.454 24.45 6 24.45A4.455 4.455 0 0 1 1.55 20z" />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="44"
                  className="mx-[9px]"
                >
                  <path d="M11.354 16.028h-1.021A3.423 3.423 0 0 0 7 13.064a3.423 3.423 0 0 0-3.333 2.964h-1.02A2.118 2.118 0 0 0 .53 18.145v7.715a2.119 2.119 0 0 0 2.116 2.117h8.707a2.119 2.119 0 0 0 2.117-2.117v-7.715a2.118 2.118 0 0 0-2.116-2.117zM7 14.163a2.317 2.317 0 0 1 2.222 1.865H4.778A2.317 2.317 0 0 1 7 14.163zm5.37 11.697a1.018 1.018 0 0 1-1.017 1.017H2.647A1.018 1.018 0 0 1 1.63 25.86v-7.715a1.018 1.018 0 0 1 1.017-1.017h8.707a1.018 1.018 0 0 1 1.016 1.017z" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="desktop:px-6 px-4 desktop:mx-[122px] wide_desktop:mx-[445px] py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg desktop:text-xl font-medium">MacBook Pro</p>
          </div>

          {/* Has dropdown for mobile screen */}
          <div className="hidden desktop:block">
            <div className="grid grid-flow-col auto-cols-auto">
              {othersLinks.map((link) => (
                <Link
                  to={"#"}
                  className="text-gray-600 font-medium text-xs flex items-center ms-6"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="block desktop:hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 16 9"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.265.835 8 8.167.735.835"
                  shape-rendering="geometricPrecision"
                  vector-effect="non-scaling-stroke"
                >
                  <animate
                    fill="freeze"
                    attributeName="points"
                    begin="indefinite"
                    calcMode="spline"
                    data-chevron-animate="expand"
                    dur="320ms"
                    keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                    keyTimes="0; 0.5; 1"
                    values="15.265 .835 8 8.167 .735 .835; 15.25 4.5 8 4.5 .75 4.5; 15.265 8.165 8 .835 .735 8.165"
                  />
                  <animate
                    fill="freeze"
                    attributeName="points"
                    begin="indefinite"
                    calcMode="spline"
                    data-chevron-animate="collapse"
                    dur="320ms"
                    keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                    keyTimes="0; 0.5; 1"
                    values="15.265 8.165 8 .835 .735 8.165; 15.25 4.5 8 4.5 .75 4.5; 15.265 .835 8 8.167 .735 .835"
                  />
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
