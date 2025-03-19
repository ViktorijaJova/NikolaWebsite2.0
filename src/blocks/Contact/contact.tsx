import Image from "next/image";
import Link from "next/link";

const ContactBlock = () => {
  return (
    <section className="py-12 pt-20 px-4" id="features-app-section-2">
      <div className="container mx-auto items-center justify-center flex">
        <div className="flex flex-col md:flex-row items-start md:items-center  md:gap-0 gap-10">
          {/* Contact Information */}
          <div className="w-full md:w-[50%] space-y-40">
            <ul className="space-y-7">
              {/* Phone Number */}
              <li>
                <div className="flex items-center ">
                  <div>
                    <h6 className="text-lg font-extralight text-gray-600">
                      Phone number
                    </h6>
                    <p>
                      <Link
                        href="tel:+38972321680"
                        className="text-gray-400 hover:underline"
                      >
                        +389 72 321 680
                      </Link>
                    </p>
                  </div>
                </div>
              </li>

              {/* Email Address */}
              <li>
                <div className="flex items-center space-x-4">
                  <div>
                    <h6 className="text-lg font-extralight text-gray-600">
                      Email Address
                    </h6>
                    <p>
                      <Link
                        href="mailto:nikolajovanovski1993@gmail.com"
                        className="text-gray-400 hover:underline"
                      >
                        nikolajovanovski1993@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </li>

              {/* Instagram Account */}
              <li>
                <div className="flex items-center space-x-4">
                  <div>
                    <h6 className="text-lg font-extralight text-gray-600">
                      Instagram account
                    </h6>
                    <p>
                      <Link
                        href="https://www.instagram.com/nikola__jovanovski/"
                        target="_blank"
                        className="text-gray-400 hover:underline"
                      >
                        nikola__jovanovski
                      </Link>
                    </p>
                  </div>
                </div>
              </li>

              {/* LinkedIn Account */}
              <li>
                <div className="flex items-center space-x-4">
                  <div>
                    <h6 className="text-lg font-extralight text-gray-600">
                      LinkedIn account
                    </h6>
                    <p>
                      <Link
                        href="https://www.linkedin.com/in/nikola-jovanovski-a9816b29b/"
                        target="_blank"
                        className="text-gray-400 hover:underline"
                      >
                        Nikola Jovanovski
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full  text-center">
            <Image
              src="https://res.cloudinary.com/dszkdvuko/image/upload/v1697214253/Kenedi_25_fxxhib.jpg"
              alt="Nikola Jovanovski"
              width={800}
              height={800}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
