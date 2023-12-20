import React from 'react'

export default function RightSidebar() {
  return (
      <section className="custom-scrollbar rightsidebar">
          <div className="flex flex-1 justify-start flex-col">
              <h3 className='text-light-1'>suggested comunities</h3>
          </div>
          <div className="flex flex-1 justify-start flex-col">
              <h3 className='text-light-1'>suggested users</h3>
          </div>
      </section>
  );
}
