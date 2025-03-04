import React from 'react';

export default function UserProfilePage({params}: any) {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className='text-xl font-semibold'>Profile user:  <span className='px-2 py-2 bg-orange-500 rounded-lg'>{params.id}</span> </h1>
        </div>
    );
};
