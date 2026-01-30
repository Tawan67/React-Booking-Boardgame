import './DropdownTag.css'
import React,{useState} from 'react'
const DropdownTag=({ options, onSelect }) => {
  const [isOpen,setIsOpen] = useState(false)
  const [selectedOption,setSelectedOption] = useState(null)

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelectedOption(option); // 1. อัพเดตตัวเลือกที่ถูกเลือกใน State
    setIsOpen(false); // 2. ปิด Dropdown
    onSelect(option); // 3. เรียกใช้ฟังก์ชัน onSelect ที่ถูกส่งมาจาก Parent Component (App.jsx)
  };

    return(
<div className='dropDown w-2/5 bg-green-200'>
<ul>
    <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'} {/* แสดงตัวเลือกที่เลือก หรือข้อความเริ่มต้น */}
    </button>
    {isOpen&&(
        <ul className="dropdown-menu">
            {options.map((option) => (
            <li
                key={option.value}
                className="dropdown-item"
                onClick={() => handleSelect(option)}
            >
                {option.label}

            </li>
            ))}
        </ul>
        )}
    {/* <li>Theme</li>
    <li>Player Count</li>
    <li>Collected</li>
    <li>Game Type</li> */}
</ul>
</div>
    )
}

export default DropdownTag