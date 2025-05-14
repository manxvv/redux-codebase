import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile,onViewProfile }) => {
  
  return (
    <div className="max-w-sm mt-5 bg-white border rounded-lg shadow-lg p-6 h-[500px] flex flex-col justify-between">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={profile.image}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        {/* <img
          src={profile.logo}
          alt="Logo"
          className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white p-1 shadow-md"
        /> */}
      </div>

      {/* Name and Title */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{profile.name}</h2>
        <p className="text-sm text-gray-500 font-medium">
          {profile.role} at{" "}
          <span className="font-semibold text-gray-700">{profile.company}</span>
        </p>
      </div>

      {/* Tags */}
      <div className="text-center mt-2 text-sm text-blue-500 space-x-2">
        {profile.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center mt-4 line-clamp-3">
        {profile.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {profile.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-sm text-gray-700 py-1 px-3 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Price and Button */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-gray-700 font-semibold">
          Starting from{" "}
          <span className="text-lg text-black">${profile.price}</span>/month
        </p>
        <button         onClick={onViewProfile}

        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
<Link to={`/profile/${profile.name}`}
                      
>
{profile.buttonText}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
