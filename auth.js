import React, {useState} from "react";
import { Link } from "react-router-dom";
import '.././App.css';
import { useNavigate } from "react-router-dom";
import './auth.css';
import userData from ".././data/userdata";

function Auth () {
   
    const useLocation = () => {
        const { state } = useLocation(); // This one I saw in some other stackoverflow answer
        console.log(state);
        const username = state;
        console.log("This is the user",{username})
    }
const NumericFormat = () =>{
    const currentuser = userData.filter(((user) => user.username === username))
    const [balance, setBalance] = useState(currentuser[0].balance);
    console.log(currentuser);

    const balance_left = currentuser[0].balance


    const handleCardnumberChange = (event) => {
        setCardnumber(event.target.value);
      };

      const handleExpirydateChange = (event) => {
        setExpirydate(event.target.value);
      };

}

    const [cardnumber, setCardnumber] = useState('');
    const [expirydate, setExpirydate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [transMessage, setTransMessage] = useState('');

    const { state } = useLocation(); // This one I saw in some other stackoverflow answer
    console.log(state);
    const username = state;
    console.log("This is the user",{username});

    const currentuser = userData.filter(((user) => user.username === username))
    const [balance, setBalance] = useState(currentuser[0].balance);
    console.log(currentuser);

    const balance_left = currentuser[0].balance


    const handleCardnumberChange = (event) => {
        setCardnumber(event.target.value);
      };

      const handleExpirydateChange = (event) => {
        setExpirydate(event.target.value);
      };

      const handleCvvChange = (event) => {
        setCvv(event.target.value);
      };

      const handleAmountChange = (event) => {
        setAmount(event.target.value);
        const inputValue = event.target.value;
        //setBalance(inputValue+1)

        if (isNaN(inputValue) || parseInt(inputValue) <= 10) {
            setErrorMessage('Please enter an amount greater than R10.');
          } else {
            setErrorMessage('');
          }
      };


      const handleTransaction = () => {
        // Validate the details
        const user = userData.find((user) => user.bankcardnumber === cardnumber && user.expirydate === expirydate && user.cvv === cvv);
    
        if (user) {
          setBalance(parseInt(amount)+ parseInt(balance));
          setTransMessage('Transaction successful!');
          console.log('Transaction successful!');
          
          // You can perform additional actions here, such as redirecting the user or setting up a session
        } else {
          // Failed login
          setTransMessage('Invalid details');
          console.log('Invalid details');
        }
      };


    /* const navigate = useNavigate();

    const [ loaded, loadedtag] = useState('true');

    const handleLoad = () => {
        if(loaded){
            (navigate('./loaded'));
        } 

    } */



    /* const [tagData, setTagData] = useState ({

                 busTagNumber: '',
                 cardNumber: '',
                expirationDate: '',
                cvv: '',  
                amountToLoad: '',
        
           }); */

    /*        const handleChange = (e) => {
        
                     const { name, value } = e.target;
                    setTagData({ ...tagData, [name]: value});
            
                 };



                 const handleBuy = (e) => {
                         e.preventDefault();
                
                         console.log('Tag purchased with data:' , tagData);
                        
                         setTagData({
                             busTagNumber:'',
                           cardNumber:'',
                          expirationDate:'',
                            cvv:'',
                            amountToLoad: '',
                         });
                     };


document.addEventListener('DOMContentLoaded', function (){
    const loadButton = document.getElementsByClassName('loadButton');

    loadButton.addEventListener('click', function () {
        window.location.href= 'loaded.js';
    });

});
 */

                     return(
                    <body1> 

                        <div class="tag-container">
                            <hheader> 
                                <h1> ReaVaya</h1> 
                                 </hheader> 
                            <h4> Load Bus Tag </h4>
           
                        <div class="app">
                            <div class="left">
                        <div class="maint">
                  Top up your Rea Vaya bus tag in less than 5 minutes, easy! 
                </div>
                <div class='subt'>
                  Bypass lengthy lines and top up your bus tag hassle free. 
                  Try our service and stay up to date with all information partaining to your daily commute
                </div> 

                            </div>

                            <div class="right">
                                 
                            <div className="flex flex-auto p-12">
            <div className="border-2 w-2/5 mr-2 h-3/6">
                <div className='text-center font-sm font-bold'> Hi {currentuser[0].name}, welcome to your user page!</div>
                <div className='pt-4 font-bold'>Account details:</div>
                <div>Card number: {currentuser[0].card_no}</div>
                <div>Account balance: 
                    <NumericFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'R'} />
                </div>
            </div>

            <div className="border-2 w-2/5 ml-2 h-3/6">Top up
                <div className=''>
                    <label className='text-gray-950 text-sm pr-4'>Card number:</label>
                    <input className='border-2' type="text" value={cardnumber} onChange={handleCardnumberChange} />
                </div>

                <div className=''>
                    <label className=' text-gray-950 text-sm pr-4'>Expiry date:</label>
                    <input className='border-2' type="text" value={expirydate} placeholder="mm/dd/yyyy" onChange={handleExpirydateChange} />
                </div>

                <div className=''>
                    <label className=' text-gray-950 text-sm pr-4'>Cvv:</label>
                    <input className='border-2' type="text" value={cvv} onChange={handleCvvChange} />
                </div>

                <div className=''>
                    <label className=' text-gray-950 text-sm pr-4'>Amount (R):</label>
                    <input className='border-2' type="number" value={amount} onChange={handleAmountChange} />
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                </div>
                
                <div className='flex flex-col'>
                    <button className='bg-black py-2 px-12 my-2 rounded-lg text-white w-min' onClick={handleTransaction}>Top up</button>
                    <p>{transMessage}</p>
                </div>
            
            </div>
        </div>
 
                            </div>

                         </div>

                         {/* <div class="load-container"> 
                            <button type='submit' onClick={handleLoad}> Load Tag  </button> 
                        </div> */}

                        </div>



                    </body1>
                        

)




 }

 

     

 
export default Auth   ; 

     
