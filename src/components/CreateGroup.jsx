import React, { useState } from 'react';

const CreateGroup = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [contributionAmount, setContributionAmount] = useState(''); // Add state for contribution amount
  const [groupName, setGroupName] = useState(''); // Add state for group name

  const [selectedGroup, setSelectedGroup] = useState({
    contribution_amount: 100, // Example value, can be dynamically set
    name: 'Sample Group',
  });

  const handleDisclaimerCancel = () => {
    setShowDisclaimer(false);
  };

  const handleDisclaimerContinue = () => {
    setShowDisclaimer(false);
    setShowConfirmation(true); // Show the confirmation after accepting the disclaimer
  };

  const handlePaymentCancel = () => {
    setShowConfirmation(false);
  };

  const handlePaymentConfirm = () => {
    // Add logic for confirming the payment here
    setShowConfirmation(false);
    alert('Payment Confirmed');
  };

  return (
    <div>
      <h1 className="ml-[10%] pl-[5vw] text-[32px] font-orbitron font-bold pb-[1em]">Create </h1>
      <form action="" className="text-white text-[20px] font-funnel w-[80%] mx-auto px-[5vw] ">
        <label htmlFor="name" className="">Group Name</label> <br />
        <input
  type="text"
  name="name"
  id=""
  value={groupName} // Bind the input value to state
  onChange={(e) => setGroupName(e.target.value)} // Update state on input change
  className="mt-[0.6em] py-[0.8em] px-[1em] rounded-[10px] border-[1px] border-gray-500 w-full"
/>
        <div className="flex gap-[2vw] ">
            <div className="w-1/2">
            <label htmlFor="maxMembers" className="">Max Members</label> <br />
            <input type="number" name="maxMembers" id="maxMembers" className="mt-[0.6em] py-[0.8em] px-[1em] rounded-[10px] border-[1px] border-gray-500 w-full"  />
            </div>
            <div className="w-1/2">
            <label htmlFor="amount" className="">Contribution Amount</label> <br />
            <input
  type="number"
  name="amount"
  id="amount"
  value={contributionAmount} // Bind the input value to state
  onChange={(e) => setContributionAmount(e.target.value)} // Update state on input change
  className="mt-[0.6em] py-[0.8em] px-[1em] rounded-[10px] border-[1px] border-gray-500 w-full"
/>            </div>
        </div><br />
        <label htmlFor="frequency" className="">Contribution Frequency</label> <br />
        <select name="cars" id="cars" className='mt-[0.6em] py-[0.8em] px-[1em] rounded-[10px] border-[1px] border-gray-500 w-full'>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
        </select>

        <div className="flex justify-end mt-[40px] gap-[2vw]">
            <a href='/Dashboard' className="text-white bg-gray-800  border-[2px] border-white text-[24px] py-[0.5em]  px-[1em] rounded-[10px] ">Go to Dashboard</a>
            <button 
              type="button"
              className="bg-white text-gray-700 text-[24px] py-[0.5em]  px-[1em] rounded-[10px]"
              onClick={() => setShowDisclaimer(true)} // Show disclaimer when clicking 'Create'
            >
              Create
            </button>
        </div>
      </form>

      {/* Disclaimer Popup */}
      {showDisclaimer && (
        <div className="fixed inset-0 lightGrayBg2 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Disclaimer</h3>
            <p className="text-sm mb-4">By joining this group, you agree to: </p>
            <ul className="list-disc ml-[1em]">
                <li>Contribute  {contributionAmount} initially to the total pot.</li>
                <li>Understand the payout schedule</li>
                <li>Agree to the group rules</li>
            </ul>
            <div className="flex justify-between mt-[2em]">
              <button
                onClick={handleDisclaimerCancel}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDisclaimerContinue}
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 lightGrayBg2 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Confirm Payment</h3>
            <p className="text-sm mb-4">You are about to pay  {contributionAmount} to form the the group {groupName}. Do you wish to proceed?</p>
            <div className="flex justify-between">
              <button
                onClick={handlePaymentCancel}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentConfirm}
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateGroup;
