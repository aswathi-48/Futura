import React from 'react'
import './DashContent.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";

const DashContent = () => {
  return (
    <div>
        <div className='main-dash'>
        <div className='head-title'>
            <div className='left'>
                <h1>DashBoard</h1>
                <div className='left-one'>
                  <div className='left-p'>
                    <p>Dashboard</p>
                  </div>
                  <div className='left-arrows'>
                    {/* <div className='a-div'></div> */}
                  <FaCaretRight className='arrow' />  <a href="" className='atag'> Home</a>
                  </div>
                  <div className='right-icon'>
                  <FaCloudDownloadAlt style={{fontSize:14,marginTop:2} }/> Download PDF
                  </div>
                </div>
            </div>
            <main>
                <div className='main-box'>
                    <div className='order'>
                        <div className='order-icon'>
                        <FaCalendarCheck />
                        </div>
                        <div className='order-contents'>
                        <h3>1020</h3>
                        <p>New Order</p>
                        </div>
                    </div>
                    <div className='visitors'>
                        <div className='visitors-icon'>
                        <FaUserGroup />
                        </div>
                        <div className='visiters-contents'>
                        <h3>4020</h3>
                        <p>Visitors</p>
                        </div>
                    </div>
                    <div className='sales'>
                        <div className='sale-icon'>
                        <AiFillDollarCircle />
                        </div>
                        <div className='sale-contents'>
                        <h3>1020</h3>
                        <p>New Order</p>
                        </div>
                    </div>
                </div>
            </main>

            <section>
                <div className='monthl-report'>
                    <div className='report1'>
                        <h3>Income</h3>
                        <div>
                            <details>
                                <h1>$29,023</h1>
                                <h6 className='sucess'>+3.5%</h6>
                            </details>
                            <p className='text-muted'>Compared to $26,925 last month</p>
                        </div>
                    </div>
                    <div className='report2'>
                        <h3>Expenses</h3>
                        <div>
                            <details>
                                <h1>$9,003</h1>
                                <h6 className='sucess'>-6.5%</h6>
                            </details>
                            <p className='text-muted'>Compared to $18,910 last month</p>
                        </div>
                    </div>
                    <div className='report3'>
                        <h3>Cashback</h3>
                        <div>
                            <details>
                                <h1>$21,203</h1>
                                <h6 className='sucess'>+7.5%</h6>
                            </details>
                            <p className='text-muted'>Compared to $3,025 last month</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  )
}

export default DashContent



// <main>
//             <div className='box-info'>
//               <div className='main-box'>
//               <ul className='box-ul'>
//               <div className='order'>
//                   <i className='order-icon'>  </i>
//                   <span className='order-span'>
//                     <h3>1020</h3>
//                     <p>New Order</p>
//                   </span>
//              </div>
//               <div className='visitors'>
//                   <i className='visitors-icon'> </i>
//                   <span className='visitors-span'>
                   
//                     <h3>  2878</h3>
//                     <div>
//                     <FaUserGroup />
//                     </div>
//                     <p>Visitors</p>
//                   </span>
//              </div>
//               <div className='sales'>
//                   <i className='sale-icon'><AiFillDollarCircle /> </i>
//                   <span className='sale-span'>
//                     <h3>3420</h3>
//                     <p>Total sales</p>
//                   </span>
//              </div>
//               </ul>
//               </div>
//             </div>
//             </main>