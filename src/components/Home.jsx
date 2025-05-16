import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Accordion from './Accordion'
import SubscriptionCard from './SubscriptionCard'
import FeaturesGrid from './FeaturesGrid'
import ProfileCard from './ProfileCard'
import FormLanding from './FormLanding'

export default function Home() {


  const profileData = [{
    image: "https://via.placeholder.com/150", 
    logo: "https://via.placeholder.com/30", 
    name: "Kartik Kapoor",
    role: "Software Engineer",
    company: "Coinbase",
    tags: [
      "JavaScript and React Expert",
      "Interview Expert",
      "Roadmap",
      "Pair Programming",
    ],
    description:
      "Hello! I am a Frontend Engineer with 5+ years of experience currently working at Coinbase. I have extensive experience in building enterprise-level web applications.",
    skills: ["JavaScript", "HTML", "CSS", "React", "React Native", "Interview Preparation"],
    price: 60,
    buttonText: "View Profile",
  },
  {
    image: "https://via.placeholder.com/150", 
    logo: "https://via.placeholder.com/30", 
    name: "Kartik Kapoor",
    role: "Software Engineer",
    company: "Coinbase",
    tags: [
      "JavaScript and React Expert",
      "Interview Expert",
      "Roadmap",
      "Pair Programming",
    ],
    description:
      "Hello! I am a Frontend Engineer with 5+ years of experience currently working at Coinbase. I have extensive experience in building enterprise-level web applications.",
    skills: ["JavaScript", "HTML", "CSS", "React", "React Native", "Interview Preparation"],
    price: 60,
    buttonText: "View Profile",
  },
  {
    image: "https://via.placeholder.com/150", 
    logo: "https://via.placeholder.com/30", 
    name: "Kartik Kapoor",
    role: "Software Engineer",
    company: "Coinbase",
    tags: [
      "JavaScript and React Expert",
      "Interview Expert",
      "Roadmap",
      "Pair Programming",
    ],
    description:
      "Hello! I am a Frontend Engineer with 5+ years of experience currently working at Coinbase. I have extensive experience in building enterprise-level web applications.",
    skills: ["JavaScript", "HTML", "CSS", "React", "React Native", "Interview Preparation"],
    price: 60,
    buttonText: "View Profile",
  }
  ]


                              {/* <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                                SkillKronos: <br />
                                <span className="text-blue-600">Revolutionizing
                                    Career <br/>

                                    </span>
                               <Typewriter
          words={[
            "Development",
            "Growth",
            "Boost",
            "Defined Individual",
          ]}
          loop={true}
          
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
          />
          </h1>    */}
                         
                            {/* <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                                SkillKronos targets early-career professionals, recent graduates, and
                                career changers in the career development industry. Our innovative
                                platform addresses the critical need for soft skills training in today's
                                competitive job market.
                            </p> */}

                            {/* Buttons */}
                            {/* <div className="mt-8 font-semibold flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                                    Sign Up
                                </button>
                                <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-100">
                                    <span className="inline-flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                        Download Syllabus
                                    </span>
                                </button>
                            </div> */}



    return (
        <>
            <div className='w-full ' id="contact">

                <Navbar />
                {/* <div className='min-h-screen'> */}
                <section id="home" className=" mt-10  min-h-screen">
                <div className="mx-auto">
    {/* Text Content */}
    <div
      className="text-center bg-[#813588] px-6 sm:px-8 md:px-10 py-5 bg-[url('/bannerl.jpg')] bg-no-repeat bg-cover min-h-screen flex flex-col lg:flex-row-reverse justify-between items-center"
    >
      {/* Form Section */}
      <div className="w-full lg:w-[45%] lg: z-20 mt-8 lg:mt-0">
        <FormLanding />
      </div>


                        </div>
<div id="features">

                        <FeaturesGrid />
</div>

                       
                        <div className="mt-16 w-full">
                            <div className="bg-gradient-to-b mx-auto w-[75%]  rounded-xl from-black to-gray-900  text-white py-12 ">
                                <div className="text-center max-w-4xl mx-auto">
                                    <h2 className="text-2xl font-semibold uppercase tracking-wide">
                                        Move Over traditional courses
                                    </h2>
                                    <h1 className="text-3xl md:text-xl font-bold mt-4">
                                        Start Making Progress with 1:1 Long Term Mentorship
                                    </h1>
                                </div>

                                <div className="mt-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <h2 className="text-5xl font-bold text-blue-400">30%</h2>
                                        <p className="text-lg font-semibold mt-4">Cost Effective</p>
                                        <p className="text-gray-400 mt-2">Compared to any 6-month course</p>
                                    </div>
                                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <h2 className="text-5xl font-bold text-blue-400">4x</h2>
                                        <p className="text-lg font-semibold mt-4">Results</p>
                                        <p className="text-gray-400 mt-2">As compared to any online course</p>
                                    </div>
                                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <h2 className="text-5xl font-bold text-blue-400">50%</h2>
                                        <p className="text-lg font-semibold mt-4">Faster</p>
                                        <p className="text-gray-400 mt-2">
                                            Get results within 6 months instead of years
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h2 className="text-xl mt-10 sm:text-2xl font-bold text-center text-gray-800">
                                Our Highly Rated
                            </h2>
                            <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mt-2">
                                Outcome-based Programme
                            </h3>

                        <div className='w-full flex flex-wrap gap-4 justify-center items-center'>
                        
                        {profileData.map((profile, index) => (
                          <ProfileCard key={index} profile={profile} />
                        ))}
                        </div>
                        <div className="  ">
                            {/* Header Section */}
                            {/* <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                    Why Choose Our <br/>
                                    <span className='text-blue-600'>
                                       Mentorship Program?
                                      </span>
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Unlock your potential with personalized mentorship tailored for your growth.
                                </p>
                            </div> */}

                            {/* Features Section */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                                {/* Feature 1 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-blue-400 text-5xl mb-4">
                                        <i className="fas fa-user-graduate"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">One-on-One Mentorship</h3>
                                    <p className="text-gray-400">
                                        Personalized guidance from industry experts.
                                    </p>
                                </div> */}
                                {/* Feature 2 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-green-400 text-5xl mb-4">
                                        <i className="fas fa-sync-alt"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Real-time Feedback</h3>
                                    <p className="text-gray-400">
                                        Immediate insights for continuous improvement.
                                    </p>
                                </div> */}
                                {/* Feature 3 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-yellow-400 text-5xl mb-4">
                                        <i className="fas fa-chalkboard-teacher"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Role-playing Exercises</h3>
                                    <p className="text-gray-400">
                                        Practical scenarios for skill application.
                                    </p>
                                </div> */}
                                {/* Feature 4 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-purple-400 text-5xl mb-4">
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Industry Insights</h3>
                                    <p className="text-gray-400">
                                        Up-to-date knowledge from various sectors.
                                    </p>
                                </div> */}
                            </div>
                        </div>

                        <div className="bg-gray-50 py-10 my-10">
                            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
                                Our Highly Rated
                            </h2>
                            <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mt-2">
                                Outcome-based Programme
                            </h3>

                            <div className="flex min-w-full flex-wrap justify-center gap-4 mt-6">
                                {/* Program Cards */}
                                <div className="bg-orange-500 text-white rounded-lg shadow-lg   p-6">
                                    <h4 className="text-lg font-bold">Transformer</h4>
                                    <p className="text-sm font-semibold mt-1">For Up to 6 Years of Experience</p>
                                    <div className="mt-4">
                                        <h5 className="text-white font-semibold">Program Highlights</h5>
                                        <ul className="list-disc list-inside text-sm text-white mt-2">
                                            <li>Join Top Product-Based Companies</li>
                                            <li>Personal Mentorship</li>
                                            <li>Live Interactive Sessions</li>
                                            <li>Industry Relevant Projects</li>
                                        </ul>
                                    </div>
                                    <button className="mt-4 bg-white text-orange-500 font-bold px-4 py-2 rounded-md shadow hover:bg-gray-100">
                                        Learn More
                                    </button>
                                </div>

                                <div className="bg-gray-800 text-white rounded-lg shadow-lg  p-6">
                                    <h4 className="text-lg font-bold">Evolve</h4>
                                    <p className="text-sm font-semibold mt-1">For 7+ Years of Experience</p>
                                    <div className="mt-4">
                                        <h5 className="text-white font-semibold">Program Highlights</h5>
                                        <ul className="list-disc list-inside text-sm text-white mt-2">
                                            <li>Join Top Product-Based Companies</li>
                                            <li>Personal Mentorship</li>
                                            <li>Advanced DSA & System Design</li>
                                            <li>Leadership Skills Training</li>
                                        </ul>
                                    </div>
                                    <button className="mt-4 bg-white text-gray-800 font-bold px-4 py-2 rounded-md shadow hover:bg-gray-100">
                                        Learn More
                                    </button>
                                </div>

                                <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                                    <h4 className="text-lg font-bold">Accelerator</h4>
                                    <p className="text-sm font-semibold mt-1">For College Students</p>
                                    <div className="mt-4">
                                        <h5 className="text-white font-semibold">Program Highlights</h5>
                                        <ul className="list-disc list-inside text-sm text-white mt-2">
                                            <li>Command over Problem-Solving in DS & Algo</li>
                                            <li>Computer Science Fundamentals</li>
                                            <li>Industry-Relevant Projects</li>
                                            <li>24/7 Doubt Support</li>
                                        </ul>
                                    </div>
                                    <button className="mt-4 bg-white text-blue-600 font-bold px-4 py-2 rounded-md shadow hover:bg-gray-100">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div  id="pricing">

<SubscriptionCard/>
                        </div>
                       
<Accordion/>
                    </div>
                </section >
<Footer/>
            </div >
            




        </>
    )
}
