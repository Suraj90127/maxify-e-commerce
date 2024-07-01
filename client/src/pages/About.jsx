import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Headers />
      <section className="w-full mx-auto py-10 bg-white dark:bg-gray-900 dark:text-white">
        {/* <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">Services</div> */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full xl:mr-6">
            <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-  full bg-white dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
              veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
              sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
              nobis tempora possimus ullam!</p>
          </div>
        </div>
        {/* col-2 */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/*  */}
          {/* <div className="md:hidden sm:block xs:block xs:w-full">
      <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
    </div> */}
          {/*  */}
          <div className="lg:w-[50%] xs:w-full bg-white dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
              veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
              sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
              nobis tempora possimus ullam!</p>
          </div>
          {/*  */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
            <img className="lg:rounded-t-lg xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
          </div>
        </div>
      </section>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Boost Your Productivity </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
              Enhance your workflow with advanced features
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-1 sm:gap-x-12 gap-y-12 md:grid-cols-3 xl:grid-cols-3 md:gap-0 xl:mt-24">
            {/* Feature 1 */}
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <i className="fa-solid fa-chart-column text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Advanced Analytics</h3>
              <p className="mt-5 text-base text-gray-600">Track and analyze your data with powerful analytics tools. Gain valuable
                insights for better decision-making.</p>
            </div>
            {/* Feature 2 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i className="fa-solid fa-truck-fast text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Fast Integration</h3>
              <p className="mt-5 text-base text-gray-600">Seamlessly integrate with your existing tools and systems for a smooth
                workflow experience.</p>
            </div>
            {/* Feature 3 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i className="fa-solid fa-shield text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Security First</h3>
              <p className="mt-5 text-base text-gray-600">Ensure the safety of your data with top-notch security features. Your
                privacy is our priority.</p>
            </div>
            {/* Feature 4 */}
            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <i className="fa-solid fa-cloud text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Cloud Integration</h3>
              <p className="mt-5 text-base text-gray-600">Access your data from anywhere with seamless cloud integration. Work
                without boundaries.</p>
            </div>
            {/* Feature 5 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <i className="fa-solid fa-pen-nib text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Task Management</h3>
              <p className="mt-5 text-base text-gray-600">Organize your workflow with efficient task management features. Stay on
                top of your projects effortlessly.</p>
            </div>
            {/* Feature 6 */}
            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <i className="fa-solid fa-bolt text-3xl text-gray-900" />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Performance Metrics</h3>
              <p className="mt-5 text-base text-gray-600">Monitor and measure your performance with comprehensive metrics.
                Optimize your processes for maximum efficiency.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
