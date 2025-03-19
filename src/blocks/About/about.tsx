import React from "react";
import Image from "next/image";

interface BlockComponentProps {
  imageUrl?: string;
}

const AboutBlock: React.FC<BlockComponentProps> = ({ imageUrl }) => {
  return (
    <section>
      <div id="features-app-section-3" className="bg-gray-100 py-10 pt-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <div>
              <ul>
                <h6 className="text-xl font-bold text-gray-500 mb-2">Hi</h6>
                <p className="text-gray-500 leading-9">
                  I'm an enterprising young professional. <br />
                  I'm motivated, task-oriented efficient and my knowledge and
                  creative abilities are very strong. <br />
                  I think in terms of results and objectives, I am resourceful,
                  creative, inventive, and organized. <br />I have a proactive
                  attitude and find positive ways to engage with people, with
                  experience handling all aspects of design and product
                  development.
                </p>
              </ul>
            </div>
            <div className="text-center">
              <Image
                width={500}
                height={250}
                src={
                  "https://res.cloudinary.com/dszkdvuko/image/upload/v1697214197/nikola_mlhe9k.jpg"
                }
                alt="Professional"
                className=""
              />
            </div>
          </div>
        </div>

        <div id="about-team" className="py-10 text-gray-600 pt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <div className="space-y-4 leading-7">
                  <h3 className="text-2xl font-bold">Work experience</h3>
                  <h4 className="text-xl">Creative Director - Bella.mk</h4>
                  <h6 className="text-gray-500">Oct. 2020 - present</h6>
                  <p className="text-gray-700">
                    Designing all the four main lines of the heritage fashion
                    house "Bella". <br />
                    The main business line - Prima <br />
                    The exclusive line - Lure
                    <br />
                    The designer street line - Smart
                    <br />
                    The casual and relaxation line - Leisure
                    <br />
                    Developing and executing designs in line with brand identity
                    and business strategy.                     <br />
                    Collaborating with various teams
                    throughout the design process - photographers, PR people,
                    marketing, pattern makers, etc. 
                    <br />
                    Coordinating with production
                    teams and mentoring new designers.
                  </p>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  {[
                    { title: "Creating capsule collections", value: 90 },
                    {
                      title: "Fashion illustration / Technical drawing",
                      value: 100,
                    },
                    {
                      title: "Presentation / Lookbook / Editorials",
                      value: 80,
                    },
                    { title: "Fashion styling / Window dressing", value: 90 },
                    { title: "Adobe Illustrator / Adobe Photoshop", value: 70 },
                    {
                      title: "Flat, 2D and 3D pattern making / Construction",
                      value: 50,
                    },
                  ].map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between">
                        <h6 className="text-sm font-extralight">{skill.title}</h6>
                        <h6 className="text-sm">{skill.value}%</h6>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-magenta h-2 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
