import React, { useState } from 'react';

const groups = [
  {
    name: "Weekly Savings Circle",
    contribution_frequency: "Weekly",
    members: { current: 8, total: 10 },
    contribution_amount: "100 USDC",
    total_pot: "800 USDC",
    next_payout: "2025-03-01"
  },
  {
    name: "Monthly Investment Pool",
    contribution_frequency: "Monthly",
    members: { current: 5, total: 12 },
    contribution_amount: "250 USDC",
    total_pot: "1250 USDC",
    next_payout: "2025-03-15"
  },
  {
    name: "Bi-Weekly Business Fund",
    contribution_frequency: "Bi-Weekly",
    members: { current: 6, total: 8 },
    contribution_amount: "150 USDC",
    total_pot: "900 USDC",
    next_payout: "2025-03-08"
  }
];

const JoinGroup = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleJoinGroup = (group) => {
    setSelectedGroup(group);
    setShowDisclaimer(true);
  };

  const handleDisclaimerContinue = () => {
    setShowDisclaimer(false);
    setShowConfirmation(true);
  };

  const handleDisclaimerCancel = () => {
    setShowDisclaimer(false);
    setSelectedGroup(null);
  };

  const handlePaymentConfirm = () => {
    setShowConfirmation(false);
    alert(`Successfully joined ${selectedGroup.name} and paid ${selectedGroup.contribution_amount}`);
    setSelectedGroup(null);
  };

  const handlePaymentCancel = () => {
    setShowConfirmation(false);
    setSelectedGroup(null);
  };

  return (
    <div className="p-5 font-funnel">
      <h1 className="text-3xl font-bold mb-4 font-orbitron">Available Groups</h1>
      <p className="text-gray-600 mb-6">Join an existing ROSCA group</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map((group, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-700 text-white flex flex-col justify-between">
            <div className="">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{group.name}</h2>
              <span className="px-2 py-1 bg-gray-600 text-sm rounded">
                {group.contribution_frequency}
              </span>
            </div>
            <p className="text-sm text-white">Members: {group.members.current} / {group.members.total}</p>
            <p className="text-sm text-white">Contribution: {group.contribution_amount}</p>
            <p className="text-sm text-white">Total Pot: {group.total_pot}</p>
            <p className="text-sm text-white">Next Payout: {group.next_payout}</p>
            </div>
            <div className="">
            <button
              onClick={() => handleJoinGroup(group)}
              className="mt-4 py-2 px-4 bg-white text-gray-700 rounded hover:bg-gray-400 hover:text-white"
            >
              Join
            </button>
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-end mt-[4em]">
        <a href='/Dashboard' className="text-white bg-gray-800  border-[2px] border-white text-[24px] py-[0.5em]  px-[1em] rounded-[10px] ">Go to Dashboard</a>
        </div>
      {/* Disclaimer Popup */}
      {showDisclaimer && (
        <div className="fixed inset-0 lightGrayBg2 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Disclaimer</h3>
            <p className="text-sm mb-4">By joining this group, you agree to: </p>
            <ul className="list-disc ml-[1em]">
                <li>Contribute {selectedGroup?.contribution_amount} to the total pot.</li>
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
            <p className="text-sm mb-4">You are about to pay {selectedGroup?.contribution_amount} to join the group {selectedGroup?.name}. Do you wish to proceed?</p>
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

export default JoinGroup;
