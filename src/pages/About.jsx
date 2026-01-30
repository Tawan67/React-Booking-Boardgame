import React from "react";

function About(){
    return(
        <div style={{fontSize:18}}>
            <title>Requirement</title>
            <article>
                <h2>Requirement Web SAIG</h2>
                
                <p>ในการส่ง Project ของ SAIG Web น้องๆจะต้องทำ ตามหัวข้อและเงื่อนไขที่ได้ระบุไว้เท่านั้น
                    ไม่จำเป็นต้องทำทุกหัวข้อยกเว้นส่วนของ Tech Stack ที่ต้องใช้ตามที่กำหนดไว้
                    แต่ละหัวข้อจะมีคะแนนที่ต่างกันตามความสำคัญของหัวข้อนั้นๆ
                </p>
                <h2>Tech Stack MERN Stack</h2>
                <ul>
                    <li><h3>Language JavaScript or Typescript</h3></li>
                    <li><h3>Framework:</h3>
                        <ul>
                        <li>Frontend: React</li>
                        <li>Css: Pure css or Tailwindcss</li>
                        <li>Backend: Nodejs (expressjs) or Nest.js</li>
                        <li>Database: MongoDb or Up to You</li>
                        </ul>   
                        </li>
                   
                </ul>
                <h2>Topics</h2>
                <ul>
                    <li>Booking Board Game + Room(Table) to play <br />
                    <ul>
                        <li>User <br /> <ul>
                                            <li><input type="checkbox" id="user_1"/>Login and Register (Required)</li>
                                            <li><input type="checkbox" id="user_2"/>Profile (Required)</li>
                                            <li><input type="checkbox" id="user_3"/>View all Board game list (Required)</li>
                                            <li><input type="checkbox" id="user_4"/>Book Board game and select room table (Required)</li>
                                            <li><input type="checkbox" id="user_5"/>select date and time to play (Required)</li>
                                            <li><input type="checkbox" id="user_6"/>Booking History (Required)</li>
                                            <li><input type="checkbox" id="user_7"/>Payment by Promptpay (Optional)</li>
                                            <li><input type="checkbox" id="user_8"/>Point base on Booking Time (Optional)</li>
                                            <li><input type="checkbox" id="user_9"/>Price base on Booking Time (Optional)</li>
                                            <li><input type="checkbox" id="user_10"/>Promotion by design yourself (Optional)</li>
                                            <li><input type="checkbox" id="user_11"/>Search and Filter Board game (Required)</li>
                                            </ul></li>
                        <li>Admin <br /><ul>
                                            <li><input type="checkbox" id="admin_1"/>Based on User but cannot booking (Required)</li>
                                            <li><input type="checkbox" id="admin_2"/>CRUD Board game (Required)</li>
                                            <li><input type="checkbox" id="admin_3"/>CRUD Category of board game (Required)</li>
                                            <li><input type="checkbox" id="admin_4"/>Manage User (Banned User) (optional)</li>
                                            <li><input type="checkbox" id="admin_5"/>CRUD Room and Table (Required)</li>
                                            <li><input type="checkbox" id="admin_6"/>Manage Transaction Payment (Required)</li>
                                            <li><input type="checkbox" id="admin_7"/>Upload File (Optional)</li>
                                            </ul></li>
                        </ul>

                        </li>
                </ul>
                <h2> Feature</h2>
                <ul>
                    <li>Backend</li>
                    <ul>
                        <li><input type="checkbox" id="backend_1"/> JWT Authentication (3, Required)</li>
                        <li><input type="checkbox" id="backend_2"/> Accesstoken, Refresh token (2, Optional)</li>
                        <li><input type="checkbox" id="backend_3"/> Search, Filter and Pagination (2, Required)</li>
                        <li><input type="checkbox" id="backend_4"/> Form Validation (3, Required)</li>
                        <li><input type="checkbox" id="backend_5"/> Rbac (Role Back access control) (2, Required)</li>
                        <li><input type="checkbox" id="backend_6"/> CRUD (Create, Read, Update, Delete) (3, Required)</li>
                        <li><input type="checkbox" id="backend_7"/> Upload file to cloud (4, Optional)</li>
                        <li><input type="checkbox" id="backend_8"/> Rated Limit (2, Optional)</li>
                        <li><input type="checkbox" id="backend_9"/> Response Template Message (2, Optional)</li>
                        <li><input type="checkbox" id="backend_10"/> Postman and Swagger (2, Required)</li>
                    </ul>
                </ul>
            </article>
        
        </div>
    )
}
export default About;