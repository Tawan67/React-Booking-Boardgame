import React from "react";
import DropdownTag from "../components/DropdownTag";
import  {SearchBar}  from "../components/SearchBar";
import { DropBlox } from "../components/DropBlox";
  const gameAttributes = [
  { value: 'theme', label: 'Theme' },
  { value: 'player_count', label: 'Player Count' },
  { value: 'collected', label: 'Collected' },
  { value: 'game_type', label: 'Game Type' },
];

function HomePage(){
    const handleGameAttributes =(selectedOption) =>{
    console.log('Selected value:', selectedOption.value);
    console.log('Selected label:', selectedOption.label);


    }
    return(
        <div>
            <search className="flex bg-yellow-400">
                <SearchBar></SearchBar>
                <DropdownTag
                options={gameAttributes} // ส่งรายการตัวเลือก
                onSelect={handleGameAttributes}
                />
                
            </search>

        

        </div>
    )
}
export default HomePage