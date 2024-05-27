function Explorer() {
    return (
      <div className="w-96 h-full text-left p-2">
        <h3 className="text-lg">Explorer</h3>
        <div className="flex flex-col">
          <div className="flex flex-row">
            {[...Array(10).keys()].map((index) => (
              <div key={index} className="w-10 h-10 bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Explorer;
  