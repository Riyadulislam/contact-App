import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ContactAdd from "../Pages/Home/ContactAdd/ContactAdd";
import ContactInfo from "../Pages/Home/ContactInfo/ContactInfo";
import Contactlist from "../Pages/Home/Contactlist/Contactlist";
import PersonContact from "../Pages/Home/PersonContact/PersonContact";



const router =createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/contactlist',
                    element:<Contactlist></Contactlist>
                },
                {
                    path:'/contactinfo',
                    element:<ContactInfo></ContactInfo>
                },
                {
                  path:'/contactAdd',
                  element:<ContactAdd></ContactAdd>
                },

                {
                    path:'/personcontact/:id',
                    element:<PersonContact></PersonContact>,
                    loader:({params})=>fetch(`https://contact-web-pi.vercel.app/contactList/${params.id}`)
                }
            ]
        }
    ]
)
export default router;