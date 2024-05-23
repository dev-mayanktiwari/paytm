const SendMoney = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white rounded-lg shadow-md max-w-md mx-auto p-8 space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-700">Send Money</h2>
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-2xl text-white">A</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700">Friend's Name</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="amount"
                        >
                            Amount (in Rs)
                        </label>
                        <input
                            type="number"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                            id="amount"
                            placeholder="Enter amount"
                        />
                    </div>
                    <button className="block w-full py-2 px-4 rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors">
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;