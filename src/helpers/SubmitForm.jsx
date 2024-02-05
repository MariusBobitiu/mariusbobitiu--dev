// import { useDispatch } from "react-redux";
// import { showLoader } from "./features/form/uiSlice";
const BASE_API_URL = 'https://wr59u9702c.execute-api.eu-west-2.amazonaws.com'

const useSubmitForm = () => {
   // const dispatch = useDispatch();
   const validateEmail = (input) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(input);
   };
   const validateTextInput = (input) => {
      const regex = /^[a-zA-Z0-9\s\-']+$/;
      return regex.test(input);
   };
   const validateMessage = (input) => {
      const regex = /^[a-zA-Z0-9\s,.?!:;'"(){}[\]\--—_\\&$€]*$/;
      return regex.test(input);
   };

  const submitForm = async (formData) => {

      if (!validateTextInput(formData.name)) {alert('Please enter a valid name'); return; };
      if (!validateEmail(formData.email)) { alert('Please enter a valid email address.'); return; };
      if (!validateTextInput(formData.subject)) { alert('Please enter a valid subject.'); return; };
      if (!validateMessage(formData.message)) { alert('Please enter a valid message.'); return; };


      console.log('Form data submitted: ', formData);


      try { 
         const res = await fetch(`${BASE_API_URL}/prod/send-email`, {
                   method: 'POST',
                   body: JSON.stringify(formData),
                   headers: { 'Content-Type': 'application/json'}
               });

               if (!res.ok) {
                   alert('Failed to send message. Please try again.');
                   return;
               }
               // dispatch(showLoader());
      }catch(err){
         console.log(err);
      }
   };

   return submitForm;
};

export default useSubmitForm;