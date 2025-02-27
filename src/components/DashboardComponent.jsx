import React, { useState } from 'react';
import CreateGroup from './CreateGroup';
import JoinGroup from './JoinGroup';

const portfolio = [
    {
        "network": "Ethereum",
        "apy": "5.6%",
        "tokenPrice": "$3500",
        "currentPrice": "$3300",
        "rewardsEarned": "$150"
    },
    {
        "network": "Binance Smart Chain",
        "apy": "7.2%",
        "tokenPrice": "$400",
        "currentPrice": "$380",
        "rewardsEarned": "$30"
    },
    {
        "network": "Polygon",
        "apy": "6.8%",
        "tokenPrice": "$1.2",
        "currentPrice": "$1.1",
        "rewardsEarned": "$10"
    }
];

const DashboardComponent = () => {
    const [activeComponent, setActiveComponent] = useState('dashboard'); // State to track the active component

    const handleJoinClick = () => setActiveComponent('join');
    const handleCreateClick = () => setActiveComponent('create');

    // Conditional rendering based on the active component
    return (
        <div className='px-[3vw] py-[50px]'>
            {activeComponent === 'dashboard' ? (
                <>
                    <h1 className="text-[36px] font-orbitron">Dashboard</h1>
                    {/* First flex */}
                    <div className="flex gap-[2vw] mt-[30px]">
                        <div className="w-1/3 flex gap-[1em] border-[1px] border-gray-400 p-[20px] rounded-[15px]">
                            <div className="aspect-square p-[20px] bg-gray-600 rounded-[100px]">
                                <svg className="h-[2em] w-[2em]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z" fill="#7ae9ff"></path>
                                </svg>
                            </div>
                            <div className="">
                                <p className="text-light text-gray-400">Total Rewards</p>
                                <p className="text-[2vw] font-bold">$1000</p>
                            </div>
                        </div>

                        <div className="w-1/3 flex gap-[1em] border-[1px] border-gray-400 p-[20px] rounded-[15px]">
                            <div className="aspect-square p-[20px] bg-gray-600 rounded-[100px]">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6C20 6 19.1843 6 19.0001 6C16.2681 6 13.8871 4.93485 11.9999 3C10.1128 4.93478 7.73199 6 5.00009 6C4.81589 6 4.00009 6 4.00009 6C4.00009 6 4 8 4 9.16611C4 14.8596 7.3994 19.6436 12 21C16.6006 19.6436 20 14.8596 20 9.16611C20 8 20 6 20 6Z" stroke="#c966ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className="">
                                <p className="text-light text-gray-400">Staked Balance</p>
                                <p className="text-[2vw] font-bold">$1000</p>
                            </div>
                        </div>

                        <div className="w-1/3 flex gap-[1em] border-[1px] border-gray-400 p-[20px] rounded-[15px]">
                            <div className="aspect-square p-[20px] bg-gray-600 rounded-[100px]">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9H21M7 3V5M17 3V5M6 12H10V16H6V12ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ff9d2e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div className="">
                                <p className="text-light text-gray-400">Last Day Rewards</p>
                                <p className="text-[2vw] font-bold">$1000</p>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio */}
                    <div className="flex gap-[2vw] mt-[2vw]">
                        <button className="rounded-[15px] border-[1px] border-white bg-white text-gray-800 text-[18px] font-funnel py-[0.5em] px-[1em]" onClick={handleJoinClick}>Join a Group</button>
                        <button className="rounded-[15px] border-[1px] border-white text-[18px] font-funnel py-[0.5em] px-[1em]" onClick={handleCreateClick}>Create a Group</button>
                    </div>

                    <div>
                        <h1 className="text-[24px] font-orbitron mt-[40px]">Portfolio</h1>
                        <div className="border-[2px] border-gray-500 mt-4 rounded-[15px] overflow-hidden ">
                            <div className="grid grid-cols-5 font-funnel">
                                <div><p className="border-[0.5px] border-gray-500 px-4 py-2 text-gray-400 text-[18px]">Network</p></div>
                                <div><p className="border-[0.5px] border-gray-500 px-4 py-2 text-gray-400 text-[18px]">APY</p></div>
                                <div><p className="border-[0.5px] border-gray-500 px-4 py-2 text-gray-400 text-[18px]">Token Price</p></div>
                                <div><p className="border-[0.5px] border-gray-500 px-4 py-2 text-gray-400 text-[18px]">Current Price</p></div>
                                <div><p className="border-[0.5px] border-gray-500 px-4 py-2 text-gray-400 text-[18px]">Rewards Earned</p></div>
                            </div>
                            {portfolio.map((item, index) => (
                                <div key={index} className="grid grid-cols-5 border-b-[0.5px] border-gray-500 last:border-b-0">
                                    <div className="border-[0.5px] border-gray-500 px-4 py-2">{item.network}</div>
                                    <div className="border-[0.5px] border-gray-500 px-4 py-2">{item.apy}</div>
                                    <div className="border-[0.5px] border-gray-500 px-4 py-2">{item.tokenPrice}</div>
                                    <div className="border-[0.5px] border-gray-500 px-4 py-2">{item.currentPrice}</div>
                                    <div className="border-[0.5px] border-gray-500 px-4 py-2">{item.rewardsEarned}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : activeComponent === 'join' ? (
                <JoinGroup /> // Display JoinGroup component
            ) : activeComponent === 'create' ? (
                <CreateGroup /> // Display CreateGroup component
            ) : null}
        </div>
    );
};

export default DashboardComponent;
