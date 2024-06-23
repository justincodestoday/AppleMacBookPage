import { Link } from "react-router-dom";

import {
  flatLinks,
  shopAndLearn,
  appleWallet,
  account,
  entertainment,
  appleStore,
  forBusiness,
  forEducation,
  forHealthCare,
  appleValues,
  aboutApple,
} from "./footerConstants";

const ProdSelectorFooter = () => {
  return (
    <footer className="flex bg-gray-100">
      <div className="desktop:px-6 px-4 desktop:mx-[122px] wide_desktop:mx-[445px]">
        <div className="flex items-start flex-col gap-3">
          <p className="text-xs font-light text-gray-950">
            * Monthly pricing is after purchase using credit card interest at 0%
            pa over a 24-month tenure. Monthly pricing is rounded to the nearest
            ringgit and displayed for each product added in the order. Exact
            pricing will be for the whole order and provided by your bank
            subject to your bank's terms and conditions.
          </p>
          <p className="text-xs font-normal text-gray-950">
            ◊◊ Terms & Conditions of 0% interest for 6-, 12- and 24-month
            instalment payment plans
          </p>
          <p className="text-xs font-light text-gray-950">
            0% interest instalment payment plans are available to qualified
            Malaysia residents and provided by participating banks. To qualify
            for the 0% interest for 6-, 12- or 24-month instalment offers, your
            purchase minimum value must be MYR 2,000 or more in a single
            transaction. All purchases on 0% interest instalment plans are
            subject to approval by your credit card issuer. Refer to your credit
            card issuer's website for conditions, fees and charges.
          </p>
          <p className="text-xs font-light text-gray-950">
            Instalment offers are only available to individual customers using
            consumer credit cards. Apple Employee EPP orders, Education Store
            orders, business purchases and institutional purchases are not
            eligible for this offer. Only Visa and Mastercard credit cards are
            eligible for this offer. If your instalment order is not approved by
            your credit card issuer, we will not be informed of the reason.
            Please contact your credit card issuer for further information.
            Purchases will be billed to your account upon order placement. Offer
            is available on advertised or ticketed price.
          </p>
          <p className="text-xs font-light text-gray-950">
            The information is current as of 24 May 2024.
          </p>
          <p className="text-xs font-light text-gray-950">
            ** Trade-in service is provided by Apple's trade-in partners.
            Trade-in value quotes are estimated only and actual values may be
            lower than the estimation. Trade-in values vary based on the
            condition, year and model of your trade-in device. Not all devices
            are eligible for credit. You must be at least the age of majority to
            be eligible to trade in for credit. Trade-in value may be applied
            towards qualifying new device purchase. Actual value awarded is
            based on receipt of a qualifying device matching the description
            provided when the estimate was made. Apple's trade-in partners
            reserve the right to refuse, cancel or limit quantity of any
            trade-in transaction for any reason. More details are available from
            Apple's trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply. For recycling
            eligible equipment Terms and restrictions may apply.
          </p>

          <div className="container ps-4">
            <ol className="list-decimal list-outside">
              <li className="text-xs font-light text-gray-950">
                1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual
                formatted capacity less.
              </li>
              <li className="text-xs font-light text-gray-950">
                The displays on the 14-inch and 16-inch MacBook Pro have rounded
                corners at the top. When measured as a standard rectangular
                shape, the screens are 14.2 inches and 16.2 inches diagonally
                (actual viewable area is less).
              </li>
              <li className="text-xs font-light text-gray-950">
                Testing conducted by Apple in September and October 2023 using
                pre-production 14-inch MacBook Pro systems with Apple M3 Pro,
                12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final Cut Pro
                10.6.9 tested using a 1-minute picture-in-picture project with
                multiple streams of Apple ProRes 422 video at 8192x4320
                resolution and 30 frames per second, as well as a 1-minute
                picture-in-picture project with multiple streams of Apple ProRes
                422 video at 3840x2160 resolution and 29.97 frames per second.
                Performance tests are conducted using specific computer systems
                and reflect the approximate performance of MacBook Pro.
              </li>
              <li className="text-xs font-light text-gray-950">
                Testing conducted by Apple in September and October 2023 using
                pre-production 14-inch MacBook Pro systems with Apple M3 Max,
                16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final Cut
                Pro 10.6.9 tested using a 1-minute picture-in-picture project
                with multiple streams of Apple ProRes 422 video at 8192x4320
                resolution and 30 frames per second, as well as a 1-minute
                picture-in-picture project with multiple streams of Apple ProRes
                422 video at 3840x2160 resolution and 29.97 frames per second.
                Performance tests are conducted using specific computer systems
                and reflect the approximate performance of MacBook Pro.
              </li>
              <li className="text-xs font-light text-gray-950">
                Testing conducted by Apple in September and October 2023 using
                pre-production 16-inch MacBook Pro systems with Apple M3 Pro,
                12-core CPU, 18-core GPU, 36GB of RAM and 512GB SSD, and
                pre-production 14-inch MacBook Pro systems with Apple M3 Pro,
                12-core CPU, 18-core GPU, 18GB of RAM and 1TB SSD. 16-inch
                MacBook Pro systems tested with Apple 140W USB-C Power Adapter
                (Model A2452), and 14-inch MacBook Pro systems tested with Apple
                96W USB-C Power Adapter (Model A2166), both with USB-C to
                MagSafe 3 Cable (Model A2363). Fast-charge testing conducted
                with drained MacBook Pro units. Charge time varies with settings
                and environmental factors; actual results will vary.
              </li>
              <li className="text-xs font-light text-gray-950">
                Testing conducted by Apple in September and October 2023 using
                pre-production 16-inch MacBook Pro systems with Apple M3 Pro,
                12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final Cut Pro
                10.6.9 tested using a 1-minute picture-in-picture project with
                multiple streams of Apple ProRes 422 video at 8192x4320
                resolution and 30 frames per second, as well as a 1-minute
                picture-in-picture project with multiple streams of Apple ProRes
                422 video at 3840x2160 resolution and 29.97 frames per second.
                Performance tests are conducted using specific computer systems
                and reflect the approximate performance of MacBook Pro.
              </li>
              <li className="text-xs font-light text-gray-950">
                Testing conducted by Apple in September and October 2023 using
                pre-production 16-inch MacBook Pro systems with Apple M3 Max,
                16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final Cut
                Pro 10.6.9 tested using a 1-minute picture-in-picture project
                with multiple streams of Apple ProRes 422 video at 8192x4320
                resolution and 30 frames per second, as well as a 1-minute
                picture-in-picture project with multiple streams of Apple ProRes
                422 video at 3840x2160 resolution and 29.97 frames per second.
                Performance tests are conducted using specific computer systems
                and reflect the approximate performance of MacBook Pro.
              </li>
            </ol>
          </div>

          <p className="text-xs font-light text-gray-950">
            *** Apple TV+ offer available to new and qualified returning
            subscribers only. RM 29.90/month after free trial. Only one offer
            per Apple ID and only one offer per family if you're part of a
            Family Sharing group, regardless of the number of devices that you
            or your family purchase. This offer is not available if you or your
            Family have previously accepted an Apple TV+ three-months-free or
            one-year-free offer. Offer valid for three months after eligible
            device is activated. Plan automatically renews until cancelled.
            Restrictions and other{" "}
            <Link className="text-black" to="#">
              terms
            </Link>{" "}
            apply.
          </p>
          <p className="text-xs font-light text-gray-950">
            ^ New subscribers only. RM 29.90/month after free trial. Plan
            automatically renews after trial until cancelled. We use your
            location to show you delivery options faster. <br />
            We use your location to show you delivery options faster. We found
            your location using your IP address or because you entered it during
            a previous visit to Apple.
          </p>
          <div className="w-full border-solid border-b border-gray-300" />
        </div>

        <div className="flex justify-between items-start flex-wrap w-full mt-4 grid grid-cols-5 xxs:flex xxs:flex-col xxs:items-center">
          <div className="flex items-start flex-col gap-4 xxs:items-center xxs:text-center">
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">Shop and Learn</h5>

              {shopAndLearn.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">Apple Wallet</h5>

              {appleWallet.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-start flex-col gap-4 xxs:items-center xxs:text-center">
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">Account</h5>

              {account.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">Entertainment</h5>

              {entertainment.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-start flex-col gap-4 xxs:items-center xxs:text-center">
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">Apple Store</h5>

              {appleStore.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-start flex-col gap-4 xxs:items-center xxs:text-center">
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">For Business</h5>

              {forBusiness.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">For Education</h5>

              {forEducation.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">For Healthcare</h5>

              {forHealthCare.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-start flex-col gap-4 xxs:items-center xxs:text-center">
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">Apple Values</h5>

              {appleValues.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex items-start flex-col gap-2">
              <h5 className="text-xs font-medium">About Apple</h5>

              {aboutApple.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 hover:underline"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start flex-col mt-8 w-full gap-2 xxs:flex xxs:flex-col xxs:items-center">
          <p className="text-xs font-light text-gray-950">
            More ways to shop:{" "}
            <Link className="underline text-blue-700 font-light" to="#">
              Find a retailer
            </Link>{" "}
            near you near you. Or call 1800-80-6419.
          </p>
          <div className="w-full border-solid border-b border-gray-300 mt-2 hidden desktop:block" />
        </div>

        <div className="grid gap-y-5 desktop:grid-cols-6 desktop:mt-4">
          <div className="desktop:col-span-2 order-2 desktop:order-1">
            <p className="text-xs font-light text-gray-950">
              Copyright © 2024 Apple Inc. All rights reserved.
            </p>
          </div>

          <div className="desktop:col-span-3 order-3 desktop:order-2">
            <div className="flex items-center justify-start flex-wrap xxs:justify-center">
              {flatLinks.map((link) => (
                <Link
                  className="text-xs font-light text-gray-950 tracking-wide hover:underline pe-2 me-2 [&:not(:last-of-type)]:border-solid [&:not(:last-of-type)]:border-r [&:not(:last-of-type)]:border-black first-of-type:ps-0 last-of-type:pe-0 xxs:border-r"
                  key={link}
                  to="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="desktop:col-span-1 flex desktop:justify-end order-1 desktop:order-3 mt-4 desktop:mt-0">
            <p className="text-xs font-light text-gray-950">Malaysia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProdSelectorFooter;
