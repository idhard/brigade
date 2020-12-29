
export default function PublicLayout({ children }) {
    return (
      <>
        <div className="relative md:ml-64 bg-gray-200">
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <h1>Public LAYOUT</h1>
            {children}
          </div>
        </div>
      </>
    );
  }
  