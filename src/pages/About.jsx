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
                                            <li>Login and Register (Required)</li>
                                            <li>Profile (Required)</li>
                                            <li>View all Board game list (Required)</li>
                                            <li>Book Board game and select room table (Required)</li>
                                            <li>select date and time to play (Required)</li>
                                            <li>Booking History (Required)</li>
                                            <li>Payment by Promptpay (Optional)</li>
                                            <li>Point base on Booking Time (Optional)</li>
                                            <li>Price base on Booking Time (Optional)</li>
                                            <li>Promotion by design yourself (Optional)</li>
                                            <li>Search and Filter Board game (Required)</li>
                                            </ul></li>
                        <li>Admin <br /><ul>
                                            <li>Based on User but cannot booking (Required)</li>
                                            <li>CRUD Board game (Required)</li>
                                            <li>CRUD Category of board game (Required)</li>
                                            <li>Manage User (Banned User) (optional)</li>
                                            <li>CRUD Room and Table (Required)</li>
                                            <li>Manage Transaction Payment (Required)</li>
                                            <li>Upload File (Optional)</li>
                                            </ul></li>
                        </ul>

                        </li>
                </ul>
                <h2> Feature</h2>
                <ul>
                    <li>Backend</li>
                    <ul>
                        <li>JWT Authentication (3, Required)</li>
                        <li> Accesstoken, Refresh token (2, Optional)</li>
                        <li> Search, Filter and Pagination (2, Required)</li>
                        <li> Form Validation (3, Required)</li>
                        <li> Rbac (Role Back access control) (2, Required)</li>
                        <li> CRUD (Create, Read, Update, Delete) (3, Required)</li>
                        <li> Upload file to cloud (4, Optional)</li>
                        <li> Rated Limit (2, Optional)</li>
                        <li> Response Template Message (2, Optional)</li>
                        <li> Postman and Swagger (2, Required)</li>
                    </ul>
                </ul>
            </article>
        
        </div>
    )
}
export default About;