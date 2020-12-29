
export default function PrivateLayout({ children }) {
  return (
    <>
      <div className="relative md:ml-64 bg-gray-200">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <h1>Private LAYOUT</h1>
          {children}
        </div>
      </div>
    </>
  );
}
