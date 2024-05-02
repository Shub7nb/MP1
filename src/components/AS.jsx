const AS = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          {/* Increase image height and maintain aspect ratio */}
          <img
            src="https://img.freepik.com/free-vector/flat-design-muted-colors-illustration_23-2150076183.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714521600&semt=sph"
            alt="Featured Image"
            className="rounded-lg shadow-lg h-auto md:h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-green-600">SANSAR</h1>
          <p className="text-xl text-green-600">Striving to make the environment better</p>
          <h2 className="text-3xl font-bold">Providing a solution to the ever-increasing "waste" in our lives</h2>
          <p className="text-gray-700">
            Sorting waste before disposal is crucial to ensure proper waste management and reduce the negative impact of waste on the environment. By separating recyclable materials such as plastic, paper, and metal from non-recyclable materials, we can facilitate their reuse and reduce the amount of waste sent to landfills or incinerators.
          </p>
          <div className="flex flex-col space-y-4">
            <InfoCard
              icon="fas fa-seedling"
              title="Conscious Sorting"
              description="Citizens sort their common waste before pick-up and promote a culture of sustainability and environmental responsibility."
            />
            <InfoCard
              icon="fas fa-hand-holding-heart"
              title="Donate for a new life"
              description="Donating clothes, furniture, and electronics can help improve the quality of life for families who cannot afford to purchase these items themselves."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
    <div className="bg-green-100 p-3 rounded-full">
      <i className={`${icon} text-green-500 text-3xl`}></i>
    </div>
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default AS;
