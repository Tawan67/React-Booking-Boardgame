import React,{useState} from 'react'
const UseStateTester = () => {
const picList = ["../../public/pic/aa_01.jpg",
    "../../public/pic/aa_02.jpg",
    "../../public/pic/aa_03.jpg",
    "../../public/pic/aa_04.jpg",
    "../../public/pic/aa_05.jpg"
];
const [state, setState] = useState(0);
function next_pic(){
    const nextState = state+1;
    if (nextState < picList.length){
        setState(nextState);
    }
    else{
        setState(0);
    }
}

let showing = picList[state];
  return (
    <div className='flex flex-col items-center'>
    <div>UseStateTester</div>
    <img src={showing} alt="" width={200}/>
    <br />
    <p>index is {state+1} of {picList.length}</p>
    <br />
    <br />
    <button onClick={next_pic} className="bg-green-100 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"> Next </button>
    <div className="bg-black border-4 border-purple-500 w-[120px] h-32 flex items-center justify-center">
        <span className="text-white">Block</span>
    </div>
    </div>

  )
}

export default UseStateTester
