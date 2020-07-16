// External dependencies
import React from "react";

export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            
            <div id="mainPage" className="column align-stretch margin-v-40 margin-h-30 bg-light-4 padding-t-50 padding-h-30 padding-b-30 relative">
               <div id="page-header" className="flex space-between">
                   <div class="uppercase bold font-26 theme-main-4 letter-spacing-1">NOVI PODSJETNIK</div>
                <div>
                   <span className="padding-h-30 font-26 pointer">Ponisti</span>
                   <span className="padding-h-30 padding-v-20 pointer bg-info-3 font-26 border-radius-12 light-5">Sacuvaj</span>
                </div> 
               </div>
               <div id="main-content-and-picture" className="flex-row ">
               <div id="main-content" className="bg-light-5 height-400 width-50-perc margin-t-50 border-radius-12 padding-b-30 relative">

                <div id="all-inputs"className="margin-l-30 margin-r-30">
                    <span className="absolute top-5 theme-main-4">Naziv</span>
                    <div id="first-input" className="w-100-perc h-40 border-2 margin-t-30 bg-light-1 light-5 padding-5  border-radius-8  border-theme-main-3 relative">Unesite neophodne podatke</div>
                    <span id="opis-input"className="absolute top-70 theme-main-4">Opis</span>
                    <div id="second-input" className="w-100-perc h-100 border-2 margin-t-30 bg-light-1 light-5 padding-5  border-radius-8  border-theme-main-3 relative">Unesite neophodne podatke</div>
                    <span id="vrsta-podsjetnika-input"className="absolute theme-main-4">Vrsta podsjetnika</span>
                    <div id="third-input-and-blue-box" className="relative">
                    <div id="third-input" className="w-100-perc h-40 border-2 margin-t-30 bg-light-1 light-5 padding-5  border-radius-8  border-theme-main-3">Obavjestenje</div>
                    <span id="zakazano-za-input"className="absolute theme-main-4">Zakazano za</span>
                    <div id="blue-box" class="width-30 height-30 bg-theme-main-4 absolute top-0 right-0 border-radius-8"></div>
                    </div>
                    <div id="forth-input-and-blue-box" className="relative">
                    <div id="forth-input" className="w-100-perc h-40 border-2 margin-t-30 bg-light-1 light-5 padding-5  border-radius-8  border-theme-main-3">Svaki dan</div>
                    <div id="blue-box" class="width-30 height-30 bg-theme-main-4 absolute top-0 right-0 border-radius-8"></div>
                    </div>
                    <span id="zakazano-vrijeme-input"className="absolute theme-main-4">Zakazano vrijeme</span>
                    <div id="fifth-input" className="w-30-perc h-40 border-2 margin-t-30 bg-light-1 light-5 padding-5  border-radius-8 border-theme-main-3 ">13/07 2020 18:41</div>
                    
           </div>
               
        </div>
            
               <div id="bg-picture" className=" border-8 w-200 h-200 background-size-100perc margin-t-100 margin-l-100 absolute right-10-perc top-30-perc relative" style={{ backgroundImage: `url("https://trello-attachments.s3.amazonaws.com/5f02c0eeff71034fce9f2f54/5f0c8efa8634266cefa0a11f/568ef4633bf65dee13204339abb8042e/main-bg.jpg")`}}><span id="text-above-picture"className="theme-main-4 absolute right-50 bottom-100-perc">Za Korisnika</span></div>

         </div>

               <div id="button-dodaj-podsjetnik" className="margin-t-30 w-50-perc h-40 border-1 bg-light-4 theme-main-4 padding-5  border-radius-8 bold text-center pointer">Dodaj podsjetnik
         </div>

               
               
         </div>
            
        </div>);
    }
}