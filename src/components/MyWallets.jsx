import React from "react";

const MyWallets = () => {
  return (
    <div className="w-[55%] mx-auto py-[50px]">
                                 <h1 className="text-[36px] font-orbitron">My Wallets</h1>


 

      <div className="  bg-gray-700 p-6 rounded-[15px] shadow-md mx-auto mt-[40px] ">
        
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-white text-gray-700 border border-gray-300 p-2 rounded flex items-center justify-center mb-4">
          <img src="./images/icons/google.png" alt="Google Logo" className="w-7 h-7 mr-4" />
          Continue with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full bg-gray-700 border-[1px] border-gray-500 text-white p-2 rounded flex items-center justify-center mb-3">
          <img src="./images/icons/walletconnect.png" alt="WalletConnect" className="w-7 h-7 mr-4" />
          Wallet Connect
        </button>
        
        <button className="w-full bg-gray-700 border-[1px] border-gray-500 text-white p-2 rounded flex items-center justify-center mb-3">
          <img src="./images/icons/metamask.png" alt="MetaMask" className="w-7 h-7 mr-4" />
          MetaMask
        </button>
        


        <p className="text-center text-gray-500 mt-4">
          Don’t have an account? <a href="#" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
};

export default MyWallets;
