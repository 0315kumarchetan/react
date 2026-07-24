import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={`https://i.pravatar.cc/100?u=${user.email}`}
          alt="user"
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t"></div>

      {/* Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <p><span className="font-semibold">📧 Email:</span> {user.email}</p>
        <p><span className="font-semibold">📞 Phone:</span> {user.phone}</p>
      </div>

      {/* Address Section */}
      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
        <p className="text-sm font-semibold text-gray-800 mb-1">📍 Address</p>
        <p className="text-sm text-gray-600">
          {user.address.number}, {user.address.street}
        </p>
        <p className="text-sm text-gray-600">
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-5">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          View
        </button>
        <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">
          Edit
        </button>
      </div>

    </div>
  );
};

export default UserCard;